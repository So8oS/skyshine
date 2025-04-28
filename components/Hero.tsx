"use client";
import React from "react";
import { motion } from "motion/react";
// import DroneCanvas from "./droneModel";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container px-4 md:px-6 pt-12 md:pt-24">
      <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
        <div className="flex flex-col  space-y-4">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Revolutionary Drone Building Cleaning Solutions
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-gray-300 md:text-xl"
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
            className="flex flex-col gap-2 min-[400px]:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              href={"#how"}
              className="inline-block rounded-lg border-none bg-blue-600 text-white font-inherit text-center text-sm shadow-lg w-40 py-2 cursor-pointer hover:bg-blue-700"
            >
              Learn More
            </Link>
            {/* <button className="inline-block rounded-lg border-none bg-white text-blue-600 font-inherit text-center text-sm shadow-lg w-40 py-2 cursor-pointer hover:bg-slate-100">
              Learn More
            </button> */}
          </motion.div>
        </div>
        <motion.div className="w-full h-full flex items-center justify-center">
          {/* <DroneCanvas /> */}
          <iframe
            src={
              process.env.NODE_ENV === "development"
                ? "http://localhost:3002/showcase"
                : "https://drone-scene-chi.vercel.app/showcase"
            }
            className="w-full h-[45vh] xl:h-[50vh]   "
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
