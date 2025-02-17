import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SkyShine",
  description: "make your building shine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} flex flex-col  bg-gradient-to-b from-slate-950 to-slate-900 `}
      >
        <Navbar />
        <div className="min-h-screen  mx-auto max-w-screen-2xl w-full flex flex-col items-center justify-center ">
          {children}
        </div>
      </body>
    </html>
  );
}
