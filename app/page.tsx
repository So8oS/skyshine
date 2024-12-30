import Features from "../components/Features";
import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import HowItWorks from "@/components/How";
export default function LandingPage() {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <Hero />
      <Features />
      <HowItWorks />

      <CTASection />
    </main>
  );
}
