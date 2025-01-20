"use client";

import Features from "../components/Features";
import CTASection from "../components/CTASection";
import HowItWorks from "@/components/How";
import Logos from "@/components/logos";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import RequestQuote from "@/components/RequestQuote";

export default function LandingPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      {/* <Hero /> */}
      <iframe
        src={
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/"
            : "https://drone-scene-chi.vercel.app/"
        }
        className="w-full h-[500px] bg-transparent"
      ></iframe>
      <Features />
      <HowItWorks />

      <Logos />
      <CTASection />
      <BlogSection />
      <Testimonials />
      <RequestQuote />
    </main>
  );
}
