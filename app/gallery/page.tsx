/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "motion/react";
import React, { useState } from "react";

const images = [
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    alt: "Drone cleaning a high-rise window",
    caption: "High-rise Window Cleaning",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    alt: "Efficient solar panel cleaning",
    caption: "Solar Panel Cleaning",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    alt: "Facade cleaning using advanced drones",
    caption: "Facade Maintenance",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    alt: "Drone inspecting a wind turbine",
    caption: "Wind Turbine Inspection",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    alt: "Drone cleaning a skyscraper",
    caption: "Skyscraper Cleaning",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    alt: "Drone surveying a construction site",
    caption: "Construction Site Survey",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    alt: "Drone monitoring agricultural fields",
    caption: "Agricultural Monitoring",
  },
  {
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    alt: "Drone capturing aerial view of a city",
    caption: "Aerial City View",
  },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: null });

  return (
    <motion.div
      className="py-28 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-10">
        <h2 className=" text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-white">
          Our Work
        </h2>
        <p className="pt-4 mb-8 lg:mb-16 font-light text-center text-gray-300 text-base md:text-lg lg:text-xl">
          Explore the results of our cutting-edge drone cleaning services.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            // @ts-ignore
            onClick={() => setLightbox({ isOpen: true, image: image })}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              className="h-auto max-w-full rounded-lg transition-transform duration-300"
              src={image.src}
              alt={image.alt}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <p className="text-white text-sm md:text-lg">{image.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setLightbox({ isOpen: false, image: null })}
        >
          {lightbox.image && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-full max-h-full rounded-lg"
              src={(lightbox.image as { src: string }).src}
              alt={(lightbox.image as { alt: string }).alt}
            />
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;
