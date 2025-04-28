/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "motion/react";

const steps = [
  {
    number: "1",
    title: "Free Assessment",
    description:
      "We analyze your building's requirements and provide a custom cleaning plan.",
  },
  {
    number: "2",
    title: "Drone Cleaning",
    description:
      "Our drones execute the cleaning process safely and efficiently.",
  },
  {
    number: "3",
    title: "Post-Cleaning Inspection",
    description:
      "We conduct a thorough inspection to ensure exceptional results.",
  },
];

export default function HowItWorks() {
  return (
    <motion.div
      id="how"
      className="relative  py-10 sm:py-16 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="max-w-2xl  mt-4 text-base text-gray-400 leading-relaxed md:text-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A seamless process from start to finish, designed for efficiency and
            excellence
          </motion.p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-52 top-2 md:block md:px-28 lg:px-40">
            <img
              alt=""
              loading="lazy"
              width="1000"
              height="500"
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0  h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
        style={{
          background:
            "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)",
        }}
      />
    </motion.div>
  );
}
