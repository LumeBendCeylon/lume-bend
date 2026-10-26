import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const src = path.join(root, "scripts", "about-translations.json");
const translations = JSON.parse(fs.readFileSync(src, "utf8"));

for (const [locale, about] of Object.entries(translations)) {
  const file = path.join(root, "messages", `${locale}.json`);
  const current = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : {};
  current.About = about; // only About is replaced, Common/Nav/Footer stay
  fs.writeFileSync(file, JSON.stringify(current, null, 2) + "\n", "utf8");
  console.log(`Updated: messages/${locale}.json`);
}