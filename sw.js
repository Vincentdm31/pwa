const urlsToCache = ["/", "app.js", "index.css", "cat-48.png", "cat.png"];
self.addEventListener("install", (event) => {
  event.waitUntil(async () => {
    const cache = await caches.open("pwa-assets");
    return cache.addAll(urlsToCache);
  });
});
