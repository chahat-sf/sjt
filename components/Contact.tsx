"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: "#F6F8E8" }}
    >
         <h2
            className="font-bold text-4xl md:text-5xl text-center mb-6"
            style={{ color: "#1F2937" }}
          >
            Contact Us
          </h2>

      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start px-2">

        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
       
          {/* <p
            className="mt-5 text-lg md:text-xl max-w-xl"
            style={{ color: "#6B7280" }}
          >
            Share your requirement and our technical team will get back with
            specifications, timelines, and a competitive quotation.
          </p> */}

          {/* INFO LIST */}
          <div className="mt-4 space-y-5 text-base md:text-lg">
            <Info label="Address" value="Plot No. 198, A.P.J. Kalam Green Industrial Park (A-GRIP)
Entrepreneurs of India (ALEAP-INDIA)
Village: Nandigama
Mandal: Patancheru
District: Sangareddy
Telangana – 500090, India" />
            <Info label="Phone" value="+91 99492 65499 , +91 73374 46699" />
            <Info label="Email" value="shrijagadambatransformers@gmail.com" />
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
    <div className="rounded-2xl bg-gray-100 p-2 overflow-hidden">
  <div className="relative w-full h-[300px] md:h-[360px] rounded-xl overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.581570319015!2d78.17122618155716!3d17.50057162697333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf1e2e38b7ebd%3A0x7cac81e6e62a3f64!2sALEAP%20Green%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1765609582649!5m2!1sen!2sin"
      className="absolute inset-0 w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
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
