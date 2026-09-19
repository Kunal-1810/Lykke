import india from './images/in.svg';
import japan from './images/jp.svg';
import egypt from './images/eg.svg';
import greece from './images/ge.svg';
import georgia from './images/gr.svg';
import kenya from './images/ke.svg';
import philippines from './images/ph.svg';

import shri from './images/shri.webp';
import singa from './images/singa.webp';
import thai from './images/thai.webp';
import bhutan from './images/bhutan.webp';
import tanzania from './images/tanz.webp';
import turkey from './images/tur.webp';
import turkeyhis from './images/turkey.webp';
import kazakistan from './images/kaza.webp';

import philcard from './images/philippines-card.webp';
import grcard from './images/grcard.webp';
import egcard from './images/egcard.webp';
import balicard from './images/balicard.webp';

import japanbig from './images/japanbig.webp';
import thaibig from './images/thaibig.webp';
import singabig from './images/singabig.webp';
import singacitybig from './images/singacitybig.webp';

export const DESTINATIONS = [
  { id: 'india', name: 'Explore India', flag: india, tag: 'India' },
  { id: 'japan', name: 'Japan', flag: japan, tag: 'Japan' },
  { id: 'egypt', name: 'Egypt', flag: egypt, tag: 'Egypt' },
  { id: 'greece', name: 'Greece', flag: greece, tag: 'Greece' },
  { id: 'georgia', name: 'Georgia', flag: georgia, tag: 'Georgia' },
  { id: 'kenya', name: 'Kenya', flag: kenya, tag: 'Kenya' },
  { id: 'philippines', name: 'Philippines', flag: philippines, tag: 'Philippines' },
];

export const SLIDER_IMAGES = [
  { id: 1, src: japanbig, title: 'Wonders of Mount Fuji & Tokyo', country: 'Japan', subtitle: 'Experience spring cherry blossoms and high-speed bullet trains.' },
  { id: 2, src: thaibig, title: 'Exotic Beaches of Phuket & Krabi', country: 'Thailand', subtitle: 'Crystal clear waters, emerald limestone cliffs, and vibrant nightlife.' },
  { id: 3, src: singabig, title: 'Gardens by the Bay & Marina Sands', country: 'Singapore', subtitle: 'Futuristic architecture meets lush urban nature.' },
  { id: 4, src: singacitybig, title: 'Vibrant Skylines & Shopping Hubs', country: 'Singapore', subtitle: 'Curated shopping sprees & luxury stays for global travelers.' },
];

