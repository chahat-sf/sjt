"use client";

import { motion } from "framer-motion";

const apps = [
  "Power Utilities",
  "Railways",
  "Housing Complexes",
  "Electricity Boards",
  "State Power Corporations",
  "Development Authorities",
];

export default function Applications() {
  return (
    <section
      id="applications"
      className="py-28"
      style={{ backgroundColor: "#F9FAFB" }}
    >
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
          Application Areas
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl"
          style={{ color: "#6B7280" }}
        >
          Our transformers are suitable for a wide range of utility,
          infrastructure, and industrial applications across public and private
          sectors.
        </motion.p>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.22 },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {apps.map((a, i) => (
            <AppCard key={a} title={a} index={i + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- CARD ---------- */

function AppCard({
  title,
  index,
}: {
  title: string;
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
      className="rounded-3xl p-7"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* Icon */}
      <div
        className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(11,94,215,0.10), rgba(47,183,179,0.12))",
          border: "1px solid rgba(11,94,215,0.25)",
        }}
      >
        🏭
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
        Reliable transformer solutions engineered specifically for{" "}
        {title.toLowerCase()}.
      </div>

      {/* Accent */}
      <div
        className="mt-6 h-[3px] w-12 rounded-full"
        style={{ backgroundColor: "#2FB7B3" }}
      />
    </motion.div>
  );
}
