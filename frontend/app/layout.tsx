import type { Metadata } from "next";
import "./globals.css";

import { detectHost } from "./api";

export const metadata: Metadata = {
  title: "Cognitive Analytics",
  description: "GenAI Customer Service Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="cognizant.png" />
      <link rel="icon" href="static/cognizant.png" />
      <body>{children}</body>
    </html>
  );
}
