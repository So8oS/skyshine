"use client";

import Features from "../components/Features";
import HowItWorks from "@/components/How";
import RequestQuote from "@/components/RequestQuote";
import Hero from "@/components/Hero";
import Footer from "@/components/footer";
import GalleryComponent from "@/components/GalleryComponent";
import InteractiveScene from "@/components/3d/InteractiveScene";
import { useProgress } from "@react-three/drei";
import { PiDroneBold } from "react-icons/pi";
import localFont from "next/font/local";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const font = localFont({
  src: "../app/fonts/PressStart2P-Regular.ttf",
  variable: "--font-press-start-2p",
});

export default function LandingPage() {
  const { progress } = useProgress();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  return (
    <main className="w-full mx-auto max-w-screen-2xl ">
      <div
        ref={ref}
        className="relative w-full lg:h-[93dvh] h-[75vh] 3xl:h-[95dvh] self-center flex justify-center mx-auto max-w-screen-2xl no-select"
      >
        {progress < 100 && inView && (
          <div className="absolute inset-0 flex justify-center items-center  bg-black">
            <div className="flex flex-col items-center gap-2">
              <PiDroneBold className="text-white text-4xl animate-spin" />
              <p
                className={`text-white font-semibold animate-pulse text-xs ${font.variable}`}
                style={{ fontFamily: font.style.fontFamily }}
              >
                Loading
              </p>
            </div>
          </div>
        )}

        {inView && progress === 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full w-full"
          >
            <InteractiveScene />
          </motion.div>
        )}
      </div>

      <Hero />
      <Features />
      <HowItWorks />
      <GalleryComponent />
      <RequestQuote />
      <Footer />
    </main>
  );
}
