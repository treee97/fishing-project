import "./globals.css";
import type { Metadata } from "next";

import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Fishy RPG",
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
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
