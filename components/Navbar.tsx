/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
// import CustomDrawer from "./Drawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`px-4 lg:px-6 h-16 flex items-center border-white/10 relative sticky top-0 z-50 py-2 bg-background/60 backdrop-blur shadow-md transition-all duration-500 ${
        isScrolled ? "bg-black border-b  bg-opacity-90 backdrop-blur-sm" : ""
      }`}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4 justify-between mx-auto max-w-screen-2xl w-full ">
        <Link href="/" className="flex items-center space-x-2 pr-4">
          <img src="/skyshinelogowhite.png" alt="logo" className="h-8 w-8" />
          {/* <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            SkyShine
          </span> */}
        </Link>
        {/* <ul className="hidden lg:flex gap-4 sm:gap-6">
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-400 transition-colors text-white"
          >
            Contact
          </Link>
        </ul> */}
      </div>
      {/* <div className="flex items-center space-x-4 lg:hidden">
        <CustomDrawer />
      </div> */}
    </motion.nav>
  );
};

export default Navbar;
