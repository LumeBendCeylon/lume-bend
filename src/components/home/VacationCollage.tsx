import Image from "next/image";
import { Link } from "@/i18n/navigation";

const PHOTOS = {
  tall: { src: "/documents/destination image/sigiriya.jpg", alt: "Sigiriya Rock Fortress" },
  wide: { src: "/documents/destination image/mirissa.jpg", alt: "Mirissa coastline" },
  topRight: { src: "/documents/destination image/sinharaja.jpg", alt: "Sinharaja rainforest" },
  bottomRight: { src: "/documents/destination image/ella.jpg", alt: "Ella hill country" },
};

function Photo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        quality={70}
        className="object-cover"
      />
    </div>
  );
}

export default function VacationCollage() {
  return (
    <section className="bg-forest-dark py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Photo {...PHOTOS.tall} className="aspect-[3/4]" />
            <Photo {...PHOTOS.wide} className="aspect-[16/9]" />
          </div>
          <div className="mt-10 flex flex-col gap-4">
            <Photo {...PHOTOS.topRight} className="aspect-[4/5]" />
            <Photo {...PHOTOS.bottomRight} className="aspect-[4/5]" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
            Here&apos;s what makes a journey perfect for you
          </h2>
          <span className="mt-4 block h-0.5 w-24 bg-gold" />
          <p className="mt-6 max-w-lg leading-relaxed text-white/70">
            Whether you are planning a family holiday, a romantic escape or an
            adventurous wildlife journey, every Lume Bend Ceylon itinerary is
            built around you. From misty tea hills and ancient cities to quiet
            southern beaches, we handle every detail so you simply enjoy the
            island.
          </p>
          <Link
            href="/plan"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark transition-colors hover:bg-gold-light"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}