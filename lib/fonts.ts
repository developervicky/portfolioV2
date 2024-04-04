import localFont from "next/font/local";

export const gtFont = localFont({
  src: [{ path: "../public/fonts/gt.otf", style: "normal" }],
  variable: "--font-gt",
});
