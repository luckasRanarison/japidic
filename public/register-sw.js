function registerServiceWorker() {
  try {
    navigator.serviceWorker.register("/sw.js", { scope: "./" });
  } catch (error) {
    console.error(`Failed to register service workder ${error}`);
  }
}

if ("serviceWorker" in navigator) {
  registerServiceWorker();
} else {
  console.error("Service workers are not supported.");
}
