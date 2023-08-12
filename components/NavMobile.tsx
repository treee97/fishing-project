//React-hooks
import { useState, useEffect } from "react";
//next hooks
import Image from "next/image";
import Link from "next/link";
//next-auth
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Session } from "next-auth";
//next-theme
//assets
import wave from "@/assets/icons/wave_hamburger.svg";
//my components
import OpenGameButton from "@/utils/openGame";

export interface IMenuProps {
  session: Session | null;
  provider: any;
  //   handleToggleMobile: () => void;
  className: string;
}

const NavMobile = ({ session, provider, className }: IMenuProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className={className}>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowMenu(true)}
            className="block"
          >
            <Image src={wave} alt="Menu" />
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