export const HANDPICKED_PACKAGES = [
  {
    id: 'singapore-malaysia',
    title: 'Singapore Malaysia Explorer',
    location: 'Kuala Lumpur, Singapore, Langkawi, Kedah',
    price: '₹1,28,999',
    rawPrice: 128999,
    days: '11 days',
    image: singa,
    country: 'Singapore',
    rating: 4.8,
    reviews: 142,
    highlights: ['Universal Studios Singapore Pass', 'Batu Caves Tour in KL', 'Langkawi Cable Car Ride', 'Luxury 4-Star Hotel Stay']
  },
  {
    id: 'shri-lanka',
    title: 'Wonders of Sri Lanka',
    location: 'Kandy, Nuwara Eliya, Bentota, Colombo',
    price: '₹39,999',
    rawPrice: 39999,
    days: '6 days',
    image: shri,
    country: 'Sri Lanka',
    rating: 4.6,
    reviews: 98,
    highlights: ['Sigiriya Rock Fortress Entrance', 'Tea Plantation & Factory Visit', 'Bentota Beach Water Sports', 'Scenic Train Ride to Nuwara Eliya']
  },
  {
    id: 'thailand',
    title: 'Journey through Thailand',
    location: 'Phuket, Krabi, Pattaya, Bangkok',
    price: '₹93,999',
    rawPrice: 93999,
    days: '9 days',
    image: thai,
    country: 'Thailand',
    rating: 4.9,
    reviews: 215,
    highlights: ['Phi Phi Island Speedboat Cruise', 'Coral Island Tour with Lunch', 'Bangkok Temple Tour', 'Alcazar Cabaret Show Ticket']
  },
  {
    id: 'bhutan',
    title: 'Bhutan Hidden Gems',
    location: 'Paro, Punakha, Thimphu',
    price: '₹48,599',
    rawPrice: 48599,
    days: '7 days',
    image: bhutan,
    country: 'Bhutan',
    rating: 4.7,
    reviews: 76,
    highlights: ["Tiger's Nest Monastery Trek", 'Punakha Dzong Valley Tour', 'Traditional Bhutanese Cultural Night', 'Sustainable Eco Stay']
  },
  {
    id: 'kazakhstan',
    title: 'Kazakhstan Trails & Lakes',
    location: 'Almaty, Saty Village, Kaindy Lake',
    price: '₹80,699',
    rawPrice: 80699,
    days: '8 days',
    image: kazakistan,
    country: 'Kazakhstan',
    rating: 4.7,
    reviews: 64,
    highlights: ['Charyn Canyon Excursion', 'Kaindy Sunken Forest Lake Trip', 'Shymbulak Ski Resort Cable Car', 'Authentic Kazakh Yurt Dinner']
  },
  {
    id: 'turkey-legacy',
    title: "Journey Through Turkey's Legacy",
    location: 'Antalya, Istanbul, Bosphorus',
    price: '₹79,399',
    rawPrice: 79399,
    days: '6 days',
    image: turkey,
    country: 'Turkey',
    rating: 4.8,
    reviews: 189,
    highlights: ['Bosphorus Sunset Dinner Cruise', 'Hagia Sophia & Blue Mosque Guided Tour', 'Duden Waterfalls Tour Antalya', 'Traditional Turkish Bath Spa']
  },
  {
    id: 'tanzania',
    title: 'Tanzania Wildlife Safari Wonders',
    location: 'Arusha, Ngorongoro Crater, Serengeti',
    price: '₹1,84,699',
    rawPrice: 184699,
    days: '6 days',
    image: tanzania,
    country: 'Tanzania',
    rating: 4.9,
    reviews: 112,
    highlights: ['4x4 Serengeti Great Migration Safari', 'Ngorongoro Crater Floor Drive', 'Maasai Village Cultural Encounter', 'All-Inclusive Luxury Safari Lodge']
  },
  {
    id: 'turkey-historic',
    title: "Turkey's Historic Wonders Trail",
    location: 'Istanbul, Goreme, Kusadasi, Cappadocia',
    price: '₹1,05,499',
    rawPrice: 105499,
    days: '7 days',
    image: turkeyhis,
    country: 'Turkey',
    rating: 4.9,
    reviews: 156,
    highlights: ['Cappadocia Hot Air Balloon Sunrise Ride', 'Underground City Exploration', 'Ephesus Ancient Ruins Tour', 'Cave Hotel Deluxe Stay']
  },
];

export const POPULAR_FEATURED = [
  {
    id: 'philippines',
    name: 'Philippines',
    startingPrice: '₹62,999*',
    image: philcard,
    tagline: '7,000+ Tropical Islands Waiting',
    highlights: ['El Nido Lagoon Kayaking', 'Boracay White Beach Sunset', 'Whale Shark Swimming in Cebu']
  },
  {
    id: 'greece',
    name: 'Greece',
    startingPrice: '₹38,899*',
    image: grcard,
    tagline: 'Santorini Sunsets & Aegean Magic',
    highlights: ['Acropolis Historic Guided Walk', 'Santorini Caldera Sunset Cruise', 'Mykonos Beach Club Vibe']
  },
  {
    id: 'egypt',
    name: 'Egypt',
    startingPrice: '₹34,799*',
    image: egcard,
    tagline: 'Ancient Pyramids & Nile Cruises',
    highlights: ['Great Pyramids of Giza & Sphinx', '5-Star Nile River Cruise', 'Valley of the Kings Tombs']
  },
  {
    id: 'bali',
    name: 'Bali - Indonesia',
    startingPrice: '₹50,000*',
    image: balicard,
    tagline: 'Tropical Paradise & Sacred Temples',
    highlights: ['Ubud Jungle Swing & Rice Terraces', 'Nusa Penida Island Speedboat', 'Tanah Lot Temple Sunset']
  },
];
