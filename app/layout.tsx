import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
});
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "SkyShine",
  description: "Make your building shine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} flex flex-col bg-black `}
      >
        <Navbar />
        <div className="min-h-screen  mx-auto max-w-screen-2xl w-full flex flex-col items-center justify-center ">
          {children}
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
