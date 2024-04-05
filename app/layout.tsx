import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { gtFont } from "@/lib/fonts";
import ToasterProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "Vignesh K | Fullstack Software Developer",
  description:
    "Vignesh develops applications using stacks like Next.JS, Typescript, Node.JS, MongoDB and AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-ownbg font-gt antialiased", gtFont.variable)}>
        <div className="z-[110]">
          <ToasterProvider />
        </div>
        {children}
      </body>
    </html>
  );
}
