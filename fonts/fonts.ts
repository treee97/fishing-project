import { Silkscreen } from "next/font/google";
import kongtext from "next/font/local";

export const KongText = kongtext({
  src: "./kongtext.ttf",
  weight: "400",
  variable: "--kongtext",
});

export const SilkScreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--silkscreen",
});
