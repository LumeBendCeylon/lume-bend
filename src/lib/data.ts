// Central content source. Replace copy and figures with real business data.
// Swapping in real photography: give each `image` field a real /public path
// or remote URL once available — every component here already expects one.

export type ItineraryDay = {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
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
  motif: "mountain" | "wave" | "temple" | "rock" | "leaf" | "sun";

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
  { name: "Wildlife Tours", motif: "leaf", imageUrl: "/documents/images/tour/wildlife.png" },
  { name: "Romantic & Honeymoon Tours", motif: "sun", imageUrl: "/documents/images/tour/couple.png" },
  { name: "Cultural Heritage Tours", motif: "temple", imageUrl: "/documents/images/tour/culture.png"  },
  { name: "Ayurveda & Wellness Tours", motif: "leaf", imageUrl: "/documents/images/tour/wellness.png"},
  { name: "Ramayana Tours", motif: "temple", imageUrl: "/documents/images/tour/ramayana.png"},
];

export const tours: Tour[] = [
  {
    slug: "golden-grand-escape-5-day",
    title: "Golden Ceylon Escape",
    category: "Luxury Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Private sunrise Sigiriya climb", "Candlelit rooftop dinner", "Temple of the Tooth evening ceremony"],
    price: "From $2,450 pp",
    blurb: "Five days of private luxury across Sri Lanka's Cultural Triangle and hill capital, with nothing left to chance.",
    motif: "rock",
    imageUrl: "/documents/images/tour/golden.png",

    heroTitle: "Golden Ceylon Escape — 5 Days of Private Luxury Across Sri Lanka's Golden Triangle",
    intro:
      "In just five days, discover why Sri Lanka is called the Pearl of the Indian Ocean — without ever feeling rushed. This is a private, chauffeur-driven escape through ancient rock fortresses, sacred temple cities and misted hill country, staying exclusively in boutique five-star properties. Every transfer, every meal, every moment has been considered so that all you have to do is arrive.",
    overview:
      "A compact luxury circuit connecting Sri Lanka's Cultural Triangle with the hill capital of Kandy, designed for travellers with limited time who refuse to compromise on quality. Private chauffeur throughout, curated dining, and pacing that leaves room to breathe between each experience.",
    bestFor: "Couples, honeymooners, short-stay luxury travellers",
    groupSize: "Private — just you (and your travel companions)",
    physicalLevel: "Easy, with one optional rock climb",
    destinationsCovered: "Colombo → Sigiriya → Dambulla → Kandy",

    itinerary: [
      {
        day: 1,
        title: "Arrival & the Road to the Ancient City",
        morning:
          "Land at Bandaranaike International Airport, where your private chauffeur is waiting with a chilled towel and king coconut. Begin the scenic drive inland, leaving the coast behind for the island's cultural heartland.",
        afternoon:
          "En route, stop at a family-run spice garden near Habarana — walk through nutmeg, cinnamon and vanilla groves with a local guide, and taste a fresh herbal tea blended in front of you.",
        evening:
          "Arrive at your boutique hotel in the shadow of Sigiriya Rock. Check in as the light turns gold over the surrounding jungle, then settle in for a relaxed dinner on an open-air terrace facing the rock itself.",
        overnight: "Five-star boutique property, Sigiriya.",
        imageUrl: "/documents/images/tour/road1.png",

      },
      {
        day: 2,
        title: "Sigiriya at Sunrise & the Cave Temples of Dambulla",
        morning:
          "Rise early for a private, guided sunrise climb of Sigiriya Rock Fortress — 200 metres of ancient stairways, frescoes and lion-paw gates, timed so you reach the summit before the tour groups arrive.",
        afternoon:
          "Return for a proper breakfast, then set off to explore a nearby traditional village by ox cart and dugout canoe — a slower, human-scale contrast to the morning's grandeur.",
        evening:
          "Visit the Dambulla Cave Temple complex as the day-trippers thin out, admiring 2,000-year-old Buddhist murals by lamplight. Dinner is a private candlelit table arranged on your hotel's rooftop.",
        overnight: "Five-star boutique property, Sigiriya.",
        imageUrl: "/documents/images/tour/sigiriya.png",
      },
      {
        day: 3,
        title: "Into the Hills: The Road to Kandy",
        morning:
          "Depart for Kandy along a scenic back route, stopping at Matale's spice and herbal gardens — an easy, fragrant walk through Sri Lanka's Ayurvedic plant heritage.",
        afternoon:
          "Arrive in Kandy and check into your lakeside hotel. Take a gentle walk around Kandy Lake, then browse the small boutiques and gem shops of the old town at your own pace.",
        evening:
          "Visit the Temple of the Sacred Tooth Relic for the evening puja — a rare, atmospheric experience of drumming and ritual inside Sri Lanka's most sacred Buddhist shrine.",
        overnight: "Five-star lakeside hotel, Kandy.",
        imageUrl: "/documents/images/tour/kandy1.png",

      },
      {
        day: 4,
        title: "Kandy at Leisure: Gardens, Craft and Culture",
        morning:
          "A relaxed morning at the Royal Botanical Gardens, Peradeniya — 147 acres of orchid houses, a giant bamboo avenue and one of Asia's finest palm collections, walked at an unhurried pace.",
        afternoon:
          "Visit a traditional gem-cutting workshop and a batik studio, watching artisans at work before some free time to relax by the hotel pool or book an in-house spa treatment.",
        evening:
          "A private cultural evening: a traditional Kandyan dance performance followed by a farewell dinner featuring Sri Lankan fine dining with a contemporary twist.",
        overnight: "Five-star lakeside hotel, Kandy.",
         imageUrl: "/documents/images/tour/kandy2.png",

      },
      {
        day: 5,
        title: "Departure",
        morning: "A final leisurely breakfast with lake views, with time to pack unhurried.",
        afternoon:
          "Private transfer back to Colombo or directly to the airport, with a stop at a riverside café for a last taste of Ceylon tea before your flight.",
        evening: "Departure transfer to Bandaranaike International Airport.",
        overnight: "N/A — departure day.",
         imageUrl: "/documents/images/tour/city1.png",
      },
    ],

    hotelRecommendation:
      "Boutique five-star properties in Sigiriya and Kandy, each selected for character over chain-hotel uniformity — open-air architecture, personalised service and views that place you inside the landscape.",
    transportation:
      "Private air-conditioned luxury vehicle with a dedicated, English-speaking chauffeur for the full 5 days — no shared transport, no fixed group schedule.",
    meals:
      "Daily breakfast throughout. Two special experience dinners included (Sigiriya rooftop candlelit dinner, Kandy farewell dinner). Remaining meals at your own pace and choice, with chauffeur recommendations provided.",
    included: [
      "4 nights' boutique 5-star accommodation",
      "Daily breakfast + 2 signature dinners",
      "Private chauffeur and vehicle for all transfers and touring",
      "All entrance fees listed in the itinerary",
      "Private sunrise Sigiriya climb with guide",
      "Temple of the Tooth evening ceremony visit",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Meals not specified above",
      "Personal expenses and gratuities",
      "Travel insurance",
    ],
    optionalExperiences: [
      "Hot-air balloon flight over the Cultural Triangle (seasonal)",
      "In-hotel Ayurvedic spa treatments, Kandy",
      "Private photography guide for the Sigiriya climb",
      "Helicopter transfer between Colombo and Sigiriya (in place of road transfer)",
    ],
    tourFaqs: [
      {
        q: "Is the Sigiriya climb difficult?",
        a: "It's roughly 1,200 steps with some steep sections and open-air stairways near the top. Most reasonably fit travellers manage it comfortably at a relaxed pace; those with mobility or heart concerns should let us know in advance.",
      },
      {
        q: "Can this itinerary be extended?",
        a: "Yes — this 5-day escape is often paired with 2–3 additional days on the south coast. Ask us about combining it with our Romantic Tours or Curated Niche Tours.",
      },
      {
        q: "What's the best time of year for this route?",
        a: "January to April offers the driest conditions across both the Cultural Triangle and Kandy.",
      },
      {
        q: "Is this suitable for a honeymoon?",
        a: "Very much so — many couples choose this exact route for a short luxury honeymoon, and we're happy to arrange room upgrades, private candlelit setups and celebratory touches on request.",
      },
    ],
  },
  {
    slug: "luxury-7-day-tour",
    title: "7 Day Luxury Tour",
    category: "Luxury Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Private chauffeur throughout", "Boutique 5-star stays", "Fully customisable pacing"],
    price: "From $3,360 pp",
    blurb: "A 7-day private luxury circuit with five-star stays and a dedicated chauffeur — refined, unhurried, and tailored to you.",
    motif: "rock",
  },
  {
    slug: "luxury-8-day-tour",
    title: "8 Day Luxury Tour",
    category: "Luxury Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Private chauffeur throughout", "Boutique 5-star stays", "Fully customisable pacing"],
    price: "From $3,840 pp",
    blurb: "A 8-day private luxury circuit with five-star stays and a dedicated chauffeur — refined, unhurried, and tailored to you.",
    motif: "rock",
  },
  {
    slug: "luxury-10-day-tour",
    title: "10 Day Luxury Tour",
    category: "Luxury Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Private chauffeur throughout", "Boutique 5-star stays", "Fully customisable pacing"],
    price: "From $4,800 pp",
    blurb: "A 10-day private luxury circuit with five-star stays and a dedicated chauffeur — refined, unhurried, and tailored to you.",
    motif: "rock",
  },
  {
    slug: "luxury-12-day-tour",
    title: "12 Day Luxury Tour",
    category: "Luxury Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Private chauffeur throughout", "Boutique 5-star stays", "Fully customisable pacing"],
    price: "From $5,760 pp",
    blurb: "A 12-day private luxury circuit with five-star stays and a dedicated chauffeur — refined, unhurried, and tailored to you.",
    motif: "rock",
  },
  {
    slug: "general-5-day-tour",
    title: "5 Day General Tour",
    category: "General Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Temple of the Tooth, Kandy"],
    price: "From $975 pp",
    blurb: "A 5-day classic introduction to Sri Lanka's Cultural Triangle and hill capital — the essentials, well paced.",
    motif: "sun",
    imageUrl: "/documents/images/tour/general2.png",
    heroTitle: "Sri Lanka Classic Discovery — 5 Days Through the Cultural Triangle",
  
    intro:
      "A short, well-rounded first look at Sri Lanka: the island's most famous rock fortress, its ancient cave temples, and the hill capital of Kandy, without a rushed schedule.",
    overview:
      "This 5-day route sticks to Sri Lanka's compact Cultural Triangle and Kandy, making it ideal for travellers with limited time who still want to see the country's headline sights properly rather than in a blur.",
    bestFor: "First-time visitors, short layovers, couples and solo travellers",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy, with one moderate rock climb",
    destinationsCovered: "Negombo → Sigiriya → Dambulla → Kandy → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive at Bandaranaike International Airport and transfer to your hotel in nearby Negombo.",
        afternoon: "Rest after your flight, or take a walk along Negombo beach and the old Dutch canal.",
        evening: "Relaxed dinner at a beachfront restaurant, easing into island time.",
        overnight: "Hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo.png",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Drive inland to Sigiriya and climb the 5th-century rock fortress, taking in the mirror wall frescoes en route to the summit.",
        afternoon: "Visit a nearby village for a bullock cart ride and traditional lunch with a local family.",
        evening: "Free time at your hotel, with the rock often visible from the gardens at sunset.",
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/sigiriya3.png",
      },
      {
        day: 3,
        title: "Dambulla Caves & Kandy",
        morning: "Visit the Dambulla Cave Temple complex, one of the best-preserved cave temple groups in Asia.",
        afternoon: "Drive to Kandy, stopping at a spice garden in Matale along the way.",
        evening: "Walk around Kandy Lake before dinner in the town centre.",
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/dambulla1.png",
      },
      {
        day: 4,
        title: "Kandy Sightseeing & Pinnawala",
        morning: "Visit the Temple of the Sacred Tooth Relic and the Royal Botanical Gardens, Peradeniya.",
        afternoon: "En route back towards Colombo, stop at the Pinnawala Elephant Orphanage to see elephants bathing in the river.",
        evening: "Arrive in Colombo and settle in for the evening.",
        overnight: "Hotel in Colombo.",
        imageUrl: "/documents/images/tour/pinnawala.png",
      },
      {
        day: 5,
        title: "Colombo City Tour & Departure",
        morning: "A half-day city tour covering Galle Face Green, the Gangaramaya Temple and the old Dutch Hospital precinct.",
        afternoon: "Free time for last-minute shopping, then transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombon.png",
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
    title: "7 Day General Tour",
    category: "General Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Sigiriya & Dambulla", "Scenic train to Ella", "Nine Arch Bridge & tea country"],
    price: "From $1,365 pp",
    blurb: "A 7-day route adding misty hill country and the famous Kandy–Ella train ride to the classic Cultural Triangle circuit.",
    motif: "sun",
    imageUrl: "/documents/images/tour/general3.png",
    heroTitle: "Heart of Ceylon — 7 Days from Ancient Cities to Tea Country",
    intro:
      "Everything in our 5-day classic, extended into the hills — tea estates, cool mountain air, and one of the world's most scenic train journeys.",
    overview:
      "This route follows the same Cultural Triangle opening as our 5-day tour, then continues up into the hill country for tea plantations, waterfalls and the celebrated rail journey between Nuwara Eliya and Ella.",
    bestFor: "Travellers who want cities, culture and hill country in one trip",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Negombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive at the airport and transfer to your hotel in Negombo.",
        afternoon: "Free time to rest, or a walk along the beach and fish market.",
        evening: "Dinner near the beach, settling into the island's pace.",
        overnight: "Hotel in Negombo.",
        imageUrl: "/documents/images/tour/airport.png",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Drive to Sigiriya and climb the rock fortress, visiting the frescoes and water gardens.",
        afternoon: "Village tour by bullock cart, with a traditional home-cooked lunch.",
        evening: "Relax at your hotel with rock views.",
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/sigiriya5.png",
      },
      {
        day: 3,
        title: "Dambulla Caves & Kandy",
        morning: "Visit the Dambulla Cave Temple, then continue to Kandy via the spice gardens of Matale.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic in Kandy.",
        evening: "Evening walk around Kandy Lake and dinner in town.",
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy.png",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Royal Botanical Gardens, Peradeniya, before heading into the hills.",
        afternoon: "Stop at a working tea factory near Nuwara Eliya for a tour and tasting.",
        evening: "Settle into 'Little England' — Nuwara Eliya's colonial-era hill town.",
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya1.png",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella by Train",
        morning: "Visit Gregory Lake, then board the scenic train from Nanu Oya to Ella.",
        afternoon: "Arrive in Ella and walk to the Nine Arch Bridge for photos as a train crosses.",
        evening: "Dinner with valley views in Ella's small town centre.",
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/nuwaraeliya2.png",
      },
      {
        day: 6,
        title: "Ella to Colombo",
        morning: "Optional early hike to Little Adam's Peak for sunrise views, then breakfast.",
        afternoon: "Scenic drive back towards Colombo, with a stop at Ravana Falls.",
        evening: "Arrive in Colombo for a relaxed evening.",
        overnight: "Hotel in Colombo.",
        imageUrl: "/documents/images/tour/rawanaella.png",
      },
      {
        day: 7,
        title: "Colombo City Tour & Departure",
        morning: "Half-day city tour: Galle Face Green, Gangaramaya Temple, and Pettah market.",
        afternoon: "Free time before transferring to the airport.",
        evening: "Departure flight.",
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
    title: "8 Day General Tour",
    category: "General Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Cultural Triangle & tea country", "Nine Arch Bridge by train", "Yala safari"],
    price: "From $1,560 pp",
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
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive and transfer to your hotel in Negombo.",
        afternoon: "Rest, or explore Negombo's beach and fish market.",
        evening: "Dinner near the beach.",
        overnight: "Hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo2.png",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress, visiting the frescoes and lion-paw gateway.",
        afternoon: "Village tour by bullock cart with a traditional lunch.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/sigiriya6.png",
      },
      {
        day: 3,
        title: "Dambulla Caves & Kandy",
        morning: "Visit the Dambulla Cave Temple and Matale spice gardens en route to Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic.",
        evening: "Walk around Kandy Lake before dinner.",
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/spicy.png",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Royal Botanical Gardens, Peradeniya.",
        afternoon: "Drive into the hills, stopping at a working tea factory near Nuwara Eliya.",
        evening: "Settle into Nuwara Eliya's cool mountain air.",
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/tea.png",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella by Train",
        morning: "Visit Gregory Lake, then take the scenic train to Ella.",
        afternoon: "Walk to the Nine Arch Bridge and explore Ella's town centre.",
        evening: "Dinner with valley views.",
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/ella.png",
      },
      {
        day: 6,
        title: "Ella to Yala",
        morning: "Optional sunrise hike to Little Adam's Peak, then breakfast.",
        afternoon: "Drive to the Yala area, arriving in time to settle in before an afternoon safari.",
        evening: "First jeep safari into Yala National Park in search of leopards and elephants.",
        overnight: "Hotel near Yala.",
        imageUrl: "/documents/images/tour/safari3.png",
      },
      {
        day: 7,
        title: "Yala Safari to South Coast",
        morning: "An early morning jeep safari — the best time for wildlife sightings.",
        afternoon: "Drive towards the south coast, arriving at Mirissa or Galle by evening.",
        evening: "Relaxed dinner by the coast.",
        overnight: "Hotel on the south coast.",
        imageUrl: "/documents/images/tour/whales.png",
      },
      {
        day: 8,
        title: "South Coast to Colombo & Departure",
        morning: "Visit Galle Fort's Dutch-era ramparts and boutique streets.",
        afternoon: "Drive to Colombo, with time for last-minute shopping.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/fort.png",
      },
    ],
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
    title: "10 Day General Tour",
    category: "General Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Ancient city of Polonnaruwa", "Hill country by train", "Yala safari & south coast beaches"],
    price: "From $1,950 pp",
    blurb: "Our 8-day culture-to-safari route, extended with an ancient city and proper time to relax on the south coast.",
    motif: "sun",
    imageUrl: "/documents/images/tour/general5.png",
    heroTitle: "Grand Ceylon Discovery — 10 Days Across the Whole Island",
    intro:
      "A comprehensive route through ancient cities, tea country, wildlife and the south coast — enough time to properly settle into each place rather than just passing through.",
    overview:
      "Building on our 8-day route, this itinerary adds the medieval ruins of Polonnaruwa and extends your time on the south coast, including a chance at whale watching from Mirissa.",
    bestFor: "Travellers who want a complete, well-paced island overview",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Negombo → Polonnaruwa → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Mirissa → Galle → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive and transfer to your hotel in Negombo.",
        afternoon: "Rest, or explore the beach and fish market.",
        evening: "Dinner near the beach.",
        overnight: "Hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo4.png",
      },
      {
        day: 2,
        title: "Polonnaruwa Ancient City",
        morning: "Drive to Polonnaruwa, Sri Lanka's medieval capital.",
        afternoon: "Cycle or walk among the ruins — the Gal Vihara rock carvings and royal palace complex.",
        evening: "Sunset over the Parakrama Samudra reservoir.",
        overnight: "Hotel near Polonnaruwa or Sigiriya.",
        imageUrl: "/documents/images/tour/polonnaruwa2.png",
      },
      {
        day: 3,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress and visit the frescoes.",
        afternoon: "Village tour by bullock cart with a traditional lunch.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/paints.png",
      },
      {
        day: 4,
        title: "Dambulla Caves & Kandy",
        morning: "Visit the Dambulla Cave Temple and Matale spice gardens.",
        afternoon: "Continue to Kandy and visit the Temple of the Sacred Tooth Relic.",
        evening: "Walk around Kandy Lake before dinner.",
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy3.png",
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Royal Botanical Gardens, Peradeniya.",
        afternoon: "Drive into the hills, visiting a working tea factory near Nuwara Eliya.",
        evening: "Settle into the cool mountain town.",
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya3.png",
      },
      {
        day: 6,
        title: "Nuwara Eliya to Ella by Train",
        morning: "Visit Gregory Lake, then take the scenic train to Ella.",
        afternoon: "Walk to the Nine Arch Bridge and explore Ella.",
        evening: "Dinner with valley views.",
        overnight: "Hotel in Ella.",
        imageUrl: "/documents/images/tour/ella2.png",
      },
      {
        day: 7,
        title: "Ella to Yala",
        morning: "Optional sunrise hike to Little Adam's Peak.",
        afternoon: "Drive to Yala, settling in before an afternoon safari.",
        evening: "First jeep safari in search of leopards and elephants.",
        overnight: "Hotel near Yala.",
        imageUrl: "/documents/images/tour/yala.png",
      },
      {
        day: 8,
        title: "Yala to Mirissa",
        morning: "An early morning jeep safari for the best wildlife activity.",
        afternoon: "Drive to Mirissa on the south coast.",
        evening: "Relaxed evening on the beach.",
        overnight: "Hotel in Mirissa.",
        imageUrl: "/documents/images/tour/mirissa1.png",
      },
      {
        day: 9,
        title: "Whale Watching & Galle Fort",
        morning: "Boat trip in search of blue whales and dolphins (seasonal, Nov–Apr).",
        afternoon: "Drive to Galle and explore the Dutch-era fort ramparts and boutique streets.",
        evening: "Dinner within the historic fort walls.",
        overnight: "Hotel in Galle or Mirissa.",
        imageUrl: "/documents/images/tour/lighthouse.png",
      },
      {
        day: 10,
        title: "South Coast to Colombo & Departure",
        morning: "Leisurely morning, with time for a last swim or beach walk.",
        afternoon: "Drive to Colombo for last-minute shopping.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo5.png",
      },
    ],
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
    title: "12 Day General Tour",
    category: "General Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Two ancient capitals", "Hill country by train", "Yala safari & extended south coast"],
    price: "From $2,340 pp",
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
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive and transfer to your hotel in Negombo.",
        afternoon: "Rest, or explore the beach and fish market.",
        evening: "Dinner near the beach.",
        overnight: "Hotel in Negombo.",
        imageUrl: "/documents/images/tour/arrival.png",
      },
      {
        day: 2,
        title: "Anuradhapura Ancient City",
        morning: "Drive to Anuradhapura, Sri Lanka's first ancient capital.",
        afternoon: "Visit the Sri Maha Bodhi sacred tree and the Jetavanaramaya stupa.",
        evening: "Sunset over one of the city's ancient reservoirs.",
        overnight: "Hotel near Anuradhapura.",
         imageUrl: "/documents/images/tour/anuradhapura.png",
      },
      {
        day: 3,
        title: "Polonnaruwa Ancient City",
        morning: "Drive to Polonnaruwa, the island's medieval capital.",
        afternoon: "Cycle among the ruins, including the Gal Vihara rock carvings.",
        evening: "Free time at your hotel.",
        overnight: "Hotel near Polonnaruwa or Sigiriya.",
        imageUrl: "/documents/images/tour/polonnaruwa.png",
      },
      {
        day: 4,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress and visit the frescoes.",
        afternoon: "Village tour by bullock cart with a traditional lunch.",
        evening: "Relax at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
         imageUrl: "/documents/images/tour/sigiriya2.png",
      },
      {
        day: 5,
        title: "Dambulla Caves & Kandy",
        morning: "Visit the Dambulla Cave Temple and Matale spice gardens.",
        afternoon: "Continue to Kandy and visit the Temple of the Sacred Tooth Relic.",
        evening: "Walk around Kandy Lake before dinner.",
        overnight: "Hotel in Kandy.",
        imageUrl: "/documents/images/tour/dambulla.png",
      },
      {
        day: 6,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Royal Botanical Gardens, Peradeniya.",
        afternoon: "Drive into the hills, visiting a working tea factory.",
        evening: "Settle into Nuwara Eliya's cool climate.",
        overnight: "Hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya.png",
      },
      {
        day: 7,
        title: "Nuwara Eliya to Ella by Train",
        morning: "Visit Gregory Lake, then take the scenic train to Ella.",
        afternoon: "Walk to the Nine Arch Bridge and explore Ella.",
        evening: "Dinner with valley views.",
        overnight: "Hotel in Ella.",
         imageUrl: "/documents/images/tour/train.png",
      },
      {
        day: 8,
        title: "Ella to Yala",
        morning: "Optional sunrise hike to Little Adam's Peak.",
        afternoon: "Drive to Yala, settling in before an afternoon safari.",
        evening: "First jeep safari in search of leopards and elephants.",
        overnight: "Hotel near Yala.",
        imageUrl: "/documents/images/tour/safari.png",
      },
      {
        day: 9,
        title: "Yala Safari to Mirissa",
        morning: "An early morning jeep safari for peak wildlife activity.",
        afternoon: "Drive to Mirissa on the south coast.",
        evening: "Relaxed evening on the beach.",
        overnight: "Hotel in Mirissa.",
        imageUrl: "/documents/images/tour/mirissa.png",
      },
      {
        day: 10,
        title: "Whale Watching & Galle Fort",
        morning: "Boat trip in search of blue whales and dolphins (seasonal).",
        afternoon: "Explore Galle Fort's ramparts and boutique streets.",
        evening: "Dinner within the historic fort walls.",
        overnight: "Hotel in Galle.",
        imageUrl: "/documents/images/tour/whale.png",
      },
      {
        day: 11,
        title: "Galle to Bentota",
        morning: "Drive up the coast to Bentota.",
        afternoon: "River safari through Bentota's mangroves, or free beach time.",
        evening: "Final coastal dinner of the trip.",
        overnight: "Hotel in Bentota.",
        imageUrl: "/documents/images/tour/maduoya.png",
      },
      {
        day: 12,
        title: "Bentota to Colombo & Departure",
        morning: "Leisurely morning by the beach.",
        afternoon: "Drive to Colombo, with time for last-minute shopping.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/colombo2.png",
      },
    ],
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
    slug: "family-5-day-tour",
    title: "5 Day Family Tour",
    category: "Family Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Pinnawala elephant bathing", "Turtle hatchery visit", "Kid-friendly beach resort"],
    price: "From $1,300 pp",
    blurb: "A short, easy-paced family introduction to Sri Lanka — elephants, turtles and beach time.",
    motif: "leaf",
    imageUrl: "/documents/images/tour/beach.png",
    heroTitle: "Family Ceylon Starter — 5 Days of Elephants, Turtles and Beach Time",
    intro:
      "A gentle first taste of Sri Lanka built for families with younger children — short drive times, hands-on animal encounters, and a beach finish to unwind.",
    overview:
      "This route keeps daily drives short and mixes in frequent stops that keep kids engaged, from elephant bathing to turtle hatcheries, finishing with two relaxed days at a family-friendly beach resort.",
    bestFor: "Families with children of all ages",
    groupSize: "Private vehicle — sized to your family",
    physicalLevel: "Easy — minimal walking, no strenuous activity",
    destinationsCovered: "Negombo → Pinnawala → Kandy → Bentota",
    itinerary: [
    {
  day: 1,
  title: "Arrival, Pinnawala & Kandy",
  morning: "Arrive at Bandaranaike International Airport and travel to Pinnawala for a family-friendly elephant experience.",
  afternoon: "Continue to Kandy and enjoy a relaxed family lunch along the way.",
  evening: "Settle into your family hotel in Kandy and take an easy evening walk around Kandy Lake.",
  overnight: "Family hotel in Kandy.",
  imageUrl: "/documents/images/tour/pinnawala2.png",
},
{
  day: 2,
  title: "Kandy Family Experience",
  morning: "Visit the Temple of the Sacred Tooth Relic, keeping the visit relaxed and family-friendly.",
  afternoon: "Explore the Royal Botanical Gardens, Peradeniya, with plenty of open space for children.",
  evening: "Enjoy an optional Kandyan cultural dance performance.",
  overnight: "Family hotel in Kandy.",
  imageUrl: "/documents/images/tour/garden.png",
},
{
  day: 3,
  title: "Kandy to Bentota",
  morning: "Drive from Kandy towards the west coast through scenic countryside and changing landscapes.",
  afternoon: "Visit a turtle conservation centre, where children can learn about and see rescued sea turtles.",
  evening: "Arrive at your beach resort and enjoy a relaxed evening by the pool or beach.",
  overnight: "Family-friendly beach resort, Bentota.",
  imageUrl: "/documents/images/tour/kandy5.png",
},
{
  day: 4,
  title: "Bentota Family Adventure",
  morning: "Enjoy a gentle Bentota River safari through the mangroves, with opportunities to spot birds and other wildlife.",
  afternoon: "Free family time on the beach, by the pool, or enjoying optional water activities.",
  evening: "Relaxed family dinner and sunset by the coast.",
  overnight: "Family-friendly beach resort, Bentota.",
  imageUrl: "/documents/images/tour/benthota.png",
},

{
  day: 5,
  title: "Beach Morning & Departure",
  morning: "Enjoy a relaxed final morning at the resort with time for the beach or pool.",
  afternoon: "Transfer from Bentota to Bandaranaike International Airport for your departure flight.",
  evening: "Departure flight.",
  overnight: "N/A — departure day.",
  imageUrl: "/documents/images/tour/beach.png",
},
    ],
    hotelRecommendation: "Family-oriented hotels with pools in Negombo, Kandy and a beach resort in Bentota.",
    transportation: "Private air-conditioned vehicle with driver, with child seats available on request.",
    meals: "Daily breakfast. Other meals at your own choice, with kid-friendly menu options arranged where possible.",
    included: ["4 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "Pinnawala and turtle hatchery entrance fees"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Bentota river safari", "Kandyan cultural dance show", "Cooking class for kids"],
    tourFaqs: [
      { q: "What's the youngest age this suits?", a: "This route works well from toddlers upward — drive times are kept short and activities are hands-on rather than long museum-style visits." },
      { q: "Are child seats available?", a: "Yes, just let us know ages and we'll arrange appropriate car seats for your vehicle." },
    ],
  },
  {
    slug: "family-7-day-tour",
    title: "7 Day Family Tour",
    category: "Family Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Pinnawala & Kandy", "Hill country train ride", "Beach time in Bentota"],
    price: "From $1,820 pp",
    blurb: "Our 5-day family starter extended into the hills, with a fun train ride kids will remember.",
    motif: "leaf",
    imageUrl: "/documents/images/tour/nuwaraeliya5.png",
    heroTitle: "Family Ceylon Adventure — 7 Days from Elephants to Hill Country",
    intro:
      "Building on our 5-day starter, this route adds a scenic train ride through tea country — a highlight for kids and parents alike — before finishing on the beach.",
    overview:
      "The same easy pacing as our 5-day family route, with two extra days in the cool hill country including Sri Lanka's famous scenic train journey.",
    bestFor: "Families with children of all ages who enjoy a bit of variety",
    groupSize: "Private vehicle — sized to your family",
    physicalLevel: "Easy, with one short optional hike",
    destinationsCovered: "Negombo → Pinnawala → Kandy → Nuwara Eliya → Ella → Bentota",
    itinerary: [
    {
  day: 1,
  title: "Arrival, Pinnawala & Kandy",
  morning: "Arrive at Bandaranaike International Airport and travel to Pinnawala for a family-friendly elephant experience.",
  afternoon: "Enjoy a family-friendly elephant experience at Pinnawala, then continue to Kandy.",
  evening: "Settle into your family hotel in Kandy and enjoy a relaxed evening around Kandy Lake.",
  overnight: "Family hotel in Kandy.",
  imageUrl: "/documents/images/tour/kandy4.png",
},
{
  day: 2,
  title: "Kandy Sightseeing",
  morning: "Visit the Temple of the Sacred Tooth Relic.",
  afternoon: "Explore the Royal Botanical Gardens, Peradeniya.",
  evening: "Optional Kandyan cultural dance show.",
  overnight: "Family hotel in Kandy.",
  imageUrl: "/documents/images/tour/garden2.png",
},
{
  day: 3,
  title: "Kandy to Nuwara Eliya",
  morning: "Drive into the hills, stopping at a tea factory for a fun, short family tour.",
  afternoon: "Visit Gregory Lake and enjoy a family pedal-boat ride.",
  evening: "Settle into the cool mountain atmosphere of Nuwara Eliya.",
  overnight: "Family hotel in Nuwara Eliya.",
  imageUrl: "/documents/images/tour/tea2.png",
},
{
  day: 4,
  title: "Scenic Train to Ella",
  morning: "Board the scenic train from Nanu Oya to Ella — a memorable experience for children.",
  afternoon: "Take an easy walk to view the Nine Arch Bridge and enjoy the surrounding scenery.",
  evening: "Relaxed evening exploring Ella town.",
  overnight: "Family hotel in Ella.",
  imageUrl: "/documents/images/tour/train2.png",
},
{
  day: 5,
  title: "Ella to Bentota",
  morning: "Enjoy an optional gentle walk near Ravana Falls.",
  afternoon: "Take a scenic drive towards the west coast, arriving at your beach resort in Bentota.",
  evening: "Relax and enjoy family beach time.",
  overnight: "Family-friendly beach resort, Bentota.",
  imageUrl: "/documents/images/tour/water.png",
},
{
  day: 6,
  title: "Bentota Family Day",
  morning: "Enjoy a gentle Bentota River safari through the mangroves.",
  afternoon: "Visit a turtle conservation centre or enjoy free time on the beach and by the pool.",
  evening: "Relaxed family evening by the coast.",
  overnight: "Family-friendly beach resort, Bentota.",
  imageUrl: "/documents/images/tour/beach3.png",
},
{
  day: 7,
  title: "Beach Morning & Departure",
  morning: "Enjoy a relaxed final morning at the resort with time for the beach or pool.",
  afternoon: "Drive to Bandaranaike International Airport for your departure flight.",
  evening: "Departure flight.",
  overnight: "N/A — departure day.",
  imageUrl: "/documents/images/tour/turtul.png",
},
    ],
    hotelRecommendation: "Family-oriented hotels with pools in Negombo, Kandy, Nuwara Eliya, Ella and a beach resort in Bentota.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats, Nanu Oya to Ella.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["6 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "Reserved train tickets, Nanu Oya to Ella", "Pinnawala entrance fee"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Bentota river safari & turtle hatchery", "Tea-picking experience, Nuwara Eliya", "Horseback riding, Nuwara Eliya"],
    tourFaqs: [
      { q: "Is the train ride safe for young children?", a: "Yes, though we recommend booking reserved seats (included) rather than standing in open doorways, which is common but not advisable with kids." },
      { q: "Will the hill country be too cold for children?", a: "Evenings in Nuwara Eliya can be cool — pack a light jacket, but it's a pleasant, not harsh, change from the coast." },
    ],
  },
  {
    slug: "family-8-day-tour",
    title: "8 Day Family Tour",
    category: "Family Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Pinnawala & Kandy", "Scenic hill country train", "Udawalawe safari for kids"],
    price: "From $2,080 pp",
    blurb: "Our 7-day family hill country route with a gentle, family-paced safari day added.",
    motif: "leaf",
    heroTitle: "Family Ceylon Safari & Hills — 8 Days of Wildlife and Tea Country",
    intro:
      "All the highlights of our 7-day family route, plus a family-friendly safari in Udawalawe — shorter drives and reliable elephant sightings make it an easier park for young children than Yala.",
    overview:
      "This itinerary follows our 7-day hill country family route, then adds Udawalawe National Park, known for large, easy-to-spot elephant herds, before returning to the coast.",
    bestFor: "Families wanting a wildlife day without a long safari drive",
    groupSize: "Private vehicle — sized to your family",
    physicalLevel: "Easy",
    destinationsCovered: "Negombo → Pinnawala → Kandy → Nuwara Eliya → Ella → Udawalawe → Bentota",
    itinerary: [
      {
        day: 1, 
        title: "Airport, Pinnawala & Kandy",
        morning: "Arrive at Bandaranaike International Airport and travel directly towards Pinnawala.", 
        afternoon: "Visit Pinnawala and watch the elephants during their daily bathing and feeding routines.", 
        evening: "Continue to Kandy, check in to your family hotel and relax after the journey.", 
        overnight: "Family hotel in Kandy.",
        imageUrl: "/documents/images/tour/pinnawala3.png",

      },
      {
        day: 2,
        title: "Pinnawala & Kandy",
        morning: "Watch elephants bathing at Pinnawala.",
        afternoon: "Continue to Kandy via a spice garden.",
        evening: "Easy walk around Kandy Lake.",
        overnight: "Family hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy6.png",
      },
      {
        day: 3,
        title: "Kandy Sightseeing",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Royal Botanical Gardens, Peradeniya.",
        evening: "Optional Kandyan dance show.",
        overnight: "Family hotel in Kandy.",
        imageUrl: "/documents/images/tour/kandy7.png",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        morning: "Drive into the hills, stopping at a tea factory.",
        afternoon: "Pedal boats at Gregory Lake.",
        evening: "Settle into Nuwara Eliya.",
        overnight: "Family hotel in Nuwara Eliya.",
        imageUrl: "/documents/images/tour/nuwaraeliya6.png",
      },
      {
        day: 5,
        title: "Scenic Train to Ella",
        morning: "Scenic train from Nanu Oya to Ella.",
        afternoon: "Easy walk to the Nine Arch Bridge.",
        evening: "Relaxed evening in Ella.",
        overnight: "Family hotel in Ella.",
        imageUrl: "/documents/images/tour/ella1.png",
      },
      {
        day: 6,
        title: "Ella to Udawalawe",
        morning: "Drive towards Udawalawe National Park.",
        afternoon: "Afternoon jeep safari — Udawalawe's open grassland makes elephant sightings easy for kids.",
        evening: "Relaxed evening near the park.",
        overnight: "Hotel near Udawalawe.",
        imageUrl: "/documents/images/tour/udawalawa.png",
      },
      {
        day: 7,
        title: "Udawalawe to Bentota",
        morning: "Optional visit to the Elephant Transit Home to watch orphaned calves being fed.",
        afternoon: "Drive to Bentota on the coast.",
        evening: "Settle into your beach resort.",
        overnight: "Family-friendly beach resort, Bentota.",
         imageUrl: "/documents/images/tour/benthota1.png",
      },
      {
        day: 8,
        title: "Beach Morning & Departure",
        morning: "Free morning at the resort, or a turtle hatchery visit.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
        imageUrl: "/documents/images/tour/beach3.png",
      },
    ],
    hotelRecommendation: "Family hotels throughout, with a beach resort finish in Bentota.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats; 4x4 safari jeep for Udawalawe.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["7 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "Reserved train tickets, Nanu Oya to Ella", "1 jeep safari in Udawalawe National Park"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Elephant Transit Home feeding session", "Bentota river safari & turtle hatchery", "Tea-picking experience"],
    tourFaqs: [
      { q: "Why Udawalawe instead of Yala for a family safari?", a: "Udawalawe's open terrain makes elephant sightings quicker and more reliable, with generally shorter drives — a better fit for shorter attention spans." },
      { q: "How long is the safari?", a: "Around 2.5–3 hours, which is usually enough for young children without becoming tiring." },
    ],
  },
  {
    slug: "family-10-day-tour",
    title: "10 Day Family Tour",
    category: "Family Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Pinnawala & Sigiriya", "Hill country train & safari", "Extended south coast beach time"],
    price: "From $2,600 pp",
    blurb: "Our 8-day family safari-and-hills route, with Sigiriya added and more beach time to finish.",
    motif: "leaf",
    heroTitle: "Grand Family Ceylon — 10 Days of Culture, Wildlife and Beach",
    intro:
      "A fuller family itinerary that adds Sigiriya's climbable rock fortress — a genuine adventure for older kids — to our safari-and-hills route, with extra beach days to finish.",
    overview:
      "This route builds on our 8-day family safari itinerary by adding Sigiriya at the start and extending your time at the beach, giving the trip a proper adventure-plus-relaxation balance.",
    bestFor: "Families with children aged roughly 6 and up",
    groupSize: "Private vehicle — sized to your family",
    physicalLevel: "Easy to moderate (Sigiriya climb)",
    destinationsCovered: "Negombo → Sigiriya → Pinnawala → Kandy → Nuwara Eliya → Ella → Udawalawe → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive and transfer to a family hotel in Negombo.",
        afternoon: "Pool time to recover from the flight.",
        evening: "Early family dinner.",
        overnight: "Family hotel in Negombo.",
        imageUrl: "/documents/images/tour/negombo6.png",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress together — a fun challenge for older kids.",
        afternoon: "Village tour by bullock cart and a canoe ride, always a hit with children.",
        evening: "Relax at your hotel.",
        overnight: "Family hotel in Sigiriya or Habarana.",
        imageUrl: "/documents/images/tour/sigiriya1.png",
      },
      {
        day: 3,
        title: "Pinnawala & Kandy",
        morning: "Watch elephants bathing at Pinnawala.",
        afternoon: "Continue to Kandy via a spice garden.",
        evening: "Easy walk around Kandy Lake.",
        overnight: "Family hotel in Kandy.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 4,
        title: "Kandy Sightseeing",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Royal Botanical Gardens, Peradeniya.",
        evening: "Optional Kandyan dance show.",
        overnight: "Family hotel in Kandy.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 5,
        title: "Kandy to Nuwara Eliya",
        morning: "Drive into the hills, stopping at a tea factory.",
        afternoon: "Pedal boats at Gregory Lake.",
        evening: "Settle into Nuwara Eliya.",
        overnight: "Family hotel in Nuwara Eliya.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 6,
        title: "Scenic Train to Ella",
        morning: "Scenic train from Nanu Oya to Ella.",
        afternoon: "Easy walk to the Nine Arch Bridge.",
        evening: "Relaxed evening in Ella.",
        overnight: "Family hotel in Ella.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 7,
        title: "Ella to Udawalawe",
        morning: "Drive towards Udawalawe National Park.",
        afternoon: "Afternoon jeep safari for elephant herds.",
        evening: "Relaxed evening near the park.",
        overnight: "Hotel near Udawalawe.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 8,
        title: "Udawalawe to Bentota",
        morning: "Visit the Elephant Transit Home to watch orphaned calves feeding.",
        afternoon: "Drive to Bentota.",
        evening: "Settle into your beach resort.",
        overnight: "Family-friendly beach resort, Bentota.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 9,
        title: "Beach Day",
        morning: "Turtle hatchery visit.",
        afternoon: "Free beach and pool time, or a river safari.",
        evening: "Farewell family dinner.",
        overnight: "Family-friendly beach resort, Bentota.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
      {
        day: 10,
        title: "Departure",
        morning: "Relaxed final morning at the resort.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
                imageUrl: "/documents/images/tour/beach3.png",
      },
    ],
    hotelRecommendation: "Family hotels throughout, with an extended beach resort stay in Bentota.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats; 4x4 safari jeep for Udawalawe.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["9 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "Reserved train tickets, Nanu Oya to Ella", "1 jeep safari in Udawalawe National Park", "Sigiriya & Pinnawala entrance fees"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Elephant Transit Home feeding session", "Bentota river safari & turtle hatchery", "Cookery class for the whole family"],
    tourFaqs: [
      { q: "Is Sigiriya suitable for children?", a: "Yes for most children aged 6+ who can manage stairs; we recommend a slow pace with breaks, and it's not advisable with toddlers or in a stroller." },
      { q: "Can we shorten this to skip one hill-country night?", a: "Yes — we can compress Nuwara Eliya and Ella into fewer nights if you'd rather have more beach time." },
    ],
  },
  {
    slug: "family-12-day-tour",
    title: "12 Day Family Tour",
    category: "Family Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Sigiriya & ancient cities", "Hill country train & Udawalawe safari", "A full week-equivalent of beach time"],
    price: "From $3,120 pp",
    blurb: "Our fullest family itinerary — culture, wildlife, hill country and a proper beach finish, unhurried throughout.",
    motif: "leaf",
    heroTitle: "Complete Family Ceylon — 12 Days, Every Region at a Family Pace",
    intro:
      "Our most complete family route: ancient cities, wildlife, hill country and an extended beach stay, with enough slack in the schedule for rest days when little legs get tired.",
    overview:
      "Building on our 10-day family route, this itinerary adds Polonnaruwa's ancient ruins (easily explored by bicycle) and extends beach time at the end for a properly unhurried finish.",
    bestFor: "Families wanting the full island experience without a rushed pace",
    groupSize: "Private vehicle — sized to your family",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Negombo → Polonnaruwa → Sigiriya → Pinnawala → Kandy → Nuwara Eliya → Ella → Udawalawe → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Negombo",
        morning: "Arrive and transfer to a family hotel in Negombo.",
        afternoon: "Pool time to recover from the flight.",
        evening: "Early family dinner.",
        overnight: "Family hotel in Negombo.",
      },
      {
        day: 2,
        title: "Polonnaruwa Ancient City",
        morning: "Drive to Polonnaruwa.",
        afternoon: "Cycle among the ruins as a family — flat terrain makes this an easy, fun outing.",
        evening: "Sunset over the ancient reservoir.",
        overnight: "Hotel near Polonnaruwa or Sigiriya.",
      },
      {
        day: 3,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress together.",
        afternoon: "Village tour by bullock cart and canoe ride.",
        evening: "Relax at your hotel.",
        overnight: "Family hotel in Sigiriya or Habarana.",
      },
      {
        day: 4,
        title: "Pinnawala & Kandy",
        morning: "Watch elephants bathing at Pinnawala.",
        afternoon: "Continue to Kandy via a spice garden.",
        evening: "Easy walk around Kandy Lake.",
        overnight: "Family hotel in Kandy.",
      },
      {
        day: 5,
        title: "Kandy Sightseeing",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Royal Botanical Gardens, Peradeniya.",
        evening: "Optional Kandyan dance show.",
        overnight: "Family hotel in Kandy.",
      },
      {
        day: 6,
        title: "Kandy to Nuwara Eliya",
        morning: "Drive into the hills, stopping at a tea factory.",
        afternoon: "Pedal boats at Gregory Lake.",
        evening: "Settle into Nuwara Eliya.",
        overnight: "Family hotel in Nuwara Eliya.",
      },
      {
        day: 7,
        title: "Scenic Train to Ella",
        morning: "Scenic train from Nanu Oya to Ella.",
        afternoon: "Easy walk to the Nine Arch Bridge.",
        evening: "Relaxed evening in Ella.",
        overnight: "Family hotel in Ella.",
      },
      {
        day: 8,
        title: "Ella to Udawalawe",
        morning: "Drive towards Udawalawe National Park.",
        afternoon: "Afternoon jeep safari for elephant herds.",
        evening: "Relaxed evening near the park.",
        overnight: "Hotel near Udawalawe.",
      },
      {
        day: 9,
        title: "Udawalawe to Bentota",
        morning: "Visit the Elephant Transit Home feeding session.",
        afternoon: "Drive to Bentota.",
        evening: "Settle into your beach resort.",
        overnight: "Family-friendly beach resort, Bentota.",
      },
      {
        day: 10,
        title: "Beach Day One",
        morning: "Turtle hatchery visit.",
        afternoon: "Free beach and pool time.",
        evening: "Family dinner by the beach.",
        overnight: "Family-friendly beach resort, Bentota.",
      },
      {
        day: 11,
        title: "Beach Day Two",
        morning: "Optional river safari through Bentota's mangroves.",
        afternoon: "Free time — water sports or simply relax.",
        evening: "Farewell family dinner.",
        overnight: "Family-friendly beach resort, Bentota.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Relaxed final morning at the resort.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Family hotels throughout, with an extended beach resort stay in Bentota.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats; 4x4 safari jeep for Udawalawe.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["11 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "Reserved train tickets, Nanu Oya to Ella", "1 jeep safari in Udawalawe National Park", "Sigiriya, Polonnaruwa & Pinnawala entrance fees"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Elephant Transit Home feeding session", "Bentota river safari & turtle hatchery", "Family cookery class"],
    tourFaqs: [
      { q: "Is this too long for young children?", a: "The pacing is deliberately gentle with rest built in, and the extended beach finish gives everyone time to properly unwind, so most families find 12 days very manageable." },
      { q: "Can we split the beach time between two resorts?", a: "Yes — some families prefer Bentota then Mirissa, for example. We can adjust the final days to suit." },
    ],
  },
  {
    slug: "adventure-5-day-tour",
    title: "5 Day Adventure Tour",
    category: "Adventure Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Kitulgala whitewater rafting", "Rainforest canopy ziplining", "Ella hiking trails"],
    price: "From $1,050 pp",
    blurb: "A fast-paced 5-day route through rivers, rainforest canopy and hill-country trails.",
    motif: "leaf",
    heroTitle: "Ceylon Adventure Sprint — 5 Days of Rivers, Canopy and Trails",
    intro:
      "A compact adventure circuit for travellers short on time but not on energy — whitewater rafting, a rainforest zipline, and a hike to one of Sri Lanka's best viewpoints.",
    overview:
      "This route packs three distinct adventure environments — river, rainforest canopy and hill-country trail — into five action-focused days.",
    bestFor: "Active travellers, groups of friends, adventure-seeking couples",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Colombo → Kitulgala → Ella → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kitulgala",
        morning: "Arrive and transfer directly to Kitulgala, gateway to Sri Lanka's rainforest adventure region.",
        afternoon: "Short rainforest walk to settle in and scout the river.",
        evening: "Briefing dinner with your rafting guides for tomorrow.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 2,
        title: "Whitewater Rafting & Ziplining",
        morning: "Grade 2–3 whitewater rafting down the Kelani River.",
        afternoon: "Rainforest canopy ziplining through the surrounding jungle.",
        evening: "Riverside campfire dinner.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 3,
        title: "Kitulgala to Ella",
        morning: "Scenic drive up into the hills towards Ella.",
        afternoon: "Hike to Little Adam's Peak for panoramic valley views.",
        evening: "Dinner in Ella's small adventure-traveller hub of a town.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 4,
        title: "Ella Hiking Day",
        morning: "Early climb up Ella Rock for sweeping views over the valley — a proper morning hike.",
        afternoon: "Walk to the Nine Arch Bridge and Ravana Falls.",
        evening: "Relaxed dinner after a full day on foot.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 5,
        title: "Return & Departure",
        morning: "Scenic drive back towards Colombo.",
        afternoon: "Arrive at the airport in time for your flight.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
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
    title: "7 Day Adventure Tour",
    category: "Adventure Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Kitulgala rafting & ziplining", "Ella hiking trails", "Yala jeep safari"],
    price: "From $1,470 pp",
    blurb: "Our 5-day adventure sprint extended with a wildlife safari for a fuller adrenaline-and-nature route.",
    motif: "leaf",
    heroTitle: "Ceylon Adventure Trail — 7 Days of Rivers, Trails and Safari",
    intro:
      "The same river-to-hills adventure circuit, extended south into Yala for jeep safaris in search of leopards, adding a wildlife dimension to the adrenaline.",
    overview:
      "This route follows our 5-day adventure sprint, then continues south to Yala National Park for two safari drives before returning to Colombo.",
    bestFor: "Active travellers who also want a proper wildlife safari",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Colombo → Kitulgala → Ella → Yala → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kitulgala",
        morning: "Arrive and transfer to Kitulgala.",
        afternoon: "Short rainforest walk to settle in.",
        evening: "Briefing dinner with your rafting guides.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 2,
        title: "Whitewater Rafting & Ziplining",
        morning: "Grade 2–3 whitewater rafting on the Kelani River.",
        afternoon: "Rainforest canopy ziplining.",
        evening: "Riverside campfire dinner.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 3,
        title: "Kitulgala to Ella",
        morning: "Scenic drive into the hills.",
        afternoon: "Hike to Little Adam's Peak.",
        evening: "Dinner in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 4,
        title: "Ella Hiking Day",
        morning: "Climb Ella Rock for valley views.",
        afternoon: "Walk to the Nine Arch Bridge and Ravana Falls.",
        evening: "Relaxed dinner.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 5,
        title: "Ella to Yala",
        morning: "Drive south to the Yala area.",
        afternoon: "Settle in ahead of an afternoon safari.",
        evening: "First jeep safari into Yala National Park.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 6,
        title: "Yala Safari & Return",
        morning: "Early morning jeep safari for peak wildlife activity.",
        afternoon: "Drive back towards Colombo.",
        evening: "Farewell dinner in Colombo.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 7,
        title: "Departure",
        morning: "Free morning, or last-minute shopping in Colombo.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
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
    title: "8 Day Adventure Tour",
    category: "Adventure Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Kitulgala rafting & ziplining", "Ella hiking & Yala safari", "Mirissa surfing"],
    price: "From $1,680 pp",
    blurb: "Our 7-day river-to-safari route with a surf day on the south coast added.",
    motif: "leaf",
    heroTitle: "Ceylon Adventure Circuit — 8 Days of Rivers, Trails, Safari and Surf",
    intro:
      "Rivers, rainforest, hiking trails, a wildlife safari and a day of surfing on the south coast — a complete adventure circuit across four distinct environments.",
    overview:
      "This route extends our 7-day adventure trail with a day of surfing at Mirissa, giving the trip a coastal adrenaline finish before heading back to Colombo.",
    bestFor: "Active travellers wanting the widest variety of adventure activities",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Colombo → Kitulgala → Ella → Yala → Mirissa → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kitulgala",
        morning: "Arrive and transfer to Kitulgala.",
        afternoon: "Short rainforest walk.",
        evening: "Briefing dinner with rafting guides.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 2,
        title: "Whitewater Rafting & Ziplining",
        morning: "Grade 2–3 whitewater rafting.",
        afternoon: "Rainforest canopy ziplining.",
        evening: "Riverside campfire dinner.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 3,
        title: "Kitulgala to Ella",
        morning: "Scenic drive into the hills.",
        afternoon: "Hike to Little Adam's Peak.",
        evening: "Dinner in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 4,
        title: "Ella Hiking Day",
        morning: "Climb Ella Rock for valley views.",
        afternoon: "Walk to the Nine Arch Bridge.",
        evening: "Relaxed dinner.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 5,
        title: "Ella to Yala",
        morning: "Drive south to the Yala area.",
        afternoon: "Settle in ahead of an afternoon safari.",
        evening: "First jeep safari in Yala.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 6,
        title: "Yala Safari to Mirissa",
        morning: "Early morning jeep safari.",
        afternoon: "Drive to Mirissa on the south coast.",
        evening: "Relaxed beach evening.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 7,
        title: "Surfing in Mirissa",
        morning: "Surf lesson or session at Weligama Bay, a beginner-friendly break nearby.",
        afternoon: "Free time to surf independently or relax on the beach.",
        evening: "Farewell dinner by the beach.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 8,
        title: "Return & Departure",
        morning: "Drive back to Colombo.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
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
    title: "10 Day Adventure Tour",
    category: "Adventure Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Sigiriya climb", "Kitulgala rafting & Ella hiking", "Yala safari & Mirissa surf"],
    price: "From $2,100 pp",
    blurb: "Our 8-day river-to-surf circuit with Sigiriya's climbable fortress added at the start.",
    motif: "leaf",
    heroTitle: "Grand Ceylon Adventure — 10 Days of Culture, Rivers, Trails and Surf",
    intro:
      "This route adds Sigiriya's dramatic rock-fortress climb to our full adventure circuit, giving the trip a cultural-adventure opening before the rivers, hikes, safari and surf.",
    overview:
      "Building on our 8-day adventure circuit, this itinerary opens with Sigiriya — as much a physical challenge as a historical site — before following the same river, hills, safari and surf route.",
    bestFor: "Active travellers who want culture and adrenaline in equal measure",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Colombo → Sigiriya → Kitulgala → Ella → Yala → Mirissa → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer directly to the Sigiriya area.",
        afternoon: "Free time to settle in after the flight.",
        evening: "Dinner with rock views.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress, a genuine physical challenge with 1,200 steps.",
        afternoon: "Village trek and canoe ride through the surrounding wetlands.",
        evening: "Relax at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 3,
        title: "Sigiriya to Kitulgala",
        morning: "Scenic drive south to Kitulgala.",
        afternoon: "Short rainforest walk to settle in.",
        evening: "Briefing dinner with rafting guides.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 4,
        title: "Whitewater Rafting & Ziplining",
        morning: "Grade 2–3 whitewater rafting.",
        afternoon: "Rainforest canopy ziplining.",
        evening: "Riverside campfire dinner.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 5,
        title: "Kitulgala to Ella",
        morning: "Scenic drive into the hills.",
        afternoon: "Hike to Little Adam's Peak.",
        evening: "Dinner in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 6,
        title: "Ella Hiking Day",
        morning: "Climb Ella Rock for valley views.",
        afternoon: "Walk to the Nine Arch Bridge.",
        evening: "Relaxed dinner.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 7,
        title: "Ella to Yala",
        morning: "Drive south to the Yala area.",
        afternoon: "Settle in ahead of an afternoon safari.",
        evening: "First jeep safari in Yala.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 8,
        title: "Yala Safari to Mirissa",
        morning: "Early morning jeep safari.",
        afternoon: "Drive to Mirissa.",
        evening: "Relaxed beach evening.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 9,
        title: "Surfing in Mirissa",
        morning: "Surf lesson or session at Weligama Bay.",
        afternoon: "Free time to surf or relax.",
        evening: "Farewell dinner.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 10,
        title: "Return & Departure",
        morning: "Drive back to Colombo.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
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
    slug: "adventure-12-day-tour",
    title: "12 Day Adventure Tour",
    category: "Adventure Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Sigiriya climb", "Kitulgala rafting & Ella hiking", "Yala safari, Mirissa surf & Arugam Bay"],
    price: "From $2,520 pp",
    blurb: "Our fullest adventure circuit, extending east to Arugam Bay for Sri Lanka's best surf break.",
    motif: "leaf",
    heroTitle: "Complete Ceylon Adventure — 12 Days, East Coast to West",
    intro:
      "Our most complete adventure route, adding an extension to Arugam Bay on the east coast — Sri Lanka's best-known surf point break — after the river, hiking and safari legs.",
    overview:
      "Building on our 10-day adventure circuit, this itinerary swaps a short Mirissa stop for a proper stay at Arugam Bay, giving serious surfers time on one of Asia's best right-hand point breaks.",
    bestFor: "Serious adventure travellers, surfers, active groups of friends",
    groupSize: "Private vehicle — customisable group size",
    physicalLevel: "Moderate to challenging",
    destinationsCovered: "Colombo → Sigiriya → Kitulgala → Ella → Yala → Arugam Bay → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer to the Sigiriya area.",
        afternoon: "Free time to settle in.",
        evening: "Dinner with rock views.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress.",
        afternoon: "Village trek and canoe ride.",
        evening: "Relax at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 3,
        title: "Sigiriya to Kitulgala",
        morning: "Scenic drive south to Kitulgala.",
        afternoon: "Short rainforest walk.",
        evening: "Briefing dinner with rafting guides.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 4,
        title: "Whitewater Rafting & Ziplining",
        morning: "Grade 2–3 whitewater rafting.",
        afternoon: "Rainforest canopy ziplining.",
        evening: "Riverside campfire dinner.",
        overnight: "Riverside lodge, Kitulgala.",
      },
      {
        day: 5,
        title: "Kitulgala to Ella",
        morning: "Scenic drive into the hills.",
        afternoon: "Hike to Little Adam's Peak.",
        evening: "Dinner in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 6,
        title: "Ella Hiking Day",
        morning: "Climb Ella Rock for valley views.",
        afternoon: "Walk to the Nine Arch Bridge.",
        evening: "Relaxed dinner.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 7,
        title: "Ella to Yala",
        morning: "Drive south to the Yala area.",
        afternoon: "Settle in ahead of an afternoon safari.",
        evening: "First jeep safari in Yala.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 8,
        title: "Yala Safari to Arugam Bay",
        morning: "Early morning jeep safari.",
        afternoon: "Drive east to Arugam Bay.",
        evening: "Settle in and scout the famous point break.",
        overnight: "Surf lodge, Arugam Bay.",
      },
      {
        day: 9,
        title: "Arugam Bay Surfing",
        morning: "Surf session at the main point break, with an instructor if needed.",
        afternoon: "Free time — surf, relax, or explore the local fishing village.",
        evening: "Beachfront dinner.",
        overnight: "Surf lodge, Arugam Bay.",
      },
      {
        day: 10,
        title: "Arugam Bay Surfing, Day Two",
        morning: "Second surf session, ideally at a different nearby break.",
        afternoon: "Optional lagoon safari for crocodiles and birdlife.",
        evening: "Farewell beach dinner.",
        overnight: "Surf lodge, Arugam Bay.",
      },
      {
        day: 11,
        title: "Return Towards Colombo",
        morning: "Long scenic drive back across the island.",
        afternoon: "Arrive in Colombo, with time to rest.",
        evening: "Final dinner in Colombo.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Free morning for last-minute shopping.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Hotels in Sigiriya, adventure lodges in Kitulgala, hillside stays in Ella, safari lodging near Yala, surf lodges in Arugam Bay.",
    transportation: "Private air-conditioned vehicle with driver; rafting/zipline guides; safari jeep; local surf instructors.",
    meals: "Daily breakfast, plus lunch on the rafting/ziplining day. Other meals at your own choice.",
    included: ["11 nights' accommodation as listed", "Daily breakfast + 1 lunch", "Private vehicle and driver throughout", "Sigiriya entrance fee", "Whitewater rafting & ziplining", "2 jeep safaris in Yala National Park", "2 surf sessions in Arugam Bay"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Hot-air balloon flight over the Cultural Triangle", "Lagoon safari, Arugam Bay", "Additional surf coaching sessions"],
    tourFaqs: [
      { q: "When is Arugam Bay's surf season?", a: "Roughly April to October, which is the opposite season to the west and south coasts — we'll help time your trip accordingly." },
      { q: "Is Arugam Bay suitable for beginner surfers?", a: "The main point break suits intermediate surfers best; beginners can start on gentler nearby breaks with an instructor." },
    ],
  },
  {
    slug: "wildlife-5-day-tour",
    title: "5 Day Wildlife Tour",
    category: "Wildlife Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Udawalawe elephant herds", "Yala leopard safari", "Bird-rich wetlands"],
    price: "From $1,200 pp",
    blurb: "A focused 5-day safari circuit through two of Sri Lanka's best national parks.",
    motif: "leaf",
    heroTitle: "Ceylon Wildlife Sprint — 5 Days, Two National Parks",
    intro:
      "A tightly focused safari circuit for travellers who want serious wildlife time without a long trip — Udawalawe's elephant herds and Yala's leopards, back to back.",
    overview:
      "This route minimises driving between parks, maximising time actually spent on safari across two of the island's best wildlife destinations.",
    bestFor: "Wildlife photographers, nature enthusiasts, short-trip safari travellers",
    groupSize: "Private vehicle with tracker-guide — customisable group size",
    physicalLevel: "Easy — safaris are seated in open 4x4 jeeps",
    destinationsCovered: "Colombo → Udawalawe → Yala → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Udawalawe",
        morning: "Arrive and transfer directly towards Udawalawe National Park.",
        afternoon: "Visit the Elephant Transit Home to watch orphaned calves being fed.",
        evening: "First jeep safari into Udawalawe, known for large, easy-to-spot elephant herds.",
        overnight: "Hotel near Udawalawe.",
      },
      {
        day: 2,
        title: "Udawalawe Safari to Yala",
        morning: "A second Udawalawe safari at dawn, the park's most active period.",
        afternoon: "Drive to the Yala area.",
        evening: "First jeep safari into Yala National Park in search of leopards.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 3,
        title: "Yala Safari Day",
        morning: "Early morning jeep safari — Yala's leopard density is among the highest in the world.",
        afternoon: "Rest at your hotel, or visit nearby Kataragama's multi-faith temple complex.",
        evening: "A second Yala safari for dusk sightings.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 4,
        title: "Final Safari & South Coast",
        morning: "A final Yala safari at dawn.",
        afternoon: "Drive to the south coast, arriving at Mirissa or Galle by evening.",
        evening: "Relaxed dinner by the coast.",
        overnight: "Hotel on the south coast.",
      },
      {
        day: 5,
        title: "Departure",
        morning: "Free morning by the coast.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Safari-style lodges near Udawalawe and Yala, coastal hotel finish.",
    transportation: "Private air-conditioned vehicle for road transfers; dedicated 4x4 safari jeeps with tracker-guides for all park drives.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["4 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "5 jeep safaris across Udawalawe and Yala with tracker-guide", "Elephant Transit Home entrance"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Additional safari session", "Professional wildlife photography guide", "Bird-watching specialist guide"],
    tourFaqs: [
      { q: "How many safaris are included?", a: "Five in total across the two parks — enough for strong odds of leopard and elephant sightings without over-scheduling." },
      { q: "Is early rising required?", a: "Yes — the best safaris start at dawn when animals are most active, typically a 5am pickup." },
    ],
  },
  {
    slug: "wildlife-7-day-tour",
    title: "7 Day Wildlife Tour",
    category: "Wildlife Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Minneriya elephant gathering", "Yala leopard safaris", "Udawalawe elephant herds"],
    price: "From $1,680 pp",
    blurb: "Our 5-day safari sprint extended to include Minneriya's seasonal elephant gathering.",
    motif: "leaf",
    heroTitle: "Ceylon Wildlife Trail — 7 Days Across Three National Parks",
    intro:
      "Adding Minneriya National Park — home to 'The Gathering,' one of Asia's largest elephant congregations — to our core Udawalawe and Yala safari circuit.",
    overview:
      "This route opens with Minneriya (seasonal, roughly June to September) before continuing to Udawalawe and Yala for a comprehensive three-park safari trip.",
    bestFor: "Serious wildlife travellers wanting maximum species and sighting variety",
    groupSize: "Private vehicle with tracker-guide — customisable group size",
    physicalLevel: "Easy",
    destinationsCovered: "Colombo → Minneriya → Udawalawe → Yala → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Minneriya Area",
        morning: "Arrive and transfer towards the Minneriya/Habarana area.",
        afternoon: "Rest and settle in after your flight.",
        evening: "Evening safari in Minneriya National Park.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 2,
        title: "Minneriya Elephant Gathering",
        morning: "Morning safari in Minneriya, timed for 'The Gathering' in season — up to 300 elephants at the reservoir.",
        afternoon: "Visit a nearby village by bullock cart and canoe.",
        evening: "Free evening at your hotel.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 3,
        title: "Travel to Udawalawe",
        morning: "Scenic drive south towards Udawalawe.",
        afternoon: "Visit the Elephant Transit Home.",
        evening: "First jeep safari in Udawalawe National Park.",
        overnight: "Hotel near Udawalawe.",
      },
      {
        day: 4,
        title: "Udawalawe to Yala",
        morning: "A second Udawalawe safari at dawn.",
        afternoon: "Drive to the Yala area.",
        evening: "First jeep safari into Yala National Park.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 5,
        title: "Yala Safari Day",
        morning: "Early morning jeep safari in Yala.",
        afternoon: "Rest, or visit Kataragama's temple complex.",
        evening: "A second Yala safari for dusk sightings.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 6,
        title: "Final Safari & South Coast",
        morning: "A final Yala safari at dawn.",
        afternoon: "Drive to the south coast.",
        evening: "Relaxed dinner by the coast.",
        overnight: "Hotel on the south coast.",
      },
      {
        day: 7,
        title: "Departure",
        morning: "Free morning by the coast.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Safari-style lodges near Minneriya, Udawalawe and Yala, coastal hotel finish.",
    transportation: "Private air-conditioned vehicle for road transfers; dedicated 4x4 safari jeeps with tracker-guides.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["6 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "7 jeep safaris across Minneriya, Udawalawe and Yala", "Elephant Transit Home entrance"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Professional wildlife photography guide", "Bird-watching specialist guide", "Additional safari sessions"],
    tourFaqs: [
      { q: "When can we see 'The Gathering' at Minneriya?", a: "Roughly June to September, when the reservoir's water levels draw large elephant herds — outside this window elephants are more dispersed but still present." },
      { q: "Which park has the best leopard chances?", a: "Yala, which has one of the highest recorded leopard densities of any park in the world." },
    ],
  },
  {
    slug: "wildlife-8-day-tour",
    title: "8 Day Wildlife Tour",
    category: "Wildlife Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Minneriya elephant gathering", "Yala & Udawalawe safaris", "Sinharaja rainforest birding"],
    price: "From $1,920 pp",
    blurb: "Our 7-day three-park safari with a Sinharaja rainforest day added for birdlife and endemic species.",
    motif: "leaf",
    heroTitle: "Ceylon Wildlife Expedition — 8 Days, Savannah to Rainforest",
    intro:
      "Extending our three-park safari trail into Sinharaja, a UNESCO World Heritage rainforest reserve, for a different register of wildlife — endemic birds, reptiles and rainforest flora.",
    overview:
      "This route adds a full day in Sinharaja Forest Reserve to our Minneriya–Udawalawe–Yala circuit, giving a genuine contrast between open-plain safari and rainforest wildlife.",
    bestFor: "Birders, naturalists, and travellers wanting rainforest alongside safari",
    groupSize: "Private vehicle with tracker-guide — customisable group size",
    physicalLevel: "Easy, with one moderate rainforest walk",
    destinationsCovered: "Colombo → Minneriya → Udawalawe → Yala → Sinharaja → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Minneriya Area",
        morning: "Arrive and transfer towards Habarana.",
        afternoon: "Rest after your flight.",
        evening: "Evening safari in Minneriya National Park.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 2,
        title: "Minneriya Elephant Gathering",
        morning: "Morning safari in Minneriya (seasonal gathering, June–September).",
        afternoon: "Village tour by bullock cart and canoe.",
        evening: "Free evening.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 3,
        title: "Travel to Udawalawe",
        morning: "Drive south towards Udawalawe.",
        afternoon: "Visit the Elephant Transit Home.",
        evening: "First jeep safari in Udawalawe.",
        overnight: "Hotel near Udawalawe.",
      },
      {
        day: 4,
        title: "Udawalawe to Yala",
        morning: "A second Udawalawe safari.",
        afternoon: "Drive to the Yala area.",
        evening: "First jeep safari in Yala.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 5,
        title: "Yala Safari Day",
        morning: "Early morning jeep safari.",
        afternoon: "Rest, or visit Kataragama.",
        evening: "A second Yala safari.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 6,
        title: "Yala to Sinharaja",
        morning: "A final Yala safari at dawn.",
        afternoon: "Long drive to Sinharaja Forest Reserve.",
        evening: "Evening briefing with a rainforest naturalist guide.",
        overnight: "Eco-lodge near Sinharaja.",
      },
      {
        day: 7,
        title: "Sinharaja Rainforest Walk",
        morning: "Guided rainforest trek in search of endemic birds and reptiles.",
        afternoon: "Continue towards Colombo.",
        evening: "Farewell dinner in Colombo.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 8,
        title: "Departure",
        morning: "Free morning, or last-minute shopping.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Safari lodges near Minneriya, Udawalawe and Yala; an eco-lodge near Sinharaja.",
    transportation: "Private air-conditioned vehicle for road transfers; 4x4 safari jeeps with tracker-guides; rainforest naturalist guide for Sinharaja.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["7 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "7 jeep safaris across Minneriya, Udawalawe and Yala", "Guided Sinharaja rainforest trek"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Professional wildlife photography guide", "Night walk in Sinharaja for nocturnal species", "Additional safari sessions"],
    tourFaqs: [
      { q: "What makes Sinharaja different from the national parks?", a: "It's a rainforest reserve rather than open savannah, home to many of Sri Lanka's endemic birds and species found nowhere else." },
      { q: "Is the Sinharaja walk difficult?", a: "It's a moderate forest trail — sturdy shoes are recommended, and the pace is set by your naturalist guide." },
    ],
  },
  {
    slug: "wildlife-10-day-tour",
    title: "10 Day Wildlife Tour",
    category: "Wildlife Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Minneriya, Udawalawe & Yala safaris", "Sinharaja rainforest", "Mirissa whale watching"],
    price: "From $2,400 pp",
    blurb: "Our 8-day safari-and-rainforest route extended to the south coast for whale watching.",
    motif: "leaf",
    heroTitle: "Grand Ceylon Wildlife Journey — 10 Days, Land and Sea",
    intro:
      "Adding blue whale and dolphin watching off Mirissa to our safari-and-rainforest circuit — a genuinely complete wildlife trip spanning savannah, rainforest and ocean.",
    overview:
      "This route extends our 8-day expedition with two nights on the south coast for whale watching, rounding out the trip with Sri Lanka's marine megafauna.",
    bestFor: "Comprehensive wildlife trips covering land and marine species",
    groupSize: "Private vehicle with tracker-guide — customisable group size",
    physicalLevel: "Easy, with one moderate rainforest walk",
    destinationsCovered: "Colombo → Minneriya → Udawalawe → Yala → Sinharaja → Mirissa → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Minneriya Area",
        morning: "Arrive and transfer towards Habarana.",
        afternoon: "Rest after your flight.",
        evening: "Evening safari in Minneriya National Park.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 2,
        title: "Minneriya Elephant Gathering",
        morning: "Morning safari in Minneriya (seasonal gathering).",
        afternoon: "Village tour by bullock cart and canoe.",
        evening: "Free evening.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 3,
        title: "Travel to Udawalawe",
        morning: "Drive south towards Udawalawe.",
        afternoon: "Visit the Elephant Transit Home.",
        evening: "First jeep safari in Udawalawe.",
        overnight: "Hotel near Udawalawe.",
      },
      {
        day: 4,
        title: "Udawalawe to Yala",
        morning: "A second Udawalawe safari.",
        afternoon: "Drive to the Yala area.",
        evening: "First jeep safari in Yala.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 5,
        title: "Yala Safari Day",
        morning: "Early morning jeep safari.",
        afternoon: "Rest, or visit Kataragama.",
        evening: "A second Yala safari.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 6,
        title: "Yala to Sinharaja",
        morning: "A final Yala safari.",
        afternoon: "Drive to Sinharaja Forest Reserve.",
        evening: "Evening briefing with a naturalist guide.",
        overnight: "Eco-lodge near Sinharaja.",
      },
      {
        day: 7,
        title: "Sinharaja Rainforest Walk",
        morning: "Guided rainforest trek for endemic birds and reptiles.",
        afternoon: "Drive to the south coast.",
        evening: "Settle into Mirissa.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 8,
        title: "Whale Watching in Mirissa",
        morning: "Boat trip in search of blue whales and dolphins.",
        afternoon: "Free time on the beach.",
        evening: "Relaxed dinner by the sea.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 9,
        title: "South Coast Leisure",
        morning: "Optional second whale watching trip, or free time.",
        afternoon: "Explore nearby Galle Fort.",
        evening: "Farewell coastal dinner.",
        overnight: "Hotel in Mirissa or Galle.",
      },
      {
        day: 10,
        title: "Departure",
        morning: "Free morning by the coast.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Safari lodges near Minneriya, Udawalawe and Yala; eco-lodge near Sinharaja; beachfront hotel in Mirissa.",
    transportation: "Private air-conditioned vehicle for road transfers; 4x4 safari jeeps with tracker-guides; whale watching boat.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["9 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "7 jeep safaris across Minneriya, Udawalawe and Yala", "Guided Sinharaja rainforest trek", "1 whale watching boat trip"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Second whale watching trip", "Professional wildlife photography guide", "Night walk in Sinharaja"],
    tourFaqs: [
      { q: "What's the whale watching success rate?", a: "Blue whale sightings off Mirissa are frequent in season (Nov–Apr) but never guaranteed, as with all wildlife viewing." },
      { q: "Do we need to book whale watching in advance?", a: "Yes, we reserve your boat trip as part of the package to secure a good operator and time slot." },
    ],
  },
  {
    slug: "wildlife-12-day-tour",
    title: "12 Day Wildlife Tour",
    category: "Wildlife Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Minneriya, Udawalawe, Yala & Wilpattu", "Sinharaja rainforest", "Mirissa whale watching"],
    price: "From $2,880 pp",
    blurb: "Our most complete wildlife journey, adding remote Wilpattu National Park for leopards away from the crowds.",
    motif: "leaf",
    heroTitle: "Complete Ceylon Wildlife Expedition — 12 Days, Four National Parks",
    intro:
      "Our fullest wildlife itinerary, adding Wilpattu — Sri Lanka's largest and least-visited national park — for a genuinely wild safari experience away from Yala's crowds.",
    overview:
      "This route opens in remote Wilpattu before following our full Minneriya–Udawalawe–Yala–Sinharaja–Mirissa circuit, giving serious wildlife travellers the most complete picture the island offers.",
    bestFor: "Dedicated wildlife enthusiasts and photographers wanting maximum park variety",
    groupSize: "Private vehicle with tracker-guide — customisable group size",
    physicalLevel: "Easy, with one moderate rainforest walk",
    destinationsCovered: "Colombo → Wilpattu → Minneriya → Udawalawe → Yala → Sinharaja → Mirissa → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Wilpattu",
        morning: "Arrive and transfer to the Wilpattu area, Sri Lanka's largest national park.",
        afternoon: "Settle in and rest after your flight.",
        evening: "First jeep safari in Wilpattu, known for its natural lakes ('villus') and leopards.",
        overnight: "Hotel near Wilpattu.",
      },
      {
        day: 2,
        title: "Wilpattu Safari to Minneriya",
        morning: "A second Wilpattu safari at dawn.",
        afternoon: "Drive towards Habarana.",
        evening: "Evening safari in Minneriya National Park.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 3,
        title: "Minneriya Elephant Gathering",
        morning: "Morning safari in Minneriya (seasonal gathering).",
        afternoon: "Village tour by bullock cart and canoe.",
        evening: "Free evening.",
        overnight: "Hotel near Minneriya or Habarana.",
      },
      {
        day: 4,
        title: "Travel to Udawalawe",
        morning: "Drive south towards Udawalawe.",
        afternoon: "Visit the Elephant Transit Home.",
        evening: "First jeep safari in Udawalawe.",
        overnight: "Hotel near Udawalawe.",
      },
      {
        day: 5,
        title: "Udawalawe to Yala",
        morning: "A second Udawalawe safari.",
        afternoon: "Drive to the Yala area.",
        evening: "First jeep safari in Yala.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 6,
        title: "Yala Safari Day",
        morning: "Early morning jeep safari.",
        afternoon: "Rest, or visit Kataragama.",
        evening: "A second Yala safari.",
        overnight: "Hotel near Yala.",
      },
      {
        day: 7,
        title: "Yala to Sinharaja",
        morning: "A final Yala safari.",
        afternoon: "Drive to Sinharaja Forest Reserve.",
        evening: "Evening briefing with a naturalist guide.",
        overnight: "Eco-lodge near Sinharaja.",
      },
      {
        day: 8,
        title: "Sinharaja Rainforest Walk",
        morning: "Guided rainforest trek for endemic birds and reptiles.",
        afternoon: "Drive to the south coast.",
        evening: "Settle into Mirissa.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 9,
        title: "Whale Watching in Mirissa",
        morning: "Boat trip in search of blue whales and dolphins.",
        afternoon: "Free time on the beach.",
        evening: "Relaxed dinner by the sea.",
        overnight: "Hotel in Mirissa.",
      },
      {
        day: 10,
        title: "South Coast Leisure",
        morning: "Optional second whale watching trip.",
        afternoon: "Explore Galle Fort.",
        evening: "Dinner within the fort walls.",
        overnight: "Hotel in Mirissa or Galle.",
      },
      {
        day: 11,
        title: "Free Day / Buffer Day",
        morning: "A flexible buffer day — repeat a favourite safari, or simply relax.",
        afternoon: "Free time on the coast.",
        evening: "Farewell dinner.",
        overnight: "Hotel in Mirissa or Galle.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Free morning by the coast.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Safari lodges near Wilpattu, Minneriya, Udawalawe and Yala; eco-lodge near Sinharaja; beachfront hotel in Mirissa.",
    transportation: "Private air-conditioned vehicle for road transfers; 4x4 safari jeeps with tracker-guides; whale watching boat.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["11 nights' accommodation as listed", "Daily breakfast", "Private vehicle and driver throughout", "9 jeep safaris across Wilpattu, Minneriya, Udawalawe and Yala", "Guided Sinharaja rainforest trek", "1 whale watching boat trip"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Professional wildlife photography guide throughout", "Second whale watching trip", "Extra Wilpattu safari session"],
    tourFaqs: [
      { q: "Why add Wilpattu when Yala already has leopards?", a: "Wilpattu is far less visited, so sightings feel more exclusive, and its lake-dotted landscape is genuinely different scenery from Yala's dry plains." },
      { q: "Is 12 days excessive for a wildlife trip?", a: "For dedicated wildlife travellers and photographers, it allows unhurried time in each park rather than a single rushed visit." },
    ],
  },
  {
    slug: "romantic-5-day-tour",
    title: "5 Day Romantic Tour",
    category: "Romantic & Honeymoon Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Private pool villa", "Sunset catamaran cruise", "Candlelit beach dinner"],
    price: "From $1,900 pp",
    blurb: "A short, secluded romantic escape between hill country and the coast.",
    motif: "sun",
    heroTitle: "Ceylon Romance Weekend — 5 Days of Hills and Private Coast",
    intro:
      "A compact romantic escape for couples short on time — one night in cool tea country, followed by private beach seclusion and a candlelit dinner under the stars.",
    overview:
      "This short route pairs a scenic hill-country night with an extended coastal stay in a private pool villa, prioritising quality time together over ground covered.",
    bestFor: "Couples, anniversaries, short honeymoons",
    groupSize: "Private — just the two of you",
    physicalLevel: "Easy",
    destinationsCovered: "Colombo → Kandy → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Kandy",
        morning: "Arrive and drive to Kandy, Sri Lanka's last royal capital.",
        afternoon: "Gentle walk around Kandy Lake, hand in hand.",
        evening: "Private candlelit dinner at your hotel overlooking the lake.",
        overnight: "Boutique hotel, Kandy.",
      },
      {
        day: 2,
        title: "Kandy to Bentota",
        morning: "Visit the Temple of the Sacred Tooth Relic before departing.",
        afternoon: "Scenic drive to the coast, arriving at your private pool villa in Bentota.",
        evening: "Settle in and watch the sunset from your villa.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 3,
        title: "Sunset Catamaran Cruise",
        morning: "Late breakfast, then free time by the pool.",
        afternoon: "Free time to relax, or a couple's spa treatment.",
        evening: "Private sunset catamaran cruise along the coastline.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 4,
        title: "Beach Day & Candlelit Dinner",
        morning: "Leisurely morning — swim, read, or simply relax.",
        afternoon: "Optional river safari through Bentota's mangroves.",
        evening: "Private candlelit dinner set up on the beach, just for two.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 5,
        title: "Departure",
        morning: "Final relaxed morning at the villa.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "A boutique lake-view hotel in Kandy; a private pool villa in Bentota.",
    transportation: "Private air-conditioned vehicle with driver throughout.",
    meals: "Daily breakfast, plus 2 private dinner experiences (Kandy lakeside, Bentota beach). Other meals at your own choice.",
    included: ["4 nights' accommodation as listed", "Daily breakfast + 2 private dinners", "Private vehicle and driver throughout", "Private sunset catamaran cruise", "Temple of the Tooth entrance fee"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Couple's spa treatment", "Bentota river safari", "In-villa private chef upgrade"],
    tourFaqs: [
      { q: "Can you arrange a surprise proposal setup?", a: "Yes — tell us your plans in the message field of the enquiry form and we'll help coordinate the details discreetly." },
      { q: "Is the villa fully private?", a: "Yes, our Bentota villa recommendations include a private pool, so you won't be sharing pool space with other guests." },
    ],
  },
  {
    slug: "romantic-7-day-tour",
    title: "7 Day Romantic Tour",
    category: "Romantic & Honeymoon Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Sigiriya sunrise together", "Private pool villa", "Sunset catamaran cruise"],
    price: "From $2,660 pp",
    blurb: "Our 5-day romance route extended with the Cultural Triangle for a shared sense of adventure.",
    motif: "sun",
    heroTitle: "Ceylon Romance Escape — 7 Days of Culture, Hills and Private Coast",
    intro:
      "Adding Sigiriya to our short romance route — climbing an ancient rock fortress together before settling into cool tea country and finishing with private beach seclusion.",
    overview:
      "This itinerary opens with the Cultural Triangle, giving couples a shared adventure to bond over, before the same restful Kandy-to-Bentota sequence as our 5-day romance escape.",
    bestFor: "Couples wanting culture and adventure alongside romance",
    groupSize: "Private — just the two of you",
    physicalLevel: "Easy, with one moderate climb",
    destinationsCovered: "Colombo → Sigiriya → Kandy → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer directly to the Sigiriya area.",
        afternoon: "Settle into your hotel, with the rock visible from the gardens.",
        evening: "Romantic dinner with rock views.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 2,
        title: "Sigiriya Together",
        morning: "Climb Sigiriya Rock Fortress together, taking in the frescoes and views from the summit.",
        afternoon: "Relax at your hotel, or a couple's village tour by bullock cart.",
        evening: "Private dinner under the stars.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        morning: "Visit the Dambulla Cave Temple en route.",
        afternoon: "Continue to Kandy, with a stop at a spice garden.",
        evening: "Gentle walk around Kandy Lake.",
        overnight: "Boutique hotel, Kandy.",
      },
      {
        day: 4,
        title: "Kandy to Bentota",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Scenic drive to your private pool villa in Bentota.",
        evening: "Settle in and watch the sunset together.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 5,
        title: "Sunset Catamaran Cruise",
        morning: "Leisurely morning by the pool.",
        afternoon: "Optional couple's spa treatment.",
        evening: "Private sunset catamaran cruise along the coast.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 6,
        title: "Beach Day & Candlelit Dinner",
        morning: "Free morning to relax.",
        afternoon: "Optional river safari through the mangroves.",
        evening: "Private candlelit beach dinner.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 7,
        title: "Departure",
        morning: "Final relaxed morning at the villa.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Boutique hotels in Sigiriya and Kandy; a private pool villa in Bentota.",
    transportation: "Private air-conditioned vehicle with driver throughout.",
    meals: "Daily breakfast, plus 3 private dinner experiences. Other meals at your own choice.",
    included: ["6 nights' accommodation as listed", "Daily breakfast + 3 private dinners", "Private vehicle and driver throughout", "Private sunset catamaran cruise", "Sigiriya & Temple of the Tooth entrance fees"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Couple's spa treatment", "Bentota river safari", "Hot-air balloon flight over the Cultural Triangle"],
    tourFaqs: [
      { q: "Is the Sigiriya climb manageable as a couple activity?", a: "Yes, it's a popular shared-adventure moment for couples — steady pace, about 1,200 steps." },
      { q: "Can we add a photographer for the trip?", a: "Yes, we can arrange a professional couples' photography session at Sigiriya or on the beach in Bentota." },
    ],
  },
  {
    slug: "romantic-8-day-tour",
    title: "8 Day Romantic Tour",
    category: "Romantic & Honeymoon Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Sigiriya & Kandy together", "Tea country escape", "Private pool villa & catamaran cruise"],
    price: "From $3,040 pp",
    blurb: "Our 7-day romance route with an extra night in cool tea country for a fuller hill-to-coast arc.",
    motif: "sun",
    heroTitle: "Ceylon Honeymoon Journey — 8 Days, Rock Fortress to Private Villa",
    intro:
      "The same culture-to-coast romance route, with an added night among Nuwara Eliya's tea estates — cooler air, colonial charm, and a quieter pace before the coast.",
    overview:
      "This itinerary extends our 7-day romance escape with a night in Nuwara Eliya, giving the trip a fuller emotional arc from adventure to stillness to celebration.",
    bestFor: "Honeymooners wanting a complete hill-to-coast arc",
    groupSize: "Private — just the two of you",
    physicalLevel: "Easy, with one moderate climb",
    destinationsCovered: "Colombo → Sigiriya → Kandy → Nuwara Eliya → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer to the Sigiriya area.",
        afternoon: "Settle into your hotel.",
        evening: "Romantic dinner with rock views.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 2,
        title: "Sigiriya Together",
        morning: "Climb Sigiriya Rock Fortress together.",
        afternoon: "Couple's village tour by bullock cart.",
        evening: "Private dinner under the stars.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        morning: "Visit the Dambulla Cave Temple.",
        afternoon: "Continue to Kandy via a spice garden.",
        evening: "Gentle walk around Kandy Lake.",
        overnight: "Boutique hotel, Kandy.",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Temple of the Sacred Tooth Relic and Botanical Gardens.",
        afternoon: "Drive into the hills, visiting a tea estate together.",
        evening: "Cosy dinner by the fireplace in cool Nuwara Eliya.",
        overnight: "Colonial-era hotel, Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Bentota",
        morning: "A quiet morning walk around Gregory Lake.",
        afternoon: "Long, scenic drive down to the coast.",
        evening: "Settle into your private pool villa in Bentota.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 6,
        title: "Sunset Catamaran Cruise",
        morning: "Leisurely morning by the pool.",
        afternoon: "Optional couple's spa treatment.",
        evening: "Private sunset catamaran cruise.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 7,
        title: "Beach Day & Candlelit Dinner",
        morning: "Free morning to relax.",
        afternoon: "Optional river safari through the mangroves.",
        evening: "Private candlelit beach dinner.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 8,
        title: "Departure",
        morning: "Final relaxed morning at the villa.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Boutique hotels in Sigiriya and Kandy; a colonial-era hotel in Nuwara Eliya; a private pool villa in Bentota.",
    transportation: "Private air-conditioned vehicle with driver throughout.",
    meals: "Daily breakfast, plus 4 private dinner experiences. Other meals at your own choice.",
    included: ["7 nights' accommodation as listed", "Daily breakfast + 4 private dinners", "Private vehicle and driver throughout", "Private sunset catamaran cruise", "Sigiriya & Temple of the Tooth entrance fees", "Tea estate tour and tasting"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Couple's spa treatment", "Professional couples' photography session", "Private candlelit dinner in the tea estate"],
    tourFaqs: [
      { q: "Will Nuwara Eliya be too cold for a honeymoon?", a: "It's cool rather than cold — most couples find the fireplace evenings a romantic contrast to the tropical coast." },
      { q: "Can we upgrade the villa for a wedding anniversary?", a: "Yes, let us know the occasion and we'll arrange special touches — flowers, cake, or a private setup." },
    ],
  },
  {
    slug: "romantic-10-day-tour",
    title: "10 Day Romantic Tour",
    category: "Romantic & Honeymoon Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Sigiriya, Kandy & tea country", "Scenic train to Ella", "Private villa & catamaran cruise"],
    price: "From $3,800 pp",
    blurb: "Our 8-day romance journey with the scenic Ella train added for a fuller hill-country chapter.",
    motif: "sun",
    heroTitle: "Grand Ceylon Honeymoon — 10 Days of Culture, Rail and Private Coast",
    intro:
      "Extending our romance journey into Ella via Sri Lanka's celebrated scenic railway — a shared, unhurried travel experience before your private coastal finish.",
    overview:
      "This route adds Ella and the Nanu Oya–Ella train journey to our 8-day honeymoon itinerary, giving couples an extra, memorable hill-country chapter.",
    bestFor: "Honeymooners with time for a fuller hill-country experience",
    groupSize: "Private — just the two of you",
    physicalLevel: "Easy, with one moderate climb",
    destinationsCovered: "Colombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer to the Sigiriya area.",
        afternoon: "Settle into your hotel.",
        evening: "Romantic dinner with rock views.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 2,
        title: "Sigiriya Together",
        morning: "Climb Sigiriya Rock Fortress together.",
        afternoon: "Couple's village tour by bullock cart.",
        evening: "Private dinner under the stars.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        morning: "Visit the Dambulla Cave Temple.",
        afternoon: "Continue to Kandy via a spice garden.",
        evening: "Gentle walk around Kandy Lake.",
        overnight: "Boutique hotel, Kandy.",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Drive into the hills, visiting a tea estate.",
        evening: "Cosy dinner by the fireplace.",
        overnight: "Colonial-era hotel, Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Scenic Train to Ella",
        morning: "Morning walk around Gregory Lake, then board the scenic train to Ella.",
        afternoon: "Walk to the Nine Arch Bridge together.",
        evening: "Dinner with valley views in Ella.",
        overnight: "Boutique hotel, Ella.",
      },
      {
        day: 6,
        title: "Ella to Bentota",
        morning: "Optional gentle walk to Ravana Falls.",
        afternoon: "Long, scenic drive down to the coast.",
        evening: "Settle into your private pool villa in Bentota.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 7,
        title: "Sunset Catamaran Cruise",
        morning: "Leisurely morning by the pool.",
        afternoon: "Optional couple's spa treatment.",
        evening: "Private sunset catamaran cruise.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 8,
        title: "Beach Day One",
        morning: "Free morning to relax.",
        afternoon: "Optional river safari through the mangroves.",
        evening: "Private candlelit beach dinner.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 9,
        title: "Beach Day Two",
        morning: "Slow morning together, no plans.",
        afternoon: "Free time — beach, pool, or a couple's treatment.",
        evening: "Farewell dinner.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 10,
        title: "Departure",
        morning: "Final relaxed morning at the villa.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Boutique hotels in Sigiriya, Kandy, Nuwara Eliya and Ella; a private pool villa in Bentota.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats, Nanu Oya to Ella.",
    meals: "Daily breakfast, plus 5 private dinner experiences. Other meals at your own choice.",
    included: ["9 nights' accommodation as listed", "Daily breakfast + 5 private dinners", "Private vehicle and driver throughout", "Reserved train tickets, Nanu Oya to Ella", "Private sunset catamaran cruise", "Sigiriya & Temple of the Tooth entrance fees"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Couple's spa treatment", "Professional couples' photography session", "Private dinner on a tea estate veranda"],
    tourFaqs: [
      { q: "Is the train journey romantic or crowded?", a: "It can get busy in peak season, which is why we book reserved seats rather than leaving you to find standing room." },
      { q: "Can this double as a proposal trip?", a: "Absolutely — Ella's viewpoints and Bentota's private beach are both popular proposal settings; let us know and we'll help plan it." },
    ],
  },
  {
    slug: "romantic-12-day-tour",
    title: "12 Day Romantic Tour",
    category: "Romantic & Honeymoon Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Full Cultural Triangle & hill country", "Scenic train to Ella", "Extended private villa stay"],
    price: "From $4,560 pp",
    blurb: "Our fullest honeymoon itinerary — culture, tea country and rail, finished with an extended private coastal stay.",
    motif: "sun",
    heroTitle: "Complete Ceylon Honeymoon — 12 Days, Unhurried Throughout",
    intro:
      "Our most complete honeymoon route, adding proper time in Galle's fort town before an extended stay in your private pool villa — genuinely unhurried from start to finish.",
    overview:
      "This itinerary extends our 10-day honeymoon journey with two additional nights, splitting the coastal finish between historic Galle and an extended private villa stay in Bentota.",
    bestFor: "Honeymooners wanting the fullest, most unhurried version of this trip",
    groupSize: "Private — just the two of you",
    physicalLevel: "Easy, with one moderate climb",
    destinationsCovered: "Colombo → Sigiriya → Kandy → Nuwara Eliya → Ella → Galle → Bentota",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer to the Sigiriya area.",
        afternoon: "Settle into your hotel.",
        evening: "Romantic dinner with rock views.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 2,
        title: "Sigiriya Together",
        morning: "Climb Sigiriya Rock Fortress together.",
        afternoon: "Couple's village tour by bullock cart.",
        evening: "Private dinner under the stars.",
        overnight: "Boutique hotel, Sigiriya.",
      },
      {
        day: 3,
        title: "Sigiriya to Kandy",
        morning: "Visit the Dambulla Cave Temple.",
        afternoon: "Continue to Kandy via a spice garden.",
        evening: "Gentle walk around Kandy Lake.",
        overnight: "Boutique hotel, Kandy.",
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Drive into the hills, visiting a tea estate.",
        evening: "Cosy dinner by the fireplace.",
        overnight: "Colonial-era hotel, Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Scenic Train to Ella",
        morning: "Morning walk around Gregory Lake, then board the scenic train.",
        afternoon: "Walk to the Nine Arch Bridge together.",
        evening: "Dinner with valley views.",
        overnight: "Boutique hotel, Ella.",
      },
      {
        day: 6,
        title: "Ella to Galle",
        morning: "Optional gentle walk to Ravana Falls.",
        afternoon: "Long, scenic drive to the south coast.",
        evening: "Sunset walk on Galle's Dutch-era ramparts.",
        overnight: "Boutique hotel within Galle Fort.",
      },
      {
        day: 7,
        title: "Galle Fort Together",
        morning: "Wander Galle Fort's boutique streets hand in hand.",
        afternoon: "Free time, or a couple's cooking class.",
        evening: "Candlelit dinner within the historic fort walls.",
        overnight: "Boutique hotel within Galle Fort.",
      },
      {
        day: 8,
        title: "Galle to Bentota",
        morning: "Leisurely morning in Galle.",
        afternoon: "Drive up the coast to your private pool villa in Bentota.",
        evening: "Settle in and watch the sunset.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 9,
        title: "Sunset Catamaran Cruise",
        morning: "Leisurely morning by the pool.",
        afternoon: "Optional couple's spa treatment.",
        evening: "Private sunset catamaran cruise.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 10,
        title: "Beach Day One",
        morning: "Free morning to relax.",
        afternoon: "Optional river safari through the mangroves.",
        evening: "Private candlelit beach dinner.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 11,
        title: "Beach Day Two",
        morning: "Slow morning together, no plans.",
        afternoon: "Free time — beach, pool, or a couple's treatment.",
        evening: "Farewell dinner.",
        overnight: "Private pool villa, Bentota.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Final relaxed morning at the villa.",
        afternoon: "Drive to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Boutique hotels in Sigiriya, Kandy, Nuwara Eliya, Ella and Galle Fort; a private pool villa in Bentota.",
    transportation: "Private air-conditioned vehicle with driver; reserved train seats, Nanu Oya to Ella.",
    meals: "Daily breakfast, plus 7 private dinner experiences. Other meals at your own choice.",
    included: ["11 nights' accommodation as listed", "Daily breakfast + 7 private dinners", "Private vehicle and driver throughout", "Reserved train tickets, Nanu Oya to Ella", "Private sunset catamaran cruise", "Sigiriya & Temple of the Tooth entrance fees"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Couple's spa treatment", "Professional couples' photography session in Galle Fort", "Private beachfront yoga sessions"],
    tourFaqs: [
      { q: "Is 12 days too long for a honeymoon?", a: "Most couples tell us the opposite — the extra days are what make it feel like a genuine holiday rather than a tour, with real time to just be together." },
      { q: "Can we choose Galle Fort over Bentota for more nights?", a: "Yes, we can rebalance nights between the two coastal stops to suit your preference." },
    ],
  },
  {
    slug: "cultural-5-day-tour",
    title: "5 Day Cultural Tour",
    category: "Cultural Heritage Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Temple of the Sacred Tooth Relic"],
    price: "From $1,125 pp",
    blurb: "A focused 5-day route through Sri Lanka's Cultural Triangle UNESCO sites.",
    motif: "temple",
    heroTitle: "Ceylon Heritage Discovery — 5 Days Through the Cultural Triangle",
    intro:
      "A dedicated heritage route through three UNESCO World Heritage Sites — a rock fortress, ancient cave temples, and a living royal capital.",
    overview:
      "This route stays entirely within Sri Lanka's compact Cultural Triangle, allowing time to properly explore each UNESCO site with knowledgeable local guides rather than rushing between them.",
    bestFor: "History enthusiasts, culture-focused travellers, short trips with depth",
    groupSize: "Private vehicle with cultural guide — customisable group size",
    physicalLevel: "Easy to moderate (Sigiriya climb)",
    destinationsCovered: "Colombo → Sigiriya → Dambulla → Kandy → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sigiriya",
        morning: "Arrive and transfer directly to Sigiriya.",
        afternoon: "Visit Sigiriya's water gardens and museum to set historical context.",
        evening: "Dinner with rock views.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 2,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress with a specialist guide, examining the 5th-century frescoes and mirror wall inscriptions.",
        afternoon: "Visit nearby Pidurangala Rock for a contrasting viewpoint back at Sigiriya.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 3,
        title: "Dambulla Cave Temple",
        morning: "Explore the Dambulla Cave Temple complex — five caves of Buddhist murals and statues spanning over 2,000 years.",
        afternoon: "Visit a traditional craft village to see batik-making and wood carving.",
        evening: "Drive to Kandy, arriving in the evening.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 4,
        title: "Kandy's Living Heritage",
        morning: "Visit the Temple of the Sacred Tooth Relic and learn about its centuries-old custodial rituals.",
        afternoon: "Explore the Royal Botanical Gardens, Peradeniya, established during the Kandyan Kingdom.",
        evening: "Traditional Kandyan cultural dance performance.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 5,
        title: "Colombo & Departure",
        morning: "Drive to Colombo, visiting the Gangaramaya Temple's eclectic architecture.",
        afternoon: "Free time before transferring to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Heritage-style hotels in Sigiriya and Kandy.",
    transportation: "Private air-conditioned vehicle with a specialist cultural guide throughout.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["4 nights' accommodation as listed", "Daily breakfast", "Private vehicle and cultural guide throughout", "Sigiriya, Dambulla and Temple of the Tooth entrance fees", "Kandyan cultural dance show"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Traditional mask-carving workshop", "Private lecture with a local archaeologist", "Hot-air balloon flight over the Cultural Triangle"],
    tourFaqs: [
      { q: "Is a specialist guide really necessary?", a: "It significantly enriches the sites — a knowledgeable guide can explain the symbolism and history that's easy to miss visiting independently." },
      { q: "Are these sites accessible for less mobile travellers?", a: "Dambulla and Kandy are accessible with some walking; Sigiriya's summit does require climbing stairs, which isn't avoidable." },
    ],
  },
  {
    slug: "cultural-7-day-tour",
    title: "7 Day Cultural Tour",
    category: "Cultural Heritage Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Anuradhapura & Sigiriya", "Dambulla Cave Temple", "Temple of the Sacred Tooth Relic"],
    price: "From $1,575 pp",
    blurb: "Our 5-day heritage route extended to Anuradhapura, Sri Lanka's first ancient capital.",
    motif: "temple",
    heroTitle: "Ceylon Ancient Capitals — 7 Days Through Ceylon's Heritage Sites",
    intro:
      "Adding Anuradhapura — Sri Lanka's first ancient capital and one of the world's best-preserved monastic cities — to our core Cultural Triangle route.",
    overview:
      "This itinerary opens with Anuradhapura's 2,000-year-old dagobas and sacred sites before continuing through Sigiriya, Dambulla and Kandy.",
    bestFor: "History enthusiasts wanting a deeper archaeological trip",
    groupSize: "Private vehicle with cultural guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Anuradhapura → Sigiriya → Dambulla → Kandy → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Anuradhapura",
        morning: "Arrive and transfer to Anuradhapura.",
        afternoon: "Visit the Sri Maha Bodhi, grown from a cutting of the original Bodhi tree in India.",
        evening: "Sunset over the ancient Tissawewa reservoir.",
        overnight: "Hotel near Anuradhapura.",
      },
      {
        day: 2,
        title: "Anuradhapura's Sacred City",
        morning: "Visit the Jetavanaramaya and Abhayagiri stupas, among the tallest brick structures in the ancient world.",
        afternoon: "Explore the Isurumuniya rock temple and its famous stone carvings.",
        evening: "Drive towards Sigiriya.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 3,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress with a specialist guide.",
        afternoon: "Visit Pidurangala Rock for a contrasting view.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 4,
        title: "Dambulla Cave Temple",
        morning: "Explore the Dambulla Cave Temple complex.",
        afternoon: "Visit a traditional craft village.",
        evening: "Drive to Kandy.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 5,
        title: "Kandy's Living Heritage",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Explore the Royal Botanical Gardens, Peradeniya.",
        evening: "Traditional Kandyan cultural dance performance.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 6,
        title: "Kandy to Colombo",
        morning: "Visit a gem museum and traditional lacquerware workshop.",
        afternoon: "Drive to Colombo, visiting the Pettah bazaar district.",
        evening: "Farewell dinner in Colombo.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 7,
        title: "Colombo & Departure",
        morning: "Visit the Gangaramaya Temple and National Museum.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Heritage-style hotels near Anuradhapura, Sigiriya and Kandy.",
    transportation: "Private air-conditioned vehicle with a specialist cultural guide throughout.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["6 nights' accommodation as listed", "Daily breakfast", "Private vehicle and cultural guide throughout", "All site entrance fees listed", "Kandyan cultural dance show"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private lecture with a local archaeologist", "Traditional mask-carving workshop", "Hot-air balloon flight over the Cultural Triangle"],
    tourFaqs: [
      { q: "What's the difference between Anuradhapura and Polonnaruwa?", a: "Anuradhapura is older (3rd century BC onward) and more spread out; Polonnaruwa is more compact and better preserved — this route focuses on the former for its scale and antiquity." },
      { q: "Is appropriate dress required at temple sites?", a: "Yes — shoulders and knees covered, and shoes removed at sacred sites; we'll brief you before each visit." },
    ],
  },
  {
    slug: "cultural-8-day-tour",
    title: "8 Day Cultural Tour",
    category: "Cultural Heritage Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Anuradhapura & Polonnaruwa", "Sigiriya & Dambulla", "Temple of the Sacred Tooth Relic"],
    price: "From $1,800 pp",
    blurb: "Our 7-day ancient capitals route with Polonnaruwa added for a complete medieval and classical picture.",
    motif: "temple",
    heroTitle: "Ceylon Heritage Expedition — 8 Days, Both Ancient Capitals",
    intro:
      "Visiting both of Sri Lanka's ancient capitals — Anuradhapura (classical period) and Polonnaruwa (medieval period) — for a complete arc of the island's monumental history.",
    overview:
      "This itinerary adds Polonnaruwa to our 7-day route, giving a full historical progression from Sri Lanka's earliest capital through its medieval golden age to its living traditions in Kandy.",
    bestFor: "Dedicated history and archaeology travellers",
    groupSize: "Private vehicle with cultural guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Anuradhapura → Polonnaruwa → Sigiriya → Dambulla → Kandy → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Anuradhapura",
        morning: "Arrive and transfer to Anuradhapura.",
        afternoon: "Visit the Sri Maha Bodhi sacred tree.",
        evening: "Sunset over the Tissawewa reservoir.",
        overnight: "Hotel near Anuradhapura.",
      },
      {
        day: 2,
        title: "Anuradhapura's Sacred City",
        morning: "Visit the Jetavanaramaya and Abhayagiri stupas.",
        afternoon: "Explore the Isurumuniya rock temple.",
        evening: "Drive towards Polonnaruwa.",
        overnight: "Hotel near Polonnaruwa.",
      },
      {
        day: 3,
        title: "Polonnaruwa Ancient City",
        morning: "Cycle among the ruins of Sri Lanka's medieval capital.",
        afternoon: "Visit the Gal Vihara rock carvings, among the finest Buddhist sculpture in Asia.",
        evening: "Drive towards Sigiriya.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 4,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress with a specialist guide.",
        afternoon: "Visit Pidurangala Rock.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 5,
        title: "Dambulla Cave Temple",
        morning: "Explore the Dambulla Cave Temple complex.",
        afternoon: "Visit a traditional craft village.",
        evening: "Drive to Kandy.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 6,
        title: "Kandy's Living Heritage",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Explore the Royal Botanical Gardens, Peradeniya.",
        evening: "Traditional Kandyan cultural dance performance.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 7,
        title: "Kandy to Colombo",
        morning: "Visit a gem museum and lacquerware workshop.",
        afternoon: "Drive to Colombo, visiting Pettah bazaar.",
        evening: "Farewell dinner.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 8,
        title: "Colombo & Departure",
        morning: "Visit the Gangaramaya Temple and National Museum.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Heritage-style hotels near Anuradhapura, Polonnaruwa, Sigiriya and Kandy.",
    transportation: "Private air-conditioned vehicle with a specialist cultural guide throughout.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["7 nights' accommodation as listed", "Daily breakfast", "Private vehicle and cultural guide throughout", "All site entrance fees listed", "Kandyan cultural dance show"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private lecture with a local archaeologist", "Traditional mask-carving workshop", "Hot-air balloon flight over the Cultural Triangle"],
    tourFaqs: [
      { q: "Is cycling in Polonnaruwa suitable for all fitness levels?", a: "Yes, the terrain is flat and the pace is easy — bicycles are provided and it's a highlight for most travellers." },
      { q: "How much walking is involved overall?", a: "A moderate amount daily, with breaks; Sigiriya's climb is the most demanding single activity." },
    ],
  },
  {
    slug: "cultural-10-day-tour",
    title: "10 Day Cultural Tour",
    category: "Cultural Heritage Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Both ancient capitals", "Sigiriya & Dambulla", "Galle Fort's colonial heritage"],
    price: "From $2,250 pp",
    blurb: "Our 8-day ancient capitals route extended to Galle's Dutch-era fort for a colonial heritage chapter.",
    motif: "temple",
    heroTitle: "Grand Ceylon Heritage Journey — 10 Days, Ancient to Colonial",
    intro:
      "Adding Galle's UNESCO-listed Dutch fort to our ancient capitals route — a complete heritage arc from 3rd-century monasteries to 17th-century colonial fortification.",
    overview:
      "This itinerary extends our 8-day ancient capitals route to the south coast, giving a genuinely complete heritage narrative: classical, medieval and colonial Sri Lanka in one trip.",
    bestFor: "History enthusiasts wanting the full historical arc, ancient to colonial",
    groupSize: "Private vehicle with cultural guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Anuradhapura → Polonnaruwa → Sigiriya → Dambulla → Kandy → Galle → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Anuradhapura",
        morning: "Arrive and transfer to Anuradhapura.",
        afternoon: "Visit the Sri Maha Bodhi sacred tree.",
        evening: "Sunset over the Tissawewa reservoir.",
        overnight: "Hotel near Anuradhapura.",
      },
      {
        day: 2,
        title: "Anuradhapura's Sacred City",
        morning: "Visit the Jetavanaramaya and Abhayagiri stupas.",
        afternoon: "Explore the Isurumuniya rock temple.",
        evening: "Drive towards Polonnaruwa.",
        overnight: "Hotel near Polonnaruwa.",
      },
      {
        day: 3,
        title: "Polonnaruwa Ancient City",
        morning: "Cycle among the ruins of the medieval capital.",
        afternoon: "Visit the Gal Vihara rock carvings.",
        evening: "Drive towards Sigiriya.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 4,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress with a specialist guide.",
        afternoon: "Visit Pidurangala Rock.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 5,
        title: "Dambulla Cave Temple",
        morning: "Explore the Dambulla Cave Temple complex.",
        afternoon: "Visit a traditional craft village.",
        evening: "Drive to Kandy.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 6,
        title: "Kandy's Living Heritage",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Explore the Royal Botanical Gardens, Peradeniya.",
        evening: "Traditional Kandyan cultural dance performance.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 7,
        title: "Kandy to Galle",
        morning: "Drive south towards the coast.",
        afternoon: "Arrive in Galle and walk the Dutch-era ramparts at sunset.",
        evening: "Dinner within the historic fort walls.",
        overnight: "Boutique hotel within Galle Fort.",
      },
      {
        day: 8,
        title: "Galle Fort's Colonial Heritage",
        morning: "Guided walk through Galle Fort, covering Portuguese, Dutch and British-era architecture.",
        afternoon: "Visit the Dutch Reformed Church and Maritime Museum.",
        evening: "Free evening within the fort.",
        overnight: "Boutique hotel within Galle Fort.",
      },
      {
        day: 9,
        title: "Galle to Colombo",
        morning: "Leisurely morning in Galle.",
        afternoon: "Drive to Colombo, visiting Pettah bazaar.",
        evening: "Farewell dinner.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 10,
        title: "Colombo & Departure",
        morning: "Visit the Gangaramaya Temple and National Museum.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Heritage-style hotels near Anuradhapura, Polonnaruwa, Sigiriya and Kandy; a boutique hotel within Galle Fort.",
    transportation: "Private air-conditioned vehicle with a specialist cultural guide throughout.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["9 nights' accommodation as listed", "Daily breakfast", "Private vehicle and cultural guide throughout", "All site entrance fees listed", "Kandyan cultural dance show"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private lecture with a local archaeologist", "Traditional mask-carving workshop", "Galle Fort sunset rampart walk with a colonial-history specialist"],
    tourFaqs: [
      { q: "How is Galle Fort different from the ancient sites?", a: "It's a completely different era — 17th-century European colonial fortification, still lived in today, rather than a ruin." },
      { q: "Can we extend our time in Galle?", a: "Yes, we can rebalance nights if you'd like more time exploring the fort's boutique shops and cafés." },
    ],
  },
  {
    slug: "cultural-12-day-tour",
    title: "12 Day Cultural Tour",
    category: "Cultural Heritage Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Both ancient capitals", "Sigiriya, Dambulla & Kandy", "Galle Fort & Colombo's layered heritage"],
    price: "From $2,700 pp",
    blurb: "Our most complete heritage route — ancient, medieval and colonial Sri Lanka, with time to properly absorb each era.",
    motif: "temple",
    heroTitle: "Complete Ceylon Heritage Journey — 12 Days Across Three Eras",
    intro:
      "Our fullest heritage itinerary, adding extra days at each major site so you can properly absorb Sri Lanka's classical, medieval and colonial history rather than moving quickly between them.",
    overview:
      "This itinerary follows our 10-day heritage journey with additional time at Anuradhapura and in Colombo, giving genuine depth to a trip that already spans three distinct historical eras.",
    bestFor: "Serious history travellers wanting maximum depth, not just breadth",
    groupSize: "Private vehicle with cultural guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Anuradhapura → Polonnaruwa → Sigiriya → Dambulla → Kandy → Galle → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Anuradhapura",
        morning: "Arrive and transfer to Anuradhapura.",
        afternoon: "Visit the Sri Maha Bodhi sacred tree.",
        evening: "Sunset over the Tissawewa reservoir.",
        overnight: "Hotel near Anuradhapura.",
      },
      {
        day: 2,
        title: "Anuradhapura's Sacred City",
        morning: "Visit the Jetavanaramaya and Abhayagiri stupas.",
        afternoon: "Explore the Isurumuniya rock temple.",
        evening: "Free evening to reflect on the day's sites.",
        overnight: "Hotel near Anuradhapura.",
      },
      {
        day: 3,
        title: "Anuradhapura's Outer Monasteries",
        morning: "Visit the lesser-visited Ritigala forest monastery ruins.",
        afternoon: "Explore Mihintale, considered the cradle of Buddhism in Sri Lanka.",
        evening: "Drive towards Polonnaruwa.",
        overnight: "Hotel near Polonnaruwa.",
      },
      {
        day: 4,
        title: "Polonnaruwa Ancient City",
        morning: "Cycle among the ruins of the medieval capital.",
        afternoon: "Visit the Gal Vihara rock carvings.",
        evening: "Drive towards Sigiriya.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 5,
        title: "Sigiriya Rock Fortress",
        morning: "Climb Sigiriya Rock Fortress with a specialist guide.",
        afternoon: "Visit Pidurangala Rock.",
        evening: "Free time at your hotel.",
        overnight: "Hotel in Sigiriya or Habarana.",
      },
      {
        day: 6,
        title: "Dambulla Cave Temple",
        morning: "Explore the Dambulla Cave Temple complex.",
        afternoon: "Visit a traditional craft village.",
        evening: "Drive to Kandy.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 7,
        title: "Kandy's Living Heritage",
        morning: "Visit the Temple of the Sacred Tooth Relic.",
        afternoon: "Explore the Royal Botanical Gardens, Peradeniya.",
        evening: "Traditional Kandyan cultural dance performance.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 8,
        title: "Kandy to Galle",
        morning: "Drive south towards the coast.",
        afternoon: "Arrive in Galle and walk the ramparts at sunset.",
        evening: "Dinner within the historic fort walls.",
        overnight: "Boutique hotel within Galle Fort.",
      },
      {
        day: 9,
        title: "Galle Fort's Colonial Heritage",
        morning: "Guided walk through Galle Fort's layered architecture.",
        afternoon: "Visit the Dutch Reformed Church and Maritime Museum.",
        evening: "Free evening within the fort.",
        overnight: "Boutique hotel within Galle Fort.",
      },
      {
        day: 10,
        title: "Galle to Colombo",
        morning: "Leisurely morning in Galle.",
        afternoon: "Drive to Colombo.",
        evening: "Free evening.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 11,
        title: "Colombo's Layered Heritage",
        morning: "Visit the National Museum for context on everything you've seen.",
        afternoon: "Explore the Gangaramaya Temple, Pettah bazaar and colonial-era Fort district.",
        evening: "Farewell dinner in Colombo.",
        overnight: "Hotel in Colombo.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Free morning for last-minute shopping.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Heritage-style hotels near Anuradhapura, Polonnaruwa, Sigiriya and Kandy; a boutique hotel within Galle Fort; a heritage property in Colombo.",
    transportation: "Private air-conditioned vehicle with a specialist cultural guide throughout.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["11 nights' accommodation as listed", "Daily breakfast", "Private vehicle and cultural guide throughout", "All site entrance fees listed", "Kandyan cultural dance show"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private lecture with a local archaeologist", "Traditional mask-carving workshop", "Colombo colonial architecture walking tour"],
    tourFaqs: [
      { q: "What's the benefit of 12 days over the 8 or 10-day versions?", a: "The extra days go to lesser-visited sites like Ritigala and Mihintale, and to Colombo itself — genuinely additive rather than padding." },
      { q: "Do we need a specific academic interest to enjoy this?", a: "Not at all — our guides pitch the history accessibly, though it does suit travellers who want depth over a fast-paced highlight reel." },
    ],
  },
  {
    slug: "ayurveda-5-day-tour",
    title: "5 Day Ayurveda Tour",
    category: "Ayurveda & Wellness Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Doctor consultation & pulse diagnosis", "Daily personalised treatments", "Yoga and meditation sessions"],
    price: "From $1,600 pp",
    blurb: "A short, genuine wellness reset at a dedicated Ayurveda resort on the west coast.",
    motif: "leaf",
    heroTitle: "Ceylon Wellness Reset — 5 Days of Authentic Ayurvedic Care",
    intro:
      "A single-resort retreat rather than a road trip — enough time for a doctor-led treatment plan to actually take effect, in the traditional Ayurveda heartland of Sri Lanka's west coast.",
    overview:
      "Unlike our touring itineraries, this retreat is based at one dedicated Ayurveda resort throughout, allowing your treatment plan to build day on day under continuous medical supervision.",
    bestFor: "Travellers seeking genuine rest, stress relief, or a short wellness introduction",
    groupSize: "Individual retreat — solo or with a partner",
    physicalLevel: "Easy — gentle yoga and walking only",
    destinationsCovered: "Colombo → Beruwala/Bentota Ayurveda resort (single base)",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Doctor Consultation",
        morning: "Arrive and transfer to your Ayurveda resort on the west coast.",
        afternoon: "Initial consultation with a resident Ayurvedic doctor, including pulse diagnosis to determine your dosha and a personalised treatment plan.",
        evening: "Light, dosha-appropriate dinner and early rest.",
        overnight: "Ayurveda resort, Beruwala/Bentota.",
      },
      {
        day: 2,
        title: "Treatment Begins",
        morning: "Guided yoga session, followed by your first personalised treatment (herbal oil massage).",
        afternoon: "Rest period — a genuine part of the treatment process.",
        evening: "Herbal steam bath and meditation session.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 3,
        title: "Deepening the Programme",
        morning: "Morning yoga and pranayama breathing session.",
        afternoon: "Continued treatments per your doctor's plan (herbal massage, heat therapy).",
        evening: "Guided meditation and an early, light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 4,
        title: "Treatment & Reflection",
        morning: "Yoga session, followed by treatment.",
        afternoon: "Free time to rest by the resort's pool or gardens.",
        evening: "Follow-up consultation with your doctor to review progress.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 5,
        title: "Final Treatment & Departure",
        morning: "Final light treatment and take-home dietary guidance from your doctor.",
        afternoon: "Transfer to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "A dedicated Ayurveda resort with resident doctors, on the west coast near Beruwala or Bentota.",
    transportation: "Private airport transfers; no daily touring transport required, as the retreat is single-base.",
    meals: "All meals included, prepared according to Ayurvedic dietary principles and your personal treatment plan.",
    included: ["4 nights' accommodation at a dedicated Ayurveda resort", "All meals (dosha-appropriate)", "Doctor consultations and pulse diagnosis", "Daily personalised treatments", "Daily yoga and meditation sessions", "Airport transfers"],
    excluded: ["International flights", "Visa fees", "Personal expenses and tips", "Travel insurance", "Treatments beyond the standard programme"],
    optionalExperiences: ["Extended panchakarma add-on treatments", "Private one-on-one yoga instruction", "Ayurvedic cooking demonstration"],
    tourFaqs: [
      { q: "Is 5 days enough to see results?", a: "It's enough for genuine rest and stress relief; deeper detox programmes (panchakarma) typically need 7+ days, which our longer retreats accommodate." },
      { q: "Will I need to follow a strict diet?", a: "Meals are prepared to suit your dosha as determined by the doctor, generally lighter and more structured than you may be used to — most guests find it easy to adapt to over a short stay." },
    ],
  },
  {
    slug: "ayurveda-7-day-tour",
    title: "7 Day Ayurveda Tour",
    category: "Ayurveda & Wellness Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Doctor-led treatment plan", "Introductory panchakarma programme", "Daily yoga & meditation"],
    price: "From $2,240 pp",
    blurb: "Our 5-day reset extended to a proper introductory panchakarma cleansing programme.",
    motif: "leaf",
    heroTitle: "Ceylon Ayurveda Retreat — 7 Days of Guided Wellness",
    intro:
      "A week is the minimum most Ayurvedic doctors recommend for an introductory panchakarma programme — enough time for a structured detox and rebalancing process, not just relaxation.",
    overview:
      "This retreat follows a doctor-designed 7-day introductory panchakarma programme, combining daily treatments, dietary guidance and yoga at a single dedicated wellness resort.",
    bestFor: "Travellers wanting a genuine introductory detox programme, not just spa treatments",
    groupSize: "Individual retreat — solo or with a partner",
    physicalLevel: "Easy — gentle yoga and walking only",
    destinationsCovered: "Colombo → Beruwala/Bentota Ayurveda resort (single base)",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Doctor Consultation",
        morning: "Arrive and transfer to your Ayurveda resort.",
        afternoon: "Initial consultation and pulse diagnosis with your Ayurvedic doctor.",
        evening: "Light, dosha-appropriate dinner.",
        overnight: "Ayurveda resort, Beruwala/Bentota.",
      },
      {
        day: 2,
        title: "Programme Begins",
        morning: "Yoga session, followed by your first oleation treatment (preparing the body for detox).",
        afternoon: "Rest period.",
        evening: "Herbal steam bath.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 3,
        title: "Continuing Oleation",
        morning: "Yoga and pranayama.",
        afternoon: "Continued herbal oil treatments per your plan.",
        evening: "Guided meditation.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 4,
        title: "Mid-Programme Check-In",
        morning: "Yoga session, followed by treatment.",
        afternoon: "Doctor check-in to adjust your programme if needed.",
        evening: "Light dinner and early rest.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 5,
        title: "Detoxification Phase",
        morning: "Yoga session, followed by your main detoxification treatment as prescribed.",
        afternoon: "Extended rest — an essential part of this phase.",
        evening: "Herbal tea and light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 6,
        title: "Rejuvenation Phase",
        morning: "Gentle yoga, followed by rejuvenating (rasayana) treatments to restore balance.",
        afternoon: "Free time in the resort gardens.",
        evening: "Final consultation with your doctor and take-home guidance.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 7,
        title: "Departure",
        morning: "Light final treatment and breakfast.",
        afternoon: "Transfer to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "A dedicated Ayurveda resort with resident doctors, on the west coast near Beruwala or Bentota.",
    transportation: "Private airport transfers; single-base retreat.",
    meals: "All meals included, prepared according to Ayurvedic principles and your treatment phase.",
    included: ["6 nights' accommodation at a dedicated Ayurveda resort", "All meals (dosha-appropriate)", "Doctor consultations throughout", "Introductory panchakarma treatment programme", "Daily yoga and meditation sessions", "Airport transfers"],
    excluded: ["International flights", "Visa fees", "Personal expenses and tips", "Travel insurance", "Treatments beyond the standard programme"],
    optionalExperiences: ["Extended treatment add-ons", "Private one-on-one yoga instruction", "Ayurvedic cooking class"],
    tourFaqs: [
      { q: "What is panchakarma?", a: "A structured Ayurvedic detoxification process involving oleation (oiling), sweating therapies and cleansing treatments, traditionally done over at least a week." },
      { q: "Will I feel unwell during the detox phase?", a: "Mild tiredness is common as the body releases toxins; your doctor monitors you throughout and adjusts the programme accordingly." },
    ],
  },
  {
    slug: "ayurveda-8-day-tour",
    title: "8 Day Ayurveda Tour",
    category: "Ayurveda & Wellness Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Full panchakarma programme", "Daily doctor-supervised treatments", "Yoga, meditation & dietary reset"],
    price: "From $2,560 pp",
    blurb: "A week-long panchakarma programme with an extra integration day added at the end.",
    motif: "leaf",
    heroTitle: "Ceylon Wellness Immersion — 8 Days of Structured Ayurvedic Care",
    intro:
      "Our 7-day panchakarma programme with an additional integration day, giving your body more time to settle into its rebalanced state before travelling home.",
    overview:
      "This retreat follows the same doctor-led programme as our 7-day retreat, with an extra day focused on gentle reintroduction to normal routine — reducing the shock of returning straight to travel.",
    bestFor: "Travellers wanting a complete programme with a gentler re-entry",
    groupSize: "Individual retreat — solo or with a partner",
    physicalLevel: "Easy — gentle yoga and walking only",
    destinationsCovered: "Colombo → Beruwala/Bentota Ayurveda resort (single base)",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Doctor Consultation",
        morning: "Arrive and transfer to your Ayurveda resort.",
        afternoon: "Initial consultation and pulse diagnosis.",
        evening: "Light, dosha-appropriate dinner.",
        overnight: "Ayurveda resort, Beruwala/Bentota.",
      },
      {
        day: 2,
        title: "Programme Begins",
        morning: "Yoga session, followed by your first oleation treatment.",
        afternoon: "Rest period.",
        evening: "Herbal steam bath.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 3,
        title: "Continuing Oleation",
        morning: "Yoga and pranayama.",
        afternoon: "Continued herbal oil treatments.",
        evening: "Guided meditation.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 4,
        title: "Mid-Programme Check-In",
        morning: "Yoga session, followed by treatment.",
        afternoon: "Doctor check-in to adjust your programme.",
        evening: "Light dinner and early rest.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 5,
        title: "Detoxification Phase",
        morning: "Yoga session, followed by your main detoxification treatment.",
        afternoon: "Extended rest.",
        evening: "Herbal tea and light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 6,
        title: "Rejuvenation Phase",
        morning: "Gentle yoga, followed by rejuvenating treatments.",
        afternoon: "Free time in the resort gardens.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 7,
        title: "Integration Day",
        morning: "Gentle yoga and a lighter treatment, easing off the intensive programme.",
        afternoon: "Final consultation with your doctor, including take-home dietary and lifestyle guidance.",
        evening: "Celebratory (still dosha-appropriate) farewell dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 8,
        title: "Departure",
        morning: "Light breakfast and relaxed morning.",
        afternoon: "Transfer to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "A dedicated Ayurveda resort with resident doctors, on the west coast near Beruwala or Bentota.",
    transportation: "Private airport transfers; single-base retreat.",
    meals: "All meals included, prepared according to Ayurvedic principles and your treatment phase.",
    included: ["7 nights' accommodation at a dedicated Ayurveda resort", "All meals (dosha-appropriate)", "Doctor consultations throughout", "Full panchakarma treatment programme", "Daily yoga and meditation sessions", "Airport transfers"],
    excluded: ["International flights", "Visa fees", "Personal expenses and tips", "Travel insurance", "Treatments beyond the standard programme"],
    optionalExperiences: ["Extended treatment add-ons", "Private one-on-one yoga instruction", "Ayurvedic cooking class"],
    tourFaqs: [
      { q: "Why is the integration day valuable?", a: "Going straight from an intensive detox programme to travel can feel jarring; a gentler final day helps your body and mind transition more comfortably." },
      { q: "Can this be combined with sightseeing?", a: "We generally recommend keeping panchakarma programmes undisturbed by touring, but ask us about adding sightseeing days before or after your retreat." },
    ],
  },
  {
    slug: "ayurveda-10-day-tour",
    title: "10 Day Ayurveda Tour",
    category: "Ayurveda & Wellness Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Extended panchakarma programme", "Daily doctor-supervised treatments", "Cultural day trip to Kandy"],
    price: "From $3,200 pp",
    blurb: "An extended panchakarma programme with a single cultural excursion to Kandy woven in.",
    motif: "leaf",
    heroTitle: "Ceylon Wellness Journey — 10 Days of Deep Ayurvedic Care",
    intro:
      "A longer, more thorough panchakarma programme that allows for deeper treatment phases, with one gentle cultural excursion to Kandy's Temple of the Tooth for balance.",
    overview:
      "This retreat extends the treatment phases of our 8-day programme for deeper results, and includes a single day trip to Kandy roughly two-thirds through — timed so it doesn't disrupt the detox process.",
    bestFor: "Travellers wanting a deeper wellness programme with a touch of cultural context",
    groupSize: "Individual retreat — solo or with a partner",
    physicalLevel: "Easy — gentle yoga, walking, and one day of light sightseeing",
    destinationsCovered: "Colombo → Beruwala/Bentota Ayurveda resort → Kandy (day trip) → resort",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Doctor Consultation",
        morning: "Arrive and transfer to your Ayurveda resort.",
        afternoon: "Initial consultation and pulse diagnosis.",
        evening: "Light, dosha-appropriate dinner.",
        overnight: "Ayurveda resort, Beruwala/Bentota.",
      },
      {
        day: 2,
        title: "Programme Begins",
        morning: "Yoga session, followed by your first oleation treatment.",
        afternoon: "Rest period.",
        evening: "Herbal steam bath.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 3,
        title: "Continuing Oleation",
        morning: "Yoga and pranayama.",
        afternoon: "Continued herbal oil treatments.",
        evening: "Guided meditation.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 4,
        title: "Deepening Treatment",
        morning: "Yoga session, followed by treatment.",
        afternoon: "Doctor check-in and adjusted treatment plan for the extended programme.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 5,
        title: "Detoxification Phase",
        morning: "Yoga session, followed by your main detoxification treatment.",
        afternoon: "Extended rest.",
        evening: "Herbal tea and light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 6,
        title: "Detoxification Continues",
        morning: "Yoga, followed by a second detoxification session for deeper effect.",
        afternoon: "Extended rest.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 7,
        title: "Cultural Day Trip to Kandy",
        morning: "Gentle drive to Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic and walk around Kandy Lake — a calm, unhurried outing.",
        evening: "Return to the resort for a light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 8,
        title: "Rejuvenation Phase",
        morning: "Gentle yoga, followed by rejuvenating treatments.",
        afternoon: "Free time in the resort gardens.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 9,
        title: "Integration Day",
        morning: "Gentle yoga and a lighter treatment.",
        afternoon: "Final consultation with your doctor and take-home guidance.",
        evening: "Celebratory farewell dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 10,
        title: "Departure",
        morning: "Light breakfast and relaxed morning.",
        afternoon: "Transfer to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "A dedicated Ayurveda resort with resident doctors, on the west coast near Beruwala or Bentota.",
    transportation: "Private airport transfers; private vehicle for the single Kandy day trip.",
    meals: "All meals included, prepared according to Ayurvedic principles and your treatment phase.",
    included: ["9 nights' accommodation at a dedicated Ayurveda resort", "All meals (dosha-appropriate)", "Doctor consultations throughout", "Extended panchakarma treatment programme", "Daily yoga and meditation sessions", "Kandy day trip with private vehicle", "Airport transfers"],
    excluded: ["International flights", "Visa fees", "Personal expenses and tips", "Travel insurance", "Treatments beyond the standard programme"],
    optionalExperiences: ["Extended treatment add-ons", "Private one-on-one yoga instruction", "Ayurvedic cooking class"],
    tourFaqs: [
      { q: "Won't the Kandy trip disrupt the detox process?", a: "It's timed deliberately in a lighter phase of the programme and kept low-key, so it adds perspective without undoing the treatment's progress." },
      { q: "Is 10 days more effective than 7?", a: "Longer programmes generally allow for deeper, more thorough treatment phases, particularly for chronic stress or specific health concerns your doctor identifies." },
    ],
  },
  {
    slug: "ayurveda-12-day-tour",
    title: "12 Day Ayurveda Tour",
    category: "Ayurveda & Wellness Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Comprehensive panchakarma programme", "Daily doctor-supervised treatments", "Kandy & tea country day trips"],
    price: "From $3,840 pp",
    blurb: "Our most comprehensive wellness programme, with two gentle cultural excursions woven into a deep panchakarma course.",
    motif: "leaf",
    heroTitle: "Complete Ceylon Wellness Retreat — 12 Days of Deep Restoration",
    intro:
      "Our fullest wellness retreat, giving a comprehensive panchakarma programme the time it genuinely needs, with two carefully placed cultural excursions for balance.",
    overview:
      "This is our most thorough programme — extended treatment phases at every stage, with day trips to Kandy and a nearby tea estate placed in lighter portions of the schedule.",
    bestFor: "Travellers committed to a genuine, comprehensive wellness reset",
    groupSize: "Individual retreat — solo or with a partner",
    physicalLevel: "Easy — gentle yoga, walking, and two days of light sightseeing",
    destinationsCovered: "Colombo → Beruwala/Bentota Ayurveda resort → Kandy & tea country (day trips) → resort",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Doctor Consultation",
        morning: "Arrive and transfer to your Ayurveda resort.",
        afternoon: "Initial consultation and pulse diagnosis.",
        evening: "Light, dosha-appropriate dinner.",
        overnight: "Ayurveda resort, Beruwala/Bentota.",
      },
      {
        day: 2,
        title: "Programme Begins",
        morning: "Yoga session, followed by your first oleation treatment.",
        afternoon: "Rest period.",
        evening: "Herbal steam bath.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 3,
        title: "Continuing Oleation",
        morning: "Yoga and pranayama.",
        afternoon: "Continued herbal oil treatments.",
        evening: "Guided meditation.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 4,
        title: "Deepening Treatment",
        morning: "Yoga session, followed by treatment.",
        afternoon: "Doctor check-in and adjusted treatment plan.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 5,
        title: "Detoxification Phase One",
        morning: "Yoga session, followed by your main detoxification treatment.",
        afternoon: "Extended rest.",
        evening: "Herbal tea and light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 6,
        title: "Detoxification Phase Two",
        morning: "Yoga, followed by a second detoxification session.",
        afternoon: "Extended rest.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 7,
        title: "Cultural Day Trip to Kandy",
        morning: "Gentle drive to Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic and Kandy Lake.",
        evening: "Return to the resort for a light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 8,
        title: "Detoxification Phase Three",
        morning: "Yoga, followed by a further detoxification session for deeper effect.",
        afternoon: "Extended rest.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 9,
        title: "Tea Country Day Trip",
        morning: "Gentle drive into the nearby hills.",
        afternoon: "Visit a tea estate for a calm walk and tasting — light, restorative fresh air.",
        evening: "Return to the resort for dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 10,
        title: "Rejuvenation Phase",
        morning: "Gentle yoga, followed by rejuvenating treatments.",
        afternoon: "Free time in the resort gardens.",
        evening: "Light dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 11,
        title: "Integration Day",
        morning: "Gentle yoga and a lighter treatment.",
        afternoon: "Final consultation with your doctor and take-home guidance.",
        evening: "Celebratory farewell dinner.",
        overnight: "Ayurveda resort.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Light breakfast and relaxed morning.",
        afternoon: "Transfer to Colombo airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "A dedicated Ayurveda resort with resident doctors, on the west coast near Beruwala or Bentota.",
    transportation: "Private airport transfers; private vehicle for the two day trips.",
    meals: "All meals included, prepared according to Ayurvedic principles and your treatment phase.",
    included: ["11 nights' accommodation at a dedicated Ayurveda resort", "All meals (dosha-appropriate)", "Doctor consultations throughout", "Comprehensive panchakarma treatment programme", "Daily yoga and meditation sessions", "Kandy and tea country day trips", "Airport transfers"],
    excluded: ["International flights", "Visa fees", "Personal expenses and tips", "Travel insurance", "Treatments beyond the standard programme"],
    optionalExperiences: ["Extended treatment add-ons", "Private one-on-one yoga instruction", "Ayurvedic cooking class", "Follow-up remote consultation after you return home"],
    tourFaqs: [
      { q: "Is a 12-day programme suitable for a specific health condition?", a: "Longer programmes allow doctors to address specific concerns more thoroughly, but always disclose any conditions in advance so the plan can be tailored appropriately." },
      { q: "Can family members join who aren't doing the treatment programme?", a: "Yes, though the resort experience is centred on wellness — we can suggest nearby beach or sightseeing activities for non-participating companions." },
    ],
  },
  {
    slug: "ramayana-5-day-tour",
    title: "5 Day Ramayana Tour",
    category: "Ramayana Tours",
    duration: "5 Days / 4 Nights",
    highlights: ["Munneswaram Temple, Chilaw", "Sita Amman Temple, Nuwara Eliya", "Ravana Falls & Ravana Cave, Ella"],
    price: "From $1,175 pp",
    blurb: "A focused 5-day pilgrimage through the core Ramayana trail sites in the hill country.",
    motif: "temple",
    heroTitle: "Ramayana Trail Discovery — 5 Days Through Sacred Sites",
    intro:
      "A pilgrimage-paced journey to the sites most closely associated with the Ramayana epic in Sri Lanka, from a coastal temple to the hill-country places linked to Sita's captivity.",
    overview:
      "This route covers the core Ramayana sites reachable in a short trip — Munneswaram near the coast, and the Nuwara Eliya–Ella corridor where several key episodes of the epic are traditionally located.",
    bestFor: "Pilgrims and travellers with a specific interest in the Ramayana epic",
    groupSize: "Private vehicle with knowledgeable guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Chilaw → Nuwara Eliya → Ella → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Munneswaram Temple",
        morning: "Arrive and drive to Chilaw to visit Munneswaram Temple, believed to be where Rama worshipped Shiva to absolve himself after defeating Ravana.",
        afternoon: "Continue inland towards the hill country.",
        evening: "Settle into your hotel en route.",
        overnight: "Hotel en route to the hills.",
      },
      {
        day: 2,
        title: "Journey to Nuwara Eliya",
        morning: "Continue the scenic drive up into the hill country.",
        afternoon: "Arrive in Nuwara Eliya and visit the Sita Amman Temple, built at the site traditionally believed to be where Sita was held captive.",
        evening: "Visit Hakgala Gardens, said to be part of Ravana's pleasure garden.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 3,
        title: "Nuwara Eliya to Ella",
        morning: "Visit Gayathri Peedam and other sites associated with the epic near Nuwara Eliya.",
        afternoon: "Drive to Ella.",
        evening: "Settle into Ella for the evening.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 4,
        title: "Ravana's Ella",
        morning: "Visit Ravana Falls, named for the demon king, and the Ravana Cave, believed to be part of the tunnel network used to hide Sita.",
        afternoon: "Optional short walk near Ella Rock for valley views.",
        evening: "Reflective evening in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 5,
        title: "Return & Departure",
        morning: "Scenic drive back towards Colombo.",
        afternoon: "Arrive at the airport in time for your flight.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Comfortable hotels en route, in Nuwara Eliya and Ella.",
    transportation: "Private air-conditioned vehicle with a guide knowledgeable in Ramayana-related sites.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["4 nights' accommodation as listed", "Daily breakfast", "Private vehicle and guide throughout", "All temple and site entrance fees listed"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private puja (prayer ceremony) arrangement at Munneswaram", "Extended time at Hakgala Gardens", "Local pandit-led explanation session"],
    tourFaqs: [
      { q: "Is this tour religious or historical in focus?", a: "Both — we present the sites' traditional associations with the epic while remaining respectful of the mix of devotional and historical interest among travellers." },
      { q: "Can we add more sites to this route?", a: "Yes, our 7, 8, 10 and 12-day Ramayana tours add further sites including Trincomalee's Koneswaram Temple and Kataragama." },
    ],
  },
  {
    slug: "ramayana-7-day-tour",
    title: "7 Day Ramayana Tour",
    category: "Ramayana Tours",
    duration: "7 Days / 6 Nights",
    highlights: ["Munneswaram & Manavari temples", "Sita Amman Temple, Nuwara Eliya", "Ravana Falls, Cave & Ella sites"],
    price: "From $1,645 pp",
    blurb: "Our 5-day core trail extended with additional coastal temple sites near Chilaw.",
    motif: "temple",
    heroTitle: "Ramayana Sacred Journey — 7 Days Across the Trail",
    intro:
      "Adding Manavari Temple — said to house the first Shiva lingam consecrated by Rama himself — to our core Ramayana trail, along with more time at each hill-country site.",
    overview:
      "This itinerary extends our 5-day core route with additional coastal temple sites and unhurried time in both Nuwara Eliya and Ella.",
    bestFor: "Pilgrims wanting a fuller, less rushed version of the trail",
    groupSize: "Private vehicle with knowledgeable guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Chilaw → Kandy → Nuwara Eliya → Ella → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Chilaw Temples",
        morning: "Arrive and drive to Chilaw to visit Munneswaram Temple.",
        afternoon: "Visit nearby Manavari Temple, associated with Rama's first consecration of a Shiva lingam in Sri Lanka.",
        evening: "Settle into your hotel.",
        overnight: "Hotel near Chilaw.",
      },
      {
        day: 2,
        title: "Chilaw to Kandy",
        morning: "Drive inland towards Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic, a devotional stop en route.",
        evening: "Evening walk around Kandy Lake.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 3,
        title: "Kandy to Nuwara Eliya",
        morning: "Scenic drive into the hills, with a stop at a tea estate.",
        afternoon: "Visit the Sita Amman Temple in Nuwara Eliya.",
        evening: "Visit Hakgala Gardens, believed to be part of Ravana's pleasure garden.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 4,
        title: "Nuwara Eliya Sites",
        morning: "Visit Gayathri Peedam and Divurumpola Temple, where Sita is said to have undergone a trial by fire.",
        afternoon: "Free time to reflect, or visit Gregory Lake.",
        evening: "Relaxed evening in Nuwara Eliya.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella",
        morning: "Scenic drive to Ella, optionally by train.",
        afternoon: "Settle in and explore Ella's small town centre.",
        evening: "Reflective evening in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 6,
        title: "Ravana's Ella",
        morning: "Visit Ravana Falls and the Ravana Cave.",
        afternoon: "Optional walk near Ella Rock.",
        evening: "Farewell dinner in Ella.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 7,
        title: "Return & Departure",
        morning: "Drive back towards Colombo.",
        afternoon: "Arrive at the airport in time for your flight.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Hotels near Chilaw, in Kandy, Nuwara Eliya and Ella.",
    transportation: "Private air-conditioned vehicle with a guide knowledgeable in Ramayana-related sites.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["6 nights' accommodation as listed", "Daily breakfast", "Private vehicle and guide throughout", "All temple and site entrance fees listed"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private puja arrangement at Munneswaram", "Local pandit-led explanation session", "Scenic train option, Nuwara Eliya to Ella"],
    tourFaqs: [
      { q: "What is Divurumpola Temple?", a: "A site traditionally associated with Sita's Agni Pariksha (trial by fire) to prove her purity, an important episode in the epic." },
      { q: "Is Kandy connected to the Ramayana trail?", a: "Not directly — it's included here as a convenient and worthwhile stop en route between the coast and hill country sites." },
    ],
  },
  {
    slug: "ramayana-8-day-tour",
    title: "8 Day Ramayana Tour",
    category: "Ramayana Tours",
    duration: "8 Days / 7 Nights",
    highlights: ["Munneswaram & Manavari temples", "Full Nuwara Eliya & Ella circuit", "Koneswaram Temple, Trincomalee"],
    price: "From $1,880 pp",
    blurb: "Our 7-day trail extended east to Koneswaram Temple, one of Sri Lanka's most sacred Shiva sites.",
    motif: "temple",
    heroTitle: "Ramayana Coastal Pilgrimage — 8 Days, Hills to Ocean",
    intro:
      "Adding Trincomalee's clifftop Koneswaram Temple — one of the Pancha Ishwarams of Shiva — to our hill-country Ramayana trail for a coast-to-coast pilgrimage.",
    overview:
      "This route extends our 7-day trail east to Trincomalee, adding a dramatic clifftop temple and a genuinely different coastal landscape to the journey.",
    bestFor: "Pilgrims wanting to include one of Sri Lanka's most significant Shiva temples",
    groupSize: "Private vehicle with knowledgeable guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Chilaw → Kandy → Nuwara Eliya → Ella → Trincomalee → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Chilaw Temples",
        morning: "Arrive and drive to Chilaw to visit Munneswaram Temple.",
        afternoon: "Visit nearby Manavari Temple.",
        evening: "Settle into your hotel.",
        overnight: "Hotel near Chilaw.",
      },
      {
        day: 2,
        title: "Chilaw to Kandy",
        morning: "Drive inland towards Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic.",
        evening: "Evening walk around Kandy Lake.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 3,
        title: "Kandy to Nuwara Eliya",
        morning: "Scenic drive into the hills, with a tea estate stop.",
        afternoon: "Visit the Sita Amman Temple.",
        evening: "Visit Hakgala Gardens.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 4,
        title: "Nuwara Eliya Sites",
        morning: "Visit Gayathri Peedam and Divurumpola Temple.",
        afternoon: "Free time, or visit Gregory Lake.",
        evening: "Relaxed evening.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella",
        morning: "Scenic drive or train to Ella.",
        afternoon: "Settle in and explore Ella.",
        evening: "Reflective evening.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 6,
        title: "Ravana's Ella & Onward",
        morning: "Visit Ravana Falls and the Ravana Cave.",
        afternoon: "Begin the drive towards Trincomalee.",
        evening: "Rest partway on the journey east.",
        overnight: "Hotel en route to Trincomalee.",
      },
      {
        day: 7,
        title: "Koneswaram Temple, Trincomalee",
        morning: "Arrive in Trincomalee and visit the clifftop Koneswaram Temple, one of Sri Lanka's most significant Shiva shrines.",
        afternoon: "Free time by Nilaveli Beach nearby.",
        evening: "Farewell dinner by the sea.",
        overnight: "Hotel in Trincomalee.",
      },
      {
        day: 8,
        title: "Return & Departure",
        morning: "Flight or long drive back to Colombo.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Hotels near Chilaw, in Kandy, Nuwara Eliya, Ella and Trincomalee.",
    transportation: "Private air-conditioned vehicle with a guide knowledgeable in Ramayana-related sites; domestic flight option available Trincomalee–Colombo.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["7 nights' accommodation as listed", "Daily breakfast", "Private vehicle and guide throughout", "All temple and site entrance fees listed"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance", "Optional domestic flight Trincomalee–Colombo"],
    optionalExperiences: ["Domestic flight to shorten the return journey", "Private puja arrangement at Koneswaram", "Local pandit-led explanation session"],
    tourFaqs: [
      { q: "What are the Pancha Ishwarams?", a: "Five ancient Shiva temples in Sri Lanka, of which Koneswaram is one — significant pilgrimage sites in Hindu tradition." },
      { q: "Is the drive to Trincomalee long?", a: "Yes, it's a full day from Ella — we can arrange a domestic flight back to Colombo afterward to save time if preferred." },
    ],
  },
  {
    slug: "ramayana-10-day-tour",
    title: "10 Day Ramayana Tour",
    category: "Ramayana Tours",
    duration: "10 Days / 9 Nights",
    highlights: ["Full hill-country Ramayana trail", "Koneswaram Temple, Trincomalee", "Kataragama multi-faith complex"],
    price: "From $2,350 pp",
    blurb: "Our 8-day coast-to-coast pilgrimage extended south to the multi-faith Kataragama complex.",
    motif: "temple",
    heroTitle: "Grand Ramayana Pilgrimage — 10 Days Across the Island",
    intro:
      "Adding Kataragama — a uniquely multi-faith pilgrimage complex sacred to Buddhists, Hindus and indigenous Vedda communities alike — to our coast-to-coast Ramayana trail.",
    overview:
      "This itinerary extends our 8-day trail south to Kataragama after Trincomalee, giving the trip a broader devotional dimension alongside the specific Ramayana sites.",
    bestFor: "Pilgrims wanting the widest range of significant sacred sites",
    groupSize: "Private vehicle with knowledgeable guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Chilaw → Kandy → Nuwara Eliya → Ella → Trincomalee → Kataragama → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Chilaw Temples",
        morning: "Arrive and drive to Chilaw to visit Munneswaram Temple.",
        afternoon: "Visit nearby Manavari Temple.",
        evening: "Settle into your hotel.",
        overnight: "Hotel near Chilaw.",
      },
      {
        day: 2,
        title: "Chilaw to Kandy",
        morning: "Drive inland towards Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic.",
        evening: "Evening walk around Kandy Lake.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 3,
        title: "Kandy to Nuwara Eliya",
        morning: "Scenic drive into the hills, with a tea estate stop.",
        afternoon: "Visit the Sita Amman Temple.",
        evening: "Visit Hakgala Gardens.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 4,
        title: "Nuwara Eliya Sites",
        morning: "Visit Gayathri Peedam and Divurumpola Temple.",
        afternoon: "Free time, or visit Gregory Lake.",
        evening: "Relaxed evening.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Nuwara Eliya to Ella",
        morning: "Scenic drive or train to Ella.",
        afternoon: "Settle in and explore Ella.",
        evening: "Reflective evening.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 6,
        title: "Ravana's Ella & Onward",
        morning: "Visit Ravana Falls and the Ravana Cave.",
        afternoon: "Begin the drive towards Trincomalee.",
        evening: "Rest partway on the journey east.",
        overnight: "Hotel en route to Trincomalee.",
      },
      {
        day: 7,
        title: "Koneswaram Temple, Trincomalee",
        morning: "Arrive in Trincomalee and visit the clifftop Koneswaram Temple.",
        afternoon: "Free time by Nilaveli Beach.",
        evening: "Dinner by the sea.",
        overnight: "Hotel in Trincomalee.",
      },
      {
        day: 8,
        title: "Trincomalee to Kataragama",
        morning: "Long scenic drive south towards Kataragama.",
        afternoon: "Arrive and settle in.",
        evening: "Evening puja at the Kataragama temple complex, a moving multi-faith ritual.",
        overnight: "Hotel near Kataragama.",
      },
      {
        day: 9,
        title: "Kataragama & Return",
        morning: "Explore the wider Kataragama complex, sacred to Buddhists, Hindus and Vedda communities.",
        afternoon: "Begin the drive back towards Colombo.",
        evening: "Farewell dinner en route.",
        overnight: "Hotel en route to Colombo.",
      },
      {
        day: 10,
        title: "Departure",
        morning: "Continue to Colombo.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Hotels near Chilaw, in Kandy, Nuwara Eliya, Ella, Trincomalee and Kataragama.",
    transportation: "Private air-conditioned vehicle with a guide knowledgeable in Ramayana-related sites.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["9 nights' accommodation as listed", "Daily breakfast", "Private vehicle and guide throughout", "All temple and site entrance fees listed"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private puja arrangements at multiple temples", "Local pandit-led explanation sessions", "Extended time at Kataragama for the evening ritual"],
    tourFaqs: [
      { q: "What makes Kataragama unique?", a: "It's one of the few sites in Sri Lanka venerated simultaneously by Buddhists, Hindus, Muslims and indigenous Vedda communities, with a distinct nightly ritual." },
      { q: "Is this route physically demanding?", a: "It involves long driving days, particularly around Trincomalee and Kataragama, but no strenuous physical activity." },
    ],
  },
  {
    slug: "ramayana-12-day-tour",
    title: "12 Day Ramayana Tour",
    category: "Ramayana Tours",
    duration: "12 Days / 11 Nights",
    highlights: ["Complete Ramayana trail", "Koneswaram Temple & Kataragama", "Unhurried time at every sacred site"],
    price: "From $2,820 pp",
    blurb: "Our most complete Ramayana pilgrimage, with extra time built in at each major site for genuine reflection.",
    motif: "temple",
    heroTitle: "Complete Ramayana Pilgrimage — 12 Days, Unhurried Throughout",
    intro:
      "Our fullest Ramayana itinerary, following the same coast-to-coast trail as our 10-day pilgrimage with additional nights added so no site feels rushed.",
    overview:
      "This itinerary spreads our 10-day route over 12 days, adding rest and reflection time in the hill country and around Kataragama for a genuinely unhurried pilgrimage.",
    bestFor: "Pilgrims wanting the fullest, most contemplative version of the trail",
    groupSize: "Private vehicle with knowledgeable guide — customisable group size",
    physicalLevel: "Easy to moderate",
    destinationsCovered: "Colombo → Chilaw → Kandy → Nuwara Eliya → Ella → Trincomalee → Kataragama → Colombo",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Chilaw Temples",
        morning: "Arrive and drive to Chilaw to visit Munneswaram Temple.",
        afternoon: "Visit nearby Manavari Temple.",
        evening: "Settle into your hotel.",
        overnight: "Hotel near Chilaw.",
      },
      {
        day: 2,
        title: "Chilaw to Kandy",
        morning: "Drive inland towards Kandy.",
        afternoon: "Visit the Temple of the Sacred Tooth Relic.",
        evening: "Evening walk around Kandy Lake.",
        overnight: "Hotel in Kandy.",
      },
      {
        day: 3,
        title: "Kandy to Nuwara Eliya",
        morning: "Scenic drive into the hills, with a tea estate stop.",
        afternoon: "Visit the Sita Amman Temple.",
        evening: "Visit Hakgala Gardens.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 4,
        title: "Nuwara Eliya Sites",
        morning: "Visit Gayathri Peedam and Divurumpola Temple.",
        afternoon: "Free time to reflect and journal.",
        evening: "Relaxed evening.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 5,
        title: "Rest Day in the Hills",
        morning: "A deliberately unhurried day — optional gentle walk around Gregory Lake.",
        afternoon: "Free time in Nuwara Eliya.",
        evening: "Reflective evening.",
        overnight: "Hotel in Nuwara Eliya.",
      },
      {
        day: 6,
        title: "Nuwara Eliya to Ella",
        morning: "Scenic drive or train to Ella.",
        afternoon: "Settle in and explore Ella.",
        evening: "Reflective evening.",
        overnight: "Hotel in Ella.",
      },
      {
        day: 7,
        title: "Ravana's Ella & Onward",
        morning: "Visit Ravana Falls and the Ravana Cave, with unhurried time at each.",
        afternoon: "Begin the drive towards Trincomalee.",
        evening: "Rest partway on the journey east.",
        overnight: "Hotel en route to Trincomalee.",
      },
      {
        day: 8,
        title: "Koneswaram Temple, Trincomalee",
        morning: "Arrive in Trincomalee and visit the clifftop Koneswaram Temple.",
        afternoon: "Free time by Nilaveli Beach.",
        evening: "Dinner by the sea.",
        overnight: "Hotel in Trincomalee.",
      },
      {
        day: 9,
        title: "Trincomalee at Leisure",
        morning: "A second, unhurried visit to Koneswaram for morning prayers.",
        afternoon: "Free time on the coast.",
        evening: "Relaxed evening.",
        overnight: "Hotel in Trincomalee.",
      },
      {
        day: 10,
        title: "Trincomalee to Kataragama",
        morning: "Long scenic drive south towards Kataragama.",
        afternoon: "Arrive and settle in.",
        evening: "Evening puja at the Kataragama temple complex.",
        overnight: "Hotel near Kataragama.",
      },
      {
        day: 11,
        title: "Kataragama & Return",
        morning: "Explore the wider Kataragama complex at an unhurried pace.",
        afternoon: "Begin the drive back towards Colombo.",
        evening: "Farewell dinner en route.",
        overnight: "Hotel en route to Colombo.",
      },
      {
        day: 12,
        title: "Departure",
        morning: "Continue to Colombo.",
        afternoon: "Transfer to the airport.",
        evening: "Departure flight.",
        overnight: "N/A — departure day.",
      },
    ],
    hotelRecommendation: "Hotels near Chilaw, in Kandy, Nuwara Eliya, Ella, Trincomalee and Kataragama.",
    transportation: "Private air-conditioned vehicle with a guide knowledgeable in Ramayana-related sites.",
    meals: "Daily breakfast. Other meals at your own choice.",
    included: ["11 nights' accommodation as listed", "Daily breakfast", "Private vehicle and guide throughout", "All temple and site entrance fees listed"],
    excluded: ["International flights", "Visa fees", "Meals not specified", "Personal expenses and tips", "Travel insurance"],
    optionalExperiences: ["Private puja arrangements at multiple temples", "Local pandit-led explanation sessions throughout", "Extended stay options at any site"],
    tourFaqs: [
      { q: "What's added compared to the 10-day version?", a: "Two dedicated rest/reflection days — one in Nuwara Eliya, one in Trincomalee — so the pilgrimage doesn't feel like a checklist." },
      { q: "Can the itinerary be adjusted for a specific pilgrimage group's needs?", a: "Yes — we regularly tailor timing around specific rituals, fasting requirements or group ceremonies. Let us know in your enquiry." },
    ],
  },
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
      title: "Explore Colombo by Tuk-Tuk",

      description:
        "See the city from a local perspective with a tuk-tuk journey through historic streets, markets, neighbourhoods and lively parts of Colombo.",

      imageUrl: "/documents/thingstodo/colombo_tuktuk.jpg",
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

    {
      title: "Explore Colombo's Art & Galleries",

      description:
        "Discover the city's contemporary creative side through art spaces, galleries, design stores and cultural venues that showcase Sri Lankan artists and modern creativity.",

      imageUrl: "/documents/thingstodo/colombo_art.jpg",
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
    slug: "Dambulla",
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

      imageUrl: "/documents/destination_explore_Image/pinnawala_elephants.jpg",
    },

    {
      title: "Life Alongside the Herds",

      description:
        "One of the most memorable aspects of visiting Pinnawala is seeing elephants as they move through their daily routines, particularly around the river. Watching the herd gather, walk and interact with one another creates a more immersive experience than simply viewing wildlife from a distance. Surrounded by the tropical landscape of central Sri Lanka, these moments allow travellers to observe the natural behaviour and social character of the elephants in a distinctive setting.",

      imageUrl: "/documents/destination_explore_Image/pinnawala_river.jpg",
    },

    {
      title: "Elephant Care & Conservation",

      description:
        "Beyond the memorable photographs, Pinnawala provides an opportunity to understand the importance of elephant care and conservation in Sri Lanka. Travellers can learn about the challenges surrounding the protection of Asian elephants and the role of dedicated care in supporting animals that require human assistance. For visitors with an interest in wildlife, Pinnawala offers a meaningful perspective on Sri Lanka's enduring relationship with its elephants.",

      imageUrl: "/documents/destination_explore_Image/pinnawala_conservation.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Meet the Elephants of Pinnawala",

      description:
        "Spend time observing the magnificent elephants of Pinnawala and experience one of Sri Lanka's most distinctive wildlife encounters.",

      imageUrl: "/documents/thingstodo/pinnawala_elephants.jpg",
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

      imageUrl: "/documents/destination_explore_Image/riverston.jpg",
    },

    {
      title: "Sembuwatta & the Highland Landscapes",

      description:
        "Tucked among the hills of Matale, Sembuwatta Lake is surrounded by forests, tea-covered slopes and peaceful highland scenery. The journey to the lake winds through the countryside, revealing a softer side of Sri Lanka's mountains where cool air and green landscapes replace the bustle of the lowlands. The combination of the calm lake, surrounding hills and nearby tea country makes Sembuwatta an appealing escape for travellers looking to slow down and experience the natural beauty of the central highlands at an unhurried pace.",

      imageUrl: "/documents/destination_explore_Image/sembuwatta.jpg",
    },

    {
      title: "Spices, Heritage & the Heart of Matale",

      description:
        "Beyond its mountains, Matale carries a rich cultural character shaped by centuries of Buddhist heritage and traditional spice cultivation. The ancient Aluvihare Rock Temple is closely connected with Sri Lanka's religious and literary history, while the surrounding countryside is known for fragrant cinnamon, pepper, cardamom and other spices that have long formed part of the island's identity. Visiting a spice garden and exploring the heritage of Aluvihare allows travellers to discover a more intimate side of Sri Lanka, where history, agriculture and everyday traditions remain closely connected.",

      imageUrl: "/documents/destination_explore_Image/matale_spice.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Riverston",

      description:
        "Travel into the misty highlands of Riverston and enjoy dramatic mountain scenery, cool air and panoramic views across the Knuckles region.",

      imageUrl: "/documents/thingstodo/riverston.jpg",
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

      imageUrl: "/documents/thingstodo/sembuwatta.jpg",
    },

    {
      title: "Explore a Matale Spice Garden",

      description:
        "Discover the fragrant world of Sri Lankan spices and learn how cinnamon, pepper, cardamom and other spices are traditionally cultivated.",

      imageUrl: "/documents/thingstodo/matale_spice_garden.jpg",
    },

    {
      title: "Visit Aluvihare Rock Temple",

      description:
        "Explore the ancient rock temple of Aluvihare, a significant Buddhist heritage site surrounded by the peaceful landscapes of Matale.",

      imageUrl: "/documents/thingstodo/aluvihare.jpg",
    },

    {
      title: "Drive Through the Knuckles Region",

      description:
        "Take a scenic journey through the mountains and countryside of the Knuckles region, with changing views of forests, valleys and mist-covered peaks.",

      imageUrl: "/documents/thingstodo/knuckles_drive.jpg",
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

  imageUrl: "/documents/destination image/kitulgala.jpg",

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

      imageUrl: "/documents/destination_explore_Image/kitulgala_rainforest.jpg",
    },

    {
      title: "A World of Outdoor Discovery",

      description:
        "Kitulgala offers more than a single adventure, with caves, waterfalls, forest trails and scenic rivers creating a varied experience for active travellers. The surrounding countryside can be explored at a relaxed pace between more adventurous activities, while the combination of rainforest and river landscapes creates a strong sense of being immersed in nature. Whether travelling for an adrenaline-filled day or a deeper connection with Sri Lanka's wilderness, Kitulgala provides an experience that feels distinctly different from the island's more traditional destinations.",

      imageUrl: "/documents/destination_explore_Image/kitulgala_nature.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Go White-Water Rafting",

      description:
        "Experience the rapids of the Kelani River on one of Sri Lanka's most exciting outdoor adventures, surrounded by lush rainforest and dramatic river scenery.",

      imageUrl: "/documents/thingstodo/kitulgala_rafting.jpg",
    },

    {
      title: "Explore the Kitulgala Rainforest",

      description:
        "Venture into the lush rainforest surrounding Kitulgala and discover a rich natural environment filled with tropical vegetation, streams and wildlife.",

      imageUrl: "/documents/thingstodo/kitulgala_rainforest.jpg",
    },

    {
      title: "Trek Through the Forest",

      description:
        "Follow nature trails through the wet-zone forest and experience the peaceful atmosphere and biodiversity of Kitulgala's surrounding wilderness.",

      imageUrl: "/documents/thingstodo/kitulgala_trekking.jpg",
    },

    {
      title: "Discover Hidden Waterfalls",

      description:
        "Explore the forested surroundings of Kitulgala in search of beautiful waterfalls and quiet natural pools tucked away among the greenery.",

      imageUrl: "/documents/thingstodo/kitulgala_waterfall.jpg",
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

      imageUrl: "/documents/destination_explore_Image/sinharaja_rainforest.jpg",
    },

    {
      title: "A World of Endemic Wildlife",

      description:
        "Sinharaja is one of Sri Lanka's most important habitats for endemic wildlife, making it a particularly rewarding destination for birdwatchers and nature enthusiasts. The forest is home to many species found nowhere else in the world, and patient observation can reveal colourful birds, reptiles, amphibians and other creatures hidden among the dense vegetation. Rather than offering wildlife encounters from a vehicle, Sinharaja invites travellers to slow down, listen carefully and experience the forest as a living ecosystem.",

      imageUrl: "/documents/destination_explore_Image/sinharaja_birdlife.jpg",
    },

    {
      title: "Walking Through Sri Lanka's Rainforest",

      description:
        "A journey through Sinharaja is as much about the atmosphere of the forest as the wildlife itself. Trails cross small streams, pass beneath enormous trees and lead through layers of vegetation shaped by centuries of tropical growth. The experience is active yet deeply peaceful, offering travellers a chance to disconnect from busy routes and spend meaningful time surrounded by nature. For those seeking an authentic rainforest experience in Sri Lanka, Sinharaja provides a rare opportunity to explore one of the island's most precious natural landscapes.",

      imageUrl: "/documents/destination_explore_Image/sinharaja_trekking.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Sinharaja Rainforest",

      description:
        "Enter the ancient rainforest and discover a world of towering trees, dense vegetation, flowing streams and remarkable biodiversity.",

      imageUrl: "/documents/thingstodo/sinharaja_rainforest.jpg",
    },

    {
      title: "Take a Guided Rainforest Trek",

      description:
        "Follow forest trails with a knowledgeable local guide and discover the hidden wildlife, plants and natural details of Sinharaja.",

      imageUrl: "/documents/thingstodo/sinharaja_trekking.jpg",
    },

    {
      title: "Go Birdwatching",

      description:
        "Look and listen for Sri Lanka's endemic birds as they move through the dense canopy and forest surroundings.",

      imageUrl: "/documents/thingstodo/sinharaja_birdwatching.jpg",
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

      imageUrl: "/documents/thingstodo/nine_arch.jpg",
    },

    {
      title: "Little Adam's Peak",

      description:
        "Take an enjoyable walk through tea plantations to the summit of Little Adam’s Peak and enjoy sweeping views across Ella’s green mountains and valleys. The relatively gentle hike makes it one of the most accessible ways to experience the spectacular scenery around Ella.",

      imageUrl: "/documents/thingstodo/little_adams.jpg",
    },

    {
      title: "Ella Rock",

      description:
        "Embark on a rewarding hike to Ella Rock through tea plantations, forest paths, and beautiful highland scenery. The trail offers a more adventurous experience than Little Adam’s Peak, with spectacular panoramic views across the surrounding mountains and valleys from the summit.",

      imageUrl: "/documents/thingstodo/ella_rock.jpg",
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
      title: "Ella Local Village Experience",

      description:
        "Step beyond the popular attractions and discover the quieter side of Ella through its surrounding villages and countryside. Meet local communities, experience traditional lifestyles, explore small farms, and enjoy the peaceful atmosphere of everyday life in Sri Lanka’s highlands.",

      imageUrl: "/documents/thingstodo/village.jpg",
    },

    {
      title: "Ella Spice Garden",

      description:
        "Discover Sri Lanka’s traditional spices and medicinal plants in a peaceful garden setting. Learn about the uses of cinnamon, cardamom, pepper, cloves, and other tropical plants while gaining an insight into the island’s long-standing connection with spices and traditional remedies.",

      imageUrl: "/documents/thingstodo/spice.jpg",
    },

    {
      title: "Ayurvedic Massage & Wellness",

      description:
        "Slow down and relax with a traditional Ayurvedic wellness experience in the peaceful surroundings of Ella. Enjoy a soothing massage or wellness treatment inspired by Sri Lanka’s ancient healing traditions after a day of exploring the mountains.",

      imageUrl: "/documents/thingstodo/ayurveda.jpg",
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

      imageUrl: "/documents/destination_explore_Image/yala_safari.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Yala National Park Safari",

      description:
        "Explore the wilderness of Yala National Park on a guided safari through forests, grasslands, lagoons, and rocky landscapes. Travel by safari jeep in search of Sri Lanka’s remarkable wildlife while experiencing the changing scenery and peaceful atmosphere of the park.",

      imageUrl: "/documents/thingstodo/yala_safari.jpg",
    },

    {
      title: "Leopard Watching",

      description:
        "Yala is internationally known for its opportunities to encounter the Sri Lankan leopard in its natural habitat. Join an experienced safari guide and explore the park's different landscapes while patiently watching for these elusive and powerful big cats.",

      imageUrl: "/documents/thingstodo/yala_leopard.jpg",
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

      imageUrl: "/documents/thingstodo/yala_landscape.jpg",
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

      imageUrl: "/documents/destination_explore_Image/udawalawe_national_park.jpg",
    },

    {
      title: "A Land of Wild Elephants",

      description:
        "Elephants are at the heart of the Udawalawe experience, with the region supporting one of Sri Lanka's most important wild elephant populations. During a safari, travellers may see herds gathering around water, moving across open grasslands or disappearing into the surrounding forest. Alongside elephants, the park offers opportunities to encounter water buffalo, deer, crocodiles, monkeys and numerous bird species, making each game drive a constantly changing encounter with Sri Lanka's wildlife.",

      imageUrl: "/documents/destination_explore_Image/udawalawe_elephants.jpg",
    },

    {
      title: "Wildlife, Care & Conservation",

      description:
        "Udawalawe also offers an opportunity to understand the relationship between wildlife and conservation through the Elephant Transit Home. The centre cares for orphaned young elephants with the long-term goal of returning suitable animals to the wild. Together with the national park and its surrounding landscapes, this conservation story adds a deeper dimension to a visit, allowing travellers to experience not only the beauty of Sri Lanka's wildlife but also the efforts made to protect it for the future.",

      imageUrl: "/documents/destination_explore_Image/udawalawe_transit_home.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Go on a Wildlife Safari",

      description:
        "Explore Udawalawe National Park by safari vehicle and discover elephants, buffalo, deer, crocodiles and a rich variety of birdlife.",

      imageUrl: "/documents/thingstodo/udawalawe_safari.jpg",
    },

    {
      title: "See Wild Elephants",

      description:
        "Watch herds of wild elephants moving through the open grasslands and natural habitats of Udawalawe National Park.",

      imageUrl: "/documents/thingstodo/udawalawe_elephants.jpg",
    },

    {
      title: "Visit the Elephant Transit Home",

      description:
        "Learn about elephant rehabilitation and conservation at the Elephant Transit Home, where orphaned young elephants are cared for before potential release into the wild.",

      imageUrl: "/documents/thingstodo/udawalawe_transit_home.jpg",
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

      imageUrl: "/documents/destination_explore_Image/haputale_liptons_seat.jpg",
    },

    {
      title: "The Peaceful Highlands of Bandarawela",

      description:
        "Bandarawela offers a calmer perspective on Sri Lanka's hill country, surrounded by green valleys, tea gardens and peaceful countryside. The town and its surrounding landscapes provide opportunities to experience the everyday rhythm of highland life, from scenic drives through mountain roads to quiet walks among tea-covered hills and villages. Its relaxed character makes it an ideal part of a journey through the Uva Highlands, connecting the dramatic landscapes of Haputale with the heritage and natural beauty found further towards Badulla.",

      imageUrl: "/documents/destination_explore_Image/bandarawela_highlands.jpg",
    },

    {
      title: "Badulla's Heritage & Waterfalls",

      description:
        "Further into the Uva Highlands, Badulla combines cultural heritage with some of the region's most beautiful natural scenery. The historic Muthiyangana Raja Maha Vihara and Dhowa Rock Temple offer glimpses into the area's long religious history, while Dunhinda Falls creates one of the most impressive natural experiences around the town. The historic Bogoda Wooden Bridge and surrounding valleys add to the sense of discovery, making Badulla a rewarding destination for travellers interested in the connection between Sri Lanka's heritage and mountain landscapes.",

      imageUrl: "/documents/destination_explore_Image/badulla_dunhinda.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Visit Lipton's Seat",

      description:
        "Travel through the tea-covered mountains of Haputale to Lipton's Seat for spectacular views across the surrounding highlands and plantations.",

      imageUrl: "/documents/thingstodo/liptons_seat.jpg",
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

      imageUrl: "/documents/thingstodo/bandarawela.jpg",
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

    {
      title: "Experience Highland Village Life",

      description:
        "Spend time in the peaceful villages around the highlands and discover local traditions, gardens, tea-growing communities and everyday rural life.",

      imageUrl: "/documents/thingstodo/highland_village.jpg",
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

      imageUrl: "/documents/thingstodo/mirissa_beach.jpg",
    },

    {
      title: "Whale Watching",

      description:
        "Set out from Mirissa harbour on an early morning ocean excursion in search of whales and dolphins. The waters off the southern coast are known for marine life including blue whales and several species of dolphins, making the journey an unforgettable experience on the Indian Ocean.",

      imageUrl: "/documents/thingstodo/mirissa_whale.jpg",
    },

    {
      title: "Coconut Tree Hill",

      description:
        "Visit the famous Coconut Tree Hill and enjoy beautiful views across the Indian Ocean from a hillside framed by tall coconut palms. The peaceful setting and dramatic coastal scenery make it one of Mirissa’s most memorable places for photography and enjoying the landscape.",

      imageUrl: "/documents/thingstodo/coconut_tree_hill.jpg",
    },

    {
      title: "Parrot Rock",

      description:
        "Walk across the shallow coastal stretch to Parrot Rock and enjoy panoramic views over Mirissa Beach and the surrounding ocean. The small rocky viewpoint offers a different perspective of the coastline and is especially beautiful during the softer light of the evening.",

      imageUrl: "/documents/thingstodo/parrot_rock.jpg",
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

      imageUrl: "/documents/thingstodo/mirissa_fishing.jpg",
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

      imageUrl: "/documents/destination_explore_Image/bentota_river.jpg",
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

      imageUrl: "/documents/thingstodo/bentota_beach.jpg",
    },

    {
      title: "Bentota River Safari",

      description:
        "Explore the peaceful waterways of the Bentota River on a guided boat safari through mangroves, wetlands, islands, and tropical vegetation. Look out for water monitors, birds, butterflies, and other wildlife while discovering a quieter side of the coastal landscape.",

      imageUrl: "/documents/thingstodo/bentota_river.jpg",
    },

    {
      title: "Bentota Mangrove Experience",

      description:
        "Discover the delicate mangrove ecosystems surrounding Bentota’s waterways and learn about the importance of these natural habitats. Glide through narrow channels surrounded by dense tropical vegetation while observing the wildlife that lives among the roots and waterways.",

      imageUrl: "/documents/thingstodo/bentota_mangroves.jpg",
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
      imageUrl: "/documents/destination_explore_Image/galle_fort.jpg",
    },
    {
      title: "Colonial Galle",
      imageUrl: "/documents/destination_explore_Image/galle_colonial.jpg",
    },
    {
      title: "Galle's Coastal Heritage",
      imageUrl: "/documents/destination_explore_Image/galle_coast.jpg",
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

      imageUrl: "/documents/thingstodo/galle_fort.jpg",
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

      imageUrl: "/documents/destination_explore_Image/hikkaduwa_beach.jpg",
    },

    {
      title: "Beneath the Waters of Hikkaduwa",

      description:
        "The marine environment is one of the defining experiences of Hikkaduwa. Its coral-rich waters provide opportunities to discover colourful tropical fish and other marine life through snorkelling and relaxed boat excursions. Travellers can experience the coastline from a completely different perspective by exploring beneath the surface or viewing the reef from a glass-bottom boat. The combination of warm waters, coral formations and tropical marine life makes Hikkaduwa especially appealing to those who enjoy connecting with Sri Lanka's natural environment.",

      imageUrl: "/documents/destination_explore_Image/hikkaduwa_coral.jpg",
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

      imageUrl: "/documents/destination_explore_Image/weligama_bay.jpg",
    },

    {
      title: "Surf Culture & Coastal Heritage",

      description:
        "Weligama has become one of Sri Lanka's best-known places for experiencing the island's surf culture, particularly for travellers learning to surf for the first time. Alongside its modern surf scene, the town retains a strong connection with traditional coastal life, where fishing remains an important part of the local character. Exploring the streets, meeting local communities and watching the rhythm of life around the bay allows travellers to experience a side of the South Coast that feels both welcoming and authentic.",

      imageUrl: "/documents/destination_explore_Image/weligama_surf.jpg",
    },

    {
      title: "Island Views & Ocean Experiences",

      description:
        "Just offshore, the distinctive Taprobane Island adds a unique character to Weligama's coastal scenery. The surrounding waters and coastline also create opportunities for boat experiences, coastal exploration and peaceful moments beside the ocean. Travellers can combine a relaxed beach stay with surfing, seafood, sunset views and exploration of nearby coastal areas, making Weligama a versatile destination for those who want both activity and time to unwind.",

      imageUrl: "/documents/destination_explore_Image/taprobane.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Surf at Weligama Bay",

      description:
        "Experience the waves of Weligama Bay, one of Sri Lanka's most welcoming surf destinations and a popular place for both beginners and experienced surfers.",

      imageUrl: "/documents/thingstodo/weligama_surf.jpg",
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

      imageUrl: "/documents/thingstodo/taprobane.jpg",
    },

    {
      title: "Discover Local Fishing Life",

      description:
        "Experience the traditional fishing heritage of the South Coast and observe the everyday coastal lifestyle that remains an important part of Weligama.",

      imageUrl: "/documents/thingstodo/weligama_fishing.jpg",
    },

    {
      title: "Explore Weligama Town",

      description:
        "Walk through the town to discover local shops, cafés, restaurants and the everyday atmosphere of one of Sri Lanka's lively southern coastal communities.",

      imageUrl: "/documents/thingstodo/weligama_town.jpg",
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

      imageUrl: "/documents/thingstodo/weligama_coast.jpg",
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

    {
      title: "Enjoy the South Coast Lifestyle",

      description:
        "Slow down and experience the relaxed rhythm of Weligama through its beaches, cafés, local food, surf culture and welcoming coastal atmosphere.",

      imageUrl: "/documents/thingstodo/weligama_lifestyle.jpg",
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

      imageUrl: "/documents/destination_explore_Image/koggala_lake.jpg",
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

      imageUrl: "/documents/destination_explore_Image/koggala_cinnamon.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Take a Koggala Lake Boat Safari",

      description:
        "Cruise across the peaceful waters of Koggala Lake and discover its tropical landscapes, mangroves, wildlife and quiet island surroundings.",

      imageUrl: "/documents/thingstodo/koggala_lake.jpg",
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

      imageUrl: "/documents/thingstodo/stilt_fishing.jpg",
    },

    {
      title: "Visit a Cinnamon Plantation",

      description:
        "Discover the traditional cultivation and processing of cinnamon and learn why this fragrant spice has been an important part of Sri Lanka's agricultural heritage.",

      imageUrl: "/documents/thingstodo/koggala_cinnamon.jpg",
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

      imageUrl: "/documents/thingstodo/koggala_beach.jpg",
    },

    {
      title: "Discover the Coastal Countryside",

      description:
        "Take a scenic journey through the countryside around Koggala and enjoy views of tropical gardens, villages, lagoons and the southern coastline.",

      imageUrl: "/documents/thingstodo/koggala_countryside.jpg",
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

      imageUrl: "/documents/destination_explore_Image/kabalana.jpg",
    },

    {
      title: "A Modern South Coast Lifestyle",

      description:
        "Ahangama has developed a distinctive coastal lifestyle where traditional Sri Lankan surroundings meet a growing community of surfers, creatives, cafés and boutique hospitality. Travellers can discover relaxed restaurants, small cafés and stylish spaces while still seeing the everyday rhythm of local villages and coastal communities. This combination gives Ahangama a character that feels contemporary without losing its connection to the landscape and culture of southern Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/ahangama_cafes.jpg",
    },

    {
      title: "Slow Days by the Ocean",

      description:
        "Beyond surfing, Ahangama is a destination for slowing down and enjoying the simple pleasures of coastal life. Visitors can cycle through palm-lined roads, explore nearby beaches, enjoy fresh food and watch the changing colours of the ocean at sunset. Its location along the southern coast also makes it an easy base for discovering nearby destinations while returning to a quieter and more relaxed atmosphere at the end of the day.",

      imageUrl: "/documents/destination_explore_Image/ahangama_coast.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Surf at Kabalana Beach",

      description:
        "Experience one of the South Coast's best-known surf spots, with waves that attract surfers from around the world and a beautiful tropical setting beside the ocean.",

      imageUrl: "/documents/thingstodo/kabalana.jpg",
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
      title: "Explore the Coastal Roads",

      description:
        "Take a scenic drive or bicycle ride through Ahangama's palm-lined roads and discover beaches, local homes and quiet coastal landscapes.",

      imageUrl: "/documents/thingstodo/ahangama_coast.jpg",
    },

    {
      title: "Discover Local Cafés",

      description:
        "Explore Ahangama's growing café scene and enjoy fresh coffee, tropical drinks, local flavours and relaxed meals in beautiful coastal surroundings.",

      imageUrl: "/documents/thingstodo/ahangama_cafes.jpg",
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
      title: "Cycle Through the Countryside",

      description:
        "Ride through palm-lined village roads and enjoy a slower journey through the tropical landscapes surrounding Ahangama.",

      imageUrl: "/documents/thingstodo/ahangama_cycling.jpg",
    },

    {
      title: "Discover Nearby Beaches",

      description:
        "Explore the beautiful beaches along the surrounding South Coast and discover quieter stretches of sand away from the main surf areas.",

      imageUrl: "/documents/thingstodo/ahangama_beaches.jpg",
    },

    {
      title: "Enjoy a Slow Coastal Morning",

      description:
        "Start the day beside the ocean with a relaxed walk, a quiet breakfast or a peaceful moment overlooking the tropical coastline.",

      imageUrl: "/documents/thingstodo/ahangama_morning.jpg",
    },

    {
      title: "Watch the Sunset by the Ocean",

      description:
        "End the day along the coast as warm evening light spreads across the ocean and palm-lined shoreline.",

      imageUrl: "/documents/thingstodo/ahangama_sunset.jpg",
    },

    {
      title: "Experience Ahangama's Coastal Lifestyle",

      description:
        "Spend time discovering the combination of surfing, food, cafés, tropical scenery and relaxed local life that gives Ahangama its distinctive character.",

      imageUrl: "/documents/thingstodo/ahangama_lifestyle.jpg",
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

      imageUrl: "/documents/destination_explore_Image/matara_fort.jpg",
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

      imageUrl: "/documents/thingstodo/matara_fort.jpg",
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

      imageUrl: "/documents/thingstodo/polhena.jpg",
    },

    {
      title: "Explore Matara Old Town",

      description:
        "Wander through the historic parts of Matara and experience the blend of colonial architecture, local shops and everyday southern coastal life.",

      imageUrl: "/documents/thingstodo/matara_old_town.jpg",
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
      title: "Relax at Hiriketiya Beach",

      description:
        "Spend time beside the beautiful curved bay, enjoying the tropical scenery, relaxed beach atmosphere and surrounding cafés.",

      imageUrl: "/documents/thingstodo/hiriketiya_beach.jpg",
    },

    {
      title: "Explore Tangalle Beaches",

      description:
        "Discover the spacious beaches around Tangalle and enjoy a quieter side of the southern coastline surrounded by tropical scenery.",

      imageUrl: "/documents/thingstodo/tangalle_beach.jpg",
    },

    {
      title: "Explore Tangalle Lagoon",

      description:
        "Discover the peaceful lagoons and wetlands around Tangalle, where tropical vegetation and coastal wildlife create a different side of the Deep South.",

      imageUrl: "/documents/thingstodo/tangalle_lagoon.jpg",
    },

    {
      title: "Visit Mulkirigala Rock Temple",

      description:
        "Travel inland from the coast to explore the ancient Mulkirigala Rock Temple, known for its cave temples, Buddhist murals and elevated views across the surrounding landscape.",

      imageUrl: "/documents/thingstodo/mulkirigala.jpg",
    },

    {
      title: "Take a South Coast Coastal Drive",

      description:
        "Follow the scenic coastline from Matara towards Dikwella, Hiriketiya and Tangalle, discovering beaches, villages and changing coastal landscapes along the way.",

      imageUrl: "/documents/thingstodo/south_coast_drive.jpg",
    },

    {
      title: "Enjoy a Southern Coast Sunset",

      description:
        "End the day beside the ocean and watch the warm evening light spread across the beaches and tropical coastline of southern Sri Lanka.",

      imageUrl: "/documents/thingstodo/south_coast_sunset.jpg",
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

      imageUrl: "/documents/destination_explore_Image/kalpitiya_kitesurfing.jpg",
    },

    {
      title: "Dolphins, Reefs & the Marine World",

      description:
        "The waters around Kalpitiya are home to an extraordinary variety of marine life, making the region particularly rewarding for travellers interested in the ocean. Dolphin-watching excursions can reveal large groups moving through the open sea, while boat journeys towards the Bar Reef offer opportunities to discover coral-rich waters and the diverse life beneath the surface. These experiences bring travellers closer to the natural character of Sri Lanka's north-western coastline and reveal a marine landscape that is very different from the island's traditional beach destinations.",

      imageUrl: "/documents/destination_explore_Image/kalpitiya_dolphins.jpg",
    },

    {
      title: "Lagoon Life & the Quiet North-West Coast",

      description:
        "Beyond the open ocean, Kalpitiya is surrounded by the calm waters of Puttalam Lagoon, where mangroves, sandbanks and traditional fishing communities create a peaceful coastal landscape. Exploring the lagoon provides a slower perspective of the region, with local boats moving across the water and changing light reflecting across the wide lagoon environment. Combined with the peninsula's quiet beaches and rural coastal scenery, these experiences offer travellers a chance to discover a less familiar and more authentic side of Sri Lanka.",

      imageUrl: "/documents/destination_explore_Image/kalpitiya_lagoon.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Go Kitesurfing in Kalpitiya",

      description:
        "Experience the strong seasonal winds and open waters that have made Kalpitiya one of Sri Lanka's leading destinations for kitesurfing.",

      imageUrl: "/documents/thingstodo/kalpitiya_kitesurfing.jpg",
    },

    {
      title: "Watch Dolphins in the Open Sea",

      description:
        "Take a boat excursion into the waters around Kalpitiya and look for dolphins moving through the ocean in large and memorable groups.",

      imageUrl: "/documents/thingstodo/kalpitiya_dolphins.jpg",
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

      imageUrl: "/documents/destination_explore_Image/nilaveli.jpg",
    },

    {
      title: "Sacred Heritage & Coastal History",

      description:
        "Beyond its beaches, Trincomalee has a rich cultural and historical character shaped by centuries of maritime and religious traditions. Koneswaram Temple stands dramatically above the ocean on Swami Rock, offering both a deeply significant cultural experience and beautiful views across the sea. Nearby, Fort Frederick reflects the area's colonial history, while the old streets and religious sites around the town reveal the diverse communities that have shaped Trincomalee over time. Exploring these places gives travellers a chance to experience a side of Sri Lanka where spirituality, history and the ocean are closely connected.",

      imageUrl: "/documents/destination_explore_Image/koneswaram.jpg",
    },

    {
      title: "Ocean Adventures & Island Escapes",

      description:
        "Trincomalee is also a wonderful destination for travellers who want to experience Sri Lanka's marine environment. A boat trip from Nilaveli can take you to Pigeon Island National Park, where coral reefs, colourful reef fish and marine life can be discovered through snorkelling and swimming. The surrounding waters are also known for whale watching, diving and other ocean experiences, while Kanniya's hot springs offer a relaxing experience away from the coast. Together, these experiences make Trincomalee a destination where beautiful beaches, sacred places, wildlife and ocean adventures come together naturally.",

      imageUrl: "/documents/destination_explore_Image/pigeon_island.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Explore Nilaveli Beach",

      description:
        "Relax on one of Trincomalee's most beautiful beaches, known for its wide sandy shoreline, clear waters and peaceful tropical atmosphere.",

      imageUrl: "/documents/thingstodo/nilaveli.jpg",
    },

    {
      title: "Snorkel at Pigeon Island",

      description:
        "Take a boat trip to Pigeon Island National Park and discover colourful coral reefs, tropical fish and the marine environment surrounding the island through snorkelling.",

      imageUrl: "/documents/thingstodo/pigeon_island.jpg",
    },

    {
      title: "Visit Koneswaram Temple",

      description:
        "Visit the sacred Koneswaram Temple on Swami Rock and experience its spiritual atmosphere together with spectacular views across the Indian Ocean.",

      imageUrl: "/documents/thingstodo/koneswaram.jpg",
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
      title: "Whale Watching Experience",

      description:
        "Join a boat excursion into the surrounding waters for the opportunity to observe whales and other marine life in their natural ocean environment.",

      imageUrl: "/documents/thingstodo/trinco_whale.jpg",
    },

    {
      title: "Dolphin Watching",

      description:
        "Enjoy a peaceful boat journey along the eastern coast with the possibility of encountering dolphins and other marine life in the open waters.",

      imageUrl: "/documents/thingstodo/trinco_dolphin.jpg",
    },

    {
      title: "Scuba Diving & Marine Exploration",

      description:
        "Explore Trincomalee's underwater world through diving experiences that reveal colourful reefs, tropical fish and the natural beauty beneath the eastern coast.",

      imageUrl: "/documents/thingstodo/trinco_diving.jpg",
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
      imageUrl: "/documents/destination_explore_Image/arugam_bay_surf.jpg",
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

      imageUrl: "/documents/destination_explore_Image/pottuvil_lagoon.jpg",
    },

    {
      title: "Wildlife & the Eastern Wilderness",

      description:
        "Arugam Bay is also a gateway to some of Sri Lanka's remarkable eastern wilderness areas. The surrounding region supports elephants, birds and other wildlife, while Kumana National Park offers opportunities to explore a landscape shaped by wetlands, forests and seasonal waterways. Ancient cultural sites such as Muhudu Maha Viharaya add another layer to the journey, creating a destination where surfing, nature, wildlife and heritage can be experienced within the same eastern coastal itinerary.",

      imageUrl: "/documents/destination_explore_Image/arugam_wildlife.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Surf at Arugam Bay",

      description:
        "Experience one of Sri Lanka's most famous surf destinations, with renowned waves and a relaxed coastal atmosphere that attracts surfers from around the world.",

      imageUrl: "/documents/thingstodo/arugam_bay_surf.jpg",
    },

    {
      title: "Explore Pottuvil Lagoon",

      description:
        "Take a peaceful journey through Pottuvil Lagoon and discover mangroves, waterways, birds and the quieter natural landscapes surrounding Arugam Bay.",

      imageUrl: "/documents/thingstodo/pottuvil_lagoon.jpg",
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

      imageUrl: "/documents/destination_explore_Image/pasikuda_bay.jpg",
    },

    {
      title: "A Peaceful Tropical Beach Escape",

      description:
        "Life in Pasikuda moves at a slower pace, with long beach days, warm ocean water and peaceful tropical surroundings defining the experience. The coastline is home to a collection of elegant beachfront resorts, allowing travellers to combine the natural beauty of the bay with a comfortable and private retreat. Whether enjoying a quiet morning beside the sea, taking a leisurely walk along the sand or watching the changing colours of the sky at sunset, Pasikuda offers the kind of relaxed coastal experience that encourages travellers to simply slow down.",

      imageUrl: "/documents/destination_explore_Image/pasikuda_beach.jpg",
    },

    {
      title: "Exploring the Eastern Coast by Sea",

      description:
        "The calm waters around Pasikuda also create opportunities to experience the eastern coastline from the water. Gentle boating and selected water activities allow travellers to discover the bay from a different perspective, while the surrounding marine environment adds another dimension to the beach experience. Combined with the area's warm climate, open coastline and peaceful atmosphere, these experiences make Pasikuda particularly appealing for travellers looking for a refined tropical escape where the ocean remains at the centre of the journey.",

      imageUrl: "/documents/destination_explore_Image/pasikuda_marine.jpg",
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

      imageUrl: "/documents/thingstodo/pasikuda_beach.jpg",
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

      imageUrl: "/documents/thingstodo/pasikuda_marine.jpg",
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

      imageUrl: "/documents/destination_explore_Image/anuradhapura_ancient.jpg",
    },

    {
      title: "Ancient Kingdoms & Buddhist Heritage",

      description:
        "The heart of Anuradhapura is closely connected with Buddhism, and many of its most important sites remain places of worship today. The sacred Sri Maha Bodhi, Ruwanwelisaya and other great stupas attract pilgrims throughout the year, while ancient monasteries such as Abhayagiri reveal the scale and sophistication of the city's religious life. Exploring these places offers more than an opportunity to see ancient architecture; it allows travellers to understand how religion, art, engineering and daily life were closely connected in the ancient kingdom. The combination of living spiritual traditions and centuries-old monuments gives Anuradhapura its unique character.",

      imageUrl: "/documents/destination_explore_Image/ruwanwelisaya.jpg",
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

      imageUrl: "/documents/thingstodo/sri_maha_bodhi.jpg",
    },

    {
      title: "Explore Ruwanwelisaya",

      description:
        "Admire one of Anuradhapura's most iconic white stupas and experience the calm spiritual atmosphere surrounding this important Buddhist monument.",

      imageUrl: "/documents/thingstodo/ruwanwelisaya.jpg",
    },

    {
      title: "Discover Abhayagiri Monastery",

      description:
        "Explore the remains of the ancient Abhayagiri monastery complex and discover the impressive scale of one of the most important monastic centres of ancient Sri Lanka.",

      imageUrl: "/documents/thingstodo/abhayagiri.jpg",
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

      imageUrl: "/documents/thingstodo/mirisavetiya.jpg",
    },

    {
      title: "Take a Cycling Tour of the Ancient City",

      description:
        "Explore Anuradhapura's wide archaeological landscape by bicycle, travelling between ancient monuments, shaded paths, reservoirs and peaceful heritage sites at your own pace.",

      imageUrl: "/documents/thingstodo/anuradhapura_cycling.jpg",
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

      imageUrl: "/documents/destination_explore_Image/polonnaruwa_ancient.jpg",
    },

    {
      title: "Stone, Art & Sacred Heritage",

      description:
        "One of Polonnaruwa's greatest attractions is its remarkable stone architecture and ancient craftsmanship. At Gal Vihara, beautifully carved Buddha figures have been created directly from a large rock face, showing the skill and artistic detail of the craftsmen of the period. Around the Sacred Quadrangle, visitors can discover beautifully preserved structures such as the Vatadage and other religious monuments, while temples such as Lankatilaka reveal the architectural ambition of the medieval kingdom. Exploring these sites offers more than a look at ancient ruins; it provides a chance to appreciate the art, beliefs and craftsmanship that shaped Sri Lanka's cultural heritage.",

      imageUrl: "/documents/destination_explore_Image/gal_vihara.jpg",
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

      imageUrl: "/documents/thingstodo/gal_vihara.jpg",
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

      imageUrl: "/documents/thingstodo/parakrama_samudra.jpg",
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
      title: "Visit Polonnaruwa Archaeological Museum",

      description:
        "Explore archaeological discoveries and historical displays that help explain the city's ancient monuments, royal history and cultural development.",

      imageUrl: "/documents/thingstodo/polonnaruwa_museum.jpg",
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

      imageUrl: "/documents/destination_explore_Image/jaffna_nallur.jpg",
    },

    {
      title: "Fortresses, Islands & Northern Horizons",

      description:
        "Jaffna's history is also written across its coastline and islands, where Portuguese and Dutch influences meet much older local traditions. Jaffna Fort overlooks the surrounding peninsula, while journeys towards Delft Island and the northern islands open up a quieter world of coral landscapes, open seas and remote communities. Travelling through these landscapes gives visitors a sense of the peninsula's maritime character and the remarkable variety of scenery found in Sri Lanka's far north.",

      imageUrl: "/documents/destination_explore_Image/jaffna_fort.jpg",
    },

    {
      title: "Flavours & Everyday Life in Jaffna",

      description:
        "Beyond its temples and historic sites, Jaffna is a destination best understood through its everyday life, food and landscapes. Palmyrah palms are a defining feature of the north, while the region's cuisine brings together bold spices, seafood, vegetables and distinctive Tamil culinary traditions. Exploring local markets, villages and coastal communities allows travellers to experience a slower rhythm of life and discover the warmth, flavours and traditions that make northern Sri Lanka so distinctive.",

      imageUrl: "/documents/destination_explore_Image/jaffna_islands.jpg",
    },
  ],

  thingsToDo: [
    {
      title: "Visit Nallur Kandaswamy Kovil",

      description:
        "Experience one of northern Sri Lanka's most important Hindu temples and discover the living religious traditions and striking architecture of Jaffna.",

      imageUrl: "/documents/thingstodo/jaffna_nallur.jpg",
    },

    {
      title: "Explore Jaffna Fort",

      description:
        "Walk through the historic fortifications overlooking the peninsula and discover layers of Portuguese, Dutch and British-era history.",

      imageUrl: "/documents/thingstodo/jaffna_fort.jpg",
    },

    {
      title: "Discover Delft Island",

      description:
        "Travel across the sea to Delft Island and explore its distinctive landscapes, historic remains, coral walls and traditional island communities.",

      imageUrl: "/documents/thingstodo/delft_island.jpg",
    },

    {
      title: "Explore the Northern Islands",

      description:
        "Discover the quieter islands around the Jaffna Peninsula, where coastal scenery, lagoons and local communities create a different perspective on northern Sri Lanka.",

      imageUrl: "/documents/thingstodo/jaffna_islands.jpg",
    },

    {
      title: "Visit Nagadeepa",

      description:
        "Journey to Nagadeepa and discover its important Buddhist heritage alongside the peaceful coastal landscapes of the northern islands.",

      imageUrl: "/documents/thingstodo/nagadeepa.jpg",
    },

    {
      title: "Taste Jaffna Cuisine",

      description:
        "Explore the distinctive flavours of northern Sri Lanka through traditional Jaffna dishes, seafood, spices and local culinary traditions.",

      imageUrl: "/documents/thingstodo/jaffna_food.jpg",
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
  {
    name: "Charlotte Hayes",
    country: "United Kingdom",
    quote:
      "Every detail was considered before we even thought to ask. The most effortless travel experience we've had in years.",
    trip: "The Golden Palm Grand Ceylon",
  },
  {
    name: "Marco Bianchi",
    country: "Australia",
    quote:
      "Our guide's knowledge of Sigiriya turned a photo stop into the highlight of the entire trip.",
    trip: "Kingdoms of the Triangle",
  },
  {
    name: "Emily & Noah Carter",
    country: "Canada",
    quote:
      "From the private villa to the sunset cruise, Golden Palm Ceylon planned the honeymoon we didn't know how to ask for.",
    trip: "Ceylon Honeymoon Retreat",
  },
  {
    name: "Lena Fischer",
    country: "Germany",
    quote:
      "Genuinely five-star service. Our chauffeur felt like a friend by day three.",
    trip: "Hills of Ceylon",
  },
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
