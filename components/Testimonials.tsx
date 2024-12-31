/* eslint-disable react/no-unescaped-entities */
import { motion } from "motion/react";
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, CleanTech Inc.",
    feedback:
      "SkyShine's drone cleaning saved us time and reduced costs significantly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Facility Manager, Green Building Solutions",
    feedback:
      "The technology is incredible. Our building facade has never looked better!",
    rating: 4,
  },
  {
    name: "Michael Brown",
    title: "Operations Head, Urban Properties",
    feedback:
      "Fast, efficient, and eco-friendly. SkyShine is a game-changer in building maintenance.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32  text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-slate-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
            <h4 className="text-white font-bold mt-4">{testimonial.name}</h4>
            <p className="text-gray-400">{testimonial.title}</p>
            <div className="flex justify-center mt-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
