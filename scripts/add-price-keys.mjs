import fs from "fs";

const keys = {
  en: { from: "From", perPerson: "pp" },
  de: { from: "Ab", perPerson: "p. P." },
  fr: { from: "À partir de", perPerson: "par pers." },
  ru: { from: "От", perPerson: "с чел." },
  zh: { from: "起价", perPerson: "/人" },
};

for (const [loc, k] of Object.entries(keys)) {
  const p = `messages/${loc}.json`;
  const m = JSON.parse(fs.readFileSync(p, "utf8").replace(/^\uFEFF/, ""));
  m.TourCard = { ...m.TourCard, ...k };
  fs.writeFileSync(p, JSON.stringify(m, null, 2) + "\n", "utf8");
  console.log(loc, "ok");
}