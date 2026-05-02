import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Thread Deadline Tracker – Convert Slack threads to actionable deadlines",
  description: "Scans Slack threads for dates and commitments, then displays them in a deadline dashboard. Built for team leads managing 5+ direct reports."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e6718a3e-ee5a-44da-b289-a70aa8299515"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
