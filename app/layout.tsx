import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri Jagadamba Transformers | ISO Certified Manufacturer",
  description:
    "Manufacturing & Repairing of Power & Distribution Transformers | ISO 9001:2008 | BEE Star Rated",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-sjt-dark">{children}</body>
    </html>
  );
}
