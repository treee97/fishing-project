// utils/openGame.js

import { useState } from "react";
import { useSession } from "next-auth/react";

const OpenGameButton = () => {
  const [gameWindow, setGameWindow] = useState<Window | null>(null);
  const { data: session } = useSession();
  const gamePath = "/play/index.html";

  const openGame = () => {
    // Check if the user is authenticated
    if (!session?.user) {
      // User is not logged in, show an error message or redirect to the login page
      alert("You must be logged in to play the game.");
      // Optionally, you can redirect to the login page
      // window.location.href = "/login";
      return;
    }

    // If the game window is already open, focus on it
    if (gameWindow && !gameWindow.closed) {
      gameWindow.focus();
    } else {
      // Otherwise, open the game in a new window and store the reference
      const newGameWindow = window.open(gamePath, "_blank");
      setGameWindow(newGameWindow);
    }
  };

  return (
    <button onClick={openGame}>
      Play Game
    </button>
  );
};

export default OpenGameButton;
