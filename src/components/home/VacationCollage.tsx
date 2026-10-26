import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

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

export default async function VacationCollage() {
  const t = await getTranslations("Home.collage");

  const PHOTOS = {
    tall: { src: "/documents/destination image/sigiriya.jpg", alt: t("alts.sigiriya") },
    wide: { src: "/documents/destination image/mirissa.jpg", alt: t("alts.mirissa") },
    topRight: { src: "/documents/destination image/sinharaja.jpg", alt: t("alts.sinharaja") },
    bottomRight: { src: "/documents/destination image/ella.jpg", alt: t("alts.ella") },
  };

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
            {t("title")}
          </h2>
          <span className="mt-4 block h-0.5 w-24 bg-gold" />
          <p className="mt-6 max-w-lg leading-relaxed text-white/70">
            {t("text")}
          </p>
          <Link
            href="/plan"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-medium tracking-wide text-forest-dark transition-colors hover:bg-gold-light"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}