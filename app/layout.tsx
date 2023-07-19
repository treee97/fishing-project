import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

import {
	PiFishSimpleFill,
	PiFish,
	PiFishSimpleBold,
	PiFishDuotone,
	PiFishSimpleDuotone,
	PiFishFill,
	PiFishSimpleLight,
} from "react-icons/pi";
import { GiOctopus, GiGiantSquid, GiJellyfish } from "react-icons/gi";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { Session } from "next-auth";

export const metadata: Metadata = {
	title: "Fishy RPG",
	description: "A fishing game",
};

export default function RootLayout({
	children,
	session,
}: {
	children: React.ReactNode;
	session?: Session | undefined;
}) {
	return (
		<html lang="en">
			<Head>
				{/* <link
					href="https://api.fontshare.com/v2/css?f[]=pally@400,700,500&display=swap"
					rel="stylesheet"
				/> */}
				<link
					href="https://api.fontshare.com/v2/css?f[]=kola@400&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Provider session={session}>
					<div className="main">
						<div className="background">
							<span>{<PiFishSimpleFill fontSize={50} />}</span>
							<span>{<PiFish fontSize={50} />}</span>
							<span>{<PiFishFill fontSize={50} />}</span>
							<span>{<GiGiantSquid fontSize={80} />}</span>
							<span>{<PiFishSimpleFill fontSize={70} />}</span>
							<span>{<PiFishSimpleFill fontSize={50} />}</span>
							<span>{<PiFishSimpleLight fontSize={50} />}</span>
							<span>{<PiFishSimpleLight fontSize={100} />}</span>
							<span>{<PiFishFill fontSize={50} />}</span>
							<span>{<PiFishFill fontSize={50} />}</span>
							<span>{<GiJellyfish fontSize={150} />}</span>
							<span>{<PiFishSimpleFill fontSize={50} />}</span>
							<span>{<GiOctopus fontSize={80} />}</span>
							<span>{<PiFishSimpleDuotone fontSize={50} />}</span>
							<span>{<PiFishSimpleDuotone fontSize={50} />}</span>
							<span>{<PiFishDuotone fontSize={50} />} </span>

							<span>{<PiFishSimpleBold fontSize={50} />}</span>
							<span>{<PiFishSimpleBold fontSize={50} />}</span>
							<span>{<PiFishSimpleBold fontSize={50} />}</span>
						</div>
					</div>
					<main className="app">
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}
