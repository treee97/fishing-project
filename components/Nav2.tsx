"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { NavbarContainer, PlayBtn } from "@/styles/Nav";
import OpenGameButton from "@/utils/openGame";
import logo_fish from "@/assets/images/golden_fish.png";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav2 = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<null | unknown>(null);
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className="w-full h-20 flex items-center justify-between px-4 md:px-8 mt-4 md:mt-8">
      <Image width={44} height={80} src={logo_fish} alt="fish logo" />

      <div className="flex items-center gap-4">
        <div className="hidden md:flex space-x-4">
          <div className="text-cyan-950 text-xl font-normal">Home</div>
          <div className="text-cyan-950 text-xl font-normal">Marketplace</div>
          <div className="p-2.5 bg-cyan-950 rounded-lg flex items-center">
            <div className="text-slate-300 text-4xl font-normal">PLAY</div>
          </div>
          <div className="text-cyan-950 text-xl font-normal">Inventory</div>
          <div className="text-cyan-950 text-xl font-normal">About</div>
        </div>
      </div>

      <div className="text-cyan-950 text-xl font-normal">
        Register
        <br />
        NOW
      </div>
    </div>
  );
};

export default Nav2;
