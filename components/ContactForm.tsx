"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
  terms: boolean;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject || "No subject",
          message: data.message,
        },
        publicKey
      );

      toast({
        title: "Message sent",
        description: "We will get back to you as soon as possible",
      });

      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "An error occurred",
        description: "Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="Contact"
      className="py-8 lg:py-16 px-5 lg:p-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-white">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 text-base md:text-lg lg:text-xl">
        Got a technical issue? Want to know more about our products and
        services? Any general inquiries? Let us know
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-white"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="shadow-sm bg-gray-950 border border-gray-600 text-white text-sm md:text-base lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.name.message?.toString()}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-white"
          >
            Email:
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
            className="shadow-sm bg-gray-950 border border-gray-600 text-white text-sm md:text-base lg:text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Johndoe@email.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-white"
          >
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="block p-3 w-full text-sm md:text-base lg:text-lg text-white bg-gray-950 rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="05XXXXXXXX"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-white"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className="block p-3 w-full text-sm md:text-base lg:text-lg text-white bg-gray-950 rounded-lg border border-gray-600 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Nature of inquiry"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-white"
          >
            Your message:
          </label>
          <textarea
            id="message"
            rows={6}
            {...register("message", { required: "Message is required" })}
            className="block p-2.5 w-full text-sm md:text-base lg:text-lg text-white bg-gray-950 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message.message?.toString()}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="terms"
            className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-white"
          >
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required: "You must agree to the terms and conditions",
              })}
              className="mr-2"
            />
            I agree with the terms and conditions set by Data Bridge
          </label>
          {errors.terms && (
            <p className="text-sm text-red-500 mt-1">
              {errors.terms.message?.toString()}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className={`py-3 px-8 text-sm md:text-base lg:text-lg font-medium text-center rounded-lg  self-center ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white text-black hover:bg-opacity-90"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </motion.section>
  );
};

export default ContactForm;
