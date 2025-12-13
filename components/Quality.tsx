"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tests = [
  "Insulation Resistance Test",
  "Turns Ratio Test",
  "Impedance Voltage Test",
  "No-Load Loss Measurement",
  "Load Loss Measurement",
  "Leakage Test of Transformer Tank",
  "Impulse Voltage Test (Type Test)",
  "Temperature Rise / Short Circuit Tests (Type Test)",
];

export default function Quality() {
  return (
    <section
      id="quality"
      className="py-28"
      style={{ backgroundColor: "#F6F8E8" }}
    >
      <div className="container px-2 mx-auto grid md:grid-cols-2 gap-14 items-start">

        {/* LEFT: TEST LIST */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{ color: "#1F2937" }}
          >
            Quality Assurance
          </h2>

          <p
            className="mt-5 text-lg md:text-xl max-w-xl"
            style={{ color: "#6B7280" }}
          >
            Components and finished units are tested as per applicable standards.
            Routine and type tests are conducted to ensure safety, performance and
            long-term reliability.
          </p>

          {/* TESTS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.18 },
              },
            }}
            className="mt-8 grid gap-4"
          >
            {tests.map((t) => (
              <TestItem key={t} text={t} />
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: CERTIFICATIONS */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
          }}
        >
          <h3
            className="font-semibold text-2xl"
            style={{ color: "#1F2937" }}
          >
            Certifications & Compliance
          </h3>

          <p
            className="mt-3 text-base md:text-lg"
            style={{ color: "#6B7280" }}
          >
            Our quality systems and products comply with national and
            international standards as applicable.
          </p>

          {/* CERTIFICATION LOGOS */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <LogoBox label="ISO 9001:2008" src="/img/iso.png" />
            <LogoBox label="BEE Rated" src="/img/beelogo.jpeg" />
            <LogoBox label="URS" src="/img/urslogo.webp" />
          </div>

          {/* QUALITY POLICY */}
          <div
            className="mt-8 rounded-2xl p-5"
            style={{
              border: "1px solid #E5E7EB",
              backgroundColor: "#F9FAFB",
            }}
          >
            <div
              className="font-semibold text-lg"
              style={{ color: "#0B5ED7" }}
            >
              Quality Policy
            </div>
            <p
              className="mt-2 text-base"
              style={{ color: "#6B7280" }}
            >
              We are committed to continuous improvement and customer
              satisfaction by strictly complying with Quality Management System
              requirements and industry best practices.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function TestItem({ text }: { text: string }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 22, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex items-start gap-4 rounded-2xl px-5 py-4"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
    >
      <span
        className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full font-bold"
        style={{
          backgroundColor: "rgba(47,183,179,0.15)",
          color: "#2FB7B3",
        }}
      >
        ✓
      </span>

      <span
        className="text-base md:text-lg"
        style={{ color: "#1F2937" }}
      >
        {text}
      </span>
    </motion.div>
  );
}

function LogoBox({
  label,
  src,
}: {
  label: string;
  src: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="aspect-square rounded-2xl grid place-items-center overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
      }}
      title={label}
    >
      <Image
        src={src}
        alt={`${label} certification logo`}
        width={220}
        height={220}
        className="w-full h-full object-contain p-4"
      />
    </motion.div>
  );
}
