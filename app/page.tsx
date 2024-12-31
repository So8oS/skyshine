"use client";

import Features from "../components/Features";
import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import HowItWorks from "@/components/How";
import Logos from "@/components/logos";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import RequestQuote from "@/components/RequestQuote";

export default function LandingPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <Hero />
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
