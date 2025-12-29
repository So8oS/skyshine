/* eslint-disable @next/next/no-img-element */
import { motion } from "motion/react";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"; // Adjust the import path as necessary

const media = [
  {
    type: "image",
    src: "drone2.jpg",
    alt: "drone",
    caption: "",
  },
    {
    type: "image",
    src: "drone3.mp4",
    alt: "drone",
    caption: "",
  },
  {
    type: "video",
    src: "drone.mp4",
    alt: "drone",
    caption: "",
  },
];

const GalleryComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // Set initial slide when modal opens
  useEffect(() => {
    if (api && isModalOpen) {
      api.scrollTo(selectedIndex);
    }
  }, [api, isModalOpen, selectedIndex]);

  // Add carousel navigation handlers
  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    api?.scrollPrev();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    api?.scrollNext();
  };

  return (
    <motion.div
      className="lg:py-28 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-white">
          Gallery
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-2 sm:px-4">
        {media.map((item, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer w-full sm:w-1/2 md:w-1/3"
            onClick={() => {
              setSelectedIndex(index);
              setIsModalOpen(true);
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {item.type === "image" ? (
              <img
                className="h-64 sm:h-80 md:h-96 w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                src={item.src}
                alt={item.alt}
              />
            ) : (
              <div className="relative">
                <video
                  className="h-64 sm:h-80 md:h-96 w-full object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
                  src={item.src}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.732z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
              <p className="text-white text-xs sm:text-sm md:text-lg font-semibold">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal with Carousel */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={(e) => {
            // Only close if clicking on backdrop (not carousel content)
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <Carousel setApi={setApi} opts={{ startIndex: selectedIndex }}>
            <CarouselContent>
              {media.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center items-center"
                >
                  {item.type === "image" ? (
                    <img
                      className="h-auto w-96 rounded-lg"
                      src={item.src}
                      alt={item.alt}
                    />
                  ) : (
                    <video
                      className="h-auto w-96 rounded-lg"
                      src={item.src}
                      controls
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <p className="text-white text-sm md:text-lg">
                      {item.caption}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious onClick={handlePrevious} />
            <CarouselNext onClick={handleNext} />
          </Carousel>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryComponent;
