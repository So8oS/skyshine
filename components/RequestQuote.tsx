import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";

interface QuoteFormData {
  buildingName: string;
  floors: number;
  windowCount: number;
  facadeMaterial: string;
  additionalDetails?: string;
  email: string;
}

const RequestQuote = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: QuoteFormData) => {
    setIsLoading(true);
    try {
      // Placeholder for submission logic (e.g., API call or EmailJS)
      console.log("Quote Request Data:", data);

      toast({
        title: "Request Sent",
        description: "We will get back to you with a quote shortly.",
      });

      reset();
    } catch (error) {
      console.error("Error submitting request:", error);
      toast({
        title: "Error",
        description: "Unable to send your request. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="py-12 md:py-24 lg:py-32 text-center"
      id="request-quote"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Request a Quote
        </motion.h2>
        <motion.p
          className="text-gray-300 text-base md:text-lg mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Enter your building details, and we&apos;ll provide a custom quote for
          our services.
        </motion.p>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div>
            <label
              htmlFor="buildingName"
              className="block mb-2 text-sm font-medium text-white text-left pl-1"
            >
              Building Name:
            </label>
            <input
              type="text"
              id="buildingName"
              {...register("buildingName", {
                required: "Building name is required",
              })}
              className="block w-full p-2.5  bg-white  text-black/70 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
              placeholder="e.g., Empire State Building"
            />
            {errors.buildingName && (
              <p className="text-red-500 text-sm">
                {errors.buildingName.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="floors"
              className="block mb-2 text-sm font-medium text-white text-left pl-1"
            >
              Number of Floors:
            </label>
            <input
              type="number"
              id="floors"
              {...register("floors", {
                required: "Number of floors is required",
                min: { value: 1, message: "At least 1 floor is required" },
              })}
              className="block w-full p-2.5  bg-white  text-black/70 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
              placeholder="e.g., 50"
            />
            {errors.floors && (
              <p className="text-red-500 text-sm">{errors.floors.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="facadeMaterial"
              className="block mb-2 text-sm font-medium text-white text-left pl-1"
            >
              Facade Material:
            </label>
            <select
              id="facadeMaterial"
              {...register("facadeMaterial", {
                required: "Facade material is required",
              })}
              className="block w-full p-2.5  bg-white  text-black/70 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl cursor-pointer"
            >
              <option value="">Select Material</option>
              <option value="glass">Glass</option>
              <option value="concrete">Concrete</option>
              <option value="metal">Metal</option>
              <option value="other">Other</option>
            </select>
            {errors.facadeMaterial && (
              <p className="text-red-500 text-sm">
                {errors.facadeMaterial.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="additionalDetails"
              className="block mb-2 text-sm font-medium text-white text-left pl-1"
            >
              Additional Details (optional):
            </label>
            <textarea
              id="additionalDetails"
              rows={4}
              {...register("additionalDetails")}
              className="block w-full p-2.5  bg-white  text-black/70 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
              placeholder="Enter any specific requirements..."
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white text-left pl-1"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="block w-full p-2.5  bg-white  text-black/70 border border-gray-600 focus:ring-blue-500 focus:border-blue-500 rounded-xl"
              placeholder="yourname@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 font-medium  text-black rounded-xl ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-white/90 hover:bg-white/70"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Request Quote"}
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default RequestQuote;
