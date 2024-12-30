"use client";
import {
  Drawer,
  DrawerContent,
  //   DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  //   DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
import { PiDroneBold } from "react-icons/pi";

export default function CustomDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <SlMenu className="h-6 w-6 text-blue-400 " />
      </DrawerTrigger>
      <DrawerContent className="bg-background/60 backdrop-blur shadow-md">
        <DrawerHeader>
          <Link href="/" className="flex items-center space-x-2 pr-4">
            <PiDroneBold className="h-8 w-8 text-blue-400 animate-spin" />
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              SkyShine
            </span>
          </Link>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex flex-col gap-4 sm:gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-blue-400 transition-colors "
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-blue-400 transition-colors "
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-blue-400 transition-colors "
            >
              Contact
            </Link>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
