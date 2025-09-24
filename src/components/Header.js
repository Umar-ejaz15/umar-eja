"use client";
import React, { useState } from "react";
import GooeyNav from "./GooeyNav";
import Image from "next/image";
import Link from "next/link";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0); // default to Home

  return (
    <div className="bg-black px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.png" // replace with your logo path
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>

      {/* GooeyNav */}
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={activeIndex} // initial active
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        onItemClick={(index) => setActiveIndex(index)} // pass active updates
      />
    </div>
  );
}
