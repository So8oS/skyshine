import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Drone Cleaning Technology",
    description:
      "Discover how drones are revolutionizing building maintenance, saving time and costs.",
    image:
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/benefits-of-drone-cleaning",
  },
  {
    id: 2,
    title: "Top 5 Reasons to Choose Drone Cleaning",
    description:
      "Find out why drone cleaning is the future of eco-friendly and efficient building maintenance.",
    image:
      "https://images.unsplash.com/photo-1508566418226-fde6ae1c12dc?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/reasons-to-choose-drone-cleaning",
  },
  {
    id: 3,
    title: "How Drone Cleaning Works",
    description:
      "A step-by-step guide to understanding the technology behind drone-based cleaning.",
    image:
      "https://images.unsplash.com/photo-1520539294759-590f20a6b6e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/blog/how-drone-cleaning-works",
  },
];

const BlogSection = () => {
  return (
    <motion.section
      className="py-12 md:py-24 lg:py-32 rpi"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Latest Insights
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-slate-800 rounded-xl shadow-lg overflow-hidden "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-96 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                <p className="text-gray-300 mt-2">{post.description}</p>
                <Link href={post.link} passHref>
                  <span className="text-blue-400 mt-4 inline-block hover:underline">
                    Read More →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogSection;
