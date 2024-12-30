import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PiDroneBold } from "react-icons/pi";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Contact Our Drone Team
      </h1>
      <div className="max-w-md mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <PiDroneBold className="text-6xl text-white animate-spin" />
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Your Name
            </label>
            <Input
              id="name"
              placeholder="E.g. John Doe"
              className="bg-slate-700 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="example@example.com"
              className="bg-slate-700 text-white"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Please type your message here"
              className="bg-slate-700 text-white"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </Button>
        </form>
      </div>
      <p className="text-center mt-8 text-gray-400">
        Our team is ready to receive your message.
      </p>
    </div>
  );
}
