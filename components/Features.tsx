"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Sparkles, Timer, Building } from "lucide-react";
import { motion } from "motion/react";
import { PiDroneBold } from "react-icons/pi";

const featuresList = [
  {
    title: "Advanced Technology",
    description:
      "State-of-the-art drones equipped with high-pressure cleaning systems for optimal results",
    icon: PiDroneBold,
  },
  {
    title: "Safe & Efficient",
    description:
      "Reduces risks associated with traditional cleaning methods while increasing efficiency",
    icon: Shield,
  },
  {
    title: "Time-Saving",
    description:
      "Complete large-scale cleaning projects in a fraction of the time",
    icon: Timer,
  },
  {
    title: "Cost-Effective",
    description:
      "Minimize operational costs while maximizing cleaning effectiveness",
    icon: Building2,
  },
  {
    title: "Eco-Friendly",
    description:
      "Environmentally conscious cleaning solutions with reduced water consumption",
    icon: Sparkles,
  },
  {
    title: "Versatile Applications",
    description: "Suitable for windows, facades, roofs, and solar panels",
    icon: Building,
  },
];

function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Why Choose SkyShine?
            </h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our cutting-edge drone technology revolutionizes building
              maintenance
            </p>
          </motion.div>
        </div>
        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8 mt-12">
          {featuresList.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0 }}
              // whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="relative overflow-hidden bg-slate-800/50 border-slate-800">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
                <div className="absolute inset-0 border border-blue-500/20 rounded-lg"></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
