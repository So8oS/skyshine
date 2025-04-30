"use client";

import Features from "../components/Features";
import HowItWorks from "@/components/How";
// import BlogSection from "@/components/BlogSection";
import RequestQuote from "@/components/RequestQuote";
// import GalleryComponent from "@/components/GalleryComponent";
import Hero from "@/components/Hero";
import Footer from "@/components/footer";
export default function LandingPage() {
  return (
    <main className="w-full  ">
      <iframe
        src={
          process.env.NODE_ENV === "development"
            ? "http://localhost:3000/"
            : "https://drone-scene-chi.vercel.app/"
        }
        className="w-full lg:h-[93dvh]  h-[75vh] 3xl:h-[95dvh] "
      ></iframe>
      <Hero />
      <Features />
      <HowItWorks />
      {/* <GalleryComponent /> */}
      {/* <BlogSection /> */}
      <RequestQuote />
      <Footer />
    </main>
  );
}
