import Link from "next/link";
import Footer from "@/components/footer";

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({
  title,
  intro,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <main className="w-full mx-auto max-w-screen-2xl">
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
            {title}
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
            {intro}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>

          <div className="mt-10 space-y-10">{children}</div>

          <div className="mt-12 pt-8 border-t border-white/30">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        {heading}
      </h2>
      <div className="space-y-4 text-gray-400 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5 list-disc text-gray-400">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
