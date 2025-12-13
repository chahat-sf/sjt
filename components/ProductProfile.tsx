"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Low Maintenance", desc: "Designed for reliable, long service life" },
  { title: "High Surge Withstand", desc: "Better handling of transients & surges" },
  { title: "Energy Efficient", desc: "Optimized for lower losses & performance" },
  { title: "Minimum Losses", desc: "Improved efficiency across operations" },
];

export default function ProductProfile() {
  return (
    <section
      id="products"
      className="py-28 linear-gradient(90deg, #2FB7B3, #0B5ED7 px-2"
  style={{
        background: "linear-gradient(90deg, #2FB7B3, #0B5ED7)",
      }}    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl"
          style={{ color: "#fff" }}
        >
          Product Profile
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl text-gray-200"
        >
          Power & distribution transformers engineered using high-quality
          laminations, copper/aluminium conductors and advanced insulation
          systems to meet demanding industrial applications.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-4"
        >
          {items.map((x, i) => (
            <FeatureCard key={x.title} {...x} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CARD ---------- */

function FeatureCard({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
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
      className="rounded-3xl p-6"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* Icon */}
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold"
        style={{
          backgroundColor: "rgba(47,183,179,0.15)",
          color: "#2FB7B3",
        }}
      >
        ⚡
      </div>

      {/* Title */}
      <div
        className="text-xl font-semibold"
        style={{ color: "#0B5ED7" }}
      >
        {title}
      </div>

      {/* Description */}
      <div
        className="mt-2 text-base"
        style={{ color: "#6B7280" }}
      >
        {desc}
      </div>

      {/* Accent line */}
      <div
        className="mt-5 h-[3px] w-10 rounded-full"
        style={{ backgroundColor: "#2FB7B3" }}
      />
    </motion.div>
  );
}
