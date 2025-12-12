"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 min-h-[100vh] flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/1231.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-sjt-cream/90 to-sjt-teal/60" />

      {/* Content */}
      <div className="relative z-10 container grid md:grid-cols-2 gap-10 items-center mx-auto">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ y: -14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/80 border"
          >
            <span className="text-sjt-teal">ISO 9001:2008</span>
            <span className="text-sjt-grey">•</span>
            <span className="text-sjt-blue">BEE Star Rated</span>
          </motion.div>

          <motion.h1
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 1.4, ease: "easeInOut" }}
            className="mt-4 text-4xl md:text-5xl font-bold leading-tight"
          >
            Manufacturing & Repairing of{" "}
            <span className="text-white">Power</span> &{" "}
            <span className="text-white">Distribution</span> Transformers
          </motion.h1>

          <motion.p
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.85, duration: 1.3, ease: "easeInOut" }}
            className="mt-4 text-sjt-grey max-w-xl"
          >
            All types of transformer manufacturing, winding works, testing and
            repair services—built for reliability, efficiency and compliance.
          </motion.p>

          <motion.div
            initial={{ y: 26, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.05, duration: 1.2, ease: "easeInOut" }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#products"
              className="bg-sjt-teal text-white px-6 py-3 rounded font-semibold hover:opacity-90"
            >
              View Products
            </a>
            <a
              href="#process"
              className="border border-sjt-teal text-sjt-teal px-6 py-3 rounded font-semibold hover:bg-white"
            >
              Manufacturing Process
            </a>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.25 },
              },
            }}
            className="mt-8 grid grid-cols-3 gap-4 text-sm"
          >
            <Stat title="20+ Years" sub="Industry Experience" />
            <Stat title="BIS / IEC" sub="Standards Ready" />
            <Stat title="Routine Tests" sub="QC Verified" />
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/img/trans.jpeg"
              alt="Transformer"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

function Stat({ title, sub }: { title: string; sub: string }) {
  return (
    <motion.div
      variants={{
        hidden: { y: 24, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
      className="rounded-xl bg-white/80 hover:shadow-2xl border p-3 backdrop-blur"
    >
      <div className="font-bold">{title}</div>
      <div className="text-xs text-sjt-grey">{sub}</div>
    </motion.div>
  );
}
