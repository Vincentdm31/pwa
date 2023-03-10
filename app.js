document.addEventListener("DOMContentLoaded", () => {
  registerServiceWorker();
});

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "https://vincentdm31.github.io/pwa/sw.js",
        {
          scope: "https://vincentdm31.github.io/pwa/",
        }
      );
      if (registration.installing) {
        console.log("Installation du service worker en cours");
      } else if (registration.waiting) {
        console.log("Service worker installé");
      } else if (registration.active) {
        console.log("Service worker actif");
      }
    } catch (error) {
      console.error(`L'enregistrement a échoué : ${error}`);
    }
  }
};

function updateOnlineStatus() {
  const status = document.getElementById("status");

  var condition = navigator.onLine ? "online" : "offline";

  status.className = condition;
  status.innerHTML = condition.toUpperCase();
}
updateOnlineStatus();
window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
