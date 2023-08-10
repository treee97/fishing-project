import "./globals.css";
import type { Metadata } from "next";
// By using an underscore (_) to name the imported variable, you are effectively telling the linter and compiler that you are intentionally not using the imported value and to ignore any related errors.

//fonts
import { Silkscreen } from "next/font/google";
import kongtext from "next/font/local";
//my components
import Navbar from "@/components/Nav3";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";
import ThemeToggleButton from "@/components/themeToggleBtn";
//next-auth
import { Session } from "next-auth";

const KongText = kongtext({
  src: "./kongtext.ttf",
  weight: "400",
  variable: "--kongtext",
});

const SilkScreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--silkscreen",
});

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
    <html
      lang="en"
      className={`${KongText.variable} ${SilkScreen.variable} font-silkscreen light`}
      style={{ colorScheme: "light" }}
    >
      <body>
        <Provider session={session}>
          <div className="main" />

          <main className="app">
            <Navbar />
            <ThemeToggleButton />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
