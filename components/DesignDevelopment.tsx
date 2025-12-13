"use client";

import { motion } from "framer-motion";

const steps = [
  { t: "Design & R&D", d: "Continuous improvement & standards alignment" },
  { t: "Material Selection", d: "Quality inputs for better performance" },
  { t: "Manufacturing", d: "Controlled fabrication & assembly process" },
  { t: "Testing", d: "Routine checks to validate reliability" },
];

export default function DesignDevelopment() {
  return (
    <section
      id="design"
      className="py-28"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="container mx-auto px-2">

        {/* Heading */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-bold text-4xl md:text-5xl"
          style={{ color: "#1F2937" }}
        >
          Design & Development
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-lg md:text-xl"
          style={{ color: "#6B7280" }}
        >
          Our development process focuses on quality enhancement, efficient
          engineering design, and consistent production practices aligned with
          industry standards.
        </motion.p>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="relative mt-16 grid gap-8 md:grid-cols-4"
        >
          {/* Connecting line (desktop only) */}
          <div
            className="absolute top-10 left-0 right-0 hidden md:block"
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, #2FB7B3 0%, #0B5ED7 100%)",
            }}
          />

          {steps.map((s, i) => (
            <StepCard key={s.t} step={i + 1} title={s.t} desc={s.d} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- STEP CARD ---------- */

function StepCard({
  step,
  title,
  desc,
}: {
  step: number;
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
      whileHover={{ y: -8 }}
      className="relative z-10 rounded-3xl p-6"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      {/* Step Badge */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg"
        style={{
          backgroundColor: "#2FB7B3",
          color: "#FFFFFF",
        }}
      >
        {step}
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
        className="mt-6 h-[3px] w-12 rounded-full"
        style={{ backgroundColor: "#2FB7B3" }}
      />
    </motion.div>
  );
}
