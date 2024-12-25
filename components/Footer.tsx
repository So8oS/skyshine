import React from "react";
import { Button } from "@/components/ui/button";
import { DrillIcon as Drone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-slate-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Drone className="h-6 w-6 text-blue-400" />
            <span className="font-bold text-white">SkyShine</span>
          </div>
          <p className="text-center text-sm text-gray-300">
            © 2024 SkyShine. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
