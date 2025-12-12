"use client";

import { motion } from "framer-motion";

const blocks = [
  { title: "Core", desc: "CRGO core design to reduce losses and noise." },
  { title: "Winding", desc: "Optimized winding design for thermal & electrical performance." },
  { title: "Assembly", desc: "Core-winding assembly with connections & bushings." },
  { title: "Vacuum Drying", desc: "Moisture removal to ensure safe insulation performance." },
  { title: "Tank & Box-Up", desc: "Tank fabrication, fittings, sealing and final assembly." },
  { title: "Surface Treatment & Painting", desc: "Shot blasting, primer & final coats for corrosion protection." },
  { title: "Repairing", desc: "Disassembly, diagnosis, repair, reassembly and testing." },
];

export default function Manufacturing() {
  return (
    <section id="process" className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
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
          Manufacturing Process
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl"
          style={{ color: "#6B7280" }}
        >
          A brochure-aligned end-to-end manufacturing workflow showcasing
          engineering discipline, quality control, and compliance for
          B2B & PSU buyers.
        </motion.p>

        {/* PROCESS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.22 },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {blocks.map((b, i) => (
            <ProcessCard
              key={b.title}
              index={i + 1}
              title={b.title}
              desc={b.desc}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PROCESS CARD ---------- */

function ProcessCard({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { y: 40, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      whileHover={{ y: -6 }}
      className="relative rounded-3xl p-7"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* Step Number */}
      <div
        className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg shadow"
        style={{
          backgroundColor: "#2FB7B3",
          color: "#FFFFFF",
        }}
      >
        {index}
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div
          className="text-2xl font-semibold"
          style={{ color: "#0B5ED7" }}
        >
          {title}
        </div>

        <span
          className="text-xs font-semibold px-3 py-1 rounded-full"
          style={{
            backgroundColor: "rgba(47,183,179,0.12)",
            color: "#2FB7B3",
            border: "1px solid rgba(47,183,179,0.25)",
          }}
        >
          Process Step
        </span>
      </div>

      {/* Description */}
      <p
        className="mt-3 text-base md:text-lg"
        style={{ color: "#6B7280" }}
      >
        {desc}
      </p>

      {/* Accent Line */}
      <div
        className="mt-6 h-[3px] w-14 rounded-full"
        style={{ backgroundColor: "#2FB7B3" }}
      />
    </motion.div>
  );
}
