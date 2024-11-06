let installPromptEvent;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default mini-infobar or install prompt
  event.preventDefault();
  // Save the event for later use
  installPromptEvent = event;

  // Show your custom install button (e.g., a button that says "Install")
  document.getElementById("installButton").style.display = "block";
});

document.getElementById("installButton").addEventListener("click", () => {
  // Show the install prompt
  installPromptEvent.prompt();

  // Handle the outcome of the user's choice
  installPromptEvent.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    // Reset the event so it can be triggered again if necessary
    installPromptEvent = null;
  });
});
