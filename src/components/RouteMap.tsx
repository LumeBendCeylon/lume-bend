import { MAP_LOCATIONS, parseRoute } from "@/lib/mapLocations";

// A simplified, stylised outline of Sri Lanka — enough to be instantly
// recognisable without needing a licensed map tile or GPS-accurate survey.
const ISLAND_OUTLINE =
  "M110 40 C 150 35, 190 55, 205 90 C 225 100, 245 130, 240 165 " +
  "C 260 190, 250 230, 230 250 C 245 280, 235 310, 215 320 " +
  "C 225 350, 210 385, 185 395 C 190 420, 170 450, 150 460 " +
  "C 145 480, 120 495, 105 480 C 90 470, 95 440, 105 425 " +
  "C 80 410, 75 380, 90 360 C 70 340, 68 310, 85 290 " +
  "C 65 270, 68 230, 90 210 C 75 190, 78 150, 100 130 " +
  "C 85 110, 90 75, 115 60 C 108 52, 108 45, 110 40 Z";

export default function RouteMap({ destinationsCovered }: { destinationsCovered?: string }) {
  const stops = parseRoute(destinationsCovered).filter((s) => MAP_LOCATIONS[s]);

  return (
    <div className="overflow-hidden rounded-2xl border border-forest/10 bg-mist">
      <svg viewBox="0 0 300 520" className="mx-auto h-[420px] w-full max-w-xs py-6">
        {/* Island shape */}
        <path
          d={ISLAND_OUTLINE}
          fill="var(--color-forest)"
          fillOpacity={0.08}
          stroke="var(--color-forest)"
          strokeOpacity={0.4}
          strokeWidth={1.5}
        />

        {/* Route line connecting the stops in order */}
        {stops.length > 1 && (
          <polyline
            points={stops.map((s) => `${MAP_LOCATIONS[s].x},${MAP_LOCATIONS[s].y}`).join(" ")}
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth={2}
            strokeDasharray="6 5"
            strokeLinecap="round"
          />
        )}

        {/* Numbered pins */}
        {stops.map((s, i) => {
          const { x, y } = MAP_LOCATIONS[s];
          return (
            <g key={s}>
              <circle cx={x} cy={y} r={9} fill="var(--color-forest-dark)" stroke="var(--color-gold)" strokeWidth={1.5} />
              <text x={x} y={y + 3.5} textAnchor="middle" fontSize={9} fill="var(--color-gold)" fontWeight={700}>
                {i + 1}
              </text>
              <text
                x={x}
                y={y - 14}
                textAnchor="middle"
                fontSize={10}
                fill="var(--color-forest-dark)"
                fontWeight={600}
              >
                {s}
              </text>
            </g>
          );
        })}
      </svg>

      {stops.length === 0 && (
        <p className="pb-6 text-center text-sm text-ink/50">
          Add matching location names to lib/mapLocations.ts to plot this route.
        </p>
      )}
    </div>
  );
}
