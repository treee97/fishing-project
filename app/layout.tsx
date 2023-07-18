import "./globals.css";
import type { Metadata } from "next";

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
		//aqui BACKGROUND. SERA EL MISMO EN TODAS LAS PAGINAS. PODEMOS PONER 100VW AND 100 WH FOR THE BACKGR0UND

		<html lang="en">
			<body>
				<Provider session={session}>
					<Nav />

					<div className="main">
						<div className="gradient" />
					</div>
					<main className="app">{children}</main>
				</Provider>
			</body>
		</html>
	);
}
