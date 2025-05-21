import Metadata from "next/types";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
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
        className={`${roboto.variable} ${roboto.variable} flex flex-col bg-black `}
      >
        <Navbar />
        <div className="min-h-screen  mx-auto max-w-screen-2xl w-full flex flex-col items-center justify-center ">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
