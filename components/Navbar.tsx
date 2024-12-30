"use client";

import React from "react";
import { PiDroneBold } from "react-icons/pi";
import Link from "next/link";
import { motion } from "motion/react";
import CustomDrawer from "./Drawer";

const Navbar = () => {
  return (
    <nav
      className={`px-4 lg:px-6 h-16 flex items-center justify-between mx-auto max-w-screen-2xl w-full relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur shadow-md`}
    >
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center space-x-2 pr-4">
          <PiDroneBold className="h-8 w-8 text-blue-400 animate-spin" />
          <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            SkyShine
          </span>
        </Link>
        <motion.ul
          className="hidden lg:flex gap-4 sm:gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
          >
            Contact
          </Link>
        </motion.ul>
      </motion.div>
      <div className="lg:hidden">
        <CustomDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
