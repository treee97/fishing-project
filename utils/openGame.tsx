let gameWindow: Window | null = null; // Store the game window reference

const openGame = () => {
  const gamePath = "/play/index.html";

  // If the game window is already open, focus on it
  if (gameWindow && !gameWindow.closed) {
    gameWindow.focus();
  } else {
    // Otherwise, open the game in a new window and store the reference
    gameWindow = window.open(gamePath, "_blank");
  }
};

export default openGame;
