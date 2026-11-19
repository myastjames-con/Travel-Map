/* =========================================================
   ⚙️ SETTINGS
   ========================================================= */

// Thomas's QR code opens the site with this at the end:
//   https://your-site-address/?k=moo
// Without it, people only see the 4 public maps.
const SECRET_KEY = "moo";

// Pin colours: set these to match the pins on your physical map.
const PEOPLE = {
  thomas:   { label: "Thomas",   color: "#edade0" }, 
  mya:      { label: "Mya",      color: "#81ab5e" },  
  together: { label: "Together", color: "#5760d7" },
  RoadTrip: { label: "Our Road Trips", color: "#6f4f1c" }  
};
const OUR_PLACES_COLOR = "#b8656f";

// Map background style. None of these need an API key.
//   "topo"   – soft outdoorsy map with terrain and trails (nice for a hiker)
//   "street" – the classic OpenStreetMap look
//   "light"  – very plain and pale, lets the pins stand out
const MAP_STYLE = "topo";

const MAP_STYLES = {
  topo: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
    maxZoom: 18
  },
  street: {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 19
  },
  light: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
    maxZoom: 16
  }
};


/* =========================================================
   ✏️ TRIPS (used by the 4 public maps)
   who: "thomas", "mya" or "together"
   lat/lng: right-click a spot in Google Maps → click the numbers to copy
   photo: a file in this folder (e.g. "photos/banff.jpg") or a link
   zoom (optional): how close to zoom in. 5 = country, 10 = region, 14 = street
   ========================================================= */
