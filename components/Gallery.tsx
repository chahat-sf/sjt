"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    title: "Power Transformer",
    subtitle: "High efficiency | Utility grade",
    src: "/img/gallery/11.png",
  },
  {
    title: "Distribution Transformer",
    subtitle: "Low loss | Outdoor installation",
    src: "/img/gallery/12.png",
  },
  {
    title: "Compact Substation",
    subtitle: "Industrial applications",
    src: "/img/gallery/13.png",
  },
  {
    title: "Oil Cooled Transformer",
    subtitle: "BIS / IEC compliant",
    src: "/img/gallery/14.png",
  },
  {
    title: "Repair & Servicing Unit",
    subtitle: "Overhaul & testing",
    src: "/img/gallery/15.png",
  },
  {
    title: "Custom Built Transformer",
    subtitle: "As per client requirement",
    src: "/img/gallery/16.png",
  },
];

export default function Gallery() {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-2">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl text-[#1F2937]"
        >
          Product Gallery
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl text-[#6B7280]"
        >
          A visual overview of our transformer range manufactured and serviced
          for utilities, infrastructure, and industrial applications.
        </motion.p>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {images.map((img) => (
            <GalleryCard key={img.title} img={img} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CARD ---------- */

function GalleryCard({
  img,
}: {
  img: { title: string; subtitle: string; src: string };
}) {
  return (
    <motion.div
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      whileHover={{ y: -8 }}
      className="rounded-3xl overflow-hidden border bg-white"
    >
      {/* IMAGE */}
      <div className="relative group aspect-[4/3] overflow-hidden">
        <Image
          src={img.src}
          alt={img.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 "
          sizes="(max-width: 768px) 100vw, 33vw "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition duration-500" />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="text-white text-lg font-semibold">
            {img.title}
          </div>
          <div className="text-white/80 text-sm">
            {img.subtitle}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-5">
        <div className="text-lg font-semibold text-[#0B5ED7]">
          {img.title}
        </div>
        <div className="mt-1 text-sm text-[#6B7280]">
          {img.subtitle}
        </div>

        <div className="mt-4 h-[3px] w-12 rounded-full bg-[#2FB7B3]" />
      </div>
    </motion.div>
  );
}
