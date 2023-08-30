"use client";

//react hook
import { useState, useEffect } from "react";
//next-theme
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      className={`fixed z-50 bottom-4 right-4 p-2 rounded-full ${
        resolvedTheme === "dark"
          ? "text-light-text bg-light-background"
          : "text-dark-text bg-dark-background"
      } transition duration-500`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "light" : "dark"}
    </button>
  );
};

export default ThemeToggleButton;