const trips = [
  //Thomas Trips
  {
    who: "thomas",
    title: "Boston",
    date: "August 2022",
    lat: 42.3601, lng: -71.0589,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  {
    who: "thomas",
    title: "Amsterdam",
    date: "August 2022",
    lat: 52.37278, lng: 4.8930,
    emoji: "🇳🇱",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  {
    who: "thomas",
    title: "Lisbon",
    date: "August 2022",
    lat: 38.7223, lng: -9.1393,
    emoji: "🇵🇹",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
    {
    who: "thomas",
    title: "Porto",
    date: "August 2022",
    lat: 41.1579, lng: -8.6291,
    emoji: "🇵🇹",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
    {
    who: "thomas",
    title: "Cortina",
    date: "August 2022",
    lat: 46.5597, lng: 12.1208,
    emoji: "🇮🇹",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
    {
    who: "thomas",
    title: "Andalusia",
    date: "August 2022",
    lat: 37.1784, lng: -3.5708,
    emoji: "🇪🇸",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  {
    who: "thomas",
    title: "Liguria",
    date: "August 2022",
    lat: 44.5000, lng: -8.8333,
    emoji: "🇮🇹",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about`
  },
  {
    who: "thomas",
    title: "Berner Oberland",
    date: "August 2022",
    lat: 46.6688, lng: -7.9167,
    emoji: "🇨🇭",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
   {
    who: "thomas",
    title: "Costa Rica",
    date: "August 2022",
    lat: 9.9281, lng: -84.0907,
    emoji: "🇨🇷",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  {
    who: "thomas",
    title: "Barcelona",
    date: "August 2022",
    lat: 41.3851, lng: 2.1771,
    emoji: "🇪🇸",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  {
    who: "thomas",
    title: "San Francisco",
    date: "August 2022",
    lat: 37.7749, lng: -122.4194,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  {
    who: "thomas",
    title: "Yosemite",
    date: "August 2022",
    lat: 37.8304, lng: -119.5140,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
   {
    who: "thomas",
    title: "Nice",
    date: "August 2022",
    lat: 43.7031, lng: 7.2661,
    emoji: "🇫🇷",
    photo: "https://picsum.photos/seed/banff/800/500",
    story: `A story about this trip.`
  },
  //Mya Trips 
   {
    who: "mya",
    title: "Gulfport",
    date: "May 2023",
    lat: 27.747981, lng: -82.705069,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Miami",
    date: "May 2023",
    lat: 25.750831, lng: -80.18018,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Florida keys",
    date: "May 2023",
    lat: 24.558070, lng: -81.78301,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Orlando",
    date: "May 2023",
    lat: 42.3601, lng: -71.0589,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Toronto",
    date: "May 2023",
    lat: 43.6532, lng: -79.3832,
    emoji: "🇨🇦",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "New York",
    date: "May 2023",
    lat: 40.7128, lng: -74.0060,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Boston",
    date: "May 2023",
    lat: 42.3601, lng: -71.0589,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Paris",
    date: "May 2023",
    lat: 48.8567, lng: 2.3522,
    emoji: "🇫🇷",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Vienna",
    date: "May 2023",
    lat: 48.2082, lng: 16.3738,
    emoji: "🇦🇹",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
    {
    who: "mya",
    title: "Augsburg",
    date: "May 2023",
    lat: 48.3718, lng: 10.8942,
    emoji: "🇩🇪",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Munich",
    date: "May 2023",
    lat: 48.1351, lng: 11.5820,
    emoji: "🇩🇪",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
   {
    who: "mya",
    title: "Cancun",
    date: "May 2023",
    lat: 21.1619, lng: -86.8515,
    emoji: "🇲🇽",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Porto",
    date: "August 2024",
    lat: 41.1579, lng: -8.6291,
    emoji: "🇵🇹",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Lisbon",
    date: "August 2024",
    lat: 38.7223, lng: -9.1393,
    emoji: "🇵🇹",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Palm desert",
    date: "May 2023",
    lat: 33.8304, lng: -115.5708,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Los Anegeles",
    date: "May 2023",
    lat: 34.0522, lng: -118.2437,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Los Vegas",
    date: "May 2023",
    lat: 36.1699, lng: -115.1398,
    emoji: "🇺🇸",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "London",
    date: "May 2023",
    lat: 51.5074, lng: -0.1278,
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `A story about this trip.`
  },
  {
    who: "mya",
    title: "Seven Sisters hike",
    date: "May 2023",
    lat: 50.758000, lng: 0.1800,
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `My mom and I took a day trip to the Seven Sisters hike in the South Downs National Park. It was a beautiful hike with stunning views of the English countryside. We saw amaizing cliffs and the ocean and many different farm animals. The first part of the hike we needed to move around cows since they were grazing upon the gas on the path. We also saw a few sheep and horses along the way. It was a gruling 10km hike with many ups and down but ended things with an amazing pint and dinner at Wheterspoons in Eastbourne.`
  },
  {
    who: "mya",
    title: "Frankfurt",
    date: "May 2023",
    lat: 50.1109, lng: 8.6821,
    emoji: "🇩🇪",
    photo: "https://picsum.photos/seed/lisbon/800/500",
    story: `Went to visit Elina during my reading week. We went to a Bundasligua soccer game which was actually insane. I also met some of her friends and visited different location around where she lives like Stuttgart.`
  },
  // Together Trips
  {
    who: "together",
    title: "Tadoussac",
    date: "October 2024",
    lat: 48.15, lng: -69.716667,
    emoji: "🇨🇦",
    photo: "https://picsum.photos/seed/tremblant/800/500",
    story: `Decided to go to Tadoussac for the weekend and was it beautiful!! We went whale watching and saw a few belugas. We stays on the dunes the first night and the stas were unbelivable. The view in the morning of the dunes on the St-Lawrence river was breathtaking. For the day, we went to this little town by the fjord called Ste-Rose du Nord (thomas had been already but wanted to show me). It was a beautiful, picturesque town where we also enjoyed some food. For the second night we stayed at the Zec and went to see the chute ... and it is one of the prettyiest whterfalls we have ever seen. It wasnt the easiest to get to but so worth it! We also hicked l'Acropole des draveurs in the Parc national des Hautes-Gorge-de-la-Riviere-Malbaie`
  },
  {
    who: "together",
    title: "Charlevoix",
    date: "October 2024",
    lat: 47.6833329, lng: -70.8499999,
    emoji: "🇨🇦",
    photo: "https://picsum.photos/seed/tremblant/800/500",
    story: `Beautifull fall camping at Parc national des Grands-Jardins for Thanksgiving weekend. We hiked to the summit of Mont du Lac des Cygnes and Mont du Dome and enjoyed the view of the fall colours. It started snowing during our second hike and we had to hike down in the snow, making it very slippery. We dicided to go to Saguenay for a beer instead of being cold in our tent for the rest our the afternoon  (even got to go to Candian tire!!). We decided to forgo our 2 day hickiing trip at the Grand Morios loop and instead head back down to Montreal to enjoy the rest of the weekend together. It was an amazing adventure and are defifetly going again soon!`
  },
  {
  who: "together",
    title: "Reykavik",
    date: "October 2024",
    lat: 64.1355, lng: -21.8954,
    emoji: "🇮🇸",
    photo: ["photos/Reykavik.jpg",
      "photos/Reykavik1.jpg"
    ],
    story: `Decided to go to Tadoussac for the weekend and was it beautiful!! We went whale watching and saw a few belugas. We stays on the dunes the first night and the stas were unbelivable. The view in the morning of the dunes on the St-Lawrence river was breathtaking. For the second night we stayed at the Zec and went to see the chute ... and it is one of the prettyiest whterfalls we have ever seen. It wasnt the easiest to get to but so worth it! We also hicked l'Acropole des draveurs in the Parc national des Hautes-Gorge-de-la-Riviere-Malbaie`
  },
  {
  who: "together",
    title: "Landmannalaugar",
    date: "October 2024",
    lat: 63.9881817, lng: -19.0727105,
    emoji: "🇮🇸",
    photo: ["photos/Landmannalaugar.jpg"],
    story: `Decided to go to Tadoussac for the weekend and was it beautiful!! We went whale watching and saw a few belugas. We stays on the dunes the first night and the stas were unbelivable. The view in the morning of the dunes on the St-Lawrence river was breathtaking. For the second night we stayed at the Zec and went to see the chute ... and it is one of the prettyiest whterfalls we have ever seen. It wasnt the easiest to get to but so worth it! We also hicked l'Acropole des draveurs in the Parc national des Hautes-Gorge-de-la-Riviere-Malbaie`
  },
   {
  who: "together",
    title: "Kerlingarfjoll",
    date: "October 2024",
    lat: 64.6500, lng: -19.2500,
    emoji: "🇮🇸",
    photos: ["photos/Kerlingarfjoll.jpg",
      "photos/Kerlingarfjoll1.jpg",
      "photos/Kerlingarfjoll2.jpg",
      "photos/Kerlingarfjoll3.jpg",
      "photos/Kerlingarfjoll4.jpg",
      "photos/Kerlingarfjoll5.jpg",
      "photos/Kerlingarfjoll6.jpg",
      "photos/Kerlingarfjoll7.jpg",
      "photos/Kerlingarfjoll8.jpg",
      "photos/Kerlingarfjoll9.jpg",
      "photos/Kerlingarfjoll10.jpg"],
    story: `Decided to go to Tadoussac for the weekend and was it beautiful!! We went whale watching and saw a few belugas. We stays on the dunes the first night and the stas were unbelivable. The view in the morning of the dunes on the St-Lawrence river was breathtaking. For the second night we stayed at the Zec and went to see the chute ... and it is one of the prettyiest whterfalls we have ever seen. It wasnt the easiest to get to but so worth it! We also hicked l'Acropole des draveurs in the Parc national des Hautes-Gorge-de-la-Riviere-Malbaie`
  },
  {
  who: "together",
    title: "Svinafellsjökull",
    date: "October 2024",
    lat: 64.6500, lng: -19.2500,
    emoji: "🇮🇸",
    photo: ["photos/Svinafellsjökull.jpg"],
    story: ''
    },
     {
  who: "RoadTrip",
    title: "Iceland",
    date: "October 2024",
    lat: 64.6500, lng: -19.2500,
    emoji: "🇮🇸",
    photo: ["photos/Svinafellsjökull.jpg"],
    story: ''
    },
   {
  who: "RoadTrip",
    title: "Chalevoix",
    date: "October 2024",
    lat: 64.6500, lng: -19.2500,
    emoji: "🇮🇸",
    photo: ["photos/Svinafellsjökull.jpg"],
    story: ''
    },
     {
  who: "Tadoussac",
    title: "Svinafellsjökull",
    date: "October 2024",
    lat: 64.6500, lng: -19.2500,
    emoji: "🇮🇸",
    photo: ["photos/Svinafellsjökull.jpg"],
    story: ''
    },
];


/* =========================================================
   💌 OUR PLACES (only on Thomas's QR code)
   Listed in order. A dashed trail connects them.
   ========================================================= */
const ourPlaces = [
  {
    title: "Where we first met",
    date: "June 2023",
    lat: 45.48561725, lng: -73.5790366,
    zoom: 15,
    emoji: "❤️",
    photo: "https://picsum.photos/seed/cafe/800/500",
    story: `The first time we actually talked to each other and had a conversation (aka New Years doesn't count ;)). We hit it off right away and I didn't want to stop talking to you. I wanted to hear all about your trips and where you were going next. You looked so good in your work clothes and I couldn't get over that you helped Sophia rebuild the apartment that we just visited. We talked for hours evern though it felt like minutes. I was so happy you stayed while everyone else was leaving, we really got to talk and was so happy to get to know you and realize that we love the same things. `
  },
  {
    title: "First date",
    date: "May 2024",
    lat: 45.4952704, lng: -73.5762367,
    zoom: 14,
    emoji: "🍸",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `I can't stress enough how nervous I was here. I was waiting for you trying to act normal, always turning my head towards the door whenverer i heard it open. I was so stressed and then i broke a glass and I got even more stress because i didnt want you to walk in while I was cleaning up glass (it was so embarassing). You were late but I wasn't bothered at all (main reason because I was so stressed AND just broke a glass), but when you said that you broke your glass in the back I was like omg no, and felt really bad for you (omg while writing this I'm realizing that we both broke glass that day, made for eachother). Anyways, The date went so well and i didn't want it to stoip at all so I was so happy when we went to mini golf, and Rolly's for cinnamon buns and then we went back to another bar for beer and food. The night felt like it was passing by so fast and I didn't want it to stop. From this first date I knew that I would want to get to know you so much more!`
  },
  {
    title: "First Kiss",
    date: "May 2024",
    lat: 45.50401240, lng: -73.57161342,
    zoom: 14,
    emoji: "💋",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `After our amazing first date, you walked me to the McGill REM station so i can take the REM back to my car. A good part of the walk there we held hands and it just felt so nice. We finally got to the station and we kissed and I never wanted it to end. It was the best kiss of my life.`
  },
  {
    title: "EcoMuseum",
    date: "May 2024",
    lat: 45.42552358, lng: -73.9348238,
    zoom: 14,
    emoji: "🐻",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `This was one of the best dates ever. We saw so many cute native to Quebec animals and then had Greek food. My favourite animals was definetly the sleepy bear but all of them where so cute! Your pictures here are actually unreal and I can't wait to go back especially to spend more time with the amphibians. I just wish we could hug the animals, I think they would all love us and wouldn't hurt us.`
  },
  {
    title: "When you asked me to be ypur girlfriend",
    date: "May 24th, 2026",
    lat: 45.348642, lng: -73.535353,
    zoom: 14,
    emoji: "❤️",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `One of the best days of my life, when i'm officially part of your life. Just wished I heard you the first time to make it a little more special. YOU make it incredible special with a beautiful flower bouqet that I just needed to dry to have it forever to remind me of this day. Also, this is the same location we both said I love you for the first time, I just don't have a date for that. `
  },
  {
    title: "Most beautiful date while being scared of a racoon",
    date: "May 2024",
    lat: 45.4720, lng: -73.6100,
    zoom: 14,
    emoji: "🦝",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `Another story here.`
  },
  {
    title: "Your mother's wedding",
    date: "September 27th, 2027",
    lat: 45.4720, lng: -73.6100,
    zoom: 14,
    emoji: "💒",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `Another story here.`
  },
  {
    title: "Day apple picking and Pumpkin patch",
    date: "May 2024",
    lat: 45.4720, lng: -73.6100,
    zoom: 14,
    emoji: "🍏",
    photo: "https://picsum.photos/seed/farm/800/500",
    story: `Another story here.`
  },
];

const endingMessage = `Every place on this map is better because you were there.
Here's to all the places we haven't found yet.

Merry Christmas ❤️`;


/* 🗺️ THE MAPS (order = order on the home page)*/
const MAPS = [
  { id: "thomas",   title: "Thomas's trips",   description: "Where he went",          emoji: "📷", who: ["thomas"],   color: PEOPLE.thomas.color },
  { id: "mya",      title: "Mya's trips",      description: "Where she went",         emoji: "🌷", who: ["mya"],      color: PEOPLE.mya.color },
  { id: "together", title: "Trips together",   description: "Where we went together", emoji: "🥾", who: ["together"], color: PEOPLE.together.color },
  { id: "RoadTrip", title: "Road Trip",       description: "Our Road trips", emoji: "🚗", who: ["RoadTrip"], color: PEOPLE.RoadTrip.color },
  { id: "all",      title: "Every trip",       description: "All three maps in one",  emoji: "🗺️", who: ["thomas", "mya", "together", "RoadTrip"], color: "#2c3a30", legend: true },
  { id: "ours",     title: "Our places",       description: "The little spots that are ours", emoji: "🐄", source: "ours", color: OUR_PLACES_COLOR, private: true, trail: true, ending: true }
];


/* =========================================================
   The machinery
   ========================================================= */

const params = new URLSearchParams(location.search);
const isThomas = params.get("k") === SECRET_KEY;
const visibleMaps = MAPS.filter(m => !m.private || isThomas);

const $ = id => document.getElementById(id);
const home = $("home"), mapView = $("mapView"), card = $("card"), ending = $("ending");

function placesFor(m) {
  return m.source === "ours" ? ourPlaces : trips.filter(t => m.who.includes(t.who));
}
function colorFor(m, p) {
  return m.source === "ours" ? OUR_PLACES_COLOR : (PEOPLE[p.who]?.color || "#5e7d5a");
}

/* ---------- Home page ---------- */
if (isThomas) $("homeSub").textContent = "Merry Christmas, Thomas. Pick a map ♡";

visibleMaps.forEach(m => {
  const n = placesFor(m).length;
  const a = document.createElement("a");
  a.href = "#/" + m.id;
  a.className = "map-card" + (m.private ? " private" : "");
  a.style.setProperty("--c", m.color);
  a.innerHTML = `
    <span class="emoji">${m.emoji}</span>
    <span class="text">
      <span class="title">${m.title}</span>
      <span class="desc">${m.description}</span>
    </span>
    ${m.private ? '<span class="tag">Just for you</span>' : ""}`;
  $("mapGrid").appendChild(a);
});

/* ---------- Leaflet map (created once, reused) ---------- */
let map, layer;
function ensureMap() {
  if (map) return;
  map = L.map("map", { zoomControl: false, worldCopyJump: true });
  L.control.zoom({ position: "bottomright" }).addTo(map);
  const style = MAP_STYLES[MAP_STYLE] || MAP_STYLES.topo;
  L.tileLayer(style.url, {
    attribution: style.attribution,
    maxZoom: style.maxZoom
  }).addTo(map);
  layer = L.layerGroup().addTo(map);
}

let activeMap = null, activePlaces = [], markers = [], current = -1;

function openMap(m) {
  activeMap = m;
  activePlaces = placesFor(m);
  current = -1;

  home.classList.add("hidden");
  ending.classList.remove("show");
  mapView.classList.remove("hidden");
  $("mapTitle").textContent = m.title;
  document.title = m.title;

  ensureMap();
  map.invalidateSize();
  layer.clearLayers();
  card.classList.remove("open");

  // Legend (only on the combined map)
  const legend = $("legend");
  legend.classList.toggle("hidden", !m.legend);
  if (m.legend) {
    legend.innerHTML = Object.values(PEOPLE)
      .map(p => `<span><i style="background:${p.color}"></i>${p.label}</span>`).join("");
  }

  // Pins
  markers = activePlaces.map((p, i) => {
    const icon = L.divIcon({
      className: "",
      html: `<div class="pin" style="--c:${colorFor(m, p)}"><span>${p.emoji || "📍"}</span></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40]
    });
    return L.marker([p.lat, p.lng], { icon }).addTo(layer).on("click", () => show(i));
  });

  // Dashed trail (Our Places)
  if (m.trail && activePlaces.length > 1) {
    L.polyline(activePlaces.map(p => [p.lat, p.lng]), {
      color: OUR_PLACES_COLOR, weight: 3, dashArray: "2 10", lineCap: "round", opacity: .8
    }).addTo(layer);
  }

  $("empty").classList.toggle("hidden", activePlaces.length > 0);
  $("tourBtn").classList.toggle("hidden", activePlaces.length === 0);
  fitAll(false);
}

function fitAll(animate) {
  if (!activePlaces.length) { map.setView([45.5, -73.57], 4); return; }
  const b = L.latLngBounds(activePlaces.map(p => [p.lat, p.lng]));
  const opts = { padding: [60, 60], maxZoom: 12 };
  animate ? map.flyToBounds(b, { ...opts, duration: 1.2 }) : map.fitBounds(b, opts);
}

/* ---------- Photo gallery (swipe, arrows or dots) ---------- */
const gallery = $("gallery"), slides = $("slides"), dots = $("dots");

function buildGallery(p) {
  // Accepts photos: [...] or photo: "..." or photo: [...]
  const raw = p.photos || p.photo || [];
  const photos = Array.isArray(raw) ? raw : [raw];
  gallery.classList.toggle("hidden", photos.length === 0);
  gallery.classList.toggle("multi", photos.length > 1);

  slides.innerHTML = "";
  dots.innerHTML = "";
  photos.forEach((src, n) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${p.title} – photo ${n + 1}`;
    img.loading = n === 0 ? "eager" : "lazy";
    img.draggable = false;
    slides.appendChild(img);

    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Photo ${n + 1}`);
    dot.onclick = () => goToPhoto(n);
    dots.appendChild(dot);
  });

  slides.scrollLeft = 0;
  updateGallery();
}

function photoIndex() {
  return slides.clientWidth ? Math.round(slides.scrollLeft / slides.clientWidth) : 0;
}

function goToPhoto(n) {
  slides.scrollTo({ left: n * slides.clientWidth, behavior: "smooth" });
}

function updateGallery() {
  const n = photoIndex(), total = slides.children.length;
  [...dots.children].forEach((d, j) => d.classList.toggle("on", j === n));
  $("gPrev").disabled = n === 0;
  $("gNext").disabled = n >= total - 1;
}

slides.addEventListener("scroll", () => requestAnimationFrame(updateGallery), { passive: true });
$("gPrev").onclick = () => goToPhoto(photoIndex() - 1);
$("gNext").onclick = () => goToPhoto(photoIndex() + 1);

/* ---------- Story card ---------- */
function show(i) {
  current = i;
  const p = activePlaces[i];
  const m = activeMap;

  card.style.setProperty("--c", colorFor(m, p));
   buildGallery(p);

  const who = m.source === "ours" ? "" : PEOPLE[p.who]?.label;
  $("cMeta").textContent = [who, p.date].filter(Boolean).join(" · ");
  $("cTitle").textContent = p.title;
  $("cStory").textContent = p.story;
  $("cCount").textContent = `${i + 1} / ${activePlaces.length}`;

  const last = i === activePlaces.length - 1;
  $("prevBtn").disabled = i === 0;
  $("nextBtn").disabled = last && !m.ending;
  $("nextBtn").textContent = last && m.ending ? "The end ♡" : "Next →";

  markers.forEach((mk, j) => mk.getElement()?.firstChild?.classList.toggle("active", j === i));

  card.querySelector(".body").scrollTop = 0;
  card.classList.add("open");

  // Fly to the pin, nudged up so the card doesn't cover it
  const zoom = p.zoom || 11;
  const offset = Math.min(card.offsetHeight, innerHeight * 0.6) / 2;
  const target = map.unproject(map.project([p.lat, p.lng], zoom).add([0, offset]), zoom);
  map.flyTo(target, zoom, { duration: 1.4 });
}

function closeCard() {
  card.classList.remove("open");
  markers.forEach(mk => mk.getElement()?.firstChild?.classList.remove("active"));
  fitAll(true);
}

$("nextBtn").onclick = () => {
  if (current < activePlaces.length - 1) show(current + 1);
  else if (activeMap.ending) {
    card.classList.remove("open");
    $("endText").textContent = endingMessage;
    ending.classList.add("show");
  }
};
$("prevBtn").onclick = () => current > 0 && show(current - 1);
$("closeBtn").onclick = closeCard;
$("tourBtn").onclick = () => show(0);
$("againBtn").onclick = () => { ending.classList.remove("show"); fitAll(true); };

/* ---------- Simple page switching (#/thomas, #/all, …) ---------- */
function showHome() {
  mapView.classList.add("hidden");
  ending.classList.remove("show");
  home.classList.remove("hidden");
  document.title = "Where We've Been";
}

function route() {
  const id = location.hash.replace("#/", "");
  const m = visibleMaps.find(x => x.id === id);
  m ? openMap(m) : showHome();
}

window.addEventListener("hashchange", route);
route();
