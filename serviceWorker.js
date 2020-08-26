const version = "v2";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/cat1.jpg",
  "/images/cat2.jpg",
  "/images/cat3.jpg",
  "/images/cat4.jpg",
  "/images/cat5.jpg",
  "/images/cat6.jpg",
  "/images/cat7.jpg",
  "/images/cat8.jpg",
  "/images/cat9.jpg"
];

self.addEventListener("install", installEvent => {
  console.log('sw installing');
  installEvent.waitUntil(
    caches.open(version).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  console.log('sw fetch');
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
