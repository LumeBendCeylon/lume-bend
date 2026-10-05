// Original line-art "island silhouette" motifs — Golden Palm Ceylon's visual
// signature in place of stock photography until real photography is added.
// Each motif corresponds to a landscape type (rock fortress, hills, temple,
// coastline, rainforest, sunrise) referenced by `motif` fields in lib/data.ts.

type MotifKey = "mountain" | "wave" | "temple" | "rock" | "leaf" | "sun";

const PATHS: Record<MotifKey, string> = {
  mountain:
    "M0 70 L18 42 L30 55 L48 24 L64 46 L78 30 L100 70 Z",
  wave:
    "M0 55 C 14 40, 24 40, 38 55 C 52 70, 62 70, 76 55 C 88 42, 94 42, 100 50 L100 80 L0 80 Z",
  temple:
    "M18 70 L18 46 L28 46 L28 36 L36 30 L44 36 L44 46 L54 46 L54 70 Z M60 70 L60 50 L68 50 L68 42 L74 38 L80 42 L80 50 L88 50 L88 70 Z",
  rock:
    "M0 72 L10 60 L20 64 L34 34 L44 48 L54 20 L68 50 L80 44 L100 72 Z",
  leaf:
    "M50 14 C 74 22, 82 44, 68 66 C 54 84, 26 84, 16 62 C 8 42, 26 18, 50 14 Z M50 14 C 46 34, 44 54, 30 70",
  sun:
    "M50 62 m-16 0 a16 16 0 1 0 32 0 a16 16 0 1 0 -32 0 M50 30 L50 22 M74 38 L80 32 M26 38 L20 32 M50 88 L50 96",
};

export default function Motif({
  motif,
  className = "",
  strokeWidth = 1.6,
}: {
  motif: MotifKey;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 96"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[motif]} />
    </svg>
  );
}
