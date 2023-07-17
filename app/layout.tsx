import "./globals.css";
import type { Metadata } from "next";

import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
	title: "Fishy RPG",
	description: "A fishing game",
};

export default function RootLayout({
	children,
	session,
}: {
	children: React.ReactNode;
	session?: any;
}) {
	return (
		//aqui BACKGROUND. SERA EL MISMO EN TODAS LAS PAGINAS. PODEMOS PONER 100VW AND 100 WH FOR THE BACKGR0UND

		<html lang="en">
			<body>
				<Provider>
					<main>
						<Nav />
						{children}
					</main>
				</Provider>
			</body>
		</html>
	);
}
