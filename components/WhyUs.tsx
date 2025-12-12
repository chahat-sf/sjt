"use client";

import { motion } from "framer-motion";

const points = [
  { t: "Quick Response", d: "Fast query handling and professional coordination" },
  { t: "Timely Delivery", d: "Planned production schedules & dispatch support" },
  { t: "Competitive Pricing", d: "Cost-effective solutions without quality compromise" },
  { t: "After-Sales Support", d: "Reliable service, repair & technical assistance" },
  { t: "Customized Transformers", d: "Designed & built as per client requirements" },
];

export default function WhyUs() {
  return (
    <section
      className="py-28"
      style={{
        background: "linear-gradient(90deg, #2FB7B3, #0B5ED7)",
      }}
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl text-white"
        >
          Why Choose Us
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          Built on trust, performance, and compliance — our processes are aligned
          to meet the expectations of PSU, utility, and industrial buyers.
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
          className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {points.map((p, i) => (
            <Card key={p.t} title={p.t} desc={p.d} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CARD COMPONENT ---------- */

function Card({
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
      className="rounded-3xl p-6 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
      }}
    >
      {/* Number badge */}
      <div
        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold"
        style={{
          backgroundColor: "#FFFFFF",
          color: "#0B5ED7",
        }}
      >
        {index + 1}
      </div>

      <div className="text-xl font-semibold text-white">
        {title}
      </div>

      <div
        className="mt-2 text-sm md:text-base"
        style={{ color: "rgba(255,255,255,0.85)" }}
      >
        {desc}
      </div>
    </motion.div>
  );
}
