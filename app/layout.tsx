import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MileTrack – Auto-Track Business Miles for Freelancer Taxes",
  description: "GPS-based mileage tracking that automatically categorizes business vs personal trips for freelancer tax deductions. Generate IRS-compliant reports instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f8a2a1e1-8664-4c5e-ac34-eda9fd2e575e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
