import fs from "node:fs";
import path from "node:path";

const input = process.argv[2];
if (!input) {
  console.error("Usage: node scripts/merge-translations.mjs scripts/<file>.json");
  process.exit(1);
}

const root = process.cwd();
const translations = JSON.parse(
  fs.readFileSync(path.resolve(root, input), "utf8")
);

const isObject = (v) => v && typeof v === "object" && !Array.isArray(v);

function deepMerge(target, source) {
  for (const [key, value] of Object.entries(source)) {
    if (isObject(value) && isObject(target[key])) {
      deepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  }
  return target;
}

for (const [locale, data] of Object.entries(translations)) {
  const file = path.join(root, "messages", `${locale}.json`);
  const current = fs.existsSync(file)
    ? JSON.parse(fs.readFileSync(file, "utf8"))
    : {};
  deepMerge(current, data);
  fs.writeFileSync(file, JSON.stringify(current, null, 2) + "\n", "utf8");
  console.log(`Updated: messages/${locale}.json`);
}