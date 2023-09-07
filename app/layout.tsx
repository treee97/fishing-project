import "@/styles/globals.css";
import type { Metadata } from "next";
// By using an underscore (_) to name the imported variable, you are effectively telling the linter and compiler that you are intentionally not using the imported value and to ignore any related errors.

//fonts
import { SilkScreen, KongText } from "@/fonts/fonts";
//my components
import Navbar from "@/components/Nav3";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Provider";
//next-auth
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
    <html
      lang="en"
      className={`${KongText.variable} ${SilkScreen.variable} font-silkscreen light`}
      style={{ colorScheme: "light" }}
    >
      <body>
        <Provider session={session}>
          <div className="main" />
          <main className="app transition duration-500">
            <Navbar />
            {/* <ThemeToggleButton /> */}
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
