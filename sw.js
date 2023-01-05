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

document.addEventListener("DOMContentLoaded", function () {
  var status = document.getElementById("status");

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    status.className = condition;
    status.innerHTML = condition.toUpperCase();
  }
  document.addEventListener("online", updateOnlineStatus);
  document.addEventListener("offline", updateOnlineStatus);
});
