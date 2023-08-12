"use client";
// React-hooks
import { useEffect, useState, useRef } from "react";
//next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
//next-auth
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// assets
import logo_fish from "@/assets/images/golden_fish.png";
import userIcon from "@/assets/icons/icon-user.svg";
//my components
import OpenGameButton from "@/utils/openGame";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<null | unknown>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();

    //if the user logs off we return the session provider state to null
    if (!session) {
      setProviders(null);
    }
  }, [session]);

  return (
    <div className="w-full h-20 flex items-center justify-between px-4 md:px-8 mt-4 md:mt-8">
      {/* primera columna: logo */}
      <Link href="/">
        <Image width={44} height={80} src={logo_fish} alt="fish logo" />
      </Link>

      {session?.user ? (
        <>
          {/*segunda columna: links centrados entre logo y signin */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <div className="flex items-center space-x-4">
              {/* <Link href="/" className="text-light-text text-xl font-normal">
                Home
              </Link> */}
              <Link
                href="marketplace"
                className="text-light-text dark:text-dark-text text-xl font-normal"
              >
                Marketplace
              </Link>
              <OpenGameButton session={session} />
              <Link
                href="inventory"
                className="text-light-text dark:text-dark-text text-xl font-normal"
              >
                Inventory
              </Link>
            </div>
          </div>
          {/* tercera columna: sign in */}
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
              className="text-light-text dark:text-dark-text text-xl font-normal"
              onClick={async () => {
                await signOut();
                router.push("/");
              }}
            >
              Sign
              <br />
              Out
            </button>
          </div>
          {/* mobile menu  when logged*/}
          {/* cuando el elem es >= 768px se esconde, si es mas
          pequeño entonces se vizualiza */}
          <div className="md:hidden">
            <OpenGameButton session={session} />
          </div>
          <NavMobile
            session={session}
            provider={providers}
            className="md:hidden"
          />
        </>
      ) : (
        <>
          <div className="hidden md:flex items-center justify-center gap-4">
            <OpenGameButton session={session} />
          </div>

          {providers &&
            Object.values(providers).map((provider) => (
              <div className="hidden md:flex align-center justify-center text-light-text dark:text-dark-text">
                <Image src={userIcon} alt="user icon" />
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="text-xl font-normal"
                >
                  Sign
                  <br />
                  in
                </button>
              </div>
            ))}

          <div className="md:hidden">
            <OpenGameButton session={session} />
          </div>

          <NavMobile
            session={session}
            provider={providers}
            className="md:hidden"
          />
        </>
      )}
    </div>
  );
};

export default Navbar;
