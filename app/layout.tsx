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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "SkyShine | Make your building shine",
    template: "%s - SkyShine",
  },
  description: "SkyShine - make your building shine.",
  keywords:
    "drone cleaning, building facade cleaning, high-rise window cleaning, drone maintenance, SkyShine UAE, automated cleaning, drone technology, building maintenance, exterior cleaning, solar panel cleaning, roof cleaning, drone services",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "SkyShine | Make your building shine",
    description:
      "Drone cleaning services for high-rise buildings, solar panels, and more.",
    images: ["./opengraph-image.png"],
  },
  alternates: {
    canonical: "https://www.skyshine.ae/",
    languages: {
      en: "https://www.skyshine.ae",
      "x-default": "https://www.skyshine.ae",
    },
  },
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
