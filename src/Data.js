import singa from './images/singa.webp';
import singabig from './images/singabig.webp';
import shri from './images/shri.webp';
import thai from './images/thai.webp';
import thaibig from './images/thaibig.webp';
import bhutan from './images/bhutan.webp';
import kazakistan from './images/kaza.webp';
import turkey from './images/tur.webp';
import turkeyhis from './images/turkey.webp';
import tanzania from './images/tanz.webp';
import philcard from './images/philippines-card.webp';
import grcard from './images/grcard.webp';
import egcard from './images/egcard.webp';
import balicard from './images/balicard.webp';

/* ------------------------------------------------------------------
   SITE SETTINGS  (edit these)
------------------------------------------------------------------- */
// If you put an email here, the Contact form opens the visitor's mail app
// addressed to it. Leave empty to only record enquiries in the browser.
export const CONTACT = { email: '' };

// Child price = this share of the adult price.
export const CHILD_FACTOR = 0.75;

// Optional extras shown on the booking page (price is per traveller).
export const ADDONS = [
  { id: 'visa', label: 'Visa assistance', price: 3500 },
  { id: 'insurance', label: 'Travel insurance', price: 1200 },
];

// Shown on every package page. Edit to match your real terms.
export const INCLUSIONS = [
  'Hotel stays on twin-sharing basis with daily breakfast',
  'Airport and inter-city transfers as per itinerary',
  'Sightseeing and entrance fees mentioned in the itinerary',
  'Dedicated trip coordinator and 24/7 on-trip support',
];
export const EXCLUSIONS = [
  'International and domestic flights',
  'Visa fees (visa assistance is available as an add-on)',
  'Meals not mentioned in the itinerary',
  'Personal expenses, tips and travel insurance (insurance is available as an add-on)',
];

