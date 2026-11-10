import fs from "fs";

const batchPath = process.argv[2];
const loc = process.argv[3] || "de";
const strip = (s) => s.replace(/^\uFEFF/, "");
const read = (p) => JSON.parse(strip(fs.readFileSync(p, "utf8")));

const en = read("scripts/tours-en.json");
const target = `src/i18n/tours-${loc}.json`;
const cur = fs.existsSync(target) ? read(target) : {};
const batch = read(batchPath);
let bad = 0;

for (const [slug, tr] of Object.entries(batch)) {
  const e = en[slug];
  if (!e) { console.log("UNKNOWN SLUG:", slug); bad++; continue; }
  const problems = [];
  for (const k of Object.keys(e)) if (!(k in tr)) problems.push("missing " + k);
  for (const k of ["highlights", "included", "excluded", "optionalExperiences", "tourFaqs", "itinerary"]) {
    if (Array.isArray(e[k]) && (!Array.isArray(tr[k]) || tr[k].length !== e[k].length)) problems.push(k + " length");
  }
  if (Array.isArray(e.itinerary) && Array.isArray(tr.itinerary)) {
    e.itinerary.forEach((d, i) => {
      const t = tr.itinerary[i];
      if (t && (t.points || []).length !== (d.points || []).length) problems.push("day " + (i + 1) + " points");
    });
  }
  if (problems.length) { console.log("PROBLEM:", slug, "-", problems.join("; ")); bad++; }
  else { cur[slug] = tr; console.log("merged:", slug); }
}

fs.writeFileSync(target, JSON.stringify(cur, null, 2) + "\n", "utf8");
console.log(bad ? "done with " + bad + " problem(s)" : "done, all ok", "| total tours in file:", Object.keys(cur).length);