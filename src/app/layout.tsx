import type { Metadata } from "next";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { inter } from "@/styles";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Digitique Next.js Template",
  description: "Digitique Next.js Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "font-inter")}>{children}</body>
    </html>
  );
}
