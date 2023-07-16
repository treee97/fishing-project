"use client";

import Link from "next/link";
import Image from "next/image";
import { NavbarContainer } from "@/styles/Nav";

{
  /* <GiDoubleFish /> */
}

const Nav = () => {
  return (
    <NavbarContainer>
      <div className="flex items-center justify-around border-2 border-rose-500">
        <Link href="/">
          <Image
            src="/assets/images/fish.svg"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="flex items-center justify-between border-2 border-rose-500 ">
        <Link href="/inventory"> Inventory</Link>
        <Link
          href="/play"
          className="font-semibold px-8 bg-neutral-500 border-2"
        >
          PLAY
        </Link>
        <Link href="/marketplace"> Marketplace</Link>
      </div>

      <div className="flex items-center justify-around border-2 border-rose-500 ">
        <Link href="/login">Login</Link> |{" "}
        <Link href="/register">Register</Link>
      </div>
    </NavbarContainer>
  );
};

export default Nav;
