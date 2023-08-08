import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import userIcon from "@/assets/icons/icon-user.svg";

const MobileNavMenu = ({
  session,
  providers,
  showMobileMenu,
  handleToggleMobileMenu,
}) => {
  if (showMobileMenu) {
    return (
      <div className="w-96 h-96 left-[429px] top-[550.30px] absolute origin-top-left -rotate-180 bg-cyan-950 rounded-full">
        {/* Other menu items */}
        <div className="left-[179px] top-[255px] absolute flex-col justify-start items-start gap-7 inline-flex">
          <Link href="/" className="w-24 text-white text-xl font-normal">
            Home
          </Link>
          {session?.user ? (
            <>
              <Link href="profile" className="text-white text-xl font-normal">
                Profile
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
      </div>
    );
  }

  return null;
};

export default MobileNavMenu;
