"use client";
import {
  Drawer,
  DrawerContent,
  //   DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
import { PiDroneBold } from "react-icons/pi";

export const CustomDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <SlMenu className="h-6 w-6 text-blue-400 " />
      </DrawerTrigger>
      <DrawerContent className="bg-background/60 backdrop-blur shadow-md">
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <Link href="/" className="flex items-center space-x-2 pr-4">
            <PiDroneBold className="h-8 w-8 text-blue-400 animate-spin" />
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              SkyShine
            </span>
          </Link>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex flex-col gap-4 sm:gap-6">
            <DrawerClose asChild>
              <Link
                href="/gallery"
                className="text-sm font-medium text-blue-400 transition-colors "
              >
                Gallery
              </Link>
            </DrawerClose>
            <DrawerClose asChild>
              <Link
                href="/contact"
                className="text-sm font-medium text-blue-400 transition-colors "
              >
                Contact
              </Link>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
