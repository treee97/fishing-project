"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavbarContainer, PlayBtn } from "@/styles/Nav";
import openGame from "@/utils/openGame";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
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

	const handleClick = () => {
		openGame();
	};

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

			<div className="sm:flex hidden border-2 w-full items-center justify-between">
				{/* desktop */}
				{session?.user ? (
					<>
						<div className="border-2 flex items-center justify-center w-full gap-6">
							<Link href="/inventory">Home</Link>
							<Link href="/inventory">Inventory</Link>
							<PlayBtn onClick={handleClick}>PLAY</PlayBtn>
							<Link href="/marketplace">Marketplace</Link>
							<Link href="/inventory">About</Link>
						</div>
						<div className=" border-2 flex flex-col justify-center items-center ml-4">
							<Image
								src={session?.user.image || "/assets/images/fish.svg"}
								width={37}
								height={37}
								className="rounded-full"
								alt="profile"
							/>
							<button type="button" onClick={() => signOut()} className="ml-2">
								Sign Out
							</button>
						</div>
					</>
				) : (
					<>
						<div className="w-full flex items-center justify-center">
							<PlayBtn onClick={handleClick} className="gradient__text">
								PLAY
							</PlayBtn>
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
					</>
				)}
			</div>

			{/* mobile */}
			<div className="sm:hidden flex relative items-center justify-center">
				{session?.user ? (
					<>
						<Image
							src={session?.user.image || "/assets/images/fish.svg"}
							width={37}
							height={37}
							className="rounded-full cursor-pointer"
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
						<div className=" flex border-2 w-full items-center justify-center">
							<PlayBtn className="gradient__text">PLAY</PlayBtn>
						</div>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => {
										signIn(provider.id);
									}}
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
