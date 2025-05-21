"use client";
import React from "react";
import { motion } from "motion/react";
// import DroneCanvas from "./droneModel";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen px-0 md:px-0 bg-black w-full"
      id="hero"
    >
      <div className="w-full flex flex-col items-center justify-center text-center space-y-8 px-2">
        <motion.div
          className="space-y-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="w-full text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Revolutionary Drone Cleaning Solutions
          </motion.h1>
          <motion.p
            className="w-full text-gray-300 md:text-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Experience the future of building maintenance with our advanced
            drone cleaning technology. Safer, faster, and more efficient than
            traditional methods.
          </motion.p>
        </motion.div>

        <motion.div
          className="w-full  flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <iframe
            src={
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/showcase-2"
                : "https://drone-scene-chi.vercel.app/showcase-2  "
            }
            className="w-full h-[45vh] xl:h-[65vh] "
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