/* ------------------------------------------------------------------
   PACKAGES  (prices are per person, in INR)
------------------------------------------------------------------- */
export const PACKAGES = [
  {
    id: 'singapore-malaysia',
    featured: true,
    title: 'Singapore Malaysia Explorer',
    tagline: 'City lights, island beaches and rainforest escapes across two countries',
    image: singa,
    banner: singabig,
    price: 128999,
    days: 11,
    destinations: ['Kuala Lumpur', 'Singapore', 'Langkawi', 'Kedah'],
    countries: ['Singapore', 'Malaysia'],
    overview:
      'Combine the skyscrapers and street food of Kuala Lumpur and Singapore with the quiet beaches of Langkawi and the green countryside of Kedah, all in one well-paced holiday.',
    highlights: [
      'Petronas Twin Towers and Batu Caves in Kuala Lumpur',
      'Island hopping and the sky cable car in Langkawi',
      'Gardens by the Bay and Marina Bay in Singapore',
      'Sentosa Island and a night safari',
    ],
    itinerary: [
      { when: 'Day 1–3', title: 'Kuala Lumpur', text: 'Arrive, settle in and explore the Petronas Twin Towers, Batu Caves and the city markets.' },
      { when: 'Day 4–6', title: 'Langkawi & Kedah', text: 'Fly to Langkawi for island hopping, a mangrove tour and a ride up the sky cable car, with time in Kedah.' },
      { when: 'Day 7–10', title: 'Singapore', text: 'Gardens by the Bay, Marina Bay, Sentosa and a night safari, with free time for shopping.' },
      { when: 'Day 11', title: 'Departure', text: 'Transfer to the airport for your flight home.' },
    ],
  },
  {
    id: 'shri-lanka',
    featured: true,
    title: 'Wonders of Shri Lanka',
    tagline: 'Hill country tea trails, temples and golden beaches',
    image: shri,
    price: 39999,
    days: 6,
    destinations: ['Kandy', 'Nuwara Eliya', 'Bentota', 'Colombo'],
    countries: ['Sri Lanka'],
    keywords: ['Shri Lanka'],
    overview:
      'A compact island circuit that moves from the cultural heart of Kandy to the cool tea country of Nuwara Eliya and finishes on the beaches of Bentota.',
    highlights: [
      'Temple of the Tooth and the royal botanical gardens',
      'Tea plantations in Nuwara Eliya',
      'Beach time and a river safari in Bentota',
      'Colombo city tour',
    ],
    itinerary: [
      { when: 'Day 1–2', title: 'Kandy', text: 'Arrive and drive to Kandy. Visit the Temple of the Tooth and the botanical gardens.' },
      { when: 'Day 3', title: 'Nuwara Eliya', text: 'Wind through tea country, tour a plantation and enjoy the cool hill-station air.' },
      { when: 'Day 4–5', title: 'Bentota', text: 'Relax on the beach, take a river safari and enjoy optional water sports.' },
      { when: 'Day 6', title: 'Colombo & departure', text: 'A short city tour before your airport transfer.' },
    ],
  },
  {
    id: 'thailand',
    featured: true,
    title: 'Journey through Thailand',
    tagline: 'Islands, nightlife and temples from Phuket to Bangkok',
    image: thai,
    banner: thaibig,
    price: 93999,
    days: 9,
    destinations: ['Phuket', 'Krabi', 'Pattaya', 'Bangkok'],
    countries: ['Thailand'],
    overview:
      'Start on the Andaman coast, move on to the beaches of Krabi and Pattaya, and finish with the temples, markets and skyline of Bangkok.',
    highlights: [
      'Phi Phi and James Bond island day trips',
      'Four-island snorkelling in Krabi',
      'Coral Island and Pattaya nightlife',
      'Grand Palace and floating market in Bangkok',
    ],
    itinerary: [
      { when: 'Day 1–3', title: 'Phuket', text: 'Arrive in Phuket, enjoy the beaches and take an island day trip.' },
      { when: 'Day 4–5', title: 'Krabi', text: 'Four-island boat tour and time at Railay and Ao Nang beaches.' },
      { when: 'Day 6–7', title: 'Pattaya', text: 'Coral Island by speedboat, a cultural show and the walking street.' },
      { when: 'Day 8–9', title: 'Bangkok', text: 'Grand Palace, temples, a floating market and shopping before departure.' },
    ],
  },
  {
    id: 'bhutan',
    featured: true,
    title: 'Bhutan hidden gems',
    tagline: 'Monasteries, mountain passes and quiet valleys',
    image: bhutan,
    price: 48599,
    days: 7,
    destinations: ['Paro', 'Punakha', 'Thimphu'],
    countries: ['Bhutan'],
    overview:
      'Travel through the Himalayan kingdom from Paro to Thimphu and Punakha, visiting dzongs, monasteries and mountain viewpoints along the way.',
    highlights: [
      "Paro Taktsang (Tiger's Nest) hike",
      'Punakha Dzong beside the river',
      'Buddha Dordenma statue in Thimphu',
      'Dochula Pass mountain views',
    ],
    itinerary: [
      { when: 'Day 1–2', title: 'Paro', text: 'Arrive in Paro, visit the local museum and take the hike to Tiger\'s Nest monastery.' },
      { when: 'Day 3–4', title: 'Thimphu', text: 'Drive to the capital to see the Buddha Dordenma, markets and traditional crafts.' },
      { when: 'Day 5–6', title: 'Punakha', text: 'Cross Dochula Pass to Punakha and visit its dzong and suspension bridge.' },
      { when: 'Day 7', title: 'Departure', text: 'Return to Paro for your flight.' },
    ],
  },
  {
    id: 'kazakhstan',
    featured: true,
    title: 'Kazakhstan Trails',
    tagline: 'Mountain lakes, canyons and Almaty city life',
    image: kazakistan,
    price: 80699,
    days: 8,
    destinations: ['Almaty', 'Saty Village'],
    countries: ['Kazakhstan'],
    overview:
      'Explore Almaty and the dramatic landscapes around it, from alpine lakes to canyons, with a stay in the quiet village of Saty.',
    highlights: [
      'Almaty city tour and Kok Tobe hill',
      'Big Almaty Lake',
      'Charyn Canyon',
      'Kolsai Lakes near Saty',
    ],
    itinerary: [
      { when: 'Day 1–3', title: 'Almaty', text: 'City tour, Kok Tobe cable car and a visit to Big Almaty Lake.' },
      { when: 'Day 4–5', title: 'Charyn Canyon', text: 'Full-day excursion to the canyon and its red rock formations.' },
      { when: 'Day 6–7', title: 'Saty Village', text: 'Stay in Saty and visit the Kolsai Lakes and surrounding countryside.' },
      { when: 'Day 8', title: 'Departure', text: 'Return to Almaty and fly home.' },
    ],
  },
  {
    id: 'turkey-legacy',
    featured: true,
    title: "Journey Through Turkey's Legacy",
    tagline: 'Mediterranean coast and the historic streets of Istanbul',
    image: turkey,
    price: 79399,
    days: 6,
    destinations: ['Antalya', 'Istanbul'],
    countries: ['Turkey'],
    overview:
      'Pair the sunny coast of Antalya with the mosques, bazaars and Bosphorus views of Istanbul in a short, easy-paced holiday.',
    highlights: [
      'Old town Kaleiçi and the harbour in Antalya',
      'Duden Waterfalls',
      'Hagia Sophia and the Blue Mosque',
      'Bosphorus cruise',
    ],
    itinerary: [
      { when: 'Day 1–3', title: 'Antalya', text: 'Explore the old town, harbour and waterfalls, with free time by the sea.' },
      { when: 'Day 4–5', title: 'Istanbul', text: 'Hagia Sophia, the Blue Mosque, Grand Bazaar and a Bosphorus cruise.' },
      { when: 'Day 6', title: 'Departure', text: 'Airport transfer and flight home.' },
    ],
  },
  {
    id: 'tanzania',
    featured: true,
    title: 'Tanzania Wildlife Wonders',
    tagline: 'Safari through Tanzania\'s most famous parks',
    image: tanzania,
    price: 184699,
    days: 6,
    destinations: ['Arusha', 'Ngorongoro Crater', 'Lake Manyara', 'Serengeti'],
    countries: ['Tanzania'],
    overview:
      'A short, wildlife-packed safari covering Lake Manyara, the Serengeti plains and the Ngorongoro Crater with experienced local guides.',
    highlights: [
      'Game drives in the Serengeti',
      'Ngorongoro Crater descent',
      'Tree-climbing lions and flamingos at Lake Manyara',
      'Safari lodge stays',
    ],
    itinerary: [
      { when: 'Day 1', title: 'Arusha', text: 'Arrive in Arusha and meet your safari guide.' },
      { when: 'Day 2', title: 'Lake Manyara', text: 'Morning game drive among elephants, hippos and birdlife.' },
      { when: 'Day 3–4', title: 'Serengeti', text: 'Full days of game drives across the endless plains.' },
      { when: 'Day 5', title: 'Ngorongoro Crater', text: 'Descend into the crater floor for some of Africa\'s densest wildlife viewing.' },
      { when: 'Day 6', title: 'Departure', text: 'Return to Arusha for your flight.' },
    ],
  },
  {
    id: 'turkey-historic',
    featured: true,
    title: "Turkey's Historic Wonders Trail",
    tagline: 'Cappadocia, Ephesus and Istanbul in one trip',
    image: turkeyhis,
    price: 105499,
    days: 7,
    destinations: ['Istanbul', 'Goreme', 'Kusadasi'],
    countries: ['Turkey'],
    overview:
      "Follow Turkey's history from Istanbul's imperial landmarks to the cave valleys of Göreme and the ancient ruins near Kuşadası.",
    highlights: [
      'Sunrise in Cappadocia',
      'Ancient city of Ephesus',
      "Topkapi Palace and the Grand Bazaar",
      'Underground city visit',
    ],
    itinerary: [
      { when: 'Day 1–2', title: 'Istanbul', text: 'Topkapi Palace, Hagia Sophia and the Grand Bazaar.' },
      { when: 'Day 3–4', title: 'Goreme', text: 'Fly to Cappadocia to see the fairy chimneys, cave valleys and an underground city.' },
      { when: 'Day 5–6', title: 'Kusadasi', text: 'Visit the ruins of Ephesus and spend time on the Aegean coast.' },
      { when: 'Day 7', title: 'Departure', text: 'Transfer to the airport for your flight.' },
    ],
  },
  {
    id: 'philippines',
    title: 'Philippines Island Escape',
    tagline: 'Limestone cliffs, lagoons and white-sand beaches in Palawan',
    image: philcard,
    price: 62999,
    days: 6,
    destinations: ['El Nido', 'Puerto Princesa'],
    countries: ['Philippines'],
    overview:
      'Spend six days in Palawan, exploring the lagoons and islands of El Nido and the underground river near Puerto Princesa.',
    highlights: [
      'El Nido island-hopping tours',
      'Puerto Princesa Underground River',
      'Snorkelling in clear lagoons',
      'Beachfront stays',
    ],
    itinerary: [
      { when: 'Day 1–2', title: 'Puerto Princesa', text: 'Arrive, then visit the Underground River and the city.' },
      { when: 'Day 3–5', title: 'El Nido', text: 'Island-hopping tours, lagoon snorkelling and beach time.' },
      { when: 'Day 6', title: 'Departure', text: 'Transfer to the airport.' },
    ],
  },
  {
    id: 'greece',
    title: 'Greece Classics: Athens & Santorini',
    tagline: 'Ancient ruins and white-washed island sunsets',
    image: grcard,
    price: 38899,
    days: 6,
    destinations: ['Athens', 'Santorini'],
    countries: ['Greece'],
    overview:
      'See the Acropolis in Athens, then fly to Santorini for caldera views, sunsets and seaside villages.',
    highlights: [
      'Acropolis and Parthenon',
      'Oia sunset in Santorini',
      'Caldera cruise',
      'Old-town walks in Plaka',
    ],
    itinerary: [
      { when: 'Day 1–2', title: 'Athens', text: 'Acropolis, Plaka old town and the Ancient Agora.' },
      { when: 'Day 3–5', title: 'Santorini', text: 'Caldera cruise, Oia sunset and free time at the beaches.' },
      { when: 'Day 6', title: 'Departure', text: 'Return to Athens and fly home.' },
    ],
  },
  {
    id: 'egypt',
    title: "Egypt Pharaohs' Trail",
    tagline: 'Pyramids, temples and a Nile journey',
    image: egcard,
    price: 34799,
    days: 6,
    destinations: ['Cairo', 'Giza', 'Luxor'],
    countries: ['Egypt'],
    overview:
      'Stand before the pyramids of Giza, explore the Egyptian Museum and travel south to the temples and tombs of Luxor.',
    highlights: [
      'Pyramids of Giza and the Sphinx',
      'Egyptian Museum in Cairo',
      'Karnak and Luxor temples',
      'Valley of the Kings',
    ],
    itinerary: [
      { when: 'Day 1–3', title: 'Cairo & Giza', text: 'Pyramids, the Sphinx, the Egyptian Museum and Khan el-Khalili bazaar.' },
      { when: 'Day 4–5', title: 'Luxor', text: 'Karnak Temple, Luxor Temple and the Valley of the Kings.' },
      { when: 'Day 6', title: 'Departure', text: 'Fly back to Cairo and onward home.' },
    ],
  },
  {
    id: 'bali',
    title: 'Bali Island Retreat',
    tagline: 'Rice terraces, temples and beach clubs',
    image: balicard,
    price: 50000,
    days: 6,
    destinations: ['Ubud', 'Seminyak', 'Nusa Penida'],
    countries: ['Indonesia'],
    keywords: ['Bali'],
    overview:
      'Balance culture and relaxation with Ubud\'s rice terraces and temples, Seminyak\'s beaches and a day trip to Nusa Penida.',
    highlights: [
      'Tegallalang rice terraces',
      'Uluwatu temple sunset',
      'Nusa Penida day trip',
      'Traditional Balinese spa',
    ],
    itinerary: [
      { when: 'Day 1–2', title: 'Ubud', text: 'Rice terraces, the monkey forest and local art markets.' },
      { when: 'Day 3–4', title: 'Seminyak', text: 'Beach time, Uluwatu temple and a sunset dinner.' },
      { when: 'Day 5', title: 'Nusa Penida', text: 'Day trip to Kelingking Beach and Angel\'s Billabong.' },
      { when: 'Day 6', title: 'Departure', text: 'Airport transfer.' },
    ],
  },
];

