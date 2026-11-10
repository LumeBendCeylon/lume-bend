import fs from "fs";

const keys = {
  en: {
    home: "Home", tours: "Tours", duration: "Duration", tourType: "Tour Type",
    overview: "Overview", bestFor: "Best For", physicalLevel: "Physical Level",
    groupSize: "Group Size", allTravellers: "All travellers", moderate: "Moderate",
    customisable: "Customisable", detailItinerary: "Detail Itinerary",
    dayLabel: "Day {n}", overnight: "Overnight", routeMap: "Tour Route Map",
    tourIncludes: "Tour Includes", tourExcludes: "Tour Excludes",
    hotelRecommendation: "Hotel Recommendation", transportation: "Transportation",
    meals: "Meals", optionalExperiences: "Optional Experiences",
    faq: "Frequently Asked Questions", allYearRound: "All Year Round",
    startingFrom: "Starting From", perPersonDouble: "Per person on double sharing basis",
    interested: "Interested?", clickInquiry: "Click here to send an inquiry",
    tourHighlights: "Tour Highlights", startPlanning: "Start Planning Your Sri Lanka Tour",
    planIntro: "Please give as much information as you can so that we can get a good idea about your requirements. Our team will send you the best quote within 48 hours.",
  },
  de: {
    home: "Startseite", tours: "Touren", duration: "Dauer", tourType: "Tourenart",
    overview: "Überblick", bestFor: "Ideal für", physicalLevel: "Körperliche Anforderung",
    groupSize: "Gruppengröße", allTravellers: "Alle Reisenden", moderate: "Mittel",
    customisable: "Individuell anpassbar", detailItinerary: "Detaillierte Reiseroute",
    dayLabel: "Tag {n}", overnight: "Übernachtung", routeMap: "Routenkarte",
    tourIncludes: "Inklusivleistungen", tourExcludes: "Nicht inbegriffen",
    hotelRecommendation: "Hotelempfehlung", transportation: "Transport",
    meals: "Mahlzeiten", optionalExperiences: "Optionale Erlebnisse",
    faq: "Häufig gestellte Fragen", allYearRound: "Ganzjährig",
    startingFrom: "Ab", perPersonDouble: "Pro Person im Doppelzimmer",
    interested: "Interessiert?", clickInquiry: "Hier klicken, um eine Anfrage zu senden",
    tourHighlights: "Tour-Highlights", startPlanning: "Planen Sie jetzt Ihre Sri-Lanka-Reise",
    planIntro: "Bitte geben Sie so viele Informationen wie möglich an, damit wir uns ein gutes Bild von Ihren Wünschen machen können. Unser Team sendet Ihnen innerhalb von 48 Stunden das beste Angebot.",
  },
  fr: {
    home: "Accueil", tours: "Circuits", duration: "Durée", tourType: "Type de circuit",
    overview: "Aperçu", bestFor: "Idéal pour", physicalLevel: "Niveau physique",
    groupSize: "Taille du groupe", allTravellers: "Tous les voyageurs", moderate: "Modéré",
    customisable: "Personnalisable", detailItinerary: "Itinéraire détaillé",
    dayLabel: "Jour {n}", overnight: "Nuit", routeMap: "Carte de l’itinéraire",
    tourIncludes: "Le circuit comprend", tourExcludes: "Le circuit ne comprend pas",
    hotelRecommendation: "Hôtel recommandé", transportation: "Transport",
    meals: "Repas", optionalExperiences: "Expériences optionnelles",
    faq: "Questions fréquentes", allYearRound: "Toute l’année",
    startingFrom: "À partir de", perPersonDouble: "Par personne, base chambre double",
    interested: "Intéressé(e) ?", clickInquiry: "Cliquez ici pour envoyer une demande",
    tourHighlights: "Points forts du circuit", startPlanning: "Commencez à planifier votre voyage au Sri Lanka",
    planIntro: "Donnez-nous autant d’informations que possible afin que nous puissions bien cerner vos besoins. Notre équipe vous enverra le meilleur devis sous 48 heures.",
  },
  ru: {
    home: "Главная", tours: "Туры", duration: "Продолжительность", tourType: "Тип тура",
    overview: "Обзор", bestFor: "Подходит для", physicalLevel: "Физическая подготовка",
    groupSize: "Размер группы", allTravellers: "Всем путешественникам", moderate: "Средняя",
    customisable: "Индивидуально", detailItinerary: "Подробная программа",
    dayLabel: "День {n}", overnight: "Ночёвка", routeMap: "Карта маршрута",
    tourIncludes: "В стоимость входит", tourExcludes: "В стоимость не входит",
    hotelRecommendation: "Рекомендуемый отель", transportation: "Транспорт",
    meals: "Питание", optionalExperiences: "Дополнительные впечатления",
    faq: "Часто задаваемые вопросы", allYearRound: "Круглый год",
    startingFrom: "Цена от", perPersonDouble: "На человека при двухместном размещении",
    interested: "Заинтересовались?", clickInquiry: "Нажмите, чтобы отправить запрос",
    tourHighlights: "Главное в туре", startPlanning: "Начните планировать поездку на Шри-Ланку",
    planIntro: "Сообщите как можно больше информации, чтобы мы лучше поняли ваши пожелания. Наша команда пришлёт вам лучшее предложение в течение 48 часов.",
  },
  zh: {
    home: "首页", tours: "行程", duration: "行程时长", tourType: "行程类型",
    overview: "概览", bestFor: "适合人群", physicalLevel: "体力要求",
    groupSize: "团队规模", allTravellers: "所有旅行者", moderate: "中等",
    customisable: "可定制", detailItinerary: "详细行程",
    dayLabel: "第{n}天", overnight: "住宿", routeMap: "行程路线图",
    tourIncludes: "费用包含", tourExcludes: "费用不含",
    hotelRecommendation: "推荐酒店", transportation: "交通",
    meals: "餐食", optionalExperiences: "可选体验",
    faq: "常见问题", allYearRound: "全年可行",
    startingFrom: "起价", perPersonDouble: "每人（双人同住）",
    interested: "感兴趣吗？", clickInquiry: "点击此处发送咨询",
    tourHighlights: "行程亮点", startPlanning: "开始规划您的斯里兰卡之旅",
    planIntro: "请尽可能提供详细信息，以便我们了解您的需求。我们的团队将在48小时内为您发送最优报价。",
  },
};

for (const [loc, k] of Object.entries(keys)) {
  const p = `messages/${loc}.json`;
  const m = JSON.parse(fs.readFileSync(p, "utf8").replace(/^\uFEFF/, ""));
  m.TourDetail = { ...(m.TourDetail || {}), ...k };
  fs.writeFileSync(p, JSON.stringify(m, null, 2) + "\n", "utf8");
  console.log(loc, "ok");
}