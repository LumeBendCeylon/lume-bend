import Link from "next/link";
import Motif from "@/components/Motif";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-dark px-6 pt-24 text-center">
      <Motif motif="rock" className="absolute bottom-0 left-1/2 h-64 w-[120vw] -translate-x-1/2 text-gold/10" strokeWidth={0.6} />
      <div className="relative">
        <p className="font-display text-7xl text-gold">404</p>
        <h1 className="mt-4 font-display text-3xl text-white">This Path Isn't on the Map</h1>
        <p className="mx-auto mt-4 max-w-md text-white/70">
          The page you're looking for may have moved, or the address may be incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark transition-transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
