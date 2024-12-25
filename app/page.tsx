import Features from "../components/Features";
import { Button } from "@/components/ui/button";
import CTASection from "../components/CTASection";
import DroneCanvas from "../components/droneModel";
export default function LandingPage() {
  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                  Revolutionary Drone Building Cleaning Solutions
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Experience the future of building maintenance with our
                  advanced drone cleaning technology. Safer, faster, and more
                  efficient than traditional methods.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-950"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <DroneCanvas />
          </div>
        </div>
      </section>
      <Features />
      <CTASection />
    </main>
  );
}
