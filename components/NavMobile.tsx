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

export interface IMenuProps {
  session: Session | null;
  provider: any;
  //   handleToggleMobile: () => void;
  className: string;
}

const NavMobile = ({ session, provider, className }: IMenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <div className={className}>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowMenu(true)}
            className="block"
          >
            <Image
              src={
                resolvedTheme === "dark"
                  ? "./assets/icons/wave_hamburger-light.svg"
                  : "./assets/icons/wave_hamburger.svg"
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
              <div className="flex-col absolute justify-start items-start gap-7 inline-flex">
                <Link className="text-white text-xl font-normal" href="/">
                  Home
                </Link>
                <Link
                  className="text-white text-xl font-normal"
                  href="marketplace"
                >
                  Marketplace
                </Link>
                <Link
                  className="text-white text-xl font-normal"
                  href="inventory"
                >
                  Inventory
                </Link>
                <button
                  type="button"
                  className="text-white text-xl font-normal"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <div className="flex-col absolute justify-start items-start gap-7 inline-flex">
                  <Link className="text-white text-xl font-normal" href="/">
                    Home
                  </Link>
                  {provider &&
                    Object.values(provider).map((provider: any) => (
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => {
                          signIn(provider.id);
                        }}
                        className="text-white text-xl font-normal"
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
