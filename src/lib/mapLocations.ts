// Real coordinates (lat/lng) for tour stops, used by RouteMap.tsx (Leaflet).
// x/y are kept for the old stylised SVG map in case anything else still uses them.

export type MapLocation = { x: number; y: number; lat: number; lng: number };

export const MAP_LOCATIONS: Record<string, MapLocation> = {
  Colombo: { x: 95, y: 330, lat: 6.9271, lng: 79.8612 },
  Negombo: { x: 90, y: 290, lat: 7.2083, lng: 79.8358 },
  "Bandaranaike Airport": { x: 92, y: 300, lat: 7.1808, lng: 79.8841 },
  Bentota: { x: 105, y: 380, lat: 6.426, lng: 79.9953 },
  Hikkaduwa: { x: 112, y: 425, lat: 6.1395, lng: 80.1063 },
  Galle: { x: 120, y: 460, lat: 6.0329, lng: 80.2168 },
  Unawatuna: { x: 125, y: 465, lat: 6.01, lng: 80.25 },
  Mirissa: { x: 140, y: 480, lat: 5.9483, lng: 80.4716 },
  Hiriketiya: { x: 160, y: 485, lat: 5.964, lng: 80.699 },
  Tangalle: { x: 175, y: 480, lat: 6.024, lng: 80.794 },
  Hambantota: { x: 200, y: 460, lat: 6.1241, lng: 81.1185 },
  Tissamaharama: { x: 215, y: 430, lat: 6.2833, lng: 81.2872 },
  Matale: { x: 150, y: 210, lat: 7.4675, lng: 80.6234 },
  Dambulla: { x: 165, y: 190, lat: 7.8731, lng: 80.6518 },
  Sigiriya: { x: 178, y: 175, lat: 7.957, lng: 80.7603 },
  Habarana: { x: 170, y: 160, lat: 8.0391, lng: 80.75 },
  Minneriya: { x: 185, y: 160, lat: 8.03, lng: 80.89 },
  Polonnaruwa: { x: 205, y: 165, lat: 7.9403, lng: 81.0188 },
  Anuradhapura: { x: 150, y: 130, lat: 8.3114, lng: 80.4037 },
  Wilpattu: { x: 130, y: 120, lat: 8.45, lng: 80.0 },
  Jaffna: { x: 150, y: 50, lat: 9.6615, lng: 80.0255 },
  Trincomalee: { x: 220, y: 110, lat: 8.5874, lng: 81.2152 },
  Pinnawala: { x: 140, y: 270, lat: 7.301, lng: 80.389 },
  Kandy: { x: 160, y: 250, lat: 7.2906, lng: 80.6337 },
  Kitulgala: { x: 135, y: 300, lat: 6.989, lng: 80.417 },
  "Nuwara Eliya": { x: 175, y: 290, lat: 6.9497, lng: 80.7891 },
  Haputale: { x: 195, y: 325, lat: 6.7667, lng: 80.95 },
  Ella: { x: 205, y: 320, lat: 6.8667, lng: 81.0466 },
  "Arugam Bay": { x: 250, y: 330, lat: 6.84, lng: 81.835 },
  Udawalawe: { x: 190, y: 400, lat: 6.439, lng: 80.887 },
  Yala: { x: 235, y: 400, lat: 6.3725, lng: 81.5185 },
};

// Other spellings people may type in "Destinations covered" -> official key above.
const ALIASES: Record<string, string> = {
  airport: "Bandaranaike Airport",
  "colombo airport": "Bandaranaike Airport",
  "colombo bandaranaike airport": "Bandaranaike Airport",
  "bandaranaike international airport": "Bandaranaike Airport",
  cmb: "Bandaranaike Airport",
  bia: "Bandaranaike Airport",
  udawalawa: "Udawalawe",
  "udawalawe national park": "Udawalawe",
  "yala national park": "Yala",
  "yala national": "Yala",
  nuwaraeliya: "Nuwara Eliya",
  "nuwara-eliya": "Nuwara Eliya",
  hiriketiya: "Hiriketiya",
  "hiriketiya beach": "Hiriketiya",
  tissa: "Tissamaharama",
  tissamaharama: "Tissamaharama",
  tissamaharamaya: "Tissamaharama",
  "sigiriya rock": "Sigiriya",
  "kandy city": "Kandy",
  "galle fort": "Galle",
  "cultural triangle": "Sigiriya",
  "hill country": "Nuwara Eliya",
  "hill county": "Nuwara Eliya",
  "golden triangle": "Sigiriya",
};

export type ResolvedStop = { name: string; lat: number; lng: number };

/** Finds a stop by name (case-insensitive, supports aliases). Returns null if unknown. */
export function findLocation(raw: string): ResolvedStop | null {
  const key = raw.trim().toLowerCase();
  if (!key) return null;

  const direct = Object.keys(MAP_LOCATIONS).find((k) => k.toLowerCase() === key);
  const aliasKey = ALIASES[key];
  const name = direct ?? aliasKey;
  if (name && MAP_LOCATIONS[name]) {
    return { name, lat: MAP_LOCATIONS[name].lat, lng: MAP_LOCATIONS[name].lng };
  }

  // Loose match: "Kandy (2 nights)" or "Sigiriya Rock Fortress"
  const loose = Object.keys(MAP_LOCATIONS).find((k) => key.includes(k.toLowerCase()));
  if (loose) {
    return { name: loose, lat: MAP_LOCATIONS[loose].lat, lng: MAP_LOCATIONS[loose].lng };
  }
  return null;
}

/** Parses a "Colombo → Sigiriya → Dambulla → Kandy" string into an ordered stop list. */
export function parseRoute(destinationsCovered?: string): string[] {
  if (!destinationsCovered) return [];
  return destinationsCovered
    .split(/→|->|>|,|\|/)
    .map((s) => s.trim())
    .filter(Boolean);
}