// Cards in the "most popular destinations" row on the home page
export const DESTINATIONS = [
  { name: 'Philippines', country: 'Philippines', image: philcard },
  { name: 'Greece', country: 'Greece', image: grcard },
  { name: 'Egypt', country: 'Egypt', image: egcard },
  { name: 'Bali-Indonesia', country: 'Indonesia', image: balicard },
];

/* ------------------------------------------------------------------
   HELPERS
------------------------------------------------------------------- */
export const formatINR = (n) => '₹' + Number(n).toLocaleString('en-IN');

export const getPackageById = (id) => PACKAGES.find((p) => p.id === id);

export const COUNTRIES = Array.from(new Set(PACKAGES.flatMap((p) => p.countries))).sort();

const haystack = (p) =>
  [p.title, p.tagline, ...p.destinations, ...p.countries, ...(p.keywords || [])]
    .join(' ')
    .toLowerCase();

export function filterPackages({ q = '', country = '' } = {}) {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const c = country.trim().toLowerCase();
  return PACKAGES.filter((p) => {
    if (c) {
      const labels = [...p.countries, ...(p.keywords || [])].map((x) => x.toLowerCase());
      if (!labels.includes(c)) return false;
    }
    const h = haystack(p);
    return terms.every((t) => h.includes(t));
  });
}

export function startingPrice(country) {
  const list = filterPackages({ country });
  return list.length ? Math.min(...list.map((p) => p.price)) : null;
}

export function calcTotal(pkg, adults, children, addonIds) {
  const childPrice = Math.round(pkg.price * CHILD_FACTOR);
  const adultsTotal = pkg.price * adults;
  const childrenTotal = childPrice * children;
  const travellers = adults + children;
  const addons = ADDONS.filter((a) => addonIds.includes(a.id)).map((a) => ({
    ...a,
    total: a.price * travellers,
  }));
  const addonsTotal = addons.reduce((sum, a) => sum + a.total, 0);
  return {
    childPrice,
    adultsTotal,
    childrenTotal,
    addons,
    addonsTotal,
    total: adultsTotal + childrenTotal + addonsTotal,
  };
}
