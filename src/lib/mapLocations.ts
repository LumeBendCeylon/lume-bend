// Approximate (x, y) positions for common tour stops, plotted on the
// 300x520 viewBox used by RouteMap.tsx's simplified island outline.
// Coordinates are stylised for a clean map illustration, not surveyed GPS —
// good enough to show a believable route shape at a glance.

export const MAP_LOCATIONS: Record<string, { x: number; y: number }> = {
  Colombo: { x: 95, y: 330 },
  Negombo: { x: 90, y: 290 },
  "Bandaranaike Airport": { x: 92, y: 300 },
  Bentota: { x: 105, y: 380 },
  Galle: { x: 120, y: 460 },
  Mirissa: { x: 140, y: 480 },
  Matale: { x: 150, y: 210 },
  Dambulla: { x: 165, y: 190 },
  Sigiriya: { x: 178, y: 175 },
  Habarana: { x: 170, y: 160 },
  Polonnaruwa: { x: 205, y: 165 },
  Anuradhapura: { x: 150, y: 130 },
  Kandy: { x: 160, y: 250 },
  "Nuwara Eliya": { x: 175, y: 290 },
  Ella: { x: 205, y: 320 },
  Yala: { x: 235, y: 400 },
  Udawalawe: { x: 190, y: 400 },
  Trincomalee: { x: 220, y: 110 },
};

/** Parses a "Colombo → Sigiriya → Dambulla → Kandy" string into an ordered stop list. */
export function parseRoute(destinationsCovered?: string): string[] {
  if (!destinationsCovered) return [];
  return destinationsCovered
    .split(/→|->/)
    .map((s) => s.trim())
    .filter(Boolean);
}
