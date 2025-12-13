"use client";

import { motion } from "framer-motion";

export default function BeeRating() {
  return (
    <section className="py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="rounded-3xl p-8"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
          }}
        >
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{ color: "#1F2937" }}
          >
            BEE Star Rating
          </h2>

          <p
            className="mt-5 text-lg md:text-xl"
            style={{ color: "#6B7280" }}
          >
            Transformers can be supplied with BEE Star Rating compliance,
            demonstrating superior energy efficiency and reduced operating
            losses as per applicable norms.
          </p>

          {/* BENEFITS */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.22 } },
            }}
            className="mt-8 space-y-4"
          >
            <Benefit text="Improved operational efficiency" />
            <Benefit text="Lower energy losses and running cost" />
            <Benefit text="Clear compliance visibility for buyers" />
          </motion.ul>
        </motion.div>

        {/* RIGHT VISUAL */}
      {/* RIGHT VISUAL */}
<motion.div
  initial={{ x: 60, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
  viewport={{ once: true }}
  className="relative rounded-3xl p-8 overflow-hidden"
  // style={{
  //   background:
  //     "linear-gradient(135deg, rgba(11,94,215,0.10), rgba(47,183,179,0.12))",
  //   border: "1px solid #E5E7EB",
  // }}
>
  {/* Floating effect */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    className="aspect-[4/3]  flex items-center justify-center p-6"
    // style={{
    //   backgroundColor: "#FFFFFF",
    //   border: "1px solid #E5E7EB",
    //   boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    // }}
  >
    <img
      src="/img/starrating.jpg"
      alt="BEE Star Rating certification for energy efficient transformers"
      className="max-h-full max-w-full object-contain"
    />
  </motion.div>
</motion.div>


      </div>
    </section>
  );
}

/* ---------- SUB COMPONENT ---------- */

function Benefit({ text }: { text: string }) {
  return (
    <motion.li
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex items-start gap-4"
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
    </motion.li>
  );
}
