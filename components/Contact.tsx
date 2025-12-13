"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: any) => {
    const err: Record<string, string> = {};

    if (!data.name.trim()) err.name = "Name is required";

    if (!data.phone.trim()) {
      err.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(data.phone)) {
      err.phone = "Enter valid 10-digit Indian number";
    }

    if (!data.email.trim()) {
      err.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      err.email = "Enter valid email address";
    }

    if (!data.message.trim()) err.message = "Requirement is required";

    return err;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const whatsappMessage = `
New Enquiry – Shri Jagadamba Transformers

Name: ${data.name}
Company: ${data.company}
Phone: ${data.phone}
Email: ${data.email}

Requirement:
${data.message}
    `;

    const url = `https://wa.me/919664455006?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-28"
      style={{ backgroundColor: "#F6F8E8" }}
    >
      <h2 className="text-center font-bold text-4xl md:text-5xl mb-10 text-[#1F2937]">
        Contact Us
      </h2>

      <div className="container mx-auto grid md:grid-cols-2 gap-16 px-2">

        {/* LEFT: CONTACT INFO */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-5 text-lg">
            <Info
              label="Address"
              value={`Plot No. 198, A.P.J. Kalam Green Industrial Park (A-GRIP)
Entrepreneurs of India (ALEAP-INDIA)
Village: Nandigama, Mandal: Patancheru
District: Sangareddy, Telangana – 500090`}
            />
            <Info label="Phone" value="+91 99492 65499, +91 73374 46699" />
            <Info
              label="Email"
              value="shrijagadambatransformers@gmail.com"
            />
          </div>

          {/* MAP */}
        <div className="mt-8 rounded-3xl p-5" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", color: "#6B7280", }} > <div className="font-semibold mb-2" style={{ color: "#0B5ED7" }}> Location </div> <div className="rounded-2xl bg-gray-100 p-2 overflow-hidden"> <div className="relative w-full h-[300px] md:h-[360px] rounded-xl overflow-hidden"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.581570319015!2d78.17122618155716!3d17.50057162697333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf1e2e38b7ebd%3A0x7cac81e6e62a3f64!2sALEAP%20Green%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1765609582649!5m2!1sen!2sin" className="absolute inset-0 w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /> </div> </div> </div>
        </motion.div>

        {/* RIGHT: FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="bg-white border border-[#E5E7EB] rounded-3xl p-8"
        >
          <h3 className="text-2xl font-semibold text-[#1F2937]">
            Request a Quotation
          </h3>

          <p className="mt-2 text-[#6B7280]">
            Submit your requirement and connect instantly via WhatsApp.
          </p>

          <div className="mt-6 space-y-4">
            <Input name="name" placeholder="Full Name" error={errors.name} />
            <Input
              name="company"
              placeholder="Company / Organization"
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              error={errors.phone}
            />
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              error={errors.email}
            />

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Requirement (kVA, type, new / repair, location, timeline)"
                className={`w-full rounded-2xl px-4 py-3 outline-none border ${
                  errors.message
                    ? "border-red-500"
                    : "border-[#E5E7EB]"
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#2FB7B3] px-6 py-3 text-lg font-semibold text-white hover:opacity-90 transition"
            >
              Submit & WhatsApp →
            </button>

            <p className="text-sm text-center text-[#6B7280]">
              You will be redirected to WhatsApp with your enquiry pre-filled.
            </p>
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
      <div className="w-28 font-semibold text-[#0B5ED7]">
        {label}
      </div>
      <div className="whitespace-pre-line text-[#1F2937]">
        {value}
      </div>
    </div>
  );
}

function Input({
  name,
  placeholder,
  type = "text",
  error,
}: {
  name: string;
  placeholder: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-2xl px-4 py-3 outline-none border ${
          error ? "border-red-500" : "border-[#E5E7EB]"
        }`}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}
