"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import OpenGameButton from "@/utils/openGame";
import logo_fish from "@/assets/images/golden_fish.png";
import wave from "@/assets/icons/wave_hamburger.svg";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav2 = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<null | unknown>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const handleToggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between px-4 md:px-8 mt-4 md:mt-8">
      {session?.user ? (
        <>
          <Link href="/">
            <Image width={44} height={80} src={logo_fish} alt="fish logo" />
          </Link>

          <div className="flex items-center justify-center gap-4">
            {/* esta oculta hasta que llega a md:flex */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-cyan-950 text-xl font-normal">
                Home
              </Link>
              <Link
                href="marketplace"
                className="text-cyan-950 text-xl font-normal"
              >
                Marketplace
              </Link>
              {/* <Link href="" className="text-slate-300 text-4xl font-normal">PLAY</Link> */}
              <OpenGameButton session={session} />

              <Link
                href="inventory"
                className="text-cyan-950 text-xl font-normal"
              >
                Inventory
              </Link>
              <Link href="about" className="text-cyan-950 text-xl font-normal">
                About
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <Image
              src={session?.user.image || "/assets/images/fish.svg"}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
            <button
              type="button"
              className="text-cyan-950 text-xl font-normal"
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </div>

          {/* mobile viewport */}
          <div className="sm:hidden flex items-center justify-center">
            {/* Hamburger icon */}
            <button
              type="button"
              onClick={handleToggleMobileMenu}
              className="block text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            >
              <Image src={wave} alt="Menu" />
            </button>

            <div className="w-96 h-96 left-[429px] top-[550.30px] absolute origin-top-left -rotate-180 bg-cyan-950 rounded-full" />
            <div className="w-52 h-28 left-[179px] top-[702px] absolute">
              <div className="w-36 h-28 left-0 top-0 absolute bg-cyan-950 rounded-full" />
            </div>
            <div className="origin-top-left -rotate-180 w-52 h-28 left-[345px] top-[143.66px] absolute">
              <div className="w-36 h-28 left-0 top-0 absolute origin-top-left -rotate-180 bg-cyan-950 rounded-full" />
            </div>
            <div className="w-52 h-28 left-[28px] top-[565px] absolute">
              <div className="w-36 h-28 left-0 top-0 absolute bg-cyan-950 rounded-full" />
            </div>
            <div className="left-[179px] top-[255px] absolute flex-col justify-start items-start gap-7 inline-flex">
              <div className="w-24 text-white text-xl font-normal">home</div>
              <div className="text-white text-xl font-normal">Profile</div>
              <div className="text-white text-xl font-normal">marketplace</div>
              <div className="text-white text-xl font-normal">Inventory</div>
              <div className="text-white text-xl font-normal">Sign Out</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Link href="/">
            <Image width={44} height={80} src={logo_fish} alt="fish logo" />
          </Link>

          <OpenGameButton session={session} />
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="text-cyan-950 text-xl font-normal"
              >
                Sign in
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default Nav2;
