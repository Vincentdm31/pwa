const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/pwa/",
      "/pwa/index.html",
      "/pwa/index.css",
      "/pwa/app.js",
      "/pwa/cat-48.png",
      "/pwa/cat.png",
    ])
  );
});

self.addEventListener("fetch", () => console.log("fetch"));
