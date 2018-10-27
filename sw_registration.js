document.addEventListener("DOMContentLoaded", event => {
  /**
   *     Service Worker registration
   */
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("serviceworker.js")
      .then(registration => console.log("SW registered", registration))
      .catch(e => console.log("Registration failed :(", e));
  }
});
