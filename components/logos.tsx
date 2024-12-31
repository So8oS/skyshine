import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const companies = [
  "rotana.svg",
  "Binghatti.png",
  "rotana.svg",
  "Binghatti.png",
  "Binghatti.png",
  "rotana.svg",
  "Binghatti.png",
];

export default function Logos() {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative pt-6">
          <Marquee className="max-w-full [--duration:40s]">
            {companies.map((logo, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={`/${logo}`}
                className="object-contain w-36 drop-shadow-logo   "
                alt={logo}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
