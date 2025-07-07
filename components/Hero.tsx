"use client";
import React from "react";
import { motion } from "motion/react";
import Scene2 from "./3d/Scene-2";
import { useInView } from "react-intersection-observer";
// import DroneCanvas from "./droneModel";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

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
          ref={ref}
          className="w-full  flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {inView && (
            <div className="w-full h-[45vh] xl:h-[65vh] ">
              <Scene2 />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
