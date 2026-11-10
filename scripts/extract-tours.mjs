import { tours } from "../src/lib/data.ts";
import fs from "node:fs";

// translate karanna oni naha fields
const SKIP = new Set(["slug", "category", "price", "motif", "imageUrl", "day"]);

const pick = (v) => {
  if (typeof v === "string") return v.trim() ? v : undefined;
  if (Array.isArray(v)) {
    const a = v.map(pick);
    return a.some((x) => x !== undefined) ? a.map((x) => x ?? "") : undefined;
  }
  if (v && typeof v === "object") {
    const o = {};
    for (const [k, x] of Object.entries(v)) {
      if (SKIP.has(k)) continue;
      const r = pick(x);
      if (r !== undefined) o[k] = r;
    }
    return Object.keys(o).length ? o : undefined;
  }
  return undefined;
};

const out = {};
for (const t of tours) out[t.slug] = pick(t) ?? {};

fs.writeFileSync("scripts/tours-en.json", JSON.stringify(out, null, 2));
const chars = JSON.stringify(out).length;
console.log("tours:", tours.length, "| characters:", chars);