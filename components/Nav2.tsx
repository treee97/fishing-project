"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import OpenGameButton from "@/utils/openGame";
import logo_fish from "@/assets/images/golden_fish.png";
import wave from "@/assets/icons/wave_hamburger.svg";
import userIcon from "@/assets/icons/icon-user.svg";
import MobileNavMenu from "./MobileNavMenu";
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

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event: any) => {
      // Close the mobile menu if the click occurs outside the menu
      // if (
      //   showMobileMenu &&
      //   mobileMenuRef.current &&
      //   !mobileMenuRef.current.contains(event.target)
      // ) {
      //   setShowMobileMenu(false);
      // }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showMobileMenu]);

  const handleToggleMobileMenu = () => {
    return setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className="w-full h-20 flex items-center justify-between px-4 md:px-8 mt-4 md:mt-8">
      <Link href="/">
        <Image width={44} height={80} src={logo_fish} alt="fish logo" />
      </Link>

      {/* ​‌‍‌𝗜𝗙 𝗨𝗦𝗘𝗥 𝗜𝗦 𝗟𝗢𝗚𝗚𝗘𝗗 𝗜𝗡 =>​ */}

      {session?.user ? (
        <>
          <div className="flex items-center justify-center gap-4">
            {/*this is hidden by default but can be seen from 768px or bigger */}
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

          <div className="hidden md:flex items-center justify-around">
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

          {/* MOBILE VIEWPORT WHEN USER IS LOGGED IN*/}
          <div className="hidden sm:flex items-center justify-center">
            <button
              type="button"
              onClick={handleToggleMobileMenu}
              className="block text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            >
              <Image src={wave} alt="Menu" />
            </button>

            {showMobileMenu && (
              <>
                <div className="w-96 h-96 left-[429px] top-[550.30px] absolute origin-top-left -rotate-180 bg-cyan-950 rounded-full" />
                {/* <div className="w-52 h-28 left-[179px] top-[702px] absolute">
                  <div className="w-36 h-28 left-0 top-0 absolute bg-cyan-950 rounded-full" />
                </div> */}
                {/* <div className="origin-top-left -rotate-180 w-52 h-28 left-[345px] top-[143.66px] absolute">
                  <div className="w-36 h-28 left-0 top-0 absolute origin-top-left -rotate-180 bg-cyan-950 rounded-full" />
                </div> */}
                {/* <div className="w-52 h-28 left-[28px] top-[565px] absolute">
                  <div className="w-36 h-28 left-0 top-0 absolute bg-cyan-950 rounded-full" />
                </div> */}
                <div className="left-[179px] top-[255px] absolute flex-col justify-start items-start gap-7 inline-flex">
                  <Link
                    href="/"
                    className="w-24 text-white text-xl font-normal"
                  >
                    Home
                  </Link>
                  <Link
                    href="profile"
                    className="text-white text-xl font-normal"
                  >
                    Profile
                  </Link>
                  <Link
                    href="marketplace"
                    className="text-white text-xl font-normal"
                  >
                    Marketplace
                  </Link>
                  <Link
                    href="inventory"
                    className="text-white text-xl font-normal"
                  >
                    Inventory
                  </Link>

                  {/* esta o no signeado conditional rendering */}
                  {session?.user ? (
                    <>
                      <div
                        className="text-white text-xl font-normal cursor-pointer"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </div>
                    </>
                  ) : (
                    <>
                      {/* esto nunca se ve porque no tenemos menu desplegable de momento. pondriamos wave aqui pero solo tenemos el sign out. */}
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
              </>
            )}
          </div>
        </>
      ) : (
        // WHEN THE USER IS NOT LOGGED IN
        <>
          <div className="hidden sm:flex items-center justify-center">
            <button
              type="button"
              onClick={handleToggleMobileMenu}
              className="block text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:outline-none"
            >
              <Image src={wave} alt="Menu" />
            </button>

            {showMobileMenu && (
              <>
                <div className="w-96 h-96 left-[429px] top-[550.30px] absolute origin-top-left -rotate-180 bg-cyan-950 rounded-full" />

                <div className="flex-col justify-start items-start gap-7 inline-flex">
                  {/* esta o no signeado conditional rendering */}
                  {session?.user ? (
                    <>
                      <Link
                        href="/"
                        className="w-24 text-white text-xl font-normal"
                      >
                        Home
                      </Link>
                      <Link
                        href="profile"
                        className="text-white text-xl font-normal"
                      >
                        Profile
                      </Link>
                      <Link
                        href="marketplace"
                        className="text-white text-xl font-normal"
                      >
                        Marketplace
                      </Link>
                      <Link
                        href="inventory"
                        className="text-white text-xl font-normal"
                      >
                        Inventory
                      </Link>
                      <div
                        className="text-white text-xl font-normal cursor-pointer"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/"
                        className="w-24 text-white text-xl font-normal"
                      >
                        Home
                      </Link>
                      {/* esto nunca se ve porque no tenemos menu desplegable de momento. pondriamos wave aqui pero solo tenemos el sign out. */}
                      {providers &&
                        Object.values(providers).map((provider) => (
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
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Nav2;
