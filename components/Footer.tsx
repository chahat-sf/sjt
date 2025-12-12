export default function Footer() {
  return (
    <footer className="relative bg-white border-t">

      {/* TOP ACCENT LINE */}
      <div className="h-[4px] w-full bg-gradient-to-r from-sjt-teal to-sjt-blue" />

      <div className="container py-16 grid gap-12 md:grid-cols-3 mx-auto text-sm">

        {/* COLUMN 1 — BRAND */}
        <div>
          <div className="text-xl font-bold text-sjt-dark">
            Shri Jagadamba Transformers
          </div>

          <p className="mt-4 text-sjt-grey leading-relaxed max-w-sm">
            Manufacturer & repairer of power and distribution transformers,
            delivering reliable, standards-compliant solutions for utilities,
            infrastructure and industrial clients.
          </p>

          <div className="mt-6 text-xs text-sjt-grey">
            © {new Date().getFullYear()} Shri Jagadamba Transformers  
            <br />
            All rights reserved.
          </div>
        </div>

        {/* COLUMN 2 — QUICK LINKS */}
        <div>
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
        <div>
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
              +91 XXXXX XXXXX
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sjt-teal">✉️</span>
              yourmail@example.com
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-sjt-cream">
        <div className="container py-4 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-sjt-grey mx-auto">
          <div className="text-xs text-sjt-grey">
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
          <div>
            Built with compliance, reliability & efficiency in mind    Designed for utilities, PSU & industrial buyers
          </div>
        </div>
      </div>
    </footer>
  );
}
