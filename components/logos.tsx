/* eslint-disable @next/next/no-img-element */
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
    <section id="logos" className="overflow-hidden">
      <div className="marquee">
        <div className="track flex gap-4">
          {companies.concat(companies).map((logo, idx) => (
            <img
              key={idx}
              src={`/${logo}`}
              className="object-contain w-24 lg:w-36 drop-shadow-logo"
              alt={logo}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .track {
          display: flex;
          width: calc(
            200%
          ); /* Double the width to accommodate duplicate content */
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
