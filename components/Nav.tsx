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
			<Link href="/">
				<Image
					src="/assets/images/fish.svg"
					alt="logo"
					width={50}
					height={50}
					className="object-contain"
				/>
			</Link>
			<Link href="/inventory"> Inventory</Link>
			<Link href="/play" className="font-semibold px-8 bg-neutral-500 border-2">
				PLAY
			</Link>
			<Link href="/marketplace"> Marketplace</Link>
			<Link href="/user"> Login</Link>
		</NavbarContainer>
	);
};

export default Nav;
