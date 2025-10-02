import type { Metadata } from "next";
import "./globals.css";
import BuilderInit from "@/components/BuilderInit";

export const metadata: Metadata = {
  title: "Axess",
  description: "The hub-and-fleet platform for autonomous mobility",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BuilderInit />
        {children}
      </body>
    </html>
  );
}
