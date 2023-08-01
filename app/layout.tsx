import "./globals.css";
import type { Metadata } from "next";
// *!  By using an underscore (_) to name the imported variable, you are effectively telling the linter and compiler that you are intentionally not using the imported value and to ignore any related errors.*/
import { Press_Start_2P, Silkscreen } from "next/font/google";
import kongtext from "next/font/local";
import Head from "next/head";

// import {
//   PiFishSimpleFill,
//   PiFish,
//   PiFishSimpleBold,
//   PiFishDuotone,
//   PiFishSimpleDuotone,
//   PiFishFill,
//   PiFishSimpleLight,
// } from "react-icons/pi";
// import { GiOctopus, GiGiantSquid, GiJellyfish } from "react-icons/gi";
import Nav from "@/components/Nav";
import Nav2 from "@/components/Nav copy";
import Provider from "@/components/Provider";
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

// const Press2Play = Press_Start_2P({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--press2play",
// });

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
      className={`${KongText.variable} ${SilkScreen.variable} font-silkscreen`}
    >
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
          {
            <div className="main">
              <div className="background"></div>
            </div>
          }

          <main>
            <Nav2 />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
