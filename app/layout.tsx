import type { Metadata } from "next";
import "./globals.css";

import { cn, constructMetadata } from "@/lib/utils";
import { gtFont } from "@/lib/fonts";
import ToasterProvider from "@/providers/ToastProvider";

import type { Viewport } from "next";

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  themeColor: "#fffef4",
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
