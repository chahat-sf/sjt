"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">

      {/* TOP ACCENT LINE */}
      <div className="h-[4px] w-full bg-gradient-to-r from-sjt-teal to-sjt-blue" />

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/img/1231.jpg')" }}
      />

      {/* MAIN FOOTER CONTENT */}
      <div className="container mx-auto py-16 px-3 grid gap-12 md:grid-cols-3 text-base relative z-10">

        {/* COLUMN 1 — BRAND */}
        <div>
          <div className="w-[200px] h-[100px]">
            <img
              src="/img/logo1.png"
              alt="Shri Jagadamba Transformers logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-2 text-2xl font-bold text-sjt-dark">
            Shri Jagadamba Transformers
          </div>

          <p className="mt-4 text-sjt-grey leading-relaxed max-w-sm">
            Manufacturer & repairer of power and distribution transformers,
            delivering reliable, standards-compliant solutions for utilities,
            infrastructure and industrial clients.
          </p>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div className="md:mx-auto">
          <div className="text-lg font-semibold text-sjt-dark">
            Quick Links
          </div>

          <ul className="mt-5 space-y-3">
            {[
              ["About Us", "#about"],
              ["Product Profile", "#products"],
              ["Manufacturing Process", "#process"],
              ["Quality Assurance", "#quality"],
              ["Applications", "#applications"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="group inline-flex items-center gap-2 text-sjt-grey hover:text-sjt-teal transition"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sjt-teal/40 group-hover:bg-sjt-teal transition" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 3 — TRUST & CONTACT */}
        <div className="md:mx-auto">
          <div className="text-lg font-semibold text-sjt-dark">
            Certifications & Contact
          </div>

          {/* CERTIFICATIONS */}
          <div className="mt-5 flex flex-wrap gap-3">
            {["ISO 9001:2008", "BEE Rated", "BIS / IEC"].map((c) => (
              <span
                key={c}
                className="px-4 py-1.5 rounded-full border bg-sjt-cream text-xs font-semibold text-sjt-grey"
              >
                {c}
              </span>
            ))}
          </div>

          {/* CONTACT */}
          <div className="mt-6 space-y-2 text-sjt-grey">
            <div className="flex items-center gap-2">
              <span className="text-sjt-teal">📞</span>
              +91 99492 65499
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sjt-teal">📞</span>
              +91 73374 46699
            </div>
            <div className="flex items-center gap-2 break-all">
              <span className="text-sjt-teal">✉️</span>
              shrijagadambatransformers@gmail.com
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-sjt-cream">
        <div className="container mx-auto py-4 flex flex-col-reverse md:flex-row gap-2 items-center justify-between text-sm text-sjt-grey px-3">
          <div>
            Designed &amp; Developed by{" "}
            <a
              href="https://startupflora.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sjt-teal hover:underline"
            >
              StartupFlora
            </a>
          </div>

          <div className="text-center md:text-right">
            © {new Date().getFullYear()} Shri Jagadamba Transformers.  
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
