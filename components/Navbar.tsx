"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DrillIcon as Drone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between mx-auto max-w-screen-2xl w-full">
      <div className="flex items-center space-x-2">
        <Drone className="h-8 w-8 text-blue-400" />
        <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          SkyShine
        </span>
      </div>
      <nav className="hidden md:flex gap-4 sm:gap-6">
        <Button variant="link" className="text-blue-400 hover:text-blue-300">
          Services
        </Button>
        <Button variant="link" className="text-blue-400 hover:text-blue-300">
          About
        </Button>
        <Button variant="link" className="text-blue-400 hover:text-blue-300">
          Contact
        </Button>
      </nav>
      <Button
        variant="ghost"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            <Button
              variant="link"
              className="text-blue-400 hover:text-blue-300"
            >
              Services
            </Button>
            <Button
              variant="link"
              className="text-blue-400 hover:text-blue-300"
            >
              About
            </Button>
            <Button
              variant="link"
              className="text-blue-400 hover:text-blue-300"
            >
              Contact
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
