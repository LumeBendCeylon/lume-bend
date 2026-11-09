// Central content source. Replace copy and figures with real business data.
// Swapping in real photography: give each `image` field a real /public path
// or remote URL once available — every component here already expects one.

export type ItineraryDay = {
  day: number;
  title: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  points?: string[];
  overnight: string;
  imageUrl?: string;
};

export type TourFAQ = { q: string; a: string };

export type Tour = {
  slug: string;
  title: string;
  // Loosened from a strict union to `string` so admin-added categories
  // (stored in Firestore, see lib/firebase.ts getCategories) can be used
  // here too. DEFAULT_CATEGORIES below lists the original 9 built-in ones.
  category: string;
  duration: string;
  highlights: string[];
  price: string;
  blurb: string;
  imageUrl?: string; // optional real photo URL; falls back to the Motif illustration when unset
  motif: "mountain" | "wave" | "temple" | "rock" | "leaf" | "romance" | "sun" | "wildlife" | "heritage";
  // Full package-detail fields (all optional — only populate the tours
  // that should have their own dedicated /tours/[slug] page; tours
  // without these fields simply won't render a "Full Itinerary" link).
  heroTitle?: string;
  intro?: string;
  overview?: string;
  bestFor?: string;
  groupSize?: string;
  physicalLevel?: string;
  destinationsCovered?: string;
  itinerary?: ItineraryDay[];
  hotelRecommendation?: string;
  transportation?: string;
  meals?: string;
  included?: string[];
  excluded?: string[];
  optionalExperiences?: string[];
  tourFaqs?: TourFAQ[];
};

export const DEFAULT_CATEGORIES: { name: string; motif: Tour["motif"]; imageUrl?: string }[] = [
  { name: "Luxury Tours", motif: "rock", imageUrl: "/documents/images/tour/luxery.png" },
  { name: "General Tours", motif: "sun", imageUrl: "/documents/images/tour/general.png" },
  { name: "Family Tours", motif: "leaf", imageUrl: "/documents/images/tour/family.png" },
  { name: "Adventure Tours", motif: "leaf", imageUrl: "/documents/images/tour/adventure.png" },
  { name: "Wildlife Tours", motif: "wildlife", imageUrl: "/documents/images/tour/wildlife.png" },
  { name: "Romantic & Honeymoon Tours", motif: "romance", imageUrl: "/documents/images/tour/couple.png" },
  { name: "Cultural Heritage Tours", motif: "temple", imageUrl: "/documents/images/tour/culture.png"  },
  { name: "Ramayana Tours", motif: "heritage", imageUrl: "/documents/images/tour/ramayana.png"},
];

export const tours: Tour[] = [

  {
    slug: "golden-grand-escape-5-day",
    title: "Golden Ceylon Escape",
    category: "Luxury Tours",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Private journey through Sri Lanka's Cultural Triangle",
      "Pinnawala elephant experience",
      "Sigiriya Rock Fortress and Dambulla Cave Temple",
      "Temple of the Sacred Tooth Relic",
      "Luxury chauffeur-guided touring",
    ],
    price: "From $1,999 pp",
    blurb:
      "Discover ancient fortresses, sacred temples and Sri Lanka's cultural heart on a privately guided five-day luxury escape.",
    motif: "rock",
    imageUrl: "/documents/images/tour/golden.png",

    heroTitle:
      "Golden Ceylon Escape — 5 Days of Private Luxury",

    intro:
      "Discover Sri Lanka's celebrated Cultural Triangle and hill capital on a private journey combining ancient heritage, wildlife encounters and refined hospitality. From Pinnawala's elephant experiences to Sigiriya's remarkable rock fortress and Kandy's sacred temple traditions, each day reveals a different side of the island. Enjoy a dedicated chauffeur, carefully selected five-star accommodation and a thoughtfully planned itinerary.",

    overview:
      "A short private circuit designed for travellers seeking Sri Lanka's essential cultural highlights in five days. The route connects Negombo, Pinnawala, Sigiriya, Dambulla, Kandy and Colombo with private transfers, guided sightseeing and luxury accommodation.",

    bestFor: "Couples, honeymooners and short-stay luxury travellers",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Easy to moderate, with an optional Sigiriya climb",
    destinationsCovered:
      "Negombo → Pinnawala → Sigiriya → Dambulla → Kandy → Colombo",

    itinerary: [
      {
        day: 1,
        title: "Arrival, Pinnawala & Sigiriya",
        points: [
          "Airport Welcome: Receive a traditional flower garland welcome at Bandaranaike International Airport (CMB).",
          "Private Chauffeur: Meet your English-speaking chauffeur-guide and receive luggage assistance.",
          "Pinnawala Elephant Experience: Visit Pinnawala and learn about elephant care and conservation. Activities depend on the venue's schedule and current conditions.",
          "Scenic Drive: Continue towards Sigiriya through Sri Lanka's countryside, with a refreshment stop.",
          "Hotel Check-in: Arrive at your luxury hotel, relax and enjoy dinner.",
        ],
        overnight: "Five-star luxury hotel in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya01.jpg",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Sigiriya Rock Fortress: Explore this UNESCO World Heritage Site and its ancient royal remains.",
          "Water Gardens: Discover the landscaped gardens and historic hydraulic engineering.",
          "Sigiriya Frescoes: View the celebrated frescoes and historic Mirror Wall.",
          "Lion's Paw Entrance: Explore the monumental gateway and climb towards the summit if desired.",
          "Panoramic Views: Admire the surrounding countryside, weather and fitness permitting.",
        ],
        overnight: "Five-star luxury hotel in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya02.jpg",
      },
      {
        day: 3,
        title: "Dambulla Cave Temple & Kandy",
        points: [
          "Breakfast & Check-out: Depart Sigiriya after breakfast.",
          "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, renowned for its Buddhist murals and statues.",
          "Cave Shrines: Discover the historic paintings and sacred interiors.",
          "Scenic Transfer: Travel through the central plains towards Kandy.",
          "Temple of the Sacred Tooth Relic: Visit this sacred temple in the UNESCO-listed Sacred City of Kandy.",
          "Kandy Lake: Enjoy a gentle lakeside walk before dinner.",
        ],
        overnight: "Five-star hotel in Kandy.",
        imageUrl: "/documents/images/tour/dambulla01.jpg",
      },
      {
        day: 4,
        title: "Kandy Heritage & Transfer to Colombo",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Kandy Exploration: Discover the city's cultural atmosphere and surrounding hills.",
          "Royal Botanical Gardens: Visit Peradeniya if opening times and the day's schedule permit.",
          "Lunch & Departure: Enjoy lunch before beginning the drive towards Colombo.",
          "Scenic Transfer: Travel through Sri Lanka's changing landscapes with a refreshment stop.",
          "Hotel Check-in: Arrive in Colombo and enjoy dinner at your hotel.",
        ],
        overnight: "Five-star hotel in Colombo.",
        imageUrl: "/documents/images/tour/kandy01.jpg",
      },
      {
        day: 5,
        title: "Colombo & Airport Departure",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Colombo City Highlights: Visit Independence Square or Galle Face Green, depending on flight time.",
          "Last-Minute Shopping: Browse for Ceylon tea and local souvenirs if time permits.",
          "Lunch: Enjoy lunch before the airport transfer.",
          "Private Transfer: Travel to Bandaranaike International Airport (CMB).",
          "Departure: Arrive with sufficient time for airline check-in.",
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo01.jpg",
      },
    ],

    hotelRecommendation:
      "Selected five-star properties in Sigiriya, Kandy and Colombo, chosen for attentive service, comfort, distinctive character and convenient access to the itinerary's main attractions.",

    transportation:
      "Private air-conditioned luxury vehicle with a dedicated English-speaking chauffeur-guide for airport transfers, intercity travel and scheduled sightseeing.",

    meals:
      "Breakfast, lunch and dinner daily from Day 1 to Day 4, plus breakfast and lunch on Day 5. Arrival-day meals depend on flight timing. Special dietary requirements should be advised in advance.",

    included: [
      "4 nights in selected five-star hotels",
      "Daily breakfast, lunch and dinner according to the stated meal plan",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Airport meet-and-greet with traditional flower garlands",
      "Pinnawala admission, subject to the selected visitor programme",
      "Sigiriya Rock Fortress entrance fee",
      "Dambulla Cave Temple entrance fee",
      "Temple of the Sacred Tooth Relic admission",
      "Entrance fees for any additional attractions explicitly confirmed in the final itinerary",
    ],

    excluded: [
      "International flights",
      "Sri Lankan visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Alcoholic beverages and premium drinks",
      "Optional activities not listed as included",
      "Spa treatments and room upgrades",
    ],

    optionalExperiences: [
      "Private guided sunrise climb at Sigiriya, subject to opening times",
      "Traditional Sri Lankan cooking experience",
      "Private Kandyan cultural performance",
      "In-hotel spa treatment",
      "Private dining experience at the hotel",
    ],

    tourFaqs: [
      {
        q: "Is the Sigiriya climb compulsory?",
        a: "No. Guests can explore the lower gardens and surrounding landscape without climbing to the summit. The climb involves many steps and may not suit every traveller.",
      },
      {
        q: "Are meals and entrance fees included?",
        a: "The package is designed to include daily breakfast, lunch and dinner and the entrance fees specifically listed in the confirmed itinerary.",
      },
      {
        q: "Can this tour be extended?",
        a: "Yes. Additional days can be arranged for the hill country, wildlife regions or southern coastline.",
      },
    ],
  },

  // =========================================================
  // 2. HIGHLANDS & ELLA LUXURY JOURNEY — 7 DAYS / 6 NIGHTS
  // Route: Sigiriya → Kandy → Nuwara Eliya → Ella → Colombo
  // =========================================================
  {
    slug: "highlands-ella-luxury-7-day",
    title: "Highlands & Ella Luxury Journey",
    category: "Luxury Tours",
    duration: "7 Days / 6 Nights",
    highlights: [
      "Sigiriya Rock Fortress",
      "Sacred City of Kandy",
      "Ceylon tea plantation and factory visit",
      "Scenic Nanu Oya to Ella railway journey",
      "Nine Arch Bridge and Ella viewpoints",
    ],
    price: "From $2,799 pp",
    blurb:
      "Journey from ancient rock citadels into misty tea country and Ella's spectacular highlands on a private luxury escape.",
    motif: "mountain",
    imageUrl: "/documents/images/tour/Sembuwatta Hidden Paradise.jpg",

    heroTitle: "Highlands & Ella Luxury Journey — 7 Days",

    intro:
      "Experience Sri Lanka's Cultural Triangle and central highlands through a private luxury journey combining ancient heritage, tea-country scenery and memorable railway landscapes. Discover Sigiriya, Kandy, Nuwara Eliya and Ella before returning to Colombo in the comfort of a dedicated chauffeur-driven vehicle.",

    overview:
      "A seven-day private journey focused on cultural landmarks and the scenic hill country. The itinerary allows time for the Sigiriya and Kandy heritage sites, tea estates, a highland train journey and Ella's iconic landscapes.",

    bestFor: "Couples, nature lovers and cultural luxury travellers",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Moderate, with optional hikes and rock climbs",
    destinationsCovered:
      "Sigiriya → Kandy → Nuwara Eliya → Ella → Colombo",

    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        points: [
          "Airport Welcome: Meet your chauffeur-guide at CMB with traditional flower garlands.",
          "Private Transfer: Travel to Sigiriya with a refreshment stop along the way.",
          "Hotel Check-in: Settle into your luxury resort.",
          "Afternoon at Leisure: Relax by the pool or enjoy the surrounding countryside.",
          "Dinner: Enjoy dinner at the hotel.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/negombe01.jpg",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Dambulla",
        points: [
          "Breakfast: Enjoy breakfast at the resort.",
          "Sigiriya Rock Fortress: Explore the UNESCO World Heritage Site, royal gardens and historic rock citadel.",
          "Frescoes and Lion's Paw: Discover the celebrated frescoes and monumental entrance.",
          "Dambulla Cave Temple: Visit the UNESCO-listed cave complex and its Buddhist murals and statues.",
          "Lunch & Return: Enjoy lunch and return to your resort.",
          "Evening at Leisure: Relax and enjoy dinner.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya02.jpg",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Drive: Travel towards Kandy through the central plains.",
          "Matale Spice Garden: Discover Sri Lankan spices and traditional herbal plants.",
          "Temple of the Sacred Tooth Relic: Visit the sacred temple in Kandy's UNESCO-listed historic city.",
          "Kandy Lake: Enjoy a peaceful walk beside the lake.",
          "Hotel Check-in: Enjoy dinner at your hotel.",
        ],
        overnight: "Five-star hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy03.jpg",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        points: [
          "Breakfast & Departure: Begin the scenic drive into the hill country.",
          "Tea Plantation: Visit a tea estate and learn about Ceylon tea cultivation.",
          "Tea Factory: Discover the traditional tea-making process.",
          "Tea Tasting: Sample freshly brewed Ceylon tea.",
          "Ramboda Falls: Stop to admire the waterfall and mountain scenery.",
          "Nuwara Eliya: Check in and enjoy a relaxed evening.",
        ],
        overnight: "Five-star hotel or luxury heritage property in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya02.jpg",
      },
      {
        day: 5,
        title: "Nuwara Eliya Highlands",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Colonial Town: Explore Nuwara Eliya's historic architecture and gardens.",
          "Gregory Lake: Enjoy lakeside scenery and optional activities.",
          "Tea Country Views: Explore nearby tea landscapes and mountain viewpoints.",
          "Lunch: Enjoy a relaxed lunch at a selected restaurant.",
          "Evening at Leisure: Return to the hotel for dinner and relaxation.",
        ],
        overnight: "Five-star hotel or luxury heritage property in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya03.jpg",
      },
      {
        day: 6,
        title: "Scenic Train Journey to Ella",
        points: [
          "Breakfast & Transfer: Travel to Nanu Oya Railway Station.",
          "Highland Railway: Enjoy the scenic train journey towards Ella, subject to train schedules and reserved-seat availability.",
          "Tea Plantations: Admire the rolling tea estates and mountain valleys along the route.",
          "Arrival in Ella: Meet your chauffeur at the station.",
          "Nine Arch Bridge: Visit the iconic railway bridge if time and arrival schedules permit.",
          "Hotel Check-in: Relax and enjoy dinner in Ella.",
        ],
        overnight: "Five-star or premium luxury hotel in Ella.",
        imageUrl: "/documents/images/tour/yala01.jpg",
      },
      {
        day: 7,
        title: "Ella to Colombo & Departure",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Ella Viewpoint: Enjoy a short scenic stop if time permits.",
          "Private Transfer: Begin the journey to Colombo or directly to CMB.",
          "Lunch: Enjoy lunch en route.",
          "Airport Arrival: Arrive with sufficient time for airline check-in.",
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo03.jpg",
      },
    ],

    hotelRecommendation:
      "Selected five-star and premium luxury properties in Sigiriya, Kandy, Nuwara Eliya and Ella, prioritising scenery, comfort, attentive service and convenient access to sightseeing.",

    transportation:
      "Private air-conditioned luxury vehicle with English-speaking chauffeur-guide. The Nanu Oya–Ella train journey is subject to railway schedules and reserved-seat availability.",

    meals:
      "Daily breakfast, lunch and dinner from Day 1 to Day 6, with breakfast and lunch on departure Day 7. Meals during travel are arranged at selected hotels and restaurants.",

    included: [
      "6 nights in selected five-star or premium luxury accommodation",
      "Daily breakfast, lunch and dinner according to the stated meal plan",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Sigiriya Rock Fortress entrance fee",
      "Dambulla Cave Temple entrance fee",
      "Temple of the Sacred Tooth Relic admission",
      "Tea factory visit and tasting where confirmed",
      "Nanu Oya–Ella train ticket in the confirmed class, subject to availability",
      "Entrance fees for other attractions specifically listed in the confirmed itinerary",
    ],

    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Alcoholic beverages",
      "Optional activities and spa treatments",
      "Train upgrades or alternative transport beyond the agreed package",
    ],

    optionalExperiences: [
      "Guided sunrise climb at Sigiriya",
      "Private tea-estate experience",
      "Little Adam's Peak guided walk",
      "Private dining experience in the hill country",
      "In-hotel wellness treatment",
    ],

    tourFaqs: [
      {
        q: "Is the Ella train journey guaranteed?",
        a: "Train travel depends on railway schedules and reserved-seat availability. A private road transfer can be arranged if train tickets are unavailable or services are disrupted.",
      },
      {
        q: "Does the itinerary include all meals?",
        a: "Yes. Breakfast, lunch and dinner are included according to the package meal plan. Drinks and premium dining supplements may cost extra.",
      },
      {
        q: "Can the journey be customised?",
        a: "Yes. Sightseeing, hotel categories and optional experiences can be adjusted to your interests and travel dates.",
      },
    ],
  },

  // =========================================================
  // 3. HIGHLANDS & WILDLIFE LUXURY TOUR — 8 DAYS / 7 NIGHTS
  // Route: Negombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Colombo
  // =========================================================
  {
    slug: "highlands-wildlife-luxury-8-day",
    title: "Highlands & Wildlife Luxury Escape",
    category: "Luxury Tours",
    duration: "8 Days / 7 Nights",
    highlights: [
      "Luxury arrival in Negombo",
      "Sigiriya and Dambulla heritage",
      "Kandy's sacred cultural landmarks",
      "Scenic tea-country railway journey",
      "Private Yala National Park safari",
    ],
    price: "From $3,299 pp",
    blurb:
      "Combine Sri Lanka's ancient heritage, misty tea hills and unforgettable wildlife landscapes in one private luxury journey.",
    motif: "wildlife",
    imageUrl: "/documents/images/tour/Knuckles Hidden Paradise.jpg",

    heroTitle: "Highlands & Wildlife Luxury Escape — 8 Days",

    intro:
      "Discover Sri Lanka through a carefully curated journey combining the Cultural Triangle, sacred Kandy, misty tea plantations, Ella's dramatic scenery and the wildlife of Yala National Park. Private transfers, luxury accommodation and planned sightseeing allow you to experience the island's contrasting landscapes in comfort.",

    overview:
      "An eight-day private circuit connecting Negombo with Sigiriya, Kandy, Nuwara Eliya, Ella and Yala before departure from Colombo. The route combines heritage sightseeing, tea-country experiences, scenic rail travel and a dedicated wildlife safari.",

    bestFor: "Couples, luxury travellers, wildlife enthusiasts and photographers",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Moderate, with optional hikes and rock climbs",
    destinationsCovered:
      "Negombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Colombo",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Negombo",
        points: [
          "Airport Welcome: Receive traditional flower garlands at CMB.",
          "Chauffeur Greeting: Meet your private chauffeur-guide and receive luggage assistance.",
          "Transfer to Negombo: Travel to your beachfront hotel.",
          "Hotel Check-in: Enjoy lunch and settle into your room.",
          "Coastal Relaxation: Spend the afternoon at leisure before dinner.",
        ],
        overnight: "Five-star beachfront hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo01.jpg",
      },
      {
        day: 2,
        title: "Negombo to Sigiriya",
        points: [
          "Breakfast & Check-out: Begin the journey to Sri Lanka's Cultural Triangle.",
          "Scenic Drive: Travel through rural landscapes with a refreshment stop.",
          "Lunch En Route: Enjoy lunch at a selected restaurant.",
          "Sigiriya Arrival: Check in to your luxury resort.",
          "Afternoon at Leisure: Relax and enjoy the resort's surroundings.",
          "Dinner: Enjoy a meal at the hotel.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/road01.jpg",
      },
      {
        day: 3,
        title: "Sigiriya Rock Fortress & Dambulla",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Sigiriya Rock Fortress: Explore the UNESCO World Heritage Site and its ancient royal landscape.",
          "Water Gardens: Discover the historic landscaped gardens and water features.",
          "Dambulla Cave Temple: Visit the UNESCO-listed complex of Buddhist caves, murals and statues.",
          "Lunch: Enjoy lunch during the sightseeing day.",
          "Evening at Leisure: Return to the resort for dinner and relaxation.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya01 (2).jpg",
      },
      {
        day: 4,
        title: "Sigiriya to Kandy",
        points: [
          "Breakfast & Departure: Travel towards Kandy.",
          "Matale Spice Garden: Learn about local spices and traditional herbal plants.",
          "Temple of the Sacred Tooth Relic: Visit the sacred temple in Kandy's UNESCO-listed city.",
          "Kandy Lake: Enjoy a gentle walk beside the lake.",
          "Lunch & Check-in: Enjoy lunch before checking in to the hotel.",
          "Evening at Leisure: Enjoy dinner and relax.",
        ],
        overnight: "Five-star hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy05.jpg",
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya",
        points: [
          "Breakfast: Depart after breakfast.",
          "Tea Country Drive: Admire mountain scenery and rolling tea estates.",
          "Tea Factory Visit: Discover the process behind Ceylon tea.",
          "Tea Tasting: Sample freshly brewed tea.",
          "Ramboda Falls: Stop to admire the waterfall, time permitting.",
          "Nuwara Eliya Check-in: Enjoy dinner and a relaxing evening.",
        ],
        overnight: "Five-star hotel or luxury heritage property in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya05.jpg",
      },
      {
        day: 6,
        title: "Nuwara Eliya to Ella",
        points: [
          "Breakfast & Transfer: Travel to Nanu Oya Railway Station.",
          "Scenic Train Journey: Travel through tea plantations and misty mountain scenery towards Ella, subject to train availability.",
          "Arrival in Ella: Meet your chauffeur at the railway station.",
          "Nine Arch Bridge: Visit the iconic railway bridge if timing permits.",
          "Ella Town: Explore the town or nearby viewpoints at a relaxed pace.",
          "Hotel Check-in: Enjoy dinner at your luxury property.",
        ],
        overnight: "Five-star or premium luxury hotel in Ella.",
        imageUrl: "/documents/images/tour/train05.jpg",
      },
      {
        day: 7,
        title: "Ella to Yala Wildlife Experience",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before departing Ella.",
          "Scenic Drive: Travel south through changing highland and lowland landscapes.",
          "Yala Arrival: Check in to your luxury safari lodge.",
          "Private Jeep Safari: Enjoy an afternoon safari if arrival time and park schedules permit.",
          "Wildlife Watching: Look for elephants, crocodiles, deer and birdlife; leopard sightings are not guaranteed.",
          "Dinner: Return to the lodge for dinner and relaxation.",
        ],
        overnight: "Luxury safari lodge in Yala or Tissamaharama.",
        imageUrl: "/documents/images/tour/safari05.jpg",
      },
      {
        day: 8,
        title: "Yala to Colombo & Departure",
        points: [
          "Breakfast: Enjoy breakfast at the lodge.",
          "Morning Safari Option: If the safari was not completed on Day 7, a morning safari may be arranged before departure, subject to flight time.",
          "Private Transfer: Travel towards Colombo and Bandaranaike International Airport.",
          "Lunch: Enjoy lunch en route.",
          "Departure: Arrive at CMB with sufficient time for check-in.",
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo05.jpg",
      },
    ],

    hotelRecommendation:
      "Selected five-star hotels and luxury resorts in Negombo, Sigiriya, Kandy, Nuwara Eliya and Ella, followed by a premium safari lodge in the Yala region.",

    transportation:
      "Private air-conditioned luxury vehicle with an English-speaking chauffeur-guide throughout the road itinerary. The hill-country railway segment is subject to timetable and seat availability. Yala safari uses a separate 4WD vehicle.",

    meals:
      "Daily breakfast, lunch and dinner from Day 1 to Day 7, plus breakfast and lunch on Day 8. Safari timing may affect the order in which breakfast is served.",

    included: [
      "7 nights in selected five-star hotels, luxury resorts and a premium safari lodge",
      "Daily breakfast, lunch and dinner according to the meal plan",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Airport meet-and-greet",
      "Sigiriya Rock Fortress and Dambulla Cave Temple admission",
      "Temple of the Sacred Tooth Relic admission",
      "Confirmed tea factory visit and tasting",
      "Nanu Oya–Ella train ticket in the agreed class, subject to availability",
      "Yala National Park admission and one standard 4WD jeep safari",
      "Other entrance fees specifically listed in the final confirmed itinerary",
    ],

    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Alcoholic beverages and premium drinks",
      "Optional activities not listed as included",
      "Additional safaris beyond the confirmed package",
      "Room upgrades and spa treatments",
    ],

    optionalExperiences: [
      "Private sunrise climb at Sigiriya",
      "Guided Little Adam's Peak walk",
      "Premium tea-estate experience",
      "Additional Yala safari",
      "Private dining at the safari lodge",
    ],

    tourFaqs: [
      {
        q: "Is a leopard sighting guaranteed in Yala?",
        a: "No. Yala is famous for leopards, but sightings depend on wildlife movement and conditions. The safari also offers opportunities to see elephants, birds and other animals.",
      },
      {
        q: "Is the safari jeep included?",
        a: "One standard 4WD jeep safari is included in the proposed package, along with park admission. Any additional safari must be confirmed separately.",
      },
      {
        q: "Can we take the train to Ella?",
        a: "The itinerary includes the scenic train journey where reserved seats and railway schedules allow. If unavailable, a private scenic road transfer can be arranged.",
      },
    ],
  },

  // =========================================================
  // 4. GRAND CEYLON LUXURY TOUR — 10 DAYS / 9 NIGHTS
  // Route: Negombo → Polonnaruwa → Sigiriya → Kandy → Nuwara Eliya
  //        → Ella → Yala → Mirissa → Galle → Colombo
  // =========================================================
  {
    slug: "grand-ceylon-luxury-10-day",
    title: "Grand Ceylon Luxury Tour",
    category: "Luxury Tours",
    duration: "10 Days / 9 Nights",
    highlights: [
      "Polonnaruwa UNESCO World Heritage Site",
      "Sigiriya Rock Fortress and Dambulla Cave Temple",
      "Luxury tea-country experience",
      "Scenic train journey to Ella",
      "Yala wildlife safari",
      "Mirissa and historic Galle Fort",
    ],
    price: "From $3,399 pp",
    blurb:
      "Explore Sri Lanka's ancient kingdoms, highland tea estates, wildlife reserves and southern coast on a private ten-day luxury journey.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/Green Paddy Landscape.jpg",

    heroTitle: "Grand Ceylon Luxury Tour — 10 Days Across the Island",

    intro:
      "Journey across Sri Lanka through a carefully curated blend of ancient kingdoms, spectacular hill-country scenery, wildlife and coastal heritage. Explore Polonnaruwa and Sigiriya, discover Kandy's sacred traditions, travel through tea plantations and visit Ella before experiencing Yala's wilderness and the historic coast around Mirissa and Galle.",

    overview:
      "A ten-day private route designed for travellers who want a broad introduction to Sri Lanka's cultural and natural highlights. Luxury accommodation, a dedicated chauffeur-guide, a scenic railway experience and a wildlife safari bring together the island's most memorable landscapes.",

    bestFor: "Luxury couples, cultural travellers and wildlife enthusiasts",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Moderate, with optional climbs and nature walks",
    destinationsCovered:
      "Negombo → Polonnaruwa → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Colombo",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Negombo",
        points: [
          "Airport Welcome: Receive traditional flower garlands at CMB.",
          "Chauffeur Greeting: Meet your private chauffeur-guide and receive luggage assistance.",
          "Transfer to Negombo: Travel to your luxury beachfront hotel.",
          "Lunch & Relaxation: Enjoy lunch and unwind after your flight.",
          "Coastal Evening: Relax at the hotel before dinner.",
        ],
        overnight: "Five-star beachfront hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo008.jpg",
      },
      {
        day: 2,
        title: "Negombo to Polonnaruwa",
        points: [
          "Breakfast & Check-out: Begin the drive towards Polonnaruwa.",
          "Scenic Countryside: Travel through Sri Lanka's rural landscapes.",
          "Lunch Stop: Enjoy lunch en route.",
          "Polonnaruwa Arrival: Visit selected archaeological monuments if time permits.",
          "Hotel Check-in: Settle into your hotel and enjoy dinner.",
        ],
        overnight: "Five-star or premium luxury hotel in the Polonnaruwa area.",
        imageUrl: "/documents/images/tour/polonnaruwa008.jpg",
      },
      {
        day: 3,
        title: "Polonnaruwa Ancient City & Sigiriya",
        points: [
          "Breakfast: Enjoy breakfast before exploring the ancient city.",
          "Polonnaruwa UNESCO Site: Discover the historic royal capital and its archaeological remains.",
          "Royal Palace Complex: Explore selected palace ruins and ancient structures.",
          "Gal Vihara: Admire the renowned rock-cut Buddha statues.",
          "Transfer to Sigiriya: Continue towards the Cultural Triangle after lunch.",
          "Resort Check-in: Relax and enjoy dinner at your hotel.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/polonnaruwa009.jpg",
      },
      {
        day: 4,
        title: "Sigiriya Rock Fortress & Dambulla",
        points: [
          "Breakfast: Enjoy breakfast at the resort.",
          "Sigiriya Rock Fortress: Explore the UNESCO-listed rock citadel, royal gardens and historic frescoes.",
          "Lion's Paw Entrance: Discover the iconic gateway and surrounding archaeological landscape.",
          "Dambulla Cave Temple: Visit the UNESCO-listed cave complex and its historic Buddhist art.",
          "Lunch: Enjoy lunch during the sightseeing day.",
          "Evening at Leisure: Return to your resort for dinner.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya08.jpg",
      },
      {
        day: 5,
        title: "Sigiriya to Kandy",
        points: [
          "Breakfast & Departure: Travel towards Kandy.",
          "Matale Spice Garden: Discover Sri Lankan spices and traditional herbal plants.",
          "Temple of the Sacred Tooth Relic: Visit the sacred temple in Kandy's UNESCO-listed city.",
          "Kandy Lake: Enjoy a leisurely walk beside the lake.",
          "Hotel Check-in: Relax before dinner.",
        ],
        overnight: "Five-star hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy009.jpg",
      },
      {
        day: 6,
        title: "Kandy to Nuwara Eliya",
        points: [
          "Breakfast: Depart Kandy after breakfast.",
          "Scenic Mountain Drive: Admire lush valleys and tea plantations.",
          "Tea Factory Visit: Learn about Ceylon tea production.",
          "Tea Tasting: Sample freshly brewed tea.",
          "Ramboda Falls: Stop for photographs and views, time permitting.",
          "Nuwara Eliya Check-in: Enjoy dinner and a relaxed evening.",
        ],
        overnight: "Five-star hotel or luxury heritage property in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya009.jpg",
      },
      {
        day: 7,
        title: "Nuwara Eliya to Ella",
        points: [
          "Breakfast & Transfer: Travel to Nanu Oya Railway Station.",
          "Scenic Train Journey: Travel through tea estates and mountain scenery towards Ella, subject to availability.",
          "Arrival in Ella: Meet your chauffeur at the station.",
          "Nine Arch Bridge: Visit the iconic railway bridge if timing permits.",
          "Ella Town: Enjoy selected viewpoints or a relaxed town visit.",
          "Hotel Check-in: Enjoy dinner at your hotel.",
        ],
        overnight: "Five-star or premium luxury hotel in Ella.",
        imageUrl: "/documents/images/tour/train004.jpg",
      },
      {
        day: 8,
        title: "Ella to Yala Wildlife Experience",
        points: [
          "Breakfast & Check-out: Begin the journey south.",
          "Scenic Drive: Travel through hill-country and lowland landscapes.",
          "Yala Arrival: Check in to the safari lodge.",
          "Afternoon Safari: Enjoy a 4WD jeep safari if arrival time and park schedules permit.",
          "Wildlife Watching: Look for elephants, crocodiles, deer and birdlife; leopard sightings are not guaranteed.",
          "Dinner: Relax at the safari lodge.",
        ],
        overnight: "Luxury safari lodge in Yala or Tissamaharama.",
        imageUrl: "/documents/images/tour/safari008.jpg",
      },
      {
        day: 9,
        title: "Yala, Mirissa & Galle Fort",
        points: [
          "Early Safari: If not completed on Day 8, enjoy a morning safari, subject to timing.",
          "Breakfast & Check-out: Return to the lodge and prepare for the coastal drive.",
          "Mirissa Coast: Stop at Mirissa for a short coastal visit if time allows.",
          "Galle Fort: Explore the UNESCO World Heritage Site, historic ramparts and colonial streets.",
          "Galle Lighthouse: Enjoy ocean views and photography.",
          "Hotel Check-in: Relax and enjoy dinner in the Galle area.",
        ],
        overnight: "Five-star or premium luxury hotel in Galle.",
        imageUrl: "/documents/images/tour/galle008.jpg",
      },
      {
        day: 10,
        title: "Galle to Colombo & Departure",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Coastal Drive: Travel north towards Colombo.",
          "Optional Colombo Stop: Visit Galle Face Green or a selected landmark if flight time permits.",
          "Lunch: Enjoy lunch en route or in Colombo.",
          "Airport Transfer: Continue to Bandaranaike International Airport.",
          "Departure: Arrive with sufficient time for airline check-in.",
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo009.jpg",
      },
    ],

    hotelRecommendation:
      "Selected five-star hotels, luxury resorts and a premium safari lodge in Negombo, Polonnaruwa, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala and Galle. Final property selection is subject to availability and confirmed package rates.",

    transportation:
      "Private air-conditioned luxury vehicle with dedicated English-speaking chauffeur-guide for the full road itinerary. The Nanu Oya–Ella railway segment is subject to timetable and seat availability. Yala safari uses a separate 4WD vehicle.",

    meals:
      "Daily breakfast, lunch and dinner from Day 1 through Day 9, with breakfast and lunch on departure Day 10. Meal timing may be adjusted for early safaris and railway schedules.",

    included: [
      "9 nights in selected five-star hotels, luxury resorts and a premium safari lodge",
      "Daily breakfast, lunch and dinner according to the meal plan",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Airport meet-and-greet",
      "Polonnaruwa archaeological site admission",
      "Sigiriya Rock Fortress and Dambulla Cave Temple admission",
      "Temple of the Sacred Tooth Relic admission",
      "Confirmed tea factory visit and tasting",
      "Nanu Oya–Ella train ticket in the agreed class, subject to availability",
      "Yala National Park admission and one standard 4WD jeep safari",
      "Galle Fort and other attraction admission fees specifically listed in the confirmed itinerary",
    ],

    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Alcoholic beverages",
      "Additional safaris beyond the package allowance",
      "Optional experiences not listed as included",
      "Hotel upgrades and spa treatments",
    ],

    optionalExperiences: [
      "Private village experience near Sigiriya",
      "Sunrise climb at Sigiriya",
      "Additional wildlife safari in Yala",
      "Private tea-estate experience",
      "Romantic coastal dining in Galle or Mirissa",
    ],

    tourFaqs: [
      {
        q: "Does the itinerary include UNESCO sites?",
        a: "Yes. The route includes the UNESCO-listed ancient city of Polonnaruwa, Sigiriya Rock Fortress, Dambulla Cave Temple, and the Sacred City of Kandy.",
      },
      {
        q: "Can we see both Mirissa and Galle?",
        a: "Yes. Both are included in the route. Sightseeing order and time spent at each destination depend on safari timing and road conditions.",
      },
      {
        q: "Is the safari included?",
        a: "The proposed package includes one standard Yala jeep safari and park admission. Additional safaris can be arranged at an extra cost.",
      },
    ],
  },

  // =========================================================
  // 5. ULTIMATE CEYLON LUXURY JOURNEY — 12 DAYS / 11 NIGHTS
  // Route: Negombo → Anuradhapura → Polonnaruwa → Sigiriya → Kandy
  //        → Nuwara Eliya → Ella → Yala → Mirissa → Galle
  //        → Bentota → Colombo
  // =========================================================
  {
    slug: "ultimate-ceylon-luxury-12-day",
    title: "The Ultimate Ceylon Luxury Journey",
    category: "Luxury Tours",
    duration: "12 Days / 11 Nights",
    highlights: [
      "Anuradhapura and Polonnaruwa UNESCO heritage",
      "Sigiriya Rock Fortress and Dambulla Cave Temple",
      "Sacred Kandy and the Temple of the Tooth",
      "Tea plantations and scenic hill-country railway",
      "Yala National Park wildlife safari",
      "Mirissa, Galle Fort and Bentota coastline",
    ],
    price: "From $3,699 pp",
    blurb:
      "Experience Sri Lanka's ancient kingdoms, tea-covered mountains, wildlife and southern coastline on an exceptional private luxury journey.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/golden.png",

    heroTitle:
      "The Ultimate Ceylon Luxury Journey — 12 Days of Private Discovery",

    intro:
      "Experience Sri Lanka in depth on a private twelve-day journey connecting ancient capitals, dramatic rock fortresses, sacred temples, misty highlands, wildlife reserves and tropical beaches. Discover the island's rich heritage in Anuradhapura and Polonnaruwa, travel through the tea country, enjoy a wildlife safari in Yala and finish along the historic southern and western coast. Every stage is designed around private touring, luxury accommodation and memorable local experiences.",

    overview:
      "A comprehensive luxury circuit through Sri Lanka's cultural, natural and coastal highlights. The route combines UNESCO World Heritage Sites, tea-country landscapes, a scenic train journey, a wildlife safari and coastal heritage in Mirissa, Galle and Bentota, supported by a private chauffeur-guide.",

    bestFor:
      "Luxury travellers, couples, honeymooners, culture lovers and wildlife enthusiasts",

    groupSize: "Private — just you and your travel companions",

    physicalLevel:
      "Moderate, with optional climbs, archaeological walks and highland viewpoints",

    destinationsCovered:
      "Negombo → Anuradhapura → Polonnaruwa → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Bentota → Colombo",

    itinerary: [
      {
        day: 1,
        title: "Arrival in Negombo",
        points: [
          "Airport Welcome: Receive traditional flower garlands at Bandaranaike International Airport.",
          "Private Chauffeur Greeting: Meet your English-speaking chauffeur-guide and receive luggage assistance.",
          "Transfer to Negombo: Travel to your luxury beachfront hotel.",
          "Lunch & Relaxation: Enjoy lunch and recover from your journey.",
          "Coastal Evening: Relax by the coast before dinner.",
        ],
        overnight: "Five-star beachfront hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo006.jpg",
      },
      {
        day: 2,
        title: "Negombo to Anuradhapura",
        points: [
          "Breakfast & Check-out: Depart Negombo after breakfast.",
          "Scenic Drive: Travel through Sri Lanka's rural countryside towards the ancient northern kingdom.",
          "Refreshment Stop: Enjoy a break during the journey.",
          "Anuradhapura Arrival: Check in to your hotel and enjoy lunch.",
          "Leisure Time: Relax or visit a nearby site if arrival time permits.",
          "Dinner: Enjoy dinner at the hotel.",
        ],
        overnight: "Five-star or premium luxury hotel in Anuradhapura.",
        imageUrl: "/documents/images/tour/anuradhapura006.jpg",
      },
      {
        day: 3,
        title: "Anuradhapura Ancient Kingdom",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "UNESCO Heritage Site: Explore the ancient city of Anuradhapura.",
          "Ruwanwelisaya Stupa: Visit the monumental stupa and sacred surroundings.",
          "Jaya Sri Maha Bodhi: Discover the revered sacred Bodhi tree area.",
          "Ancient Monuments: Explore selected historic monasteries and archaeological remains.",
          "Return to the Hotel: Enjoy lunch and dinner, with time to relax.",
        ],
        overnight: "Five-star or premium luxury hotel in Anuradhapura.",
        imageUrl: "/documents/images/tour/anuradhapura007.jpg",
      },
      {
        day: 4,
        title: "Anuradhapura to Polonnaruwa",
        points: [
          "Breakfast & Check-out: Depart Anuradhapura after breakfast.",
          "Scenic Drive: Travel towards Polonnaruwa through Sri Lanka's dry-zone landscapes.",
          "Polonnaruwa UNESCO Site: Explore the ancient royal city and its historic remains.",
          "Royal Palace Complex: Discover selected palace ruins and archaeological structures.",
          "Gal Vihara: Admire the renowned rock-cut Buddha statues.",
          "Hotel Check-in: Enjoy dinner and relax after sightseeing.",
        ],
        overnight: "Five-star or premium luxury hotel in Polonnaruwa or nearby.",
        imageUrl: "/documents/images/tour/polonnaruwa006.jpg",
      },
      {
        day: 5,
        title: "Polonnaruwa to Sigiriya",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Final Heritage Visit: Explore an additional Polonnaruwa monument if time permits.",
          "Transfer to Sigiriya: Travel through the Cultural Triangle's countryside.",
          "Lunch: Enjoy lunch en route or at the resort.",
          "Luxury Resort Check-in: Settle into your accommodation.",
          "Afternoon at Leisure: Relax before dinner.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya2.png",
      },
      {
        day: 6,
        title: "Sigiriya Rock Fortress & Dambulla",
        points: [
          "Breakfast: Enjoy breakfast at the resort.",
          "Sigiriya Rock Fortress: Explore the UNESCO World Heritage Site and its ancient royal landscape.",
          "Water Gardens: Discover the remarkable gardens and historic engineering.",
          "Frescoes & Lion's Paw Entrance: Explore the famous frescoes and monumental gateway.",
          "Dambulla Cave Temple: Visit the UNESCO-listed cave complex and its Buddhist murals and statues.",
          "Return to the Resort: Enjoy dinner and a relaxing evening.",
        ],
        overnight: "Five-star luxury resort in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya.png",
      },
      {
        day: 7,
        title: "Sigiriya to Kandy",
        points: [
          "Breakfast & Check-out: Depart Sigiriya after breakfast.",
          "Scenic Drive: Travel towards Kandy through the central plains.",
          "Matale Spice Garden: Learn about local spices and traditional herbal plants.",
          "Temple of the Sacred Tooth Relic: Visit this sacred temple in the UNESCO-listed Sacred City of Kandy.",
          "Kandy Lake: Enjoy a relaxing walk beside the lake.",
          "Hotel Check-in: Enjoy dinner at your luxury hotel.",
        ],
        overnight: "Five-star hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy012.jpg",
      },
      {
        day: 8,
        title: "Kandy to Nuwara Eliya",
        points: [
          "Breakfast & Departure: Begin the scenic journey into the hill country.",
          "Tea Country Drive: Admire lush valleys, mountain views and rolling tea plantations.",
          "Tea Factory Visit: Discover the traditional Ceylon tea-making process.",
          "Tea Tasting: Sample freshly brewed tea.",
          "Ramboda Falls: Stop to admire the waterfall and surrounding scenery, time permitting.",
          "Nuwara Eliya Check-in: Enjoy dinner and a relaxed evening.",
        ],
        overnight: "Five-star hotel or luxury heritage property in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya012.jpg",
      },
      {
        day: 9,
        title: "Scenic Train Journey to Ella",
        points: [
          "Breakfast & Transfer: Travel to Nanu Oya Railway Station.",
          "Scenic Train Journey: Travel through tea estates, misty mountains and picturesque countryside towards Ella, subject to train availability.",
          "Arrival in Ella: Meet your chauffeur at the railway station.",
          "Nine Arch Bridge: Visit the iconic railway bridge if timing permits.",
          "Ella Town: Explore the town or enjoy a scenic viewpoint.",
          "Hotel Check-in: Enjoy dinner and relax.",
        ],
        overnight: "Five-star or premium luxury hotel in Ella.",
        imageUrl: "/documents/images/tour/train012.jpg",
      },
      {
        day: 10,
        title: "Ella to Yala Wildlife Experience",
        points: [
          "Breakfast & Check-out: Depart Ella after breakfast.",
          "Scenic Transfer: Travel south through the highlands and lowlands.",
          "Yala Arrival: Check in to your luxury safari lodge.",
          "Afternoon Safari: Enjoy a 4WD jeep safari if arrival time and park schedules permit.",
          "Wildlife Watching: Look for elephants, crocodiles, deer and birdlife; leopard sightings are not guaranteed.",
          "Dinner: Enjoy dinner and relax at the lodge.",
        ],
        overnight: "Luxury safari lodge in Yala or Tissamaharama.",
        imageUrl: "/documents/images/tour/safari012.jpg",
      },
      {
        day: 11,
        title: "Yala, Mirissa & Galle Fort",
        points: [
          "Early-Morning Safari: Enjoy a morning safari if it was not completed on Day 10, subject to timing.",
          "Breakfast & Check-out: Return to the lodge and prepare for the coastal journey.",
          "Mirissa Coast: Enjoy a coastal stop and views of the Indian Ocean.",
          "Galle Fort: Explore the UNESCO World Heritage Site, its historic streets and colonial architecture.",
          "Galle Lighthouse: Enjoy ocean views and photography.",
          "Hotel Check-in: Enjoy dinner in the Galle area.",
        ],
        overnight: "Five-star or premium luxury hotel in Galle.",
        imageUrl: "/documents/images/tour/galle012.jpg",
      },
      {
        day: 12,
        title: "Galle, Bentota & Colombo Departure",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before departure.",
          "Coastal Journey: Travel north along Sri Lanka's western and southern coastline.",
          "Bentota Stop: Enjoy a short coastal visit if time permits.",
          "Lunch: Enjoy lunch at a selected restaurant en route.",
          "Airport Transfer: Continue to Bandaranaike International Airport (CMB).",
          "Departure: Arrive with sufficient time for airline check-in.",
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo012.jpg",
      },
    ],

    hotelRecommendation:
      "A curated selection of five-star hotels, luxury resorts and premium safari lodges across Negombo, Anuradhapura, Polonnaruwa, Sigiriya, Kandy, Nuwara Eliya, Ella, Yala and Galle. Final properties are selected according to availability, travel dates and the agreed package rate.",

    transportation:
      "Private air-conditioned luxury vehicle with a dedicated English-speaking chauffeur-guide throughout the road itinerary. The Nanu Oya–Ella train journey is subject to railway schedules and reserved-seat availability. Yala safari is operated in a separate 4WD vehicle.",

    meals:
      "Daily breakfast, lunch and dinner from Day 1 to Day 11, with breakfast and lunch on departure Day 12. Meal timing may be adjusted for early safaris and train schedules.",

    included: [
      "11 nights in selected five-star hotels, luxury resorts and a premium safari lodge",
      "Daily breakfast, lunch and dinner according to the stated meal plan",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Airport meet-and-greet with traditional flower garlands",
      "Anuradhapura archaeological site admission",
      "Polonnaruwa archaeological site admission",
      "Sigiriya Rock Fortress and Dambulla Cave Temple admission",
      "Temple of the Sacred Tooth Relic admission",
      "Confirmed tea factory visit and tasting",
      "Nanu Oya–Ella train ticket in the agreed class, subject to availability",
      "Yala National Park admission and one standard 4WD jeep safari",
      "Entrance fees to other attractions explicitly listed in the confirmed itinerary",
    ],

    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Alcoholic beverages and premium drinks",
      "Optional experiences not listed as included",
      "Additional wildlife safaris beyond the package allowance",
      "Spa treatments and room upgrades",
    ],

    optionalExperiences: [
      "Private village experience in the Cultural Triangle",
      "Guided sunrise climb at Sigiriya",
      "Premium tea-estate experience",
      "Additional Yala wildlife safari",
      "Private romantic dinner on the southern coast",
      "Private wellness treatment at selected luxury hotels",
    ],

    tourFaqs: [
      {
        q: "Which UNESCO World Heritage Sites are included?",
        a: "The route includes Anuradhapura, Polonnaruwa, Sigiriya Rock Fortress, Dambulla Cave Temple and the Sacred City of Kandy.",
      },
      {
        q: "Are all meals and entrance fees included?",
        a: "The proposed package includes daily breakfast, lunch and dinner and admission to attractions specifically listed in the confirmed itinerary. Optional activities may incur additional charges.",
      },
      {
        q: "Are all accommodations five-star?",
        a: "The tour is designed around five-star hotels, luxury resorts and premium safari lodges. Specific properties are confirmed according to availability and the final package price.",
      },
      {
        q: "Can the itinerary be customised?",
        a: "Yes. Hotel choices, sightseeing pace, optional activities and special dining arrangements can be tailored to your preferences.",
      },
    ],
  },


  {
    slug: "general-5-day-tour",
    title: "Ceylon Discovery Escape",
    category: "General Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Sigiriya Rock Fortress","Pinnawala Elephant Orphanage", "Dambulla Cave Temple", "Temple of the Tooth, Kandy"],
    price: "Starting From $600 pp",
    blurb: "A 5-day classic introduction to Sri Lanka's Cultural Triangle and hill capital — the essentials, well paced.",
    motif: "sun",
    imageUrl: "/documents/images/tour/Sembuwatta Highland Escape.jpg",
    heroTitle: "Sri Lanka Classic Discovery — 5 Days Through the Cultural Triangle",
  
    intro:
      "A short, well-rounded first look at Sri Lanka: the island's most famous rock fortress, its ancient cave temples, and the hill capital of Kandy, without a rushed schedule.",
    overview:
      "This 5-day route sticks to Sri Lanka's compact Cultural Triangle and Kandy, making it ideal for travellers with limited time who still want to see the country's headline sights properly rather than in a blur.",
    bestFor: "First-time visitors, short layovers, couples and solo travellers",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy, with one moderate rock climb",
    destinationsCovered: "Negombo → Pinnawala → Sigiriya → Dambulla → Kandy → Colombo",
    itinerary: [
      {
        day: 1,
       title: "Arrival, Pinnawala & Sigiriya",
  points: [
    "Welcome at Bandaranaike International Airport (CMB) with traditional flower garlands.",
    "Meet your private chauffeur-guide and receive assistance with luggage.",
    "Travel towards Pinnawala through Sri Lanka's scenic countryside.",
    "Visit the Pinnawala Elephant Orphanage to observe the elephants.",
    "Enjoy a refreshing king coconut drink and scenic stops along the way to Sigiriya.",
    "Arrive in Sigiriya, check into your hotel and relax."
     ],
     overnight: "Boutique hotel in Sigiriya.",
        imageUrl: "/documents/images/tour/negombo.png",
      },
      {
        day: 2,
       title: "Sigiriya Rock Fortress & Surroundings",
  points: [
    "Breakfast: Enjoy breakfast at the hotel.",
    "Sigiriya Rock Fortress: Explore this UNESCO World Heritage Site, including its ancient frescoes, water gardens and iconic Lion's Paw entrance.",
    "Summit Views: Climb to the top for panoramic views of the surrounding countryside, weather and fitness permitting.",
    "Lunch & Relaxation: Return to the hotel for lunch or leisure time.",
    "Village Experience: Enjoy an optional village tour to discover traditional Sri Lankan life and local cuisine.",
    "Evening Leisure: Relax at the hotel or capture photographs of the beautiful surroundings."
       ],
        overnight: "Boutique hotel in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya3.png",
      },
      {
        day: 3,
title: "Sigiriya → Dambulla → Spice Garden → Kandy",
  points: [
    "Breakfast & Check-out: Enjoy breakfast at the hotel before departing Sigiriya.",
    "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, famous for its ancient Buddhist murals and statues.",
    "Matale Spice Garden: Discover Sri Lankan spices, including cinnamon, cardamom, cloves and pepper, and their traditional uses.",
    "Arrival in Kandy: Travel through scenic landscapes and check into your hotel.",
    "Temple of the Sacred Tooth Relic: Visit this sacred Buddhist temple within the UNESCO-listed Sacred City of Kandy.",
    "Kandy Lake: Enjoy a relaxing lakeside walk before dinner."
  ],
  overnight: "Boutique hotel in Kandy.",
        imageUrl: "/documents/images/tour/dambulla1.png",
      },
      {
        day: 4,
        title: "Kandy Sightseeing → Colombo",
  points: [
    "Breakfast & Check-out: Enjoy breakfast at the hotel before departing Kandy.",
    "Royal Botanic Gardens: Optionally explore the beautiful gardens, tropical plants and famous palm avenues in Peradeniya.",
    "Kandy City: Enjoy local handicraft shopping or visit a scenic viewpoint overlooking the city.",
    "Gem & Mineral Museum: Discover Sri Lanka's renowned gemstones and mineral heritage (optional).",
    "Drive to Colombo: Travel through scenic landscapes with a refreshment stop along the way.",
    "Colombo Evening: Check into the hotel and enjoy a seaside walk at Galle Face Green, followed by local street food or dinner."
  ],
  overnight: "Boutique hotel in Colombo.",

        imageUrl: "/documents/images/tour/kandy1.png",
      },
      {
        day: 5,
      
  title: "Colombo City Tour → Airport Departure",
  points: [
    "Breakfast & Check-out: Enjoy breakfast at the hotel and prepare for departure.",
    "Colombo City Tour: Visit Gangaramaya Temple and Independence Square, subject to flight time.",
    "Shopping: Enjoy last-minute shopping for Ceylon tea, souvenirs and local handicrafts.",
    "Airport Transfer: Collect luggage and transfer to Bandaranaike International Airport (CMB) for your scheduled flight.",
    "Departure: Conclude your Sri Lankan journey with unforgettable memories of its culture and scenic beauty."
  ],
  overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo.png",
      },
    ],
    hotelRecommendation: "Comfortable 3–4 star hotels in Negombo, Sigiriya/Habarana, Kandy and Colombo.",
    transportation: "Private air-conditioned vehicle with driver for all 5 days.",
    meals: "Daily breakfast. Lunch included on Day 2 (village lunch). Other meals at your own choice.",
    included: [
      "4 nights' accommodation as listed",
      "Daily breakfast + 1 lunch",
      "Private vehicle and driver throughout",
      "Sigiriya, Dambulla and Temple of the Tooth entrance fees",
      "Pinnawala Elephant Orphanage entrance",
    ],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Hot-air balloon flight over the Cultural Triangle", "Kandyan cultural dance show", "Village cooking class"],
    tourFaqs: [
      { q: "Is 5 days enough to see Sri Lanka?", a: "It's enough for a focused look at the Cultural Triangle and Kandy. For hill country and beaches too, our 7 or 8-day General Tours give a fuller picture." },
      { q: "How difficult is the Sigiriya climb?", a: "About 1,200 steps with some steep, open sections near the top — manageable for most travellers at a relaxed pace." },
    ],
  },
  {
    slug: "general-7-day-tour",
    title: "The Essence of Ceylon",
    category: "General Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Sigiriya & Dambulla", "Scenic train to Ella", "Nine Arch Bridge & tea country"],
    price: "Starting From $750 pp",
    blurb: "A 7-day route adding misty hill country and the famous Kandy–Ella train ride to the classic Cultural Triangle circuit.",
    motif: "sun",
    imageUrl: "/documents/images/tour/Knuckles Wilderness Serenity.jpg",
    heroTitle: "Heart of Ceylon — 7 Days from Ancient Cities to Tea Country",
    intro:
      "Everything in our 5-day classic, extended into the hills — tea estates, cool mountain air, and one of the world's most scenic train journeys.",
    overview:
      "This route follows the same Cultural Triangle opening as our 5-day tour, then continues up into the hill country for tea plantations, waterfalls and the celebrated rail journey between Nuwara Eliya and Ella.",
    bestFor: "Travellers who want cities, culture and hill country in one trip",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Sigiriya → Kandy → Nuwara Eliya → Ella → Colombo",
    itinerary: [
      {
        day: 1,
       title: "Arrival, Pinnawala & Sigiriya",
    points: [
      "Airport Welcome: Meet your private chauffeur at Bandaranaike International Airport (CMB) and receive a traditional flower garland welcome.",
      "Pinnawala Elephant Orphanage: Observe the elephants and learn about their care and conservation.",
      "Scenic Drive to Sigiriya: Enjoy the countryside views along the journey.",
      "Hotel Check-in: Arrive in Sigiriya, relax after the journey and enjoy the evening at leisure."
    ],
    overnight: "Boutique hotel in Sigiriya.",
        imageUrl: "/documents/images/tour/airport.png",
      },
      {
        day: 2,
       title: "Sigiriya Rock Fortress & Surroundings",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Sigiriya Rock Fortress: Explore this UNESCO World Heritage Site, including its ancient water gardens, frescoes and historic ruins.",
      "Summit Views: Climb the fortress for panoramic views of the surrounding countryside, weather and fitness permitting.",
      "Village Experience: Enjoy an optional nearby village visit or relax at the hotel."
    ],
    overnight: "Boutique hotel in Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya5.png",
      },
      {
        day: 3,
        title: "Sigiriya → Dambulla → Spice Garden → Kandy",
    points: [
      "Breakfast & Check-out: Depart Sigiriya after breakfast.",
      "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, renowned for its Buddhist statues and ancient murals.",
      "Matale Spice Garden: Discover Sri Lankan spices, Ayurvedic plants and their traditional uses.",
      "Arrival in Kandy: Travel through scenic landscapes and check into your hotel.",
      "Temple of the Sacred Tooth Relic: Visit this sacred temple within the UNESCO-listed Sacred City of Kandy.",
      "Evening Leisure: Enjoy a relaxing evening in Kandy."
    ],
    overnight: "Boutique hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy.png",
      },
      {
        day: 4,
       title: "Kandy → Nuwara Eliya",
    points: [
      "Breakfast & Departure: Enjoy breakfast before travelling into Sri Lanka's scenic hill country.",
      "Tea Factory: Discover the tea-making process and enjoy a tea-tasting experience.",
      "Ramboda Falls: Admire the beautiful waterfall and surrounding mountain scenery.",
      "Arrival in Nuwara Eliya: Explore this charming hill town, known as Little England.",
      "Gregory Lake: Enjoy a relaxing lakeside walk or optional activities, time permitting."
    ],
    overnight: "Boutique hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya1.png",
      },
      {
        day: 5,
       title: "Scenic Train Journey: Nanu Oya → Ella",
    points: [
      "Breakfast & Transfer: Enjoy breakfast and transfer to Nanu Oya Railway Station.",
      "Scenic Train Journey: Travel through tea plantations, misty mountains, tunnels and picturesque countryside.",
      "Arrival in Ella: Meet your transfer and travel to the hotel.",
      "Ella Town: Check in and enjoy a relaxing evening exploring the town at leisure."
    ],
    overnight: "Boutique hotel in Ella.",
        imageUrl: "/documents/images/tour/nuwaraeliya2.png",
      },
      {
        day: 6,
       title: "Ella Sightseeing → Colombo",
    points: [
      "Nine Arch Bridge: Visit the iconic railway bridge surrounded by lush greenery.",
      "Little Adam's Peak: Enjoy a scenic walk and panoramic views of Ella's mountain landscape.",
      "Ravana Falls: Stop to admire the picturesque waterfall, subject to time and road conditions.",
      "Journey to Colombo: Travel towards the capital with a suitable refreshment stop.",
      "Hotel Check-in: Arrive in Colombo and relax at the hotel."
    ],
    overnight: "Boutique hotel in Colombo.",
        imageUrl: "/documents/images/tour/rawanaella.png",
      },
      {
        day: 7,
        title: "Colombo City Tour → Airport Departure",
    points: [
      "Breakfast & Check-out: Enjoy breakfast and prepare for departure.",
      "Colombo City Tour: Visit Gangaramaya Temple, Independence Square and Galle Face Green, subject to flight time.",
      "Shopping: Enjoy optional last-minute shopping for Ceylon tea, souvenirs and local handicrafts.",
      "Airport Transfer: Travel to Bandaranaike International Airport (CMB) for your scheduled departure."
    ],
    overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo3.png",
      },
    ],
    hotelRecommendation: "3–4 star hotels in Negombo, Sigiriya, Kandy, Nuwara Eliya, Ella and Colombo.",
    transportation: "Private air-conditioned vehicle with driver for road transfers; 2nd-class reserved seats for the Nanu Oya–Ella train.",
    meals: "Daily breakfast, plus lunch on Day 2. Other meals at your own choice.",
    included: [
      "6 nights' accommodation as listed",
      "Daily breakfast + 1 lunch",
      "Private vehicle and driver throughout",
      "Reserved train tickets, Nanu Oya to Ella",
      "All entrance fees listed in the itinerary",
    ],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Little Adam's Peak sunrise hike", "White-water rafting near Kitulgala (detour)", "Ayurvedic spa treatment, Nuwara Eliya"],
    tourFaqs: [
      { q: "Do we need to book the train in advance?", a: "Yes — reserved seats on this route sell out weeks ahead in peak season, which is why we book them as part of your package." },
      { q: "Is Nuwara Eliya cold?", a: "It's noticeably cooler than the rest of the island — evenings can feel like 12–16°C, so bring a light jacket." },
    ],
  },
  {
    slug: "general-8-day-tour",
    title: "Ceylon Wonders Journey",
    category: "General Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Cultural Triangle & tea country", "Nine Arch Bridge by train", "Yala safari"],
    price: "From $850 pp",
    blurb: "Our 7-day hill country route with a full safari day added — culture, tea country and wildlife in one trip.",
    motif: "sun",
    imageUrl: "/documents/images/tour/general4.png",
    heroTitle: "Ceylon Complete — 8 Days of Culture, Hill Country and Safari",
    intro:
      "The classic Cultural Triangle and hill country route, extended south into Yala National Park for a proper wildlife safari before returning to Colombo.",
    overview:
      "This itinerary follows our 7-day hill country route through Sigiriya, Kandy and Ella, then continues south to Yala for a jeep safari before heading back to the coast for departure.",
    bestFor: "Travellers who want culture, hill country and wildlife without a beach extension",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Negombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Colombo",
    itinerary: 
[
  {
    day: 1,
    title: "Arrival, Pinnawala & Sigiriya",
    points: [
      "Airport Welcome: Arrive at Bandaranaike International Airport (CMB) and receive a traditional flower garland welcome.",
      "Chauffeur Greeting: Meet your private chauffeur-guide and receive assistance with luggage.",
      "Pinnawala Elephant Orphanage: Observe elephants and learn about their care and conservation.",
      "Scenic Drive: Continue towards Sigiriya through Sri Lanka's beautiful countryside.",
      "Hotel Check-in: Arrive in Sigiriya and relax after the journey.",
      "Evening Leisure: Enjoy dinner and a peaceful evening at the hotel."
    ],
    overnight: "Boutique hotel in Sigiriya.",
    imageUrl: "/documents/images/tour/pinnawala.png"
  },
  {
    day: 2,
    title: "Sigiriya Rock Fortress",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Sigiriya Rock Fortress: Explore this UNESCO World Heritage Site, including its ancient water gardens, frescoes and historic ruins.",
      "Lion's Paw Entrance: Discover the iconic gateway to the ancient rock citadel.",
      "Summit Views: Climb to the summit for panoramic views of the surrounding countryside.",
      "Village Experience: Enjoy an optional traditional village visit.",
      "Evening Leisure: Relax at the hotel or explore the surrounding area."
    ],
    overnight: "Boutique hotel in Sigiriya.",
    imageUrl: "/documents/images/tour/sigiriya6.png"
  },
  {
    day: 3,
    title: "Dambulla Cave Temple & Kandy",
    points: [
      "Breakfast & Check-out: Depart Sigiriya after breakfast.",
      "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, famous for its ancient Buddhist murals and statues.",
      "Matale Spice Garden: Discover Sri Lankan spices and traditional Ayurvedic plants.",
      "Scenic Drive to Kandy: Travel through the beautiful landscapes of central Sri Lanka.",
      "Temple of the Sacred Tooth Relic: Visit this sacred temple within the UNESCO-listed Sacred City of Kandy.",
      "Kandy Lake: Enjoy a relaxing walk beside the lake."
    ],
    overnight: "Boutique hotel in Kandy.",
    imageUrl: "/documents/images/tour/spicy.png"
  },
  {
    day: 4,
    title: "Kandy to Nuwara Eliya",
    points: [
      "Breakfast & Departure: Enjoy breakfast before travelling into the scenic hill country.",
      "Tea Factory Visit: Discover the tea-making process and enjoy a tea-tasting experience.",
      "Ramboda Falls: Admire the beautiful waterfall and surrounding mountain scenery.",
      "Scenic Drive: Continue through lush tea plantations towards Nuwara Eliya.",
      "Arrival in Nuwara Eliya: Explore the charming hill town known as Little England.",
      "Gregory Lake: Enjoy a relaxing lakeside walk or optional activities, time permitting."
    ],
    overnight: "Boutique hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/tea.png"
  },
  {
    day: 5,
    title: "Scenic Train Journey from Nanu Oya to Ella",
    points: [
      "Breakfast & Transfer: Enjoy breakfast and transfer to Nanu Oya Railway Station.",
      "Scenic Train Journey: Travel through tea plantations, misty mountains, tunnels and picturesque countryside.",
      "Arrival in Ella: Meet your transfer and travel to the hotel.",
      "Hotel Check-in: Settle into your accommodation and relax.",
      "Ella Town: Explore the town at leisure and discover its cafés and local shops.",
      "Evening Relaxation: Enjoy dinner and the peaceful atmosphere of the hill country."
    ],
    overnight: "Boutique hotel in Ella.",
    imageUrl: "/documents/images/tour/ella.png"
  },
  {
    day: 6,
    title: "Ella Sightseeing & Transfer to Yala",
    points: [
      "Nine Arch Bridge: Visit the iconic railway bridge surrounded by lush greenery.",
      "Little Adam's Peak: Enjoy a scenic walk and panoramic views of Ella's mountain landscape.",
      "Ravana Falls: Stop to admire the picturesque waterfall, time permitting.",
      "Journey to Yala: Travel through Sri Lanka's southern landscapes towards the wildlife region.",
      "Hotel Check-in: Arrive at your hotel in the Yala or Tissamaharama area.",
      "Safari Preparation: Relax and prepare for the upcoming wildlife adventure."
    ],
    overnight: "Boutique hotel near Yala.",
    imageUrl: "/documents/images/tour/safari3.png"
  },
  {
    day: 7,
    title: "Yala Morning Safari & Transfer to Galle",
    points: [
      "Early-Morning Safari: Explore Yala National Park by 4WD jeep with an experienced driver and tracker.",
      "Wildlife Watching: Look for Sri Lankan elephants, crocodiles, deer, colourful birds and, with luck, leopards.",
      "Breakfast & Check-out: Return to the hotel for breakfast, depending on the safari package.",
      "Scenic Coastal Drive: Travel towards Galle along Sri Lanka's beautiful southern coast.",
      "Arrival in Galle: Check into your hotel and relax after the journey.",
      "Evening Leisure: Enjoy a peaceful evening in Galle."
    ],
    overnight: "Boutique hotel in Galle.",
    imageUrl: "/documents/images/tour/whales.png"
  },
  {
    day: 8,
    title: "Galle Fort & Airport Departure",
    points: [
      "Breakfast & Check-out: Enjoy breakfast at the hotel before departure.",
      "Galle Fort: Explore this UNESCO World Heritage Site, renowned for its historic streets and colonial architecture.",
      "Galle Lighthouse: Visit the famous lighthouse and enjoy views of the Indian Ocean.",
      "Photography & Shopping: Enjoy time for photographs and souvenir shopping.",
      "Airport Transfer: Travel to Bandaranaike International Airport (CMB) according to your flight schedule.",
      "Departure: Conclude your Sri Lankan journey with wonderful memories of its culture, scenery and wildlife."
    ],
    overnight: "N/A — departure day.",
    imageUrl: "/documents/images/tour/fort.png"
  }
]
,
    hotelRecommendation: "3–4 star hotels throughout, with a safari-camp style stay near Yala.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats, Nanu Oya to Ella; 4x4 safari jeep for Yala game drives.",
    meals: "Daily breakfast, plus lunch on Day 2. Other meals at your own choice.",
    included: [
      "7 nights' accommodation as listed",
      "Daily breakfast + 1 lunch",
      "Private vehicle and driver throughout",
      "Reserved train tickets, Nanu Oya to Ella",
      "2 jeep safaris in Yala National Park",
    ],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Additional Yala safari session", "Galle Fort sunset rampart walk with guide", "Whale watching add-on from Mirissa"],
    tourFaqs: [
      { q: "What can we expect to see in Yala?", a: "Yala has one of the highest leopard densities in the world, alongside elephants, crocodiles and abundant birdlife — sightings vary by visit but leopards are seen regularly." },
      { q: "Is an afternoon and a morning safari enough?", a: "Two safaris significantly improve your chances of good sightings, since animals are most active at dawn and dusk." },
    ],
  },
  {
    slug: "general-10-day-tour",
    title: "The Grand Ceylon Experience",
    category: "General Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Ancient city of Polonnaruwa", "Hill country by train", "Yala safari & south coast beaches"],
    price: "From $950 pp",
    blurb: "Our 8-day culture-to-safari route, extended with an ancient city and proper time to relax on the south coast.",
    motif: "sun",
    imageUrl: "/documents/images/tour/general5.png",
    heroTitle: "Grand Ceylon Discovery — 10 Days Across the Whole Island",
    intro:"A comprehensive route through ancient cities, tea country, wildlife and the south coast — enough time to properly settle into each place rather than just passing through.",
    overview:"Building on our 8-day route, this itinerary adds the medieval ruins of Polonnaruwa and extends your time on the south coast, including a chance at whale watching from Mirissa.",
    bestFor: "Travellers who want a complete, well-paced island overview",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Negombo → Polonnaruwa → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Colombo",
    itinerary:
[
  {
    day: 1,
    title: "Arrival, Pinnawala & Sigiriya",
    points: [
      "Airport Welcome: Arrive at Bandaranaike International Airport (CMB) and receive a traditional flower garland welcome.",
      "Chauffeur Greeting: Meet your private chauffeur-guide and receive assistance with luggage.",
      "Scenic Drive: Begin the journey towards Sigiriya through Sri Lanka's countryside.",
      "Pinnawala Elephant Orphanage: Observe elephants and learn about their care and conservation.",
      "Refreshment Stop: Enjoy a refreshing king coconut drink and a short break along the way.",
      "Hotel Check-in: Arrive in Sigiriya, relax and enjoy the evening at leisure."
    ],
    overnight: "Boutique hotel in Sigiriya.",
    imageUrl: "/documents/images/tour/polonnaruwa2.png"
  },
  {
    day: 2,
    title: "Sigiriya Rock Fortress",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Sigiriya Rock Fortress: Explore this UNESCO World Heritage Site, famous for its ancient royal citadel.",
      "Water Gardens: Discover the beautifully landscaped gardens and ancient engineering features.",
      "Sigiriya Frescoes: Admire the remarkable ancient paintings and historic Mirror Wall.",
      "Lion's Paw Entrance: Explore the iconic gateway before climbing towards the summit.",
      "Summit Views: Enjoy panoramic views of the surrounding forests and countryside, weather and fitness permitting."
    ],
    overnight: "Boutique hotel in Sigiriya.",
    imageUrl: "/documents/images/tour/sigiriya6.png"
  },
  {
    day: 3,
    title: "Dambulla Cave Temple & Kandy",
    points: [
      "Breakfast & Check-out: Depart Sigiriya after breakfast.",
      "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, renowned for its Buddhist murals and statues.",
      "Cave Shrines: Discover the historic cave interiors and their religious significance.",
      "Matale Spice Garden: Learn about Sri Lankan spices, including cinnamon, cardamom, cloves and pepper.",
      "Temple of the Sacred Tooth Relic: Visit this sacred Buddhist temple within the UNESCO-listed Sacred City of Kandy.",
      "Kandy Lake: Enjoy a relaxing walk beside the lake before dinner."
    ],
    overnight: "Boutique hotel in Kandy.",
    imageUrl: "/documents/images/tour/paints.png"
  },
  {
    day: 4,
    title: "Kandy to Nuwara Eliya",
    points: [
      "Breakfast & Departure: Enjoy breakfast before travelling into Sri Lanka's scenic hill country.",
      "Scenic Hill-Country Drive: Admire lush mountains, valleys and tea plantations along the way.",
      "Tea Factory Visit: Discover the traditional tea-making process.",
      "Tea Tasting: Sample freshly brewed Ceylon tea and learn about its distinctive flavours.",
      "Ramboda Falls: Stop to admire the waterfall and surrounding mountain scenery.",
      "Nuwara Eliya: Arrive in the charming hill town known as Little England and visit Gregory Lake, time permitting."
    ],
    overnight: "Boutique hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/kandy3.png"
  },
  {
    day: 5,
    title: "Scenic Train Journey from Nanu Oya to Ella",
    points: [
      "Breakfast & Transfer: Enjoy breakfast and transfer to Nanu Oya Railway Station.",
      "Train Journey: Board the scenic train towards Ella through Sri Lanka's central highlands.",
      "Tea Plantations: Admire rolling tea estates and lush green landscapes along the railway route.",
      "Mountain Scenery: Enjoy views of misty mountains, tunnels and picturesque countryside.",
      "Arrival in Ella: Meet your transfer and travel to the hotel.",
      "Ella Town: Check in, relax and explore the town at leisure."
    ],
    overnight: "Boutique hotel in Ella.",
    imageUrl: "/documents/images/tour/nuwaraeliya3.png"
  },
  {
    day: 6,
    title: "Ella Sightseeing & Transfer to Haputale",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Nine Arch Bridge: Visit the iconic railway bridge surrounded by lush greenery.",
      "Little Adam's Peak: Enjoy a scenic walk and panoramic views of Ella's mountain landscape.",
      "Ravana Falls: Admire the beautiful waterfall and its natural surroundings.",
      "Scenic Drive to Haputale: Continue through the picturesque hill country and tea-growing landscapes.",
      "Hotel Check-in: Arrive in Haputale, relax and prepare for an early visit to Lipton's Seat."
    ],
    overnight: "Boutique hotel in Haputale.",
    imageUrl: "/documents/images/tour/ella2.png"
  },
  {
    day: 7,
    title: "Haputale & Hill-Country Exploration",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Haputale Countryside: Discover the peaceful atmosphere of this scenic hill-country town.",
      "Tea Estate Views: Admire the rolling tea plantations and mist-covered mountain slopes.",
      "Local Experience: Explore the surrounding villages and learn about the region's tea-growing heritage.",
      "Leisure Time: Relax at the hotel or enjoy the beautiful natural surroundings.",
      "Early Night: Rest and prepare for the early-morning excursion to Lipton's Seat."
    ],
    overnight: "Boutique hotel in Haputale.",
    imageUrl: "/documents/images/tour/yala.png"
  },
  {
    day: 8,
    title: "Lipton's Seat, Diyaluma Falls & Transfer to Yala",
    points: [
      "Early Departure: Travel to Lipton's Seat for spectacular early-morning views.",
      "Lipton's Seat: Admire panoramic views across tea plantations, valleys and distant lowlands, weather permitting.",
      "Tea Estate Scenery: Discover the landscapes surrounding the historic tea-growing region.",
      "Diyaluma Falls: Visit one of Sri Lanka's tallest waterfalls and admire its dramatic natural setting.",
      "Journey to Yala: Continue towards Yala National Park through the changing landscapes of Sri Lanka.",
      "Hotel Check-in: Arrive in the Yala or Tissamaharama area, relax and prepare for the wildlife safari."
    ],
    overnight: "Boutique hotel in Yala / Tissamaharama.",
    imageUrl: "/documents/images/tour/mirissa1.png"
  },
  {
    day: 9,
    title: "Yala Morning Safari & Transfer to the South Coast",
    points: [
      "Early-Morning Safari: Explore Yala National Park by 4WD jeep with an experienced driver and tracker.",
      "Wildlife Watching: Look for Sri Lankan elephants, crocodiles, deer and colourful birdlife.",
      "Leopard Spotting: Keep watch for the elusive Sri Lankan leopard, which may be seen with luck.",
      "Breakfast & Check-out: Return to the hotel for breakfast, depending on the safari package.",
      "Scenic Coastal Drive: Travel towards Mirissa or Weligama along Sri Lanka's beautiful southern coast.",
      "Coastal Relaxation: Check in to the hotel and enjoy a relaxing evening, depending on arrival time."
    ],
    overnight: "Boutique hotel in Mirissa / Weligama.",
    imageUrl: "/documents/images/tour/whales.png"
  },
  {
    day: 10,
    title: "South Coast Exploration & Galle",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Mirissa: Discover the beautiful beach and relaxed coastal atmosphere.",
      "Weligama: Explore the sandy bay, known for its surfing culture.",
      "Beach Leisure: Enjoy time for photographs, relaxation or optional surfing lessons, conditions permitting.",
      "Unawatuna: Continue along the coast and discover this popular beach destination near Galle.",
      "Galle: Arrive in Galle, check in to your hotel and enjoy a relaxing evening."
    ],
    overnight: "Boutique hotel in Galle.",
    imageUrl: "/documents/images/tour/colombo5.png"
  }
]
,
    hotelRecommendation: "3–4 star hotels throughout, beachfront stays in Mirissa/Galle.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats, Nanu Oya to Ella; 4x4 safari jeep for Yala.",
    meals: "Daily breakfast, plus lunch on Day 3. Other meals at your own choice.",
    included: [
      "9 nights' accommodation as listed",
      "Daily breakfast + 1 lunch",
      "Private vehicle and driver throughout",
      "Reserved train tickets, Nanu Oya to Ella",
      "2 jeep safaris in Yala National Park",
      "Whale watching boat trip (seasonal)",
    ],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Turtle hatchery visit near Bentota (detour)", "Stilt fishermen photo stop, Koggala", "Private sunset catamaran cruise, Mirissa"],
    tourFaqs: [
      { q: "When is whale watching season?", a: "Roughly November to April off the south coast — outside that window we can't guarantee sightings, so let us know your travel dates." },
      { q: "Can Polonnaruwa be visited by bicycle?", a: "Yes — it's flat and spread out, so cycling among the ruins is a popular and pleasant way to see the site." },
    ],
  },
  {
    slug: "general-12-day-tour",
    title: "The Ultimate Sri Lanka Journey",
    category: "General Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Two ancient capitals", "Hill country by train", "Yala safari & extended south coast"],
    price: "From $1100 pp",
    blurb: "The most complete General Tour — both ancient capitals, hill country, safari and a proper south coast finish.",
    motif: "sun",
     imageUrl: "/documents/images/tour/general6.png",
    heroTitle: "Complete Ceylon Journey — 12 Days, Every Region",
    intro:
      "Our most thorough island route: two ancient capitals, the Cultural Triangle, tea country by rail, a wildlife safari and an unhurried finish on the south coast.",
    overview:
      "This is our 10-day route with Anuradhapura — Sri Lanka's first ancient capital — added at the start, plus an extra day on the south coast to properly unwind before departure.",
    bestFor: "Travellers with the time for a full, unhurried island circuit",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Negombo → Anuradhapura → Polonnaruwa → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Bentota → Colombo",
    itinerary:
[
  {
    day: 1,
    title: "Arrival, Pinnawala & Sigiriya",
    points: [
      "Airport Welcome: Receive a traditional flower garland welcome at Bandaranaike International Airport (CMB).",
      "Chauffeur Greeting: Meet your private chauffeur-guide and receive luggage assistance.",
      "Scenic Drive: Travel through Sri Lanka's countryside towards Pinnawala.",
      "Pinnawala Elephant Orphanage: Observe elephants and learn about their care and conservation.",
      "Journey to Sigiriya: Continue through scenic landscapes with a refreshment stop.",
      "Hotel Check-in: Arrive in Sigiriya, relax and enjoy the evening at leisure."
    ],
    overnight: "Boutique hotel in Sigiriya.",
    imageUrl: "/documents/images/tour/anuradhapura.png"
  },
  {
    day: 2,
    title: "Sigiriya Rock Fortress",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Sigiriya Rock Fortress: Explore this UNESCO World Heritage Site and its ancient royal ruins.",
      "Water Gardens: Discover the remarkable landscaped gardens and ancient engineering.",
      "Sigiriya Frescoes: Admire the historic paintings and Mirror Wall.",
      "Lion's Paw Entrance: Explore the iconic gateway before climbing towards the summit.",
      "Summit Views: Enjoy panoramic countryside views, weather and fitness permitting."
    ],
    overnight: "Boutique hotel in Sigiriya.",
    imageUrl: "/documents/images/tour/polonnaruwa.png"
  },
  {
    day: 3,
    title: "Dambulla Cave Temple & Kandy",
    points: [
      "Breakfast & Check-out: Depart Sigiriya after breakfast.",
      "Dambulla Cave Temple: Explore this UNESCO World Heritage Site and its ancient Buddhist murals and statues.",
      "Cave Shrines: Discover the historic Buddhist paintings and sacred interiors.",
      "Matale Spice Garden: Learn about Sri Lankan spices and traditional Ayurvedic plants.",
      "Temple of the Sacred Tooth Relic: Visit this sacred temple in the UNESCO-listed Sacred City of Kandy.",
      "Kandy Lake: Enjoy a relaxing lakeside walk before dinner."
    ],
    overnight: "Boutique hotel in Kandy.",
    imageUrl: "/documents/images/tour/sigiriya2.png"
  },
  {
    day: 4,
    title: "Kandy to Nuwara Eliya",
    points: [
      "Breakfast & Departure: Begin the scenic journey into Sri Lanka's hill country.",
      "Mountain Scenery: Admire lush valleys and rolling tea plantations.",
      "Tea Factory Visit: Discover the traditional tea-making process.",
      "Tea Tasting: Sample freshly brewed Ceylon tea.",
      "Ramboda Falls: Stop to admire the waterfall and surrounding scenery.",
      "Gregory Lake: Enjoy a relaxing lakeside walk in Nuwara Eliya, time permitting."
    ],
    overnight: "Boutique hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/dambulla.png"
  },
  {
    day: 5,
    title: "Scenic Train Journey from Nanu Oya to Ella",
    points: [
      "Breakfast & Transfer: Enjoy breakfast and transfer to Nanu Oya Railway Station.",
      "Scenic Train Journey: Travel through the central highlands towards Ella.",
      "Tea Plantations: Admire lush tea estates along the railway route.",
      "Mountain Views: Enjoy misty mountains, tunnels and picturesque countryside.",
      "Arrival in Ella: Transfer from the railway station to your hotel.",
      "Ella Town: Check in, relax and explore the town at leisure."
    ],
    overnight: "Boutique hotel in Ella.",
    imageUrl: "/documents/images/tour/nuwaraeliya.png"
  },
  {
    day: 6,
    title: "Ella Sightseeing & Transfer to Haputale",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Nine Arch Bridge: Visit the iconic railway bridge surrounded by lush greenery.",
      "Little Adam's Peak: Enjoy panoramic views of Ella's mountain landscape.",
      "Ravana Falls: Admire the picturesque waterfall and its natural surroundings.",
      "Scenic Drive: Continue through the hill country towards Haputale.",
      "Hotel Check-in: Relax and prepare for an early visit to Lipton's Seat."
    ],
    overnight: "Boutique hotel in Haputale.",
    imageUrl: "/documents/images/tour/ella2.png"
  },
  {
    day: 7,
    title: "Lipton's Seat, Diyaluma Falls & Transfer to Yala",
    points: [
      "Early Departure: Travel to Lipton's Seat for spectacular morning views.",
      "Lipton's Seat: Admire tea plantations, valleys and distant lowlands, weather permitting.",
      "Tea Country Scenery: Explore the beautiful landscapes around Haputale.",
      "Diyaluma Falls: Visit one of Sri Lanka's tallest waterfalls and admire its natural beauty.",
      "Journey to Yala: Travel towards the wildlife region through changing landscapes.",
      "Hotel Check-in: Arrive in Yala or Tissamaharama and prepare for the safari."
    ],
    overnight: "Boutique hotel in Yala / Tissamaharama.",
    imageUrl: "/documents/images/tour/train.png"
  },
  {
    day: 8,
    title: "Yala Morning Safari & Transfer to the South Coast",
    points: [
      "Early-Morning Safari: Explore Yala National Park in a 4WD jeep with an experienced driver and tracker.",
      "Wildlife Watching: Look for elephants, crocodiles, deer and colourful birdlife.",
      "Leopard Spotting: Watch for the elusive Sri Lankan leopard, which may be seen with luck.",
      "Breakfast & Check-out: Return to the hotel for breakfast, depending on the safari package.",
      "Coastal Drive: Travel towards Mirissa or Weligama along the southern coast.",
      "Beachside Evening: Check in and relax by the beach or enjoy a seaside dinner."
    ],
    overnight: "Boutique hotel in Mirissa / Weligama.",
    imageUrl: "/documents/images/tour/safari.png"
  },
  {
    day: 9,
    title: "South Coast Leisure Day",
    points: [
      "Breakfast: Enjoy a relaxed breakfast at the hotel.",
      "Mirissa Beach: Relax on the sandy beach and enjoy the tropical coastal atmosphere.",
      "Weligama Bay: Explore the beautiful bay and its surfing culture.",
      "Water Activities: Enjoy optional surfing lessons or snorkelling, depending on conditions.",
      "Wellness Experience: Choose an optional traditional Sri Lankan massage.",
      "Sunset & Dining: Explore local cafés or enjoy a peaceful seaside dinner."
    ],
    overnight: "Boutique hotel in Mirissa / Weligama.",
    imageUrl: "/documents/images/tour/mirissa.png"
  },
  {
    day: 10,
    title: "South Coast Exploration & Galle Fort",
    points: [
      "Breakfast & Check-out: Enjoy breakfast before exploring the southern coast.",
      "Weligama: Discover the sandy bay and local surfing scene, if not visited earlier.",
      "Unawatuna: Visit this popular beach destination near Galle.",
      "Moonstone Museum: Explore a local moonstone museum or gem shop, time permitting.",
      "Galle Fort: Discover this UNESCO World Heritage Site, its historic streets and colonial architecture.",
      "Galle Lighthouse: Enjoy ocean views and photography before checking into your hotel."
    ],
    overnight: "Boutique hotel in Galle.",
    imageUrl: "/documents/images/tour/whale.png"
  },
  {
    day: 11,
    title: "Galle to Colombo & Colombo City Tour",
    points: [
      "Breakfast & Check-out: Depart Galle after breakfast.",
      "Gangaramaya Temple: Visit one of Colombo's best-known Buddhist temples.",
      "Independence Square: Explore this landmark commemorating Sri Lanka's independence.",
      "Pettah Market: Discover the lively shopping district and view the Jami Ul-Alfar Mosque from outside, subject to access.",
      "Galle Face Green: Enjoy a walk along Colombo's popular oceanfront promenade.",
      "Shopping & Check-in: Visit Colombo Lotus Tower or shop for souvenirs, time permitting, before checking into your hotel."
    ],
    overnight: "Boutique hotel in Colombo.",
    imageUrl: "/documents/images/tour/maduoya.png"
  },
  {
    day: 12,
    title: "Colombo & Airport Departure",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Leisure Time: Relax or enjoy some free time, depending on your flight schedule.",
      "Last-Minute Shopping: Browse for Ceylon tea, souvenirs or local handicrafts, time permitting.",
      "Hotel Check-out: Collect your luggage and complete check-out.",
      "Airport Transfer: Travel to Bandaranaike International Airport (CMB) with your private chauffeur.",
      "Departure: Arrive with sufficient time for check-in and conclude your Sri Lankan journey."
    ],
    overnight: "N/A — departure day.",
    imageUrl: "/documents/images/tour/colombo2.png"
  }
]
,
    hotelRecommendation: "3–4 star hotels throughout, with beachfront stays on the south and west coasts.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats, Nanu Oya to Ella; 4x4 safari jeep for Yala.",
    meals: "Daily breakfast, plus lunch on Day 4. Other meals at your own choice.",
    included: [
      "11 nights' accommodation as listed",
      "Daily breakfast + 1 lunch",
      "Private vehicle and driver throughout",
      "Reserved train tickets, Nanu Oya to Ella",
      "2 jeep safaris in Yala National Park",
      "Whale watching boat trip (seasonal)",
      "Bentota river safari",
    ],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Trincomalee extension (add 2–3 days)", "Private cooking class, Kandy", "Stand-up paddleboarding, Bentota river"],
    tourFaqs: [
      { q: "Is 12 days too much for a first trip?", a: "Not at all — it lets you see every major region without rushing, which is why it's our most popular longer route." },
      { q: "Can we swap Bentota for more time in Galle?", a: "Yes — this itinerary is a starting point, and we're happy to rebalance nights between destinations to suit you." },
    ],
  },
  
{
  slug: "family-pinnawala-kandy-bentota-5-day-tour",
  title: "Little Explorers Family Escape",
  category: "Family Tours",
  duration: "5 Days / 4 Nights",
  highlights: [
    "Pinnawala Elephant Experience",
    "Kandy Cultural Heritage",
    "Kandy Lake & Royal Botanical Gardens",
    "Family-Friendly Turtle Conservation Visit",
    "Bentota River Safari",
    "Relaxing Family Beach Resort Stay"
  ],
  price: "From $1800 pp",
  blurb:
    "A relaxed family escape combining memorable wildlife experiences, Kandy's cultural attractions and a beachside finish in Bentota.",
  motif: "sun",
  imageUrl: "/documents/images/tour/beach.png",
  heroTitle: "Little Explorers Family Escape — 5 Days of Family Adventures",
  intro:
    "Discover Sri Lanka together on a family-friendly journey featuring elephants, cultural experiences, beautiful gardens and relaxing days by the beach.",
  overview:
    "Begin with an elephant experience in Pinnawala before discovering Kandy's cultural attractions and open green spaces. Continue to Bentota for a family-friendly coastal stay, with opportunities to learn about sea turtle conservation, explore mangrove-lined waterways and enjoy relaxed beach and pool time.",
  bestFor:
    "Families with children of all ages seeking a relaxed holiday with wildlife encounters, cultural experiences and beachside relaxation.",
  groupSize:
    "Private vehicle — customised to your family's size and needs.",
  physicalLevel: "Easy — minimal walking, with flexible activities suitable for families.",
  destinationsCovered:
    "Airport → Pinnawala → Kandy → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Arrival, Pinnawala & Kandy",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive assistance with your luggage.",
        "Journey to Pinnawala: Travel through Sri Lanka's countryside towards the Pinnawala area.",
        "Pinnawala Elephant Experience: Visit Pinnawala Elephant Orphanage to observe elephants and learn about their care and conservation.",
        "Family Lunch: Enjoy a relaxed lunch along the way before continuing to Kandy.",
        "Kandy Arrival: Check in to your family hotel and settle in after the journey.",
        "Kandy Lake: If time permits, enjoy an easy evening walk around the scenic lake in the city centre."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/pinnawala2.png"
    },
    {
      day: 2,
      title: "Kandy Family Experience",
      points: [
        "Breakfast: Enjoy breakfast at your family hotel before beginning the day's activities.",
        "Temple of the Sacred Tooth Relic: Visit Sri Dalada Maligawa and discover one of Sri Lanka's most important cultural and religious landmarks.",
        "Peradeniya Royal Botanical Gardens: Explore spacious gardens, tropical plants and shaded walking paths with plenty of room for children.",
        "Family Garden Time: Enjoy a leisurely stroll and take family photographs amid the gardens' beautiful scenery.",
        "Optional Kandyan Cultural Dance: Experience traditional Sri Lankan music and dance, subject to performance schedules.",
        "Relaxed Evening: Return to your hotel and enjoy dinner and family time at leisure."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/garden.png"
    },
    {
      day: 3,
      title: "Kandy to Bentota",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before departing Kandy.",
        "Scenic Drive: Travel towards the west coast through the countryside and changing landscapes of Sri Lanka.",
        "Family Lunch Stop: Take a comfortable break along the route, depending on travel time and family preferences.",
        "Turtle Conservation Visit: Visit a local turtle conservation centre where children can learn about sea turtles and conservation efforts, subject to availability and responsible animal-care practices.",
        "Bentota Arrival: Continue to Bentota and check in to your family-friendly beach resort.",
        "Beachside Relaxation: Spend the evening relaxing by the pool or beach before enjoying dinner together."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/kandy5.png"
    },
    {
      day: 4,
      title: "Bentota Family Adventure",
      points: [
        "Leisurely Breakfast: Enjoy breakfast at the resort and begin the day at your family's own pace.",
        "Bentota River Safari: Take a gentle boat safari through mangrove-lined waterways and look for local birds and other wildlife, subject to availability.",
        "Nature Discovery: Enjoy the river scenery and introduce children to the area's natural environment.",
        "Family Beach Time: Spend time on Bentota Beach or relax at the resort's swimming pool.",
        "Optional Water Activities: Choose suitable locally available water activities, depending on children's ages, weather and safety conditions.",
        "Sunset & Family Dinner: Enjoy a relaxed evening by the coast followed by dinner at the resort or a nearby restaurant."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/benthota.png"
    },
    {
      day: 5,
      title: "Beach Morning & Departure",
      points: [
        "Final Breakfast: Enjoy breakfast together at your resort.",
        "Beach or Pool Time: Spend a relaxed final morning enjoying the beach or resort facilities, depending on your flight schedule.",
        "Hotel Check-out: Pack your belongings and complete check-out at a convenient time.",
        "Private Transfer: Begin the journey from Bentota towards Bandaranaike International Airport (CMB).",
        "Comfort Stop: Enjoy a short refreshment break along the way if needed.",
        "Airport Departure: Arrive at the airport with sufficient time for check-in and your departure flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/beach.png"
    }
  ],

  hotelRecommendation:
    "Comfortable family-friendly accommodation in Kandy, followed by a beach resort in Bentota with suitable family facilities and pool access.",
  transportation:
    "Private air-conditioned vehicle with a dedicated chauffeur-guide, with comfortable stops arranged around your family's needs.",
  meals:
    "Daily breakfast. Other meals at your own choice unless arranged in advance.",

  included: [
    "4 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Visits described in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Elephant experience charges unless specified",
    "Turtle conservation centre admission or donations unless specified",
    "Bentota River safari",
    "Optional water activities",
    "Personal expenses and tips",
    "Travel insurance"
  ],

  optionalExperiences: [
    "Kandyan cultural dance performance",
    "Bentota River boat safari",
    "Suitable family water activities",
    "Additional family-friendly excursions",
    "Special family dining arrangements"
  ],

  tourFaqs: [
    {
      q: "Is this tour suitable for families with young children?",
      a: "Yes. The itinerary includes family-oriented experiences, garden visits, wildlife discovery and beach relaxation, with a private vehicle and flexibility for family breaks."
    },
    {
      q: "Can the itinerary be adjusted for our children?",
      a: "Yes. Departure times, rest stops and selected activities can be customised to suit your family's needs and the ages of your children."
    },
    {
      q: "Is the Bentota River safari suitable for children?",
      a: "A river safari may be suitable for families, depending on the operator's safety arrangements, boat facilities, children's ages and weather conditions. Availability should be confirmed in advance."
    },
    {
      q: "Are entrance fees included in the tour price?",
      a: "Entrance fees and optional activities are included only when specifically confirmed in the final quotation."
    },
    {
      q: "Can we spend more time at the beach?",
      a: "Yes. The itinerary can be customised to allow additional beach or pool time, subject to the overall duration and departure schedule."
    }
  ]
},

{
  slug: "little-explorers-highlands-to-coast-7-day-tour",
  title: "Little Explorers Highlands to Coast",
  category: "Family Tours",
  duration: "7 Days / 6 Nights",
  highlights: [
    "Pinnawala Elephant Experience",
    "Temple of the Sacred Tooth Relic",
    "Royal Botanical Gardens, Peradeniya",
    "Nuwara Eliya Tea Factory Experience",
    "Gregory Lake Family Pedal-Boat Ride",
    "Scenic Train Journey from Nanu Oya to Ella",
    "Nine Arch Bridge",
    "Ravana Falls",
    "Bentota River Safari",
    "Relaxing Family Beach Stay"
  ],
  price: "From $2200 pp",
  blurb: "A family-friendly Sri Lankan adventure combining elephant encounters, cultural discoveries, misty tea-country scenery, a memorable train journey and relaxing beach days.",
  motif: "sun",
  imageUrl: "/documents/images/tour/nuwaraeliya5.png",
  heroTitle: "Little Explorers Highlands to Coast — 7 Days of Family Adventures",
  intro: "Discover Sri Lanka together on a relaxed family journey filled with wildlife encounters, cultural landmarks, scenic train travel, cool hill-country landscapes and beachside fun.",
  overview: "Begin with a family-friendly elephant experience in Pinnawala before exploring Kandy's cultural attractions and botanical gardens. Continue into the cool highlands of Nuwara Eliya for a tea factory visit and time at Gregory Lake. Enjoy a scenic train journey from Nanu Oya to Ella, discover the famous Nine Arch Bridge, and travel to Bentota for river wildlife, beach relaxation and family time by the coast.",
  bestFor: "Families with children seeking a mix of wildlife, culture, scenic train travel, nature and beach relaxation.",
  groupSize: "Private vehicle — customised to your family's size and needs.",
  physicalLevel: "Easy to moderate — mostly relaxed sightseeing, with optional walking and family activities.",
  destinationsCovered: "Airport → Pinnawala → Kandy → Nuwara Eliya → Ella → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Arrival, Pinnawala & Kandy",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive assistance with your luggage.",
        "Journey to Pinnawala: Travel through Sri Lanka's countryside towards the Pinnawala area.",
        "Pinnawala Elephant Experience: Enjoy a family-friendly elephant experience and learn about elephants and their care.",
        "Continue to Kandy: Travel onward to Kandy after your Pinnawala visit.",
        "Hotel Check-in: Settle into your family hotel and take some time to relax after your journey.",
        "Kandy Lake: If time permits, enjoy a gentle evening stroll around scenic Kandy Lake."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy4.png"
    },
    {
      day: 2,
      title: "Kandy Sightseeing",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's sightseeing.",
        "Temple of the Sacred Tooth Relic: Visit Sri Dalada Maligawa, one of Sri Lanka's most important cultural and religious landmarks.",
        "Cultural Discovery: Learn about the temple's history and significance during your visit.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, known for their tropical plants, spacious lawns and shaded pathways.",
        "Family Garden Time: Enjoy a relaxed walk and take family photographs among the gardens' beautiful surroundings.",
        "Optional Kandyan Cultural Dance: Attend a traditional Kandyan dance performance, subject to show schedules."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/garden2.png"
    },
    {
      day: 3,
      title: "Kandy to Nuwara Eliya",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before leaving Kandy for the hill country.",
        "Scenic Hill-Country Drive: Travel through winding roads, green hills and changing mountain scenery.",
        "Tea Factory Visit: Stop at a tea factory for a short, family-friendly introduction to Sri Lanka's tea-making process, subject to availability.",
        "Tea Country Discovery: Learn how tea leaves are processed and enjoy views of the surrounding tea plantations.",
        "Gregory Lake: Visit Gregory Lake and enjoy the open scenery around the water.",
        "Family Pedal-Boat Ride: Enjoy an optional pedal-boat ride, subject to availability and local safety requirements, before checking in to your hotel."
      ],
      overnight: "Family hotel in Nuwara Eliya.",
      imageUrl: "/documents/images/tour/tea2.png"
    },
    {
      day: 4,
      title: "Scenic Train to Ella",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before travelling to Nanu Oya railway station.",
        "Train Station Arrival: Arrive at Nanu Oya with sufficient time to board your scheduled train.",
        "Scenic Train Journey: Board the train from Nanu Oya to Ella and enjoy views of tea plantations, mountain scenery and lush valleys.",
        "Ella Arrival: Meet your chauffeur-guide at the agreed arrival point and continue with the day's activities.",
        "Nine Arch Bridge: Visit the famous Nine Arch Bridge and enjoy the surrounding greenery and scenic viewpoints.",
        "Ella Town: Spend a relaxed evening exploring Ella town before returning to your family hotel."
      ],
      overnight: "Family hotel in Ella.",
      imageUrl: "/documents/images/tour/train2.png"
    },
    {
      day: 5,
      title: "Ella to Bentota",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before departing Ella.",
        "Optional Ravana Falls Visit: Stop near Ravana Falls to admire the waterfall and surrounding scenery.",
        "Family-Friendly Stop: Enjoy a short break for photographs and refreshments along the route.",
        "Scenic Drive to the Coast: Continue towards Bentota through Sri Lanka's changing landscapes.",
        "Beach Resort Arrival: Check in to your family-friendly beach resort and settle into your room.",
        "Beach Relaxation: Enjoy some family time by the beach or pool before dinner."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/water.png"
    },
    {
      day: 6,
      title: "Bentota Family Day",
      points: [
        "Leisurely Breakfast: Enjoy breakfast at the resort and begin the day at your family's own pace.",
        "Bentota River Safari: Take a gentle boat safari through mangrove-lined waterways, subject to weather and operator availability.",
        "Wildlife Discovery: Look out for birds and other wildlife while enjoying the river's natural surroundings.",
        "Turtle Conservation Centre: Visit a turtle conservation centre to learn about sea turtles and conservation efforts, subject to opening hours and availability.",
        "Beach & Pool Time: Alternatively, enjoy free time on Bentota Beach or relax by the resort pool.",
        "Family Evening: Enjoy a relaxed evening and family dinner by the coast."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/beach3.png"
    },
    {
      day: 7,
      title: "Beach Morning & Departure",
      points: [
        "Final Breakfast: Enjoy breakfast together at your beach resort.",
        "Beach or Pool Time: Spend a relaxed final morning by the beach or pool, depending on your departure schedule.",
        "Hotel Check-out: Pack your belongings and complete check-out at a suitable time.",
        "Private Airport Transfer: Begin the journey from Bentota to Bandaranaike International Airport (CMB).",
        "Comfort Stop: Enjoy a short refreshment stop along the way if needed.",
        "Airport Departure: Arrive at the airport with sufficient time for airline check-in and your departure flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/turtul.png"
    }
  ],

  hotelRecommendation: "Family-friendly accommodation in Kandy and Nuwara Eliya, followed by a comfortable family hotel in Ella and a beach resort in Bentota with suitable family facilities and pool access.",

  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide. The Nanu Oya-to-Ella train journey is arranged separately, with the chauffeur-guide meeting the family at the agreed arrival point in Ella. Train tickets are subject to availability.",

  meals: "Daily breakfast. Lunches and dinners are at your own choice unless arranged in advance.",

  included: [
    "6 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide, except during the train journey",
    "Airport welcome and luggage assistance",
    "Transfers between destinations described in the itinerary",
    "Sightseeing stops listed in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Pinnawala elephant experience charges unless specified",
    "Temple of the Sacred Tooth Relic entrance or donation charges, where applicable",
    "Royal Botanical Gardens entrance fees",
    "Tea factory admission or tour charges",
    "Gregory Lake pedal-boat charges",
    "Nanu Oya-to-Ella train tickets unless specified",
    "Bentota River safari charges",
    "Turtle conservation centre admission or donations",
    "Optional activities and experiences",
    "Personal expenses and tips",
    "Travel insurance"
  ],

  optionalExperiences: [
    "Kandyan cultural dance performance",
    "Gregory Lake pedal-boat ride",
    "Reserved seats for the scenic train journey from Nanu Oya to Ella",
    "Bentota River safari",
    "Turtle conservation centre visit",
    "Additional family-friendly activities in Ella or Bentota"
  ],

  tourFaqs: [
    {
      q: "Is this tour suitable for families with children?",
      a: "Yes. The itinerary combines cultural attractions, gardens, wildlife experiences, scenic travel and beach relaxation. Activities and rest stops can be adjusted to suit the children's ages and your family's pace."
    },
    {
      q: "Is the train journey from Nanu Oya to Ella guaranteed?",
      a: "Train travel depends on the published schedule, ticket availability and railway operations. Advance booking is recommended, and the journey should be confirmed before the tour is finalised."
    },
    {
      q: "Will our chauffeur-guide travel with us on the train?",
      a: "The chauffeur-guide normally travels separately by road and meets the family at the agreed arrival point in Ella. The exact arrangement should be confirmed before departure."
    },
    {
      q: "Are the tea factory and Gregory Lake activities suitable for children?",
      a: "They can be enjoyable family stops. The tea factory visit should be arranged with a suitable operator, and pedal-boat participation depends on availability, children's ages and local safety requirements."
    },
    {
      q: "Are entrance fees and optional activities included?",
      a: "They are included only when specifically listed in the confirmed quotation. Train tickets, boat rides, entrance fees and optional experiences should be checked before booking."
    },
    {
      q: "Can we adjust the itinerary for younger children?",
      a: "Yes. The tour can be customised with additional breaks, shorter sightseeing visits and flexible activity times, subject to travel distances and the train schedule."
    }
  ]
},

{
  slug: "family-elephant-highlands-wildlife-8-day-tour",
  title: "Elephant, Highlands & Wildlife Family Escape",
  category: "Family Tours",
  duration: "8 Days / 7 Nights",
  highlights: [
    "Pinnawala Elephant Experience",
    "Kandy Lake & Spice Garden",
    "Temple of the Sacred Tooth Relic",
    "Royal Botanical Gardens, Peradeniya",
    "Tea Factory Visit in Nuwara Eliya",
    "Gregory Lake Pedal-Boat Ride",
    "Scenic Train Journey from Nanu Oya to Ella",
    "Nine Arch Bridge",
    "Udawalawe National Park Jeep Safari",
    "Elephant Transit Home Visit",
    "Bentota Beach Relaxation",
    "Optional Turtle Hatchery Visit"
  ],
  price: "From $2500 pp",
  blurb: "A family adventure combining elephant encounters, hill-country scenery, a memorable train journey, wildlife safari and relaxing beach time.",
  motif: "sun",
  imageUrl: "/documents/images/tour/kandy6.png",
  heroTitle: "Elephant, Highlands & Wildlife Family Escape — 8 Days",
  intro: "Experience Sri Lanka as a family on a journey filled with elephants, cultural discoveries, tea-country scenery, scenic train travel, wildlife encounters and a relaxing beach finish.",
  overview: "Begin in Pinnawala with an elephant experience before exploring Kandy's cultural attractions and peaceful lake surroundings. Travel into the cool highlands of Nuwara Eliya for a tea factory visit and a family pedal-boat ride at Gregory Lake. Continue by scenic train to Ella, discover the Nine Arch Bridge, and head to Udawalawe for an exciting national park safari. Finish the journey with a relaxed coastal stay in Bentota before departure.",
  bestFor: "Families with children who enjoy wildlife, elephants, scenic train journeys, cultural attractions and beach relaxation.",
  groupSize: "Private vehicle — customised to your family's size and needs.",
  physicalLevel: "Easy to moderate — mostly relaxed sightseeing, with optional walks and a jeep safari.",
  destinationsCovered: "Airport → Pinnawala → Kandy → Nuwara Eliya → Ella → Udawalawe → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Airport, Pinnawala & Kandy",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive assistance with your luggage.",
        "Journey to Pinnawala: Travel directly towards Pinnawala through Sri Lanka's countryside.",
        "Pinnawala Elephant Experience: Visit Pinnawala and observe the elephants during their daily bathing and feeding routines, subject to the day's schedule.",
        "Continue to Kandy: Travel onwards to Kandy after your Pinnawala visit.",
        "Hotel Check-in: Check in to your family hotel and relax after your journey.",
        "Relaxed Evening: Enjoy a quiet evening at the hotel, depending on your arrival time."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/pinnawala3.png"
    },
    {
      day: 2,
      title: "Pinnawala & Kandy",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's activities.",
        "Pinnawala Visit: Return to Pinnawala to observe the elephants bathing, subject to the daily schedule and access arrangements.",
        "Elephant Observation: Spend time learning about the elephants and observing their routines.",
        "Spice Garden Visit: Continue towards Kandy via a spice garden and discover some of Sri Lanka's traditional spices and plants.",
        "Kandy Lake: Enjoy an easy walk around Kandy Lake and take in the surrounding city scenery.",
        "Relaxed Evening: Return to your hotel and enjoy family time at leisure."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy6.png"
    },
    {
      day: 3,
      title: "Kandy Sightseeing",
      points: [
        "Breakfast: Enjoy breakfast at the hotel before setting out.",
        "Temple of the Sacred Tooth Relic: Visit Sri Dalada Maligawa, one of Sri Lanka's most significant cultural and religious landmarks.",
        "Cultural Discovery: Learn about the temple's history and importance during your visit.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, with tropical plants, open lawns and shaded paths.",
        "Family Garden Time: Enjoy a relaxed stroll and take photographs among the gardens' beautiful surroundings.",
        "Optional Kandyan Dance Show: Attend a traditional Kandyan cultural dance performance, subject to the show's schedule."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy7.png"
    },
    {
      day: 4,
      title: "Kandy to Nuwara Eliya",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before departing Kandy.",
        "Scenic Hill-Country Drive: Travel into the central highlands through winding roads and green mountain landscapes.",
        "Tea Factory Visit: Stop at a tea factory to discover how Sri Lankan tea is produced, subject to availability.",
        "Tea Plantation Views: Enjoy the surrounding tea-growing scenery and take family photographs.",
        "Gregory Lake: Visit Gregory Lake and enjoy its open spaces and mountain setting.",
        "Family Pedal-Boat Ride: Enjoy an optional pedal-boat ride, subject to availability and local safety requirements, before checking in to your hotel."
      ],
      overnight: "Family hotel in Nuwara Eliya.",
      imageUrl: "/documents/images/tour/nuwaraeliya6.png"
    },
    {
      day: 5,
      title: "Scenic Train to Ella",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before travelling to Nanu Oya railway station.",
        "Railway Station Arrival: Arrive with sufficient time to board your scheduled train.",
        "Scenic Train Journey: Travel from Nanu Oya to Ella and enjoy views of tea plantations, green valleys and misty hills.",
        "Ella Arrival: Meet your chauffeur-guide at the agreed meeting point after arriving in Ella.",
        "Nine Arch Bridge: Visit the famous Nine Arch Bridge and enjoy an easy walk to a suitable viewpoint, depending on conditions.",
        "Ella Town: Spend a relaxed evening exploring Ella town before returning to your family hotel."
      ],
      overnight: "Family hotel in Ella.",
      imageUrl: "/documents/images/tour/ella1.png"
    },
    {
      day: 6,
      title: "Ella to Udawalawe",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before departing Ella.",
        "Journey to Udawalawe: Travel towards Udawalawe through scenic countryside.",
        "Safari Preparation: Arrive in the Udawalawe area and prepare for your afternoon national park safari.",
        "Udawalawe National Park Safari: Explore the park on a jeep safari and look for elephants and other wildlife in its open grasslands and natural habitats.",
        "Family Wildlife Experience: Enjoy opportunities to observe wildlife from the safari vehicle while following the guide's safety instructions.",
        "Relaxed Evening: Return to your accommodation near the park and enjoy a quiet evening."
      ],
      overnight: "Hotel near Udawalawe National Park.",
      imageUrl: "/documents/images/tour/udawalawa.png"
    },
    {
      day: 7,
      title: "Udawalawe to Bentota",
      points: [
        "Breakfast: Enjoy breakfast at your hotel near Udawalawe.",
        "Optional Elephant Transit Home Visit: Visit the Elephant Transit Home to observe feeding sessions for orphaned elephant calves, subject to the published schedule and visitor access arrangements.",
        "Learn About Elephant Conservation: Discover the centre's rehabilitation work and its role in preparing elephants for life in the wild.",
        "Drive to Bentota: Continue towards Sri Lanka's west coast through changing countryside scenery.",
        "Beach Resort Check-in: Arrive in Bentota and settle into your family-friendly beach resort.",
        "Coastal Relaxation: Enjoy a relaxed evening by the beach or pool."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/benthota1.png"
    },
    {
      day: 8,
      title: "Beach Morning & Departure",
      points: [
        "Final Breakfast: Enjoy breakfast together at your beach resort.",
        "Free Morning: Relax at the resort or spend time on the beach, depending on your departure schedule.",
        "Optional Turtle Hatchery Visit: If time permits, visit a local turtle conservation centre to learn about sea turtle conservation, subject to opening hours and responsible animal-care practices.",
        "Hotel Check-out: Complete check-out and prepare for your airport transfer.",
        "Private Airport Transfer: Drive from Bentota to Bandaranaike International Airport (CMB).",
        "Departure: Arrive at the airport with sufficient time for airline check-in and your international flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/beach3.png"
    }
  ],

  hotelRecommendation: "Family-friendly accommodation in Kandy for three nights, a comfortable hotel in Nuwara Eliya, a family hotel in Ella, accommodation near Udawalawe National Park, and a beach resort in Bentota.",

  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide throughout the road journey. The Nanu Oya-to-Ella train journey is arranged separately, with the chauffeur-guide meeting the family in Ella. Train tickets are subject to availability and should be confirmed in advance.",

  meals: "Daily breakfast. Lunches and dinners are at your own choice unless arranged in advance.",

  included: [
    "7 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide, except during the train journey",
    "Airport welcome and luggage assistance",
    "Road transfers between destinations listed in the itinerary",
    "Sightseeing stops listed in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Pinnawala elephant experience charges unless specified",
    "Spice garden purchases or optional experiences",
    "Temple of the Sacred Tooth Relic and Royal Botanical Gardens entrance charges, where applicable",
    "Tea factory admission or tour charges",
    "Gregory Lake pedal-boat charges",
    "Nanu Oya-to-Ella train tickets unless specified",
    "Udawalawe National Park entrance fees and jeep safari charges unless specified",
    "Elephant Transit Home visit charges, if applicable",
    "Optional turtle conservation centre admission or donations",
    "Optional activities not specifically included in the quotation",
    "Personal expenses and tips",
    "Travel insurance"
  ],

  optionalExperiences: [
    "Additional Pinnawala elephant experience",
    "Spice garden experience",
    "Kandyan cultural dance performance",
    "Gregory Lake pedal-boat ride",
    "Reserved seats for the Nanu Oya-to-Ella scenic train journey",
    "Udawalawe National Park jeep safari",
    "Elephant Transit Home visit",
    "Turtle conservation centre visit in the Bentota area",
    "Additional family-friendly activities"
  ],

  tourFaqs: [
    {
      q: "Is this tour suitable for families with children?",
      a: "Yes. The itinerary combines cultural attractions, elephants, tea-country scenery, a scenic train journey, wildlife safari and beach relaxation. Activity timings and rest stops can be adjusted to suit your family's needs."
    },
    {
      q: "Will we visit Pinnawala on both Day 1 and Day 2?",
      a: "The itinerary includes a Pinnawala visit on both days. The timing and activities should be coordinated in advance to avoid unnecessary repeat travel and to match the elephant bathing and feeding schedules."
    },
    {
      q: "Is the scenic train journey from Nanu Oya to Ella guaranteed?",
      a: "Train travel depends on the railway timetable, ticket availability and operating conditions. Tickets and the planned departure should be confirmed before the tour is finalised."
    },
    {
      q: "Can we see elephants during the Udawalawe safari?",
      a: "Udawalawe is well known for its elephant population, but wildlife sightings cannot be guaranteed. Sightings depend on animal movements, weather and other natural conditions."
    },
    {
      q: "Can we visit the Elephant Transit Home?",
      a: "A visit may be possible depending on the centre's visitor arrangements and feeding schedule. Confirm access and timing before including it in the final itinerary."
    },
    {
      q: "Are safari fees and other entrance tickets included?",
      a: "Fees are included only when specifically stated in the confirmed quotation. National park admission, jeep hire, train tickets and optional experiences should be confirmed before booking."
    },
    {
      q: "Can we spend more time at the beach?",
      a: "Yes. The final morning can be adjusted around your flight time, although a turtle conservation visit should only be planned if sufficient time remains for the drive to the airport."
    }
  ]
},

    
{
  slug: "ultimate-family-sri-lanka-adventure-10-day-tour",
  title: "Ultimate Family Sri Lanka Adventure",
  category: "Family Tours",
  duration: "10 Days / 9 Nights",
  highlights: [
    "Relaxing Arrival in Negombo",
    "Sigiriya Rock Fortress",
    "Traditional Village Tour & Canoe Ride",
    "Pinnawala Elephant Experience",
    "Kandy Cultural Heritage",
    "Royal Botanical Gardens, Peradeniya",
    "Nuwara Eliya Tea Factory Visit",
    "Gregory Lake Pedal-Boat Ride",
    "Scenic Train Journey from Nanu Oya to Ella",
    "Nine Arch Bridge",
    "Udawalawe National Park Jeep Safari",
    "Elephant Transit Home Visit",
    "Bentota Turtle Conservation Visit",
    "Bentota Beach & River Safari"
  ],
  price: "From $3000 pp",
  blurb: "A memorable 10-day family holiday combining ancient landmarks, elephants, cultural discoveries, scenic train travel, wildlife safaris and relaxing beach days.",
  motif: "sun",
  imageUrl: "/documents/images/tour/sigiriya1.png",
  heroTitle: "Ultimate Family Sri Lanka Adventure — 10 Days of Discovery",
  intro: "Discover the best of Sri Lanka together on a family journey filled with exciting wildlife encounters, cultural landmarks, scenic mountain landscapes and relaxing coastal experiences.",
  overview: "Begin with a relaxing stay in Negombo before exploring the iconic Sigiriya Rock Fortress and enjoying a traditional village experience. Discover elephants and cultural attractions around Pinnawala and Kandy, then travel into the cool tea country of Nuwara Eliya. Continue by scenic train to Ella, experience an elephant safari in Udawalawe and finish with three nights in Bentota for turtle conservation, river adventures and beachside relaxation.",
  bestFor: "Families with children who want a varied Sri Lankan holiday combining history, culture, wildlife, scenic journeys and beach relaxation.",
  groupSize: "Private vehicle — customised to your family's size and needs.",
  physicalLevel: "Easy to moderate — Sigiriya involves a substantial climb, while other activities can be adjusted to suit the family's needs.",
  destinationsCovered: "Airport → Negombo → Sigiriya → Pinnawala → Kandy → Nuwara Eliya → Ella → Udawalawe → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Negombo",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive assistance with your luggage.",
        "Transfer to Negombo: Travel to your family hotel in Negombo after your flight.",
        "Hotel Check-in: Settle into your room and take time to recover from your journey.",
        "Pool Time: Enjoy a relaxing swim or some downtime at the hotel, depending on the facilities available.",
        "Family Dinner: Enjoy an early dinner at the hotel or a nearby family-friendly restaurant.",
        "Relaxed Evening: Rest well before beginning your Sri Lankan adventure the following day."
      ],
      overnight: "Family hotel in Negombo.",
      imageUrl: "/documents/images/tour/negombo006.jpg"
    },
    {
      day: 2,
      title: "Sigiriya Rock Fortress",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before travelling towards Sigiriya.",
        "Journey to Sigiriya: Travel through Sri Lanka's countryside towards the Cultural Triangle.",
        "Sigiriya Rock Fortress: Explore the iconic ancient rock citadel, with the climb offering a memorable challenge for older children and active families.",
        "Historic Discoveries: Discover the ancient gardens, water features and historic remains around the fortress, subject to available access and time.",
        "Traditional Village Tour: Enjoy a village experience that may include a bullock-cart ride and a canoe journey, depending on local arrangements.",
        "Hotel Relaxation: Check in to your accommodation in Sigiriya or Habarana and enjoy a relaxed evening."
      ],
      overnight: "Family hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiriya-lion-rock-fortress-landscape.jpg"
    },
    {
      day: 3,
      title: "Pinnawala & Kandy",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before departing the Sigiriya or Habarana area.",
        "Journey to Pinnawala: Travel towards Pinnawala through the Sri Lankan countryside.",
        "Pinnawala Elephant Experience: Observe elephants and learn about their care, with bathing activities subject to the daily schedule.",
        "Continue to Kandy: Travel onward to Kandy after the visit.",
        "Spice Garden Stop: Visit a spice garden along the route and discover traditional Sri Lankan spices and plants.",
        "Kandy Lake: If time permits, enjoy an easy evening walk around Kandy Lake before settling in at your hotel."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/pinnawala011.jpg"
    },
    {
      day: 4,
      title: "Kandy Sightseeing",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's sightseeing.",
        "Temple of the Sacred Tooth Relic: Visit Sri Dalada Maligawa, one of Sri Lanka's most significant cultural and religious landmarks.",
        "Cultural Discovery: Learn about the temple's history and importance during your visit.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, known for tropical plants, spacious lawns and shaded paths.",
        "Family Garden Time: Enjoy a relaxed walk through the gardens and take family photographs.",
        "Optional Kandyan Dance Show: Experience traditional Kandyan music and dance, subject to the performance schedule."
      ],
      overnight: "Family hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy013.jpg"
    },
    {
      day: 5,
      title: "Kandy to Nuwara Eliya",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before departing Kandy for the hill country.",
        "Scenic Drive: Travel through winding mountain roads and green highland landscapes.",
        "Tea Factory Visit: Stop at a tea factory to discover how Sri Lankan tea is produced, subject to availability.",
        "Tea Plantation Views: Enjoy the surrounding tea-growing scenery and learn about the region's tea heritage.",
        "Gregory Lake: Visit Gregory Lake and enjoy its open spaces and cool mountain atmosphere.",
        "Pedal-Boat Ride: Enjoy an optional family pedal-boat ride, subject to availability and local safety requirements, before checking in to your hotel."
      ],
      overnight: "Family hotel in Nuwara Eliya.",
      imageUrl: "/documents/images/tour/nuwara eliya013.jpg"
    },
    {
      day: 6,
      title: "Scenic Train to Ella",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before travelling to Nanu Oya railway station.",
        "Station Arrival: Arrive with sufficient time to board your scheduled train.",
        "Scenic Train Journey: Travel from Nanu Oya to Ella and enjoy views of tea plantations, misty hills and green valleys.",
        "Ella Arrival: Meet your chauffeur-guide at the agreed meeting point after arriving in Ella.",
        "Nine Arch Bridge: Visit the famous Nine Arch Bridge and enjoy an easy walk to a suitable viewpoint, depending on conditions.",
        "Ella Town: Spend a relaxed evening exploring Ella town before returning to your family hotel."
      ],
      overnight: "Family hotel in Ella.",
      imageUrl: "/documents/images/tour/ella014.jpg"
    },
    {
      day: 7,
      title: "Ella to Udawalawe",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before leaving Ella.",
        "Journey to Udawalawe: Travel through scenic countryside towards Udawalawe National Park.",
        "Safari Preparation: Arrive in the area and prepare for your afternoon safari.",
        "Udawalawe National Park Safari: Explore the park by jeep and look for elephant herds and other wildlife in their natural habitats.",
        "Family Wildlife Experience: Enjoy opportunities to observe wildlife from the safari vehicle while following your guide's safety instructions.",
        "Relaxed Evening: Return to your accommodation near the park and enjoy a quiet evening."
      ],
      overnight: "Hotel near Udawalawe National Park.",
      imageUrl: "/documents/images/tour/udawalawe14.jpg"
    },
    {
      day: 8,
      title: "Udawalawe to Bentota",
      points: [
        "Breakfast: Enjoy breakfast at your hotel near Udawalawe.",
        "Elephant Transit Home: Visit the Elephant Transit Home to observe feeding sessions for orphaned elephant calves, subject to the published schedule and visitor access arrangements.",
        "Elephant Conservation: Learn about the centre's rehabilitation work and its role in preparing elephants for life in the wild.",
        "Drive to Bentota: Continue towards Sri Lanka's west coast through changing countryside scenery.",
        "Beach Resort Check-in: Arrive in Bentota and settle into your family-friendly beach resort.",
        "Coastal Relaxation: Enjoy free time by the beach or pool before dinner."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/beach34.jpg"
    },
    {
      day: 9,
      title: "Bentota Beach Day",
      points: [
        "Leisurely Breakfast: Enjoy breakfast at the resort and begin the day at your family's own pace.",
        "Turtle Conservation Visit: Visit a local turtle conservation centre to learn about sea turtles and conservation efforts, subject to opening hours and responsible animal-care practices.",
        "Family Beach Time: Enjoy Bentota Beach or relax by the resort pool.",
        "Optional River Safari: Explore Bentota's mangrove-lined waterways on a boat safari, subject to weather and operator availability.",
        "Free Leisure Time: Enjoy additional time at the beach or resort, depending on your family's interests.",
        "Farewell Family Dinner: Celebrate your final full evening in Sri Lanka with a relaxed family dinner by the coast."
      ],
      overnight: "Family-friendly beach resort in Bentota.",
      imageUrl: "/documents/images/tour/benthota125.jpg"
    },
    {
      day: 10,
      title: "Departure",
      points: [
        "Final Breakfast: Enjoy breakfast together at your beach resort.",
        "Relaxed Morning: Spend some time enjoying the resort facilities, depending on your flight schedule.",
        "Hotel Check-out: Pack your belongings and complete check-out at a suitable time.",
        "Private Airport Transfer: Begin the drive from Bentota to Bandaranaike International Airport (CMB).",
        "Comfort Stop: Enjoy a short refreshment stop along the way if needed.",
        "Airport Departure: Arrive at the airport with sufficient time for airline check-in and your departure flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo20.jpg"
    }
  ],

  hotelRecommendation: "Family-friendly accommodation in Negombo, Sigiriya or Habarana, Kandy, Nuwara Eliya and Ella, followed by a comfortable hotel near Udawalawe National Park and a beach resort in Bentota.",

  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide throughout the road journey. The Nanu Oya-to-Ella train journey is arranged separately, with the chauffeur-guide meeting the family at the agreed arrival point in Ella. Train tickets are subject to availability and should be confirmed in advance.",

  meals: "Daily breakfast. Lunches and dinners are at your own choice unless arranged in advance.",

  included: [
    "9 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide, except during the train journey",
    "Airport welcome and luggage assistance",
    "Road transfers between destinations listed in the itinerary",
    "Sightseeing stops listed in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Sigiriya Rock Fortress entrance tickets",
    "Village tour, bullock-cart ride and canoe ride charges",
    "Pinnawala elephant experience charges",
    "Spice garden optional experiences or purchases",
    "Temple of the Sacred Tooth Relic and Royal Botanical Gardens entrance charges, where applicable",
    "Tea factory admission or tour charges",
    "Gregory Lake pedal-boat charges",
    "Nanu Oya-to-Ella train tickets unless specified",
    "Udawalawe National Park entrance fees and jeep safari charges unless specified",
    "Elephant Transit Home visit charges, if applicable",
    "Turtle conservation centre admission or donations",
    "Bentota River safari and optional activities",
    "Personal expenses and tips",
    "Travel insurance"
  ],

  optionalExperiences: [
    "Sigiriya Rock Fortress visit",
    "Traditional village tour with bullock-cart and canoe experiences",
    "Spice garden experience",
    "Kandyan cultural dance performance",
    "Gregory Lake pedal-boat ride",
    "Reserved seats for the Nanu Oya-to-Ella scenic train journey",
    "Udawalawe National Park jeep safari",
    "Elephant Transit Home visit",
    "Bentota turtle conservation centre visit",
    "Bentota River safari",
    "Additional family-friendly activities"
  ],

  tourFaqs: [
    {
      q: "Is this 10-day tour suitable for families with children?",
      a: "Yes. The itinerary combines cultural attractions, wildlife encounters, scenic travel and beach relaxation. Some activities, particularly the Sigiriya climb, require more effort and should be considered in relation to the children's ages and fitness."
    },
    {
      q: "Is climbing Sigiriya Rock Fortress suitable for younger children?",
      a: "The climb includes many steps and exposed sections. Suitability depends on each child's age, fitness, confidence and the weather. Families can enjoy the surrounding gardens and area if they choose not to climb."
    },
    {
      q: "Can we guarantee seats on the scenic train from Nanu Oya to Ella?",
      a: "Train tickets depend on availability and railway operations. Advance booking is recommended, and the final train arrangement should be confirmed before travel."
    },
    {
      q: "Will we definitely see elephants in Udawalawe?",
      a: "Udawalawe is well known for elephants, but wildlife sightings cannot be guaranteed. Sightings depend on animal movements, weather and natural conditions."
    },
    {
      q: "Can we visit the Elephant Transit Home feeding session?",
      a: "A visit may be possible depending on the centre's published feeding schedule and visitor access arrangements. Confirm the timing before finalising the day's plan."
    },
    {
      q: "Are entrance tickets and safari fees included?",
      a: "Fees are included only when specifically stated in the confirmed quotation. Sigiriya tickets, train tickets, safari admission, jeep hire and optional activities should be confirmed before booking."
    },
    {
      q: "Can we spend more time relaxing in Bentota?",
      a: "Yes. The Bentota stay can be adjusted around your family's preferences and flight schedule, subject to the total tour duration and airport transfer time."
    }
  ]
},

{
  slug: "sri-lanka-adventure-highlands-rainforest-coast-12-day-tour",
  title: "Sri Lanka Adventure: Highlands, Rainforest & Coast",
  category: "Adventure Tours",
  duration: "12 Days / 11 Nights",
  highlights: [
    "White-Water Rafting in Kitulgala",
    "Nuwara Eliya Tea Factory & Tea Tasting",
    "Horton Plains National Park & World's End",
    "Lipton's Seat Panoramic Viewpoint",
    "Ella Hiking & Nine Arch Bridge",
    "Little Adam's Peak & Ravana Falls",
    "Udawalawe National Park Jeep Safari",
    "Sinharaja Rainforest Guided Trek",
    "Whale Watching in Mirissa",
    "Madu River Boat Safari",
    "Bentota Water Sports",
    "Colombo City Tour"
  ],
  price: "From $3500 pp",
  blurb: "An adventurous 12-day journey through Sri Lanka's highlands, tea plantations, rainforest wilderness, wildlife parks and spectacular southern coastline.",
  motif: "mountain",
  imageUrl: "/documents/images/tour/Mountain Hiking Adventure.jpg",
  heroTitle: "Sri Lanka Adventure — 12 Days of Highlands, Rainforest & Coast",
  intro: "Discover Sri Lanka through thrilling outdoor experiences, misty mountain trails, iconic tea-country viewpoints, wildlife encounters and tropical coastal adventures.",
  overview: "Begin with white-water rafting in Kitulgala before exploring Nuwara Eliya's tea country and hiking through Horton Plains to World's End. Continue to Lipton's Seat and Ella for spectacular mountain views, waterfalls and iconic landmarks. Experience a wildlife safari in Udawalawe, discover the biodiversity of Sinharaja Rainforest, and head to Mirissa for whale watching and beach relaxation. Finish with a Madu River boat safari, exciting water sports in Bentota and a Colombo city tour before departure.",
  bestFor: "Adventure travellers, couples, active friends and nature lovers seeking hiking, rafting, wildlife, rainforest exploration and coastal activities.",
  groupSize: "Private tour with a dedicated chauffeur-guide. Adventure activities are operated by specialist local providers.",
  physicalLevel: "Moderate to challenging — includes hiking, rainforest trekking and optional white-water rafting and water sports.",
  destinationsCovered: "Airport → Kitulgala → Nuwara Eliya → Horton Plains → Haputale → Ella → Udawalawe → Sinharaja → Mirissa → Bentota → Colombo → Airport",

  itinerary: [
    {
      day: 1,
      title: "Airport Welcome & Kitulgala Adventure",
      points: [
        "Airport Welcome: Meet your guests at Bandaranaike International Airport (CMB) with traditional flower garlands and a warm Sri Lankan welcome.",
        "Meet Your Chauffeur-Guide: Receive assistance with luggage before beginning the journey towards Kitulgala.",
        "Scenic Countryside Drive: Travel through rural landscapes towards the Kelani River region.",
        "White-Water Rafting: Experience the rapids of the Kelani River with a professional rafting operator, subject to water levels, weather and safety requirements.",
        "Optional River Adventure: Enjoy river bathing or swimming only in approved safe areas and when conditions permit.",
        "Riverside Evening: Check in to your riverside lodge and enjoy dinner surrounded by nature. A guided rainforest walk or waterfall trek may be possible if arrival time allows."
      ],
      overnight: "Riverside lodge in Kitulgala.",
      imageUrl: "/documents/images/tour/kitulgala0111.jpg"
    },
    {
      day: 2,
      title: "Nuwara Eliya Highland Exploration & Tea Experience",
      points: [
        "Breakfast & Departure: Enjoy breakfast before travelling towards the central highlands.",
        "Scenic Highland Drive: Enjoy views of green hills, winding roads and mountain landscapes along the way.",
        "Gregory Lake Park: Take a relaxing walk beside Gregory Lake and enjoy optional boating or cycling, subject to availability.",
        "Hakgala Botanical Garden: Explore landscaped gardens, colourful flowers and the surrounding mountain scenery.",
        "Tea Factory Visit: Discover how freshly harvested tea leaves are processed into Ceylon tea.",
        "Tea Tasting & Nuwara Eliya Town: Sample freshly brewed teas where available, then enjoy a relaxed evening exploring the town."
      ],
      overnight: "Hotel in Nuwara Eliya.",
      imageUrl: "/documents/images/tour/tea123.jpg"
    },
    {
      day: 3,
      title: "Horton Plains Trek & World's End",
      points: [
        "Early Departure: Leave your accommodation early for Horton Plains National Park.",
        "Horton Plains National Park: Begin a guided trek through open grasslands and misty cloud forests.",
        "World's End: Visit the famous escarpment for panoramic views over the southern lowlands when visibility is clear.",
        "Baker's Falls: Follow the established circular trail to admire this picturesque waterfall.",
        "Highland Nature Walk: Enjoy the unique landscape and look for native plants and wildlife along the trail.",
        "Transfer to Haputale: Continue through scenic mountain roads and tea plantations to your accommodation."
      ],
      overnight: "Hotel in Haputale.",
      imageUrl: "/documents/images/tour/horton-plains25.jpg"
    },
    {
      day: 4,
      title: "Lipton's Seat & Scenic Transfer to Ella",
      points: [
        "Early Breakfast: Start the day early to make the most of the highland scenery.",
        "Lipton's Seat: Visit the famous viewpoint overlooking rolling tea plantations and surrounding mountain ranges, weather permitting.",
        "Tea Plantation Walk: Explore the tea-growing landscape and observe tea pluckers at work when available.",
        "Optional Dambatenne Tea Factory: Learn about the region's tea heritage, subject to opening hours and available time.",
        "Scenic Journey to Ella: Travel through the hill country, enjoying views of tea estates and mountain villages.",
        "Ella Check-in: Arrive at your accommodation and enjoy a relaxed evening in Ella."
      ],
      overnight: "Hotel in Ella.",
      imageUrl: "/documents/images/tour/liptons-seat52.jpg"
    },
    {
      day: 5,
      title: "Ella Hiking, Iconic Bridge & Waterfall Adventure",
      points: [
        "Breakfast: Enjoy breakfast before beginning your Ella sightseeing and hiking day.",
        "Nine Arch Bridge: Walk to the iconic railway bridge surrounded by lush greenery and forested hills.",
        "Little Adam's Peak: Hike to the viewpoint for beautiful views across Ella's valleys and tea plantations.",
        "Ravana Cave: Explore the cave area and learn about local legends associated with King Ravana, subject to access conditions.",
        "Ravana Falls: Stop to admire the waterfall cascading down the rocky mountainside from a safe viewing area.",
        "Ella Town: Spend free time at local cafés, shops and viewpoints before returning to your hotel."
      ],
      overnight: "Hotel in Ella.",
      imageUrl: "/documents/images/tour/ella55.jpg"
    },
    {
      day: 6,
      title: "Journey to Udawalawe & Wildlife Safari",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before leaving Ella.",
        "Journey to Udawalawe: Travel through changing landscapes as the road descends from the highlands into the dry-zone plains.",
        "Safari Preparation: Arrive in the Udawalawe area and prepare for the afternoon wildlife experience.",
        "Udawalawe National Park Safari: Explore the park by jeep with an experienced safari guide and look for wild elephants, water buffalo, deer, crocodiles and birdlife.",
        "Wildlife Photography: Capture wildlife and landscapes from the safari vehicle while following the guide's instructions.",
        "Safari Lodge Evening: Check in to your accommodation and enjoy a peaceful evening close to nature."
      ],
      overnight: "Safari lodge near Udawalawe National Park.",
      imageUrl: "/documents/images/tour/udawalawa25.jpg"
    },
    {
      day: 7,
      title: "Morning Safari & Journey to Sinharaja",
      points: [
        "Early Morning Safari: Enjoy an optional second safari in Udawalawe for another opportunity to observe wildlife.",
        "Breakfast & Check-out: Return to your accommodation, enjoy breakfast and prepare for departure.",
        "Scenic Transfer: Travel through rural villages, plantations and countryside towards the southwestern rainforest region.",
        "Journey to Sinharaja: Continue to your eco-lodge in the Sinharaja area.",
        "Rainforest Surroundings: Enjoy the peaceful atmosphere and natural scenery around your accommodation.",
        "Evening Relaxation: Rest and prepare for the following day's guided rainforest trek."
      ],
      overnight: "Eco-lodge in the Sinharaja area.",
      imageUrl: "/documents/images/tour/sinharaja23.jpg"
    },
    {
      day: 8,
      title: "Sinharaja Rainforest Trek & Transfer to Mirissa",
      points: [
        "Breakfast & Trek Preparation: Enjoy breakfast and prepare for the rainforest excursion.",
        "Guided Rainforest Trek: Explore Sinharaja Forest Reserve with an experienced local nature guide.",
        "Wildlife & Birdwatching: Look for endemic birds, butterflies, amphibians and other rainforest wildlife.",
        "Forest Discovery: Learn about native plants, biodiversity and the conservation importance of this protected rainforest.",
        "Transfer to Mirissa: Leave the rainforest region and travel towards Sri Lanka's southern coast.",
        "Coastal Check-in: Arrive in Mirissa, settle into your accommodation and enjoy a relaxed evening."
      ],
      overnight: "Hotel in Mirissa.",
      imageUrl: "/documents/images/tour/sinharaja123.jpg"
    },
    {
      day: 9,
      title: "Whale Watching & Mirissa Beach Adventure",
      points: [
        "Early Morning Departure: Transfer to the harbour for your scheduled whale-watching excursion.",
        "Whale-Watching Boat Trip: Head offshore with a licensed operator in search of whales and dolphins, subject to seasonal conditions and wildlife sightings.",
        "Return to Shore: Return to Mirissa after the excursion and enjoy time to rest.",
        "Mirissa Beach: Relax on the golden sands and enjoy the tropical coastal scenery.",
        "Optional Surfing: Try a beginner surfing lesson or enjoy a surf session when sea and wave conditions are suitable.",
        "Sunset by the Coast: Spend the evening exploring local cafés and restaurants or relaxing by the beach."
      ],
      overnight: "Hotel in Mirissa.",
      imageUrl: "/documents/images/tour/mirissa52.jpg"
    },
    {
      day: 10,
      title: "Coastal Journey & Madu River Boat Safari",
      points: [
        "Breakfast & Check-out: Enjoy breakfast before departing Mirissa.",
        "Scenic Coastal Drive: Travel north along the southern and western coastline, passing coastal towns and fishing villages.",
        "Journey to the Madu River: Continue towards the Balapitiya area for a river adventure.",
        "Madu River Boat Safari: Explore mangrove tunnels, river islands and the estuary's natural environment with a local boat operator.",
        "Wildlife & Nature: Look for birds and other wildlife while learning about the importance of the mangrove ecosystem.",
        "Bentota Arrival: Continue to Bentota, check in to your beach resort and enjoy a relaxing evening."
      ],
      overnight: "Beach resort in Bentota.",
      imageUrl: "/documents/images/tour/benthota15.jpg"
    },
    {
      day: 11,
      title: "Bentota Water Sports & Beach Adventure",
      points: [
        "Breakfast: Enjoy breakfast at your resort before the day's activities.",
        "Jet Skiing: Experience a jet-ski session with a qualified local operator, subject to conditions and safety requirements.",
        "Banana Boat Ride: Enjoy an optional group ride with suitable safety equipment and operator guidance.",
        "Water Skiing or Wakeboarding: Try one of these activities if available and appropriate for your experience level.",
        "Kayaking or Lagoon Activities: Explore the water at a gentler pace with a suitable local provider.",
        "Beach Leisure: Relax on Bentota's sandy beach after the day's adventures and enjoy your final full evening on the coast."
      ],
      overnight: "Beach resort in Bentota.",
      imageUrl: "/documents/images/tour/benthota125.jpg"
    },
    {
      day: 12,
      title: "Colombo City Tour & Departure",
      points: [
        "Breakfast & Check-out: Enjoy breakfast and check out of your Bentota resort.",
        "Journey to Colombo: Travel towards Colombo, with sightseeing depending on your international flight schedule.",
        "Galle Face Green: Enjoy a stroll along Colombo's famous oceanfront promenade if time permits.",
        "Independence Square: Visit this landmark commemorating Sri Lanka's independence, subject to available time.",
        "Colombo City Drive: See selected landmarks, shopping areas and lively city streets during a short city tour.",
        "Airport Transfer: Continue to Bandaranaike International Airport (CMB) and arrive with sufficient time for check-in and departure."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo56.jpg"
    }
  ],

  hotelRecommendation: "A riverside lodge in Kitulgala, comfortable highland accommodation in Nuwara Eliya and Haputale, a hotel in Ella, a safari lodge near Udawalawe, an eco-lodge in the Sinharaja area, and beachside accommodation in Mirissa and Bentota.",

  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for road transfers. White-water rafting, whale watching, national park safaris, rainforest trekking and water sports are arranged with suitable local activity providers. Activity availability depends on weather, operating schedules and safety conditions.",

  meals: "Daily breakfast. Lunches and dinners are at your own choice unless arranged in advance. Day 1 dinner may be arranged through the Kitulgala lodge.",

  included: [
    "11 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Road transfers between destinations listed in the itinerary",
    "Sightseeing stops listed in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "White-water rafting charges and required activity equipment unless specified",
    "Optional river activities, jungle walks and waterfall treks",
    "Gregory Lake boating or cycling charges",
    "Hakgala Botanical Garden entrance fees",
    "Tea factory tours and tea tasting charges unless specified",
    "Horton Plains National Park entrance fees and guide charges unless specified",
    "Dambatenne Tea Factory admission",
    "Udawalawe National Park entrance fees and jeep safari charges",
    "Sinharaja Forest Reserve entrance fees and local nature guide charges",
    "Whale-watching boat tickets",
    "Surfing lessons and equipment rental",
    "Madu River boat safari charges",
    "Bentota water sports and equipment rental",
    "Personal expenses and tips",
    "Travel insurance"
  ],

  optionalExperiences: [
    "Guided rainforest walk or waterfall trek in Kitulgala",
    "Gregory Lake boating or cycling",
    "Additional tea factory experiences",
    "Optional Dambatenne Tea Factory visit",
    "Second Udawalawe wildlife safari",
    "Whale watching in Mirissa",
    "Beginner surfing lesson in Mirissa",
    "Madu River boat safari",
    "Jet skiing in Bentota",
    "Banana boat ride",
    "Water skiing or wakeboarding",
    "Kayaking and other suitable water activities"
  ],

  tourFaqs: [
    {
      q: "Is this tour suitable for adventure travellers?",
      a: "Yes. It combines rafting, hiking, wildlife safaris, rainforest trekking, whale watching and coastal water sports. Travellers should be comfortable with outdoor activities and varying levels of physical exertion."
    },
    {
      q: "Do I need previous experience for white-water rafting?",
      a: "Previous experience may not be necessary for some guided rafting trips, but participation depends on the operator's requirements, river conditions, age limits and safety assessment. Follow the professional guide's instructions."
    },
    {
      q: "How challenging is the Horton Plains trek?",
      a: "The main circular trail involves several hours of walking over uneven terrain and can be affected by mist, rain and slippery sections. Suitable footwear, weather preparation and an appropriate fitness level are important."
    },
    {
      q: "Can we guarantee whale sightings in Mirissa?",
      a: "No. Whale and dolphin sightings depend on season, sea conditions and natural wildlife movements. Boat trips should follow responsible wildlife-viewing practices."
    },
    {
      q: "Is Sinharaja Rainforest trekking included?",
      a: "The itinerary includes a guided rainforest trek, but entrance fees and local guide charges should be confirmed in the final quotation."
    },
    {
      q: "Are water sports included in the tour price?",
      a: "Water sports are included only if specifically listed in the confirmed quotation. Jet skiing, banana boat rides, wakeboarding, kayaking and equipment rental may carry additional charges."
    },
    {
      q: "Can the Colombo city tour be completed before our flight?",
      a: "The city tour depends on your departure time, traffic and airport check-in requirements. The sightseeing schedule should be shortened or omitted if needed to reach the airport on time."
    }
  ]
},

   {
    slug: "adventure-5-day-tour",
    title: "Wild Ceylon Escape",
    category: "Adventure Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Kitulgala whitewater rafting", "Rainforest canopy ziplining", "Ella hiking trails"],
    price: "From $1,050 pp",
    blurb: "A fast-paced 5-day route through rivers, rainforest canopy and hill-country trails.",
    motif: "leaf",
    imageUrl: "/documents/images/tour/adventure-5.jpg",
    heroTitle: "Ceylon Adventure Sprint — 5 Days of Rivers, Canopy and Trails",
    intro:
      "A compact adventure circuit for travellers short on time but not on energy — whitewater rafting, a rainforest zipline, and a hike to one of Sri Lanka's best viewpoints.",
    overview:
      "This route packs three distinct adventure environments — river, rainforest canopy and hill-country trail — into five action-focused days.",
    bestFor: "Active travellers, groups of friends, adventure-seeking couples",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Kitulgala → Nuwara Eliya → Haputale → Ella → Colombo",
    itinerary:[
  {
    day: 1,
    title: "Airport Welcome, Kitulgala & White-Water Rafting",
    points: [
      "Airport Welcome: Receive a traditional flower garland welcome at Bandaranaike International Airport (CMB).",
      "Meet Your Guide: Meet your English-speaking chauffeur-guide and receive luggage assistance.",
      "Scenic Drive: Travel through Sri Lanka's countryside towards Kitulgala.",
      "White-Water Rafting: Experience exciting rapids on the Kelani River, subject to river conditions and arrival time.",
      "Nature Adventure: Enjoy an optional jungle walk or stream adventure, time permitting.",
      "Hotel Check-in: Relax and enjoy dinner surrounded by Kitulgala's lush rainforest."
    ],
    overnight: "Hotel in Kitulgala.",
    imageUrl: "/documents/images/tour/kitulgala.jpg"
  },
  {
    day: 2,
    title: "Nuwara Eliya, Tea Country & Scenic Attractions",
    points: [
      "Breakfast & Departure: Leave Kitulgala and travel into Sri Lanka's central highlands.",
      "Scenic Mountain Drive: Admire green valleys, tea plantations and picturesque villages.",
      "Ceylon Tea Factory: Discover traditional tea production and enjoy a guided tea tasting.",
      "Gregory Lake: Enjoy a lakeside walk or optional boat ride, subject to availability.",
      "Hakgala Botanical Garden: Explore its landscaped gardens and cool-climate plant collections, subject to opening hours.",
      "Hotel Check-in: Relax in Nuwara Eliya's cool highland atmosphere."
    ],
    overnight: "Hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/nuwaraeliya7.jpg"
  },
  {
    day: 3,
    title: "Horton Plains Trekking, World's End & Haputale",
    points: [
      "Early Departure: Travel to Horton Plains National Park.",
      "Horton Plains Trek: Explore misty cloud forests, grasslands and unique highland scenery.",
      "World's End: Admire the dramatic escarpment and panoramic views, weather permitting.",
      "Baker's Falls: Visit the picturesque waterfall along the trekking trail.",
      "Scenic Transfer: Continue towards Haputale through mountain roads and tea-growing landscapes.",
      "Hotel Check-in: Relax and enjoy a peaceful evening in Haputale."
    ],
    overnight: "Hotel in Haputale.",
    imageUrl: "/documents/images/tour/hortonplains.jpg"
  },
  {
    day: 4,
    title: "Lipton's Seat, Ravana Cave & Ella",
    points: [
      "Early Departure: Travel to Lipton's Seat for spectacular highland views.",
      "Lipton's Seat: Admire rolling tea estates and distant landscapes, weather permitting.",
      "Scenic Drive: Continue towards Ella through Sri Lanka's beautiful hill country.",
      "Ravana Cave: Explore the historic cave associated with the legend of King Ravana.",
      "Ravana Falls: Admire the waterfall from designated viewing areas.",
      "Ella Town: Explore local cafés and check in to your hotel."
    ],
    overnight: "Hotel in Ella.",
    imageUrl: "/documents/images/tour/ella7.jpg"
  },
  {
    day: 5,
    title: "Little Adam's Peak, Nine Arch Bridge & Departure",
    points: [
      "Little Adam's Peak: Enjoy a scenic hike with views of Ella's mountains and tea plantations.",
      "Nine Arch Bridge: Visit the iconic railway viaduct surrounded by lush green hills.",
      "Scenic Viewpoint: Photograph the bridge and watch a train pass, if schedules permit.",
      "Breakfast & Refreshments: Enjoy a meal or refreshments in Ella, as needed.",
      "Transfer to Colombo: Travel through the hill country and lowlands towards Colombo.",
      "Departure: Continue to the airport according to your flight schedule."
    ],
    overnight: "N/A — departure day.",
    imageUrl: "/documents/images/tour/ninearchbridge.jpg"
  }
],
    hotelRecommendation: "Adventure lodges in Kitulgala, hillside hotels in Ella.",
    transportation: "Private air-conditioned vehicle with driver; certified rafting and zipline guides on activity days.",
    meals: "Daily breakfast, plus lunch on rafting/ziplining day. Other meals at your own choice.",
    included: ["4 nights' accommodation as listed", "Daily breakfast + 1 lunch", "Private vehicle and driver throughout", "Whitewater rafting with certified guides", "Rainforest ziplining session", "Safety equipment for all activities"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Ella Rock sunrise add-on", "White-water kayaking (in place of rafting)", "Canyoning near Kitulgala"],
    tourFaqs: [
      { q: "Do we need rafting experience?", a: "No — the Kelani River's Grade 2–3 rapids are suitable for first-timers, with full safety briefings and certified guides." },
      { q: "How fit do we need to be?", a: "A reasonable fitness level helps for the Ella Rock hike, but all activities can be paced to the group." },
    ],
  },
  {
    slug: "adventure-7-day-tour",
    title: "Ceylon Adventure Trails",
    category: "Adventure Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Kitulgala rafting & ziplining", "Ella hiking trails", "Yala jeep safari"],
    price: "From $1,470 pp",
    blurb: "Our 5-day adventure sprint extended with a wildlife safari for a fuller adrenaline-and-nature route.",
    motif: "leaf",
    imageUrl: "/documents/images/tour/adventure-7.jpg",

    heroTitle: "Ceylon Adventure Trail — 7 Days of Rivers, Trails and Safari",
    intro:
      "The same river-to-hills adventure circuit, extended south into Yala for jeep safaris in search of leopards, adding a wildlife dimension to the adrenaline.",
    overview:
      "This route follows our 5-day adventure sprint, then continues south to Yala National Park for two safari drives before returning to Colombo.",
    bestFor: "Active travellers who also want a proper wildlife safari",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Kitulgala → Nuwara Eliya → Haputale → Ella → Udawalawa → Colombo",
    itinerary: [
  {
    day: 1,
    title: "Airport Welcome & Kitulgala Adventure",
    points: [
      "Airport Welcome: Receive a traditional flower garland welcome at Bandaranaike International Airport (CMB).",
      "Meet Your Guide: Meet your tour guide and receive luggage assistance.",
      "Scenic Drive: Travel through Sri Lanka's tropical countryside to Kitulgala.",
      "White-Water Rafting: Experience the rapids of the Kelani River, subject to arrival time and river conditions.",
      "Nature Adventure: Enjoy an optional jungle walk or locally available adventure activity, time permitting.",
      "Hotel Check-in: Enjoy dinner and relax amid Kitulgala's rainforest scenery."
    ],
    overnight: "Hotel in Kitulgala.",
    imageUrl: "/documents/images/tour/kitulgala8.jpg"
  },
  {
    day: 2,
    title: "Scenic Drive to Nuwara Eliya & Tea Country",
    points: [
      "Breakfast & Departure: Leave Kitulgala for Sri Lanka's central highlands.",
      "Scenic Mountain Drive: Admire waterfalls, green valleys and picturesque tea plantations.",
      "Ceylon Tea Factory: Discover traditional tea production and processing methods.",
      "Tea Tasting: Sample authentic Ceylon tea and experience its distinctive aromas.",
      "Gregory Lake: Enjoy a lakeside walk or optional boat ride, subject to availability.",
      "Hakgala Botanical Garden: Explore highland plants and landscaped gardens, subject to opening hours."
    ],
    overnight: "Hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/nuwaraeliya8.jpg"
  },
  {
    day: 3,
    title: "Horton Plains Trekking & World's End",
    points: [
      "Early Departure: Travel from Nuwara Eliya to Horton Plains National Park.",
      "Horton Plains Trek: Begin the approximately 9 km circular trail through cloud forests and grasslands.",
      "World's End: Admire the dramatic escarpment and panoramic views, weather permitting.",
      "Baker's Falls: Visit the picturesque waterfall surrounded by lush vegetation.",
      "Wildlife Spotting: Look for sambar deer and highland bird species along the trail.",
      "Transfer to Haputale: Enjoy the scenic mountain drive and check in to your hotel."
    ],
    overnight: "Hotel in Haputale.",
    imageUrl: "/documents/images/tour/hortonplains8.jpg"
  },
  {
    day: 4,
    title: "Lipton's Seat & Transfer to Ella",
    points: [
      "Early Departure: Travel to Lipton's Seat, a famous viewpoint in Sri Lanka's tea country.",
      "Lipton's Seat: Enjoy panoramic views of tea estates and mountain ranges, weather permitting.",
      "Tea Plantation Walk: Explore the surrounding tea-growing countryside and capture photographs.",
      "Ceylon Tea: Enjoy a refreshing cup of local tea if available.",
      "Scenic Transfer: Continue through the beautiful highlands towards Ella.",
      "Ella Town: Check in to your hotel and explore local cafés and restaurants at leisure."
    ],
    overnight: "Hotel in Ella.",
    imageUrl: "/documents/images/tour/ella8.jpg"
  },
  {
    day: 5,
    title: "Ella Hiking, Nine Arch Bridge & Transfer to Udawalawe",
    points: [
      "Little Adam's Peak: Hike to the viewpoint for panoramic mountain and tea plantation scenery.",
      "Nine Arch Bridge: Visit Ella's iconic railway viaduct surrounded by lush green hills.",
      "Train Watching: Photograph a passing train if railway schedules permit.",
      "Ravana Cave: Explore the cave associated with King Ravana in local folklore.",
      "Ravana Falls: Admire the picturesque waterfall from designated viewing areas.",
      "Transfer to Udawalawe: Travel towards the southern lowlands and check in near the national park."
    ],
    overnight: "Hotel near Udawalawe National Park.",
    imageUrl: "/documents/images/tour/ninearchbridge2.jpg"
  },
  {
    day: 6,
    title: "Udawalawe National Park Safari & Transfer to Colombo",
    points: [
      "Early Departure: Travel to Udawalawe National Park for a guided jeep safari.",
      "Elephant Safari: Search for wild Asian elephants across grasslands and scrub forests.",
      "Wildlife Watching: Look for water buffalo, deer, crocodiles and bird species.",
      "Wildlife Photography: Capture memorable sightings while following park regulations.",
      "Breakfast & Transfer: Return for breakfast if timing permits, then begin the drive to Colombo.",
      "Colombo Arrival: Check in to your hotel and relax after the journey."
    ],
    overnight: "Hotel in Colombo.",
    imageUrl: "/documents/images/tour/udawalawe4.jpg"
  },
  {
    day: 7,
    title: "Colombo City Experience & Tour Conclusion",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Galle Face Green: Stroll along Colombo's popular oceanfront promenade, time permitting.",
      "Independence Square: Visit this landmark commemorating Sri Lanka's independence.",
      "Colombo Fort: Explore the historic commercial district and its surrounding architecture.",
      "Shopping & Dining: Browse local markets for souvenirs and enjoy Sri Lankan refreshments.",
      "Departure or Drop-off: Conclude your tour with a transfer to your agreed destination."
    ],
    overnight: "N/A — departure day.",
    imageUrl: "/documents/images/tour/colombo8.jpg"
  }
],
    hotelRecommendation: "Adventure lodges in Kitulgala, hillside hotels in Ella, safari-style lodging near Yala.",
    transportation: "Private air-conditioned vehicle with driver; certified rafting/zipline guides; 4x4 safari jeep for Yala.",
    meals: "Daily breakfast, plus lunch on the rafting/ziplining day. Other meals at your own choice.",
    included: ["6 nights' accommodation as listed", "Daily breakfast + 1 lunch", "Private vehicle and driver throughout", "Whitewater rafting & ziplining", "2 jeep safaris in Yala National Park"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Ella Rock sunrise add-on", "Canyoning near Kitulgala", "Additional Yala safari session"],
    tourFaqs: [
      { q: "Is Yala included as a proper safari or just a drive-through?", a: "It's two dedicated jeep safaris with a specialist tracker-guide, timed for dawn and dusk when wildlife is most active." },
      { q: "Can we do more rafting instead of the safari?", a: "Yes, this itinerary is a starting point — we can swap in additional river days if that's your priority." },
    ],
  },
  {
    slug: "adventure-8-day-tour",
    title: "Beyond the Highlands",
    category: "Adventure Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Kitulgala rafting & ziplining", "Ella hiking & Yala safari", "Mirissa surfing"],
    price: "From $1,680 pp",
    blurb: "Our 7-day river-to-safari route with a surf day on the south coast added.",
    motif: "leaf",
    imageUrl: "/documents/images/tour/adventure-8.jpg",

    heroTitle: "Ceylon Adventure Circuit — 8 Days of Rivers, Trails, Safari and Surf",
    intro:
      "Rivers, rainforest, hiking trails, a wildlife safari and a day of surfing on the south coast — a complete adventure circuit across four distinct environments.",
    overview:
      "This route extends our 7-day adventure trail with a day of surfing at Mirissa, giving the trip a coastal adrenaline finish before heading back to Colombo.",
    bestFor: "Active travellers wanting the widest variety of adventure activities",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Kitulgala → Nuwara Eliya → Haputale → Ella → Udawalawa → Sinharaja → Colombo",
    itinerary: [
  {
    day: 1,
    title: "Airport Welcome & Kitulgala White-Water Rafting",
    points: [
      "Airport Welcome: Receive a traditional flower garland welcome at Bandaranaike International Airport (CMB).",
      "Meet Your Guide: Collect your luggage and meet your private tour guide.",
      "Scenic Transfer: Travel through Sri Lanka's tropical countryside to Kitulgala.",
      "White-Water Rafting: Experience the rapids of the Kelani River, subject to arrival time, weather and river conditions.",
      "Rainforest Adventure: Enjoy the lush riverside scenery and an optional guided jungle walk or outdoor activity, time permitting.",
      "Hotel Check-in: Check in to your accommodation and relax after the journey."
    ],
    overnight: "Hotel in Kitulgala.",
    imageUrl: "/documents/images/tour/kitulgala10.jpg"
  },
  {
    day: 2,
    title: "Nuwara Eliya, Tea Factory & Highland Attractions",
    points: [
      "Breakfast & Departure: Enjoy breakfast before departing Kitulgala for Nuwara Eliya.",
      "Scenic Mountain Drive: Travel along winding roads through tea estates, mountain scenery and picturesque villages.",
      "Ceylon Tea Factory: Discover tea cultivation, processing and grading at a working tea factory.",
      "Tea Tasting: Sample authentic Sri Lankan Ceylon tea and experience its distinctive aromas.",
      "Gregory Lake: Enjoy a lakeside walk or optional boat ride, subject to availability.",
      "Highland Attractions: Explore Hakgala Botanical Garden and Nuwara Eliya town, admiring its gardens and colonial-era architecture, subject to opening hours."
    ],
    overnight: "Hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/nuwaraeliya10.jpg"
  },
  {
    day: 3,
    title: "Horton Plains Trekking & Transfer to Haputale",
    points: [
      "Early Departure: Travel from Nuwara Eliya to Horton Plains National Park.",
      "Horton Plains Trek: Complete the approximately 9 km circular trail through highland grasslands and cloud forests.",
      "World's End: Admire the dramatic escarpment and panoramic views across the southern lowlands, weather permitting.",
      "Baker's Falls: Visit the picturesque waterfall surrounded by lush highland vegetation.",
      "Wildlife Spotting: Look for endemic birds and other wildlife along the trail.",
      "Transfer to Haputale: Enjoy a scenic drive through mountain roads and tea-growing landscapes before checking in to your hotel."
    ],
    overnight: "Hotel in Haputale.",
    imageUrl: "/documents/images/tour/hortonplains10.jpg"
  },
  {
    day: 4,
    title: "Lipton's Seat & Scenic Journey to Ella",
    points: [
      "Early Departure: Travel to Lipton's Seat, one of Haputale's most famous panoramic viewpoints.",
      "Lipton's Seat: Enjoy sweeping views of rolling tea plantations and distant mountain ranges, weather permitting.",
      "Tea Estate Exploration: Walk through the surrounding tea-growing countryside and capture memorable photographs.",
      "Ceylon Tea Experience: Enjoy a cup of local tea at a nearby tea shop, if available.",
      "Scenic Transfer: Continue through Sri Lanka's beautiful highlands towards Ella.",
      "Explore Ella: Check in to your accommodation and enjoy free time exploring local cafés, restaurants and the town centre."
    ],
    overnight: "Hotel in Ella.",
    imageUrl: "/documents/images/tour/ella10.jpg"
  },
  {
    day: 5,
    title: "Ella Highlights & Transfer to Udawalawe",
    points: [
      "Little Adam's Peak: Hike to the viewpoint for panoramic views of Ella's valleys, mountains and tea plantations.",
      "Nine Arch Bridge: Visit the iconic railway viaduct surrounded by lush green hills.",
      "Train Watching: Enjoy the opportunity to watch a train cross the bridge, if railway schedules permit.",
      "Ravana Cave: Explore the cave associated with King Ravana in Sri Lankan folklore.",
      "Ravana Falls: Stop to admire the cascading waterfall and take photographs from designated viewing areas.",
      "Transfer to Udawalawe: Enjoy lunch or refreshments before travelling to the southern lowlands and checking in near the national park."
    ],
    overnight: "Hotel near Udawalawe National Park.",
    imageUrl: "/documents/images/tour/ninearchbridge10.jpg"
  },
  {
    day: 6,
    title: "Udawalawe Elephant Safari & Transfer to Sinharaja",
    points: [
      "Early Departure: Head to Udawalawe National Park for a guided jeep safari.",
      "Elephant Safari: Explore grasslands, scrub forests and reservoir surroundings in search of wild Asian elephants.",
      "Wildlife Watching: Look for water buffalo, deer, crocodiles and a variety of bird species.",
      "Wildlife Photography: Capture memorable sightings while respecting park rules and maintaining a safe distance from animals.",
      "Breakfast & Transfer: Return for breakfast or refreshments, depending on the safari schedule, before travelling towards Sinharaja.",
      "Rainforest Arrival: Travel through rural landscapes and wet-zone countryside before checking in to your rainforest lodge or guesthouse."
    ],
    overnight: "Hotel or guesthouse in the Sinharaja area.",
    imageUrl: "/documents/images/tour/udawalawe10.jpg"
  },
  {
    day: 7,
    title: "Sinharaja Rainforest Trekking & Transfer to Colombo",
    points: [
      "Breakfast: Enjoy breakfast at your accommodation before the rainforest excursion.",
      "Guided Rainforest Trek: Meet a local guide and explore Sinharaja Forest Reserve.",
      "Tropical Biodiversity: Discover towering trees, dense vegetation, forest streams and jungle trails.",
      "Wildlife Spotting: Look for endemic birds, butterflies, reptiles and other rainforest wildlife with your guide.",
      "Conservation Experience: Learn about Sinharaja's ecological importance and remarkable biodiversity.",
      "Transfer to Colombo: Complete a guided walk suited to your fitness level and weather conditions, then travel to Colombo and check in to your hotel."
    ],
    overnight: "Hotel in Colombo.",
    imageUrl: "/documents/images/tour/sinharaja10.jpg"
  },
  {
    day: 8,
    title: "Colombo City Highlights & Departure",
    points: [
      "Breakfast: Enjoy breakfast at the hotel.",
      "Galle Face Green: Take an oceanfront walk along Colombo's popular seaside promenade, time permitting.",
      "Independence Square: Visit the landmark commemorating Sri Lanka's independence.",
      "Colombo Fort: Explore the historic commercial district and its surrounding architecture, time permitting.",
      "Shopping & Dining: Browse local markets for souvenirs and enjoy lunch or refreshments at a local restaurant.",
      "Departure Transfer: Transfer to Bandaranaike International Airport (CMB) for your departure or conclude the tour at your agreed Colombo drop-off point."
    ],
    overnight: "N/A — departure day.",
    imageUrl: "/documents/images/tour/colombo10.jpg"
  }
],
     
    hotelRecommendation: "Adventure lodges, hillside hotels in Ella, safari lodging near Yala, surf-friendly stays in Mirissa.",
    transportation: "Private air-conditioned vehicle with driver; rafting/zipline guides; safari jeep; local surf instructor.",
    meals: "Daily breakfast, plus lunch on the rafting/ziplining day. Other meals at your own choice.",
    included: ["7 nights' accommodation as listed", "Daily breakfast + 1 lunch", "Private vehicle and driver throughout", "Whitewater rafting & ziplining", "2 jeep safaris in Yala National Park", "1 surf lesson in Weligama"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Additional surf sessions", "Whale watching add-on from Mirissa", "Canyoning near Kitulgala"],
    tourFaqs: [
      { q: "Do we need surfing experience?", a: "No — Weligama Bay near Mirissa is one of the best beginner surf spots in Asia, with gentle, consistent waves." },
      { q: "What time of year is best for this route?", a: "January to April suits both the hill country and south coast legs of this trip best." },
    ],
  },
  {
    slug: "adventure-10-day-tour",
    title: "Ultimate Adventure Sri Lanka",
    category: "Adventure Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["udawalawa safari", "Ella hiking", "sinharaja trekking"],
    price: "From $2,100 pp",
    blurb: "Our 8-day river-to-surf circuit with Sigiriya's climbable fortress added at the start.",
    motif: "leaf",
  imageUrl: "/documents/images/tour/adventure-10.jpg",

    heroTitle: "Grand Ceylon Adventure — 10 Days of Culture, Rivers, Trails and Surf",
    intro:
      "This 10-day adventure through Sri Lanka combines thrilling white-water rafting in Kitulgala, scenic highland treks, tea-country experiences, wildlife safaris, rainforest exploration and whale watching in Mirissa, finishing with a relaxing coastal escape and departure from Colombo or the airport.",
    overview:
      "This extended 10-day adventure builds on our 8-day circuit, allowing more time to explore Sri Lanka’s misty highlands, lush rainforests and southern coastline while enjoying thrilling river rafting, scenic hikes, wildlife safaris and whale watching.",
    bestFor: "Active travellers who want culture and adrenaline in equal measure",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Kitulgala →Nuwara Eliya → Haputale → Ella → udawalawa → Sinharaja → Mirissa → Colombo",
    itinerary:
[
  {
    day: 1,
    title: "Airport Welcome, Kitulgala & White-Water Rafting",
    points: [
      "Airport Welcome: Receive a traditional flower garland welcome at Bandaranaike International Airport (CMB).",
      "Meet Your Guide: Meet your English-speaking chauffeur-guide and receive luggage assistance.",
      "Scenic Drive: Travel through Sri Lanka's countryside towards Kitulgala, surrounded by lush rainforest.",
      "White-Water Rafting: Experience exciting rapids on the Kelani River, subject to arrival time, river conditions and operator availability.",
      "Nature Adventure: Enjoy an optional guided jungle walk or visit a nearby waterfall, time permitting.",
      "Hotel Check-in: Relax and enjoy the peaceful natural surroundings of Kitulgala after your adventure."
    ],
    overnight: "Hotel in Kitulgala.",
    imageUrl: "/documents/images/tour/kitulgala11.jpg"
  },
  {
    day: 2,
    title: "Nuwara Eliya, Tea Country & Scenic Attractions",
    points: [
      "Breakfast & Departure: Leave Kitulgala and travel towards Sri Lanka's central highlands.",
      "Scenic Mountain Drive: Admire winding mountain roads, green valleys and picturesque tea plantations.",
      "Ceylon Tea Factory: Discover the traditional tea-making process and enjoy a guided tea-tasting experience.",
      "Gregory Lake: Enjoy lakeside scenery and optional boating activities, subject to availability.",
      "Hakgala Botanical Garden: Explore beautiful gardens and cool-climate plant collections, subject to opening hours.",
      "Nuwara Eliya Town: Discover colonial-era architecture, charming streets and local shops before relaxing at your hotel."
    ],
    overnight: "Hotel in Nuwara Eliya.",
    imageUrl: "/documents/images/tour/nuwaraeliya11.jpg"
  },
  {
    day: 3,
    title: "Horton Plains Trekking, World's End & Haputale",
    points: [
      "Early Departure: Travel to Horton Plains National Park to explore Sri Lanka's spectacular highland wilderness.",
      "Horton Plains Trek: Follow the approximately 9 km circular trail through misty cloud forests and open grasslands.",
      "World's End: Admire the dramatic escarpment and breathtaking panoramic views, weather permitting.",
      "Baker's Falls: Visit the picturesque waterfall surrounded by montane forest along the trekking route.",
      "Highland Nature: Discover the unique ecosystem and look out for native wildlife along the trail.",
      "Scenic Transfer: Continue through beautiful hill-country landscapes to Haputale and relax at your accommodation."
    ],
    overnight: "Hotel in Haputale.",
    imageUrl: "/documents/images/tour/hortonplains11.jpg"
  },
  {
    day: 4,
    title: "Lipton's Seat, Tea Plantations & Journey to Ella",
    points: [
      "Early Departure: Head to Lipton's Seat to experience one of Sri Lanka's most celebrated tea-country viewpoints.",
      "Panoramic Views: Admire rolling tea estates, green valleys and distant mountain ranges, weather permitting.",
      "Tea Plantation Walk: Enjoy a short walk through the plantations and observe tea pluckers at work when available.",
      "Scenic Journey: Travel towards Ella through beautiful mountain roads and picturesque highland scenery.",
      "Ella Arrival: Check in to your accommodation and refresh after the journey.",
      "Relaxed Afternoon: Explore Ella town, visit a local café or unwind at your hotel."
    ],
    overnight: "Hotel in Ella.",
    imageUrl: "/documents/images/tour/liptonsseat11.jpg"
  },
  {
    day: 5,
    title: "Ella Adventure, Nine Arch Bridge & Ravana Attractions",
    points: [
      "Little Adam's Peak: Enjoy a scenic hike with sweeping views of Ella's mountains, valleys and tea plantations.",
      "Nine Arch Bridge: Visit the iconic stone railway viaduct surrounded by lush tropical greenery.",
      "Train-Watching Experience: Photograph the bridge and watch a train pass if the railway timetable permits.",
      "Ravana Cave: Explore the cave associated with the legendary King Ravana, noting the steps and uneven access.",
      "Ravana Falls: Admire the cascading waterfall and capture memorable photographs from designated viewing areas.",
      "Leisure in Ella: Return to town and enjoy free time at local cafés, shops or your accommodation."
    ],
    overnight: "Hotel in Ella.",
    imageUrl: "/documents/images/tour/ninearchbridge11.jpg"
  },
  {
    day: 6,
    title: "Udawalawe National Park Wildlife Safari",
    points: [
      "Breakfast & Departure: Leave Ella and begin your journey towards Udawalawe.",
      "Scenic Drive: Enjoy changing landscapes as the misty highlands give way to Sri Lanka's dry-zone countryside.",
      "Udawalawe Arrival: Reach the wildlife region and prepare for an exciting national park experience.",
      "Jeep Safari: Explore Udawalawe National Park on an afternoon safari, depending on arrival time and park arrangements.",
      "Wildlife Spotting: Look for Sri Lankan elephants, water buffalo, deer, crocodiles and diverse birdlife in their natural habitat.",
      "Relax in Nature: Return to your lodge and enjoy a peaceful evening surrounded by the Udawalawe countryside."
    ],
    overnight: "Hotel or lodge in Udawalawe.",
    imageUrl: "/documents/images/tour/udawalawe11.jpg"
  },
  {
    day: 7,
    title: "Sinharaja Rainforest Trekking & Wildlife Discovery",
    points: [
      "Breakfast & Departure: Leave Udawalawe and travel towards the Sinharaja rainforest region.",
      "Rainforest Arrival: Discover one of Sri Lanka's most important tropical rainforest ecosystems.",
      "Guided Forest Trek: Meet a local guide and explore lush forest trails through dense vegetation.",
      "Biodiversity Discovery: Look out for endemic birds, colourful butterflies, reptiles and other rainforest wildlife.",
      "Nature Exploration: Discover towering trees, flowing streams and the remarkable biodiversity of this UNESCO World Heritage Site.",
      "Relax in the Rainforest: Return to your accommodation, freshen up and enjoy the peaceful natural surroundings."
    ],
    overnight: "Hotel or lodge in the Sinharaja area.",
    imageUrl: "/documents/images/tour/sinharaja11.jpg"
  },
  {
    day: 8,
    title: "Scenic Transfer to Mirissa & Southern Coast Relaxation",
    points: [
      "Breakfast & Departure: Enjoy breakfast before leaving the Sinharaja region for Sri Lanka's southern coast.",
      "Scenic Coastal Journey: Travel through countryside landscapes and southern villages towards Mirissa.",
      "Mirissa Arrival: Check in to your accommodation and refresh after the journey.",
      "Beach Relaxation: Enjoy the sandy shores and laid-back atmosphere of Mirissa Beach.",
      "Coconut Tree Hill: Visit this popular coastal viewpoint for scenic photographs, subject to safe access.",
      "Sunset by the Sea: Explore local cafés, enjoy a beachside stroll and prepare for the next morning's whale-watching excursion."
    ],
    overnight: "Hotel in Mirissa.",
    imageUrl: "/documents/images/tour/mirissa11.jpg"
  },
  {
    day: 9,
    title: "Whale Watching & Leisure in Mirissa",
    points: [
      "Early Morning Departure: Head to Mirissa Harbour for your scheduled whale-watching excursion.",
      "Ocean Adventure: Set out into the Indian Ocean with a local boat operator in search of marine wildlife.",
      "Whale Watching: Look for blue whales, other whale species and dolphins; sightings cannot be guaranteed.",
      "Return to Shore: Return to Mirissa depending on the excursion duration and sea conditions.",
      "Beach Leisure: Spend the afternoon relaxing on the beach or swimming where sea conditions are safe.",
      "Optional Experiences: Enjoy surfing lessons, a seaside meal, a relaxing massage or a sunset dinner."
    ],
    overnight: "Hotel in Mirissa.",
    imageUrl: "/documents/images/tour/whalewatching11.jpg"
  },
  {
    day: 10,
    title: "Colombo Sightseeing & Departure",
    points: [
      "Breakfast & Check-out: Enjoy breakfast at your hotel in Mirissa before checking out.",
      "Transfer to Colombo: Travel towards Colombo or directly to Bandaranaike International Airport (CMB), depending on your flight schedule.",
      "Scenic Drive: Enjoy the journey from the southern coast towards Sri Lanka's commercial capital.",
      "Galle Face Green: If time permits, enjoy an oceanfront walk and views of the Indian Ocean.",
      "Colombo City Highlights: Visit Independence Square or selected city attractions, subject to available time and traffic.",
      "Airport Transfer: Continue to the airport with assistance from your chauffeur-guide and conclude your Sri Lankan adventure."
    ],
    overnight: "N/A — departure day.",
    imageUrl: "/documents/images/tour/colombo11.jpg"
  }
],

    hotelRecommendation: "Hotels in Sigiriya, adventure lodges in Kitulgala, hillside stays in Ella, safari lodging near Yala, surf-friendly Mirissa.",
    transportation: "Private air-conditioned vehicle with driver; rafting/zipline guides; safari jeep; surf instructor.",
    meals: "Daily breakfast, plus lunch on the rafting/ziplining day. Other meals at your own choice.",
    included: ["9 nights' accommodation as listed", "Daily breakfast + 1 lunch", "Private vehicle and driver throughout", "Sigiriya entrance fee", "Whitewater rafting & ziplining", "2 jeep safaris in Yala National Park", "1 surf lesson in Weligama"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Hot-air balloon flight over the Cultural Triangle", "Additional surf sessions", "Whale watching add-on from Mirissa"],
    tourFaqs: [
      { q: "Is this trip too physically demanding?", a: "It's active but not extreme — most reasonably fit travellers manage it comfortably, and activities can be scaled back on request." },
      { q: "Can we fit in canyoning as well?", a: "Yes, ask us about adding a canyoning session near Kitulgala on a spare afternoon." },
    ],
  },
  
  
{
  slug: "sri-lanka-wildlife-safari-whale-watching-5-day-tour",
  title: "Wildlife Safari & Whale Watching Escape",
  category: "Wildlife Tours",
  duration: "5 Days / 4 Nights",
  highlights: [
    "Udawalawe National Park Jeep Safari",
    "Wild Elephant Encounters",
    "Yala National Park Jeep Safari",
    "Leopard & Wildlife Tracking",
    "Mirissa Whale-Watching Excursion",
    "Dolphin Watching Opportunities",
    "Sri Lanka's Southern Coastal Scenery"
  ],
  price: "From $650 pp",
  blurb: "A five-day wildlife adventure combining elephant encounters in Udawalawe, a safari through Yala's diverse habitats and an offshore whale-watching experience in Mirissa.",
  motif: "wildlife",
  imageUrl: "/documents/images/tour/udawalawa.png",
  heroTitle: "Wildlife Safari & Whale Watching Escape — 5 Days",
  intro: "Explore Sri Lanka's remarkable wildlife on a compact journey featuring two national park safaris and an unforgettable marine excursion off the southern coast.",
  overview: "Travel to Udawalawe for a jeep safari in search of wild elephants and other native wildlife. Continue to Yala National Park for a separate safari through habitats known for leopards, elephants and diverse birdlife. Finish in Mirissa with an early-morning whale-watching excursion and time to enjoy the southern coast before departure.",
  bestFor: "Wildlife enthusiasts, photographers, couples and nature lovers interested in national park safaris and marine wildlife.",
  groupSize: "Private tour with a dedicated chauffeur-guide. Safaris and whale watching are operated by specialist local providers.",
  physicalLevel: "Easy to moderate — mostly vehicle-based wildlife viewing, with an early-morning boat excursion.",
  destinationsCovered: "Airport → Udawalawe → Yala National Park → Mirissa → Airport",

  itinerary: [
    {
      day: 1,
      title: "Arrival & Udawalawe",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive assistance with your luggage.",
        "Journey to Udawalawe: Travel through Sri Lanka's countryside towards the wildlife region.",
        "Scenic Countryside: Enjoy views of rural villages, farmland and changing landscapes along the way.",
        "Accommodation Check-in: Arrive at your lodge near Udawalawe National Park and settle in.",
        "Safari Briefing: Review the following day's safari arrangements and meet your local safari provider if scheduled.",
        "Relaxed Evening: Enjoy dinner and rest before your wildlife adventure."
      ],
      overnight: "Safari lodge near Udawalawe National Park.",
      imageUrl: "/documents/images/tour/udawalawa001.jpg"
    },
    {
      day: 2,
      title: "Udawalawe National Park Safari",
      points: [
        "Early Breakfast: Start the day with breakfast before heading to the national park.",
        "Safari Departure: Meet your safari driver and travel to Udawalawe National Park.",
        "Udawalawe Jeep Safari: Explore the park on a guided jeep safari, looking for wild elephants in their natural habitat.",
        "Wildlife Spotting: Look out for water buffalo, deer, crocodiles and a variety of bird species.",
        "Nature Photography: Enjoy opportunities to photograph wildlife and the park's open grasslands from the vehicle.",
        "Afternoon Relaxation: Return to your lodge and enjoy a relaxed evening after the safari."
      ],
      overnight: "Safari lodge near Udawalawe National Park.",
      imageUrl: "/documents/images/tour/udawalawa002.jpg"
    },
    {
      day: 3,
      title: "Yala National Park Safari",
      points: [
        "Breakfast & Check-out: Enjoy breakfast and depart Udawalawe for the southern wildlife region.",
        "Journey to Yala: Travel towards Yala National Park, enjoying the changing dry-zone scenery.",
        "Safari Preparation: Arrive near the park and prepare for your scheduled safari.",
        "Yala Jeep Safari: Explore Yala National Park with a local safari guide in search of leopards, elephants and other wildlife.",
        "Wildlife & Birdwatching: Look for crocodiles, deer, wild boar and birdlife while exploring the park's different habitats.",
        "Lodge Evening: Check in to your accommodation near Yala and relax after the safari."
      ],
      overnight: "Safari lodge near Yala National Park.",
      imageUrl: "/documents/images/tour/yala006.jpg"
    },
    {
      day: 4,
      title: "Mirissa Whale Watching",
      points: [
        "Early Departure: Leave the Yala area early and travel towards Mirissa, allowing sufficient time for the boat excursion.",
        "Harbour Arrival: Check in with your whale-watching operator and receive the safety briefing.",
        "Whale-Watching Excursion: Head offshore with the local crew in search of whales and dolphins, depending on season and sea conditions.",
        "Marine Wildlife Observation: Observe marine wildlife responsibly and follow the crew's instructions throughout the trip.",
        "Mirissa Beach: Return to shore and enjoy time relaxing on the beach after the excursion.",
        "Coastal Evening: Explore Mirissa's cafés and restaurants or enjoy a peaceful evening by the sea."
      ],
      overnight: "Hotel in Mirissa.",
      imageUrl: "/documents/images/tour/mirissa003.jpg"
    },
    {
      day: 5,
      title: "Coastal Morning & Departure",
      points: [
        "Breakfast: Enjoy breakfast at your hotel in Mirissa.",
        "Relaxed Morning: Enjoy some free time by the beach, depending on your departure schedule.",
        "Optional Coastal Walk: Take a short stroll along the coast and enjoy the southern shoreline.",
        "Hotel Check-out: Pack your belongings and complete check-out.",
        "Private Airport Transfer: Travel to Bandaranaike International Airport (CMB) for your departure.",
        "Departure: Arrive at the airport with sufficient time for check-in and your flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/mirissa012.jpg"
    }
  ],

  hotelRecommendation: "Comfortable wildlife lodges near Udawalawe and Yala National Parks, followed by a beachside hotel in Mirissa.",

  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for road transfers. National park safaris are conducted in safari jeeps with local operators. Whale watching is arranged separately with a local boat operator.",

  meals: "Daily breakfast. Lunches and dinners are at your own choice unless arranged in advance.",

  included: [
    "4 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide for road transfers",
    "Airport welcome and luggage assistance",
    "Sightseeing and transfers listed in the itinerary, subject to access and operating schedules"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Udawalawe National Park entrance fees and jeep safari charges unless specified",
    "Yala National Park entrance fees and jeep safari charges unless specified",
    "Whale-watching boat tickets",
    "Personal expenses and tips",
    "Travel insurance"
  ],

  optionalExperiences: [
    "Private or shared safari jeep arrangements",
    "Additional wildlife photography time, subject to park rules",
    "Extra beach time in Mirissa",
    "Additional coastal excursions, subject to available time"
  ],

  tourFaqs: [
    {
      q: "How many safaris are included in this itinerary?",
      a: "The itinerary features one jeep safari in Udawalawe National Park and one separate jeep safari in Yala National Park."
    },
    {
      q: "What wildlife might we see in Udawalawe?",
      a: "Udawalawe is particularly well known for elephants. Other possible sightings include water buffalo, deer, crocodiles and many bird species. Wildlife sightings cannot be guaranteed."
    },
    {
      q: "What wildlife might we see in Yala?",
      a: "Yala is known for leopards, elephants and a variety of other wildlife. Sightings depend on animal movements, weather and the safari route."
    },
    {
      q: "Can we guarantee whale sightings in Mirissa?",
      a: "No. Whale and dolphin sightings depend on season, sea conditions and natural wildlife movements. Responsible wildlife-viewing practices should be followed."
    },
    {
      q: "Is the whale-watching trip always available?",
      a: "Boat trips depend on weather, sea conditions, operator schedules and seasonal operations. The excursion should be confirmed before the tour is finalised."
    },
    {
      q: "Are park entrance fees and safari jeeps included?",
      a: "They are included only if specifically stated in the confirmed quotation. National park tickets, safari jeep charges and whale-watching tickets should be confirmed before booking."
    }
  ]
},


{
  slug: "coastal-love-escape-5-day-tour",
  title: "Coastal Love Escape",
  category: "Romantic & Honeymoon Tours",
  duration: "5 Days / 4 Nights",
  highlights: [
    "Romantic Mirissa Beach",
    "Coconut Tree Hill",
    "Historic Galle Fort",
    "Bentota Beachside Luxury",
    "Romantic Sunset & Dining Experiences"
  ],
  price: "1300 USD per couple",
  blurb:
    "A romantic southern coast escape combining Mirissa's tropical beaches, Galle's historic charm and Bentota's relaxed beachfront luxury.",
  motif: "romance",
  imageUrl: "/documents/images/tour/Couple_Getaway.jpg",
  heroTitle: "Coastal Love Escape — 5 Days of Romance by the Sea",
  intro:
    "Discover Sri Lanka's southern coastline on a private romantic escape featuring beautiful beaches, historic coastal heritage and intimate experiences for two.",
  overview:
    "Begin in Mirissa with tropical beaches and sunset views, continue to the UNESCO-listed Galle Fort, and finish with two relaxing nights in Bentota. Enjoy coastal scenery, optional wellness experiences and romantic dining throughout your journey.",
  bestFor:
    "Couples seeking a short honeymoon or romantic beach holiday.",
  groupSize:
    "Private vehicle with a dedicated chauffeur-guide — customised for couples.",
  physicalLevel: "Easy",
  destinationsCovered:
    "Airport → Mirissa → Galle → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Airport Welcome & Romantic Mirissa Escape",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB), receive traditional flower garlands and enjoy assistance with your luggage.",
        "Private Coastal Transfer: Settle into your air-conditioned vehicle and travel towards Mirissa along Sri Lanka's southern coast.",
        "Coconut Tree Hill: Visit this picturesque palm-fringed viewpoint overlooking the Indian Ocean, ideal for memorable couple photographs.",
        "Mirissa Beach: Relax on the golden sand and enjoy the tropical coastal atmosphere.",
        "Secret Beach: Discover this scenic coastal cove if time, access and sea conditions permit.",
        "Romantic Sunset: Enjoy a peaceful sunset by the ocean followed by dinner at a beachfront restaurant."
      ],
      overnight: "Hotel in Mirissa.",
      imageUrl: "/documents/images/tour/Pink_Beach_Romance.jpg"
    },
    {
      day: 2,
      title: "Galle Heritage & Romantic Coastal Charm",
      points: [
        "Leisurely Breakfast: Enjoy breakfast at your hotel before departing Mirissa.",
        "Coastal Drive: Travel towards Galle, taking in the scenic southern shoreline along the way.",
        "Galle Fort: Explore the UNESCO World Heritage-listed Old Town of Galle and its Fortifications, known for its historic architecture and cultural influences.",
        "Historic Streets: Wander through charming lanes lined with colonial-era buildings, boutique shops and inviting cafés.",
        "Lighthouse & Ramparts: Admire the iconic Galle Lighthouse and walk along the oceanfront fortifications for beautiful Indian Ocean views.",
        "Romantic Evening: Enjoy a relaxed dinner in or around Galle Fort before settling in for the night."
      ],
      overnight: "Hotel in Galle.",
      imageUrl: "/documents/images/tour/Seaside_Couple_Love.jpg"
    },
    {
      day: 3,
      title: "Southern Coast Journey & Bentota Beachside Romance",
      points: [
        "Relaxed Breakfast: Begin the day with breakfast at your hotel in Galle.",
        "Coastal Departure: Travel north towards Bentota in your private air-conditioned vehicle.",
        "Scenic Coastal Stops: Enjoy selected viewpoints along the coastline, depending on travel time and conditions.",
        "Bentota Arrival: Check in to your beachside accommodation and enjoy a warm welcome.",
        "Bentota Beach: Spend the afternoon relaxing together beside the ocean or enjoying the resort facilities.",
        "Romantic Dinner: Enjoy dinner at your hotel or a nearby beachfront restaurant."
      ],
      overnight: "Beachside hotel in Bentota.",
      imageUrl: "/documents/images/tour/Ocean_Sunset_Romance.jpg"
    },
    {
      day: 4,
      title: "Bentota Beach, Wellness & Romance",
      points: [
        "Leisurely Breakfast: Enjoy a relaxed morning at your beachside hotel.",
        "Bentota Beach: Take a romantic beach walk and admire the tropical coastal scenery.",
        "Optional Couple's Spa: Arrange a relaxing massage or wellness treatment at your hotel or a nearby spa.",
        "Optional Bentota River Safari: Explore mangrove-lined waterways and look for local birdlife on a scenic boat excursion, subject to availability.",
        "Optional Water Sports: Choose from locally available activities depending on weather and sea conditions.",
        "Sunset Dining: End the day with a romantic dinner, with private dining or special arrangements available on request."
      ],
      overnight: "Beachside hotel in Bentota.",
      imageUrl: "/documents/images/tour/Couple_Spa_Retreat.jpg"
    },
    {
      day: 5,
      title: "Bentota Leisure & Departure",
      points: [
        "Final Breakfast: Enjoy your last breakfast together at the hotel.",
        "Beachside Leisure: Spend some quiet time by the beach or relax at the resort, depending on your flight schedule.",
        "Hotel Check-out: Complete check-out and prepare for your private airport transfer.",
        "Optional Colombo Visit: If time permits, enjoy a short visit to selected Colombo attractions on the way to the airport.",
        "Optional Shopping: Browse for Sri Lankan souvenirs if your departure schedule allows.",
        "Airport Transfer: Travel to Bandaranaike International Airport (CMB) with sufficient time for your departure flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/Sunset_Beach_Walk.jpg"
    }
  ],

  hotelRecommendation:
    "A romantic beach hotel in Mirissa, a boutique heritage hotel in Galle, and a luxury beachfront resort in Bentota.",
  transportation:
    "Private air-conditioned vehicle with a dedicated chauffeur-guide.",
  meals:
    "Daily breakfast. Other meals at your own choice unless arranged in advance.",

  included: [
    "4 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Visits described in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Spa treatments and water sports",
    "Optional river safari",
    "Personal expenses and tips",
    "Travel insurance",
    "Special romantic arrangements unless confirmed"
  ],

  optionalExperiences: [
    "Seasonal whale-watching excursion from Mirissa",
    "Private romantic dinner",
    "Couple's spa treatment",
    "Bentota River boat safari",
    "Water sports",
    "Flowers, anniversary cake or room decorations"
  ],

  tourFaqs: [
    {
      q: "Is this tour suitable for a honeymoon?",
      a: "Yes. This five-day private journey combines Mirissa's tropical beaches, Galle's historic charm and a relaxing beachfront stay in Bentota."
    },
    {
      q: "Can we arrange a romantic dinner?",
      a: "Yes. Private dining and special arrangements may be requested in advance, subject to hotel availability."
    },
    {
      q: "Can we go whale watching in Mirissa?",
      a: "Whale watching is an optional seasonal excursion. Departure schedules and sightings depend on the season, weather and sea conditions."
    }
  ]
},


{
  slug: "island-romance-7-day-tour",
  title: "Island Romance Escape",
  category: "Romantic & Honeymoon Tours",
  duration: "7 Days / 6 Nights",
  highlights: [
    "Romantic Kandy Lake & Temple of the Tooth",
    "Hiriketiya's Tropical Beach Escape",
    "Mirissa Beach & Coconut Tree Hill",
    "UNESCO-listed Galle Fort",
    "Bentota Beachside Luxury",
    "Sunset Experiences & Romantic Dining"
  ],
  price: "1600 USD per couple",
  blurb:
    "A romantic seven-day journey combining Kandy's cultural charm, Hiriketiya's tropical coastline, Mirissa's beautiful beaches, Galle's historic heritage and Bentota's relaxing beachfront luxury.",
  motif: "romance",
  imageUrl: "/documents/images/tour/Island Romance Escape.jpg",
  heroTitle: "Island Romance Escape — 7 Days Across Sri Lanka",
  intro:
    "Experience the romance of Sri Lanka on a private journey through cultural landmarks, secluded coastal scenery, historic streets and beautiful southern beaches.",
  overview:
    "Begin in Kandy with its sacred heritage and peaceful lake, then travel south to Hiriketiya and Mirissa for tropical beach experiences. Discover the historic streets of UNESCO-listed Galle Fort before unwinding in Bentota with relaxed beach days, optional wellness experiences and romantic dining.",
  bestFor:
    "Couples celebrating a honeymoon, anniversary or romantic getaway with a blend of culture and coastal relaxation.",
  groupSize:
    "Private vehicle with a dedicated chauffeur-guide — customised for couples.",
  physicalLevel: "Easy",
  destinationsCovered:
    "Airport → Kandy → Hiriketiya → Mirissa → Galle → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Airport Welcome & Journey to Kandy",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB), receive traditional flower garlands and enjoy assistance with your luggage.",
        "Private Transfer: Settle into your air-conditioned vehicle and begin your journey towards the cultural city of Kandy.",
        "Scenic Journey: Enjoy changing landscapes, lush greenery and views of Sri Lanka's central highlands along the way.",
        "Kandy Arrival: Check in to your hotel and relax after your journey.",
        "Kandy Lake: Enjoy a peaceful walk around the picturesque lake in the heart of the city.",
        "Romantic Evening: Enjoy a relaxed dinner at your hotel or a nearby restaurant."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/IMG_001.png"
    },
    {
      day: 2,
      title: "Kandy Heritage & Romantic Hill-Country Charm",
      points: [
        "Leisurely Breakfast: Enjoy breakfast at your hotel before exploring Kandy.",
        "Temple of the Tooth: Visit Sri Dalada Maligawa, an important Buddhist shrine within the UNESCO-listed Sacred City of Kandy.",
        "Royal Heritage: Discover the historic surroundings of the former Kandyan royal complex and learn about the city's cultural heritage.",
        "Peradeniya Royal Botanic Gardens: Stroll through landscaped gardens and admire tropical plants and towering trees.",
        "Kandy City Experience: Explore local craft shops and browse for traditional Sri Lankan handicrafts.",
        "Romantic Dinner: Return to your hotel for a peaceful evening together."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/IMG_002.jpg"
    },
    {
      day: 3,
      title: "Scenic Southern Journey & Hiriketiya Beach Escape",
      points: [
        "Morning Departure: Enjoy breakfast before leaving Kandy for Sri Lanka's southern coastline.",
        "Scenic Drive: Travel through changing landscapes towards the southern coastal region in your private vehicle.",
        "Hiriketiya Arrival: Reach the picturesque bay near Dickwella and check in to your accommodation.",
        "Hiriketiya Beach: Discover the curved sandy bay, tropical greenery and relaxed coastal atmosphere.",
        "Beachside Leisure: Spend time together by the sea or enjoy a refreshing drink at a nearby café.",
        "Sunset & Dinner: Enjoy a relaxed evening and a romantic dinner in the coastal surroundings."
      ],
      overnight: "Hotel in Hiriketiya.",
      imageUrl: "/documents/images/tour/IMG_003.jpg"
    },
    {
      day: 4,
      title: "Hiriketiya Morning & Mirissa Beach Romance",
      points: [
        "Leisurely Breakfast: Enjoy breakfast and a relaxed start to the day by the coast.",
        "Hiriketiya Beach: Take a morning beach walk or enjoy the bay's tropical scenery.",
        "Coastal Journey: Travel west towards Mirissa, enjoying scenic stretches of the southern coastline.",
        "Coconut Tree Hill: Visit Mirissa's famous palm-fringed viewpoint overlooking the Indian Ocean.",
        "Mirissa Beach: Relax on the sandy beach and enjoy time together beside the sea.",
        "Romantic Sunset: Watch the changing colours over the ocean before enjoying dinner at a beachfront restaurant."
      ],
      overnight: "Hotel in Mirissa.",
      imageUrl: "/documents/images/tour/IMG_004.jpg"
    },
    {
      day: 5,
      title: "Galle Fort Heritage & Coastal Romance",
      points: [
        "Relaxed Breakfast: Enjoy breakfast at your hotel before departing Mirissa.",
        "Coastal Drive: Travel towards Galle along the scenic southern shoreline.",
        "Galle Fort: Explore the UNESCO World Heritage-listed Old Town of Galle and its Fortifications, renowned for its historic architecture and cultural influences.",
        "Historic Streets: Wander through charming lanes featuring heritage buildings, boutique shops, art galleries and inviting cafés.",
        "Lighthouse & Ramparts: Admire the iconic Galle Lighthouse and enjoy ocean views from the historic fortifications.",
        "Romantic Evening: Enjoy dinner in or around Galle Fort before returning to your accommodation."
      ],
      overnight: "Boutique hotel in Galle.",
      imageUrl: "/documents/images/tour/IMG_005.jpg"
    },
    {
      day: 6,
      title: "Bentota Beachside Luxury & Romantic Experiences",
      points: [
        "Leisurely Breakfast: Enjoy breakfast before leaving Galle for Bentota.",
        "Coastal Journey: Travel north in your private vehicle, passing scenic stretches of Sri Lanka's southwestern coastline.",
        "Bentota Arrival: Check in to your beachside hotel or resort and settle into your surroundings.",
        "Bentota Beach: Enjoy the sandy coastline, tropical views and time to relax together.",
        "Optional River Safari: Explore Bentota River's mangrove-lined waterways and observe local birdlife, subject to availability.",
        "Sunset Dining: Celebrate your final evening with a romantic dinner, with private dining arrangements available on request."
      ],
      overnight: "Beachside resort in Bentota.",
      imageUrl: "/documents/images/tour/IMG_006.jpg"
    },
    {
      day: 7,
      title: "Bentota Leisure & Departure",
      points: [
        "Final Breakfast: Enjoy your last breakfast together at the hotel.",
        "Beachside Moments: Take a final walk along Bentota Beach or relax at the resort, depending on your flight schedule.",
        "Hotel Check-out: Complete check-out and prepare for your private airport transfer.",
        "Optional Colombo Visit: If your flight schedule allows, enjoy a brief visit to selected Colombo attractions.",
        "Optional Shopping: Browse for Sri Lankan souvenirs if time permits.",
        "Airport Transfer: Travel to Bandaranaike International Airport (CMB) with sufficient time for your departure flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/IMG_007.jpg"
    }
  ],

  hotelRecommendation:
    "Romantic hotels in Kandy and Hiriketiya, a beachside stay in Mirissa, a boutique heritage hotel in Galle, and a luxury beachfront resort in Bentota.",
  transportation:
    "Private air-conditioned vehicle with a dedicated chauffeur-guide throughout the journey.",
  meals:
    "Daily breakfast. Other meals at your own choice unless arranged in advance.",

  included: [
    "6 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Visits described in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Optional activities and excursions",
    "River safari and water sports",
    "Personal expenses and tips",
    "Travel insurance",
    "Special romantic arrangements unless confirmed"
  ],

  optionalExperiences: [
    "Private romantic dinner",
    "Couple's spa treatment",
    "Bentota River boat safari",
    "Water sports in suitable coastal locations",
    "Seasonal whale-watching excursion from Mirissa",
    "Flowers, anniversary cake or room decorations",
    "Traditional cultural experiences in Kandy"
  ],

  tourFaqs: [
    {
      q: "Is this seven-day tour suitable for a honeymoon?",
      a: "Yes. This private journey combines Kandy's cultural heritage with tropical beaches, historic Galle and relaxing beachfront accommodation in Bentota."
    },
    {
      q: "Which destinations are included in the tour?",
      a: "The itinerary covers Kandy, Hiriketiya, Mirissa, Galle and Bentota, with airport transfers at the beginning and end of the journey."
    },
    {
      q: "Can we arrange special romantic experiences?",
      a: "Yes. Private dinners, couple's spa treatments, flowers and other special arrangements may be requested in advance, subject to availability."
    },
    {
      q: "Is whale watching available throughout the year?",
      a: "No. Whale-watching excursions are seasonal and depend on departure schedules, weather and sea conditions. The activity is optional."
    }
  ]
},

  
{
  slug: "highland-to-coast-romance-8-day-tour",
  title: "Highland to Coast Romance",
  category: "Romantic & Honeymoon Tours",
  duration: "8 Days / 7 Nights",
  highlights: [
    "Kandy Cultural Heritage & Lake",
    "Nuwara Eliya Tea Plantations",
    "Romantic Hiriketiya Beach",
    "Mirissa Beach & Coconut Tree Hill",
    "UNESCO-listed Galle Fort",
    "Bentota Beachside Luxury",
    "Romantic Sunsets & Private Dining"
  ],
  price: "2100 USD per couple",
  blurb:
    "A romantic eight-day escape combining Kandy's cultural charm, Nuwara Eliya's misty tea country and the tropical beaches of Hiriketiya, Mirissa, Galle and Bentota.",
  motif: "romance",
  imageUrl: "/documents/images/tour/Honeymoon_Moments.jpg",
  heroTitle: "Highland to Coast Romance — 8 Days in Sri Lanka",
  intro:
    "Discover Sri Lanka together on a private romantic journey from the cultural heart of Kandy through misty highlands and down to the sun-kissed southern coastline.",
  overview:
    "Explore Kandy's sacred heritage, admire Nuwara Eliya's tea-covered hills, unwind on Hiriketiya and Mirissa beaches, discover the historic streets of Galle Fort and finish with a relaxing beachfront stay in Bentota. This journey blends cultural discovery, scenic drives and romantic coastal experiences.",
  bestFor:
    "Couples seeking a honeymoon or romantic holiday combining hill-country scenery, cultural heritage and tropical beaches.",
  groupSize:
    "Private vehicle with a dedicated chauffeur-guide — customised for couples.",
  physicalLevel: "Easy",
  destinationsCovered:
    "Airport → Kandy → Nuwara Eliya → Hiriketiya → Mirissa → Galle → Bentota → Airport",

  itinerary: [
    {
      day: 1,
      title: "Airport Welcome & Journey to Kandy",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB), receive traditional flower garlands and enjoy assistance with your luggage.",
        "Private Transfer: Settle into your air-conditioned vehicle and begin your journey towards Kandy.",
        "Scenic Drive: Enjoy changing landscapes and lush greenery along the route into Sri Lanka's central highlands.",
        "Hotel Check-in: Arrive in Kandy, check in to your accommodation and relax after your journey.",
        "Kandy Lake: If time permits, enjoy a peaceful walk around the picturesque lake in the heart of the city.",
        "Romantic Evening: Enjoy a relaxed dinner at your hotel or a nearby restaurant."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/IMG_035.jpg"
    },
    {
      day: 2,
      title: "Kandy Heritage & Cultural Romance",
      points: [
        "Leisurely Breakfast: Enjoy breakfast at your hotel before exploring Kandy.",
        "Temple of the Tooth: Visit Sri Dalada Maligawa, an important Buddhist shrine within the UNESCO-listed Sacred City of Kandy.",
        "Royal Heritage: Discover the historic surroundings of the former Kandyan royal complex and learn about the city's cultural traditions.",
        "Peradeniya Royal Botanic Gardens: Stroll through beautifully landscaped gardens filled with tropical plants and towering trees.",
        "Kandy City: Browse local craft shops and discover traditional Sri Lankan handicrafts.",
        "Romantic Evening: Return to your hotel and enjoy a peaceful evening together."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/IMG_012.jpg"
    },
    {
      day: 3,
      title: "Scenic Highlands & Nuwara Eliya Romance",
      points: [
        "Morning Departure: Enjoy breakfast before travelling from Kandy towards Nuwara Eliya.",
        "Ramboda Falls: Stop to admire the scenic waterfall and surrounding mountain landscape, subject to access and conditions.",
        "Tea Country: Travel through rolling green hills and visit a tea plantation to learn about Sri Lanka's famous Ceylon tea.",
        "Tea Factory Experience: Discover traditional tea production methods and enjoy a tea tasting where available.",
        "Gregory Lake: Visit the picturesque lake in Nuwara Eliya and enjoy the cool highland atmosphere.",
        "Romantic Evening: Check in to your hotel and enjoy a cosy dinner in the cool hill-country setting."
      ],
      overnight: "Hotel in Nuwara Eliya.",
      imageUrl: "/documents/images/tour/IMG_013.jpg"
    },
    {
      day: 4,
      title: "Highland Journey & Hiriketiya Beach Escape",
      points: [
        "Leisurely Breakfast: Enjoy breakfast before departing Nuwara Eliya for the southern coast.",
        "Scenic Drive: Travel through Sri Lanka's changing landscapes as the cool highlands give way to tropical lowlands.",
        "Coastal Arrival: Arrive in the Dickwella area and check in to your accommodation near Hiriketiya Bay.",
        "Hiriketiya Beach: Discover the beautiful curved bay framed by tropical greenery and sandy shores.",
        "Beachside Leisure: Spend time together by the sea or relax at a nearby café overlooking the coast.",
        "Romantic Dinner: Enjoy a relaxed dinner in Hiriketiya and unwind in the peaceful coastal atmosphere."
      ],
      overnight: "Hotel in Hiriketiya.",
      imageUrl: "/documents/images/tour/IMG_014.jpg"
    },
    {
      day: 5,
      title: "Hiriketiya Morning & Mirissa Beach Romance",
      points: [
        "Leisurely Breakfast: Enjoy breakfast and a relaxed start to the day.",
        "Hiriketiya Beach: Take a morning beach walk or enjoy the tropical scenery around the bay.",
        "Coastal Journey: Travel towards Mirissa along the scenic southern shoreline.",
        "Coconut Tree Hill: Visit the iconic palm-fringed viewpoint overlooking the Indian Ocean.",
        "Mirissa Beach: Relax on the sandy beach and enjoy the tropical coastal atmosphere.",
        "Sunset Together: Watch the sunset over the ocean before enjoying a romantic dinner at a beachfront restaurant."
      ],
      overnight: "Hotel in Mirissa.",
      imageUrl: "/documents/images/tour/IMG_015.jpg"
    },
    {
      day: 6,
      title: "Galle Fort Heritage & Coastal Romance",
      points: [
        "Relaxed Breakfast: Enjoy breakfast at your hotel before departing Mirissa.",
        "Coastal Drive: Travel towards Galle and admire the southern coastline along the way.",
        "Galle Fort: Explore the UNESCO World Heritage-listed Old Town of Galle and its Fortifications, celebrated for its historic architecture and cultural influences.",
        "Historic Streets: Wander through charming lanes lined with heritage buildings, boutiques, galleries and cafés.",
        "Lighthouse & Ramparts: Admire the iconic Galle Lighthouse and enjoy beautiful views of the Indian Ocean from the fortifications.",
        "Romantic Evening: Enjoy dinner in or around Galle Fort before returning to your boutique hotel."
      ],
      overnight: "Boutique hotel in Galle.",
      imageUrl: "/documents/images/tour/IMG_008.png"
    },
    {
      day: 7,
      title: "Bentota Beachside Luxury & Romance",
      points: [
        "Leisurely Breakfast: Enjoy breakfast before departing Galle for Bentota.",
        "Coastal Journey: Travel north along Sri Lanka's southwestern coastline in your private vehicle.",
        "Bentota Arrival: Check in to your beachfront accommodation and settle into the tropical surroundings.",
        "Bentota Beach: Enjoy the sandy coastline, ocean views and time to relax together.",
        "Optional River Safari: Explore Bentota River's mangrove-lined waterways and observe local birdlife, subject to availability.",
        "Romantic Sunset Dining: Celebrate your final evening with a romantic dinner, with private dining arrangements available on request."
      ],
      overnight: "Beachside resort in Bentota.",
      imageUrl: "/documents/images/tour/IMG_015.jpg"
    },
    {
      day: 8,
      title: "Bentota Leisure & Departure",
      points: [
        "Final Breakfast: Enjoy your last breakfast together at the hotel.",
        "Beachside Moments: Take a final walk along Bentota Beach or relax at the resort, depending on your flight schedule.",
        "Hotel Check-out: Complete check-out and prepare for your private airport transfer.",
        "Optional Colombo Visit: If your flight schedule allows, enjoy a brief visit to selected Colombo attractions.",
        "Optional Shopping: Browse for Sri Lankan souvenirs if time permits.",
        "Airport Transfer: Travel to Bandaranaike International Airport (CMB) with sufficient time for your departure flight."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/IMG_017.jpg"
    }
  ],

  hotelRecommendation:
    "Romantic hotels in Kandy and Nuwara Eliya, a boutique coastal stay in Hiriketiya, a beach hotel in Mirissa, a heritage boutique hotel in Galle and a luxury beachfront resort in Bentota.",
  transportation:
    "Private air-conditioned vehicle with a dedicated chauffeur-guide throughout the journey.",
  meals:
    "Daily breakfast. Other meals at your own choice unless arranged in advance.",

  included: [
    "7 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Visits described in the itinerary, subject to access and opening hours"
  ],

  excluded: [
    "International flights",
    "Visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees unless confirmed in the quotation",
    "Optional excursions and activities",
    "Tea tasting or factory charges where applicable",
    "River safari and water sports",
    "Personal expenses and tips",
    "Travel insurance",
    "Special romantic arrangements unless confirmed"
  ],

  optionalExperiences: [
    "Private romantic dinner",
    "Couple's spa treatment",
    "Ceylon tea tasting",
    "Bentota River boat safari",
    "Suitable coastal water sports",
    "Seasonal whale-watching excursion from Mirissa",
    "Flowers, anniversary cake or room decorations",
    "Traditional cultural experiences in Kandy"
  ],

  tourFaqs: [
    {
      q: "Is this tour suitable for a honeymoon?",
      a: "Yes. This eight-day private journey combines cultural experiences in Kandy, scenic tea country in Nuwara Eliya, tropical beaches and historic Galle Fort with relaxing stays along the southern coast."
    },
    {
      q: "Which destinations are included?",
      a: "The itinerary includes Kandy, Nuwara Eliya, Hiriketiya, Mirissa, Galle and Bentota, with airport transfers at the beginning and end of the tour."
    },
    {
      q: "Can we arrange special romantic experiences?",
      a: "Yes. Private dinners, couple's spa treatments, flowers and other special arrangements can be requested in advance, subject to availability."
    },
    {
      q: "Is whale watching available throughout the year?",
      a: "No. Whale-watching excursions are seasonal and depend on departure schedules, weather and sea conditions. The activity is optional."
    },
    {
      q: "Are all entrance fees included?",
      a: "Entrance fees are included only if specifically confirmed in the final quotation. Optional experiences and additional activities may incur extra charges."
    }
  ]
},


  
  {
    slug: "grand-honeymoon-journey-10-day-tour",
    title: "The Grand Honeymoon Journey",
    category: "Romantic & Honeymoon Tours",
    duration: "10 Days / 9 Nights",
    highlights: [
      "Sigiriya Rock Fortress",
      "Temple of the Sacred Tooth Relic",
      "Nuwara Eliya Tea Plantations",
      "Scenic Train Journey to Ella",
      "Yala National Park Safari",
      "Galle Fort & Mirissa Beach"
    ],
    price: "2499 USD per couple",
    blurb:
      "A comprehensive romantic journey combining ancient heritage, misty tea hills, wildlife encounters and the beauty of Sri Lanka's southern coast.",
    motif: "romance",
    imageUrl: "/documents/images/tour/The Grand Honeymoon Journey.jpg",
    heroTitle: "The Grand Honeymoon Journey — 10 Days Across Sri Lanka",
    intro:
      "Celebrate your time together on an extended private journey through Sri Lanka's most memorable landscapes, from the ancient Cultural Triangle to tea-covered mountains, wildlife-rich wilderness and the southern coast.",
    overview:
      "Discover Sigiriya's remarkable ancient citadel, experience Kandy's sacred heritage and travel through the central highlands to Ella. Continue to Yala for a wildlife safari before relaxing along the southern coast in Galle and Mirissa.",
    bestFor:
      "Couples seeking a comprehensive luxury honeymoon with culture, scenic travel, wildlife and beach relaxation.",
    groupSize:
      "Private vehicle with a dedicated chauffeur-guide — customisable for couples.",
    physicalLevel: "Easy to moderate",
    destinationsCovered:
      "Airport → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Galle → Mirissa → Airport",

    itinerary: [
      {
        day: 1,
        title: "Airport Welcome & Arrival in Sigiriya",
        points: [
          "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive traditional flower garlands.",
          "Private Transfer: Begin your journey towards the Cultural Triangle in a comfortable air-conditioned vehicle.",
          "Countryside Drive: Enjoy views of rural villages and Sri Lanka's changing landscapes.",
          "Refreshment Stop: Pause for refreshments or a meal depending on arrival time.",
          "Sigiriya Arrival: Reach your accommodation and check in.",
          "Romantic Evening: Unwind after your flight and enjoy dinner at leisure."
        ],
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/IMG_018.jpg"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Cultural Triangle",
        points: [
          "Breakfast: Enjoy breakfast before exploring Sigiriya.",
          "UNESCO World Heritage Site: Discover the ancient city of Sigiriya, known for its archaeological remains and historic royal citadel.",
          "Rock Fortress: Climb Sigiriya Rock, subject to fitness and weather, and explore the remains of the ancient royal complex.",
          "Frescoes & Water Gardens: Learn about the site's celebrated frescoes and landscaped gardens.",
          "Village Experience: Enjoy an optional village experience and traditional Sri Lankan meal.",
          "Relaxing Evening: Return to your hotel and enjoy a quiet evening together."
        ],
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/IMG_027.jpg"
      },
      {
        day: 3,
        title: "Journey to Kandy & Sacred Heritage",
        points: [
          "Morning Departure: Enjoy breakfast and leave Sigiriya for Kandy.",
          "Scenic Countryside: Travel through Sri Lanka's central region with a refreshment stop if needed.",
          "Kandy Arrival: Check in to your hotel and relax.",
          "Temple of the Sacred Tooth Relic: Visit the sacred temple within the UNESCO-listed Sacred City of Kandy.",
          "Kandy Lake: Enjoy a peaceful walk beside the lake and admire the surrounding hills.",
          "Romantic Evening: Enjoy dinner at your hotel or arrange a special private dining experience."
        ],
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/IMG_028.jpg"
      },
      {
        day: 4,
        title: "Kandy Heritage & Nuwara Eliya Tea Country",
        points: [
          "Breakfast in Kandy: Begin the day with a relaxed breakfast.",
          "Royal Botanical Gardens: Explore the tropical gardens at Peradeniya, subject to available time.",
          "Scenic Highland Drive: Travel through the central highlands towards Nuwara Eliya.",
          "Waterfall Viewpoint: Stop at a suitable waterfall viewpoint along the route, depending on conditions.",
          "Tea Estate Visit: Discover Ceylon tea production at a local estate or factory, subject to opening hours.",
          "Nuwara Eliya Arrival: Check in to your accommodation and enjoy the cool climate."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/IMG_029.jpg"
      },
      {
        day: 5,
        title: "Nuwara Eliya & Scenic Journey to Ella",
        points: [
          "Highland Breakfast: Enjoy breakfast in Sri Lanka's tea country.",
          "Gregory Lake: Take a gentle walk beside the lake and enjoy the surrounding mountain scenery.",
          "Tea Plantations: Admire the rolling hills and emerald tea estates.",
          "Scenic Train Journey: Travel towards Ella by train if seats and schedules permit.",
          "Highland Views: Enjoy dramatic valleys and green landscapes along the journey.",
          "Ella Arrival: Check in to your hotel and spend the evening at leisure."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/IMG_030.jpg"
      },
      {
        day: 6,
        title: "Ella's Scenic Landscapes & Journey to Yala",
        points: [
          "Breakfast with Mountain Views: Start the day at a relaxed pace.",
          "Nine Arch Bridge: Visit Ella's iconic railway bridge surrounded by lush greenery.",
          "Little Adam's Peak: Enjoy an optional walk to a scenic viewpoint, depending on fitness and weather.",
          "Ravana Falls: Stop to admire the waterfall along the Ella–Wellawaya road.",
          "Journey to Yala: Travel south towards the Yala region through changing landscapes.",
          "Safari Lodge Check-in: Settle into your accommodation and enjoy a peaceful evening."
        ],
        overnight: "Hotel or safari lodge near Yala.",
        imageUrl: "/documents/images/tour/IMG_031.jpg"
      },
      {
        day: 7,
        title: "Yala National Park Safari & Wilderness Romance",
        points: [
          "Early Safari Departure: Set out for a wildlife safari at a suitable scheduled time.",
          "Yala National Park: Explore selected park areas with an authorised safari operator in search of Sri Lanka's wildlife.",
          "Wildlife Watching: Look for elephants, deer, crocodiles and a variety of birdlife; sightings are never guaranteed.",
          "Return to the Lodge: Enjoy breakfast or a meal according to your accommodation and safari arrangements.",
          "Relaxed Afternoon: Spend time unwinding at your lodge or enjoying the surrounding natural environment.",
          "Quiet Evening: Enjoy dinner and the atmosphere of Sri Lanka's wilderness."
        ],
        overnight: "Hotel or safari lodge near Yala.",
        imageUrl: "/documents/images/tour/IMG_032.jpg"
      },
      {
        day: 8,
        title: "Yala to Galle & Historic Coastal Heritage",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before leaving the Yala region.",
          "Coastal Journey: Travel towards Galle along Sri Lanka's southern landscapes.",
          "Galle Fort: Explore the UNESCO World Heritage-listed Old Town and its historic fortifications.",
          "Galle Lighthouse: Walk along the ramparts and admire ocean views around the lighthouse.",
          "Historic Streets: Discover colonial-era architecture, small galleries and boutique shops.",
          "Romantic Evening: Check in to your hotel and enjoy dinner at leisure."
        ],
        overnight: "Hotel in Galle.",
        imageUrl: "/documents/images/tour/IMG_009.jpg"
      },
      {
        day: 9,
        title: "Galle to Mirissa & Southern Coast Relaxation",
        points: [
          "Leisurely Breakfast: Enjoy a relaxed start in Galle.",
          "Coastal Drive: Continue towards Mirissa along the southern coastline.",
          "Mirissa Beach: Enjoy the sandy beach and tropical ocean views.",
          "Optional Whale Watching: Arrange a seasonal excursion, subject to weather, sea conditions and availability.",
          "Beachside Leisure: Spend time together at the beach or explore the local coastal area.",
          "Romantic Dinner: Enjoy a special evening meal at your hotel or a nearby restaurant."
        ],
        overnight: "Hotel in Mirissa.",
        imageUrl: "/documents/images/tour/IMG_033.jpg"
      },
      {
        day: 10,
        title: "Mirissa & Departure",
        points: [
          "Final Breakfast: Enjoy your last breakfast together.",
          "Hotel Check-out: Prepare for your departure transfer.",
          "Private Transfer: Travel towards Bandaranaike International Airport (CMB).",
          "Scenic Journey: Enjoy the coastal and countryside scenery along the way.",
          "Refreshment Stop: Pause for refreshments depending on the schedule.",
          "Departure: Arrive at the airport with sufficient time for your international flight."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/IMG_034.jpg"
      }
    ],

    hotelRecommendation:
      "Luxury or boutique accommodation in Sigiriya, Kandy, Nuwara Eliya and Ella, followed by a quality safari lodge near Yala and coastal hotels in Galle and Mirissa.",
    transportation:
      "Private air-conditioned vehicle with a dedicated chauffeur-guide; safari jeep and train tickets are subject to the selected arrangements.",
    meals:
      "Daily breakfast. Meals during safari stays depend on the chosen accommodation and confirmed package.",
    included: [
      "9 nights' accommodation",
      "Daily breakfast",
      "Private air-conditioned vehicle and chauffeur-guide",
      "Airport welcome and assistance",
      "Visits described in the itinerary, subject to access and opening hours"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Lunches and dinners unless specified",
      "Park entrance fees and safari jeep unless confirmed in the quotation",
      "Train tickets unless confirmed",
      "Optional whale watching",
      "Personal expenses and tips",
      "Travel insurance",
      "Special romantic arrangements unless confirmed"
    ],
    optionalExperiences: [
      "Private romantic dinner",
      "Scenic train journey",
      "Yala wildlife safari",
      "Couple's spa treatment",
      "Seasonal whale watching",
      "Private tea tasting",
      "Honeymoon room decorations"
    ],
    tourFaqs: [
      {
        q: "Is the Yala safari guaranteed to include leopard sightings?",
        a: "No. Yala is known for its wildlife, but sightings depend on natural conditions and animal movement. A safari provides an opportunity to look for wildlife, not a guarantee of specific sightings."
      },
      {
        q: "Can we travel by train to Ella?",
        a: "Yes, subject to train schedules and seat availability. If suitable tickets are unavailable, the journey can be completed by private vehicle."
      },
      {
        q: "Can this tour be customised for a honeymoon?",
        a: "Yes. Accommodation, dining and optional experiences can be tailored to your preferences, subject to availability and advance confirmation."
      }
    ]
  },

  {
    slug: "ultimate-ceylon-love-story-12-day-tour",
    title: "The Ultimate Ceylon Love Story",
    category: "Romantic & Honeymoon Tours",
    duration: "12 Days / 11 Nights",
    highlights: [
      "Sigiriya Rock Fortress",
      "Ancient City of Polonnaruwa",
      "Sacred City of Kandy",
      "Nuwara Eliya Tea Country",
      "Ella's Scenic Highlands",
      "Yala National Park Safari",
      "Tangalle Coastal Retreat",
      "Galle Fort — UNESCO World Heritage Site"
    ],
    price: "2899 USD per couple",
    blurb:
      "An extended luxury journey through Sri Lanka's ancient kingdoms, misty tea country, wildlife-rich wilderness and peaceful southern coastline.",
    motif: "romance",
    imageUrl: "/documents/images/tour/The Ultimate Ceylon Love Story.jpg",
    heroTitle: "The Ultimate Ceylon Love Story — 12 Days of Heritage, Highlands & Romance",
    intro:
      "Take your time discovering Sri Lanka together on an extended private journey that combines ancient history, cultural traditions, scenic mountain escapes, wildlife and the slower rhythm of the southern coast.",
    overview:
      "Explore Sigiriya and the ancient city of Polonnaruwa before discovering the sacred heritage of Kandy. Continue through tea plantations and mountain landscapes to Ella, then experience the wilderness of Yala and unwind on the peaceful beaches of Tangalle before visiting historic Galle.",
    bestFor:
      "Couples seeking an extended luxury honeymoon with ancient heritage, mountain scenery, wildlife and coastal relaxation.",
    groupSize:
      "Private vehicle with a dedicated chauffeur-guide — customisable for couples.",
    physicalLevel: "Easy to moderate",
    destinationsCovered:
      "Airport → Sigiriya → Polonnaruwa → Kandy → Nuwara Eliya → Ella → Yala → Tangalle → Galle → Airport",

    itinerary: [
      {
        day: 1,
        title: "Airport Welcome & Arrival in Sigiriya",
        points: [
          "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive traditional flower garlands.",
          "Private Transfer: Begin your journey towards the Cultural Triangle in a comfortable air-conditioned vehicle.",
          "Scenic Countryside: Enjoy views of rural villages and Sri Lanka's changing landscapes.",
          "Refreshment Stop: Pause for refreshments depending on your arrival time.",
          "Sigiriya Arrival: Reach your accommodation and check in.",
          "Romantic Evening: Unwind after your flight and enjoy dinner at leisure."
        ],
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/IMG_019.jpg"
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress & Ancient Landscapes",
        points: [
          "Breakfast: Enjoy breakfast before exploring the Cultural Triangle.",
          "UNESCO World Heritage Site: Visit the ancient city of Sigiriya, renowned for its archaeological remains and historic royal citadel.",
          "Sigiriya Rock Fortress: Climb the iconic rock, subject to fitness and weather, and explore the remains of the royal complex.",
          "Frescoes & Water Gardens: Discover the celebrated frescoes, landscaped gardens and historic engineering features.",
          "Pidurangala Viewpoint: If time and energy permit, enjoy panoramic views of Sigiriya and its surrounding landscape.",
          "Relaxing Evening: Return to your hotel and enjoy time together."
        ],
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/IMG_020.jpg"
      },
      {
        day: 3,
        title: "Polonnaruwa Ancient City & Heritage",
        points: [
          "Morning Departure: Enjoy breakfast and travel towards Polonnaruwa.",
          "UNESCO World Heritage Site: Explore the Ancient City of Polonnaruwa, a UNESCO-listed archaeological landscape and former medieval capital.",
          "Royal Palace Ruins: Discover the remains of the royal palace complex and ancient administrative buildings.",
          "Sacred Quadrangle: Explore the historic religious structures and architectural remains of the Sacred Quadrangle.",
          "Gal Vihara: Admire the celebrated rock-cut Buddha sculptures carved into a granite outcrop.",
          "Return to Sigiriya: Travel back to your hotel and enjoy a relaxing evening."
        ],
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/polonnaruwa.png"
      },
      {
        day: 4,
        title: "Journey to Kandy & Sacred Heritage",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before leaving the Cultural Triangle.",
          "Journey to Kandy: Travel through Sri Lanka's central countryside towards the historic hill capital.",
          "Kandy Arrival: Check in to your accommodation and take time to relax.",
          "Temple of the Sacred Tooth Relic: Visit this revered Buddhist temple within the UNESCO-listed Sacred City of Kandy.",
          "Kandy Lake: Enjoy a peaceful walk beside the lake and admire the surrounding hills.",
          "Romantic Evening: Enjoy dinner at your hotel or arrange a private dining experience."
        ],
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/IMG_016.jpg"
      },
      {
        day: 5,
        title: "Kandy Culture & Journey to Nuwara Eliya",
        points: [
          "Breakfast in Kandy: Start the day at a relaxed pace.",
          "Royal Botanical Gardens: Explore the landscaped gardens at Peradeniya, subject to available time.",
          "Kandyan Heritage: Discover the royal history and cultural traditions of the former hill capital.",
          "Scenic Highland Drive: Travel towards Nuwara Eliya through winding mountain roads.",
          "Tea Estate Visit: Learn about Ceylon tea production at a local estate or factory, subject to opening hours.",
          "Nuwara Eliya Arrival: Check in to your hotel and enjoy the cool highland atmosphere."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/IMG_021.jpg"
      },
      {
        day: 6,
        title: "Nuwara Eliya Tea Country & Scenic Journey to Ella",
        points: [
          "Highland Breakfast: Enjoy breakfast surrounded by tea-country scenery.",
          "Gregory Lake: Take a peaceful walk beside the lake and enjoy views of the surrounding hills.",
          "Tea Plantations: Discover the rolling estates and landscapes that define the region.",
          "Scenic Train Journey: Travel towards Ella by train if suitable schedules and seats are available.",
          "Highland Views: Admire the dramatic valleys and lush mountain scenery along the way.",
          "Ella Arrival: Check in to your accommodation and enjoy the evening at leisure."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/IMG_022.jpg"
      },
      {
        day: 7,
        title: "Ella's Mountain Landscapes & Romantic Escape",
        points: [
          "Breakfast with a View: Begin the day at a relaxed pace.",
          "Nine Arch Bridge: Visit Ella's iconic railway bridge surrounded by lush greenery.",
          "Little Adam's Peak: Enjoy an optional walk to a scenic viewpoint, depending on fitness and weather.",
          "Ravana Falls: Stop to admire the waterfall along the Ella–Wellawaya road.",
          "Ella Town: Explore local cafés and shops or enjoy free time together.",
          "Romantic Evening: Return to your accommodation and enjoy the peaceful mountain atmosphere."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/IMG_023.jpg"
      },
      {
        day: 8,
        title: "Ella to Yala & Arrival in the Wilderness",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before leaving Ella.",
          "Journey South: Travel towards the Yala region through Sri Lanka's changing landscapes.",
          "Scenic Stops: Enjoy selected viewpoints along the way, depending on travel time.",
          "Yala Arrival: Check in to your safari lodge or nearby accommodation.",
          "Leisure Time: Relax at the property and enjoy the natural surroundings.",
          "Evening at Leisure: Enjoy dinner and prepare for the following day's safari."
        ],
        overnight: "Hotel or safari lodge near Yala.",
        imageUrl: "/documents/images/tour/IMG_025.jpg"
      },
      {
        day: 9,
        title: "Yala National Park Safari & Wilderness Experience",
        points: [
          "Safari Departure: Set out for a wildlife safari at a suitable scheduled time.",
          "Yala National Park: Explore selected park areas with an authorised safari operator.",
          "Wildlife Watching: Look for elephants, deer, crocodiles and a variety of birdlife; sightings depend on natural conditions.",
          "Return to Accommodation: Enjoy breakfast or a meal according to your lodge and safari arrangements.",
          "Relaxing Afternoon: Spend time unwinding at your accommodation or enjoying the surrounding natural environment.",
          "Wilderness Evening: Enjoy dinner and a peaceful evening away from the busy coastal towns."
        ],
        overnight: "Hotel or safari lodge near Yala.",
        imageUrl: "/documents/images/tour/IMG_026.jpg"
      },
      {
        day: 10,
        title: "Yala to Tangalle & Southern Coast Retreat",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before leaving the Yala region.",
          "Coastal Journey: Travel towards Tangalle along the southern coast.",
          "Tangalle Arrival: Check in to your beachside accommodation and settle in.",
          "Beach Relaxation: Enjoy the sandy coastline and the quieter atmosphere of the southern coast.",
          "Leisure Time: Relax at your resort or take a peaceful walk along the beach.",
          "Romantic Sunset: Enjoy dinner at your hotel or a nearby restaurant."
        ],
        overnight: "Beachside hotel in Tangalle.",
        imageUrl: "/documents/images/tour/IMG_024.jpg"
      },
      {
        day: 11,
        title: "Tangalle to Galle & Historic Coastal Romance",
        points: [
          "Leisurely Breakfast: Enjoy a relaxed start before leaving Tangalle.",
          "Coastal Drive: Travel towards Galle through Sri Lanka's southern coastal landscapes.",
          "Galle Fort: Explore the UNESCO World Heritage-listed Old Town and its historic fortifications.",
          "Galle Lighthouse: Walk along the ramparts and admire the lighthouse and ocean views.",
          "Historic Streets: Discover colonial-era architecture, galleries and boutique shops.",
          "Romantic Evening: Check in to your hotel and enjoy dinner at leisure."
        ],
        overnight: "Hotel in Galle.",
        imageUrl: "/documents/images/tour/IMG_010.png"
      },
      {
        day: 12,
        title: "Galle & Departure",
        points: [
          "Final Breakfast: Enjoy breakfast before checking out.",
          "Optional Old Town Walk: Enjoy a short stroll through Galle Fort if your flight schedule permits.",
          "Private Transfer: Begin your journey towards Bandaranaike International Airport (CMB).",
          "Scenic Journey: Enjoy the changing coastal and countryside landscapes.",
          "Refreshment Stop: Pause for refreshments as required, depending on your departure schedule.",
          "Departure: Arrive at the airport with sufficient time for your international flight."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/IMG_011.jpg"
      }
    ],

    hotelRecommendation:
      "Luxury and boutique accommodation in Sigiriya, Kandy, Nuwara Eliya and Ella, followed by a quality safari lodge near Yala and beachside stays in Tangalle and Galle.",
    transportation:
      "Private air-conditioned vehicle with a dedicated chauffeur-guide; safari jeep and train tickets are subject to the confirmed arrangements.",
    meals:
      "Daily breakfast. Meals during safari stays depend on the selected accommodation and package.",
    included: [
      "11 nights' accommodation",
      "Daily breakfast",
      "Private air-conditioned vehicle and chauffeur-guide",
      "Airport welcome and assistance",
      "Visits described in the itinerary, subject to access and opening hours"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Lunches and dinners unless specified",
      "Entrance fees and safari jeep unless confirmed in the quotation",
      "Train tickets unless confirmed",
      "Optional excursions",
      "Personal expenses and tips",
      "Travel insurance",
      "Special romantic arrangements unless confirmed"
    ],
    optionalExperiences: [
      "Private romantic dinner",
      "Scenic train journey through tea country",
      "Yala wildlife safari",
      "Couple's spa treatment",
      "Private tea tasting",
      "Beachside dining",
      "Honeymoon room decorations or anniversary cake"
    ],
    tourFaqs: [
      {
        q: "Which UNESCO World Heritage Sites are included?",
        a: "The itinerary includes Sigiriya, the Ancient City of Polonnaruwa, the Sacred City of Kandy and the Old Town of Galle and its Fortifications."
      },
      {
        q: "Are wildlife sightings guaranteed during the Yala safari?",
        a: "No. Wildlife sightings depend on natural conditions, animal movement and the areas accessible during the safari."
      },
      {
        q: "Can we customise the honeymoon experience?",
        a: "Yes. Accommodation, meals, private dining and optional activities can be customised according to your preferences and availability."
      },
      {
        q: "Is the train journey included?",
        a: "A scenic train journey can be arranged subject to schedules and seat availability. The final quotation should confirm whether tickets are included."
      }
    ]
  },

{
  slug: "sigiriya-kandy-cultural-heritage-5-day-tour",
  title: "Sigiriya & Kandy Cultural Heritage",
  category: "Cultural Heritage Tours",
  duration: "5 Days / 4 Nights",
  highlights: [
    "Pinnawala Elephant Orphanage",
    "Sigiriya Rock Fortress — UNESCO World Heritage Site",
    "Complimentary Village Safari & Traditional Lunch",
    "Pidurangala Rock Viewpoint",
    "Dambulla Cave Temple — UNESCO World Heritage Site",
    "Temple of the Sacred Tooth Relic",
    "Royal Botanical Gardens, Peradeniya",
    "Traditional Kandyan Cultural Dance",
    "Gangaramaya Temple, Colombo"
  ],
  price: "From $799 pp",
  blurb: "Discover Sri Lanka's cultural heritage through the ancient rock fortress of Sigiriya, the sacred temples of Dambulla and Kandy, traditional village life and Colombo's distinctive religious architecture.",
  motif: "heritage",
  imageUrl: "/documents/images/tour/Sigiriya Rock Fortress.jpg",
  heroTitle: "Sigiriya & Kandy Cultural Heritage — 5 Days",
  intro: "Experience Sri Lanka's fascinating history and living traditions on a five-day private journey connecting Sigiriya, Dambulla, Kandy and Colombo.",
  overview: "Begin with a visit to Pinnawala Elephant Orphanage before continuing to Sigiriya. Explore the UNESCO World Heritage-listed Sigiriya Rock Fortress, enjoy a village safari and traditional Sri Lankan lunch, and visit Pidurangala Rock. Continue to Dambulla Cave Temple and a traditional craft village before travelling to Kandy. Discover the Temple of the Sacred Tooth Relic, Royal Botanical Gardens and a traditional Kandyan cultural dance performance. Finish with a visit to Gangaramaya Temple in Colombo before your departure.",
  bestFor: "Culture lovers, history enthusiasts, couples, families and travellers interested in Sri Lanka's ancient heritage and living traditions.",
  groupSize: "Private tour with a dedicated chauffeur-guide.",
  physicalLevel: "Moderate — climbing Sigiriya Rock Fortress involves stairs and walking. The Pidurangala visit also requires walking over uneven terrain.",
  destinationsCovered: "Airport → Pinnawala → Sigiriya → Pidurangala → Dambulla → Kandy → Peradeniya → Colombo → Airport",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Sigiriya",
      points: [
        "Airport Welcome: Arrive at Bandaranaike International Airport (CMB), where your chauffeur-guide will welcome you and assist with your luggage.",
        "Journey to Sigiriya: Begin your private transfer towards Sigiriya, travelling through Sri Lanka's scenic countryside.",
        "Pinnawala Elephant Orphanage: En route, visit Pinnawala Elephant Orphanage to learn about Asian elephant care and conservation and observe the elephants during their daily activities, depending on your arrival time.",
        "Continue to Sigiriya: Resume your journey towards Sigiriya or Habarana after the visit.",
        "Hotel Check-in: Arrive at your hotel, check in and take some time to relax after your journey.",
        "Relaxing Dinner: Enjoy a relaxing dinner with beautiful views of the Sigiriya Rock area."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiri01.jpg"
    },
    {
      day: 2,
      title: "Sigiriya Rock Fortress",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's exploration.",
        "Sigiriya Rock Fortress: Visit the UNESCO World Heritage Site and climb the iconic rock fortress with a specialist guide.",
        "Ancient Royal Citadel: Discover the extraordinary remains of King Kashyapa's ancient royal citadel and learn about its historical significance.",
        "Village Safari: After the hike, enjoy a complimentary village safari to experience traditional rural life in Sri Lanka.",
        "Traditional Sri Lankan Lunch: Enjoy a traditional Sri Lankan lunch as part of the village experience.",
        "Pidurangala Rock: Visit nearby Pidurangala Rock for a contrasting viewpoint overlooking Sigiriya, then return to your hotel for free time."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiri02.jpg"
    },
    {
      day: 3,
      title: "Dambulla Cave Temple & Journey to Kandy",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel before checking out and departing for Kandy.",
        "Dambulla Cave Temple: Explore the UNESCO-listed cave temple complex, featuring five caves filled with Buddhist murals and statues spanning more than 2,000 years.",
        "Buddhist Art & Heritage: Discover the temple's historic religious artwork and learn about its cultural and spiritual significance.",
        "Traditional Craft Village: Visit a traditional craft village to observe batik-making and wood carving.",
        "Spice Garden: Stop at a spice garden en route to Kandy to learn about Sri Lankan spices and their traditional uses.",
        "Cinnamon Tea Tasting & Kandy Arrival: Enjoy a complimentary cinnamon tea tasting before continuing to Kandy and checking in to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/dambulu01.jpg"
    },
    {
      day: 4,
      title: "Kandy's Living Heritage",
      points: [
        "Breakfast: Start the day with breakfast at your hotel in Kandy.",
        "Temple of the Sacred Tooth Relic: Visit this revered Buddhist temple and learn about its centuries-old custodial rituals and religious importance.",
        "Temple Heritage: Explore the temple's sacred surroundings and discover its connection to Sri Lanka's royal and Buddhist traditions.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, established during the Kandyan Kingdom.",
        "Botanical Exploration: Enjoy a leisurely walk through the gardens and appreciate their diverse plant collections and landscaped grounds.",
        "Kandyan Cultural Dance: Attend a traditional Kandyan cultural dance performance before returning to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy011.jpg"
    },
    {
      day: 5,
      title: "Colombo & Departure",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel in Kandy and complete check-out before departing for Colombo.",
        "Journey to Colombo: Travel by private vehicle towards Colombo, enjoying the changing scenery along the way.",
        "Gangaramaya Temple: Visit Gangaramaya Temple and explore its distinctive architecture and religious surroundings.",
        "Colombo Free Time: Enjoy free time in Colombo before your scheduled airport transfer.",
        "Private Airport Transfer: Continue to Bandaranaike International Airport (CMB) with your chauffeur-guide, allowing sufficient time for check-in.",
        "Departure: Arrive at the airport for your onward flight, bringing your five-day Sri Lankan journey to an end."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo011.jpg"
    }
  ],
  hotelRecommendation: "Comfortable hotels in Sigiriya or Habarana and Kandy, selected according to your preferred comfort level and travel dates.",
  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for airport transfers, sightseeing and travel between destinations.",
  meals: "Daily breakfast. A traditional Sri Lankan lunch is included during the village safari on Day 2. Other lunches and dinners are at your own choice unless arranged in advance.",
  included: [
    "4 nights' accommodation",
    "Daily breakfast",
    "Traditional Sri Lankan lunch during the village safari on Day 2",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Transfers and visits listed in the itinerary, subject to opening hours and operating schedules"
  ],
  excluded: [
    "International flights",
    "Sri Lankan visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees and specialist guide charges unless specified in the confirmed quotation",
    "Village safari charges unless confirmed as included",
    "Personal expenses and tips",
    "Travel insurance"
  ],
  optionalExperiences: [
    "Specialist guiding at Sigiriya Rock Fortress",
    "Additional cultural experiences, subject to availability",
    "Room upgrades, subject to availability"
  ],
  tourFaqs: [
    {
      q: "Which UNESCO World Heritage Sites are included?",
      a: "The itinerary includes Sigiriya Rock Fortress and Dambulla Cave Temple, both UNESCO World Heritage Sites."
    },
    {
      q: "Is Pinnawala Elephant Orphanage included on arrival day?",
      a: "The visit is planned en route to Sigiriya. Whether it can be completed depends on your flight arrival time and the day's schedule."
    },
    {
      q: "Is the village safari included?",
      a: "A complimentary village safari and traditional Sri Lankan lunch are listed in the Day 2 itinerary. The final quotation should confirm the included arrangements."
    },
    {
      q: "Is climbing Sigiriya Rock Fortress physically demanding?",
      a: "The climb involves many stairs and walking, so a moderate level of fitness is helpful. Guests should allow enough time and wear comfortable footwear."
    },
    {
      q: "Can Pidurangala Rock be visited on the same day as Sigiriya?",
      a: "The itinerary schedules both visits on Day 2. Completing both depends on the time spent at Sigiriya, weather, fitness and the day's conditions."
    },
    {
      q: "Does the tour include airport drop-off?",
      a: "Yes, the final day's itinerary includes a private transfer to Bandaranaike International Airport (CMB), timed around your departure flight."
    }
  ]
},


{
  slug: "sri-lanka-sacred-cities-cultural-heritage-7-day-tour",
  title: "Sri Lanka Sacred Cities & Cultural Heritage",
  category: "Cultural Heritage Tours",
  duration: "7 Days / 6 Nights",
  highlights: [
    "Pinnawala Elephant Orphanage",
    "Anuradhapura Sacred City — UNESCO World Heritage Site",
    "Sri Maha Bodhi & Atamasthana",
    "Ruwanwelisaya Stupa",
    "Sigiriya Rock Fortress — UNESCO World Heritage Site",
    "Pidurangala Rock Viewpoint",
    "Traditional Village Safari & Sri Lankan Lunch",
    "Dambulla Cave Temple — UNESCO World Heritage Site",
    "Temple of the Sacred Tooth Relic — UNESCO World Heritage Site",
    "Royal Botanical Gardens, Peradeniya",
    "Traditional Kandyan Cultural Dance",
    "Pettah Bazaar & Colombo City Experience",
    "Gangaramaya Temple & Colombo National Museum"
  ],
  price: "From $999 pp",
  blurb: "Discover Sri Lanka's sacred cities, ancient kingdoms and living traditions on a seven-day cultural journey from Anuradhapura to Sigiriya, Kandy and Colombo.",
  motif: "heritage",
  imageUrl: "/documents/images/tour/Buddha_Statue.jpg",
  heroTitle: "Sri Lanka Sacred Cities & Cultural Heritage — 7 Days",
  intro: "Journey through Sri Lanka's remarkable cultural heritage, exploring ancient Buddhist cities, UNESCO World Heritage Sites, traditional craftsmanship and the vibrant atmosphere of Colombo.",
  overview: "Begin with a scenic journey to Anuradhapura, Sri Lanka's first ancient capital, and explore its sacred Buddhist landmarks. Continue to Sigiriya to discover its iconic rock fortress, ancient gardens and nearby Pidurangala viewpoint. Visit Dambulla Cave Temple before travelling to Kandy, where the Temple of the Sacred Tooth Relic, Royal Botanical Gardens and traditional Kandyan dance reveal the island's rich cultural identity. Continue to Colombo for gem heritage, traditional craftsmanship, lively markets and city landmarks before your departure.",
  bestFor: "Culture and history enthusiasts, couples, families and travellers interested in ancient kingdoms, Buddhist heritage and traditional Sri Lankan life.",
  groupSize: "Private tour with a dedicated chauffeur-guide.",
  physicalLevel: "Moderate — climbing Sigiriya Rock Fortress and walking around archaeological and temple sites require reasonable mobility. Some sites include stairs and uneven surfaces.",
  destinationsCovered: "Airport → Pinnawala → Anuradhapura → Sigiriya → Dambulla → Kandy → Colombo → Airport",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Anuradhapura",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB), where you will receive a traditional flower-garland welcome and assistance with your luggage.",
        "Journey to Anuradhapura: Begin your private journey through Sri Lanka's scenic countryside towards the island's ancient northern capital.",
        "Pinnawala Elephant Orphanage: En route, learn about Asian elephant care and conservation and observe the elephants during their daily activities, depending on your arrival time.",
        "Scenic Drive: Continue towards Anuradhapura, enjoying the changing landscapes and rural scenery along the way.",
        "Tissawewa Reservoir: Arrive in Anuradhapura and enjoy the peaceful surroundings and sunset views over the historic reservoir, time permitting.",
        "Hotel Check-in: Settle into your hotel and relax after the journey."
      ],
      overnight: "Hotel near Anuradhapura.",
      imageUrl: "/documents/images/tour/anuradhapura05.jpg"
    },
    {
      day: 2,
      title: "Anuradhapura's Sacred City",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's cultural exploration.",
        "UNESCO World Heritage Site: Explore the ancient city of Anuradhapura, Sri Lanka's first ancient capital and one of the island's most important archaeological sites.",
        "Sri Maha Bodhi: Visit the sacred Bodhi tree, traditionally associated with the tree under which the Buddha attained enlightenment.",
        "Atamasthana: Discover Anuradhapura's eight sacred places, including revered stupas, ancient monasteries and important Buddhist sites.",
        "Ruwanwelisaya Stupa: Admire one of Sri Lanka's most iconic stupas and an important centre of Buddhist devotion.",
        "Mihintale & Transfer to Sigiriya: If time permits, visit Mihintale, traditionally associated with the introduction of Buddhism to Sri Lanka, before continuing to Sigiriya or Habarana for hotel check-in."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/anuradhapura06.jpg"
    },
    {
      day: 3,
      title: "Sigiriya Rock Fortress",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before setting out to explore Sigiriya.",
        "UNESCO World Heritage Site: Discover the ancient city of Sigiriya, renowned for its remarkable archaeological remains and historic royal citadel.",
        "Sigiriya Rock Climb: Ascend the iconic fortress with a specialist guide and explore the remains of King Kashyapa's ancient royal complex.",
        "Ancient Frescoes & Gardens: Discover the celebrated frescoes, landscaped gardens and ingenious features of this historic site.",
        "Pidurangala Rock: Visit the nearby rock for a contrasting panoramic view of Sigiriya and the surrounding landscape.",
        "Village Safari & Traditional Lunch: Enjoy a complimentary village safari and a traditional Sri Lankan meal before returning to your hotel for free time."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiriya07.jpg"
    },
    {
      day: 4,
      title: "Dambulla Cave Temple & Journey to Kandy",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and check out before departing for Dambulla.",
        "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, celebrated for its ancient Buddhist art and sacred atmosphere.",
        "Historic Cave Complex: Discover the cave shrines, Buddhist statues and intricate murals depicting religious stories and traditions.",
        "Buddhist Heritage: Learn about the temple's long history as an important centre of worship and pilgrimage.",
        "Traditional Craft Village: Experience local craftsmanship and discover traditional Sri Lankan arts, including batik-making and wood carving.",
        "Scenic Drive to Kandy: Travel through the island's cultural heartland towards the historic hill capital, check in to your hotel and enjoy the evening at leisure."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/dambulla07.jpg"
    },
    {
      day: 5,
      title: "Kandy's Living Heritage",
      points: [
        "Breakfast: Begin the day with breakfast at your hotel in Kandy.",
        "Temple of the Sacred Tooth Relic: Visit this revered Buddhist temple, a UNESCO World Heritage Site that houses Sri Lanka's sacred Tooth Relic.",
        "Sacred Rituals: Learn about the temple's centuries-old traditions and its significance in Sri Lankan Buddhist culture.",
        "Royal Botanical Gardens: Explore the gardens at Peradeniya, known for their diverse tropical plants, towering trees and landscaped grounds.",
        "Kandyan Heritage: Discover the cultural traditions and royal history associated with the former capital of the Kandyan Kingdom.",
        "Traditional Kandyan Dance: Enjoy a lively cultural performance featuring traditional dance, rhythmic drumming and colourful costumes before returning to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy07.jpg"
    },
    {
      day: 6,
      title: "Kandy to Colombo",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for the journey to Colombo.",
        "Gem Museum: Discover Sri Lanka's renowned gem heritage and learn about the island's precious and semi-precious stones.",
        "Traditional Lacquerware Workshop: Observe traditional craftsmanship and learn about decorative techniques used to create Sri Lankan lacquerware.",
        "Journey to Colombo: Travel towards the commercial capital, passing through changing landscapes along the way.",
        "Pettah Bazaar: Explore the lively Pettah district, known for its bustling streets, traditional shops, markets and local atmosphere.",
        "Colombo City Experience & Farewell Dinner: Enjoy a glimpse of Colombo's vibrant blend of culture and commerce before a farewell dinner and overnight stay."
      ],
      overnight: "Hotel in Colombo.",
      imageUrl: "/documents/images/tour/colombo07.jpg"
    },
    {
      day: 7,
      title: "Colombo & Departure",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for your departure, subject to your flight schedule.",
        "Gangaramaya Temple: Visit one of Colombo's best-known Buddhist temples, recognised for its distinctive architecture and collection of religious artefacts.",
        "Colombo National Museum: Explore Sri Lanka's largest museum and discover exhibits highlighting the island's history, art and cultural heritage, subject to opening hours.",
        "City Highlights: Enjoy a final glimpse of Colombo's urban scenery and cultural landmarks, depending on available time.",
        "Free Time & Airport Transfer: Enjoy some leisure time before travelling to Bandaranaike International Airport (CMB) with your chauffeur-guide.",
        "Departure: Bid farewell to Sri Lanka with lasting memories of its sacred cities, ancient monuments and living traditions."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo08.jpg"
    }
  ],
  hotelRecommendation: "Comfortable hotels near Anuradhapura, in Sigiriya or Habarana, in Kandy and in Colombo, selected according to your preferred comfort level and travel dates.",
  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for airport transfers, sightseeing and intercity travel.",
  meals: "Daily breakfast. A traditional Sri Lankan lunch is planned during the village safari on Day 3. Other lunches and dinners are at your own choice unless arranged in advance.",
  included: [
    "6 nights' accommodation",
    "Daily breakfast",
    "Traditional Sri Lankan lunch during the village safari on Day 3, subject to confirmation",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome with traditional flower garlands",
    "Transfers and visits listed in the itinerary, subject to opening hours and operating schedules"
  ],
  excluded: [
    "International flights",
    "Sri Lankan visa fees",
    "Lunches and dinners unless specified",
    "Entrance fees and specialist guide charges unless specified in the confirmed quotation",
    "Village safari charges unless confirmed as included",
    "Gem museum or workshop charges, if applicable",
    "Personal expenses and tips",
    "Travel insurance"
  ],
  optionalExperiences: [
    "Specialist guiding at Sigiriya Rock Fortress",
    "Additional time exploring Anuradhapura's sacred sites",
    "Additional cultural experiences, subject to availability",
    "Room upgrades, subject to availability"
  ],
  tourFaqs: [
    {
      q: "Which UNESCO World Heritage Sites are included in this tour?",
      a: "The itinerary includes the Sacred City of Anuradhapura, the Ancient City of Sigiriya, the Dambulla Cave Temple complex and the Sacred City of Kandy, represented by the Temple of the Sacred Tooth Relic."
    },
    {
      q: "Will we visit Mihintale?",
      a: "Mihintale is planned as a time-permitting visit on Day 2. Whether it can be included depends on the time available before the transfer to Sigiriya or Habarana."
    },
    {
      q: "Is the Sigiriya Rock climb included?",
      a: "The itinerary includes a climb of Sigiriya Rock Fortress with a specialist guide. Entrance tickets and guide charges should be confirmed in the final quotation."
    },
    {
      q: "Is the village safari included?",
      a: "A complimentary village safari and traditional Sri Lankan lunch are listed for Day 3. The final quotation should confirm the exact inclusions."
    },
    {
      q: "Can all the Colombo visits be completed on the departure day?",
      a: "The Gangaramaya Temple, Colombo National Museum and city highlights are subject to your flight time and museum opening hours. The schedule may need to be shortened to allow sufficient time for airport check-in."
    },
    {
      q: "How many nights are included?",
      a: "The itinerary includes six nights: one near Anuradhapura, two in Sigiriya or Habarana, two in Kandy and one in Colombo."
    }
  ]
},

  
{
  slug: "sri-lanka-ancient-kingdoms-unesco-heritage-8-day-tour",
  title: "Sri Lanka Ancient Kingdoms & UNESCO Heritage",
  category: "Cultural Heritage Tours",
  duration: "8 Days / 7 Nights",
  highlights: [
    "Pinnawala Elephant Orphanage",
    "Anuradhapura Sacred City — UNESCO World Heritage Site",
    "Sri Maha Bodhi & Atamasthana",
    "Mihintale — Sacred Buddhist Heritage",
    "Polonnaruwa Ancient City — UNESCO World Heritage Site",
    "Cycling Through Ancient Polonnaruwa",
    "Royal Palace of King Parakramabahu",
    "Polonnaruwa Quadrangle, Vatadage & Hatadage",
    "Gal Vihara Rock-Cut Buddha Statues",
    "Rankoth Vehera & Parakrama Samudra",
    "Sigiriya Rock Fortress — UNESCO World Heritage Site",
    "Pidurangala Rock Viewpoint",
    "Traditional Village Safari & Sri Lankan Lunch",
    "Dambulla Cave Temple — UNESCO World Heritage Site",
    "Temple of the Sacred Tooth Relic — UNESCO World Heritage Site",
    "Royal Botanical Gardens, Peradeniya",
    "Traditional Kandyan Cultural Dance",
    "Pettah Bazaar & Colombo Heritage"
  ],
  price: "From $1,099 pp",
  blurb: "Journey through Sri Lanka's ancient kingdoms and UNESCO World Heritage Sites, discovering sacred Buddhist cities, remarkable rock-cut sculptures, royal citadels and the living traditions of Kandy and Colombo.",
  motif: "heritage",
  imageUrl: "/documents/images/tour/Ruwanwelisaya Stupa.jpg",
  heroTitle: "Sri Lanka Ancient Kingdoms & UNESCO Heritage — 8 Days",
  intro: "Discover the remarkable legacy of Sri Lanka's ancient kingdoms on a private eight-day cultural journey through Anuradhapura, Polonnaruwa, Sigiriya, Dambulla, Kandy and Colombo.",
  overview: "Begin in Anuradhapura, Sri Lanka's first ancient capital, and explore its sacred Buddhist heritage. Continue to Polonnaruwa, a UNESCO World Heritage Site, where ancient royal ruins, sacred monuments and magnificent Buddha sculptures reveal the achievements of a historic kingdom. Discover Sigiriya Rock Fortress, enjoy a traditional village safari and visit Dambulla Cave Temple. In Kandy, explore the Temple of the Sacred Tooth Relic and Royal Botanical Gardens before continuing to Colombo for traditional craftsmanship, bustling markets and cultural landmarks.",
  bestFor: "History enthusiasts, cultural travellers, couples, families and visitors interested in ancient kingdoms, Buddhist heritage, archaeology and UNESCO World Heritage Sites.",
  groupSize: "Private tour with a dedicated chauffeur-guide. Cycling in Polonnaruwa and specialist guiding at archaeological sites can be arranged according to the confirmed itinerary.",
  physicalLevel: "Moderate — Sigiriya involves a substantial stair climb, while cycling and walking around archaeological sites require reasonable mobility. Some temple and heritage areas have uneven surfaces.",
  destinationsCovered: "Airport → Pinnawala → Anuradhapura → Polonnaruwa → Sigiriya → Dambulla → Kandy → Colombo → Airport",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Anuradhapura",
      points: [
        "Airport Welcome: Meet your chauffeur-guide at Bandaranaike International Airport (CMB) and receive a traditional flower-garland welcome before beginning your journey.",
        "Journey to Anuradhapura: Travel through Sri Lanka's scenic countryside towards the island's first ancient capital.",
        "Pinnawala Elephant Orphanage: En route, learn about Asian elephant care and conservation and observe the elephants during their daily activities, depending on your arrival time.",
        "Scenic Countryside Drive: Continue towards Anuradhapura, enjoying views of rural villages and the changing landscapes along the way.",
        "Tissawewa Reservoir: Arrive in Anuradhapura and enjoy the peaceful atmosphere and sunset views over the historic reservoir, time permitting.",
        "Hotel Check-in: Settle into your hotel near Anuradhapura and relax after the journey."
      ],
      overnight: "Hotel near Anuradhapura.",
      imageUrl: "/documents/images/tour/anuradhapura04.jpg"
    },
    {
      day: 2,
      title: "Anuradhapura's Sacred City",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before exploring Anuradhapura's ancient heritage.",
        "UNESCO World Heritage Site: Discover the Sacred City of Anuradhapura, Sri Lanka's first ancient capital and one of its most important archaeological and religious centres.",
        "Sri Maha Bodhi: Visit the sacred Bodhi tree, revered as one of the island's most important Buddhist pilgrimage sites.",
        "Atamasthana: Explore Anuradhapura's eight sacred places, discovering important stupas, monasteries and Buddhist landmarks.",
        "Mihintale: If time permits, visit the sacred site traditionally associated with Arahat Mahinda Thera's meeting with King Devanampiyatissa and the introduction of Buddhism to Sri Lanka.",
        "Journey to Polonnaruwa: Continue towards Polonnaruwa through the Cultural Triangle and check in to your hotel near the ancient city."
      ],
      overnight: "Hotel near Polonnaruwa.",
      imageUrl: "/documents/images/tour/anuradhapura07.jpg"
    },
    {
      day: 3,
      title: "Polonnaruwa Ancient City",
      points: [
        "Breakfast: Enjoy breakfast before setting out to explore the ancient royal capital of Polonnaruwa.",
        "UNESCO World Heritage Site: Discover the Ancient City of Polonnaruwa, a UNESCO-listed archaeological site that preserves the remains of a historic Sri Lankan kingdom.",
        "Cycling Through Ancient Polonnaruwa: Explore the historic city by bicycle, travelling among its ancient ruins and archaeological monuments.",
        "Royal Palace & Quadrangle: Visit the remains of King Parakramabahu's Royal Palace and explore the sacred Quadrangle, including the Vatadage and Hatadage.",
        "Gal Vihara & Rankoth Vehera: Admire the magnificent rock-cut Buddha statues at Gal Vihara and discover the impressive Rankoth Vehera stupa.",
        "Parakrama Samudra & Sigiriya Transfer: Enjoy scenic views of Parakrama Samudra before driving through the Cultural Triangle to your hotel in Sigiriya or Habarana."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/polonnaruwa02.jpg"
    },
    {
      day: 4,
      title: "Sigiriya Rock Fortress",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning your exploration of Sigiriya.",
        "UNESCO World Heritage Site: Discover the Ancient City of Sigiriya, renowned for its extraordinary archaeological remains and historic royal citadel.",
        "Sigiriya Rock Climb: Ascend the iconic fortress with a specialist guide and explore the remains of King Kashyapa's ancient royal complex.",
        "Ancient Frescoes & Gardens: Discover the celebrated frescoes, landscaped gardens and ingenious features that make Sigiriya one of Sri Lanka's most remarkable historic sites.",
        "Pidurangala Rock: Visit nearby Pidurangala Rock for a contrasting panoramic view of Sigiriya and the surrounding landscape.",
        "Village Safari & Traditional Lunch: Enjoy a complimentary village safari and a traditional Sri Lankan lunch before returning to your hotel for free time."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiriya08.jpg"
    },
    {
      day: 5,
      title: "Dambulla Cave Temple & Journey to Kandy",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for the journey to Kandy.",
        "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, celebrated for its ancient Buddhist cave shrines, statues and religious artwork.",
        "Historic Cave Complex: Discover the intricate murals and Buddhist sculptures that reflect centuries of religious devotion and artistic tradition.",
        "Buddhist Heritage: Learn about Dambulla's enduring importance as a place of worship and pilgrimage.",
        "Traditional Craft Village: Visit a traditional craft village to observe local craftsmanship, including batik-making and wood carving.",
        "Drive to Kandy: Continue through Sri Lanka's cultural heartland, arrive in Kandy and check in to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/dambulla06.jpg"
    },
    {
      day: 6,
      title: "Kandy's Living Heritage",
      points: [
        "Breakfast: Begin the day with breakfast at your hotel in Kandy.",
        "Temple of the Sacred Tooth Relic: Visit this revered Buddhist temple, part of the UNESCO-listed Sacred City of Kandy and home to Sri Lanka's sacred Tooth Relic.",
        "Sacred Rituals & Traditions: Learn about the temple's centuries-old custodial rituals and its importance in Sri Lankan Buddhist culture.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, known for their diverse tropical plants, towering trees and landscaped grounds.",
        "Kandyan Heritage: Discover the royal history and cultural traditions associated with the former capital of the Kandyan Kingdom.",
        "Traditional Kandyan Dance: Enjoy a cultural performance featuring traditional dance, rhythmic drumming and colourful costumes before returning to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy09.jpg"
    },
    {
      day: 7,
      title: "Kandy to Colombo",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel before departing Kandy for Colombo.",
        "Gem Museum: Discover Sri Lanka's renowned gem heritage and learn about the island's precious and semi-precious stones.",
        "Traditional Lacquerware Workshop: Observe traditional craftsmanship and learn about the decorative techniques used to create Sri Lankan lacquerware.",
        "Journey to Colombo: Travel towards the commercial capital, enjoying the changing landscapes along the way.",
        "Pettah Bazaar: Explore the lively Pettah district, known for its bustling streets, traditional shops, markets and local atmosphere.",
        "Colombo Evening & Farewell Dinner: Enjoy time in the city before celebrating your Sri Lankan journey with a farewell dinner."
      ],
      overnight: "Hotel in Colombo.",
      imageUrl: "/documents/images/tour/colombo20.jpg"
    },
    {
      day: 8,
      title: "Colombo & Departure",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for departure, depending on your flight schedule.",
        "Gangaramaya Temple: Visit one of Colombo's best-known Buddhist temples, recognised for its distinctive architecture and collection of religious artefacts.",
        "Colombo National Museum: Explore Sri Lanka's largest museum and discover exhibits highlighting the island's history, art and cultural heritage, subject to opening hours.",
        "Final Colombo Exploration: Enjoy a final glimpse of the city's cultural landmarks and urban atmosphere, depending on available time.",
        "Airport Transfer: Travel to Bandaranaike International Airport (CMB) with your chauffeur-guide, allowing sufficient time for check-in.",
        "Departure: Bid farewell to Sri Lanka with lasting memories of its ancient kingdoms, sacred cities and living cultural traditions."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo21.jpg"
    }
  ],
  hotelRecommendation: "Comfortable hotels near Anuradhapura, in Sigiriya or Habarana, in Kandy and in Colombo, selected according to your preferred comfort level and travel dates.",
  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for airport transfers, sightseeing and intercity travel. Bicycle hire in Polonnaruwa can be arranged according to the confirmed package.",
  meals: "Daily breakfast. A traditional Sri Lankan lunch is planned during the village safari on Day 4. Other lunches and dinners are at your own choice unless arranged in advance.",
  included: [
    "7 nights' accommodation",
    "Daily breakfast",
    "Traditional Sri Lankan lunch during the village safari on Day 4, subject to confirmation",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome with traditional flower garlands",
    "Transfers and visits listed in the itinerary, subject to opening hours and operating schedules"
  ],
  excluded: [
    "International flights",
    "Sri Lankan visa fees",
    "Lunches and dinners unless specified",
    "UNESCO World Heritage Site and other attraction entrance fees unless specified in the confirmed quotation",
    "Specialist guides at archaeological sites unless specified",
    "Bicycle hire and related charges in Polonnaruwa unless confirmed as included",
    "Village safari charges unless confirmed as included",
    "Personal expenses and tips",
    "Travel insurance"
  ],
  optionalExperiences: [
    "Specialist guiding at Sigiriya Rock Fortress",
    "Bicycle hire for exploring Polonnaruwa",
    "Additional time exploring Anuradhapura's sacred monuments",
    "Room upgrades, subject to availability"
  ],
  tourFaqs: [
    {
      q: "Which UNESCO World Heritage Sites are included in this tour?",
      a: "The itinerary includes the Sacred City of Anuradhapura, the Ancient City of Polonnaruwa, the Ancient City of Sigiriya, the Dambulla Cave Temple complex and the Sacred City of Kandy."
    },
    {
      q: "Can we cycle through Polonnaruwa's ancient city?",
      a: "Yes. Day 3 includes cycling through the archaeological area. Bicycle hire should be confirmed as included or arranged separately in the final quotation."
    },
    {
      q: "Is Mihintale guaranteed on Day 2?",
      a: "Mihintale is a time-permitting visit. Its inclusion depends on the time available for exploring Anuradhapura and travelling to Polonnaruwa."
    },
    {
      q: "Is the Sigiriya Rock climb included?",
      a: "The itinerary includes a climb of Sigiriya Rock Fortress with a specialist guide. Entrance tickets and guide charges should be confirmed in the final quotation."
    },
    {
      q: "Is the village safari and lunch included?",
      a: "A complimentary village safari and traditional Sri Lankan lunch are listed for Day 4. The final quotation should confirm the exact inclusions."
    },
    {
      q: "Can we visit the Colombo National Museum on departure day?",
      a: "The visit depends on your flight time and the museum's opening hours. The schedule may need to be shortened to allow sufficient time for airport check-in."
    }
  ]
},

{
  slug: "sri-lanka-ancient-kingdoms-galle-heritage-10-day-tour",
  title: "Ancient Kingdoms & Galle Heritage Journey",
  category: "Cultural Heritage Tours",
  duration: "10 Days / 9 Nights",
  highlights: [
    "Sri Maha Bodhi — Anuradhapura Sacred City",
    "Anuradhapura's Ancient Buddhist Stupas",
    "Jetavanaramaya & Abhayagiri Stupas",
    "Isurumuniya Rock Temple",
    "Polonnaruwa Ancient City — UNESCO World Heritage Site",
    "Cycling Through Medieval Polonnaruwa",
    "Gal Vihara Rock-Cut Buddha Sculptures",
    "Sigiriya Rock Fortress — UNESCO World Heritage Site",
    "Pidurangala Rock Viewpoint",
    "Dambulla Cave Temple — UNESCO World Heritage Site",
    "Temple of the Sacred Tooth Relic — UNESCO World Heritage Site",
    "Royal Botanical Gardens, Peradeniya",
    "Traditional Kandyan Cultural Dance",
    "Galle Fort — UNESCO World Heritage Site",
    "Dutch Reformed Church & Maritime Museum",
    "Pettah Bazaar, Colombo",
    "Gangaramaya Temple & Colombo National Museum"
  ],
  price: "From $1,199 pp",
  blurb: "Explore Sri Lanka's ancient kingdoms, sacred Buddhist landmarks and colonial coastal heritage on a ten-day private journey from Anuradhapura and Sigiriya to Kandy, Galle Fort and Colombo.",
  motif: "heritage",
  imageUrl: "/documents/images/tour/Sri_Lankan_Cultural_Temple.jpg",
  heroTitle: "Ancient Kingdoms & Galle Heritage Journey — 10 Days",
  intro: "Travel through Sri Lanka's extraordinary cultural landscape, from the sacred cities of the ancient kings to the colonial ramparts and historic streets of Galle Fort.",
  overview: "Begin in Anuradhapura, exploring its sacred Bodhi tree and ancient Buddhist monuments. Continue to Polonnaruwa to cycle among the ruins of the medieval capital and admire the celebrated sculptures of Gal Vihara. Discover Sigiriya Rock Fortress and Dambulla Cave Temple before travelling to Kandy, home to the Temple of the Sacred Tooth Relic and Royal Botanical Gardens. Continue south to Galle, where Portuguese, Dutch and British-era heritage lives on within the historic fort walls. Finish in Colombo with visits to Pettah Bazaar, Gangaramaya Temple and the National Museum.",
  bestFor: "History enthusiasts, cultural travellers, couples and private travellers interested in ancient kingdoms, Buddhist heritage and colonial architecture.",
  groupSize: "Private tour with a dedicated chauffeur-guide. Specialist guiding at archaeological and heritage sites can be arranged according to the confirmed package.",
  physicalLevel: "Moderate — climbing Sigiriya Rock Fortress, cycling around Polonnaruwa and walking through historic sites involve stairs, uneven surfaces and outdoor activity.",
  destinationsCovered: "Airport → Anuradhapura → Polonnaruwa → Sigiriya → Dambulla → Kandy → Galle → Colombo → Airport",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Anuradhapura",
      points: [
        "Airport Welcome: Arrive at Bandaranaike International Airport (CMB), where your chauffeur-guide will welcome you and assist with your luggage.",
        "Journey to Anuradhapura: Begin your private journey through Sri Lanka's countryside towards the island's ancient capital.",
        "Scenic Countryside Drive: Enjoy views of rural villages and changing landscapes along the way.",
        "Sri Maha Bodhi: Visit the sacred Bodhi tree in Anuradhapura, one of Sri Lanka's most revered Buddhist pilgrimage sites.",
        "Tissawewa Reservoir: Enjoy the peaceful atmosphere and sunset views over the historic reservoir, time permitting.",
        "Hotel Check-in: Settle into your hotel near Anuradhapura and relax after the journey."
      ],
      overnight: "Hotel near Anuradhapura.",
      imageUrl: "/documents/images/tour/anuradhapura001.jpg"
    },
    {
      day: 2,
      title: "Anuradhapura's Sacred City",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before exploring Anuradhapura's ancient heritage.",
        "Jetavanaramaya Stupa: Visit one of the great stupas of ancient Anuradhapura and learn about its historical and religious significance.",
        "Abhayagiri Stupa: Explore another major monastic centre of the ancient capital, associated with centuries of Buddhist scholarship and worship.",
        "Isurumuniya Rock Temple: Discover this historic rock temple, known for its distinctive setting and celebrated stone carvings.",
        "Ancient City Exploration: Enjoy time discovering the sacred atmosphere and archaeological heritage of Anuradhapura.",
        "Journey to Polonnaruwa: Travel towards Polonnaruwa and check in to your hotel near the ancient city."
      ],
      overnight: "Hotel near Polonnaruwa.",
      imageUrl: "/documents/images/tour/anuradhapura002.jpg"
    },
    {
      day: 3,
      title: "Polonnaruwa Ancient City",
      points: [
        "Breakfast: Enjoy breakfast before setting out to explore the medieval capital of Polonnaruwa.",
        "UNESCO World Heritage Site: Discover the Ancient City of Polonnaruwa, recognised for its remarkable archaeological remains and historic urban landscape.",
        "Cycling Among the Ruins: Explore the ancient city by bicycle, travelling among historic buildings, monuments and archaeological remains.",
        "Royal Heritage: Discover the remains of Polonnaruwa's royal capital and learn about the kingdom's historic significance.",
        "Gal Vihara: Admire the remarkable rock-cut Buddha sculptures, celebrated for their craftsmanship and serene expressions.",
        "Journey to Sigiriya: Continue through Sri Lanka's Cultural Triangle to your hotel in Sigiriya or Habarana."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/polonnaruwa001.jpg"
    },
    {
      day: 4,
      title: "Sigiriya Rock Fortress",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's exploration.",
        "UNESCO World Heritage Site: Visit the Ancient City of Sigiriya, famous for its dramatic rock formation and extraordinary archaeological remains.",
        "Sigiriya Rock Climb: Ascend the iconic fortress with a specialist guide and discover the remains of King Kashyapa's ancient royal citadel.",
        "Frescoes & Royal Gardens: Explore the celebrated frescoes, landscaped water gardens and historic features of the fortress.",
        "Pidurangala Rock: Visit nearby Pidurangala Rock for a contrasting panoramic view of Sigiriya and its surrounding landscape.",
        "Hotel Leisure Time: Return to your hotel and enjoy free time to relax after the day's exploration."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiriya001.jpg"
    },
    {
      day: 5,
      title: "Dambulla Cave Temple & Journey to Kandy",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel before departing for Dambulla.",
        "Dambulla Cave Temple: Explore this UNESCO World Heritage Site, renowned for its historic Buddhist cave shrines, statues and murals.",
        "Sacred Cave Complex: Discover the religious artwork and learn about the temple's long history as a centre of Buddhist worship.",
        "Traditional Craft Village: Visit a traditional craft village to discover local craftsmanship and Sri Lankan artistic traditions.",
        "Journey to Kandy: Continue through the cultural heartland towards the historic hill capital.",
        "Hotel Check-in: Arrive in Kandy, settle into your hotel and enjoy the evening at leisure."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/dambulla001.jpg"
    },
    {
      day: 6,
      title: "Kandy's Living Heritage",
      points: [
        "Breakfast: Begin the day with breakfast at your hotel in Kandy.",
        "Temple of the Sacred Tooth Relic: Visit this revered Buddhist temple, part of the UNESCO-listed Sacred City of Kandy and home to Sri Lanka's sacred Tooth Relic.",
        "Sacred Traditions: Learn about the temple's historic custodial rituals and its importance in Sri Lankan Buddhist culture.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, known for their tropical plant collections, towering trees and landscaped grounds.",
        "Kandyan Heritage: Discover the royal history and cultural traditions associated with the former Kandyan Kingdom.",
        "Traditional Kandyan Dance: Enjoy a cultural performance featuring traditional dance, rhythmic drumming and colourful costumes before returning to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy001.jpg"
    },
    {
      day: 7,
      title: "Kandy to Galle",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for the journey south.",
        "Journey to the Southern Coast: Travel by private vehicle towards Galle, passing through Sri Lanka's changing landscapes.",
        "Arrival in Galle: Reach the historic coastal city and check in to your boutique hotel within Galle Fort.",
        "Galle Fort Ramparts: Walk along the historic fortifications and enjoy the ocean views as the afternoon moves towards sunset.",
        "Colonial Heritage: Discover the atmosphere of Galle's historic streets, shaped by centuries of maritime trade and colonial influence.",
        "Dinner Within the Fort: Enjoy dinner within the historic fort walls before returning to your boutique hotel."
      ],
      overnight: "Boutique hotel within Galle Fort.",
      imageUrl: "/documents/images/tour/galle001.jpg"
    },
    {
      day: 8,
      title: "Galle Fort's Colonial Heritage",
      points: [
        "Breakfast: Enjoy breakfast at your boutique hotel within Galle Fort.",
        "UNESCO World Heritage Site: Explore Galle Fort, a historic fortified town recognised for its outstanding blend of European architectural influences and South Asian traditions.",
        "Guided Fort Walk: Walk through the historic streets and discover Portuguese, Dutch and British-era architecture.",
        "Dutch Reformed Church: Visit this historic church and learn about its place within Galle's colonial heritage.",
        "Maritime Museum: Explore the Maritime Museum to learn about the region's seafaring history, subject to opening hours.",
        "Free Evening in Galle Fort: Enjoy time at leisure within the fort, discovering its cafés, boutiques and historic atmosphere."
      ],
      overnight: "Boutique hotel within Galle Fort.",
      imageUrl: "/documents/images/tour/galle002.jpg"
    },
    {
      day: 9,
      title: "Galle to Colombo",
      points: [
        "Breakfast: Enjoy a leisurely breakfast at your hotel in Galle.",
        "Free Time in Galle: Enjoy a relaxed morning within the historic fort, depending on your preferred pace.",
        "Journey to Colombo: Depart Galle and travel towards Sri Lanka's commercial capital.",
        "Pettah Bazaar: Explore the lively market district, known for its busy streets, traditional shops and local atmosphere.",
        "Colombo City Experience: Enjoy a glimpse of Colombo's blend of heritage, commerce and everyday city life.",
        "Farewell Dinner: Celebrate your journey through Sri Lanka's ancient kingdoms and coastal heritage with a farewell dinner in Colombo."
      ],
      overnight: "Hotel in Colombo.",
      imageUrl: "/documents/images/tour/colombo001.jpg"
    },
    {
      day: 10,
      title: "Colombo & Departure",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for departure, depending on your flight schedule.",
        "Gangaramaya Temple: Visit one of Colombo's best-known Buddhist temples, recognised for its distinctive architecture and collection of religious artefacts.",
        "Colombo National Museum: Explore Sri Lanka's largest museum and discover exhibits highlighting the island's history, art and cultural heritage, subject to opening hours.",
        "Final Colombo Exploration: Enjoy a final glimpse of the city's cultural landmarks and urban atmosphere, depending on available time.",
        "Airport Transfer: Travel to Bandaranaike International Airport (CMB) with your chauffeur-guide, allowing sufficient time for check-in.",
        "Departure: Bid farewell to Sri Lanka with lasting memories of its ancient kingdoms, sacred landmarks and colonial coastal heritage."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo002.jpg"
    }
  ],
  hotelRecommendation: "Comfortable hotels near Anuradhapura, in Polonnaruwa, in Sigiriya or Habarana, in Kandy, a boutique hotel within Galle Fort and a comfortable hotel in Colombo.",
  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for airport transfers, sightseeing and intercity journeys. Bicycle hire in Polonnaruwa can be arranged according to the confirmed package.",
  meals: "Daily breakfast. Lunches and dinners are at your own choice unless specified in the confirmed quotation. Dinner within Galle Fort on Day 7 and a farewell dinner in Colombo on Day 9 are planned in the itinerary.",
  included: [
    "9 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Transfers and visits listed in the itinerary, subject to opening hours and operating schedules"
  ],
  excluded: [
    "International flights",
    "Sri Lankan visa fees",
    "Lunches and dinners unless specified in the confirmed quotation",
    "Entrance fees to heritage sites and museums unless specified",
    "Specialist guide charges at Sigiriya and other heritage sites unless specified",
    "Bicycle hire and related charges in Polonnaruwa unless confirmed as included",
    "Personal expenses and tips",
    "Travel insurance"
  ],
  optionalExperiences: [
    "Specialist guiding at Sigiriya Rock Fortress",
    "Bicycle hire for exploring Polonnaruwa",
    "Additional heritage experiences, subject to availability",
    "Room upgrades, subject to availability"
  ],
  tourFaqs: [
    {
      q: "Which UNESCO World Heritage Sites are included in this tour?",
      a: "The itinerary includes the Ancient City of Polonnaruwa, the Ancient City of Sigiriya, the Dambulla Cave Temple complex, the Sacred City of Kandy and the Old Town of Galle and its Fortifications."
    },
    {
      q: "Is Anuradhapura included in the cultural itinerary?",
      a: "Yes. The first two days focus on Anuradhapura's sacred Buddhist heritage, including Sri Maha Bodhi, Jetavanaramaya, Abhayagiri and Isurumuniya."
    },
    {
      q: "Can we cycle through Polonnaruwa?",
      a: "Yes. Day 3 includes cycling among the ruins of the medieval capital. Bicycle hire should be confirmed in the final quotation."
    },
    {
      q: "Is climbing Sigiriya Rock Fortress physically demanding?",
      a: "The climb includes many stairs and walking, so a moderate level of fitness is helpful. Comfortable footwear and sufficient time are recommended."
    },
    {
      q: "How much time is available in Galle Fort?",
      a: "The itinerary includes a sunset walk on Day 7 and a guided heritage walk with visits to the Dutch Reformed Church and Maritime Museum on Day 8."
    },
    {
      q: "Can the Colombo visits be completed on departure day?",
      a: "Gangaramaya Temple and the National Museum are planned for Day 10, but the visits depend on your flight time and museum opening hours. The schedule should allow sufficient time for airport check-in."
    }
  ]
},

 
{
  slug: "sri-lanka-sacred-kingdoms-hidden-heritage-12-day-tour",
  title: "Sacred Kingdoms & Hidden Heritage of Sri Lanka",
  category: "Cultural Heritage Tours",
  duration: "12 Days / 11 Nights",
  highlights: [
    "Sri Maha Bodhi — Anuradhapura",
    "Anuradhapura Sacred City — UNESCO World Heritage Site",
    "Jetavanaramaya & Abhayagiri Stupas",
    "Isurumuniya Rock Temple",
    "Ritigala Forest Monastery Ruins",
    "Mihintale — Sacred Buddhist Heritage",
    "Polonnaruwa Ancient City — UNESCO World Heritage Site",
    "Cycling Through Medieval Polonnaruwa",
    "Gal Vihara Rock-Cut Buddha Sculptures",
    "Sigiriya Rock Fortress — UNESCO World Heritage Site",
    "Pidurangala Rock Viewpoint",
    "Dambulla Cave Temple — UNESCO World Heritage Site",
    "Temple of the Sacred Tooth Relic — UNESCO World Heritage Site",
    "Royal Botanical Gardens, Peradeniya",
    "Traditional Kandyan Cultural Dance",
    "Galle Fort — UNESCO World Heritage Site",
    "Dutch Reformed Church & Maritime Museum",
    "Colombo National Museum",
    "Gangaramaya Temple & Pettah Bazaar"
  ],
  price: "From $1,399 pp",
  blurb: "Discover Sri Lanka's sacred ancient capitals, secluded forest monasteries, remarkable archaeological treasures and colonial coastal heritage on a twelve-day private cultural journey.",
  motif: "heritage",
  imageUrl: "/documents/images/tour/SriLankan_Heritage_Architecture.jpg",
  heroTitle: "Sacred Kingdoms & Hidden Heritage — 12 Days",
  intro: "Journey beyond the familiar highlights of Sri Lanka to discover sacred Buddhist cities, forest monasteries, ancient royal capitals and the atmospheric colonial streets of Galle.",
  overview: "Explore Anuradhapura's sacred monuments and ancient stupas, then venture to the forest monastery ruins of Ritigala and the revered pilgrimage site of Mihintale. Continue to Polonnaruwa, where cycling among medieval ruins reveals the legacy of a historic kingdom. Discover the UNESCO-listed Sigiriya Rock Fortress and Dambulla Cave Temple before travelling to Kandy for sacred rituals, botanical gardens and traditional dance. Finish along the southern coast in Galle Fort, exploring its layered colonial architecture before discovering Colombo's museums, temples, markets and historic districts.",
  bestFor: "History enthusiasts, cultural travellers, archaeology lovers, photographers and private travellers seeking Sri Lanka's ancient kingdoms and lesser-visited heritage sites.",
  groupSize: "Private tour with a dedicated chauffeur-guide. Specialist guides and bicycle hire can be arranged according to the confirmed package.",
  physicalLevel: "Moderate — Sigiriya involves a substantial stair climb, while cycling, forest walks and archaeological sites require reasonable mobility. Ritigala may include uneven forest paths.",
  destinationsCovered: "Airport → Anuradhapura → Ritigala → Mihintale → Polonnaruwa → Sigiriya → Dambulla → Kandy → Galle → Colombo → Airport",
  itinerary: [
    {
      day: 1,
      title: "Arrival & Anuradhapura",
      points: [
        "Airport Welcome: Arrive at Bandaranaike International Airport (CMB), where your chauffeur-guide will welcome you and assist with your luggage.",
        "Journey to Anuradhapura: Begin your private journey through Sri Lanka's countryside towards the island's first ancient capital.",
        "Scenic Countryside Drive: Enjoy views of rural villages, cultivated land and changing landscapes along the way.",
        "Sri Maha Bodhi: Visit the sacred Bodhi tree in Anuradhapura, one of Sri Lanka's most revered Buddhist pilgrimage sites.",
        "Tissawewa Reservoir: Enjoy the peaceful atmosphere and sunset views over the historic reservoir, time permitting.",
        "Hotel Check-in: Settle into your hotel near Anuradhapura and relax after the journey."
      ],
      overnight: "Hotel near Anuradhapura.",
      imageUrl: "/documents/images/tour/anuradhapura003.jpg"
    },
    {
      day: 2,
      title: "Anuradhapura's Sacred City",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before exploring the ancient capital.",
        "UNESCO World Heritage Site: Discover the Sacred City of Anuradhapura, celebrated for its ancient urban remains and enduring Buddhist heritage.",
        "Jetavanaramaya Stupa: Visit this monumental stupa and learn about its importance in the religious and architectural history of ancient Sri Lanka.",
        "Abhayagiri Stupa: Explore another important ancient Buddhist monastic centre associated with centuries of religious scholarship and worship.",
        "Isurumuniya Rock Temple: Discover this historic rock temple, known for its distinctive setting and celebrated stone carvings.",
        "Reflective Evening: Return to your hotel and enjoy a peaceful evening after a day immersed in Anuradhapura's sacred heritage."
      ],
      overnight: "Hotel near Anuradhapura.",
      imageUrl: "/documents/images/tour/anuradhapura004.jpg"
    },
    {
      day: 3,
      title: "Anuradhapura's Outer Monasteries",
      points: [
        "Breakfast & Check-out: Enjoy breakfast and prepare for a day exploring Sri Lanka's quieter heritage sites.",
        "Journey to Ritigala: Travel towards the forested surroundings of Ritigala, known for its secluded archaeological remains.",
        "Ritigala Forest Monastery: Explore the ruins of this ancient monastic complex, set among woodland and natural surroundings.",
        "Forest Heritage Walk: Discover the surviving stone structures, pathways and monastic features while enjoying the tranquil forest atmosphere.",
        "Mihintale: Explore the sacred site traditionally associated with Arahat Mahinda Thera's meeting with King Devanampiyatissa and the introduction of Buddhism to Sri Lanka.",
        "Journey to Polonnaruwa: Continue towards Polonnaruwa and check in to your hotel near the ancient city."
      ],
      overnight: "Hotel near Polonnaruwa.",
      imageUrl: "/documents/images/tour/ritigala001.jpg"
    },
    {
      day: 4,
      title: "Polonnaruwa Ancient City",
      points: [
        "Breakfast: Enjoy breakfast before setting out to discover the medieval capital of Polonnaruwa.",
        "UNESCO World Heritage Site: Explore the Ancient City of Polonnaruwa, recognised for its exceptional archaeological remains and historic urban landscape.",
        "Cycling Among the Ruins: Cycle through the ancient city and discover historic buildings, religious monuments and remnants of the medieval kingdom.",
        "Royal Capital Heritage: Explore the remains of the ancient capital and learn about the kingdom's historic significance.",
        "Gal Vihara: Admire the remarkable rock-cut Buddha sculptures, celebrated for their craftsmanship and serene expressions.",
        "Journey to Sigiriya: Continue through Sri Lanka's Cultural Triangle to your hotel in Sigiriya or Habarana."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/polonnaruwa003.jpg"
    },
    {
      day: 5,
      title: "Sigiriya Rock Fortress",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before beginning the day's exploration.",
        "UNESCO World Heritage Site: Discover the Ancient City of Sigiriya, renowned for its dramatic rock formation and extraordinary archaeological remains.",
        "Sigiriya Rock Climb: Ascend the iconic fortress with a specialist guide and explore the remains of King Kashyapa's ancient royal citadel.",
        "Frescoes & Royal Gardens: Discover the celebrated frescoes, landscaped gardens and ingenious features of this remarkable historic site.",
        "Pidurangala Rock: Visit the nearby rock for a contrasting panoramic view of Sigiriya and the surrounding landscape.",
        "Hotel Leisure Time: Return to your hotel and enjoy free time to relax after the day's exploration."
      ],
      overnight: "Hotel in Sigiriya or Habarana.",
      imageUrl: "/documents/images/tour/sigiriya004.jpg"
    },
    {
      day: 6,
      title: "Dambulla Cave Temple & Journey to Kandy",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel before departing for Dambulla.",
        "UNESCO World Heritage Site: Explore the Dambulla Cave Temple complex, renowned for its historic Buddhist cave shrines, statues and murals.",
        "Sacred Cave Art: Discover the intricate paintings and sculptures that reflect centuries of Buddhist devotion and artistic tradition.",
        "Buddhist Heritage: Learn about Dambulla's enduring role as a place of worship and pilgrimage.",
        "Traditional Craft Village: Visit a traditional craft village to discover Sri Lankan craftsmanship and local artistic traditions.",
        "Journey to Kandy: Continue through the cultural heartland to Kandy, check in to your hotel and enjoy the evening at leisure."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/dambulla003.jpg"
    },
    {
      day: 7,
      title: "Kandy's Living Heritage",
      points: [
        "Breakfast: Begin the day with breakfast at your hotel in Kandy.",
        "Temple of the Sacred Tooth Relic: Visit this revered Buddhist temple, part of the UNESCO-listed Sacred City of Kandy and home to Sri Lanka's sacred Tooth Relic.",
        "Sacred Traditions: Learn about the temple's historic rituals and its importance in Sri Lankan Buddhist culture.",
        "Royal Botanical Gardens: Explore the Royal Botanical Gardens in Peradeniya, known for their tropical plant collections, towering trees and landscaped grounds.",
        "Kandyan Heritage: Discover the royal history and cultural traditions associated with the former Kandyan Kingdom.",
        "Traditional Kandyan Dance: Enjoy a cultural performance featuring traditional dance, rhythmic drumming and colourful costumes before returning to your hotel."
      ],
      overnight: "Hotel in Kandy.",
      imageUrl: "/documents/images/tour/kandy003.jpg"
    },
    {
      day: 8,
      title: "Kandy to Galle",
      points: [
        "Breakfast & Check-out: Enjoy breakfast at your hotel and prepare for the journey south.",
        "Journey to the Southern Coast: Travel by private vehicle towards Galle, enjoying the changing landscapes along the way.",
        "Arrival in Galle: Reach the historic coastal city and check in to your boutique hotel within Galle Fort.",
        "Galle Fort Ramparts: Walk along the historic fortifications and enjoy views of the Indian Ocean as the sun sets, time permitting.",
        "Colonial Atmosphere: Explore the surroundings of the historic fort and discover the atmosphere of its heritage streets.",
        "Dinner Within the Fort: Enjoy dinner within Galle's historic fort walls before returning to your boutique hotel."
      ],
      overnight: "Boutique hotel within Galle Fort.",
      imageUrl: "/documents/images/tour/galle002.jpg"
    },
    {
      day: 9,
      title: "Galle Fort's Colonial Heritage",
      points: [
        "Breakfast: Enjoy breakfast at your boutique hotel within Galle Fort.",
        "UNESCO World Heritage Site: Discover the Old Town of Galle and its Fortifications, recognised for its historic architecture and distinctive blend of European and South Asian influences.",
        "Guided Fort Walk: Explore the historic streets and learn about the Portuguese, Dutch and British influences that shaped the fort.",
        "Dutch Reformed Church: Visit this historic church and discover its place within Galle's colonial heritage.",
        "Maritime Museum: Explore the Maritime Museum to learn about the region's maritime history, subject to opening hours.",
        "Free Evening in the Fort: Enjoy time at leisure within Galle Fort, exploring its cafés, boutiques and atmospheric streets."
      ],
      overnight: "Boutique hotel within Galle Fort.",
      imageUrl: "/documents/images/tour/galle003.jpg"
    },
    {
      day: 10,
      title: "Galle to Colombo",
      points: [
        "Breakfast: Enjoy a leisurely breakfast at your hotel in Galle.",
        "Morning at Leisure: Take time to enjoy the historic fort and its relaxed coastal atmosphere.",
        "Check-out: Complete your hotel check-out and prepare for the journey to Colombo.",
        "Journey to Colombo: Travel by private vehicle towards Sri Lanka's commercial capital.",
        "Arrival & Hotel Check-in: Arrive in Colombo and settle into your hotel.",
        "Free Evening: Enjoy a relaxed evening at your own pace after the journey from Galle."
      ],
      overnight: "Hotel in Colombo.",
      imageUrl: "/documents/images/tour/colombo003.jpg"
    },
    {
      day: 11,
      title: "Colombo's Layered Heritage",
      points: [
        "Breakfast: Enjoy breakfast at your hotel before exploring Colombo's cultural landmarks.",
        "Colombo National Museum: Discover exhibits highlighting Sri Lanka's history, art and cultural heritage, subject to opening hours.",
        "Gangaramaya Temple: Explore one of Colombo's best-known Buddhist temples, recognised for its distinctive architecture and collection of religious artefacts.",
        "Pettah Bazaar: Experience the busy streets, traditional shops and vibrant market atmosphere of Colombo's historic trading district.",
        "Colonial-era Fort District: Explore the historic Fort area and discover traces of Colombo's colonial-era architecture and commercial history.",
        "Farewell Dinner: Celebrate your journey through Sri Lanka's sacred cities, ancient kingdoms and coastal heritage with a farewell dinner in Colombo."
      ],
      overnight: "Hotel in Colombo.",
      imageUrl: "/documents/images/tour/colombo004.jpg"
    },
    {
      day: 12,
      title: "Departure",
      points: [
        "Breakfast: Enjoy breakfast at your hotel and prepare for your final morning in Sri Lanka.",
        "Free Morning: Spend time at leisure before departure, depending on your flight schedule.",
        "Last-minute Shopping: Enjoy an opportunity to purchase souvenirs and gifts if time permits.",
        "Hotel Check-out: Complete check-out and ensure your belongings are ready for the airport transfer.",
        "Private Airport Transfer: Travel to Bandaranaike International Airport (CMB) with your chauffeur-guide, allowing sufficient time for check-in.",
        "Departure: Bid farewell to Sri Lanka with lasting memories of its ancient kingdoms, sacred sites and colonial heritage."
      ],
      overnight: "N/A — departure day.",
      imageUrl: "/documents/images/tour/colombo005.jpg"
    }
  ],
  hotelRecommendation: "Comfortable hotels near Anuradhapura, Polonnaruwa and Sigiriya or Habarana, followed by a hotel in Kandy, a boutique hotel within Galle Fort and a hotel in Colombo.",
  transportation: "Private air-conditioned vehicle with a dedicated chauffeur-guide for airport transfers, sightseeing and intercity journeys. Bicycle hire in Polonnaruwa can be arranged according to the confirmed package.",
  meals: "Daily breakfast. Lunches and dinners are at your own choice unless specified in the confirmed quotation. Dinner within Galle Fort on Day 8 and a farewell dinner in Colombo on Day 11 are planned in the itinerary.",
  included: [
    "11 nights' accommodation",
    "Daily breakfast",
    "Private air-conditioned vehicle and chauffeur-guide",
    "Airport welcome and luggage assistance",
    "Transfers and visits listed in the itinerary, subject to opening hours and operating schedules"
  ],
  excluded: [
    "International flights",
    "Sri Lankan visa fees",
    "Lunches and dinners unless specified in the confirmed quotation",
    "Entrance fees to archaeological sites, temples and museums unless specified",
    "Specialist guiding at Sigiriya and other heritage sites unless specified",
    "Bicycle hire and related charges in Polonnaruwa unless confirmed as included",
    "Personal expenses and tips",
    "Travel insurance"
  ],
  optionalExperiences: [
    "Specialist guiding at Sigiriya Rock Fortress",
    "Bicycle hire for exploring Polonnaruwa",
    "Additional time exploring Anuradhapura's sacred monuments",
    "Room upgrades, subject to availability"
  ],
  tourFaqs: [
    {
      q: "Which UNESCO World Heritage Sites are included in this tour?",
      a: "The itinerary includes the Sacred City of Anuradhapura, the Ancient City of Polonnaruwa, the Ancient City of Sigiriya, the Dambulla Cave Temple complex, the Sacred City of Kandy and the Old Town of Galle and its Fortifications."
    },
    {
      q: "What makes this tour different from a standard cultural itinerary?",
      a: "Alongside the major ancient cities, the itinerary includes Ritigala's forest monastery ruins, Mihintale's sacred Buddhist heritage and two nights within historic Galle Fort."
    },
    {
      q: "Is Ritigala suitable for all travellers?",
      a: "Ritigala involves walking on forest paths and uneven surfaces. Conditions may vary, so suitable footwear and a reasonable level of mobility are recommended."
    },
    {
      q: "Can we cycle through Polonnaruwa?",
      a: "Yes. Day 4 includes cycling among the ancient ruins. Bicycle hire should be confirmed in the final quotation."
    },
    {
      q: "Is the Sigiriya Rock climb physically demanding?",
      a: "The climb involves many stairs and walking. A moderate level of fitness and comfortable footwear are recommended."
    },
    {
      q: "Can the Colombo National Museum be visited on the departure day?",
      a: "The museum is scheduled for Day 11, leaving Day 12 for departure and last-minute shopping. The airport transfer on Day 12 should be timed around your flight."
       }
  ],
},

  {
    slug: "ramayana-highlights-5-day",
    title: "Ramayana Highlights of Sri Lanka",
    category: "Ramayana Tours",
    duration: "5 Days / 4 Nights",
    highlights: [
      "Munneswaram and Manavari Temples",
      "Temple of the Sacred Tooth Relic",
      "Sri Bhakta Hanuman Temple",
      "Seetha Amman Temple and Ashok Vatika traditions",
      "Ravana Falls and Ravana Cave"
    ],
    price: "From $750 pp",
    blurb: "Discover Sri Lanka's best-known Ramayana-associated temples, sacred landscapes and legendary sites on a private five-day journey.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/dunsinane-falls-nuwara-eliya-sri-lanka.jpg",
    heroTitle: "Ramayana Highlights — 5 Days",
    intro: "Follow the traditions of the Ramayana across Sri Lanka, visiting ancient Hindu temples, sacred highland shrines and landscapes associated with the story of Rama and Sita. This compact private journey combines meaningful pilgrimage stops with the beauty of the central highlands.",
    overview: "A five-day Ramayana-focused journey for travellers with limited time. The route begins near Chilaw, continues through Kandy and Nuwara Eliya, explores Ella and returns to the airport.",
    bestFor: "Pilgrims, families and short-stay cultural travellers",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Easy to moderate; optional walks and hikes",
    destinationsCovered: "CMB → Chilaw → Kandy → Nuwara Eliya → Ella → CMB",
    itinerary: [
      {
        day: 1,
        title: "Arrival, Munneswaram & Manavari",
        points: [
          "Airport Welcome: Meet your private chauffeur at Bandaranaike International Airport (CMB) with a traditional flower garland welcome.",
          "Scenic Drive to Chilaw: Travel towards the west coast, allowing time for traffic and temple visits.",
          "Munneswaram Temple: Visit the historic Hindu temple traditionally associated with Rama's worship of Shiva.",
          "Manavari Temple: Visit the shrine associated by tradition with the Ramalingam established by Rama.",
          "Transfer to Kandy: Continue inland if arrival time and temple opening hours permit; otherwise stay overnight near Chilaw and adjust the following day."
        ],
        overnight: "Hotel in Kandy, subject to arrival time; otherwise Chilaw.",
        imageUrl: "/documents/images/tour/munneswaram-manavari-ramayana-temples-sri-lanka.jpg.jpg"
      },
      {
        day: 2,
        title: "Kandy Heritage & Journey to Nuwara Eliya",
        points: [
          "Breakfast & Departure: Enjoy breakfast before travelling into the central highlands.",
          "Temple of the Sacred Tooth Relic: Visit Kandy's renowned Buddhist shrine.",
          "Scenic Hill-Country Drive: Travel towards Ramboda through mountain scenery.",
          "Sri Bhakta Hanuman Temple: Visit the temple at Ramboda associated with Hanuman in Ramayana tradition.",
          "Tea Country: Enjoy a tea-estate visit or tasting if time permits.",
          "Nuwara Eliya Arrival: Check in and relax after the journey."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/temple -of-the-thooth-kandy-sri-lanka.jpg"
      },
      {
        day: 3,
        title: "Seetha Amman Temple & Ashok Vatika",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Seetha Amman Temple: Visit the temple traditionally associated with Sita's time in Lanka.",
          "Hakgala Botanical Gardens: Explore gardens traditionally linked with the Ashok Vatika story.",
          "Divurumpola Temple: Visit the temple associated by local tradition with Sita's trial by fire.",
          "Nuwara Eliya: Enjoy the hill town's scenery and a relaxed lunch.",
          "Evening Leisure: Return to the hotel for dinner."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/seetha-amman-temple-ashok-vatika-sri-lanka.jpg"
      },
      {
        day: 4,
        title: "Nuwara Eliya to Ella — Ravana Trail",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Drive to Ella: Travel through tea plantations and mountain landscapes.",
          "Ravana Falls: Stop at the waterfall associated with Ravana in local tradition.",
          "Ravana Cave: Visit the cave near Ella if access, weather and available time permit.",
          "Ella Town: Enjoy the surrounding scenery and a relaxed afternoon.",
          "Hotel Check-in: Settle into your hotel and enjoy dinner."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/ravana-falls-cave-ella-sri-lanka.jpg"
      },
      {
        day: 5,
        title: "Ella to Colombo Airport",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before departure.",
          "Private Transfer: Travel directly towards Bandaranaike International Airport using the most suitable available route.",
          "Refreshment Stop: Pause for lunch and refreshments en route.",
          "Airport Arrival: Allow ample time for the long drive and airline check-in.",
          "Departure: Conclude your Ramayana journey."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/ella-sri-lanka-scenic-mountain-journey.jpg"
      }
    ],
    hotelRecommendation: "Selected comfortable hotels in Kandy, Nuwara Eliya and Ella. Accommodation near Chilaw may be required for late arrivals.",
    transportation: "Private air-conditioned vehicle with an English-speaking chauffeur-guide.",
    meals: "Daily breakfast, lunch and dinner according to the confirmed package and hotel plan.",
    included: [
      "4 nights' accommodation, subject to the final arrival-night arrangement",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Daily meals according to the confirmed meal plan",
      "Airport meet-and-greet",
      "Entrance fees for attractions specifically listed in the final quotation"
    ],
    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Optional experiences and activities",
      "Meals or hotel nights not stated in the final quotation"
    ],
    optionalExperiences: [
      "Private Hindu pilgrimage guide",
      "Traditional vegetarian dining",
      "Tea-estate experience",
      "Additional time at Ramayana-associated sites"
    ],
    tourFaqs: [
      {
        q: "Are all the sites historically proven to be from the Ramayana?",
        a: "No. Several locations are associated with the Ramayana through religious belief, local tradition and pilgrimage. These associations should not be presented as independently verified historical facts."
      },
      {
        q: "Is the final drive to the airport long?",
        a: "Yes. Ella to CMB is a substantial road journey. The departure flight should be scheduled with sufficient time for traffic and stops."
      }
    ]
  },
  {
    slug: "ramayana-sacred-trail-7-day",
    title: "Ramayana Sacred Trail of Sri Lanka",
    category: "Ramayana Tours",
    duration: "7 Days / 6 Nights",
    highlights: [
      "Munneswaram and Manavari Temples",
      "Sri Bhakta Hanuman Temple",
      "Seetha Amman Temple and Divurumpola",
      "Ravana Falls and Ravana Cave",
      "Ussangoda and Galle's coastal heritage",
      "Kelaniya and Panchamuga Anjaneyar Temple"
    ],
    price: "From $950 pp",
    blurb: "Explore major Ramayana-associated sites from the western coast to the highlands and southern shoreline.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/festival-of-colours.jpg",
    heroTitle: "Ramayana Sacred Trail — 7 Days",
    intro: "Journey through Sri Lanka's Ramayana pilgrimage landscape, from the temples of Chilaw to the highland shrines around Nuwara Eliya, the Ravana-associated sites of Ella and the southern coast.",
    overview: "A seven-day private journey focusing on the principal Ramayana-associated sites without adding the distant Trincomalee detour.",
    bestFor: "Pilgrims, families and cultural travellers",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "CMB → Chilaw → Kandy → Nuwara Eliya → Ella → Galle → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival, Munneswaram & Manavari",
        points: [
          "Airport Welcome: Meet your chauffeur at CMB with a traditional flower garland.",
          "Transfer to Chilaw: Travel to the historic west-coast temple area.",
          "Munneswaram Temple: Visit the historic Hindu temple associated with the Ramayana tradition.",
          "Manavari Temple: Explore the shrine traditionally linked with Rama.",
          "Scenic Transfer: Continue towards Kandy if arrival time allows.",
          "Hotel Check-in: Enjoy dinner and rest."
        ],
        overnight: "Hotel in Kandy; for late arrivals, stay in Chilaw and adjust the route.",
        imageUrl: "/documents/images/tour/munneswaram-manavari-temples.jpg"
      },
      {
        day: 2,
        title: "Kandy to Nuwara Eliya",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Temple of the Sacred Tooth Relic: Visit the celebrated Buddhist shrine in Kandy.",
          "Sri Bhakta Hanuman Temple: Travel towards Ramboda and visit the temple associated with Hanuman.",
          "Tea Country: Enjoy scenic stops among tea plantations.",
          "Tea Factory: Discover Ceylon tea production and sample local tea.",
          "Nuwara Eliya: Check in and enjoy a relaxed evening."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/bhakta-hanuman-ramboda.jpg"
      },
      {
        day: 3,
        title: "Seetha Amman, Hakgala & Divurumpola",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Seetha Amman Temple: Visit the shrine traditionally associated with Sita.",
          "Hakgala Botanical Gardens: Explore the garden traditionally associated with Ashok Vatika.",
          "Lunch: Enjoy lunch in the Nuwara Eliya area.",
          "Divurumpola Temple: Visit the site associated with Sita's trial by fire in local tradition.",
          "Evening Leisure: Return to your hotel."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/seetha-amman.jpg"
      },
      {
        day: 4,
        title: "Nuwara Eliya to Ella",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Highland Drive: Travel towards Ella through scenic mountain roads.",
          "Ravana Falls: Stop at the waterfall linked with Ravana in local tradition.",
          "Ravana Cave: Visit the cave if access and conditions permit.",
          "Ella Viewpoints: Enjoy the surrounding mountain scenery.",
          "Hotel Check-in: Relax and enjoy dinner."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/rawanaella.jpg"
      },
      {
        day: 5,
        title: "Ella to the Southern Coast",
        points: [
          "Breakfast & Check-out: Leave Ella after breakfast.",
          "Scenic Drive: Travel towards the southern coast.",
          "Ussangoda: Visit the coastal plateau associated with the Ramayana in local tradition.",
          "Coastal Lunch: Enjoy lunch on the south coast.",
          "Transfer to Galle: Continue west along the coast.",
          "Hotel Check-in: Relax at your hotel."
        ],
        overnight: "Hotel in Galle or Unawatuna.",
        imageUrl: "/documents/images/tour/Ussangoda Red Soil Plateau.jpg"
      },
      {
        day: 6,
        title: "Galle, Rumassala & Colombo",
        points: [
          "Breakfast: Enjoy breakfast before exploring the coast.",
          "Galle Fort: Explore the UNESCO World Heritage Site and its historic streets.",
          "Rumassala: Visit the headland associated in local tradition with the Sanjeevani legend.",
          "Lunch: Enjoy lunch before the journey north.",
          "Kelaniya Raja Maha Vihara: Visit this important temple if timing permits.",
          "Hotel Check-in: Arrive in Colombo and enjoy dinner."
        ],
        overnight: "Hotel in Colombo.",
        imageUrl: "/documents/images/tour/Galle Fort Lighthouse.jpg"
      },
      {
        day: 7,
        title: "Panchamuga Anjaneyar Temple & Departure",
        points: [
          "Breakfast & Check-out: Enjoy breakfast at the hotel.",
          "Panchamuga Anjaneyar Temple: Visit the temple in the Colombo area, subject to opening times.",
          "Colombo Sightseeing: Explore a nearby city landmark if time permits.",
          "Lunch: Enjoy lunch before departure.",
          "Airport Transfer: Travel to CMB with sufficient time for check-in."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/Beira Lake & Gangaramaya Temple.jpg"
      }
    ],
    hotelRecommendation: "Selected hotels in Kandy, Nuwara Eliya, Ella, Galle and Colombo.",
    transportation: "Private air-conditioned vehicle with an English-speaking chauffeur-guide.",
    meals: "Daily breakfast, lunch and dinner according to the confirmed package.",
    included: [
      "6 nights' accommodation",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Daily meals according to the confirmed plan",
      "Airport meet-and-greet",
      "Entrance fees for listed sites where specified in the final quotation"
    ],
    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Optional activities and services not listed as included"
    ],
    optionalExperiences: [
      "Private pilgrimage guide",
      "Vegetarian or Jain meals arranged in advance",
      "Additional time for temple ceremonies",
      "Coastal relaxation in Galle"
    ],
    tourFaqs: [
      {
        q: "Does this tour visit Trincomalee?",
        a: "No. This route focuses on the west coast, central highlands, Ella and the southern coast. Trincomalee is better added to a longer itinerary."
      },
      {
        q: "Are all visits guaranteed?",
        a: "Visits depend on opening times, religious ceremonies, access restrictions, weather and the final confirmed schedule."
      }
    ]
  },
  {
    slug: "complete-ramayana-yatra-8-day",
    title: "Complete Ramayana Yatra",
    category: "Ramayana Tours",
    duration: "8 Days / 7 Nights",
    highlights: [
      "Munneswaram and Manavari Temples",
      "Koneswaram Temple and Kanniya Hot Springs",
      "Sigiriya and Dambulla heritage",
      "Sri Bhakta Hanuman Temple",
      "Seetha Amman Temple and Divurumpola",
      "Ravana Falls and Ravana Cave"
    ],
    price: "From $1,050 pp",
    blurb: "A broader Ramayana pilgrimage linking the west coast, Trincomalee, the central highlands and Ella.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/skyward-guardian.jpg",
    heroTitle: "Complete Ramayana Yatra — 8 Days",
    intro: "Explore a wider collection of Sri Lanka's Ramayana-associated pilgrimage locations, including the temples of Chilaw, Trincomalee's sacred coastline and the highland sites connected by tradition with Hanuman, Sita and Ravana.",
    overview: "This eight-day private tour adds Trincomalee to the western and hill-country Ramayana route. It is more transfer-intensive than the seven-day tour, but offers a broader selection of temples.",
    bestFor: "Pilgrims seeking a broader selection of Ramayana-associated temples",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "CMB → Chilaw → Trincomalee → Sigiriya → Kandy → Nuwara Eliya → Ella → CMB",
    itinerary: [
      {
        day: 1,
        title: "Arrival, Munneswaram & Manavari",
        points: [
          "Airport Welcome: Meet your chauffeur at CMB.",
          "Munneswaram Temple: Visit the historic Hindu temple near Chilaw.",
          "Manavari Temple: Explore the shrine associated with Rama in local tradition.",
          "Scenic Drive: Travel towards the north-central region.",
          "Hotel Check-in: Relax after the journey."
        ],
        overnight: "Hotel in Anuradhapura or a convenient north-central location.",
        imageUrl: "/documents/images/tour/munneswaram-manavari-sacred-sites.jpg"
      },
      {
        day: 2,
        title: "Journey to Trincomalee",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Transfer to Trincomalee: Travel east across Sri Lanka.",
          "Kanniya Hot Springs: Visit the historic hot-water well complex.",
          "Sri Badrakali Amman Temple: Explore the colourful Hindu temple.",
          "Hotel Check-in: Enjoy dinner and rest."
        ],
        overnight: "Hotel in Trincomalee.",
        imageUrl: "/documents/images/tour/trincomalee_beach.jpg"
      },
      {
        day: 3,
        title: "Koneswaram & Shankari Devi",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Koneswaram Temple: Visit the celebrated Shiva temple overlooking the ocean.",
          "Shankari Devi Shrine: Visit the shrine traditionally associated with Shakti worship.",
          "Fort Frederick: Explore the historic surroundings where access permits.",
          "Coastal Lunch: Enjoy lunch in Trincomalee.",
          "Evening at Leisure: Relax by the coast."
        ],
        overnight: "Hotel in Trincomalee.",
        imageUrl: "/documents/images/tour/koneswaram-swami-rock-temple.jpg"
      },
      {
        day: 4,
        title: "Trincomalee to Sigiriya & Dambulla",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Drive: Travel inland towards the Cultural Triangle.",
          "Sigiriya: View the iconic rock fortress from the surrounding area; climb only if the timing allows.",
          "Dambulla Cave Temple: Visit the UNESCO World Heritage Site if arrival time permits.",
          "Hotel Check-in: Settle into your hotel and enjoy dinner."
        ],
        overnight: "Hotel in Sigiriya or Dambulla.",
        imageUrl: "/documents/images/tour/sigiriya-dambulla-heritage-ro.jpg"
      },
      {
        day: 5,
        title: "Sigiriya to Kandy",
        points: [
          "Breakfast: Enjoy breakfast before departure.",
          "Sigiriya Rock Fortress: Explore the fortress and ancient water gardens if not completed on Day 4.",
          "Dambulla Cave Temple: Visit the cave complex if not completed on Day 4.",
          "Matale: Travel through the central region with a spice garden stop if time permits.",
          "Kandy Arrival: Visit the Temple of the Sacred Tooth Relic if opening times permit.",
          "Hotel Check-in: Enjoy dinner."
        ],
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/Kandy_Sri_Lanka_Temple_of_the_tooth.jpg"
      },
      {
        day: 6,
        title: "Hanuman Temple & Nuwara Eliya",
        points: [
          "Breakfast & Check-out: Travel into the hill country.",
          "Sri Bhakta Hanuman Temple: Visit the temple at Ramboda.",
          "Ramboda Falls: Stop for waterfall views and photographs.",
          "Tea Factory: Learn about Ceylon tea and enjoy a tasting.",
          "Nuwara Eliya Arrival: Check in to your hotel.",
          "Evening Leisure: Enjoy dinner and relax."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/ramboda-hanuman-temple-highlands.jpg"
      },
      {
        day: 7,
        title: "Seetha Amman, Divurumpola & Ella",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Seetha Amman Temple: Visit the shrine traditionally associated with Sita.",
          "Hakgala Botanical Gardens: Explore the garden traditionally linked with Ashok Vatika.",
          "Divurumpola Temple: Visit the temple associated with Sita in local tradition.",
          "Transfer to Ella: Continue through the highlands.",
          "Ravana Falls: Stop for a short visit if daylight and road conditions allow."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/seetha-amman-seetha-eliya.jpg"
      },
      {
        day: 8,
        title: "Ravana Cave & Airport Departure",
        points: [
          "Breakfast & Check-out: Enjoy breakfast before departure.",
          "Ravana Cave: Visit if access, weather and departure timing permit.",
          "Private Transfer: Begin the journey to CMB.",
          "Lunch Stop: Enjoy lunch en route.",
          "Airport Arrival: Allow ample time for the long drive and check-in."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/ravana-cave-ella-landmark.jpg"
      }
    ],
    hotelRecommendation: "Selected hotels in the north-central region, Trincomalee, Sigiriya, Kandy, Nuwara Eliya and Ella.",
    transportation: "Private air-conditioned vehicle and English-speaking chauffeur-guide. Long road transfers are scheduled with appropriate stops.",
    meals: "Daily breakfast, lunch and dinner according to the final package.",
    included: [
      "7 nights' accommodation",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Daily meals according to the confirmed plan",
      "Airport meet-and-greet",
      "Entrance fees for the attractions explicitly included in the final quotation"
    ],
    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Optional activities and services not included in the confirmed package"
    ],
    optionalExperiences: [
      "Private pilgrimage guide",
      "Traditional vegetarian meals",
      "Additional temple visits in Trincomalee",
      "Guided Sigiriya climb"
    ],
    tourFaqs: [
      {
        q: "Why are there two nights in Trincomalee?",
        a: "This gives time for Koneswaram, Shankari Devi and Kanniya without trying to combine every visit with a long transfer."
      },
      {
        q: "Is the itinerary suitable for older pilgrims?",
        a: "It can be adapted with fewer climbs, slower sightseeing and additional rest. Some road journeys remain long."
      }
    ]
  },
  {
    slug: "ramayana-heritage-legends-10-day",
    title: "Ramayana Heritage & Legends",
    category: "Ramayana Tours",
    duration: "10 Days / 9 Nights",
    highlights: [
      "Munneswaram and Manavari Temples",
      "Koneswaram Temple and Kanniya Hot Springs",
      "Sigiriya and Dambulla",
      "Sri Bhakta Hanuman and Seetha Amman Temples",
      "Divurumpola, Ravana Cave and Ravana Falls",
      "Kataragama and Ussangoda",
      "Galle Fort and Kelaniya"
    ],
    price: "From $1,150 pp",
    blurb: "A comprehensive Ramayana-themed journey through the island's major pilgrimage regions and southern landscapes.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/stone-heritage.jpg",
    heroTitle: "Ramayana Heritage & Legends — 10 Days",
    intro: "Discover the broad geography of Sri Lanka's Ramayana-associated traditions on a private journey from the western coast to Trincomalee, the highlands and the south. This itinerary combines important temples with cultural heritage, scenic countryside and time to appreciate each region.",
    overview: "A ten-day route covering the major northern, eastern, central and southern Ramayana-associated locations, arranged to reduce unnecessary backtracking.",
    bestFor: "Pilgrims wanting a comprehensive island tour",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "CMB → Chilaw → Trincomalee → Sigiriya → Kandy → Nuwara Eliya → Ella → Kataragama → Galle → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival, Munneswaram & Manavari",
        points: [
          "Airport Welcome: Meet your chauffeur at CMB.",
          "Transfer to Chilaw: Travel towards the west coast.",
          "Munneswaram Temple: Visit the historic Hindu temple.",
          "Manavari Temple: Visit the shrine associated with Rama in local tradition.",
          "Continue North: Travel towards a convenient overnight location if arrival time allows."
        ],
        overnight: "Hotel in Chilaw or Anuradhapura, based on arrival time.",
        imageUrl: "/documents/images/tour/munneswaram-manavari-ramayana-temples.jpg"
      },
      {
        day: 2,
        title: "Journey to Trincomalee",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Drive: Travel towards the east coast.",
          "Kanniya Hot Springs: Visit the historic hot-water well complex.",
          "Sri Badrakali Amman Temple: Explore the Hindu temple in Trincomalee.",
          "Hotel Check-in: Relax and enjoy dinner."
        ],
        overnight: "Hotel in Trincomalee.",
        imageUrl: "/documents/images/tour/fort-frederick-trincomalee-heritage.jpg"
      },
      {
        day: 3,
        title: "Koneswaram & Shankari Devi",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Koneswaram Temple: Visit the celebrated Shiva temple above the ocean.",
          "Shankari Devi Shrine: Explore the shrine traditionally linked with Shakti worship.",
          "Fort Frederick: Discover the historic surroundings where access permits.",
          "Coastal Lunch: Enjoy lunch in Trincomalee.",
          "Afternoon Leisure: Enjoy the coast or return to the hotel."
        ],
        overnight: "Hotel in Trincomalee.",
        imageUrl: "/documents/images/tour/pathrakali-amman-trincomalee.jpg"
      },
      {
        day: 4,
        title: "Trincomalee to Sigiriya",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Drive: Travel inland to the Cultural Triangle.",
          "Sigiriya Rock Fortress: Explore the UNESCO World Heritage Site if time permits.",
          "Dambulla Cave Temple: Visit the cave complex if the arrival schedule allows.",
          "Hotel Check-in: Enjoy dinner and relax."
        ],
        overnight: "Hotel in Sigiriya or Dambulla.",
        imageUrl: "/documents/images/tour/sigiriya-lion-rock-cultural-triangle.jpg"
      },
      {
        day: 5,
        title: "Sigiriya, Dambulla & Kandy",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Sigiriya Rock Fortress: Explore the fortress, gardens and archaeological remains if not completed on Day 4.",
          "Dambulla Cave Temple: Visit the UNESCO-listed cave complex if not completed on Day 4.",
          "Matale Spice Garden: Learn about Sri Lankan spices if time permits.",
          "Kandy Arrival: Visit the Temple of the Sacred Tooth Relic subject to opening times.",
          "Hotel Check-in: Enjoy dinner."
        ],
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/Kandy_Sri_Lanka_Temple_of_the_tooth.jpg"
      },
      {
        day: 6,
        title: "Hanuman Temple & Nuwara Eliya",
        points: [
          "Breakfast & Check-out: Begin the drive into the hill country.",
          "Sri Bhakta Hanuman Temple: Visit the temple at Ramboda.",
          "Ramboda Falls: Admire the waterfall and mountain scenery.",
          "Tea Factory: Learn about Ceylon tea and enjoy a tasting.",
          "Nuwara Eliya: Explore the hill town if time permits.",
          "Hotel Check-in: Enjoy dinner."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/ramboda-hanuman-temple-sacred-shrine.jpg"
      },
      {
        day: 7,
        title: "Seetha Amman & Divurumpola",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Seetha Amman Temple: Visit the temple traditionally associated with Sita.",
          "Hakgala Botanical Gardens: Explore the gardens associated by tradition with Ashok Vatika.",
          "Divurumpola Temple: Visit the temple linked by local tradition with Sita's trial by fire.",
          "Lunch: Enjoy lunch in the highlands.",
          "Evening Leisure: Relax at the hotel."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/hakgala-floral-garden-nuwara-eliya.jpg"
      },
      {
        day: 8,
        title: "Nuwara Eliya to Ella",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Transfer: Travel through tea country towards Ella.",
          "Ravana Falls: Visit the waterfall associated with Ravana in local tradition.",
          "Ravana Cave: Explore if access and weather permit.",
          "Ella Town: Enjoy the surrounding highland scenery.",
          "Hotel Check-in: Enjoy dinner."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/ravana-waterfall-ella-highlands.jpg"
      },
      {
        day: 9,
        title: "Ella, Kataragama & Southern Legends",
        points: [
          "Breakfast & Check-out: Depart Ella after breakfast.",
          "Scenic Drive: Travel towards the southern region.",
          "Kataragama: Visit the sacred multi-faith pilgrimage area.",
          "Ussangoda: Visit the coastal plateau associated with the Ramayana in local tradition, subject to time.",
          "Transfer to Galle: Continue along the southern coast if road conditions permit.",
          "Hotel Check-in: Relax and enjoy dinner."
        ],
        overnight: "Hotel in Galle or the southern coast.",
        imageUrl: "/documents/images/tour/kataragama-sacred-pilgrimage-temple.jpg"
      },
      {
        day: 10,
        title: "Galle & Colombo Departure",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Galle Fort: Explore the UNESCO World Heritage Site and its historic ramparts.",
          "Rumassala: Visit the coastal headland associated with the Sanjeevani legend in local tradition, if time permits.",
          "Transfer to Colombo: Travel north towards the airport.",
          "Kelaniya: Visit Kelaniya Raja Maha Vihara if timing permits.",
          "Airport Transfer: Arrive at CMB with sufficient time for check-in."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/rumassala-beach-galle-coastal-landscape.jpg"
      }
    ],
    hotelRecommendation: "Selected hotels in Chilaw or the north-central region, Trincomalee, Sigiriya, Kandy, Nuwara Eliya, Ella and Galle.",
    transportation: "Private air-conditioned vehicle with an English-speaking chauffeur-guide. Long transfers are scheduled with appropriate breaks.",
    meals: "Daily breakfast, lunch and dinner according to the confirmed package.",
    included: [
      "9 nights' accommodation",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Daily meals according to the final meal plan",
      "Airport meet-and-greet",
      "Entrance fees specifically listed in the final confirmed quotation"
    ],
    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Optional experiences not listed as included",
      "Additional temple donations and ceremonial offerings unless specified"
    ],
    optionalExperiences: [
      "Private pilgrimage guide",
      "Vegetarian or Jain meal arrangements",
      "Additional temple visits",
      "Private cultural experience in Kandy"
    ],
    tourFaqs: [
      {
        q: "Does this route cover the main Ramayana regions?",
        a: "It covers major sites in Chilaw, Trincomalee, the central highlands, Ella and the south. Site visits remain subject to access and daily travel time."
      },
      {
        q: "Will the southern coast feel rushed?",
        a: "The southern coast is a short section of this pilgrimage-focused route. Travellers wanting beach time should consider the twelve-day option."
      }
    ]
  },
  {
    slug: "ultimate-ramayana-pilgrimage-12-day",
    title: "Ultimate Ramayana Pilgrimage of Sri Lanka",
    category: "Ramayana Tours",
    duration: "12 Days / 11 Nights",
    highlights: [
      "Munneswaram and Manavari Temples",
      "Anuradhapura sacred heritage",
      "Koneswaram Temple, Shankari Devi and Kanniya Hot Springs",
      "Sigiriya and Dambulla UNESCO heritage",
      "Sri Bhakta Hanuman Temple and Seetha Amman Temple",
      "Divurumpola, Ravana Cave and Ravana Falls",
      "Kataragama, Ussangoda, Galle and Kelaniya"
    ],
    price: "From $1,250 pp",
    blurb: "A more relaxed Ramayana pilgrimage combining major temple regions, sacred heritage, highland landscapes and the southern coast.",
    motif: "heritage",
    imageUrl: "/documents/images/tour/golden-devotion.jpg",
    heroTitle: "Ultimate Ramayana Pilgrimage — 12 Days",
    intro: "Follow Sri Lanka's Ramayana-associated pilgrimage traditions on a comprehensive private journey. Visit the temples of Chilaw, explore Anuradhapura's sacred heritage, discover Trincomalee's ocean-facing shrines and travel through the central highlands to sites associated with Sita, Hanuman and Ravana. Finish with the sacred landscapes and historic coastal towns of the south.",
    overview: "A twelve-day itinerary allowing more time for travel between distant regions and a broader selection of pilgrimage visits. It combines the west coast, north-central heritage, east coast, central highlands and south coast.",
    bestFor: "Pilgrims seeking a comprehensive Sri Lankan Ramayana journey",
    groupSize: "Private — just you and your travel companions",
    physicalLevel: "Easy to moderate, with optional walks",
    destinationsCovered: "CMB → Chilaw → Anuradhapura → Trincomalee → Sigiriya → Kandy → Nuwara Eliya → Ella → Kataragama → Galle → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival, Munneswaram & Manavari",
        points: [
          "Airport Welcome: Meet your chauffeur at CMB with a traditional flower garland.",
          "Transfer to Chilaw: Travel to the western temple region.",
          "Munneswaram Temple: Visit the historic Hindu temple associated with the Ramayana tradition.",
          "Manavari Temple: Visit the shrine linked with Rama in local tradition.",
          "Scenic Transfer: Continue towards Anuradhapura if arrival time permits.",
          "Hotel Check-in: Enjoy dinner and rest."
        ],
        overnight: "Hotel in Anuradhapura; for late arrivals, stay near Chilaw and adjust the next day.",
        imageUrl: "/documents/images/tour/munneswaram-hindu-temple-chilaw.jpg"
      },
      {
        day: 2,
        title: "Anuradhapura Sacred Heritage",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Anuradhapura Sacred City: Explore selected monuments in this UNESCO World Heritage Site.",
          "Sri Maha Bodhi: Visit the revered sacred Bodhi tree area.",
          "Ruwanwelisaya: Discover the monumental stupa and surrounding sacred precinct.",
          "Lunch: Enjoy lunch in Anuradhapura.",
          "Evening Leisure: Relax at the hotel."
        ],
        overnight: "Hotel in Anuradhapura.",
        imageUrl: "/documents/images/tour/ruwanwelisaya-sacred-stupa-anuradhapura.jpg"
      },
      {
        day: 3,
        title: "Anuradhapura to Trincomalee",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Transfer: Travel east towards Trincomalee.",
          "Kanniya Hot Springs: Visit the historic hot-water well complex.",
          "Sri Badrakali Amman Temple: Explore the Hindu temple in Trincomalee.",
          "Hotel Check-in: Enjoy dinner and relax."
        ],
        overnight: "Hotel in Trincomalee.",
        imageUrl: "/documents/images/tour/kanniya-hot-water-springs-trincomalee.jpg"
      },
      {
        day: 4,
        title: "Koneswaram & Shankari Devi",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Koneswaram Temple: Visit the celebrated Shiva temple overlooking the Indian Ocean.",
          "Shankari Devi Shrine: Visit the shrine traditionally associated with Shakti worship.",
          "Fort Frederick: Explore the historic surroundings where access permits.",
          "Coastal Lunch: Enjoy lunch in Trincomalee.",
          "Afternoon at Leisure: Relax by the coast."
        ],
        overnight: "Hotel in Trincomalee.",
        imageUrl: "/documents/images/tour/koneswaram-swami-rock-trincomalee.jpg"
      },
      {
        day: 5,
        title: "Trincomalee to Sigiriya",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Drive: Travel inland to the Cultural Triangle.",
          "Sigiriya Rock Fortress: Explore the UNESCO World Heritage Site if time permits.",
          "Dambulla Cave Temple: Visit the cave complex if opening hours allow.",
          "Hotel Check-in: Relax and enjoy dinner."
        ],
        overnight: "Hotel in Sigiriya or Dambulla.",
        imageUrl: "/documents/images/tour/sigiriya-lion-rock-fortress-landscape.jpg"
      },
      {
        day: 6,
        title: "Sigiriya & Dambulla Heritage",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Sigiriya Rock Fortress: Explore the rock citadel, water gardens and ancient remains.",
          "Summit Views: Climb the fortress if fitness, weather and timing permit.",
          "Dambulla Cave Temple: Explore the UNESCO-listed cave complex and Buddhist art if not completed on Day 5.",
          "Lunch: Enjoy lunch during the sightseeing day.",
          "Evening Leisure: Return to your hotel for dinner."
        ],
        overnight: "Hotel in Sigiriya or Dambulla.",
        imageUrl: "/documents/images/tour/dambulla-golden-cave-temple-heritage.jpg"
      },
      {
        day: 7,
        title: "Sigiriya to Kandy",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Matale Spice Garden: Learn about Sri Lankan spices if time permits.",
          "Scenic Transfer: Continue towards Kandy through the central region.",
          "Temple of the Sacred Tooth Relic: Visit the celebrated Buddhist shrine subject to opening times.",
          "Kandy Lake: Enjoy a relaxing lakeside walk.",
          "Hotel Check-in: Enjoy dinner."
        ],
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy-lake-sacred-tooth-temple-view.jpg"
      },
      {
        day: 8,
        title: "Hanuman Temple & Nuwara Eliya",
        points: [
          "Breakfast & Check-out: Begin the hill-country journey.",
          "Sri Bhakta Hanuman Temple: Visit the temple at Ramboda.",
          "Ramboda Falls: Admire the waterfall and surrounding mountains.",
          "Tea Factory: Discover the Ceylon tea-making process and enjoy a tasting.",
          "Nuwara Eliya: Explore the hill town if time permits.",
          "Hotel Check-in: Enjoy dinner and relax."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/ramboda-falls-mountain-waterfall.jpg"
      },
      {
        day: 9,
        title: "Seetha Amman, Hakgala & Divurumpola",
        points: [
          "Breakfast: Enjoy breakfast at the hotel.",
          "Seetha Amman Temple: Visit the shrine traditionally associated with Sita.",
          "Hakgala Botanical Gardens: Explore the gardens associated in local tradition with Ashok Vatika.",
          "Lunch: Enjoy lunch in the Nuwara Eliya area.",
          "Divurumpola Temple: Visit the temple linked with Sita's trial by fire in local tradition.",
          "Evening Leisure: Return to the hotel."
        ],
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwara-eliya-green-tea-plantation (2).jpg"
      },
      {
        day: 10,
        title: "Nuwara Eliya to Ella",
        points: [
          "Breakfast & Check-out: Depart after breakfast.",
          "Scenic Highland Drive: Travel towards Ella through the mountain countryside.",
          "Ravana Falls: Visit the waterfall associated with Ravana in local tradition.",
          "Ravana Cave: Explore if access, weather and time permit.",
          "Ella Town: Enjoy the mountain scenery and a relaxed lunch.",
          "Hotel Check-in: Enjoy dinner."
        ],
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/ravana-waterfall-ella-highland-scenery.jpg"
      },
      {
        day: 11,
        title: "Ella, Kataragama & the Southern Coast",
        points: [
          "Breakfast & Check-out: Depart Ella after breakfast.",
          "Scenic Drive: Travel towards Kataragama.",
          "Kataragama Sacred Area: Visit the important multi-faith pilgrimage centre.",
          "Ussangoda: Visit the coastal plateau associated with Ramayana traditions, subject to timing.",
          "Transfer to Galle: Continue along the southern coast.",
          "Hotel Check-in: Enjoy dinner and relax."
        ],
        overnight: "Hotel in Galle or Unawatuna.",
        imageUrl: "/documents/images/tour/ussangoda-beach.jpg"
      },
      {
        day: 12,
        title: "Galle, Kelaniya & Departure",
        points: [
          "Breakfast & Check-out: Enjoy breakfast at the hotel.",
          "Galle Fort: Explore the UNESCO World Heritage Site if departure timing allows.",
          "Rumassala: Visit the coastal headland associated with the Sanjeevani legend if time permits.",
          "Transfer to Colombo: Travel towards the airport.",
          "Kelaniya Raja Maha Vihara: Stop if timing and traffic allow.",
          "Airport Departure: Arrive at CMB with sufficient time for airline check-in."
        ],
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/galle-fort-historic-coastal-ramparts.jpg"
      }
    ],
    hotelRecommendation: "Selected hotels in Chilaw or Anuradhapura, Trincomalee, Sigiriya, Kandy, Nuwara Eliya, Ella and Galle.",
    transportation: "Private air-conditioned vehicle with an English-speaking chauffeur-guide. The itinerary includes long inter-regional transfers, scheduled with suitable rest stops.",
    meals: "Daily breakfast, lunch and dinner according to the confirmed meal plan.",
    included: [
      "11 nights' accommodation",
      "Private chauffeur-guide and air-conditioned vehicle",
      "Daily meals according to the confirmed package",
      "Airport meet-and-greet",
      "Entrance fees to attractions explicitly listed in the final quotation"
    ],
    excluded: [
      "International flights and visa fees",
      "Travel insurance",
      "Personal expenses and gratuities",
      "Optional experiences not listed as included",
      "Additional ceremonial offerings and temple donations unless specified"
    ],
    optionalExperiences: [
      "Private pilgrimage guide",
      "Vegetarian or Jain meals arranged in advance",
      "Additional temple visits",
      "Extra rest day in Trincomalee or Nuwara Eliya"
    ],
    tourFaqs: [
      {
        q: "Does the tour include both eastern and southern Sri Lanka?",
        a: "Yes. It includes Trincomalee on the east coast and the Kataragama and Galle regions in the south."
      },
      {
        q: "Can we make the tour less tiring?",
        a: "Yes. An additional night can be added to the north-central region or southern coast, or some optional stops can be removed."
      }
    ]
  }
];

export type ThingToDo = { title: string; description: string; imageUrl?: string };

export type Destination = {
  slug: string;
  name: string;
  region: string;
  description: string;
  highlights: string[];
  bestTime: string;
  activities: string[];
  motif: "mountain" | "wave" | "temple" | "rock" | "leaf" | "sun";
  imageUrl?: string;
  galleryImageUrl?: string;
  thingsToDo?: ThingToDo[];
  highlightCards?: { title: string; imageUrl?: string }[];
  aboutText?: string;
  articleSections?: {
  title: string;
  description: string;
  imageUrl?: string;
}[];

};

export const destinations: Destination[] = [
  
  {
  slug: "colombo",

  name: "Colombo",

  region: "Western Coast",

  description:
    "Colombo is Sri Lanka's vibrant coastal capital, where colonial heritage, modern city life, local culture and the Indian Ocean come together. From historic streets and colourful markets to temples, museums, stylish cafés and oceanfront promenades, Colombo offers travellers an engaging introduction to the island's diverse character. The city is a lively blend of old and new, making it an ideal starting point for discovering Sri Lanka.",

  highlights: [
    "Colombo's Colonial Heritage",
    "Colombo's Culture & Local Life",
    "Oceanfront Colombo & City Experiences",
  ],

  bestTime: "January to April",

  activities: [
    "Colombo City Tour",
    "Colonial Heritage Walk",
    "Gangaramaya Temple Visit",
    "National Museum Visit",
    "Pettah Market Experience",
    "Galle Face Sunset",
    "Local Food Experience",
    "Shopping & Lifestyle",
    "Café & Fine Dining Experience",
    "Tuk-Tuk City Exploration",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Colombo's Colonial Heritage",
      imageUrl: "/documents/destination_explore_Image/colombo_colonial.jpg",
    },

    {
      title: "Colombo's Culture & Local Life",
      imageUrl: "/documents/destination_explore_Image/colombo_culture.jpg",
    },
   
    {
      title: "Oceanfront Colombo",
      imageUrl: "/documents/destination_explore_Image/colombo_ocean.jpg",
    },
  ],

  aboutText:
    "Colombo is a city of contrasts, where historic neighbourhoods, colonial buildings, colourful markets, temples and modern city spaces exist side by side. Travellers can move from the lively streets of Pettah to the peaceful atmosphere of a temple, explore the city's museums and heritage buildings, and finish the day beside the Indian Ocean. With its restaurants, cafés, shopping, art and vibrant street life, Colombo offers a relaxed introduction to both traditional and contemporary Sri Lanka.",

  imageUrl: "/documents/destination image/colombo.jpg",

  galleryImageUrl: "/documents/gallery image/colombo.jpg",

  articleSections: [
    {
      title: "The Cosmopolitan Spirit of Colombo",

      description:
        "Colombo is a lively coastal city where Sri Lanka's past and present come together. The city is filled with busy streets, modern buildings, colonial architecture, local markets, cafés and restaurants, creating a unique mix of old and new. In the historic Fort area, elegant colonial buildings stand alongside contemporary hotels and city landmarks, while places such as Pettah bring travellers closer to the energy of everyday Colombo. It is a city best experienced slowly, through its streets, flavours, people and changing atmosphere, rather than simply moving from one attraction to another.",

      imageUrl: "/documents/destination_explore_Image/colombo_colonial.jpg",
    },

    {
      title: "History, Culture & Everyday Colombo",

      description:
        "Beyond its modern city life, Colombo offers many ways to discover Sri Lanka's history and culture. A visit to the Colombo National Museum introduces travellers to the island's rich heritage, while Gangaramaya Temple offers a fascinating combination of worship, art and architecture influenced by different Asian traditions. A walk through Pettah reveals another side of the city, with colourful shops, busy markets, local food and the rhythm of everyday life. Together, these experiences give visitors a deeper understanding of Colombo and the many cultures that have shaped the city over time.",

      imageUrl: "/documents/destination_explore_Image/colombo_culture.jpg",
    },

    {
      title: "From City Streets to the Indian Ocean",

      description:
        "Colombo's coastal setting adds another beautiful dimension to the city. At Galle Face Green, travellers can escape the busy streets for a relaxed walk beside the Indian Ocean and watch the sky change colour at sunset. The city also offers a wonderful choice of cafés, restaurants, shopping and contemporary experiences, making it easy to enjoy both local flavours and modern Sri Lankan life. Whether exploring historic streets, tasting traditional food, discovering hidden corners or ending the day beside the ocean, Colombo gives travellers a memorable introduction to the vibrant spirit of Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/colombo_ocean.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Colombo Fort",

      description:
        "Walk through the historic heart of Colombo and discover colonial-era buildings, old streets, modern landmarks and the changing character of the city's central business district.",

      imageUrl: "/documents/thingstodo/colombo_fort.jpg",
    },

    {
      title: "Walk Through Pettah Market",

      description:
        "Experience one of Colombo's liveliest neighbourhoods, filled with colourful shops, local traders, street food and the energetic rhythm of everyday city life.",

      imageUrl: "/documents/thingstodo/pettah_market.jpg",
    },

    {
      title: "Visit Gangaramaya Temple",

      description:
        "Discover one of Colombo's most distinctive temples, where Buddhist traditions, colourful architecture, religious objects and influences from across Asia come together.",

      imageUrl: "/documents/thingstodo/gangaramaya.jpg",
    },

    {
      title: "Visit Colombo National Museum",

      description:
        "Explore Sri Lanka's rich cultural heritage through historic artefacts, traditional art, royal objects and collections that tell the story of the island's past.",

      imageUrl: "/documents/thingstodo/colombo_museum.jpg",
    },

    {
      title: "Explore Independence Square",

      description:
        "Visit one of Colombo's elegant civic landmarks, surrounded by landscaped gardens and impressive architecture, offering a peaceful break from the busy city streets.",

      imageUrl: "/documents/thingstodo/independence_square.jpg",
    },

    {
      title: "Enjoy Galle Face Green at Sunset",

      description:
        "Take a relaxed evening walk beside the Indian Ocean, enjoy local snacks and watch the sunset from one of Colombo's most popular waterfront spaces.",

      imageUrl: "/documents/thingstodo/galle_face.jpg",
    },

    {
      title: "Take a Colonial Architecture Walk",

      description:
        "Discover Colombo's architectural heritage through historic buildings, colonial facades, old streets and landmarks that reflect the city's long history as an international trading port.",

      imageUrl: "/documents/thingstodo/colombo_architecture.jpg",
    },

    {
      title: "Experience Local Sri Lankan Food",

      description:
        "Taste the flavours of Colombo through traditional rice and curry, street food, seafood, local sweets and modern restaurants offering contemporary interpretations of Sri Lankan cuisine.",

      imageUrl: "/documents/thingstodo/colombo_food.jpg",
    },

    

    {
      title: "Enjoy Colombo's Shopping & Lifestyle",

      description:
        "Discover a mixture of local crafts, fashion, jewellery, souvenirs, contemporary boutiques and modern shopping spaces across the city.",

      imageUrl: "/documents/thingstodo/colombo_shopping.jpg",
    },

    {
      title: "Discover Colombo's Cafés & Fine Dining",

      description:
        "Enjoy Colombo's growing food and café scene, from relaxed local cafés to elegant restaurants offering Sri Lankan, Asian and international cuisine.",

      imageUrl: "/documents/thingstodo/colombo_dining.jpg",
    },

   
  ],
},

  {
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    description:
      "A 5th-century rock fortress rising 200 metres above the surrounding plains, crowned with the ruins of a royal palace.",
    highlights: ["Lion's Gate frescoes", "Water gardens", "Summit sunrise views"],
    bestTime: "January – March",
    activities: ["Rock climb", "Village cycling tour", "Hot-air ballooning nearby"],
    motif: "rock",
      highlightCards: [
    { title: "Ancient Entrance", imageUrl: "/documents/destination_explore_Image/sigiri_ancient.jpg" },
    { title: "Art", imageUrl: "/documents/destination_explore_Image/sigiriya_Frescos.jpg" },
    { title: "Fortress Moat", imageUrl: "/documents/destination_explore_Image/water_garden.jpg" },
  ],
  aboutText: "Write your own longer paragraph about this destination here — this is the article text shown next to the big photo.",
    imageUrl: "/documents/gallery image/sigiri rock.jpg",  
    galleryImageUrl: "/documents/gallery image/sigiri rock.jpg", 
     articleSections: [
  {
    title: "The Story of an Ancient Kingdom",
    description:
      "Built during the reign of King Kashyapa in the 5th century, Sigiriya stands as one of Sri Lanka’s most extraordinary ancient sites. Rising dramatically above the surrounding plains, this remarkable rock fortress was once a royal citadel surrounded by beautifully planned gardens and defensive features.",
    imageUrl: "/documents/destination_explore_Image/sigiri.jpg",
  },
  {
    title: "A World of Ancient Art",
    description:
      "Sigiriya is celebrated not only for its architecture but also for its remarkable artistic heritage. The famous frescoes, often described as some of the finest surviving examples of ancient Sri Lankan art, bring colour and character to the rock face. Around the fortress, beautifully planned water gardens, pools, and the iconic Lion’s Paw entrance add to the experience of exploring this extraordinary historic landscape.",
    imageUrl: "/documents/destination_explore_Image/sigiri_climb.jpg",
  },
  {
    title: "The Journey to the Summit",
    description:
      "Climbing Sigiriya is an experience that combines history, nature, and adventure. As you make your way through the ancient gardens and past the Lion’s Paw, the landscape gradually opens into breathtaking views across the surrounding forests and plains. At the summit, the remains of the ancient fortress sit above the treetops, creating a memorable perspective of Sri Lanka’s cultural heartland.",
    imageUrl: "/documents/destination_explore_Image/sigiri_view.jpg",
  },
],
     thingsToDo: [
    {
      title: "Sunrise at Pidurangala",
      description: "Climb Pidurangala Rock in the early morning for beautiful sunrise views over the lush landscapes of Sigiriya. From the summit, enjoy a breathtaking view of the iconic Sigiriya Rock rising above the surrounding forest.",
      imageUrl: "/documents/thingstodo/pidurangala.jpg",
    },
    {
      title: "Traditional Village Tour",
      description: "Step into the peaceful countryside around Sigiriya and experience the charm of traditional Sri Lankan village life. Meet local families, discover everyday traditions, and enjoy a glimpse into the simple rhythm of rural life.",
      imageUrl: "/documents/thingstodo/village.jpg",
    },
    {
      title: "Village Cycling Tour",
      description: "Cycle through nearby villages and rice paddies with a local guide.",
      imageUrl: "/documents/thingstodo/cycling.jpg",
    },
    {
      title: "Hot-Air Balloon Ride",
      description: "Rise above the beautiful countryside of Sigiriya and enjoy breathtaking views of lush forests, ancient landmarks and peaceful village landscapes from the sky. A magical sunrise balloon ride offers a unique way to experience Sri Lanka’s natural beauty from a whole new perspective.",
      imageUrl: "/documents/thingstodo/airbaloon.jpg",
    },
    {
      title: "Sri Lankan Cooking Experience",
      description: "Discover the rich flavors of Sri Lankan cuisine through a hands-on cooking experience with local hosts. Learn to prepare traditional dishes using fresh local ingredients and aromatic spices, then enjoy an authentic homemade meal together in a warm village setting.",
      imageUrl: "/documents/thingstodo/cooking.jpg",
    },
    {
      title: "Birdwatching",
      description: "Discover the rich birdlife of Sigiriya as you explore its lush forests, wetlands and peaceful countryside. With Sri Lanka’s tropical landscapes providing a natural home for a remarkable variety of birds, this experience offers a quiet opportunity to observe colorful species in their natural surroundings and enjoy the beauty of the island’s wild landscapes.",
      imageUrl: "/documents/thingstodo/birds.jpg",
    },
    {
      title: "Kaudulla Wildlife Safari",
      description: "Venture into Kaudulla National Park for an unforgettable wildlife experience surrounded by lush forests, open grasslands and peaceful wetlands. The park is especially known for its large gatherings of wild elephants, while the surrounding landscape also offers opportunities to spot birds, deer and other native wildlife in their natural habitat.",
      imageUrl: "/documents/thingstodo/kaudulla.jpg",
    },
    {
      title: "Elephant Experience Near Sigiriya",
      description: "Encounter Sri Lanka’s magnificent elephants in a natural setting near Sigiriya and learn more about their behavior, habitat and daily life. Enjoy a respectful wildlife experience surrounded by the beautiful countryside, with opportunities to observe these gentle giants at a comfortable distance.",
      imageUrl: "/documents/thingstodo/elephant.jpg",
    },
    {
      title: "Bullock Cart Ride",
      description: "Experience the charm of rural Sri Lanka on a traditional bullock cart ride through peaceful village roads and scenic countryside. Travel at a gentle pace through lush paddy fields and beautiful rural landscapes while discovering a slower, more authentic side of Sri Lankan village life.",
       imageUrl: "/documents/thingstodo/cart.jpg",
    },
  ],
    
  },
   {
    slug: "dambulla",
    name: "Dambulla",
    region: "Cultural Triangle",
    description:
      "Dambulla is a cultural treasure of Sri Lanka, famed for its ancient cave temple, golden Buddha, and beautifully preserved murals and sculptures. Nestled among the island’s lush landscapes, it offers a fascinating glimpse into Sri Lanka’s spiritual and artistic heritage.",
    highlights: ["Dambulla Cave Temple", "Golden Temple", "Ancient Cave Art"],
    bestTime: "January – December",
    activities: ["Explore Dambulla Cave Temple", "Ancient Art Discovery", "Golden Temple Visit","Rock Climb","Local Market Explore","Spice Garden Tour"],
    motif: "rock",
      highlightCards: [
    { title: "Dambulla Cave Temple", imageUrl: "/documents/destination_explore_Image/Dambulla Cave Temple.jpg" },
    { title: "Golden Temple", imageUrl: "/documents/destination_explore_Image/Gilden Temple.jpg" },
    { title: "Ancient Cave Art", imageUrl: "/documents/destination_explore_Image/Ancient Cave Art.jpg" },
  ],
  aboutText: "Write your own longer paragraph about this destination here — this is the article text shown next to the big photo.",
    imageUrl: "/documents/destination image/dambulla.jpg",  
    galleryImageUrl: "/documents/gallery image/dambulla.jpg", 
     articleSections: [
  {
    title: "Dambulla Cave & Golden Temple",
    description:
      "Explore the sacred Dambulla Cave Temple and its magnificent Golden Temple, home to ancient murals, intricate Buddha statues, and centuries of Buddhist heritage. Discover the spiritual beauty and artistic traditions that make Dambulla a cultural treasure.",
    imageUrl: "/documents/destination_explore_Image/dambulla (2).jpg",
  },
  {
    title: "Explore a Traditional Spice Garden",
    description:
      "Step into a fragrant world of cinnamon, cardamom, pepper, and other tropical spices. Discover traditional uses of Sri Lanka’s finest spices and learn about their connection to local cuisine and Ayurveda.",
    imageUrl: "/documents/destination_explore_Image/spicy.jpg",
  },
  {
    title: "Discover Dambulla Market",
    description:
      "Experience the vibrant atmosphere of Dambulla’s local market, where colourful fruits, vegetables, spices, and everyday produce come together. It’s a wonderful way to experience the authentic rhythm and flavours of local life.",
      imageUrl: "/documents/destination_explore_Image/market.jpg",
  },
],
     thingsToDo: [
    {
      title: "Visit the Dambulla Cave & Golden Temple",
      description: "Discover ancient Buddha statues, vibrant murals, and sacred cave shrines, then admire the iconic Golden Temple and its magnificent Buddha statue.",
     imageUrl: "/documents/thingstodo/temple.jpg",
    },
    {
      title: "Discover Sri Lanka’s Spice Heritage",
      description: "Wander through fragrant spice gardens and discover cinnamon, cardamom, pepper, and other tropical spices. Learn about their traditional uses and their important place in Sri Lankan cuisine and Ayurveda.",
      imageUrl: "/documents/thingstodo/spicygarden.jpg",
    },
    {
      title: "Experience Dambulla’s Local Market",
      description: "Explore the lively Dambulla market, filled with fresh tropical fruits, vegetables, spices, and local produce. Experience the authentic colours, flavours, and everyday rhythm of Sri Lankan life.",
      imageUrl: "/documents/thingstodo/marketin.jpg",
    },
    {
      title: "Explore Rose Quartz Mountain",
      description: "Discover Jathika Namal Uyana, home to Sri Lanka’s famous rose quartz mountain and one of the island’s largest ironwood forests. Walk through the peaceful natural surroundings and experience a unique blend of geology, nature, and heritage.",
      imageUrl: "/documents/thingstodo/namaluyana.jpg",
    },
    {
      title: "Explore Popham’s Arboretum",
      description: "Wander through this tranquil woodland sanctuary and discover a diverse collection of tropical trees, plants, and wildlife. It’s a peaceful escape into the natural beauty of Dambulla.",
      imageUrl: "/documents/thingstodo/phorem.jpg",
    },
    {
      title: "Discover the Dambulla Museum",
      description: "Explore fascinating exhibits showcasing Sri Lanka’s ancient culture, Buddhist heritage, traditional art, and archaeological history. It offers a deeper glimpse into the stories and traditions surrounding Dambulla.",
      imageUrl: "/documents/thingstodo/dambulla (2).jpg",
    },
    
  ],
    
  },

   {
  slug: "pinnawala",

  name: "Pinnawala",

  region: "Cultural Triangle & Hill Country",

  description:
    "Pinnawala is one of Sri Lanka's most distinctive destinations for experiencing the island's magnificent elephants. Known for its long association with elephant care and conservation, Pinnawala gives travellers the opportunity to observe these gentle giants up close and experience memorable moments as they move through their daily routines. For visitors interested in Sri Lanka's wildlife and its deep cultural connection with elephants, Pinnawala offers a unique and meaningful stop between the island's western and central regions.",

  highlights: [
    "Pinnawala Elephant Orphanage",
    "Elephants by the River",
    "Elephant Care & Conservation",
  ],

  bestTime: "January to April",

  activities: [
    "Meet the Elephants of Pinnawala",
    "Watch the Elephants by the River",
    "Discover Elephant Care & Conservation",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Pinnawala Elephant Orphanage",
      imageUrl: "/documents/destination_explore_Image/pinnawala_elephants.jpg",
    },

    {
      title: "Elephants by the River",
      imageUrl: "/documents/destination_explore_Image/pinnawala_river.jpg",
    },

    {
      title: "Elephant Care & Conservation",
      imageUrl: "/documents/destination_explore_Image/pinnawala_conservation.jpg",
    },
  ],

  aboutText:
    "Pinnawala offers one of Sri Lanka's most memorable elephant-focused experiences, allowing travellers to observe these remarkable animals in a setting closely connected with their care and conservation. The destination is particularly known for its elephant orphanage and the unforgettable sight of elephants gathering around the river. For travellers seeking a deeper connection with Sri Lanka's wildlife and its long-standing relationship with elephants, Pinnawala provides a distinctive and meaningful experience.",

  imageUrl: "/documents/destination image/pinnawala.jpg",

  galleryImageUrl: "/documents/gallery image/pinnawala.jpg",

  articleSections: [
    {
      title: "The Elephants of Pinnawala",

      description:
        "Pinnawala is closely associated with Sri Lanka's Asian elephants, making it a special destination for travellers who want to experience these magnificent animals at close range. The elephants are at the heart of the destination, and seeing them together in their familiar surroundings creates a memorable introduction to one of Sri Lanka's most iconic animals. The experience offers travellers a chance to appreciate the size, character and gentle nature of these remarkable creatures.",

      imageUrl: "/documents/destination_explore_Image/pinnawala_elephants1.jpg",
    },

    {
      title: "Life Alongside the Herds",

      description:
        "One of the most memorable aspects of visiting Pinnawala is seeing elephants as they move through their daily routines, particularly around the river. Watching the herd gather, walk and interact with one another creates a more immersive experience than simply viewing wildlife from a distance. Surrounded by the tropical landscape of central Sri Lanka, these moments allow travellers to observe the natural behaviour and social character of the elephants in a distinctive setting.",

      imageUrl: "/documents/destination_explore_Image/pinnawala_river2.jpg",
    },

    {
      title: "Elephant Care & Conservation",

      description:
        "Beyond the memorable photographs, Pinnawala provides an opportunity to understand the importance of elephant care and conservation in Sri Lanka. Travellers can learn about the challenges surrounding the protection of Asian elephants and the role of dedicated care in supporting animals that require human assistance. For visitors with an interest in wildlife, Pinnawala offers a meaningful perspective on Sri Lanka's enduring relationship with its elephants.",

      imageUrl: "/documents/destination_explore_Image/pinnawala_conservation3.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Meet the Elephants of Pinnawala",

      description:
        "Spend time observing the magnificent elephants of Pinnawala and experience one of Sri Lanka's most distinctive wildlife encounters.",

      imageUrl: "/documents/thingstodo/pinnawala_elephants (2).jpg",
    },

    {
      title: "Watch the Elephants by the River",

      description:
        "Witness the memorable sight of elephants gathering and moving around the river, creating one of Pinnawala's most recognisable experiences.",

      imageUrl: "/documents/thingstodo/pinnawala_river_elephants.jpg",
    },

    {
      title: "Discover Elephant Care & Conservation",

      description:
        "Learn more about the care of elephants and Sri Lanka's ongoing efforts to protect and conserve these magnificent animals.",

      imageUrl: "/documents/thingstodo/elephant_conservation.jpg",
    },
  ],
},
  
{
  slug: "matale",

  name: "Matale",

  region: "Hill Country",

  description:
    "Matale is a captivating destination in Sri Lanka's central highlands, where mist-covered mountains, peaceful lakes, spice gardens and ancient heritage come together. From the dramatic landscapes of Riverston and the quiet beauty of Sembuwatta Lake to the historic Aluvihare Rock Temple and the fragrant spice-growing country surrounding the town, Matale offers a rewarding journey beyond Sri Lanka's better-known hill destinations. The region is ideal for travellers seeking nature, culture and scenic experiences in a quieter setting.",

  highlights: [
    "Riverston & Knuckles Mountains",
    "Sembuwatta Lake & Highland Scenery",
    "Spice Country & Ancient Heritage",
  ],

  bestTime: "January to April",

  activities: [
    "Explore Riverston",
    "Discover Pitawala Pathana",
    "Visit Sembuwatta Lake",
    "Explore Matale Spice Gardens",
    "Visit Aluvihare Rock Temple",
    "Scenic Drive Through the Knuckles Region",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Riverston & Knuckles Mountains",
      imageUrl: "/documents/destination_explore_Image/riverston.jpg",
    },

    {
      title: "Sembuwatta Lake & Highland Scenery",
      imageUrl: "/documents/destination_explore_Image/sembuwatta.jpg",
    },

    {
      title: "Spice Country & Ancient Heritage",
      imageUrl: "/documents/destination_explore_Image/matale_spice.jpg",
    },
  ],

  aboutText:
    "Matale reveals a quieter and more adventurous side of Sri Lanka's central highlands, combining dramatic mountain landscapes with ancient Buddhist heritage and the island's famous spice-growing traditions. The journey into the Riverston and Knuckles region brings misty peaks, open grasslands and panoramic viewpoints, while Sembuwatta Lake offers a peaceful escape surrounded by forest and highland scenery. Closer to Matale, spice gardens and the ancient Aluvihare Rock Temple add cultural depth to the experience, creating a destination that brings together nature, history and the distinctive character of Sri Lanka's central hills.",

  imageUrl: "/documents/destination image/matale.jpg",

  galleryImageUrl: "/documents/gallery image/matale.jpg",

  articleSections: [
    {
      title: "Into the Misty Mountains of Riverston",

      description:
        "The mountains around Riverston offer some of the most atmospheric landscapes in central Sri Lanka. As the road climbs through the hills, the scenery changes into a world of misty peaks, rolling grasslands, forests and wide-open valleys. The journey towards Riverston and Pitawala Pathana is as memorable as the viewpoints themselves, with changing weather and dramatic mountain scenery creating a sense of discovery at every turn. For travellers who enjoy walking, photography and untouched highland landscapes, this quieter corner of the Knuckles region offers an experience far removed from the island's busier tourist routes.",

      imageUrl: "/documents/destination_explore_Image/riverston1.jpg",
    },

    {
      title: "Sembuwatta & the Highland Landscapes",

      description:
        "Tucked among the hills of Matale, Sembuwatta Lake is surrounded by forests, tea-covered slopes and peaceful highland scenery. The journey to the lake winds through the countryside, revealing a softer side of Sri Lanka's mountains where cool air and green landscapes replace the bustle of the lowlands. The combination of the calm lake, surrounding hills and nearby tea country makes Sembuwatta an appealing escape for travellers looking to slow down and experience the natural beauty of the central highlands at an unhurried pace.",

      imageUrl: "/documents/destination_explore_Image/sembuwatta1.jpg",
    },

    {
      title: "Spices, Heritage & the Heart of Matale",

      description:
        "Beyond its mountains, Matale carries a rich cultural character shaped by centuries of Buddhist heritage and traditional spice cultivation. The ancient Aluvihare Rock Temple is closely connected with Sri Lanka's religious and literary history, while the surrounding countryside is known for fragrant cinnamon, pepper, cardamom and other spices that have long formed part of the island's identity. Visiting a spice garden and exploring the heritage of Aluvihare allows travellers to discover a more intimate side of Sri Lanka, where history, agriculture and everyday traditions remain closely connected.",

      imageUrl: "/documents/destination_explore_Image/matale_spice1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Riverston",

      description:
        "Travel into the misty highlands of Riverston and enjoy dramatic mountain scenery, cool air and panoramic views across the Knuckles region.",

      imageUrl: "/documents/thingstodo/riverston2.jpg",
    },

    {
      title: "Discover Pitawala Pathana",

      description:
        "Walk across the open grasslands of Pitawala Pathana and enjoy sweeping views over the surrounding valleys and mountain landscapes.",

      imageUrl: "/documents/thingstodo/pitawala_pathana.jpg",
    },

    {
      title: "Visit Sembuwatta Lake",

      description:
        "Discover the peaceful mountain lake surrounded by forests, tea country and the cool green landscapes of the Matale highlands.",

      imageUrl: "/documents/thingstodo/sembuwatta2.jpg",
    },

    {
      title: "Explore a Matale Spice Garden",

      description:
        "Discover the fragrant world of Sri Lankan spices and learn how cinnamon, pepper, cardamom and other spices are traditionally cultivated.",

      imageUrl: "/documents/thingstodo/matale_spice.jpg",
    },

    {
      title: "Visit Aluvihare Rock Temple",

      description:
        "Explore the ancient rock temple of Aluvihare, a significant Buddhist heritage site surrounded by the peaceful landscapes of Matale.",

      imageUrl: "/documents/thingstodo/aluvihare.jpg",
    },


  ],
},
  {
    slug: "kandy",
    name: "Kandy",
    region: "Central Highlands",
    description:
      "The last royal capital of Sri Lanka, set around a tranquil lake and home to the Temple of the Sacred Tooth Relic.",
    highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Traditional Kandyan dance"],
    bestTime: "Year-round",
    activities: ["Temple visits", "Lake walks", "Cultural performances"],
    motif: "temple",
     highlightCards: [
    { title: "Temple of the Tooth", imageUrl: "/documents/destination_explore_Image/toothofplace.jpg" },
    { title: "Royal Botanical Gardens", imageUrl: "/documents/destination_explore_Image/garden2.jpg" },
    { title: "Traditional Kandyan dance", imageUrl: "/documents/destination_explore_Image/perahera.jpg" },
  ],
  aboutText: "Write your own longer paragraph about this destination here — this is the article text shown next to the big photo.",
    imageUrl: "/documents/destination image/kandy.jpg",  
    galleryImageUrl: "/documents/gallery image/kandycity.jpg", 
     articleSections: [
  {
    title: "The Cultural Heart of Sri Lanka",
    description:
      "Kandy is a historic hill city surrounded by lush mountains and misty landscapes. Once the last royal capital of Sri Lanka, it remains one of the island’s most important cultural destinations, where ancient traditions and everyday life come together.",
    imageUrl: "/documents/destination_explore_Image/kandys.jpg",
  },
  {
    title: "A City of Sacred Heritage",
    description:
      "Kandy is home to the revered Temple of the Sacred Tooth Relic and is deeply connected with Sri Lanka’s Buddhist traditions. Visitors can experience centuries-old architecture, traditional ceremonies, Kandyan dance, music, and the city’s rich royal heritage.",
    imageUrl: "/documents/destination_explore_Image/perahe.jpg",
  },
  {
    title: "Nature Among the Hills",
    description:
      "Beyond its cultural treasures, Kandy is surrounded by beautiful tropical landscapes. From peaceful walks around Kandy Lake to the lush Royal Botanical Gardens and scenic mountain views, the city offers a refreshing balance of culture and nature.",
      imageUrl: "/documents/destination_explore_Image/pexels-melek-39604861.jpg",
  },
],
     thingsToDo: [
    {
      title: "Temple of the Sacred Tooth Relic",
      description: "Discover Sri Lanka’s most sacred Buddhist site, home to the revered Tooth Relic of the Buddha. Admire the beautiful Kandyan architecture and experience the temple’s peaceful daily rituals.",
     imageUrl: "/documents/thingstodo/kandy (2).jpg",
    },
    {
      title: "Kandy Lake Walk",
      description: "Take a leisurely walk beside the tranquil Kandy Lake, surrounded by the hills and historic heart of the city. Enjoy peaceful views while discovering the atmosphere of old Kandy.",
      imageUrl: "/documents/thingstodo/lakewalk.jpg",
    },
    {
      title: "Kandyan Cultural Dance",
      description: "Experience the vibrant traditions of the hill country through energetic Kandyan dances, traditional drumming, colourful costumes, and spectacular ceremonial performances.",
      imageUrl: "/documents/thingstodo/culturedance.jpg",
    },
    {
      title: "Gem Museum & Experience",
      description: "Discover Sri Lanka’s famous gemstone heritage through a fascinating introduction to precious stones, traditional gem cutting, and the craftsmanship behind the island’s renowned jewellery.",
      imageUrl: "/documents/thingstodo/gem.jpg",
    },
    {
      title: "Royal Botanical Gardens",
      description: "Wander through the lush Royal Botanical Gardens in Peradeniya, home to magnificent tropical plants, orchids, palms, and centuries-old trees. Enjoy a peaceful escape surrounded by nature.",
      imageUrl: "/documents/thingstodo/botnical.jpg",
    },
    {
      title: "Kandyan Arts & Crafts",
      description: "Discover the artistic traditions of the Kandyan region through traditional wood carving, painting, handcrafted items, and other forms of Sri Lankan craftsmanship.",
      imageUrl: "/documents/thingstodo/art.jpg",
    },
    {
      title: "Udawattakele Forest Walk",
      description: "Explore the peaceful forest reserve overlooking Kandy, once protected as part of the royal kingdom. Walk beneath dense tropical foliage while discovering the area’s rich birdlife and natural beauty.",
      imageUrl: "/documents/thingstodo/udawaththa.jpg",
    },
    {
      title: "Ayurvedic Massage & Spa",
      description: "Experience traditional Sri Lankan wellness through a relaxing Ayurvedic massage using natural herbal oils and time-honoured techniques designed to encourage deep relaxation and rejuvenation.",
      imageUrl: "/documents/thingstodo/ayurveda.jpg",
    },
     {
      title: "Kandy Local Market Tour",
      description: "Explore the lively Kandy Central Market and experience the colours, aromas, and everyday rhythm of local life. Discover fresh tropical produce, spices, tea, traditional crafts, and other local treasures while exploring the bustling market.",
      imageUrl: "/documents/thingstodo/city.jpg",
    },
    {
      title: "Batik & Handicraft Experience",
      description: "Discover the colourful world of Sri Lankan batik and traditional craftsmanship. Explore handcrafted textiles, intricate designs, and locally made creations while learning about the artistic traditions passed down through generations.",
      imageUrl: "/documents/thingstodo/batik.jpg",
    },
    {
      title: "Kandy National Museum",
      description: "Explore a fascinating collection of royal artefacts, traditional artwork, weapons, costumes, and historical objects that reveal the rich cultural heritage and royal history of the Kandyan Kingdom.",
      imageUrl: "/documents/thingstodo/Musium.jpg",
    },
    {
      title: "Viewpoint",
      description: "Enjoy panoramic views across Kandy from this scenic hilltop overlooking the city, surrounded by lush mountains and the iconic white Buddha statue. It is a beautiful spot for photography and taking in Kandy’s landscape.",
      imageUrl: "/documents/thingstodo/viewpoint.jpg",
    },
  ],
    
  },
 
  {
  slug: "nuwara-eliya",

  name: "Nuwara Eliya",

  region: "Central Highlands",

  description:
    "A cool and misty highland town surrounded by emerald tea plantations, colonial charm, waterfalls, and breathtaking mountain landscapes.",

  highlights: [
    "Tea Plantations",
    "Horton Plains & World's End",
    "Gregory Lake",
  ],

  bestTime: "January to december",

  activities: [
    "Tea Plantation Tours",
    "Horton Plains Hikes",
    "Gregory Lake",
    "Botanical Gardens",
    "Waterfall Exploration",
    "Highland Scenic Drives",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Tea Plantations",
      imageUrl: "/documents/destination_explore_Image/nuwara_tea.jpg",
    },
    {
      title: "Horton Plains & World's End",
      imageUrl: "/documents/destination_explore_Image/horton.jpg",
    },
    {
      title: "Gregory Lake",
      imageUrl: "/documents/destination_explore_Image/gregory.jpg",
    },
  ],

  aboutText:
    "High in Sri Lanka’s Central Highlands, Nuwara Eliya is a cool and misty mountain destination surrounded by rolling tea plantations, lush valleys, waterfalls, and scenic highland landscapes. Known for its colonial charm and refreshing climate, the town offers a peaceful escape filled with nature, tea culture, and memorable outdoor experiences.",

  imageUrl: "/documents/destination image/nuwaraeliya.jpg",

  galleryImageUrl: "/documents/gallery image/nuwaraeliya.jpg",

  articleSections: [
    {
      title: "The Highland Charm of Nuwara Eliya",

      description:
        "High in Sri Lanka’s Central Highlands, Nuwara Eliya is a cool and misty mountain town surrounded by green valleys, tea-covered slopes, waterfalls, and quiet highland landscapes. Often known as “Little England,” the town reflects its colonial past through its architecture, gardens, old buildings, and distinctive English-inspired atmosphere. Its cool climate and peaceful surroundings have made Nuwara Eliya one of Sri Lanka’s most beloved hill-country destinations.",

      imageUrl: "/documents/destination_explore_Image/nuwara_city.jpg",
    },

    {
      title: "Life in Sri Lanka’s Tea Country",

      description:
        "Nuwara Eliya lies at the heart of Sri Lanka’s famous tea-growing region, where emerald tea estates cover the surrounding mountains and valleys. A visit to the area offers an opportunity to see tea being cultivated and carefully processed, learn about the journey from fresh tea leaf to Ceylon Tea, and enjoy a freshly brewed cup surrounded by spectacular highland scenery. Beyond the plantations, the town’s markets, farms, gardens, and local communities offer a glimpse into the slower rhythm of life in the mountains.",

      imageUrl: "/documents/destination_explore_Image/teafactory.jpg",
    },

    {
      title: "Nature, Adventure & Highland Escapes",

      description:
        "The landscapes around Nuwara Eliya offer much more than scenic views. Visitors can explore the cloud forests and grasslands of Horton Plains, walk towards the dramatic World’s End viewpoint, discover waterfalls and botanical gardens, or enjoy peaceful moments around Gregory Lake. Scenic drives through the surrounding tea country reveal misty mountains, winding roads, plantation villages, and cascading waterfalls, making Nuwara Eliya an ideal destination for travellers seeking nature, fresh mountain air, outdoor experiences, and a slower pace of discovery.",

      imageUrl: "/documents/destination_explore_Image/highland.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Tea Plantation & Factory Tour",

      description:
        "Explore the beautiful tea country surrounding Nuwara Eliya and discover how Ceylon Tea is grown, harvested, processed, and prepared. Enjoy panoramic views across the emerald plantations while learning about Sri Lanka’s world-famous tea heritage.",

      imageUrl: "/documents/thingstodo/nuwara_tea (2).jpg",
    },

    {
      title: "Horton Plains & World's End",

      description:
        "Explore the misty grasslands and cloud forests of Horton Plains National Park before walking towards the dramatic World’s End viewpoint. Enjoy breathtaking highland scenery and discover one of Sri Lanka’s most remarkable natural landscapes.",

      imageUrl: "/documents/thingstodo/horton1.jpg",
    },

    {
      title: "Gregory Lake Experience",

      description:
        "Enjoy the peaceful surroundings of Gregory Lake, surrounded by green hills and cool highland air. Take a relaxing lakeside walk or enjoy a gentle boat ride while taking in the scenic beauty of Nuwara Eliya.",

      imageUrl: "/documents/thingstodo/gregory (2).jpg",
    },

    {
      title: "Hakgala Botanical Garden",

      description:
        "Wander through the beautifully landscaped Hakgala Botanical Garden, home to colourful flowers, exotic plants, towering trees, and peaceful walking paths. Enjoy a refreshing experience surrounded by the natural beauty of the highlands.",

      imageUrl: "/documents/thingstodo/hakgala.jpg",
    },

    {
      title: "Victoria Park",

      description:
        "Take a peaceful walk through Victoria Park, a beautifully maintained green space in the heart of Nuwara Eliya. Discover colourful flowers, mature trees, quiet paths, and a variety of highland birds.",

      imageUrl: "/documents/thingstodo/victoria.jpg",
    },

    
    

    {
      title: "Colonial Nuwara Eliya",

      description:
        "Discover the distinctive colonial character of Nuwara Eliya through historic buildings, elegant hotels, churches, gardens, and quiet streets. Experience the unique atmosphere that earned the town its nickname, “Little England.”",

      imageUrl: "/documents/thingstodo/colonial.jpg",
    },

    {
      title: "Strawberry Farm Experience",

      description:
        "Visit a highland strawberry farm and discover how strawberries are cultivated in Nuwara Eliya’s cool climate. Enjoy the peaceful farm setting and taste fresh local strawberries and strawberry-based treats.",

      imageUrl: "/documents/thingstodo/farm.jpg",
    },

    {
      title: "Moon Plains",

      description:
        "Travel into the open highland landscapes of Moon Plains and enjoy sweeping views across the surrounding mountains and valleys. The peaceful scenery makes it a memorable spot for photography and nature lovers.",

      imageUrl: "/documents/thingstodo/moon.avif",
    },

    {
      title: "Ambewela Farm Experience",

      description:
        "Visit the scenic Ambewela area and discover Sri Lanka’s highland dairy farming landscape. Surrounded by green hills and cool mountain air, the farm experience offers a different perspective on life in the Central Highlands.",

      imageUrl: "/documents/thingstodo/ambewala.jpg",
    },

    {
      title: "Nanu Oya Scenic Train Journey",

      description:
        "Experience one of Sri Lanka’s most memorable railway journeys through misty mountains, tea plantations, deep valleys, and lush highland scenery. The journey offers a beautiful way to experience the changing landscapes around Nuwara Eliya.",

      imageUrl: "/documents/thingstodo/ride.jpg",
    },

   {
  title: "Ramboda Falls",
  description:
    "Discover the spectacular Ramboda Falls, surrounded by lush mountain scenery and misty highland landscapes. Enjoy the refreshing atmosphere and beautiful views of one of the Central Highlands’ most scenic waterfalls.",
  imageUrl: "/documents/thingstodo/ramboda.jpg",
},
{
  title: "Seetha Amman Temple",
  description:
    "Visit the colourful Seetha Amman Temple, a sacred site associated with the Ramayana and the story of Sita Devi. Explore the temple, the nearby stream, and the surrounding landscape while discovering the legends connected with this peaceful place.",
  imageUrl: "/documents/thingstodo/seetha_amman.jpg",
},
{
  title: "Sri Bhaktha Hanuman Temple",
  description:
    "Visit the Sri Bhaktha Hanuman Temple in the hills of Ramboda, an important stop along Sri Lanka’s Ramayana Trail. Admire the impressive Hanuman statue, experience the peaceful temple surroundings, and enjoy panoramic views across the Kotmale Valley.",
  imageUrl: "/documents/thingstodo/bhaktha_hanuman.jpg",
},
  ],
},

{
  slug: "kitulgala",

  name: "Kitulgala",

  region: "Hill Country",

  description:
    "Kitulgala is a lush adventure destination in Sri Lanka's western foothills, surrounded by rainforest, winding rivers and dramatic tropical landscapes. Best known for white-water rafting on the Kelani River, Kitulgala offers an exciting combination of outdoor adventure and untouched nature. Beyond the river, travellers can explore rainforest trails, discover hidden waterfalls and experience the peaceful atmosphere of one of Sri Lanka's most beautiful natural regions, making Kitulgala an ideal escape for those seeking adventure away from the island's busier tourist routes.",

  highlights: [
    "Kelani River & White-Water Rafting",
    "Kitulgala Rainforest",
    "Adventure & Nature Experiences",
  ],

  bestTime: "January to April",

  activities: [
    "White-Water Rafting on the Kelani River",
    "Explore Kitulgala Rainforest",
    "Rainforest Trekking",
    "Discover Hidden Waterfalls",
    "Caving & Cave Exploration",
    "Scenic River & Countryside Experience",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Kelani River & White-Water Rafting",
      imageUrl: "/documents/destination_explore_Image/kitulgala_rafting.jpg",
    },

    {
      title: "Kitulgala Rainforest",
      imageUrl: "/documents/destination_explore_Image/kitulgala_rainforest.jpg",
    },

    {
      title: "Adventure & Nature Experiences",
      imageUrl: "/documents/destination_explore_Image/kitulgala_nature.jpg",
    },
  ],

  aboutText:
    "Kitulgala brings together the wild beauty of Sri Lanka's rainforest and the excitement of outdoor adventure. The Kelani River flows through the heart of the region, creating ideal conditions for white-water rafting while the surrounding forests offer opportunities for trekking, birdwatching and discovering waterfalls and caves. With its lush landscapes, rushing rivers and adventurous character, Kitulgala provides a refreshing contrast to Sri Lanka's cultural cities and coastal resorts, making it an excellent choice for travellers who want to experience the island's natural side in a more active way.",

  imageUrl: "/documents/destination image/kithulgala.jpg",

  galleryImageUrl: "/documents/gallery image/kithulgala.jpg",

  articleSections: [
    {
      title: "Adventure on the Kelani River",

      description:
        "The Kelani River is at the heart of Kitulgala's adventurous spirit. Surrounded by dense tropical vegetation and steep forested hills, its flowing waters create an exhilarating setting for white-water rafting and other river experiences. The journey through the rapids combines excitement with beautiful natural scenery, allowing travellers to experience one of Sri Lanka's most memorable outdoor adventures while travelling through a landscape that remains wonderfully green and untouched.",

      imageUrl: "/documents/destination_explore_Image/kitulgala_rafting.jpg",
    },

    {
      title: "Into the Kitulgala Rainforest",

      description:
        "Beyond the river, Kitulgala opens into a rich rainforest environment filled with towering trees, streams, birds and hidden corners waiting to be explored. Walking through the forest reveals a quieter side of the destination, where the sounds of flowing water and wildlife replace the noise of busy towns. For travellers who enjoy nature, photography and immersive outdoor experiences, the rainforest provides a beautiful opportunity to discover the biodiversity and atmosphere of Sri Lanka's wet zone.",

      imageUrl: "/documents/destination_explore_Image/kitulgala_rainforest1.jpg",
    },

    {
      title: "A World of Outdoor Discovery",

      description:
        "Kitulgala offers more than a single adventure, with caves, waterfalls, forest trails and scenic rivers creating a varied experience for active travellers. The surrounding countryside can be explored at a relaxed pace between more adventurous activities, while the combination of rainforest and river landscapes creates a strong sense of being immersed in nature. Whether travelling for an adrenaline-filled day or a deeper connection with Sri Lanka's wilderness, Kitulgala provides an experience that feels distinctly different from the island's more traditional destinations.",

      imageUrl: "/documents/destination_explore_Image/kitulgala_nature1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Go White-Water Rafting",

      description:
        "Experience the rapids of the Kelani River on one of Sri Lanka's most exciting outdoor adventures, surrounded by lush rainforest and dramatic river scenery.",

      imageUrl: "/documents/thingstodo/kitulgala_rafting2.jpg",
    },

    {
      title: "Explore the Kitulgala Rainforest",

      description:
        "Venture into the lush rainforest surrounding Kitulgala and discover a rich natural environment filled with tropical vegetation, streams and wildlife.",

      imageUrl: "/documents/thingstodo/kitulgala_rainforest2.jpg",
    },

    {
      title: "Trek Through the Forest",

      description:
        "Follow nature trails through the wet-zone forest and experience the peaceful atmosphere and biodiversity of Kitulgala's surrounding wilderness.",

      imageUrl: "/documents/thingstodo/kitulgala_trekking1.jpg",
    },

    {
      title: "Discover Hidden Waterfalls",

      description:
        "Explore the forested surroundings of Kitulgala in search of beautiful waterfalls and quiet natural pools tucked away among the greenery.",

      imageUrl: "/documents/thingstodo/kitulgala_waterfall2.jpg",
    },

    {
      title: "Explore Kitulgala's Caves",

      description:
        "Discover the caves and rocky landscapes hidden within the forests around Kitulgala for a more adventurous side of the destination.",

      imageUrl: "/documents/thingstodo/kitulgala_caves.jpg",
    },

    {
      title: "Enjoy a Scenic River Experience",

      description:
        "Slow down beside the Kelani River and take in the peaceful combination of flowing water, rainforest and surrounding mountain scenery.",

      imageUrl: "/documents/thingstodo/kitulgala_river.jpg",
    },
  ],
},

{
  slug: "sinharaja",

  name: "Sinharaja",

  region: "Nature & Wildlife",

  description:
    "Sinharaja is Sri Lanka's most celebrated rainforest destination, a vast tropical wilderness filled with ancient trees, endemic birds, rare wildlife and hidden streams. Recognised for its exceptional biodiversity, the forest offers travellers an immersive experience far from the island's busy tourist routes. Guided walks lead deep into the rainforest, where the sounds of birds, flowing water and dense tropical vegetation create a completely different side of Sri Lanka. For nature lovers, photographers and travellers seeking a genuine connection with the island's wilderness, Sinharaja is an unforgettable journey into the heart of the rainforest.",

  highlights: [
    "Sinharaja Rainforest",
    "Endemic Wildlife & Birdlife",
    "Rainforest Trekking & Nature",
  ],

  bestTime: "January to April",

  activities: [
    "Explore Sinharaja Rainforest",
    "Guided Rainforest Trek",
    "Birdwatching",
    "Discover Endemic Wildlife",
    "Explore Forest Streams & Waterfalls",
    "Rainforest Photography",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Sinharaja Rainforest",
      imageUrl: "/documents/destination_explore_Image/sinharaja_rainforest.jpg",
    },

    {
      title: "Endemic Wildlife & Birdlife",
      imageUrl: "/documents/destination_explore_Image/sinharaja_birdlife.jpg",
    },

    {
      title: "Rainforest Trekking & Nature",
      imageUrl: "/documents/destination_explore_Image/sinharaja_trekking.jpg",
    },
  ],

  aboutText:
    "Sinharaja offers one of Sri Lanka's most immersive nature experiences, taking travellers into an ancient rainforest ecosystem where dense vegetation, flowing streams and remarkable biodiversity surround every trail. The forest is particularly valuable for its endemic wildlife and bird species, many of which can be encountered only in Sri Lanka. Exploring Sinharaja with an experienced local guide allows travellers to discover the hidden details of the forest while gaining a deeper appreciation for one of the island's most important natural treasures.",

  imageUrl: "/documents/destination image/sinharaja.jpg",

  galleryImageUrl: "/documents/gallery image/sinharaja.jpg",

  articleSections: [
    {
      title: "Into the Heart of Sinharaja",

      description:
        "Walking into Sinharaja feels like entering another world, where towering trees form a dense green canopy above trails surrounded by ferns, vines and tropical vegetation. The rainforest is alive with the sounds of birds, insects and flowing streams, while mist and changing light give the forest an atmospheric quality throughout the day. Exploring with a knowledgeable guide reveals details that can easily be missed, from tiny forest creatures to ancient trees and the interconnected life of this remarkable ecosystem.",

      imageUrl: "/documents/destination_explore_Image/sinharaja_rainforest1.jpg",
    },

    {
      title: "A World of Endemic Wildlife",

      description:
        "Sinharaja is one of Sri Lanka's most important habitats for endemic wildlife, making it a particularly rewarding destination for birdwatchers and nature enthusiasts. The forest is home to many species found nowhere else in the world, and patient observation can reveal colourful birds, reptiles, amphibians and other creatures hidden among the dense vegetation. Rather than offering wildlife encounters from a vehicle, Sinharaja invites travellers to slow down, listen carefully and experience the forest as a living ecosystem.",

      imageUrl: "/documents/destination_explore_Image/sinharaja_birdlife1.jpg",
    },

    {
      title: "Walking Through Sri Lanka's Rainforest",

      description:
        "A journey through Sinharaja is as much about the atmosphere of the forest as the wildlife itself. Trails cross small streams, pass beneath enormous trees and lead through layers of vegetation shaped by centuries of tropical growth. The experience is active yet deeply peaceful, offering travellers a chance to disconnect from busy routes and spend meaningful time surrounded by nature. For those seeking an authentic rainforest experience in Sri Lanka, Sinharaja provides a rare opportunity to explore one of the island's most precious natural landscapes.",

      imageUrl: "/documents/destination_explore_Image/sinharaja_trekking1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Sinharaja Rainforest",

      description:
        "Enter the ancient rainforest and discover a world of towering trees, dense vegetation, flowing streams and remarkable biodiversity.",

      imageUrl: "/documents/thingstodo/sinharaja_rainforest2.jpg",
    },

    {
      title: "Take a Guided Rainforest Trek",

      description:
        "Follow forest trails with a knowledgeable local guide and discover the hidden wildlife, plants and natural details of Sinharaja.",

      imageUrl: "/documents/thingstodo/sinharaja_trekking2.jpg",
    },

    {
      title: "Go Birdwatching",

      description:
        "Look and listen for Sri Lanka's endemic birds as they move through the dense canopy and forest surroundings.",

      imageUrl: "/documents/thingstodo/sinharaja_birdwatching2.jpg",
    },

    {
      title: "Discover Endemic Wildlife",

      description:
        "Explore the forest slowly and observe the unique birds, reptiles, amphibians and other wildlife that make Sinharaja their home.",

      imageUrl: "/documents/thingstodo/sinharaja_wildlife.jpg",
    },

    {
      title: "Explore Forest Streams & Waterfalls",

      description:
        "Follow rainforest trails towards clear streams and small waterfalls hidden among the lush greenery of the forest.",

      imageUrl: "/documents/thingstodo/sinharaja_waterfall.jpg",
    },

    {
      title: "Experience Rainforest Photography",

      description:
        "Capture the textures, wildlife, dramatic greenery and atmospheric landscapes that make Sinharaja one of Sri Lanka's most distinctive natural destinations.",

      imageUrl: "/documents/thingstodo/sinharaja_photography.jpg",
    },
  ],
},

   {
  slug: "ella",

  name: "Ella",

  region: "Uva Highlands",

  description:
    "A breathtaking mountain town surrounded by emerald tea plantations, misty valleys, dramatic viewpoints, waterfalls, and some of Sri Lanka’s most memorable highland experiences.",

  highlights: [
    "Nine Arch Bridge",
    "Little Adam's Peak",
    "Ella Rock",
  ],

  bestTime: "January to March",

  activities: [
    "Nine Arch Bridge Visit",
    "Little Adam's Peak Hike",
    "Ella Rock Trek",
    "Tea Plantation Tours",
    "Waterfall Exploration",
    "Scenic Train Journeys",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Nine Arch Bridge",
      imageUrl: "/documents/destination_explore_Image/nine_arch.jpg",
    },
    {
      title: "Little Adam's Peak",
      imageUrl: "/documents/destination_explore_Image/little_adams.jpg",
    },
    {
      title: "Ella Rock",
      imageUrl: "/documents/destination_explore_Image/ella_rock.jpg",
    },
  ],

  aboutText:
    "Nestled among the misty mountains of Sri Lanka’s Uva Highlands, Ella is a peaceful mountain destination surrounded by emerald tea plantations, dramatic valleys, forest-covered slopes, and breathtaking viewpoints. Its cool climate and relaxed atmosphere make it a refreshing escape from the tropical lowlands, while the surrounding countryside offers hiking trails, waterfalls, railway landmarks, tea estates, and quiet villages. From scenic mountain walks and iconic railway experiences to peaceful moments overlooking the valleys, Ella offers a beautiful combination of nature, adventure, culture, and highland charm.",

  imageUrl: "/documents/destination image/ella.jpg",

  galleryImageUrl: "/documents/gallery image/elle.jpg",

  articleSections: [
    {
      title: "The Mountain Charm of Ella",

      description:
        "Nestled among the misty mountains of Sri Lanka’s Uva Highlands, Ella is a peaceful mountain destination surrounded by emerald tea plantations, dramatic valleys, forest-covered slopes, and breathtaking viewpoints. Its cool climate and relaxed atmosphere make it a refreshing escape from the tropical lowlands, while the small town offers a charming blend of local life, cafés, boutique stays, and scenic surroundings. Beyond the town itself, winding mountain roads lead to beautiful landscapes, hidden waterfalls, tea estates, and quiet villages, creating an experience that feels both adventurous and wonderfully unhurried.",

      imageUrl: "/documents/destination_explore_Image/ella_mountains.jpg",
    },

    {
      title: "Tea Country, Railway Heritage & Highland Life",

      description:
        "Ella is deeply connected to Sri Lanka’s famous tea country, where lush plantations cover the surrounding hills and traditional tea estates continue to shape everyday life. Travellers can discover how Ceylon Tea is grown and produced while experiencing the peaceful rhythm of life in the highlands. The region is also home to some of Sri Lanka’s most memorable railway landscapes, including the iconic Nine Arch Bridge and the historic railway route through the mountains. A journey by train through misty valleys, tea-covered slopes, tunnels, bridges, and small hill-country communities offers a unique way to experience the natural beauty and heritage of Ella.",

      imageUrl: "/documents/destination_explore_Image/tea_railway.jpg",
    },

    {
      title: "Nature, Adventure & Scenic Escapes",

      description:
        "For travellers who love nature and outdoor experiences, Ella offers an exceptional combination of hiking trails, waterfalls, viewpoints, forests, and scenic mountain landscapes. Walk to Little Adam’s Peak for panoramic views, trek towards Ella Rock through tea country, discover the dramatic Ravana Falls and explore the legends surrounding Ravana Cave, or simply enjoy a peaceful walk through the surrounding plantations and villages. From adventurous hikes and scenic railway journeys to quiet moments overlooking the mountains, Ella provides a variety of experiences for travellers seeking nature, discovery, photography, relaxation, and authentic highland experiences in Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/ella_nature.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Nine Arch Bridge",

      description:
        "Discover Ella’s iconic Nine Arch Bridge, an impressive railway viaduct surrounded by lush jungle and tea-covered hills. Walk to the viewpoints around the bridge and, when a train passes, experience one of the most memorable railway scenes in Sri Lanka.",

      imageUrl: "/documents/thingstodo/nine_arch1.jpg",
    },

    {
      title: "Little Adam's Peak",

      description:
        "Take an enjoyable walk through tea plantations to the summit of Little Adam’s Peak and enjoy sweeping views across Ella’s green mountains and valleys. The relatively gentle hike makes it one of the most accessible ways to experience the spectacular scenery around Ella.",

      imageUrl: "/documents/thingstodo/little_adams1.jpg",
    },

    {
      title: "Ella Rock",

      description:
        "Embark on a rewarding hike to Ella Rock through tea plantations, forest paths, and beautiful highland scenery. The trail offers a more adventurous experience than Little Adam’s Peak, with spectacular panoramic views across the surrounding mountains and valleys from the summit.",

      imageUrl: "/documents/thingstodo/ella_rock2.jpg",
    },

    {
      title: "Ravana Falls",

      description:
        "Visit the dramatic Ravana Falls, one of the most recognisable waterfalls in the Ella region. Surrounded by lush mountain scenery, the waterfall is a refreshing stop along the road and is closely connected with the ancient legends of King Ravana and the Ramayana.",

      imageUrl: "/documents/thingstodo/ravana_falls.jpg",
    },

    {
      title: "Ravana Cave",

      description:
        "Explore the historic Ravana Cave, a natural cave associated with the legendary story of King Ravana and Sita. Set within the mountains above Ella, the site combines natural scenery, local traditions, and the fascinating legends that form part of Sri Lanka’s cultural heritage.",

      imageUrl: "/documents/thingstodo/ravana_cave.jpg",
    },

    {
      title: "Ella Tea Plantation Experience",

      description:
        "Explore the tea-growing landscapes surrounding Ella and discover the story behind Sri Lanka’s world-famous Ceylon Tea. Visit a working tea estate or factory, learn about cultivation and production, and enjoy freshly prepared tea while surrounded by beautiful mountain scenery.",

      imageUrl: "/documents/thingstodo/ella_tea.jpg",
    },

    {
      title: "Scenic Highland Train Journey",

      description:
        "Experience one of Sri Lanka’s most memorable railway journeys through misty mountains, emerald tea plantations, deep valleys, tunnels, bridges, and small highland communities. The journey offers a wonderful opportunity to slow down and appreciate the changing landscapes of Sri Lanka’s hill country.",

      imageUrl: "/documents/thingstodo/train.jpg",
    },

    {
      title: "Ella Gap Viewpoint",

      description:
        "Enjoy breathtaking views from Ella Gap, where the mountains open towards the southern plains. On clear days, the dramatic contrast between the surrounding peaks, distant lowlands, and endless green landscapes creates one of Ella’s most beautiful panoramic experiences.",

      imageUrl: "/documents/thingstodo/ella_gap.jpg",
    },

    {
      title: "Demodara Railway Loop",

      description:
        "Discover the fascinating Demodara Railway Loop, an impressive piece of railway engineering where the railway line curves around the landscape before passing beneath itself. The experience offers a closer look at the railway heritage that makes Sri Lanka’s hill country so unique.",

      imageUrl: "/documents/thingstodo/demodara.jpg",
    },

    {
      title: "Flying Ravana Adventure",

      description:
        "Add an element of adventure to your Ella experience with an exciting zipline journey across the mountain landscape. Soar above the green valleys and tea-covered hills while enjoying spectacular aerial views of the surrounding highlands.",

      imageUrl: "/documents/thingstodo/flying_ravana.jpg",
    },

   
   
    {
      title: "Ayurvedic Massage & Wellness",

      description:
        "Slow down and relax with a traditional Ayurvedic wellness experience in the peaceful surroundings of Ella. Enjoy a soothing massage or wellness treatment inspired by Sri Lanka’s ancient healing traditions after a day of exploring the mountains.",

      imageUrl: "/documents/thingstodo/ayurveda (2).jpg",
    },

    {
      title: "Diyaluma Falls Excursion",

      description:
        "Take a scenic excursion from Ella to Diyaluma Falls, one of Sri Lanka’s spectacular highland waterfalls. Surrounded by dramatic mountains and open landscapes, the falls offer a memorable nature experience for travellers looking to explore beyond Ella’s immediate surroundings.",

      imageUrl: "/documents/thingstodo/diyaluma.jpg",
    },
  ],
},
  {
  slug: "yala",

  name: "Yala",

  region: "Southeastern Sri Lanka",

  description:
    "A wild and captivating corner of Sri Lanka where vast forests, open plains, lagoons, rocky landscapes, and coastal wilderness provide a remarkable setting for unforgettable wildlife experiences.",

  highlights: [
    "Yala Wildlife Safari",
    "Leopard Encounters",
    "Yala's Wilderness & Landscapes",
  ],

  bestTime: "February to June",

  activities: [
    "Wildlife Safaris",
    "Leopard Watching",
    "Elephant Encounters",
    "Birdwatching",
    "Wildlife Photography",
    "Wilderness Exploration",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Yala Wildlife Safari",
      imageUrl: "/documents/destination_explore_Image/yala_safari.jpg",
    },
    {
      title: "Leopard Encounters",
      imageUrl: "/documents/destination_explore_Image/yala_leopard.jpg",
    },
    {
      title: "Yala's Wilderness & Landscapes",
      imageUrl: "/documents/destination_explore_Image/yala_wilderness.jpg",
    },
  ],

  aboutText:
    "On the southeastern coast of Sri Lanka, Yala offers an extraordinary encounter with the island’s wild side. The region is shaped by dry forests, open grasslands, lagoons, rocky outcrops, and coastal landscapes that provide a natural home for an impressive variety of wildlife. Best known for its leopard sightings, Yala also offers opportunities to encounter elephants, sloth bears, crocodiles, deer, buffalo, monkeys, and an incredible diversity of birdlife. A safari through this beautiful wilderness is not simply about spotting animals, but about experiencing the atmosphere, silence, landscapes, and unpredictability of nature.",

  imageUrl: "/documents/destination image/yala.jpg",

  galleryImageUrl: "/documents/gallery image/yala1.jpg",

  articleSections: [
    {
      title: "Into the Wild: Discovering Yala",

      description:
        "Located in the southeastern corner of Sri Lanka, Yala is a remarkable wilderness destination where forests, grasslands, lagoons, rocky landscapes, and coastal habitats come together. Far from the busy atmosphere of the island’s cities, the park offers a sense of space, silence, and natural freedom. As a protected landscape, Yala provides a home for a remarkable variety of wildlife and gives travellers the opportunity to experience Sri Lanka in its most untamed form. Every safari is different, with changing landscapes, animal movements, bird calls, and unexpected encounters creating a truly authentic wilderness experience.",

      imageUrl: "/documents/destination_explore_Image/yala_landscape.jpg",
    },

    {
      title: "The Wildlife of Yala",

      description:
        "Yala is celebrated for its rich wildlife and is particularly renowned for opportunities to encounter the Sri Lankan leopard. Alongside these elusive big cats, the park is home to elephants, sloth bears, crocodiles, spotted deer, water buffalo, wild boar, monkeys, and many other species. Its lagoons, wetlands, forests, and open plains also attract an impressive variety of resident and migratory birds. Wildlife sightings can never be guaranteed, which is part of what makes a safari so special; every journey into the park brings the possibility of discovering something unexpected in its natural environment.",

      imageUrl: "/documents/destination_explore_Image/yala_wildlife.jpg",
    },

    {
      title: "Safari, Nature & the Southern Wilderness",

      description:
        "A Yala experience begins early, often with the soft light of the morning revealing the first signs of life across the wilderness. Travellers can explore the park by safari jeep, following natural tracks through forests, grasslands, lagoons, and rocky terrain while watching for wildlife along the way. From quiet moments beside a lagoon filled with birds to distant elephant sightings and the possibility of seeing a leopard moving through the landscape, the experience is shaped by patience and nature. Beyond the animals themselves, Yala’s dramatic scenery and peaceful atmosphere make it an unforgettable escape for travellers seeking adventure, photography, and a deeper connection with Sri Lanka’s wild landscapes.",

      imageUrl: "/documents/destination_explore_Image/yala_safari (2).jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Yala National Park Safari",

      description:
        "Explore the wilderness of Yala National Park on a guided safari through forests, grasslands, lagoons, and rocky landscapes. Travel by safari jeep in search of Sri Lanka’s remarkable wildlife while experiencing the changing scenery and peaceful atmosphere of the park.",

      imageUrl: "/documents/thingstodo/yala_safari1.jpg",
    },

    {
      title: "Leopard Watching",

      description:
        "Yala is internationally known for its opportunities to encounter the Sri Lankan leopard in its natural habitat. Join an experienced safari guide and explore the park's different landscapes while patiently watching for these elusive and powerful big cats.",

      imageUrl: "/documents/thingstodo/yala_leopard (2).jpg",
    },

    {
      title: "Elephant Encounters",

      description:
        "Look out for Sri Lankan elephants moving through the forests, grasslands, and open areas of Yala. Seeing these magnificent animals in their natural surroundings can be one of the most memorable moments of a wildlife safari.",

      imageUrl: "/documents/thingstodo/yala_elephant.jpg",
    },

    {
      title: "Morning Wildlife Safari",

      description:
        "Begin the day with an early morning safari as the wilderness comes alive. The cooler hours often provide a beautiful atmosphere for exploring the park, watching birds, and searching for wildlife against the soft morning light.",

      imageUrl: "/documents/thingstodo/yala_morning.jpg",
    },

    {
      title: "Sunset Safari",

      description:
        "Explore Yala during the softer light of the late afternoon and watch the wilderness transform as the sun begins to set. The warm landscape, changing shadows, and peaceful atmosphere create a beautiful setting for wildlife observation and photography.",

      imageUrl: "/documents/thingstodo/yala_sunset.jpg",
    },

    {
      title: "Birdwatching",

      description:
        "Discover the remarkable birdlife of Yala across its forests, wetlands, lagoons, and open landscapes. From colourful resident species to seasonal visitors, the park offers rewarding opportunities for birdwatchers and nature enthusiasts.",

      imageUrl: "/documents/thingstodo/yala_birds.jpg",
    },

    {
      title: "Yala's Lagoons & Wetlands",

      description:
        "Explore the peaceful lagoons and wetland habitats scattered throughout Yala. These water-rich landscapes attract birds, crocodiles, elephants, and other wildlife while creating some of the most beautiful and atmospheric scenery within the park.",

      imageUrl: "/documents/thingstodo/yala_lagoon.jpg",
    },

    {
      title: "Wildlife Photography",

      description:
        "Capture the landscapes and wildlife of Yala through a dedicated photography experience. From leopards and elephants to birds, lagoons, and dramatic natural scenery, the park offers countless opportunities for memorable wildlife images.",

      imageUrl: "/documents/thingstodo/yala_photography.jpg",
    },

    {
      title: "Yala Wilderness Landscapes",

      description:
        "Experience the diverse landscapes that make Yala unique, from dry forests and open plains to rocky outcrops, lagoons, and coastal environments. Even between wildlife sightings, the changing scenery offers a fascinating glimpse into Sri Lanka’s southern wilderness.",

      imageUrl: "/documents/thingstodo/yala_landscape2.jpg",
    },

    {
      title: "Wilderness Camping Experience",

      description:
        "Spend time close to nature with a carefully arranged wilderness stay around Yala. Enjoy peaceful surroundings, open skies, and the atmosphere of Sri Lanka’s southern wilderness while combining comfort with a deeper connection to nature.",

      imageUrl: "/documents/thingstodo/yala_camping.jpg",
    },
  ],
},
{
  slug: "udawalawe",

  name: "Udawalawe",

  region: "Nature & Wildlife",

  description:
    "Udawalawe is one of Sri Lanka's most rewarding wildlife destinations, famous for its large populations of wild elephants and the expansive landscapes of Udawalawe National Park. Open grasslands, reservoirs, forests and wetlands create a beautiful setting for safari, where travellers may encounter elephants, buffalo, crocodiles, deer and a variety of birdlife. The region is also home to the Elephant Transit Home, where orphaned young elephants are cared for before being prepared for release back into the wild. For travellers seeking an authentic wildlife experience surrounded by Sri Lanka's natural landscapes, Udawalawe offers an unforgettable journey into the island's wild heart.",

  highlights: [
    "Udawalawe National Park & Wildlife Safari",
    "Wild Elephants & Diverse Wildlife",
    "Elephant Transit Home & Conservation",
  ],

  bestTime: "May to September",

  activities: [
    "Wildlife Safari in Udawalawe National Park",
    "See Wild Elephants in Their Natural Habitat",
    "Visit the Elephant Transit Home",
    "Explore the Udawalawe Reservoir",
    "Birdwatching in the National Park",
    "Sunrise or Sunset Safari",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Udawalawe National Park",
      imageUrl: "/documents/destination_explore_Image/udawalawe_national_park.jpg",
    },

    {
      title: "Wild Elephants & Wildlife",
      imageUrl: "/documents/destination_explore_Image/udawalawe_elephants.jpg",
    },

    {
      title: "Elephant Conservation",
      imageUrl: "/documents/destination_explore_Image/udawalawe_transit_home.jpg",
    },
  ],

  aboutText:
    "Udawalawe is one of the best places in Sri Lanka to experience wild elephants in their natural environment. The open landscapes of the national park make wildlife viewing particularly rewarding, while the surrounding reservoir, grasslands and forests create a striking backdrop for safari. Beyond the park, the Elephant Transit Home provides an important conservation experience focused on rehabilitating orphaned elephants for eventual return to the wild. Combining wildlife, conservation and expansive natural scenery, Udawalawe is an ideal destination for travellers who want to experience Sri Lanka beyond its beaches and cultural landmarks.",

  imageUrl: "/documents/destination image/udawalawe.jpg",

  galleryImageUrl: "/documents/gallery image/udawalawe.jpg",

  articleSections: [
    {
      title: "Into the Wilds of Udawalawe",

      description:
        "The landscapes of Udawalawe National Park are shaped by open grasslands, forests, wetlands and the vast Udawalawe Reservoir, creating excellent conditions for wildlife viewing. Safari drives take travellers through these varied habitats in search of elephants and other animals moving through the park. The open terrain often provides beautiful opportunities to observe wildlife from a respectful distance, while the changing light of early morning and late afternoon adds a memorable atmosphere to the experience.",

      imageUrl: "/documents/destination_explore_Image/udawalawe_national_park1.jpg",
    },

    {
      title: "A Land of Wild Elephants",

      description:
        "Elephants are at the heart of the Udawalawe experience, with the region supporting one of Sri Lanka's most important wild elephant populations. During a safari, travellers may see herds gathering around water, moving across open grasslands or disappearing into the surrounding forest. Alongside elephants, the park offers opportunities to encounter water buffalo, deer, crocodiles, monkeys and numerous bird species, making each game drive a constantly changing encounter with Sri Lanka's wildlife.",

      imageUrl: "/documents/destination_explore_Image/udawalawe_elephants1.jpg",
    },

    {
      title: "Wildlife, Care & Conservation",

      description:
        "Udawalawe also offers an opportunity to understand the relationship between wildlife and conservation through the Elephant Transit Home. The centre cares for orphaned young elephants with the long-term goal of returning suitable animals to the wild. Together with the national park and its surrounding landscapes, this conservation story adds a deeper dimension to a visit, allowing travellers to experience not only the beauty of Sri Lanka's wildlife but also the efforts made to protect it for the future.",

      imageUrl: "/documents/destination_explore_Image/udawalawe_transit_home1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Go on a Wildlife Safari",

      description:
        "Explore Udawalawe National Park by safari vehicle and discover elephants, buffalo, deer, crocodiles and a rich variety of birdlife.",

      imageUrl: "/documents/thingstodo/udawalawe_safari2.jpg",
    },

    {
      title: "See Wild Elephants",

      description:
        "Watch herds of wild elephants moving through the open grasslands and natural habitats of Udawalawe National Park.",

      imageUrl: "/documents/thingstodo/udawalawe_elephants2.jpg",
    },

    {
      title: "Visit the Elephant Transit Home",

      description:
        "Learn about elephant rehabilitation and conservation at the Elephant Transit Home, where orphaned young elephants are cared for before potential release into the wild.",

      imageUrl: "/documents/thingstodo/udawalawe_transit_home2.jpg",
    },

    {
      title: "Explore the Udawalawe Reservoir",

      description:
        "Discover the landscapes around the reservoir, an important water source for wildlife and a defining feature of the region.",

      imageUrl: "/documents/thingstodo/udawalawe_reservoir.jpg",
    },

    {
      title: "Discover Udawalawe's Birdlife",

      description:
        "Look for colourful resident and migratory birds across the wetlands, grasslands and forest habitats of the national park.",

      imageUrl: "/documents/thingstodo/udawalawe_birdwatching.jpg",
    },

    {
      title: "Experience a Sunrise Safari",

      description:
        "Start the day among Udawalawe's wildlife as the early morning light spreads across the park's open landscapes.",

      imageUrl: "/documents/thingstodo/udawalawe_sunrise_safari.jpg",
    },
  ],
},
 
   {
  slug: "bandarawela-haputale-badulla",

  name: "Bandarawela, Haputale & Badulla",

  region: "Hill Country",

  description:
    "The highlands around Bandarawela, Haputale and Badulla reveal a quieter side of Sri Lanka's hill country, where mist-covered mountains, rolling tea estates, waterfalls and historic temples shape the landscape. From the dramatic views of Haputale and the famous tea country around Lipton's Seat to the peaceful highland surroundings of Bandarawela and the heritage of Badulla, this region offers a rich combination of nature, culture and mountain scenery. Together, these three towns provide an authentic journey through the landscapes and traditions of Sri Lanka's Uva Highlands.",

  highlights: [
    "Haputale Tea Country & Mountain Views",
    "Bandarawela Highlands & Scenic Landscapes",
    "Badulla Heritage & Waterfalls",
  ],

  bestTime: "January to April",

  activities: [
    "Visit Lipton's Seat",
    "Explore Adisham Bungalow",
    "Discover Haputale Tea Estates",
    "Explore Bandarawela",
    "Visit Dhowa Rock Temple",
    "Discover Dunhinda Falls",
    "Visit Muthiyangana Raja Maha Vihara",
    "Explore Bogoda Wooden Bridge",
    "Scenic Drive Through the Uva Highlands",
    "Experience Highland Village Life",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Haputale Tea Country & Mountain Views",
      imageUrl: "/documents/destination_explore_Image/haputale_liptons_seat.jpg",
    },

    {
      title: "Bandarawela Highlands & Scenic Landscapes",
      imageUrl: "/documents/destination_explore_Image/bandarawela_highlands.jpg",
    },

    {
      title: "Badulla Heritage & Waterfalls",
      imageUrl: "/documents/destination_explore_Image/badulla_dunhinda.jpg",
    },
  ],

  aboutText:
    "The region of Bandarawela, Haputale and Badulla offers an immersive journey through Sri Lanka's Uva Highlands, combining peaceful mountain towns, tea-covered slopes, waterfalls and centuries-old heritage. Haputale is known for its dramatic ridgelines and panoramic tea-country views, while Bandarawela offers a gentler highland atmosphere surrounded by forests, gardens and countryside. Further east, Badulla opens into a greener valley landscape shaped by waterfalls, temples and historic landmarks. Together, the three destinations create a varied and authentic highland experience away from the island's more familiar tourist routes.",

  imageUrl: "/documents/destination image/haputale.jpg",

  galleryImageUrl: "/documents/gallery image/bandarawela.jpg",

  articleSections: [
    {
      title: "Haputale & the High Tea Country",

      description:
        "Haputale sits along one of Sri Lanka's most dramatic mountain ridges, where tea plantations stretch across misty slopes and the landscape opens into sweeping views of the surrounding valleys. A journey towards Lipton's Seat offers one of the region's most memorable highland experiences, while Adisham Bungalow and the surrounding tea estates reveal another layer of the area's colonial and agricultural heritage. The changing weather, cool mountain air and endless green slopes give Haputale a distinctive atmosphere that rewards slow exploration.",

      imageUrl: "/documents/destination_explore_Image/haputale_liptons_seat1.jpg",
    },

    {
      title: "The Peaceful Highlands of Bandarawela",

      description:
        "Bandarawela offers a calmer perspective on Sri Lanka's hill country, surrounded by green valleys, tea gardens and peaceful countryside. The town and its surrounding landscapes provide opportunities to experience the everyday rhythm of highland life, from scenic drives through mountain roads to quiet walks among tea-covered hills and villages. Its relaxed character makes it an ideal part of a journey through the Uva Highlands, connecting the dramatic landscapes of Haputale with the heritage and natural beauty found further towards Badulla.",

      imageUrl: "/documents/destination_explore_Image/bandarawela_highlands1.jpg",
    },

    {
      title: "Badulla's Heritage & Waterfalls",

      description:
        "Further into the Uva Highlands, Badulla combines cultural heritage with some of the region's most beautiful natural scenery. The historic Muthiyangana Raja Maha Vihara and Dhowa Rock Temple offer glimpses into the area's long religious history, while Dunhinda Falls creates one of the most impressive natural experiences around the town. The historic Bogoda Wooden Bridge and surrounding valleys add to the sense of discovery, making Badulla a rewarding destination for travellers interested in the connection between Sri Lanka's heritage and mountain landscapes.",

      imageUrl: "/documents/destination_explore_Image/badulla_dunhinda1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Visit Lipton's Seat",

      description:
        "Travel through the tea-covered mountains of Haputale to Lipton's Seat for spectacular views across the surrounding highlands and plantations.",

      imageUrl: "/documents/thingstodo/liptons_seat2.jpg",
    },

    {
      title: "Explore Adisham Bungalow",

      description:
        "Discover the historic Adisham Bungalow and its peaceful gardens surrounded by the misty landscapes of Haputale.",

      imageUrl: "/documents/thingstodo/adisham_bungalow.jpg",
    },

    {
      title: "Discover Haputale Tea Estates",

      description:
        "Walk or drive through the rolling tea country around Haputale and experience the landscapes that define Sri Lanka's highland tea culture.",

      imageUrl: "/documents/thingstodo/haputale_tea_estates.jpg",
    },

    {
      title: "Explore Bandarawela",

      description:
        "Discover the peaceful highland town of Bandarawela and its surrounding countryside, tea gardens and scenic mountain landscapes.",

      imageUrl: "/documents/thingstodo/bandarawela_highlands1.jpg",
    },

    {
      title: "Visit Dhowa Rock Temple",

      description:
        "Explore this historic Buddhist temple and its impressive rock-carved Buddha, surrounded by the peaceful landscapes of the Uva region.",

      imageUrl: "/documents/thingstodo/dhowa_rock_temple.jpg",
    },

    {
      title: "Discover Dunhinda Falls",

      description:
        "Take a scenic walk through the forest to one of the most celebrated waterfalls near Badulla, where water cascades through a dramatic natural setting.",

      imageUrl: "/documents/thingstodo/dunhinda_falls.jpg",
    },

    {
      title: "Visit Muthiyangana Raja Maha Vihara",

      description:
        "Discover one of Badulla's important Buddhist heritage sites and experience the spiritual traditions connected with the ancient Uva region.",

      imageUrl: "/documents/thingstodo/muthiyangana_temple.jpg",
    },

    {
      title: "Explore Bogoda Wooden Bridge",

      description:
        "Visit the historic Bogoda Wooden Bridge, an elegant traditional structure surrounded by forest and rural landscapes near Badulla.",

      imageUrl: "/documents/thingstodo/bogoda_bridge.jpg",
    },

    {
      title: "Take a Scenic Uva Highlands Drive",

      description:
        "Travel through winding mountain roads, tea plantations and misty valleys while discovering the changing landscapes of the Uva Highlands.",

      imageUrl: "/documents/thingstodo/uva_highlands_drive.jpg",
    },

 
  ],
},

  {
  slug: "mirissa",

  name: "Mirissa",

  region: "Southern Coast",

  description:
    "A beautiful tropical coastal escape where golden beaches, swaying coconut palms, turquoise waters, and unforgettable ocean experiences create the perfect setting for a relaxed Southern Sri Lankan getaway.",

  highlights: [
    "Mirissa Beach",
    "Whale Watching",
    "Coconut Tree Hill",
  ],

  bestTime: "November to April",

  activities: [
    "Whale Watching",
    "Beach Experiences",
    "Dolphin Watching",
    "Surfing",
    "Snorkelling",
    "Coastal Exploration",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Mirissa Beach",
      imageUrl: "/documents/destination_explore_Image/mirissa_beach.jpg",
    },
    {
      title: "Whale Watching",
      imageUrl: "/documents/destination_explore_Image/mirissa_whale.jpg",
    },
    {
      title: "Coconut Tree Hill",
      imageUrl: "/documents/destination_explore_Image/coconut_tree_hill.jpg",
    },
  ],

  aboutText:
    "Along Sri Lanka’s beautiful southern coast, Mirissa is a laid-back tropical escape where golden sands, swaying coconut palms, turquoise waters, and warm ocean breezes create an inviting coastal atmosphere. Once a quiet fishing village, Mirissa has grown into a much-loved destination while retaining much of its relaxed character and natural beauty. Days here move at an easy pace, with travellers enjoying peaceful mornings by the sea, fresh seafood, ocean experiences, and beautiful sunsets. Its intimate atmosphere makes Mirissa especially appealing to couples, beach lovers, and travellers looking to slow down and experience Sri Lanka’s southern coastline.",

  imageUrl: "/documents/destination image/mirissa.jpg",

  galleryImageUrl: "/documents/gallery image/mirissa.jpg",

  articleSections: [
    {
      title: "The Tropical Charm of Mirissa",

      description:
        "Along Sri Lanka’s beautiful southern coast, Mirissa is a laid-back tropical escape where golden sands, swaying coconut palms, turquoise waters, and warm ocean breezes create an inviting coastal atmosphere. Once a quiet fishing village, Mirissa has grown into a much-loved destination while retaining much of its relaxed character and natural beauty. Days here move at an easy pace, with travellers enjoying peaceful mornings by the sea, colourful sunsets, fresh seafood, and the simple pleasure of being surrounded by the Indian Ocean. Its intimate atmosphere makes Mirissa especially appealing to couples, beach lovers, and travellers looking to slow down and experience Sri Lanka’s southern coastline.",

      imageUrl: "/documents/destination_explore_Image/mirissa_coast.jpg",
    },

    {
      title: "Life by the Indian Ocean",

      description:
        "The ocean is at the heart of everyday life in Mirissa, shaping the traditions, livelihoods, and character of this charming coastal community. Traditional fishing boats can still be seen along the shoreline, while local restaurants and cafés bring together freshly caught seafood and the relaxed spirit of southern Sri Lanka. Beyond the beach, visitors can discover a quieter side of coastal life by exploring local streets, meeting communities, and watching the rhythm of fishermen preparing for the sea. This connection between people and ocean gives Mirissa a sense of authenticity that goes beyond its beautiful beaches, allowing travellers to experience a living coastal culture rather than simply visiting a resort destination.",

      imageUrl: "/documents/destination_explore_Image/mirissa_fishing.jpg",
    },

    {
      title: "Ocean Adventures & Southern Escapes",

      description:
        "Mirissa offers an exciting variety of experiences both on the water and along the surrounding coastline. Early mornings can begin with a journey into the Indian Ocean in search of whales and dolphins, while the clear coastal waters invite travellers to swim, snorkel, or try surfing. Scenic viewpoints surrounded by coconut palms provide beautiful places to appreciate the coastline, while boat excursions and peaceful beach walks reveal different perspectives of the southern shore. As the day comes to an end, Mirissa becomes especially atmospheric, with golden evening light, gentle waves, and unforgettable sunsets creating the perfect ending to a day by the ocean.",

      imageUrl: "/documents/destination_explore_Image/mirissa_ocean.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Mirissa Beach",

      description:
        "Relax on one of Sri Lanka’s most beautiful southern beaches, where golden sand, swaying coconut palms, and turquoise waters create a peaceful tropical setting. Enjoy a swim, a leisurely beach walk, or simply slow down and take in the relaxed atmosphere of the coast.",

      imageUrl: "/documents/thingstodo/mirissa_beach1.jpg",
    },

    {
      title: "Whale Watching",

      description:
        "Set out from Mirissa harbour on an early morning ocean excursion in search of whales and dolphins. The waters off the southern coast are known for marine life including blue whales and several species of dolphins, making the journey an unforgettable experience on the Indian Ocean.",

      imageUrl: "/documents/thingstodo/mirissa_whale1.jpg",
    },

    {
      title: "Coconut Tree Hill",

      description:
        "Visit the famous Coconut Tree Hill and enjoy beautiful views across the Indian Ocean from a hillside framed by tall coconut palms. The peaceful setting and dramatic coastal scenery make it one of Mirissa’s most memorable places for photography and enjoying the landscape.",

      imageUrl: "/documents/thingstodo/coconut_tree_hill1.jpg",
    },

    {
      title: "Parrot Rock",

      description:
        "Walk across the shallow coastal stretch to Parrot Rock and enjoy panoramic views over Mirissa Beach and the surrounding ocean. The small rocky viewpoint offers a different perspective of the coastline and is especially beautiful during the softer light of the evening.",

      imageUrl: "/documents/thingstodo/parrot_rock1.jpg",
    },

    {
      title: "Dolphin Watching",

      description:
        "Join an ocean excursion in search of playful dolphins travelling through the waters off Mirissa. Watching dolphins move through the open sea can be a memorable addition to a morning on the Indian Ocean.",

      imageUrl: "/documents/thingstodo/mirissa_dolphin.jpg",
    },

    {
      title: "Surfing",

      description:
        "Enjoy the waves along the southern coastline and discover Mirissa’s relaxed surfing atmosphere. Whether learning the basics or simply watching experienced surfers from the shore, the beach offers an enjoyable way to experience the energy of the Indian Ocean.",

      imageUrl: "/documents/thingstodo/mirissa_surf.jpg",
    },

    {
      title: "Snorkelling & Swimming",

      description:
        "Spend time in the warm tropical waters around Mirissa with a refreshing swim or a relaxed snorkelling experience. Discover the clear coastal environment while enjoying the peaceful rhythm of life by the Indian Ocean.",

      imageUrl: "/documents/thingstodo/mirissa_snorkeling.jpg",
    },

    {
      title: "Fishing Village Experience",

      description:
        "Discover the traditional side of Mirissa by exploring its fishing heritage and observing the daily rhythm of the local coastal community. From fishing boats along the shore to the fresh catch brought into the harbour, the experience offers an authentic glimpse into life beside the ocean.",

      imageUrl: "/documents/thingstodo/mirissa_fishing1.jpg",
    },

    {
      title: "Seafood & Coastal Dining",

      description:
        "Enjoy the flavours of Sri Lanka’s southern coast with freshly prepared seafood and traditional local dishes. Relax beside the ocean while discovering the region’s connection to fishing, tropical ingredients, and the vibrant food culture of the south.",

      imageUrl: "/documents/thingstodo/mirissa_seafood.jpg",
    },

    {
      title: "Sunset by the Ocean",

      description:
        "End the day along the coast as the warm evening light spreads across the Indian Ocean. A quiet beach walk, a relaxed drink, or simply watching the changing colours of the sky creates a peaceful and memorable way to experience Mirissa.",

      imageUrl: "/documents/thingstodo/mirissa_sunset.jpg",
    },

    {
      title: "Southern Coastal Exploration",

      description:
        "Use Mirissa as a beautiful base for discovering the wider southern coastline, with its beaches, fishing communities, scenic viewpoints, and charming coastal towns. A private journey along the coast allows travellers to experience the region at a relaxed pace while discovering places beyond the main tourist attractions.",

      imageUrl: "/documents/thingstodo/southern_coast.jpg",
    },
  ],
},
  {
  slug: "bentota",

  name: "Bentota",

  region: "Southwestern Coast",

  description:
    "A refined tropical coastal escape where golden beaches, lush waterways, luxury resorts, and exciting water experiences come together to create a memorable seaside holiday.",

  highlights: [
    "Bentota Beach",
    "Bentota River & Lagoon",
    "Water Sports & Coastal Adventures",
  ],

  bestTime: "November to April",

  activities: [
    "Beach Experiences",
    "Bentota River Safaris",
    "Water Sports",
    "Mangrove Exploration",
    "Ayurveda & Wellness",
    "Coastal Adventures",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Bentota Beach",
      imageUrl: "/documents/destination_explore_Image/bentota_beach.jpg",
    },
    {
      title: "Bentota River & Lagoon",
      imageUrl: "/documents/destination_explore_Image/bentota_river.jpg",
    },
    {
      title: "Water Sports & Coastal Adventures",
      imageUrl: "/documents/destination_explore_Image/bentota_water_sports.jpg",
    },
  ],

  aboutText:
    "Stretching along Sri Lanka’s beautiful southwestern coast, Bentota is a refined tropical escape where golden beaches, swaying palms, warm ocean waters, lush waterways, and elegant resorts come together. The destination offers an appealing balance between relaxation and adventure, with long sandy beaches, river and mangrove experiences, exciting water sports, and traditional Ayurvedic wellness. Whether enjoying a peaceful day beside the ocean, exploring the Bentota River by boat, or discovering the region’s tropical landscapes, Bentota provides a versatile coastal experience for couples, families, and travellers seeking comfort, nature, and unforgettable moments by the sea.",

  imageUrl: "/documents/destination image/bentota.jpg",

  galleryImageUrl: "/documents/gallery image/bentota.jpg",

  articleSections: [
    {
      title: "The Coastal Elegance of Bentota",

      description:
        "Stretching along Sri Lanka’s beautiful southwestern coast, Bentota is a refined tropical escape where golden beaches, swaying palms, warm ocean waters, and elegant resorts come together to create a relaxed yet sophisticated holiday atmosphere. The destination is particularly appealing to travellers looking for a combination of comfort, natural beauty, and coastal experiences, with long stretches of sandy shoreline providing plenty of space for peaceful walks, swimming, sunbathing, and unforgettable sunsets. Beyond the beach, Bentota’s lush surroundings and welcoming coastal character create a slower rhythm of travel, making it an ideal setting for couples, families, and travellers seeking a relaxing seaside escape while still having plenty to discover.",

      imageUrl: "/documents/destination_explore_Image/bentota_coast.jpg",
    },

    {
      title: "Where the River Meets the Ocean",

      description:
        "One of Bentota’s most distinctive features is the meeting of the Bentota River and the Indian Ocean, creating a beautiful landscape of waterways, mangroves, wetlands, small islands, and tropical vegetation. A boat journey along the river offers a completely different perspective of the region, passing through quiet waterways where travellers may encounter water monitors, birds, colourful butterflies, and other wildlife among the mangroves. The peaceful river environment provides a wonderful contrast to the open beach, while exploring the surrounding waterways allows visitors to experience a quieter and more natural side of Bentota away from the main coastal resorts. Together, the river and ocean give Bentota a unique landscape that combines tropical relaxation with gentle adventure.",

      imageUrl: "/documents/destination_explore_Image/bentota_river1.jpg",
    },

    {
      title: "Water, Wellness & Tropical Escapes",

      description:
        "Bentota offers an appealing balance between adventure and relaxation, with a wide range of experiences available both on the water and along the coast. Travellers can enjoy activities such as kayaking, jet skiing, windsurfing, water skiing, boating, and other ocean adventures, while those looking for a slower experience can spend the day beside the beach or enjoy a traditional Ayurvedic treatment in peaceful surroundings. The region’s wellness traditions, tropical gardens, river journeys, and beautiful coastal scenery make it possible to create a holiday at your own pace, whether that means an active day exploring the waterways or a quiet afternoon followed by a spectacular sunset over the Indian Ocean.",

      imageUrl: "/documents/destination_explore_Image/bentota_wellness.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Bentota Beach",

      description:
        "Relax along the golden sands of Bentota Beach and enjoy the warm waters of the Indian Ocean. Spend a peaceful morning swimming, take a leisurely walk along the shoreline, or simply unwind beneath the tropical palms while enjoying the relaxed atmosphere of Sri Lanka’s southwestern coast.",

      imageUrl: "/documents/thingstodo/bentota_beach (2).jpg",
    },

    {
      title: "Bentota River Safari",

      description:
        "Explore the peaceful waterways of the Bentota River on a guided boat safari through mangroves, wetlands, islands, and tropical vegetation. Look out for water monitors, birds, butterflies, and other wildlife while discovering a quieter side of the coastal landscape.",

      imageUrl: "/documents/thingstodo/Bentota_river (2).jpg",
    },
    {
      title: "Bentota Mangrove Experience",

      description:
        "Discover the delicate mangrove ecosystems surrounding Bentota’s waterways and learn about the importance of these natural habitats. Glide through narrow channels surrounded by dense tropical vegetation while observing the wildlife that lives among the roots and waterways.",

      imageUrl: "/documents/thingstodo/Bentota_mangroves.jpg",
    },

    {
      title: "Water Sports",

      description:
        "Experience the adventurous side of Bentota with a selection of exciting water activities along the coast and river. Depending on conditions, travellers can enjoy activities such as jet skiing, windsurfing, water skiing, kayaking, and other aquatic adventures.",

      imageUrl: "/documents/thingstodo/bentota_water_sports.jpg",
    },

    {
      title: "Jet Skiing",

      description:
        "Enjoy an exhilarating ride across the warm waters around Bentota on a jet ski. Feel the excitement of speeding across the open water while taking in the tropical coastline from a completely different perspective.",

      imageUrl: "/documents/thingstodo/bentota_jetski.jpg",
    },

    {
      title: "Kayaking",

      description:
        "Paddle through the calmer waterways around Bentota and experience the region’s tropical scenery at a slower pace. Kayaking offers an enjoyable way to explore the river environment, mangroves, and peaceful coastal landscapes.",

      imageUrl: "/documents/thingstodo/bentota_kayaking.jpg",
    },

    {
      title: "Windsurfing",

      description:
        "Experience the wind and waves of the southwestern coast with a thrilling windsurfing adventure. Bentota’s coastal waters provide an exciting setting for travellers looking to combine ocean scenery with an active outdoor experience.",

      imageUrl: "/documents/thingstodo/bentota_windsurfing.jpg",
    },

    {
      title: "Fishing Experience",

      description:
        "Discover the coastal fishing traditions of Bentota and experience the close relationship between local communities and the Indian Ocean. A guided fishing experience offers an opportunity to learn about traditional practices while spending time on the region’s beautiful waterways.",

      imageUrl: "/documents/thingstodo/bentota_fishing.jpg",
    },

    {
      title: "Ayurveda & Wellness",

      description:
        "Slow down with a traditional Ayurvedic wellness experience surrounded by the peaceful tropical landscapes of Bentota. Enjoy a relaxing massage or personalised wellness treatment inspired by Sri Lanka’s centuries-old Ayurvedic traditions.",

      imageUrl: "/documents/thingstodo/bentota_ayurveda.jpg",
    },

    {
      title: "Sunset by the River",

      description:
        "Experience the peaceful atmosphere of Bentota as the evening light settles over the river and surrounding tropical landscape. A quiet boat journey or riverside moment at sunset offers a beautiful way to end a day of coastal exploration.",

      imageUrl: "/documents/thingstodo/bentota_sunset.jpg",
    },

    {
      title: "Coastal Cycling",

      description:
        "Explore the quieter roads and tropical surroundings of Bentota by bicycle. Ride through coastal communities, palm-lined paths, and green countryside while experiencing the slower rhythm of life beyond the main resort areas.",

      imageUrl: "/documents/thingstodo/bentota_cycling.jpg",
    },

    {
      title: "Kosgoda Turtle Conservation",

      description:
        "Visit the nearby coastal area of Kosgoda and learn about Sri Lanka’s sea turtles and conservation efforts. Discover the importance of protecting these remarkable marine animals while gaining a deeper understanding of the natural heritage of the southern coast.",

      imageUrl: "/documents/thingstodo/kosgoda_turtles.jpg",
    },
  ],
},
 {
  slug: "galle",

  name: "Galle",

  region: "Southern Coast",

  description:
    "Galle is a captivating coastal city where centuries of history, colonial architecture and the Indian Ocean come together. At its heart lies the UNESCO-listed Old Town of Galle and its Fortifications, a beautifully preserved historic city shaped by Portuguese and Dutch influence and adapted through Sri Lankan traditions. Beyond the fort walls, Galle offers atmospheric streets, heritage buildings, oceanfront walks, local cafés and a relaxed southern coastal character, making it an ideal destination for travellers seeking culture, history and timeless charm.",

  highlights: [
    "Galle Fort & Ramparts",
    "Colonial Galle",
    "Galle's Coastal Heritage",
  ],

  bestTime: "December to April",

  activities: [
    "Galle Fort Exploration",
    "Heritage Walks",
    "Colonial Architecture Tours",
    "Museum Visits",
    "Coastal Walks",
    "Local Food & Café Experiences",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Galle Fort & Ramparts",
      imageUrl: "/documents/destination_explore_Image/galle_fort1.jpg",
    },
    {
      title: "Colonial Galle",
      imageUrl: "/documents/destination_explore_Image/galle_colonial1.jpg",
    },
    {
      title: "Galle's Coastal Heritage",
      imageUrl: "/documents/destination_explore_Image/galle_coast1.jpg",
    },
  ],

  aboutText:
    "Galle offers a rare combination of living history and coastal beauty. The historic fort, shaped by Portuguese and Dutch colonial periods, remains part of everyday life, with old residences, churches, museums, cafés, galleries and boutique properties woven into its streets. Walking through Galle feels less like visiting a preserved monument and more like discovering a historic neighbourhood beside the sea, where architecture, culture and the relaxed rhythm of southern Sri Lanka naturally come together.",

  imageUrl: "/documents/destination image/galle.jpg",

  galleryImageUrl: "/documents/gallery image/galle1.jpg",

  articleSections: [
    {
      title: "The Timeless Charm of Galle",

      description:
        "Galle has a character that is immediately different from Sri Lanka's inland destinations. Within the historic fort, narrow streets unfold between weathered walls, colonial-era buildings, shaded verandas and quiet courtyards, while cafés, galleries, boutique hotels and local shops bring the old town to life. The atmosphere is elegant yet relaxed, allowing travellers to explore at an unhurried pace while discovering the details that make Galle feel authentic. From the texture of its historic architecture to the everyday life continuing within the fort, Galle offers a beautiful sense of place where the past remains part of the present.",

      imageUrl: "/documents/destination_explore_Image/galle1.jpg",
    },

    {
      title: "A Living World Heritage City",

      description:
        "The story of Galle has been shaped by centuries of cultural exchange. Founded by the Portuguese in the 16th century and developed extensively under Dutch rule in the 18th century, the fortified city reflects European planning and architecture adapted to the climate, landscape and traditions of Sri Lanka. Today, the fort remains a living historic town rather than simply an archaeological site, with homes, religious buildings, museums and businesses continuing within its original streetscape. Exploring Galle with a knowledgeable guide allows travellers to notice the architectural details, stories and cultural layers that can easily be missed when simply walking through the streets.",

      imageUrl: "/documents/destination_explore_Image/galle_colonial.jpg",
    },

    {
      title: "Where Heritage Meets the Ocean",

      description:
        "Galle's location beside the Indian Ocean gives its historic character an especially memorable setting. The fortifications open towards wide ocean views, with the lighthouse, harbour and ramparts creating beautiful places for a slow coastal walk or sunset experience. Beyond the walls, the surrounding southern coast introduces beaches, fishing traditions, seafood and the relaxed rhythm of coastal Sri Lankan life. This combination of heritage and ocean makes Galle more than a historical stop; it is a destination where architecture, culture, local flavours and the sea can be experienced together in a naturally elegant setting.",

      imageUrl: "/documents/destination_explore_Image/galle_coast.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Galle Fort",

      description:
        "Discover the historic heart of Galle by wandering through its atmospheric streets, colonial buildings, courtyards, boutique properties and local shops while experiencing the unique character of this UNESCO World Heritage city.",

      imageUrl: "/documents/thingstodo/galle_fort2.jpg",
    },

    {
      title: "Walk the Galle Fort Ramparts",

      description:
        "Take a leisurely walk along the historic fortifications for sweeping views across the Indian Ocean, the old town and the surrounding coastline, especially beautiful in the softer light of early morning or sunset.",

      imageUrl: "/documents/thingstodo/galle_ramparts.jpg",
    },

    {
      title: "Visit Galle Lighthouse",

      description:
        "See one of Galle's most recognisable coastal landmarks standing beside the historic fortifications, with the Indian Ocean providing a dramatic backdrop for a relaxed heritage and photography stop.",

      imageUrl: "/documents/thingstodo/galle_lighthouse.jpg",
    },

    {
      title: "Discover the Dutch Reformed Church",

      description:
        "Step inside one of the fort's historic religious landmarks and discover its distinctive colonial architecture, quiet interior and connections to Galle's Dutch period.",

      imageUrl: "/documents/thingstodo/dutch_reformed_church.jpg",
    },

    {
      title: "Explore the Old Dutch Hospital",

      description:
        "Visit one of Galle Fort's beautifully restored historic buildings, now transformed into a lively space with restaurants, cafés and shops while retaining its colonial architectural character.",

      imageUrl: "/documents/thingstodo/old_dutch_hospital.jpg",
    },

    {
      title: "Visit Galle National Museum",

      description:
        "Explore collections connected to the cultural heritage of southern Sri Lanka, including traditional crafts, masks, carvings and objects reflecting the region's diverse history.",

      imageUrl: "/documents/thingstodo/galle_national_museum.jpg",
    },

    {
      title: "Explore Galle's Old Town Streets",

      description:
        "Wander through the quieter streets of the historic town to discover old residences, shaded verandas, courtyards, small galleries, independent boutiques and details of everyday life within the fort.",

      imageUrl: "/documents/thingstodo/galle_old_town.jpg",
    },

    {
      title: "Take a Colonial Architecture Walk",

      description:
        "Discover the distinctive blend of European architectural ideas and Sri Lankan traditions through the fort's streets, historic houses, churches, public buildings and preserved facades.",

      imageUrl: "/documents/thingstodo/galle_architecture.jpg",
    },

    {
      title: "Enjoy Sunset from the Fort",

      description:
        "Find a quiet place along the fort walls as the sun moves towards the horizon, creating beautiful views across the Indian Ocean and a memorable end to a day of exploring Galle.",

      imageUrl: "/documents/thingstodo/galle_sunset.jpg",
    },

    {
      title: "Experience Local Cafés & Southern Cuisine",

      description:
        "Take time to enjoy Sri Lankan flavours alongside contemporary cafés and restaurants within and around the fort, combining local culinary traditions with Galle's relaxed international atmosphere.",

      imageUrl: "/documents/thingstodo/galle_food.jpg",
    },

    {
      title: "Explore the Nearby Southern Coast",

      description:
        "Extend your Galle experience beyond the historic centre with a relaxed journey along the surrounding southern coastline, discovering nearby beaches and the tropical landscapes that give the region its coastal character.",

      imageUrl: "/documents/thingstodo/galle_coastline.jpg",
    },

    {
      title: "Visit Unawatuna Beach",

      description:
        "Travel a short distance from Galle to Unawatuna for a relaxed coastal experience with tropical scenery, swimming opportunities and the laid-back atmosphere of Sri Lanka's southern beach culture.",

      imageUrl: "/documents/thingstodo/unawatuna.jpg",
    },
  ],
},
 
{
  slug: "hikkaduwa",

  name: "Hikkaduwa",

  region: "Southern Coast",

  description:
    "Hikkaduwa is a vibrant coastal destination on Sri Lanka's southern coast, known for its golden beaches, coral reefs, tropical marine life and relaxed seaside atmosphere. From exploring the underwater world and riding the waves to enjoying quiet moments by the ocean, Hikkaduwa offers a wonderful combination of beach life, marine experiences, adventure and southern coastal charm.",

  highlights: [
    "Hikkaduwa Beach",
    "Coral Reef & Marine Life",
    "Surfing & Coastal Adventures",
  ],

  bestTime: "November to April",

  activities: [
    "Hikkaduwa Beach Experience",
    "Coral Reef Snorkelling",
    "Surfing",
    "Glass-Bottom Boat Trips",
    "Marine Life Experiences",
    "Turtle Conservation",
    "Coastal Boat Experiences",
    "Sunset Experiences",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Hikkaduwa Beach",
      imageUrl: "/documents/destination_explore_Image/hikkaduwa_beach.jpg",
    },

    {
      title: "Coral Reef & Marine Life",
      imageUrl: "/documents/destination_explore_Image/hikkaduwa_coral.jpg",
    },

    {
      title: "Surfing & Coastal Adventures",
      imageUrl: "/documents/destination_explore_Image/hikkaduwa_surfing.jpg",
    },
  ],

  aboutText:
    "Hikkaduwa brings together the easygoing charm of Sri Lanka's southern coast with a lively oceanfront atmosphere. Its warm waters, coral reefs and tropical marine life make it a natural choice for travellers who want more than simply relaxing on the beach. Visitors can explore the underwater world, enjoy the waves, discover the coastal environment and finish the day watching the sun set over the Indian Ocean. With its combination of natural beauty, adventure and relaxed beach life, Hikkaduwa offers a memorable experience along Sri Lanka's southern coast.",

  imageUrl: "/documents/destination image/hikkaduwa.jpg",

  galleryImageUrl: "/documents/gallery image/hikkaduwa1.jpg",

  articleSections: [
    {
      title: "The Coastal Spirit of Hikkaduwa",

      description:
        "Hikkaduwa has a character all its own, where golden sands meet warm tropical waters and the relaxed rhythm of southern coastal life creates an inviting atmosphere. The beach is surrounded by a lively mix of small restaurants, cafés and beachfront spaces, while the coastline itself offers plenty of room to slow down and enjoy the tropical setting. Whether spending a peaceful morning beside the ocean, taking a walk along the shore or enjoying the changing colours of the evening sky, Hikkaduwa gives travellers an easy and enjoyable introduction to Sri Lanka's southern coast.",

      imageUrl: "/documents/destination_explore_Image/hikkaduwa_beach1.jpg",
    },

    {
      title: "Beneath the Waters of Hikkaduwa",

      description:
        "The marine environment is one of the defining experiences of Hikkaduwa. Its coral-rich waters provide opportunities to discover colourful tropical fish and other marine life through snorkelling and relaxed boat excursions. Travellers can experience the coastline from a completely different perspective by exploring beneath the surface or viewing the reef from a glass-bottom boat. The combination of warm waters, coral formations and tropical marine life makes Hikkaduwa especially appealing to those who enjoy connecting with Sri Lanka's natural environment.",

      imageUrl: "/documents/destination_explore_Image/hikkaduwa_coral1.jpg",
    },

    {
      title: "Surf, Sea & Southern Coastal Life",

      description:
        "Life in Hikkaduwa naturally revolves around the sea. Surfing adds an energetic side to the destination, while the beachfront offers a relaxed setting to enjoy local flavours, tropical evenings and the easygoing atmosphere of the southern coast. The surrounding marine environment also creates opportunities for boat experiences and wildlife encounters, while the beach becomes especially beautiful as the day draws to a close. Hikkaduwa is best enjoyed at an unhurried pace, allowing travellers to experience both its adventurous side and its laid-back coastal character.",

      imageUrl: "/documents/destination_explore_Image/hikkaduwa_coastal_life.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Snorkel at Hikkaduwa Coral Reef",

      description:
        "Explore Hikkaduwa's underwater world while swimming among coral formations and tropical marine life in the warm coastal waters.",

      imageUrl: "/documents/thingstodo/hikkaduwa_snorkelling.jpg",
    },

    {
      title: "Explore the Coral Sanctuary",

      description:
        "Discover the marine environment around Hikkaduwa and experience the natural beauty of its coral-rich coastal waters.",

      imageUrl: "/documents/thingstodo/hikkaduwa_coral_sanctuary.jpg",
    },

    {
      title: "Go Surfing in Hikkaduwa",

      description:
        "Enjoy the waves along Hikkaduwa's famous surf coast, whether you are trying surfing for the first time or already comfortable in the water.",

      imageUrl: "/documents/thingstodo/hikkaduwa_surfing.jpg",
    },

    {
      title: "Take a Glass-Bottom Boat Trip",

      description:
        "See the coral reefs and marine life from above the water on a relaxed glass-bottom boat experience.",

      imageUrl: "/documents/thingstodo/hikkaduwa_glass_bottom_boat.jpg",
    },

    {
      title: "Visit a Turtle Conservation Centre",

      description:
        "Learn more about Sri Lanka's sea turtles and the conservation efforts supporting these remarkable marine animals along the southern coast.",

      imageUrl: "/documents/thingstodo/hikkaduwa_turtle.jpg",
    },

    {
      title: "Watch the Sunset by Hikkaduwa Beach",

      description:
        "Slow down at the end of the day and watch the changing colours of the sky spread across the Indian Ocean from the beach.",

      imageUrl: "/documents/thingstodo/hikkaduwa_sunset.jpg",
    },
  ],
},

{
  slug: "weligama",

  name: "Weligama",

  region: "South Coast",

  description:
    "Weligama is a lively coastal destination on Sri Lanka's southern coast, known for its wide bay, welcoming surf culture, golden sandy beaches and relaxed seaside atmosphere. From the gentle waves of Weligama Bay to the distinctive Taprobane Island just offshore, the area offers a wonderful combination of beach experiences, traditional fishing heritage, local coastal life and ocean adventures. With its easygoing atmosphere and beautiful coastline, Weligama is an inviting destination for travellers looking to experience the relaxed character of Sri Lanka's southern coast.",

  highlights: [
    "Weligama Bay & Surfing",
    "Taprobane Island",
    "Southern Coastal Life",
  ],

  bestTime: "November to April",

  activities: [
    "Weligama Bay Surfing",
    "Surfing Lessons",
    "Weligama Beach Experience",
    "Taprobane Island Views",
    "Traditional Fishing Experience",
    "Coastal Cycling",
    "Seafood & Local Dining",
    "Sunset by the Bay",
    "Nearby Beach Exploration",
    "South Coast Boat Experiences",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Weligama Bay & Surfing",
      imageUrl: "/documents/destination_explore_Image/weligama_bay.jpg",
    },

    {
      title: "Taprobane Island",
      imageUrl: "/documents/destination_explore_Image/taprobane.jpg",
    },

    {
      title: "Southern Coastal Life",
      imageUrl: "/documents/destination_explore_Image/weligama_coast.jpg",
    },
  ],

  aboutText:
    "Weligama brings together the relaxed charm of Sri Lanka's southern coast with a lively surf culture and beautiful ocean scenery. Travellers can enjoy the wide sandy bay, discover the area's traditional fishing heritage, admire Taprobane Island just offshore and experience the easygoing rhythm of coastal life. With its welcoming atmosphere, local restaurants, cafés and beautiful seaside surroundings, Weligama offers a refreshing combination of adventure, relaxation and authentic South Coast character.",

  imageUrl: "/documents/destination image/weligama.jpg",

  galleryImageUrl: "/documents/gallery image/weligama.jpg",

  articleSections: [
    {
      title: "The Coastal Beauty of Weligama",

      description:
        "Weligama is shaped by its beautiful sweeping bay, wide sandy beach and relaxed tropical atmosphere. The sheltered coastline creates a welcoming setting for swimming, beach walks and enjoying the warm waters of the southern coast, while the surrounding landscape combines palm-lined shores with the everyday character of a traditional coastal town. From a quiet morning beside the ocean to an evening watching the changing colours across the bay, Weligama gives travellers an opportunity to slow down and enjoy the simple beauty of life by the sea.",

      imageUrl: "/documents/destination_explore_Image/weligama_bay1.jpg",
    },

    {
      title: "Surf Culture & Coastal Heritage",

      description:
        "Weligama has become one of Sri Lanka's best-known places for experiencing the island's surf culture, particularly for travellers learning to surf for the first time. Alongside its modern surf scene, the town retains a strong connection with traditional coastal life, where fishing remains an important part of the local character. Exploring the streets, meeting local communities and watching the rhythm of life around the bay allows travellers to experience a side of the South Coast that feels both welcoming and authentic.",

      imageUrl: "/documents/destination_explore_Image/weligama_surf1.jpg",
    },

    {
      title: "Island Views & Ocean Experiences",

      description:
        "Just offshore, the distinctive Taprobane Island adds a unique character to Weligama's coastal scenery. The surrounding waters and coastline also create opportunities for boat experiences, coastal exploration and peaceful moments beside the ocean. Travellers can combine a relaxed beach stay with surfing, seafood, sunset views and exploration of nearby coastal areas, making Weligama a versatile destination for those who want both activity and time to unwind.",

      imageUrl: "/documents/destination_explore_Image/taprobane1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Surf at Weligama Bay",

      description:
        "Experience the waves of Weligama Bay, one of Sri Lanka's most welcoming surf destinations and a popular place for both beginners and experienced surfers.",

      imageUrl: "/documents/thingstodo/weligama_surf2.jpg",
    },

    {
      title: "Take a Surfing Lesson",

      description:
        "Join a local surf instructor and learn the basics of surfing in the gentle waters of Weligama Bay while enjoying the relaxed atmosphere of the South Coast.",

      imageUrl: "/documents/thingstodo/surf_lesson.jpg",
    },

    {
      title: "Relax on Weligama Beach",

      description:
        "Spend a peaceful day along the wide sandy beach, enjoying the warm ocean, tropical scenery and laid-back atmosphere surrounding the bay.",

      imageUrl: "/documents/thingstodo/weligama_beach.jpg",
    },

    {
      title: "See Taprobane Island",

      description:
        "Admire the distinctive Taprobane Island just offshore and enjoy one of the most recognisable coastal views around Weligama Bay.",

      imageUrl: "/documents/thingstodo/taprobane2.jpg",
    },

    {
      title: "Discover Local Fishing Life",

      description:
        "Experience the traditional fishing heritage of the South Coast and observe the everyday coastal lifestyle that remains an important part of Weligama.",

      imageUrl: "/documents/thingstodo/weligama_fishing.jpg",
    },

  

    {
      title: "Enjoy Fresh Seafood",

      description:
        "Taste freshly prepared seafood and Sri Lankan coastal dishes while enjoying the relaxed dining atmosphere around Weligama Bay.",

      imageUrl: "/documents/thingstodo/weligama_seafood.jpg",
    },

    {
      title: "Cycle Along the Coast",

      description:
        "Explore the surrounding coastal roads by bicycle and enjoy views of beaches, palm trees, fishing communities and the relaxed South Coast landscape.",

      imageUrl: "/documents/thingstodo/weligama_cycling.jpg",
    },

    {
      title: "Explore Nearby Beaches",

      description:
        "Take a scenic journey along the South Coast and discover the smaller beaches and coastal villages surrounding Weligama.",

      imageUrl: "/documents/thingstodo/weligama_coast1.jpg",
    },

    {
      title: "Enjoy a Coastal Boat Experience",

      description:
        "Take to the water and enjoy the coastline from a different perspective while discovering the calm beauty of the southern seas.",

      imageUrl: "/documents/thingstodo/weligama_boat.jpg",
    },

    {
      title: "Watch the Sunset by the Bay",

      description:
        "End the day beside Weligama Bay as the evening light creates beautiful views across the ocean and sandy shoreline.",

      imageUrl: "/documents/thingstodo/weligama_sunset.jpg",
    },

   
  ],
},

{
  slug: "koggala",

  name: "Koggala",

  region: "South Coast",

  description:
    "Koggala is a peaceful coastal destination on Sri Lanka's southern coast, known for its beautiful lagoon, traditional fishing heritage, cinnamon plantations and relaxed village atmosphere. From exploring the calm waters of Koggala Lake and discovering small islands to experiencing traditional stilt fishing and the region's cinnamon-growing heritage, Koggala offers a quieter and more authentic side of the South Coast. Surrounded by tropical greenery and close to beautiful beaches, it is an ideal destination for travellers seeking nature, culture and slow coastal experiences.",

  highlights: [
    "Koggala Lake & Island Experiences",
    "Traditional Stilt Fishing",
    "Cinnamon Heritage & Village Life",
  ],

  bestTime: "November to April",

  activities: [
    "Koggala Lake Boat Safari",
    "Koggala Lake Island Exploration",
    "Traditional Stilt Fishing Experience",
    "Cinnamon Plantation Visit",
    "Cinnamon Village Experiences",
    "Birdwatching & Nature Exploration",
    "Martin Wickramasinghe Folk Museum",
    "Koggala Beach Experience",
    "Local Village Exploration",
    "South Coast Sunset Experience",
  ],

  motif: "leaf",

  highlightCards: [
    {
      title: "Koggala Lake & Island Experiences",
      imageUrl: "/documents/destination_explore_Image/koggala_lake.jpg",
    },

    {
      title: "Traditional Stilt Fishing",
      imageUrl: "/documents/destination_explore_Image/stilt_fishing.jpg",
    },

    {
      title: "Cinnamon Heritage & Village Life",
      imageUrl: "/documents/destination_explore_Image/koggala_cinnamon.jpg",
    },
  ],

  aboutText:
    "Koggala offers a peaceful and authentic side of Sri Lanka's southern coast, where tropical nature, traditional livelihoods and coastal life come together. Travellers can explore the calm waters of Koggala Lake, visit small islands, discover the region's cinnamon-growing heritage and observe traditional fishing practices along the coast. The area also provides opportunities to explore local culture, wildlife and village life, making Koggala a refreshing destination for travellers who want to experience the quieter character of southern Sri Lanka.",

  imageUrl: "/documents/destination image/koggala.jpg",

  galleryImageUrl: "/documents/gallery image/koggala.jpg",

  articleSections: [
    {
      title: "The Natural Beauty of Koggala Lake",

      description:
        "Koggala Lake is one of the defining natural features of the area, creating a peaceful landscape of calm waters, tropical vegetation and small islands just inland from the coast. A boat journey across the lagoon offers travellers an opportunity to slow down and observe the natural surroundings, with birds, mangroves and local life forming part of the experience. The quiet atmosphere of the lake provides a beautiful contrast to the more lively beach destinations along the southern coast and allows visitors to experience Sri Lanka's tropical environment at a gentler pace.",

      imageUrl: "/documents/destination_explore_Image/koggala_lake1.jpg",
    },

    {
      title: "Traditional Life & Coastal Heritage",

      description:
        "Koggala is closely connected with the traditional livelihoods and cultural heritage of Sri Lanka's southern coast. The area's famous stilt fishing tradition offers a glimpse into an old coastal fishing practice, while the surrounding villages reflect a slower and more traditional way of life. Travellers can also discover local stories, crafts and customs at the Martin Wickramasinghe Folk Museum, gaining a deeper understanding of the cultural character of the southern region.",

      imageUrl: "/documents/destination_explore_Image/stilt_fishing.jpg",
    },

    {
      title: "Cinnamon, Villages & Tropical Experiences",

      description:
        "Beyond the lake and coastline, Koggala is surrounded by tropical gardens, village communities and cinnamon-growing areas that reveal another side of southern Sri Lanka. Visitors can learn about the traditional production of cinnamon, explore the countryside and enjoy the peaceful rhythm of rural life. Combined with nature experiences, local food and the nearby beach, these activities make Koggala a destination where travellers can discover the authentic landscapes and traditions of the South Coast.",

      imageUrl: "/documents/destination_explore_Image/koggala_cinnamon1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Take a Koggala Lake Boat Safari",

      description:
        "Cruise across the peaceful waters of Koggala Lake and discover its tropical landscapes, mangroves, wildlife and quiet island surroundings.",

      imageUrl: "/documents/thingstodo/koggala_lake2.jpg",
    },

    {
      title: "Explore the Islands of Koggala Lake",

      description:
        "Visit the small islands scattered across Koggala Lake and discover the unique natural and cultural experiences found around the lagoon.",

      imageUrl: "/documents/thingstodo/koggala_island.jpg",
    },

    {
      title: "Discover Traditional Stilt Fishing",

      description:
        "See one of the South Coast's most recognisable traditional fishing practices and learn about the coastal heritage behind fishing from wooden stilts.",

      imageUrl: "/documents/thingstodo/stilt_fishing2.jpg",
    },

    {
      title: "Visit a Cinnamon Plantation",

      description:
        "Discover the traditional cultivation and processing of cinnamon and learn why this fragrant spice has been an important part of Sri Lanka's agricultural heritage.",

      imageUrl: "/documents/thingstodo/koggala_cinnamon2.jpg",
    },

    {
      title: "Explore Koggala Village Life",

      description:
        "Travel through the surrounding villages and experience a quieter side of southern Sri Lanka, away from the busier coastal areas.",

      imageUrl: "/documents/thingstodo/koggala_village.jpg",
    },

    {
      title: "Visit the Martin Wickramasinghe Folk Museum",

      description:
        "Explore the cultural museum dedicated to renowned Sri Lankan writer Martin Wickramasinghe and discover traditional objects, crafts and aspects of village life.",

      imageUrl: "/documents/thingstodo/martin_wickramasinghe.jpg",
    },

    {
      title: "Go Birdwatching",

      description:
        "Explore the lake and surrounding wetlands to observe native and migratory birds within Koggala's rich tropical environment.",

      imageUrl: "/documents/thingstodo/koggala_birdwatching.jpg",
    },

    {
      title: "Relax at Koggala Beach",

      description:
        "Spend time beside the ocean at Koggala Beach and enjoy the spacious shoreline, tropical scenery and peaceful coastal atmosphere.",

      imageUrl: "/documents/thingstodo/koggala_beach2.jpg",
    },

    

    {
      title: "Experience Local Food",

      description:
        "Taste traditional Sri Lankan dishes and fresh local flavours while discovering the everyday food culture of the southern coastal region.",

      imageUrl: "/documents/thingstodo/koggala_food.jpg",
    },

    {
      title: "Enjoy a Peaceful Lagoon Experience",

      description:
        "Slow down beside the calm waters of Koggala Lake and enjoy the peaceful surroundings, tropical greenery and gentle rhythm of lagoon life.",

      imageUrl: "/documents/thingstodo/koggala_lagoon.jpg",
    },

    {
      title: "Watch the South Coast Sunset",

      description:
        "End the day along the coast as the warm evening light creates beautiful views across the ocean and surrounding tropical landscape.",

      imageUrl: "/documents/thingstodo/koggala_sunset.jpg",
    },
  ],
},

{
  slug: "ahangama",

  name: "Ahangama",

  region: "South Coast",

  description:
    "Ahangama is a stylish coastal destination on Sri Lanka's southern coast, known for its surf culture, beautiful beaches, palm-lined scenery and relaxed modern atmosphere. From the popular waves of Kabalana Beach to the quieter stretches of coastline and vibrant cafés, Ahangama brings together ocean adventures, tropical surroundings and a growing creative lifestyle. The area is especially appealing to travellers looking for a more contemporary and laid-back side of Sri Lanka's southern coast, where surfing, local culture, food and beautiful coastal scenery come together.",

  highlights: [
    "Kabalana Beach & Surfing",
    "Palm-Lined South Coast",
    "Cafés, Food & Coastal Lifestyle",
  ],

  bestTime: "November to April",

  activities: [
    "Kabalana Beach Surfing",
    "Surfing Lessons",
    "Ahangama Beach Experience",
    "Coconut Tree & Coastal Views",
    "Café & Local Food Experiences",
    "Explore Coastal Villages",
    "Visit Local Surf Spots",
    "Cycling Along the Coast",
    "Sunset by the Ocean",
    "South Coast Beach Exploration",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Kabalana Beach & Surfing",
      imageUrl: "/documents/destination_explore_Image/kabalana.jpg",
    },

    {
      title: "Palm-Lined South Coast",
      imageUrl: "/documents/destination_explore_Image/ahangama_coast.jpg",
    },

    {
      title: "Cafés, Food & Coastal Lifestyle",
      imageUrl: "/documents/destination_explore_Image/ahangama_cafes.jpg",
    },
  ],

  aboutText:
    "Ahangama offers a fresh and contemporary expression of Sri Lanka's southern coast, combining beautiful beaches and surf breaks with a relaxed creative atmosphere. Travellers can spend their days riding the waves at Kabalana, exploring the palm-lined coastline, enjoying local and international food or simply slowing down beside the ocean. With its blend of traditional coastal surroundings and modern cafés, surf culture and boutique stays, Ahangama is an inviting destination for travellers seeking a stylish yet easygoing South Coast experience.",

  imageUrl: "/documents/destination image/ahangama.jpg",

  galleryImageUrl: "/documents/gallery image/ahangama.jpg",

  articleSections: [
    {
      title: "The Surf & Coastal Beauty of Ahangama",

      description:
        "Ahangama is surrounded by some of the most beautiful coastal scenery in southern Sri Lanka, with palm-lined shores, golden beaches and open views across the Indian Ocean. Kabalana is one of the area's best-known surf beaches, attracting both experienced surfers and travellers looking to learn. Away from the main surf spots, quieter stretches of coastline offer peaceful places to walk, relax and enjoy the tropical character of the South Coast.",

      imageUrl: "/documents/destination_explore_Image/kabalana1.jpg",
    },

    {
      title: "A Modern South Coast Lifestyle",

      description:
        "Ahangama has developed a distinctive coastal lifestyle where traditional Sri Lankan surroundings meet a growing community of surfers, creatives, cafés and boutique hospitality. Travellers can discover relaxed restaurants, small cafés and stylish spaces while still seeing the everyday rhythm of local villages and coastal communities. This combination gives Ahangama a character that feels contemporary without losing its connection to the landscape and culture of southern Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/ahangama_cafes1.jpg",
    },

    {
      title: "Slow Days by the Ocean",

      description:
        "Beyond surfing, Ahangama is a destination for slowing down and enjoying the simple pleasures of coastal life. Visitors can cycle through palm-lined roads, explore nearby beaches, enjoy fresh food and watch the changing colours of the ocean at sunset. Its location along the southern coast also makes it an easy base for discovering nearby destinations while returning to a quieter and more relaxed atmosphere at the end of the day.",

      imageUrl: "/documents/destination_explore_Image/ahangama_coast1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Surf at Kabalana Beach",

      description:
        "Experience one of the South Coast's best-known surf spots, with waves that attract surfers from around the world and a beautiful tropical setting beside the ocean.",

      imageUrl: "/documents/thingstodo/kabalana2.jpg",
    },

    {
      title: "Take a Surfing Lesson",

      description:
        "Learn the basics of surfing with a local instructor and enjoy the welcoming surf culture that has made Ahangama a popular coastal destination.",

      imageUrl: "/documents/thingstodo/ahangama_surf_lesson.jpg",
    },

    {
      title: "Relax by the Ahangama Coast",

      description:
        "Spend a peaceful day beside the ocean, enjoying the palm-lined scenery, warm tropical weather and relaxed atmosphere of the South Coast.",

      imageUrl: "/documents/thingstodo/ahangama_beach.jpg",
    },

  
    {
      title: "Discover Local Cafés",

      description:
        "Explore Ahangama's growing café scene and enjoy fresh coffee, tropical drinks, local flavours and relaxed meals in beautiful coastal surroundings.",

      imageUrl: "/documents/thingstodo/ahangama_cafe.jpg",
    },

    {
      title: "Experience the Local Food Scene",

      description:
        "Taste Sri Lankan favourites alongside modern coastal dishes and discover the mix of local and international flavours that has become part of Ahangama's lifestyle.",

      imageUrl: "/documents/thingstodo/ahangama_food.jpg",
    },

    {
      title: "Explore Local Surf Spots",

      description:
        "Discover the different surf breaks along the surrounding coastline and experience the variety of waves and coastal scenery around Ahangama.",

      imageUrl: "/documents/thingstodo/ahangama_surf_spots.jpg",
    },

    
    

    {
      title: "Discover Nearby Beaches",

      description:
        "Explore the beautiful beaches along the surrounding South Coast and discover quieter stretches of sand away from the main surf areas.",

      imageUrl: "/documents/thingstodo/ahangama_beaches.jpg",
    },

   

    {
      title: "Watch the Sunset by the Ocean",

      description:
        "End the day along the coast as warm evening light spreads across the ocean and palm-lined shoreline.",

      imageUrl: "/documents/thingstodo/ahangama_sunset.jpg",
    },

    
  ],
}, 
{
  slug: "matara",

  name: "Matara",

  region: "South Coast",

  description:
    "Matara is a historic coastal destination on Sri Lanka's southern coast, where colonial heritage, beautiful beaches and relaxed coastal life come together. From the historic walls of Matara Fort and Star Fort to the peaceful shores of Polhena, the area offers a rich combination of culture, history and tropical scenery. Matara also provides a convenient base for discovering the surrounding southern coastline, including the surf bay of Hiriketiya, the beaches of Dikwella and the quieter coastal landscapes around Tangalle.",

  highlights: [
    "Matara Fort & Star Fort",
    "Polhena Beach & Southern Coast",
    "Hiriketiya, Dikwella & Tangalle",
  ],

  bestTime: "November to April",

  activities: [
    "Matara Fort Exploration",
    "Star Fort Visit",
    "Matara Old Town Experience",
    "Polhena Beach Experience",
    "Dikwella Beach Exploration",
    "Hiriketiya Bay Surfing",
    "Hiriketiya Beach Experience",
    "Tangalle Beach Exploration",
    "Tangalle Lagoon Experience",
    "Mulkirigala Rock Temple Visit",
    "South Coast Coastal Drive",
    "Southern Coast Sunset Experience",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Matara Fort & Star Fort",
      imageUrl: "/documents/destination_explore_Image/matara_fort.jpg",
    },

    {
      title: "Polhena Beach & Southern Coast",
      imageUrl: "/documents/destination_explore_Image/polhena.jpg",
    },

    {
      title: "Hiriketiya, Dikwella & Tangalle",
      imageUrl: "/documents/destination_explore_Image/deep_south.jpg",
    },
  ],

  aboutText:
    "Matara offers a fascinating combination of Sri Lanka's southern coastal heritage, tropical beaches and relaxed seaside experiences. Travellers can explore the historic Matara Fort and Star Fort, discover the peaceful shores of Polhena and experience the everyday character of a traditional southern coastal town. Beyond Matara itself, the surrounding coastline opens the way to the surf-friendly bay of Hiriketiya, the beaches of Dikwella and the quieter landscapes of Tangalle, making the area an ideal base for discovering the diverse character of Sri Lanka's deep south.",

  imageUrl: "/documents/destination image/matara.jpg",

  galleryImageUrl: "/documents/gallery image/matara.jpg",

  articleSections: [
    {
      title: "The Heritage & Coastal Beauty of Matara",

      description:
        "Matara combines a rich historical character with the natural beauty of Sri Lanka's southern coastline. The old fortifications of Matara Fort and the distinctive Star Fort reflect the town's colonial past, while the surrounding streets reveal the everyday character of a traditional coastal community. Along the shoreline, places such as Polhena offer a more relaxed tropical experience, with warm waters, sandy beaches and beautiful coastal scenery providing a peaceful contrast to the historic heart of the town.",

      imageUrl: "/documents/destination_explore_Image/matara_fort1.jpg",
    },

    {
      title: "Beaches, Surf & the Deep South Coast",

      description:
        "The coastline surrounding Matara is filled with different beach experiences, making the area ideal for travellers who want to explore beyond a single destination. Dikwella offers beautiful stretches of coast, while nearby Hiriketiya is known for its intimate bay and surf culture. Further east, Tangalle brings a quieter atmosphere with spacious beaches, lagoons and tropical landscapes. Together, these destinations create a diverse coastal journey through the southern part of Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/deep_south.jpg",
    },

    {
      title: "Nature, Culture & Coastal Exploration",

      description:
        "Beyond beaches and historical sites, the wider Matara region offers opportunities to discover the cultural and natural character of southern Sri Lanka. Travellers can explore the countryside, take scenic coastal drives, visit the historic Mulkirigala Rock Temple near Tangalle and enjoy peaceful lagoon environments along the coast. With its combination of heritage, beaches, surfing, nature and village landscapes, Matara provides a convenient starting point for experiencing the many sides of the Deep South.",

      imageUrl: "/documents/destination_explore_Image/tangalle_lagoon.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Matara Fort",

      description:
        "Walk through the historic fort area and discover the old walls, streets and coastal views that reflect Matara's colonial heritage.",

      imageUrl: "/documents/thingstodo/matara_fort2.jpg",
    },

    {
      title: "Visit Star Fort",

      description:
        "Discover the distinctive star-shaped fort built during the colonial period and learn about Matara's strategic importance along Sri Lanka's southern coast.",

      imageUrl: "/documents/thingstodo/star_fort.jpg",
    },

    {
      title: "Relax at Polhena Beach",

      description:
        "Enjoy the calm waters and tropical surroundings of Polhena Beach, a popular coastal escape close to Matara.",

      imageUrl: "/documents/thingstodo/polhena1.png",
    },

    

    {
      title: "Discover Dikwella Beach",

      description:
        "Travel along the southern coast to Dikwella and enjoy its beautiful sandy shoreline and relaxed seaside atmosphere.",

      imageUrl: "/documents/thingstodo/dikwella.jpg",
    },

    {
      title: "Surf at Hiriketiya Bay",

      description:
        "Experience the waves of Hiriketiya, a small and scenic bay that has become one of the South Coast's favourite surfing destinations.",

      imageUrl: "/documents/thingstodo/hiriketiya.jpg",
    },

   
    

    {
      title: "Explore Tangalle Beaches",

      description:
        "Discover the spacious beaches around Tangalle and enjoy a quieter side of the southern coastline surrounded by tropical scenery.",

      imageUrl: "/documents/thingstodo/tangalle_beach.jpg",
    },

   
  

    {
      title: "Take a South Coast Coastal Drive",

      description:
        "Follow the scenic coastline from Matara towards Dikwella, Hiriketiya and Tangalle, discovering beaches, villages and changing coastal landscapes along the way.",

      imageUrl: "/documents/thingstodo/southern_coast.jpg",
    },

    {
      title: "Enjoy a Southern Coast Sunset",

      description:
        "End the day beside the ocean and watch the warm evening light spread across the beaches and tropical coastline of southern Sri Lanka.",

      imageUrl: "/documents/thingstodo/south.jpg",
    },
  ],
},
{
  slug: "kalpitiya",

  name: "Kalpitiya",

  region: "North West Coast",

  description:
    "Kalpitiya is a distinctive coastal destination on Sri Lanka's north-western peninsula, where the Indian Ocean meets the peaceful waters of Puttalam Lagoon. Known for its strong winds, wide beaches and rich marine environment, the region has become one of Sri Lanka's leading destinations for kitesurfing and ocean adventures. Beyond the shoreline, travellers can discover dolphins, mangrove-fringed lagoons, traditional fishing communities and the remarkable marine landscapes of the Bar Reef. Kalpitiya offers a quieter and more adventurous coastal experience for travellers looking to explore a different side of Sri Lanka.",

  highlights: [
    "Kitesurfing & Ocean Adventures",
    "Dolphins & Marine Wildlife",
    "Puttalam Lagoon & Coastal Nature",
  ],

  bestTime: "May to October",

  activities: [
    "Kitesurfing in Kalpitiya",
    "Dolphin Watching",
    "Explore Puttalam Lagoon",
    "Bar Reef Marine Experience",
    "Discover Kalpitiya Beaches",
    "Explore the Coastal Fishing Villages",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Kitesurfing & Ocean Adventures",
      imageUrl: "/documents/destination_explore_Image/kalpitiya_kitesurfing.jpg",
    },

    {
      title: "Dolphins & Marine Wildlife",
      imageUrl: "/documents/destination_explore_Image/kalpitiya_dolphins.jpg",
    },

    {
      title: "Puttalam Lagoon & Coastal Nature",
      imageUrl: "/documents/destination_explore_Image/kalpitiya_lagoon.jpg",
    },
  ],

  aboutText:
    "Kalpitiya offers a refreshing combination of ocean adventure, marine wildlife and peaceful coastal landscapes. The peninsula is particularly famous for its excellent kitesurfing conditions, while the surrounding waters provide opportunities to encounter large pods of dolphins and explore one of Sri Lanka's richest marine environments. On land, Puttalam Lagoon, mangrove habitats and traditional fishing communities reveal a quieter side of the north-western coast. For travellers seeking an active yet authentic coastal escape away from Sri Lanka's busier beach resorts, Kalpitiya offers an experience shaped by wind, water and nature.",

  imageUrl: "/documents/destination image/kalpitiya.jpg",

  galleryImageUrl: "/documents/gallery image/kalpitiya1.jpg",

  articleSections: [
    {
      title: "Where Wind Meets the Ocean",

      description:
        "Kalpitiya has become one of Sri Lanka's best-known destinations for kitesurfing, thanks to its strong seasonal winds, open coastline and expansive stretches of water. The combination of ocean and lagoon creates a varied setting for water-based adventures, while the wide beaches and relaxed atmosphere give the area a distinctly different character from the island's more developed coastal resorts. Even for travellers who do not take to the kite themselves, watching the colourful sails move across the water is part of the unique energy of Kalpitiya.",

      imageUrl: "/documents/destination_explore_Image/kalpitiya_kitesurfing1.jpg",
    },

    {
      title: "Dolphins, Reefs & the Marine World",

      description:
        "The waters around Kalpitiya are home to an extraordinary variety of marine life, making the region particularly rewarding for travellers interested in the ocean. Dolphin-watching excursions can reveal large groups moving through the open sea, while boat journeys towards the Bar Reef offer opportunities to discover coral-rich waters and the diverse life beneath the surface. These experiences bring travellers closer to the natural character of Sri Lanka's north-western coastline and reveal a marine landscape that is very different from the island's traditional beach destinations.",

      imageUrl: "/documents/destination_explore_Image/kalpitiya_dolphins1.jpg",
    },

    {
      title: "Lagoon Life & the Quiet North-West Coast",

      description:
        "Beyond the open ocean, Kalpitiya is surrounded by the calm waters of Puttalam Lagoon, where mangroves, sandbanks and traditional fishing communities create a peaceful coastal landscape. Exploring the lagoon provides a slower perspective of the region, with local boats moving across the water and changing light reflecting across the wide lagoon environment. Combined with the peninsula's quiet beaches and rural coastal scenery, these experiences offer travellers a chance to discover a less familiar and more authentic side of Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/kalpitiya_lagoon1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Go Kitesurfing in Kalpitiya",

      description:
        "Experience the strong seasonal winds and open waters that have made Kalpitiya one of Sri Lanka's leading destinations for kitesurfing.",

      imageUrl: "/documents/thingstodo/kalpitiya_kitesurfing2.jpg",
    },

    {
      title: "Watch Dolphins in the Open Sea",

      description:
        "Take a boat excursion into the waters around Kalpitiya and look for dolphins moving through the ocean in large and memorable groups.",

      imageUrl: "/documents/thingstodo/kalpitiya_dolphins2.jpg",
    },

    {
      title: "Explore Puttalam Lagoon",

      description:
        "Cruise through the peaceful waters of Puttalam Lagoon and discover mangroves, sandbanks, fishing boats and beautiful coastal scenery.",

      imageUrl: "/documents/thingstodo/puttalam_lagoon.jpg",
    },

    {
      title: "Discover the Bar Reef",

      description:
        "Explore the marine environment around the Bar Reef and experience the rich underwater landscapes and biodiversity of Sri Lanka's north-western coast.",

      imageUrl: "/documents/thingstodo/bar_reef.jpg",
    },

    {
      title: "Relax on Kalpitiya Beach",

      description:
        "Enjoy the wide sandy beaches and peaceful atmosphere of the peninsula, away from the busier resort areas of Sri Lanka's western coast.",

      imageUrl: "/documents/thingstodo/kalpitiya_beach.jpg",
    },

    {
      title: "Discover Coastal Fishing Life",

      description:
        "Explore the traditional fishing communities around Kalpitiya and experience the everyday coastal life that continues to shape the region.",

      imageUrl: "/documents/thingstodo/kalpitiya_fishing.jpg",
    },
  ],
},
  {
  slug: "trincomalee",

  name: "Trincomalee",

  region: "East Coast",

  description:
    "Trincomalee is a beautiful coastal destination on Sri Lanka's northeast coast, known for its wide sandy beaches, clear blue waters, sacred temples and rich maritime heritage. From the relaxed shores of Nilaveli and Uppuveli to the dramatic cliffs of Swami Rock and the marine life around Pigeon Island, Trincomalee offers a wonderful combination of tropical beauty, culture, history and ocean adventures.",

  highlights: [
    "Nilaveli Beach & East Coast",
    "Koneswaram Temple & Swami Rock",
    "Pigeon Island & Marine Life",
  ],

  bestTime: "May to September",

  activities: [
    "Nilaveli Beach Experience",
    "Pigeon Island Snorkelling",
    "Whale Watching",
    "Dolphin Watching",
    "Scuba Diving",
    "Koneswaram Temple Visit",
    "Swami Rock Viewpoint",
    "Fort Frederick Exploration",
    "Kanniya Hot Springs",
    "East Coast Boat Experiences",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Nilaveli Beach & East Coast",
      imageUrl: "/documents/destination_explore_Image/nilaveli.jpg",
    },

    {
      title: "Koneswaram Temple & Swami Rock",
      imageUrl: "/documents/destination_explore_Image/koneswaram.jpg",
    },

    {
      title: "Pigeon Island & Marine Life",
      imageUrl: "/documents/destination_explore_Image/pigeon_island.jpg",
    },
  ],

  aboutText:
    "Trincomalee brings together some of Sri Lanka's most beautiful coastal experiences with a rich spiritual and historical character. Travellers can relax on the wide beaches of Nilaveli and Uppuveli, visit the sacred Koneswaram Temple overlooking the Indian Ocean, explore historic Fort Frederick and discover the colourful marine life around Pigeon Island. With its calm beaches, clear waters, dramatic coastal landscapes and relaxed atmosphere, Trincomalee offers a memorable escape on Sri Lanka's eastern coast.",

  imageUrl: "/documents/destination image/trincomalee.jpg",

  galleryImageUrl: "/documents/gallery image/trincomalee.jpg",

  articleSections: [
    {
      title: "The Tropical Beauty of Trincomalee",

      description:
        "Trincomalee is a beautiful coastal destination on Sri Lanka's northeast coast, known for its wide beaches, clear waters and relaxed tropical atmosphere. From the soft sands of Nilaveli and Uppuveli to the calm waters surrounding the natural harbour, the area offers a quieter side of Sri Lanka's coastline. The combination of warm sunshine, beautiful sea views and spacious beaches makes Trincomalee an ideal place to slow down and enjoy the natural beauty of the island. Whether spending a peaceful morning by the ocean or exploring the coastline by boat, travellers can experience a more relaxed and peaceful feeling here.",

      imageUrl: "/documents/destination_explore_Image/nilaveli1.jpg",
    },

    {
      title: "Sacred Heritage & Coastal History",

      description:
        "Beyond its beaches, Trincomalee has a rich cultural and historical character shaped by centuries of maritime and religious traditions. Koneswaram Temple stands dramatically above the ocean on Swami Rock, offering both a deeply significant cultural experience and beautiful views across the sea. Nearby, Fort Frederick reflects the area's colonial history, while the old streets and religious sites around the town reveal the diverse communities that have shaped Trincomalee over time. Exploring these places gives travellers a chance to experience a side of Sri Lanka where spirituality, history and the ocean are closely connected.",

      imageUrl: "/documents/destination_explore_Image/koneswaram1.jpg",
    },

    {
      title: "Ocean Adventures & Island Escapes",

      description:
        "Trincomalee is also a wonderful destination for travellers who want to experience Sri Lanka's marine environment. A boat trip from Nilaveli can take you to Pigeon Island National Park, where coral reefs, colourful reef fish and marine life can be discovered through snorkelling and swimming. The surrounding waters are also known for whale watching, diving and other ocean experiences, while Kanniya's hot springs offer a relaxing experience away from the coast. Together, these experiences make Trincomalee a destination where beautiful beaches, sacred places, wildlife and ocean adventures come together naturally.",

      imageUrl: "/documents/destination_explore_Image/pigeon_island1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Nilaveli Beach",

      description:
        "Relax on one of Trincomalee's most beautiful beaches, known for its wide sandy shoreline, clear waters and peaceful tropical atmosphere.",

      imageUrl: "/documents/thingstodo/nilaveli2.jpg",
    },

    {
      title: "Snorkel at Pigeon Island",

      description:
        "Take a boat trip to Pigeon Island National Park and discover colourful coral reefs, tropical fish and the marine environment surrounding the island through snorkelling.",

      imageUrl: "/documents/thingstodo/pigeon_island2.jpg",
    },

    {
      title: "Visit Koneswaram Temple",

      description:
        "Visit the sacred Koneswaram Temple on Swami Rock and experience its spiritual atmosphere together with spectacular views across the Indian Ocean.",

      imageUrl: "/documents/thingstodo/koneswaram2.jpg",
    },

    {
      title: "Discover Swami Rock",

      description:
        "Stand above the dramatic coastline at Swami Rock and enjoy beautiful panoramic views of the Indian Ocean and Trincomalee's surrounding shores.",

      imageUrl: "/documents/thingstodo/swami_rock.jpg",
    },

    {
      title: "Explore Fort Frederick",

      description:
        "Discover Trincomalee's historic fort and explore the old fortifications while enjoying views across the surrounding coastline and harbour.",

      imageUrl: "/documents/thingstodo/fort_frederick.jpg",
    },

    

    
    {
      title: "Visit Kanniya Hot Springs",

      description:
        "Discover the historic hot springs of Kanniya and enjoy a relaxing stop while learning about one of the region's well-known natural and cultural sites.",

      imageUrl: "/documents/thingstodo/kanniya.jpg",
    },

    {
      title: "Explore Uppuveli Beach",

      description:
        "Spend time along the relaxed shores of Uppuveli, enjoying its tropical scenery, warm waters and laid-back coastal atmosphere.",

      imageUrl: "/documents/thingstodo/uppuveli.jpg",
    },

    {
      title: "Trincomalee Harbour Experience",

      description:
        "Discover one of the world's naturally sheltered deep-water harbours and appreciate the impressive relationship between Trincomalee's coastline, history and maritime life.",

      imageUrl: "/documents/thingstodo/trinco_harbour.jpg",
    },

    {
      title: "East Coast Sunset Experience",

      description:
        "End the day beside the eastern coast as the changing evening light creates beautiful views across the ocean and surrounding tropical landscape.",

      imageUrl: "/documents/thingstodo/trinco_sunset.jpg",
    },
  ],
},
{
  slug: "arugam-bay",

  name: "Arugam Bay",

  region: "East Coast",

  description:
    "Arugam Bay is one of Sri Lanka's most celebrated coastal destinations, known around the world for its exceptional surfing, laid-back atmosphere and beautiful eastern landscapes. The famous crescent-shaped bay attracts surfers from across the globe, while nearby lagoons, fishing villages and wildlife-rich wilderness offer a deeper connection with the natural character of the region. From early-morning waves and lagoon excursions to quiet journeys through the surrounding countryside, Arugam Bay combines adventure, nature and relaxed coastal living in a distinctly Sri Lankan setting.",

  highlights: [
    "World-Class Surfing & Arugam Bay",
    "Pottuvil Lagoon & Coastal Nature",
    "Wildlife & Eastern Wilderness",
  ],

  bestTime: "May to October",

  activities: [
    "Surf at Arugam Bay",
    "Explore Pottuvil Lagoon",
    "Discover Elephant Rock",
    "Visit Muhudu Maha Viharaya",
    "Explore Panama Village",
    "Wildlife Experience in Kumana",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "World-Class Surfing & Arugam Bay",
      imageUrl: "/documents/destination_explore_Image/arugam_bay_surf1.jpg",
    },

    {
      title: "Pottuvil Lagoon & Coastal Nature",
      imageUrl: "/documents/destination_explore_Image/pottuvil_lagoon.jpg",
    },

    {
      title: "Wildlife & Eastern Wilderness",
      imageUrl: "/documents/destination_explore_Image/arugam_wildlife.jpg",
    },
  ],

  aboutText:
    "Arugam Bay brings together some of Sri Lanka's most distinctive eastern-coast experiences, from internationally recognised surf breaks and quiet tropical beaches to lagoons, ancient sites and wildlife-rich landscapes. The destination has a relaxed rhythm that revolves around the ocean, with early mornings on the waves followed by slow afternoons exploring the surrounding countryside. Beyond the main bay, places such as Pottuvil Lagoon, Panama and the wilderness around Kumana reveal a quieter and more natural side of the East Coast, making Arugam Bay an excellent destination for travellers seeking both adventure and authentic coastal experiences.",

  imageUrl: "/documents/destination image/arugam_bay.jpg",

  galleryImageUrl: "/documents/gallery image/arugambay1.jpg",

  articleSections: [
    {
      title: "The Surfing Spirit of Arugam Bay",

      description:
        "Arugam Bay has earned its international reputation through the quality of its waves and the relaxed surf culture that surrounds them. The main point and surrounding breaks attract experienced surfers as well as travellers who simply want to experience the energy of a world-famous surfing destination. Away from the water, the bay has a laid-back rhythm of small cafés, tropical surroundings and sandy coastal roads, creating an atmosphere that feels very different from Sri Lanka's more developed beach resorts. Whether arriving with a surfboard or simply looking for an easygoing coastal escape, Arugam Bay offers a memorable connection with the ocean.",

      imageUrl: "/documents/destination_explore_Image/arugam_bay_surf.jpg",
    },

    {
      title: "Lagoons, Villages & the Eastern Coast",

      description:
        "Beyond the surf, the landscape around Arugam Bay opens into a quieter world of lagoons, wetlands, villages and palm-fringed coastlines. A journey through Pottuvil Lagoon reveals a peaceful natural environment where waterways wind through mangroves and coastal vegetation, while nearby Panama offers glimpses of traditional village life and a more untouched side of the East Coast. These experiences allow travellers to slow down and discover the region beyond its famous beaches, with beautiful scenery and a strong sense of place throughout the surrounding countryside.",

      imageUrl: "/documents/destination_explore_Image/pottuvil_lagoon1.jpg",
    },

    {
      title: "Wildlife & the Eastern Wilderness",

      description:
        "Arugam Bay is also a gateway to some of Sri Lanka's remarkable eastern wilderness areas. The surrounding region supports elephants, birds and other wildlife, while Kumana National Park offers opportunities to explore a landscape shaped by wetlands, forests and seasonal waterways. Ancient cultural sites such as Muhudu Maha Viharaya add another layer to the journey, creating a destination where surfing, nature, wildlife and heritage can be experienced within the same eastern coastal itinerary.",

      imageUrl: "/documents/destination_explore_Image/arugam_wildlife1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Surf at Arugam Bay",

      description:
        "Experience one of Sri Lanka's most famous surf destinations, with renowned waves and a relaxed coastal atmosphere that attracts surfers from around the world.",

      imageUrl: "/documents/thingstodo/arugam_bay_surf2.jpg",
    },

    {
      title: "Explore Pottuvil Lagoon",

      description:
        "Take a peaceful journey through Pottuvil Lagoon and discover mangroves, waterways, birds and the quieter natural landscapes surrounding Arugam Bay.",

      imageUrl: "/documents/thingstodo/pottuvil_lagoon2.jpg",
    },

    {
      title: "Discover Elephant Rock",

      description:
        "Visit the distinctive coastal landmark known as Elephant Rock and enjoy expansive views across the ocean and surrounding eastern landscape.",

      imageUrl: "/documents/thingstodo/elephant_rock.jpg",
    },

    {
      title: "Visit Muhudu Maha Viharaya",

      description:
        "Discover this historic Buddhist site near the coast and experience an important part of the cultural heritage of Sri Lanka's eastern shoreline.",

      imageUrl: "/documents/thingstodo/muhudu_maha_viharaya.jpg",
    },

    {
      title: "Explore Panama Village",

      description:
        "Travel beyond the main tourist area to experience the quieter landscapes, traditional village atmosphere and natural beauty around Panama.",

      imageUrl: "/documents/thingstodo/panama_village.jpg",
    },

    {
      title: "Experience Wildlife in Kumana",

      description:
        "Explore the wetlands and wilderness of Kumana and look for birds, elephants and other wildlife in one of Sri Lanka's important eastern nature areas.",

      imageUrl: "/documents/thingstodo/kumana.jpg",
    },
  ],
},
{
  slug: "pasikuda",

  name: "Pasikuda",

  region: "East Coast",

  description:
    "Pasikuda is one of Sri Lanka's most beautiful tropical beach destinations, celebrated for its exceptionally shallow turquoise waters, wide sandy shoreline and peaceful atmosphere. The calm bay stretches into the Indian Ocean with warm, clear water that makes it ideal for swimming, relaxing and enjoying gentle water activities. Surrounded by luxury beachfront resorts and the quiet landscapes of Sri Lanka's eastern coast, Pasikuda offers an elegant seaside escape for travellers seeking sunshine, comfort and unhurried days beside the ocean.",

  highlights: [
    "Pasikuda Bay & Shallow Waters",
    "Tropical Beach Escape",
    "Marine Experiences & Coastal Relaxation",
  ],

  bestTime: "May to September",

  activities: [
    "Swim in Pasikuda Bay",
    "Relax on Pasikuda Beach",
    "Enjoy Water Sports",
    "Explore the Coral-Rich Coast",
    "Sunrise by the Indian Ocean",
    "Luxury Beachfront Experience",
  ],

  motif: "sun",

  highlightCards: [
    {
      title: "Pasikuda Bay & Shallow Waters",
      imageUrl: "/documents/destination_explore_Image/pasikuda_bay.jpg",
    },

    {
      title: "Tropical Beach Escape",
      imageUrl: "/documents/destination_explore_Image/pasikuda_beach.jpg",
    },

    {
      title: "Marine Experiences & Coastal Relaxation",
      imageUrl: "/documents/destination_explore_Image/pasikuda_marine.jpg",
    },
  ],

  aboutText:
    "Pasikuda is a destination defined by the beauty and calmness of its coastline. The bay is famous for its remarkably shallow turquoise waters, allowing travellers to walk and swim far out from the shore while surrounded by warm tropical sea. Long stretches of golden sand, clear water and luxury beachfront resorts create an atmosphere designed for relaxation, while gentle marine activities offer opportunities to experience the coast from the water. For travellers looking for a peaceful luxury beach escape on Sri Lanka's eastern coast, Pasikuda offers an ideal combination of natural beauty and comfort.",

  imageUrl: "/documents/destination image/pasikuda.jpg",

  galleryImageUrl: "/documents/gallery image/pasikuda1.jpg",

  articleSections: [
    {
      title: "The Turquoise Waters of Pasikuda Bay",

      description:
        "Pasikuda's greatest attraction is its extraordinary coastline, where clear turquoise water extends across a broad, gently shelving bay. The shallow sea allows visitors to walk considerable distances into the water while remaining close to the shore, creating a distinctive beach experience that is particularly beautiful in the soft morning and evening light. The wide sandy shoreline and calm conditions give the bay an unhurried atmosphere, making it a natural choice for travellers who want to spend time swimming, walking and simply enjoying the warmth of the eastern coast.",

      imageUrl: "/documents/destination_explore_Image/pasikuda_bay1.jpg",
    },

    {
      title: "A Peaceful Tropical Beach Escape",

      description:
        "Life in Pasikuda moves at a slower pace, with long beach days, warm ocean water and peaceful tropical surroundings defining the experience. The coastline is home to a collection of elegant beachfront resorts, allowing travellers to combine the natural beauty of the bay with a comfortable and private retreat. Whether enjoying a quiet morning beside the sea, taking a leisurely walk along the sand or watching the changing colours of the sky at sunset, Pasikuda offers the kind of relaxed coastal experience that encourages travellers to simply slow down.",

      imageUrl: "/documents/destination_explore_Image/pasikuda_beach1.jpg",
    },

    {
      title: "Exploring the Eastern Coast by Sea",

      description:
        "The calm waters around Pasikuda also create opportunities to experience the eastern coastline from the water. Gentle boating and selected water activities allow travellers to discover the bay from a different perspective, while the surrounding marine environment adds another dimension to the beach experience. Combined with the area's warm climate, open coastline and peaceful atmosphere, these experiences make Pasikuda particularly appealing for travellers looking for a refined tropical escape where the ocean remains at the centre of the journey.",

      imageUrl: "/documents/destination_explore_Image/pasikuda_marine1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Swim in Pasikuda Bay",

      description:
        "Enjoy the remarkably shallow, warm and clear waters of Pasikuda Bay, one of the most distinctive swimming experiences on Sri Lanka's eastern coast.",

      imageUrl: "/documents/thingstodo/pasikuda_swimming.jpg",
    },

    {
      title: "Relax on Pasikuda Beach",

      description:
        "Spend an unhurried day along the wide sandy shoreline, surrounded by turquoise water and the peaceful atmosphere of the eastern coast.",

      imageUrl: "/documents/thingstodo/pasikudah_Beach.jpg",
    },

    {
      title: "Enjoy Water Sports",

      description:
        "Experience selected gentle water activities in the calm waters of the bay and discover the coastline from a different perspective.",

      imageUrl: "/documents/thingstodo/pasikuda_water_sports.jpg",
    },

    {
      title: "Explore the Coastal Waters",

      description:
        "Take time to appreciate the clear waters and marine surroundings of Pasikuda while enjoying the natural beauty of the bay.",

      imageUrl: "/documents/thingstodo/pasikuda_marine (2).jpg",
    },

    {
      title: "Watch the Sunrise by the Ocean",

      description:
        "Begin the day beside the Indian Ocean and watch the early morning light transform the calm waters and sandy shoreline.",

      imageUrl: "/documents/thingstodo/pasikuda_sunrise.jpg",
    },

    {
      title: "Enjoy a Luxury Beach Retreat",

      description:
        "Combine the beauty of Pasikuda's coastline with the comfort of a private beachfront stay and enjoy a slower, more refined tropical escape.",

      imageUrl: "/documents/thingstodo/pasikuda_luxury.jpg",
    },
  ],
},
  {
  slug: "anuradhapura",

  name: "Anuradhapura",

  region: "North Central Province",

  description:
    "Anuradhapura is one of Sri Lanka's most important ancient cities, where centuries of history, Buddhist traditions and peaceful natural surroundings come together. Once the capital of ancient Sri Lanka, the city is now home to magnificent stupas, ancient monasteries, sacred trees, stone carvings and the remains of a remarkable civilisation. Its sacred atmosphere and impressive ancient monuments make Anuradhapura an unforgettable destination for travellers interested in Sri Lanka's cultural heritage.",

  highlights: [
    "Sri Maha Bodhi & Sacred Heritage",
    "Ruwanwelisaya & Ancient Stupas",
    "Ancient City & Monastic Ruins",
  ],

  bestTime: "May to September",

  activities: [
    "Ancient City Exploration",
    "Sri Maha Bodhi Visit",
    "Ruwanwelisaya Visit",
    "Abhayagiri Monastery Exploration",
    "Jetavanaramaya Visit",
    "Isurumuniya Rock Temple",
    "Samadhi Buddha Statue",
    "Kuttam Pokuna",
    "Mihintale Excursion",
    "Ancient Irrigation & Reservoir Exploration",
    "Cycling Through the Ancient City",
    "Cultural & Buddhist Heritage Tours",
  ],

  motif: "temple",

  highlightCards: [
    {
      title: "Sri Maha Bodhi & Sacred Heritage",
      imageUrl: "/documents/destination_explore_Image/sri_maha_bodhi.jpg",
    },

    {
      title: "Ruwanwelisaya & Ancient Stupas",
      imageUrl: "/documents/destination_explore_Image/ruwanwelisaya.jpg",
    },

    {
      title: "Ancient City & Monastic Ruins",
      imageUrl: "/documents/destination_explore_Image/anuradhapura_ancient.jpg",
    },
  ],

  aboutText:
    "Anuradhapura offers travellers a remarkable journey into the spiritual and historical heart of ancient Sri Lanka. Across its vast archaeological landscape are enormous stupas, sacred trees, ancient monasteries, stone carvings, bathing ponds and the remains of a sophisticated civilisation. The city is still an important place of pilgrimage, allowing visitors to experience both ancient monuments and living Buddhist traditions. With its peaceful surroundings and timeless atmosphere, Anuradhapura is a destination where Sri Lanka's history can be experienced at a slower and more meaningful pace.",

  imageUrl: "/documents/destination image/anuradhapura.jpg",

  galleryImageUrl: "/documents/gallery image/anuradhapura1.jpg",

  articleSections: [
    {
      title: "The Sacred Heart of Ancient Sri Lanka",

      description:
        "Anuradhapura is one of Sri Lanka's most important ancient cities, where centuries of history, Buddhist traditions and peaceful natural surroundings come together. Once the capital of ancient Sri Lanka, the city is now home to magnificent stupas, ancient monasteries, sacred trees, stone carvings and the remains of a remarkable civilisation. Walking or cycling through the ancient city gives travellers a sense of stepping into another time, with enormous monuments rising among trees and quiet pathways. The peaceful atmosphere and deep spiritual character make Anuradhapura a very special place to experience Sri Lanka's cultural heritage.",

      imageUrl: "/documents/destination_explore_Image/anuradhapura_ancient1.jpg",
    },

    {
      title: "Ancient Kingdoms & Buddhist Heritage",

      description:
        "The heart of Anuradhapura is closely connected with Buddhism, and many of its most important sites remain places of worship today. The sacred Sri Maha Bodhi, Ruwanwelisaya and other great stupas attract pilgrims throughout the year, while ancient monasteries such as Abhayagiri reveal the scale and sophistication of the city's religious life. Exploring these places offers more than an opportunity to see ancient architecture; it allows travellers to understand how religion, art, engineering and daily life were closely connected in the ancient kingdom. The combination of living spiritual traditions and centuries-old monuments gives Anuradhapura its unique character.",

      imageUrl: "/documents/destination_explore_Image/ruwanwelisaya1.jpg",
    },

    {
      title: "A Journey Through the Ancient City",

      description:
        "Beyond its famous stupas, Anuradhapura is filled with quieter details that make exploring the ancient city memorable. Ancient stone carvings, royal bathing ponds, monastery ruins, reservoirs and shaded paths reveal different aspects of life in the former capital. Travellers can explore the area by bicycle, take a leisurely heritage tour or continue to nearby Mihintale, a site deeply connected with the arrival of Buddhism in Sri Lanka. Surrounded by greenery and open landscapes, Anuradhapura offers a slower and more reflective experience, allowing visitors to discover the island's ancient history while experiencing the peaceful rhythm of its sacred landscape.",

      imageUrl: "/documents/destination_explore_Image/mihintale.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Visit Sri Maha Bodhi",

      description:
        "Visit one of the most sacred Buddhist sites in Sri Lanka and experience the peaceful atmosphere surrounding the ancient sacred Bodhi tree, an important centre of pilgrimage for centuries.",

      imageUrl: "/documents/thingstodo/sri_maha_bodhi2.jpg",
    },

    {
      title: "Explore Ruwanwelisaya",

      description:
        "Admire one of Anuradhapura's most iconic white stupas and experience the calm spiritual atmosphere surrounding this important Buddhist monument.",

      imageUrl: "/documents/thingstodo/ruwanweliseya2.jpg",
    },

    {
      title: "Discover Abhayagiri Monastery",

      description:
        "Explore the remains of the ancient Abhayagiri monastery complex and discover the impressive scale of one of the most important monastic centres of ancient Sri Lanka.",

      imageUrl: "/documents/thingstodo/abhayagiri (2).jpg",
    },

    {
      title: "Visit Jetavanaramaya",

      description:
        "See the enormous brick stupa of Jetavanaramaya and explore the surrounding archaeological remains that reveal the engineering and religious importance of ancient Anuradhapura.",

      imageUrl: "/documents/thingstodo/jetavanaramaya.jpg",
    },

    {
      title: "See the Samadhi Buddha Statue",

      description:
        "Spend a quiet moment beside the beautifully preserved Samadhi Buddha Statue, one of the most recognised examples of ancient Buddhist sculpture in Sri Lanka.",

      imageUrl: "/documents/thingstodo/samadhi_buddha.jpg",
    },

    {
      title: "Explore Isurumuniya Temple",

      description:
        "Discover this ancient rock temple surrounded by greenery and explore its historic carvings, peaceful setting and distinctive connection to Anuradhapura's early Buddhist heritage.",

      imageUrl: "/documents/thingstodo/isurumuniya.jpg",
    },

    {
      title: "Discover Kuttam Pokuna",

      description:
        "Visit the beautifully constructed Twin Ponds and appreciate the advanced water management and architectural skills developed during ancient Sri Lanka's monastic period.",

      imageUrl: "/documents/thingstodo/kuttam_pokuna.jpg",
    },

    {
      title: "Visit Thuparamaya",

      description:
        "Explore one of the ancient city's important stupas and experience the peaceful surroundings of this historic Buddhist site.",

      imageUrl: "/documents/thingstodo/thuparamaya.jpg",
    },

    {
      title: "Explore Mirisavetiya Stupa",

      description:
        "Discover another historic stupa within the sacred city and enjoy the quieter atmosphere surrounding its ancient grounds.",

      imageUrl: "/documents/thingstodo/mirisavetiya (2).jpg",
    },


    {
      title: "Visit Mihintale",

      description:
        "Travel to nearby Mihintale, a sacred hill associated with the introduction of Buddhism to Sri Lanka, and explore its ancient religious sites while enjoying views across the surrounding landscape.",

      imageUrl: "/documents/thingstodo/mihintale.jpg",
    },

    {
      title: "Discover Ancient Reservoirs & Landscapes",

      description:
        "Explore the ancient reservoirs and surrounding landscapes that demonstrate the remarkable irrigation knowledge and relationship with water developed by Sri Lanka's early civilisation.",

      imageUrl: "/documents/thingstodo/anuradhapura_reservoir.jpg",
    },
  ],
},
  {
  slug: "polonnaruwa",

  name: "Polonnaruwa",

  region: "North Central Province",

  description:
    "Polonnaruwa takes travellers into the heart of Sri Lanka's medieval past, where ancient royal ruins, impressive stone monuments and peaceful landscapes tell the story of a once-powerful kingdom. Once the medieval capital of Sri Lanka, the city was carefully planned with royal palaces, temples, monasteries, gardens and reservoirs spread across a vast landscape. Today, its remarkable ruins and ancient engineering offer travellers a fascinating glimpse into the island's royal, religious and architectural heritage.",

  highlights: [
    "Gal Vihara & Stone Masterpieces",
    "Ancient Royal City",
    "Polonnaruwa's Sacred Monuments",
  ],

  bestTime: "May to September",

  activities: [
    "Ancient City Exploration",
    "Gal Vihara Visit",
    "Royal Palace Complex",
    "Sacred Quadrangle",
    "Vatadage Exploration",
    "Rankoth Vehera",
    "Lankatilaka Temple",
    "Parakrama Samudra",
    "Cycling Through Ancient Ruins",
    "Ancient Irrigation & Engineering Discovery",
    "Cultural Heritage Tours",
  ],

  motif: "temple",

  highlightCards: [
    {
      title: "Gal Vihara & Stone Masterpieces",
      imageUrl: "/documents/destination_explore_Image/gal_vihara.jpg",
    },

    {
      title: "Ancient Royal City",
      imageUrl: "/documents/destination_explore_Image/polonnaruwa_ancient.jpg",
    },

    {
      title: "Polonnaruwa's Sacred Monuments",
      imageUrl: "/documents/destination_explore_Image/polonnaruwa_sacred.jpg",
    },
  ],

  aboutText:
    "Polonnaruwa offers travellers a fascinating journey into Sri Lanka's medieval kingdom, where impressive stone monuments, ancient temples, royal ruins and sophisticated irrigation systems remain across a peaceful archaeological landscape. The city reveals the achievements of a civilisation that combined religion, architecture, agriculture and engineering on a remarkable scale. From the beautifully carved Buddha figures of Gal Vihara to the vast waters of Parakrama Samudra, Polonnaruwa gives visitors a deeper understanding of Sri Lanka's royal and cultural heritage.",

  imageUrl: "/documents/destination image/polonnaruwa.jpg",

  galleryImageUrl: "/documents/gallery image/polonnaruwa1.jpg",

  articleSections: [
    {
      title: "The Medieval Kingdom of Polonnaruwa",

      description:
        "Polonnaruwa takes travellers into the heart of Sri Lanka's medieval past, where ancient royal ruins, impressive monuments and peaceful landscapes tell the story of a once-powerful kingdom. Once the medieval capital of Sri Lanka, the city was carefully planned with royal palaces, temples, monasteries, gardens and reservoirs spread across a vast landscape. Today, visitors can walk or cycle through the ancient city, passing weathered stone buildings and enormous monuments surrounded by trees and open spaces. The atmosphere is peaceful, yet the scale of the ruins gives a strong impression of the civilisation that once flourished here.",

      imageUrl: "/documents/destination_explore_Image/polonnaruwa_ancient1.jpg",
    },

    {
      title: "Stone, Art & Sacred Heritage",

      description:
        "One of Polonnaruwa's greatest attractions is its remarkable stone architecture and ancient craftsmanship. At Gal Vihara, beautifully carved Buddha figures have been created directly from a large rock face, showing the skill and artistic detail of the craftsmen of the period. Around the Sacred Quadrangle, visitors can discover beautifully preserved structures such as the Vatadage and other religious monuments, while temples such as Lankatilaka reveal the architectural ambition of the medieval kingdom. Exploring these sites offers more than a look at ancient ruins; it provides a chance to appreciate the art, beliefs and craftsmanship that shaped Sri Lanka's cultural heritage.",

      imageUrl: "/documents/destination_explore_Image/gal_vihara1.jpg",
    },

    {
      title: "An Ancient City Shaped by Water",

      description:
        "Polonnaruwa was not only a centre of religion and royalty but also a remarkable example of ancient planning and water management. The vast Parakrama Samudra reservoir and surrounding irrigation systems supported agriculture and helped sustain the kingdom's population. Today, the reservoir, green landscapes and ancient ruins create a beautiful setting for exploring the region at a relaxed pace. Travellers can cycle between historic sites, pause beside the water or continue through the surrounding countryside, experiencing how architecture, nature and ancient engineering were closely connected in the life of medieval Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/parakrama_samudra.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Visit Gal Vihara",

      description:
        "Admire the remarkable Buddha figures carved directly into a granite rock face and appreciate one of the finest examples of ancient Sri Lankan stone craftsmanship.",

      imageUrl: "/documents/thingstodo/Gal_vihara2.jpg",
    },

    {
      title: "Explore the Sacred Quadrangle",

      description:
        "Discover a remarkable group of ancient religious monuments gathered within the historic heart of Polonnaruwa, including beautifully preserved structures and intricate stone details.",

      imageUrl: "/documents/thingstodo/sacred_quadrangle.jpg",
    },

    {
      title: "Discover the Royal Palace Complex",

      description:
        "Explore the remains of the ancient royal palace and surrounding structures, offering a glimpse into the scale and organisation of medieval Polonnaruwa.",

      imageUrl: "/documents/thingstodo/royal_palace.jpg",
    },

    {
      title: "Explore Vatadage",

      description:
        "Admire the elegant circular Vatadage, known for its detailed stonework, carved guardstones and carefully designed entrance structures.",

      imageUrl: "/documents/thingstodo/vatadage.jpg",
    },

    {
      title: "Visit Lankatilaka Temple",

      description:
        "Discover the impressive brick architecture of Lankatilaka and explore the remains of one of Polonnaruwa's most distinctive medieval religious buildings.",

      imageUrl: "/documents/thingstodo/lankatilaka.jpg",
    },

    {
      title: "See Rankoth Vehera",

      description:
        "Visit one of Polonnaruwa's largest ancient stupas and experience the peaceful atmosphere surrounding this impressive monument.",

      imageUrl: "/documents/thingstodo/rankoth_vehera.jpg",
    },

    {
      title: "Explore Nissankalata Mandapa",

      description:
        "Discover this unique stone pavilion and appreciate its elegant columns and unusual architectural design within the ancient city.",

      imageUrl: "/documents/thingstodo/nissankalata_mandapa.jpg",
    },

    {
      title: "Visit Parakrama Samudra",

      description:
        "Experience the vast ancient reservoir that reflects the remarkable irrigation knowledge and engineering achievements of medieval Sri Lanka.",

      imageUrl: "/documents/thingstodo/parakrama_samudra1.jpg",
    },

    {
      title: "Cycle Through the Ancient City",

      description:
        "Explore the archaeological landscape by bicycle, travelling between ancient temples, stupas, royal ruins and peaceful green surroundings at a relaxed pace.",

      imageUrl: "/documents/thingstodo/polonnaruwa_cycling.jpg",
    },

    {
      title: "Discover Ancient Irrigation Systems",

      description:
        "Learn how sophisticated reservoirs, canals and water-management systems helped support agriculture and everyday life during the medieval kingdom.",

      imageUrl: "/documents/thingstodo/polonnaruwa_irrigation.jpg",
    },

   

    {
      title: "Explore the Ancient Monastic Complexes",

      description:
        "Discover the remains of monasteries, stupas and other religious structures spread throughout the ancient city and learn about the important role of Buddhism in medieval Polonnaruwa.",

      imageUrl: "/documents/thingstodo/polonnaruwa_monastery.jpg",
    },
  ],
},
{
  slug: "jaffna",

  name: "Jaffna",

  region: "Northern Sri Lanka",

  description:
    "Jaffna offers a fascinating glimpse into the distinctive culture, heritage and landscapes of northern Sri Lanka. From the magnificent Nallur Kandaswamy Kovil and historic Jaffna Fort to quiet islands, lagoons, palmyrah palms and traditional villages, the peninsula has a character unlike anywhere else on the island. Travellers can discover centuries of Tamil heritage, vibrant local traditions, unique northern cuisine and peaceful coastal landscapes while experiencing a slower and more intimate side of Sri Lanka.",

  highlights: [
    "Nallur Kandaswamy Kovil & Tamil Heritage",
    "Jaffna Fort & Historic Peninsula",
    "Northern Islands & Coastal Landscapes",
  ],

  bestTime: "January to September",

  activities: [
    "Visit Nallur Kandaswamy Kovil",
    "Explore Jaffna Fort",
    "Discover Delft Island",
    "Explore Jaffna's Northern Islands",
    "Visit Nagadeepa Purana Vihara",
    "Discover Jaffna's Traditional Cuisine",
  ],

  motif: "temple",

  highlightCards: [
    {
      title: "Nallur Kandaswamy Kovil",
      imageUrl: "/documents/destination_explore_Image/jaffna_nallur.jpg",
    },

    {
      title: "Jaffna Fort & Heritage",
      imageUrl: "/documents/destination_explore_Image/jaffna_fort.jpg",
    },

    {
      title: "Northern Islands & Coast",
      imageUrl: "/documents/destination_explore_Image/jaffna_islands.jpg",
    },
  ],

  aboutText:
    "Jaffna reveals a side of Sri Lanka shaped by centuries of Tamil culture, religious traditions, maritime connections and island life. The peninsula's historic temples, colonial-era fortifications, quiet roads lined with palmyrah palms and surrounding islands create a distinctive atmosphere for travellers seeking something beyond the country's better-known southern and central destinations. From exploring Nallur and Jaffna Fort to travelling across the northern islands and tasting the region's unique cuisine, Jaffna offers an enriching journey through the cultural heart of northern Sri Lanka.",

  imageUrl: "/documents/destination image/jaffna.jpg",

  galleryImageUrl: "/documents/gallery image/jaffna.jpg",

  articleSections: [
    {
      title: "The Cultural Heart of Northern Sri Lanka",

      description:
        "Jaffna's identity is deeply connected to its Tamil heritage, with centuries-old religious traditions, distinctive architecture and local customs shaping everyday life across the peninsula. The magnificent Nallur Kandaswamy Kovil stands at the centre of this cultural landscape, while colourful temples, traditional homes and quiet streets reveal a character that feels distinctly different from other parts of Sri Lanka. For travellers, exploring Jaffna offers an opportunity to experience the island's cultural diversity through its living traditions rather than simply through historic monuments.",

      imageUrl: "/documents/destination_explore_Image/jaffna_nallur1.jpg",
    },

    {
      title: "Fortresses, Islands & Northern Horizons",

      description:
        "Jaffna's history is also written across its coastline and islands, where Portuguese and Dutch influences meet much older local traditions. Jaffna Fort overlooks the surrounding peninsula, while journeys towards Delft Island and the northern islands open up a quieter world of coral landscapes, open seas and remote communities. Travelling through these landscapes gives visitors a sense of the peninsula's maritime character and the remarkable variety of scenery found in Sri Lanka's far north.",

      imageUrl: "/documents/destination_explore_Image/jaffna_fort1.jpg",
    },

    {
      title: "Flavours & Everyday Life in Jaffna",

      description:
        "Beyond its temples and historic sites, Jaffna is a destination best understood through its everyday life, food and landscapes. Palmyrah palms are a defining feature of the north, while the region's cuisine brings together bold spices, seafood, vegetables and distinctive Tamil culinary traditions. Exploring local markets, villages and coastal communities allows travellers to experience a slower rhythm of life and discover the warmth, flavours and traditions that make northern Sri Lanka so distinctive.",

      imageUrl: "/documents/destination_explore_Image/jaffna_islands1.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Visit Nallur Kandaswamy Kovil",

      description:
        "Experience one of northern Sri Lanka's most important Hindu temples and discover the living religious traditions and striking architecture of Jaffna.",

      imageUrl: "/documents/thingstodo/jaffna_nallur2.jpg",
    },

    {
      title: "Explore Jaffna Fort",

      description:
        "Walk through the historic fortifications overlooking the peninsula and discover layers of Portuguese, Dutch and British-era history.",

      imageUrl: "/documents/thingstodo/jaffna_fort2.jpg",
    },

    {
      title: "Discover Delft Island",

      description:
        "Travel across the sea to Delft Island and explore its distinctive landscapes, historic remains, coral walls and traditional island communities.",

      imageUrl: "/documents/thingstodo/delft_island2.jpg",
    },

    {
      title: "Explore the Northern Islands",

      description:
        "Discover the quieter islands around the Jaffna Peninsula, where coastal scenery, lagoons and local communities create a different perspective on northern Sri Lanka.",

      imageUrl: "/documents/thingstodo/jaffna_island.jpg",
    },

    {
      title: "Visit Nagadeepa",

      description:
        "Journey to Nagadeepa and discover its important Buddhist heritage alongside the peaceful coastal landscapes of the northern islands.",

      imageUrl: "/documents/thingstodo/nagadeepa.jpg",
    },

    
  ],
},
];

export type Service = {
  title: string;
  description: string;
  icon:
    | "plane"
    | "car"
    | "car-front"
    | "guide"
    | "hotel"
    | "train"
    | "route"
    | "camera";
};

export const services: Service[] = [
  { title: "Airport Transfers", description: "Seamless, private transfers timed to your flight — every time you land.", icon: "plane" },
  { title: "Private Chauffeur", description: "A dedicated English-speaking chauffeur for the length of your journey.", icon: "car" },
  { title: "Luxury Vehicles", description: "Modern, air-conditioned fleets, from private sedans to spacious SUVs.", icon: "car-front" },
  { title: "Professional Tour Guides", description: "Licensed guides with deep local knowledge and genuine warmth.", icon: "guide" },
  { title: "Hotel Booking Assistance", description: "Curated stays across boutique villas, heritage hotels and resorts.", icon: "hotel" },
  { title: "Train Ticket Assistance", description: "Reserved seats on Sri Lanka's scenic rail lines, secured in advance.", icon: "train" },
  { title: "Customised Tours", description: "Bespoke itineraries built entirely around your pace and interests.", icon: "route" },
  { title: "Photography Tours", description: "Golden-hour routes and local access built for serious photographers.", icon: "camera" },
];

export const testimonials = [
  
];

export const faqs = [
  {
    q: "How far in advance should I book?",
    a: "We recommend enquiring 2–3 months before your intended travel dates, especially for December–March, our peak season. We can also accommodate shorter notice where possible.",
  },
  {
    q: "Can itineraries be customised?",
    a: "Yes — every tour on this site is a starting point. Tell us your interests, pace and travel dates, and we'll tailor the route, hotels and pacing around you.",
  },
  {
    q: "Is payment required to submit an enquiry?",
    a: "No. Submitting the enquiry form is free and commits you to nothing. A member of our team will follow up with a tailored proposal and pricing.",
  },
  {
    q: "Do you arrange airport pickup?",
    a: "Yes, private airport transfers are included as standard in every multi-day itinerary we arrange.",
  },
  {
    q: "What is the best time of year to visit Sri Lanka?",
    a: "Sri Lanka has two monsoon seasons affecting different coasts, so there is a good time to visit almost year-round. We'll advise on the best route for your travel dates during planning.",
  },
];

export const experienceTimeline = [
  { step: "01", title: "Enquire", description: "Share your travel dates, interests and group size through our form." },
  { step: "02", title: "Design", description: "Our specialists design a tailored itinerary and send a detailed proposal." },
  { step: "03", title: "Confirm", description: "Refine the details with us, then confirm your dates and inclusions." },
  { step: "04", title: "Travel", description: "Your chauffeur, guides and stays are ready from the moment you land." },
  { step: "05", title: "Return", description: "We follow up after your trip — and we're here for the next one." },
];
