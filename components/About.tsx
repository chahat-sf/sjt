"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: "#F6F8E8" }}
    >
      <div className="container grid md:grid-cols-2 gap-14 items-start mx-auto">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{ color: "#1F2937" }}
          >
            About Us
          </h2>

          <p
            className="mt-6 text-lg md:text-xl leading-relaxed"
            style={{ color: "#6B7280" }}
          >
            Shri Jagadamba Transformers manufactures and repairs power &amp;
            distribution transformers with a focus on durability, safety and
            compliance. Our processes support routine and type tests as per
            relevant standards to ensure reliable performance.
          </p>

          {/* BULLETS */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
            className="mt-8 space-y-5"
          >
            <Bullet text="BIS / IEC aligned processes and testing discipline" />
            <Bullet text="High efficiency designs with low losses" />
            <Bullet text="Customization support as per customer requirements" />
          </motion.ul>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
          }}
        >
          <h3
            className="font-semibold text-2xl"
            style={{ color: "#1F2937" }}
          >
            Quick Highlights
          </h3>

          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            <InfoCard
              title="Manufacturing"
              desc="Power & distribution transformers"
            />
            <InfoCard
              title="Repairing"
              desc="Overhaul, testing & servicing"
            />
            <InfoCard
              title="Winding Works"
              desc="Precision winding processes"
            />
            <InfoCard
              title="Quality"
              desc="Routine checks & QC assurance"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function Bullet({ text }: { text: string }) {
  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex gap-4 text-base md:text-lg"
    >
      <span
        className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold"
        style={{
          backgroundColor: "rgba(47,183,179,0.15)",
          color: "#2FB7B3",
        }}
      >
        ✓
      </span>
      <span style={{ color: "#1F2937" }}>{text}</span>
    </motion.li>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-xl p-5"
      style={{
        border: "1px solid #E5E7EB",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div
        className="font-semibold text-lg"
        style={{ color: "#0B5ED7" }}
      >
        {title}
      </div>
      <div
        className="mt-1 text-sm md:text-base"
        style={{ color: "#6B7280" }}
      >
        {desc}
      </div>
    </motion.div>
  );
}
