"use client";

import { motion } from "framer-motion";

const images = Array.from({ length: 6 }).map((_, i) => ({
  title: `Transformer ${i + 1}`,
  subtitle: "Capacity / Type / Key Specs",
  // later you can add: src: `/img/gallery/${i + 1}.jpg`
}));

export default function Gallery() {
  return (
    <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl"
          style={{ color: "#1F2937" }}
        >
          Product Gallery
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl"
          style={{ color: "#6B7280" }}
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
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {images.map((img, i) => (
            <GalleryCard key={img.title} img={img} index={i + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CARD ---------- */

function GalleryCard({
  img,
  index,
}: {
  img: { title: string; subtitle: string };
  index: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      whileHover={{ y: -8 }}
      className="rounded-3xl overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* IMAGE */}
      <div className="relative group aspect-[4/3] overflow-hidden">
        {/* Replace this div with <img src={img.src} /> later */}
        <div className="absolute inset-0 grid place-items-center bg-gray-100 text-sm"
             style={{ color: "#6B7280" }}>
          Image Placeholder
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        />

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
        <div
          className="text-lg font-semibold"
          style={{ color: "#0B5ED7" }}
        >
          {img.title}
        </div>
        <div
          className="mt-1 text-sm"
          style={{ color: "#6B7280" }}
        >
          {img.subtitle}
        </div>

        {/* Accent */}
        <div
          className="mt-4 h-[3px] w-12 rounded-full"
          style={{ backgroundColor: "#2FB7B3" }}
        />
      </div>
    </motion.div>
  );
}
