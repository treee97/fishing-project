"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarContainer, PlayBtn } from "@/styles/Nav";
import OpenGameButton from "@/utils/openGame";
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

  // const router = useRouter();

  // const handleClick = () => {
  // 	openGame();
  // };

  return (
    <div className="w-96 h-20 relative">
      <img
        className="w-11 h-20 left-0 top-0 absolute"
        src="https://via.placeholder.com/43x77"
      />
      <div className="w-96 h-14 left-[235px] top-[9px] absolute">
        <div className="left-[641px] top-[19px] absolute text-cyan-950 text-xl font-normal">
          About
        </div>
        <div className="left-[482px] top-[19px] absolute text-cyan-950 text-xl font-normal">
          Inventory
        </div>
        <div className="p-2.5 left-[313.25px] top-0 absolute bg-cyan-950 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-slate-300 text-4xl font-normal">PLAY</div>
        </div>
        <div className="left-[133px] top-[19px] absolute text-cyan-950 text-xl font-normal">
          Marketplace
        </div>
        <div className="left-[35px] top-[19px] absolute text-cyan-950 text-xl font-normal">
          home
        </div>
      </div>
      <div className="h-10 pr-11 left-[1041.50px] top-[18.47px] absolute justify-start items-start gap-1.5 inline-flex">
        <div className="text-cyan-950 text-xl font-normal">
          Register
          <br />
          NOW
        </div>
      </div>
    </div>
  );
};

export default Nav2;
