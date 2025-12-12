"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "home", label: "Home" },
  { href: "about", label: "About" },
  { href: "products", label: "Products" },
  { href: "design", label: "R&D" },
  { href: "process", label: "Process" },
  { href: "quality", label: "Quality" },
  { href: "applications", label: "Applications" },
  { href: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");

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
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-sky-300 backdrop-blur-xl shadow-sm">
        <div className="flex items-center justify-between w-full py-1 pr-8">

          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[200px] h-[100px]">
              <img
                src="/img/logo1.png"
                alt="SJT logo"
                className="w-full h-full scale-75"
              />
            </div>

            <div className="leading-tight ml-2">
              <div className="font-bold text-white text-3xl uppercase">
                Shri Jagadamba <br /> Transformers
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg">
            {links.map((l) => {
              const isActive = active === l.href;

              return (
                <a
                  key={l.href}
                  href={l.href === "home" ? "#hero" : `#${l.href}`}
                  className={`
                    relative transition-all
                    ${isActive
                      ? "font-extrabold text-white"
                      : "font-medium text-white/90 hover:text-white"}
                  `}
                >
                  {l.label}

                  {/* Underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[3px] bg-white transition-all duration-300
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full 
                       bg-black px-6 py-3 text-xl font-semibold text-white
                       shadow-lg hover:shadow-xl transition"
          >
            Request Quote
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
