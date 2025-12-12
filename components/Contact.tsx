"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: "#F6F8E8" }}
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2
            className="font-bold text-4xl md:text-5xl"
            style={{ color: "#1F2937" }}
          >
            Contact Us
          </h2>

          <p
            className="mt-5 text-lg md:text-xl max-w-xl"
            style={{ color: "#6B7280" }}
          >
            Share your requirement and our technical team will get back with
            specifications, timelines, and a competitive quotation.
          </p>

          {/* INFO LIST */}
          <div className="mt-8 space-y-5 text-base md:text-lg">
            <Info label="Address" value="(Add full address as per brochure)" />
            <Info label="Phone" value="+91 XXXXX XXXXX" />
            <Info label="Email" value="yourmail@example.com" />
          </div>

          {/* MAP */}
          <div
            className="mt-8 rounded-3xl p-5"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              color: "#6B7280",
            }}
          >
            <div className="font-semibold mb-2" style={{ color: "#0B5ED7" }}>
              Location
            </div>
            <div className="rounded-2xl bg-gray-100 p-6 text-sm text-center">
              Google Map Placeholder (Embed Map Here)
            </div>
          </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.form
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 shadow-sm"
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
          }}
        >
          <div
            className="font-semibold text-2xl"
            style={{ color: "#1F2937" }}
          >
            Request a Quotation
          </div>

          <p
            className="mt-2 text-base"
            style={{ color: "#6B7280" }}
          >
            Fill in the details below and our team will respond shortly.
          </p>

          <div className="mt-6 grid gap-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Company / Organization" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Email Address" type="email" />

            <textarea
              rows={5}
              placeholder="Requirement (kVA, type, new / repair, location, timeline)"
              className="rounded-2xl px-4 py-3 text-base outline-none"
              style={{
                border: "1px solid #E5E7EB",
                color: "#1F2937",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(47,183,179,0.35)")
              }
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            />

            <button
              type="button"
              className="mt-2 rounded-full px-6 py-3 text-lg font-semibold text-white transition"
              style={{
                backgroundColor: "#2FB7B3",
              }}
            >
              Submit Request
            </button>

            <div
              className="text-sm"
              style={{ color: "#6B7280" }}
            >
              (This form can be connected to email, CRM, or WhatsApp.)
            </div>
          </div>
        </motion.form>

      </div>
    </section>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div
        className="w-28 font-semibold"
        style={{ color: "#0B5ED7" }}
      >
        {label}
      </div>
      <div style={{ color: "#1F2937" }}>{value}</div>
    </div>
  );
}

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-2xl px-4 py-3 text-base outline-none"
      style={{
        border: "1px solid #E5E7EB",
        color: "#1F2937",
      }}
      onFocus={(e) =>
        (e.currentTarget.style.boxShadow =
          "0 0 0 3px rgba(47,183,179,0.35)")
      }
      onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
    />
  );
}
