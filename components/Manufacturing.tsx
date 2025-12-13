"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Block = {
  title: string;
  desc: string;
  img: string;
};

export default function Manufacturing() {
  const blocks: Block[] = useMemo(
    () => [
      { title: "Core", desc: "CRGO core design to reduce losses and noise.", img: "/img/process/1.webp" },
      { title: "Winding", desc: "Optimized winding design for thermal & electrical performance.", img: "/img/process/12.jpg" },
      { title: "Assembly", desc: "Core-winding assembly with connections & bushings.", img: "/img/process/3.gif" },
      { title: "Vacuum Drying", desc: "Moisture removal to ensure safe insulation performance.", img: "/img/process/4.jpeg" },
      { title: "Tank & Box-Up", desc: "Tank fabrication, fittings, sealing and final assembly.", img: "/img/process/5.webp" },
      { title: "Surface Treatment & Painting", desc: "Shot blasting, primer & final coats for corrosion protection.", img: "/img/process/6.jpg" },
      // { title: "Repairing", desc: "Disassembly, diagnosis, repair, reassembly and testing.", img: "/img/process/repairing.jpg" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const active = blocks[activeIndex];

  /* 🔁 AUTO-PLAY */
  useEffect(() => { 
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blocks.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [blocks.length]);

  return (
    <section id="process" className="py-28 bg-white">
      <div className="container mx-auto px-2">

        <h2 className="font-bold text-4xl md:text-5xl text-[#1F2937]">
          Manufacturing Process
        </h2>

        <p className="mt-5 max-w-3xl text-lg md:text-xl text-[#6B7280]">
          Step-by-step workflow showcasing engineering discipline, quality control,
          and compliance for B2B & PSU buyers.
        </p>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">

          {/* LEFT – ACCORDION */}
          <div className="space-y-4">
            {blocks.map((b, i) => {
              const isOpen = i === activeIndex;

              return (
                <div
                  key={b.title}
                  className="rounded-3xl border bg-white"
                  style={{ borderColor: "#E5E7EB" }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="h-10 w-10 flex items-center justify-center rounded-full font-bold"
                        style={{
                          backgroundColor: isOpen ? "#2FB7B3" : "rgba(47,183,179,0.15)",
                          color: isOpen ? "#fff" : "#2FB7B3",
                        }}
                      >
                        {i + 1}
                      </div>

                      <div>
                        <div className="text-xl font-semibold text-[#0B5ED7]">
                          {b.title}
                        </div>
                        <div className="text-sm text-[#6B7280]">
                          Click to view details
                        </div>
                      </div>
                    </div>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl font-bold text-[#2FB7B3]"
                    >
                      ▾
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-base md:text-lg text-[#6B7280]">
                          {b.desc}
                        </p>

                        <div className="mt-5 h-[3px] w-14 rounded-full bg-[#2FB7B3]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT – IMAGE */}
          <div className="hidden md:block rounded-3xl p-6 border bg-gradient-to-br from-blue-50 to-teal-50">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.img}
                src={active.img}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-h-[56vh] object-cover rounded-2xl"
              />
            </AnimatePresence>

            <div className="mt-6">
              <div className="text-xs font-semibold text-[#6B7280]">
                CURRENT STEP {activeIndex + 1}
              </div>
              <div className="mt-2 text-2xl font-bold text-[#1F2937]">
                {active.title}
              </div>
              <p className="mt-3 text-base md:text-lg text-[#6B7280]">
                {active.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
