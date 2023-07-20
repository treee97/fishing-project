"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarContainer, PlayBtn } from "@/styles/Nav";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

{
	/* <GiDoubleFish /> */
}

const Nav = () => {
	const { data: session } = useSession();
	// const router = useRouter();
	const [providers, setProviders] = useState<null | unknown>(null);
	const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

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

			<div className="sm:flex hidden w-full border-2 border-yellow-400">
				{/* desktop */}
				{session?.user ? (
					<div className="flex  border-2 border-lime-50">
						{/*  items-center justify-between   w-full */}
						<div className="border-2 gap-3 md:gap-5 border-red-500 ">
							{/* gap-3 md:gap-5  */}
							<Link href="/inventory">Inventory</Link>
							<PlayBtn href="/play">PLAY</PlayBtn>
							<Link href="/marketplace">Marketplace</Link>
						</div>
						<div className="border-2 border-purple-500 flex flex-col items-center justify-end">
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
					</div>
				) : (
					<>
						<div>
							<PlayBtn href="/play">PLAY</PlayBtn>
						</div>
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
