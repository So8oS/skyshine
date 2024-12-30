"use client";

import React from "react";
import { PiDroneBold } from "react-icons/pi";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <nav className="px-4 lg:px-6 h-16 flex items-center justify-between mx-auto max-w-screen-2xl w-full">
      <motion.div
        className="flex items-center space-x-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center space-x-2">
          <PiDroneBold className="h-8 w-8 text-blue-400 animate-spin" />
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            SkyShine
          </span>
        </Link>
      </motion.div>
      <motion.div
        className="flex gap-4 sm:gap-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
        >
          Contact
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
