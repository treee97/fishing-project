"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarContainer } from "@/styles/Nav";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

{
	/* <GiDoubleFish /> */
}

const Nav = () => {
	const { data: session } = useSession();
	// const router = useRouter();
	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		(async () => {
			const res = await getProviders();
			setProviders(res);
		})();
	}, []);

	return (
		<NavbarContainer>
			<div className="flex items-center border-2 border-rose-500">
				<Link href="/">
					<Image
						src="/assets/images/fish.svg"
						alt="logo"
						width={30}
						height={30}
					/>
				</Link>
			</div>

			<div className="sm:flex hidden">
				{/* desktop */}
				{session?.user ? (
					<>
						<div className="flex gap-3 md:gap-5">
							<Link href="/inventory">Inventory</Link>
							<Link
								href="/play"
								className="font-semibold px-8 bg-neutral-500 border-2"
							>
								PLAY
							</Link>
							<Link href="/marketplace">Marketplace</Link>
							<Image
								src={session?.user.image || "/assets/images/fish.svg"}
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
							/>

							<button type="button" onClick={() => signOut()}>
								Sign Out
							</button>
						</div>

						{/* <div className="flex items-center justify-around border-2 border-rose-500 ">
							<Link href="/login">Login</Link> |{" "}
							<Link href="/register">Register</Link>
						</div> */}
					</>
				) : (
					<>
						<Link
							href="/play"
							className="font-semibold px-8 bg-neutral-500 border-2"
						>
							PLAY
						</Link>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
									className="black_btn"
								>
									Sign in
								</button>
							))}
						{/* 1:43min access invalid to google */}
					</>
				)}
			</div>

			{/* mobile */}
			<div className="sm:hidden flex relative">
				{session?.user ? (
					<>
						<Image
							src={session?.user.image || "/assets/images/fish.svg"}
							width={37}
							height={37}
							className="rounded-full"
							alt="profile"
							onClick={() => setToggleDropdown(!toggleDropdown)}
						/>
						{toggleDropdown && (
							<div className="dropdown">
								<Link
									href="/profile"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									My Profile
								</Link>
								<Link
									href="/marketplace"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									MarketPlace
								</Link>
								<Link
									href="/inventory"
									className="dropdown_link"
									onClick={() => setToggleDropdown(false)}
								>
									Inventory
								</Link>
								<button
									type="button"
									className="dropdown_link"
									onClick={() => {
										setToggleDropdown(false);
										signOut();
									}}
								>
									Sign Out
								</button>
							</div>
						)}
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
									// className="black_btn"
								>
									Sign in
								</button>
							))}
					</>
				)}
			</div>
		</NavbarContainer>
	);
};

export default Nav;
