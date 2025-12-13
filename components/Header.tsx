"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "products", label: "Products" },
  { href: "applications", label: "Applications" },
  { href: "design", label: "R&D" },
  { href: "process", label: "Process" },
  { href: "quality", label: "Quality" },
  // { href: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navLink = (l: { href: string; label: string }) => {
    const isActive = active === l.href;

    return (
      <a
        key={l.href}
        href={l.href === "home" ? "#hero" : `#${l.href}`}
        onClick={() => setOpen(false)}
        className={`relative block py-2 transition-all
          ${isActive
            ? "font-extrabold text-black"
            : "font-medium text-black/80 hover:text-black"}
        `}
      >
        {l.label}

        <span
          className={`absolute left-0 -bottom-1 h-[3px] bg-black transition-all duration-300
            ${isActive ? "w-full" : "w-0"}
          `}
        />
      </a>
    );
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="flex-container mx-auto px-3 md:px-10">
        <div className="flex items-center justify-between h-[88px]">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-[160px] h-[80px]">
              <img
                src="/img/logo1.png"
                alt="Shri Jagadamba Transformers logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <div className="font-bold text-[#0B5ED7] text-xl uppercase">
                Shri Jagadamba
              </div>
              <div className="font-bold text-[#0B5ED7] text-xl uppercase">
                Transformers
              </div>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8 text-lg">
            {links.map(navLink)}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full 
                         bg-black px-6 py-3 text-base font-semibold text-white
                         shadow-lg hover:shadow-xl transition"
            >
            Contact Us
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg border p-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[420px] border-t" : "max-h-0"}
        `}
      >
        <div className="container mx-auto px-4 py-4 space-y-3 bg-white">
          {links.map(navLink)}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2
                       rounded-full bg-black px-6 py-3 text-lg font-semibold text-white"
          >
            Request Quote →
          </a>
        </div>
      </div>
    </header>
  );
}
