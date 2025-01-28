/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <motion.section
      className="w-full py-8 sm:py-12 md:py-24 lg:py-32 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center px-4 sm:px-8">
        <div className="space-y-2">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to Transform Your Building Maintenance?
          </motion.h2>
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Contact us today for a free consultation and demonstration
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-2 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="inline-block rounded-xl border-none bg-blue-600 text-white font-inherit text-center text-sm shadow-lg w-40 py-2 cursor-pointer hover:bg-blue-700">
            <Link href="/contact">Contact Us</Link>
          </button>
          <button className="inline-block rounded-xl border-none bg-white text-blue-600 font-inherit text-center text-sm shadow-lg w-40 py-2 cursor-pointer hover:bg-slate-100">
            <Link href="/#request-quote">Request a Quote</Link>
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
