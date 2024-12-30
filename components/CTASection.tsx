/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Ready to Transform Your Building Maintenance?
          </h2>
          <p className=" text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Contact us today for a free consultation and demonstration
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Contact Us
          </Button>
          <Button
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-950"
          >
            View Services
          </Button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Our services have transformed over 100 buildings worldwide.
          </p>
          <p className="text-gray-400">
            Join our community of satisfied clients today!
          </p>
        </div>
      </div>
    </section>
  );
}
