"use client";
import LogoLoop from "@/components/LogoLoop";
import React from "react";
import { Code, Braces, Layers, Palette } from "lucide-react";

// picked Lucide icons that conceptually match React, Next.js, TS, Tailwind
const techLogos = [
  { node: <Code className="w-10 h-10 text-cyan-400" />, title: "React", href: "https://react.dev" },
  { node: <Layers className="w-10 h-10 text-white" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <Braces className="w-10 h-10 text-blue-400" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <Palette className="w-10 h-10 text-sky-400" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function HomeLogo() {
  return (
    <div className="relative overflow-hidden h-[200px] w-full">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#0a0a0a"
        ariaLabel="Technology partners"
      />
    </div>
  );
}
