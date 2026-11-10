import fs from "fs";

const p = "src/app/[locale]/tours/[slug]/page.tsx";
let text = fs.readFileSync(p, "utf8");
const W = "[\\s\\u200b\\u00a0]*";

const fixes = [
  [new RegExp(`Tour${W}Includes`), '{t("tourIncludes")}'],
  [new RegExp(`Per${W}person${W}on${W}double${W}sharing${W}basis`), '{t("perPersonDouble")}'],
  [new RegExp(`Click${W}here${W}to${W}send${W}an${W}inquiry`), '{t("clickInquiry")}'],
];

for (const [re, to] of fixes) {
  const m = text.match(re);
  console.log(m ? "FOUND" : "NOT FOUND", re.source.slice(0, 30));
  if (m) text = text.replace(re, to);
}

fs.writeFileSync(p, text, "utf8");
console.log("done");