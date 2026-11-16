const fs = require("fs");
const p = "messages/en.json";
const j = JSON.parse(fs.readFileSync(p, "utf8"));
j.experiences = {
  title: "Made to Be Lived",
  adventure: { title: "Adventure", cta: "Explore Adventures" },
  culture: { title: "Culture", cta: "Discover Culture" },
  relaxation: { title: "Relaxation", cta: "Plan Your Escape" },
  beach: { title: "Beach", cta: "Find Your Beach" },
  nature: { title: "Nature", cta: "Explore Nature" },
  romance: { title: "Romance", cta: "Plan a Getaway" },
  wildlife: { title: "Wildlife", cta: "See Wildlife" },
  food: { title: "Food", cta: "Taste Sri Lanka" },
  heritage: { title: "Heritage", cta: "Explore Heritage" },
  wellness: { title: "Wellness", cta: "Find Wellness" },
};
fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n", "utf8");
console.log("done");