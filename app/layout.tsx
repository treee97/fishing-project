import "./globals.css";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Fishi RPG",
	description: "A fishing game",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		//aqui BACKGROUND. SERA EL MISMO EN TODAS LAS PAGINAS. PODEMOS PONER 100VW AND 100 WH FOR THE BACKGR0UND

		<html lang="en">
			<body className={inter.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
