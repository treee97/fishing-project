// utils/openGame.js

import { useState } from "react";
import { Session } from "next-auth";

interface OpenGameButtonProps {
  session: Session | null; // Explicitly define the type for the session prop
}

const OpenGameButton = ({ session }: OpenGameButtonProps) => {
  const [gameWindow, setGameWindow] = useState<Window | null>(null);
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
    <div className="w-full flex items-center justify-center">
      <div
        className="p-2 bg-dark-background dark:bg-light-background flex items-center cursor-pointer border-radius-8"
        onClick={openGame}
      >
        <button className="text-dark-text dark:text-light-text text-4xl font-normal">
          PLAY
        </button>
      </div>
    </div>
  );
};

export default OpenGameButton;
