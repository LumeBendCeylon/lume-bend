import fs from "node:fs";

const KEY = process.env.ANTHROPIC_API_KEY;
if (!KEY) { console.error("ANTHROPIC_API_KEY set karala naha"); process.exit(1); }

const LANGS = { de: "German", fr: "French", ru: "Russian", zh: "Simplified Chinese" };
const [, , onlyLang, limitArg] = process.argv;
const limit = limitArg ? Number(limitArg) : Infinity;
const en = JSON.parse(fs.readFileSync("scripts/tours-en.json", "utf8"));

const same = (a, b) => {
  if (typeof a !== typeof b) return false;
  if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every((x, i) => same(x, b[i]));
  if (a && typeof a === "object") {
    const k = Object.keys(a);
    return k.length === Object.keys(b).length && k.every((x) => x in b && same(a[x], b[x]));
  }
  return true;
};

async function translate(obj, lang) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({
      model: "claude-sonnet-5-5",
      max_tokens: 16000,
      system:
        `You translate Sri Lanka travel-tour website copy from English to ${lang}. ` +
        `Input is JSON. Return ONLY valid JSON with exactly the same keys, nesting and array lengths; translate string values only. ` +
        `Keep place names, hotel names and proper nouns (e.g. Sigiriya, Ella, Yala) in their usual form in ${lang}. ` +
        `Keep the "Label: description" pattern in bullet points. Natural, polished marketing tone. No commentary, no markdown fences.`,
      messages: [{ role: "user", content: JSON.stringify(obj) }],
    }),
  });
  if (!r.ok) throw new Error(r.status + " " + (await r.text()));
  const d = await r.json();
  if (d.stop_reason === "max_tokens") throw new Error("output truncated");
  const txt = d.content.map((c) => c.text || "").join("").replace(/```json|```/g, "").trim();
  return JSON.parse(txt);
}

for (const [code, lang] of Object.entries(LANGS)) {
  if (onlyLang && onlyLang !== code) continue;
  const file = `scripts/tours-${code}.json`;
  const out = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
  let done = 0;
  for (const [slug, obj] of Object.entries(en)) {
    if (out[slug]) continue;
    if (done >= limit) break;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const res = await translate(obj, lang);
        if (!same(obj, res)) throw new Error("structure mismatch");
        out[slug] = res;
        fs.writeFileSync(file, JSON.stringify(out, null, 2));
        console.log(code, slug, "ok");
        done++;
        break;
      } catch (e) {
        console.log(code, slug, "attempt", attempt, "failed:", e.message.slice(0, 120));
        if (attempt === 3) console.log("  -> skipped, run again later");
      }
    }
  }
}
console.log("finished");