"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { findLocation, parseRoute, type ResolvedStop } from "@/lib/mapLocations";

export default function RouteMap({ destinationsCovered }: { destinationsCovered?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawStops = parseRoute(destinationsCovered);
  const stops: ResolvedStop[] = rawStops
    .map((s) => findLocation(s))
    .filter((s): s is ResolvedStop => s !== null);

  const stopsKey = stops.map((s) => s.name).join("|");

  useEffect(() => {
    if (!containerRef.current || stops.length === 0) return;

    let cancelled = false;
    let mapInstance: import("leaflet").Map | null = null;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      });
      mapInstance = map;

           L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      const latlngs = stops.map((s) => L.latLng(s.lat, s.lng));

      // Numbered markers
      stops.forEach((s, i) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="width:30px;height:30px;border-radius:9999px;background:#0f3d2e;color:#d4af37;border:2px solid #d4af37;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;box-shadow:0 2px 6px rgba(0,0,0,.35)">${i + 1}</div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });
        L.marker([s.lat, s.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong>Stop ${i + 1}</strong><br/>${s.name}`);
      });

      if (latlngs.length > 1) {
        // Draw a straight dashed line first (instant), then replace with the real road route.
        const fallback = L.polyline(latlngs, {
          color: "#2563eb",
          weight: 4,
          opacity: 0.7,
          dashArray: "8 8",
        }).addTo(map);

        map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40] });

        try {
          const coords = stops.map((s) => `${s.lng},${s.lat}`).join(";");
          const res = await fetch(
            `https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`,
          );
          if (!res.ok) throw new Error("routing failed");
          const data = await res.json();
          const geometry = data?.routes?.[0]?.geometry;
          if (!geometry || cancelled) return;

          map.removeLayer(fallback);
          const road = L.geoJSON(geometry, {
            style: { color: "#2563eb", weight: 6, opacity: 0.9 },
          }).addTo(map);
          map.fitBounds(road.getBounds(), { padding: [40, 40] });
        } catch (err) {
          console.error("Road route unavailable, showing straight line", err);
        }
      } else {
        map.setView(latlngs[0], 10);
      }
    })();

    return () => {
      cancelled = true;
      if (mapInstance) mapInstance.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stopsKey]);

  if (stops.length === 0) {
    return (
      <div className="rounded-2xl border border-forest/10 bg-mist p-6 text-center text-sm text-ink/50">
        Add matching location names to lib/mapLocations.ts to plot this route.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-forest/10 bg-mist">
      <div ref={containerRef} className="h-[360px] w-full sm:h-[460px]" />
      <ol className="flex flex-wrap gap-x-4 gap-y-1 border-t border-forest/10 px-4 py-3 text-xs text-ink/70">
        {stops.map((s, i) => (
          <li key={`${s.name}-${i}`}>
            <span className="font-semibold text-forest-dark">{i + 1}.</span> {s.name}
          </li>
        ))}
      </ol>
    </div>
  );
}