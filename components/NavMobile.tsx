"use client";
//React-hooks
import { useState, useEffect } from "react";
//next hooks
import Image from "next/image";
import Link from "next/link";
//next-auth
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
//next-theme
import { useTheme } from "next-themes";
import { CgClose } from "react-icons/cg";
import waveHamburgerDark from "public/assets/icons/wave_hamburger-light.svg";
import waveHamburgerLight from "public/assets/icons/wave_hamburger.svg";
import ThemeToggleButton from "./themeToggleBtn";

export interface IMenuProps {
  session: Session | null;
  provider: any;
  className: string;
}

const NavMobile = ({ session, provider, className }: IMenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    // Cleanup the effect
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [showMenu]);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);

    // Toggle the scroll lock on body
    if (!showMenu) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  return (
    <>
      <div className={className}>
        <div className="flex items-center justify-between">
          <button type="button" onClick={toggleMenu} className="block">
            <Image
              src={
                resolvedTheme === "dark"
                  ? waveHamburgerDark
                  : waveHamburgerLight
              }
              alt="Menu"
              width="0"
              height="0"
              className="w-full h-auto"
            />
          </button>
        </div>
        {showMenu && (
          <>
            {session?.user ? (
              <div className="flex flex-col fixed top-0 right-0 items-center justify-center w-4/5 h-screen gap-7 bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text">
                <div>
                  <CgClose
                    className="cursor-pointer w-8 h-8 absolute top-8 right-8"
                    onClick={() => setShowMenu(false)}
                  />
                </div>
                <Link
                  className=" text-xl font-normal"
                  href="/"
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </Link>
                <Link
                  className="text-xl font-normal"
                  href="marketplace"
                  onClick={() => setShowMenu(false)}
                >
                  Marketplace
                </Link>
                <Link
                  className=" text-xl font-normal"
                  href="inventory"
                  onClick={() => setShowMenu(false)}
                >
                  Inventory
                </Link>
                <button
                  type="button"
                  className="text-xl font-normal"
                  onClick={() => {
                    signOut();
                    setShowMenu(false);
                  }}
                >
                  Sign Out
                </button>
                <div className="absolute bottom-4 right-4">
                  <ThemeToggleButton />
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col fixed top-0 right-0 items-center justify-center w-4/5 h-screen gap-7 bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text">
                  <div>
                    <CgClose
                      className="cursor-pointer w-8 h-8 absolute top-8 right-8"
                      onClick={() => setShowMenu(false)}
                    />
                  </div>
                  <Link
                    className="text-xl font-normal"
                    href="/"
                    onClick={() => setShowMenu(false)}
                  >
                    Home
                  </Link>
                  {provider &&
                    Object.values(provider).map((provider: any) => (
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                          setShowMenu(false);
                        }}
                        className="text-xl font-normal"
                      >
                        Sign in
                      </button>
                    ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NavMobile;
