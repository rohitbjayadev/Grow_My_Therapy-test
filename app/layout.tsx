import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Therapy for Anxiety, Trauma & Burnout | Maya Reynolds, PsyD",
  description: "Licensed clinical psychologist in Santa Monica, CA offering therapy for anxiety, panic, trauma, and burnout. In-person and telehealth across California.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
