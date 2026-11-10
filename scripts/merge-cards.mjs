import fs from "fs";

const locales = ["en", "de", "fr", "ru", "zh"];
const strip = (s) => s.replace(/^\uFEFF/, "");

for (const loc of locales) {
  const cards = JSON.parse(strip(fs.readFileSync(`scripts/tours-cards-${loc}.json`, "utf8")));
  const msgPath = `messages/${loc}.json`;
  const msgs = JSON.parse(strip(fs.readFileSync(msgPath, "utf8")));

  msgs.Tours = msgs.Tours || {};
  msgs.Tours.items = msgs.Tours.items || {};

  for (const [slug, c] of Object.entries(cards)) {
    const hl = {};
    c.highlights.forEach((h, i) => { hl[i] = h; });
    msgs.Tours.items[slug] = {
      ...(msgs.Tours.items[slug] || {}),
      title: c.title,
      blurb: c.blurb,
      duration: c.duration,
      highlights: hl,
    };
  }

  fs.writeFileSync(msgPath, JSON.stringify(msgs, null, 2) + "\n", "utf8");
  console.log(loc, Object.keys(cards).length, "tours merged");
}