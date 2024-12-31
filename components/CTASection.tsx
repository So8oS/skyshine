/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <motion.h2
            className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ready to Transform Your Building Maintenance?
          </motion.h2>
          <motion.p
            className=" text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Contact us today for a free consultation and demonstration
          </motion.p>
        </div>
        <motion.div
          className="flex flex-col gap-2 min-[400px]:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="inline-block rounded-lg border-none bg-blue-600 text-white font-inherit text-center text-sm shadow-lg w-40 py-2 cursor-pointer hover:bg-blue-700">
            <Link href="/contact">Contact Us</Link>
          </button>
          <button className="inline-block rounded-lg border-none bg-white text-blue-600 font-inherit text-center text-sm shadow-lg w-40 py-2 cursor-pointer hover:bg-slate-100">
            <Link href="/#request-quote">Request a Quote</Link>
          </button>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-400">
            Our services have transformed over 100 buildings worldwide.
          </p>
          <p className="text-gray-400">
            Join our community of satisfied clients today!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
