const fs = require("fs");

const data = {
  en: {
    title: "Made to Be Lived",
    adventure: ["Adventure", "Explore Adventures"],
    culture: ["Culture", "Discover Culture"],
    relaxation: ["Relaxation", "Plan Your Escape"],
    beach: ["Beach", "Find Your Beach"],
    nature: ["Nature", "Explore Nature"],
    romance: ["Romance", "Plan a Getaway"],
    wildlife: ["Wildlife", "See Wildlife"],
    food: ["Food", "Taste Sri Lanka"],
    heritage: ["Heritage", "Explore Heritage"],
    wellness: ["Wellness", "Find Wellness"],
  },
  de: {
    title: "Zum Erleben gemacht",
    adventure: ["Abenteuer", "Abenteuer entdecken"],
    culture: ["Kultur", "Kultur entdecken"],
    relaxation: ["Entspannung", "Auszeit planen"],
    beach: ["Strand", "Ihren Strand finden"],
    nature: ["Natur", "Natur erkunden"],
    romance: ["Romantik", "Reise planen"],
    wildlife: ["Tierwelt", "Tiere erleben"],
    food: ["Kulinarik", "Sri Lanka schmecken"],
    heritage: ["Erbe", "Erbe entdecken"],
    wellness: ["Wellness", "Wellness finden"],
  },
  fr: {
    title: "Fait pour être vécu",
    adventure: ["Aventure", "Explorer l'aventure"],
    culture: ["Culture", "Découvrir la culture"],
    relaxation: ["Détente", "Planifier votre escapade"],
    beach: ["Plage", "Trouver votre plage"],
    nature: ["Nature", "Explorer la nature"],
    romance: ["Romance", "Planifier une escapade"],
    wildlife: ["Faune", "Voir la faune"],
    food: ["Gastronomie", "Goûter le Sri Lanka"],
    heritage: ["Patrimoine", "Explorer le patrimoine"],
    wellness: ["Bien-être", "Trouver le bien-être"],
  },
  ru: {
    title: "Создано, чтобы жить",
    adventure: ["Приключения", "Открыть приключения"],
    culture: ["Культура", "Открыть культуру"],
    relaxation: ["Отдых", "Спланировать отдых"],
    beach: ["Пляж", "Найти свой пляж"],
    nature: ["Природа", "Исследовать природу"],
    romance: ["Романтика", "Спланировать поездку"],
    wildlife: ["Дикая природа", "Увидеть дикую природу"],
    food: ["Кухня", "Попробовать Шри-Ланку"],
    heritage: ["Наследие", "Исследовать наследие"],
    wellness: ["Велнес", "Найти велнес"],
  },
  zh: {
    title: "为体验而生",
    adventure: ["探险", "探索探险之旅"],
    culture: ["文化", "探索文化"],
    relaxation: ["放松", "规划您的度假"],
    beach: ["海滩", "寻找您的海滩"],
    nature: ["自然", "探索自然"],
    romance: ["浪漫", "规划浪漫之旅"],
    wildlife: ["野生动物", "观赏野生动物"],
    food: ["美食", "品味斯里兰卡"],
    heritage: ["遗产", "探索遗产"],
    wellness: ["养生", "寻找养生之旅"],
  },
};

for (const [lang, d] of Object.entries(data)) {
  const p = `messages/${lang}.json`;
  const j = JSON.parse(fs.readFileSync(p, "utf8"));
  const block = { title: d.title };
  for (const k of Object.keys(d)) {
    if (k === "title") continue;
    block[k] = { title: d[k][0], cta: d[k][1] };
  }
  j.experiences = block;
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n", "utf8");
  console.log(lang + ": done");
}