document.addEventListener("keydown", function(event) {
    const pressedKeyElement = document.getElementById("pressed-key");
    pressedKeyElement.textContent = `You pressed the ${event.key} key!`;
});