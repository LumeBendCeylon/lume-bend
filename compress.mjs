import sharp from "sharp";
import fs from "fs";
import path from "path";

const MAX_WIDTH = 2000;
const MIN_SIZE = 500 * 1024;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

for (const file of walk("public")) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  try {
    const input = fs.readFileSync(file);
    const before = input.length;
    if (before < MIN_SIZE) continue;

    let img = sharp(input).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true });
    img = ext === ".png"
      ? img.png({ compressionLevel: 9 })
      : img.jpeg({ quality: 80, mozjpeg: true });

    const buf = await img.toBuffer();
    if (buf.length < before) {
      fs.writeFileSync(file, buf);
      console.log(`${file}: ${(before / 1048576).toFixed(2)}MB -> ${(buf.length / 1048576).toFixed(2)}MB`);
    }
  } catch (err) {
    console.log(`SKIPPED ${file}: ${err.code || err.message}`);
  }
}