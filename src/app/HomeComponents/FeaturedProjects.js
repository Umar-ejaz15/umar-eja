"use client";
import React from "react";
import Link from "next/link";
import ImageTrail from "@/components/ImageTrail";

export default function FeaturedShowcase() {
  return (
    <section className="relative w-full h-[500px] flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6">
      {/* Background ImageTrail */}
      <div className="absolute inset-0 z-0">
        <ImageTrail
          key="trail"
          items={[
            "https://picsum.photos/id/287/300/300",
            "https://picsum.photos/id/1001/300/300",
            "https://picsum.photos/id/1025/300/300",
            "https://picsum.photos/id/1026/300/300",
            "https://picsum.photos/id/1027/300/300",
            "https://picsum.photos/id/1028/300/300",
            "https://picsum.photos/id/1029/300/300",
            "https://picsum.photos/id/1030/300/300",
          ]}
          variant={1}
        />
      </div>

      {/* Overlay Content (non-blocking) */}
      <div className="relative text-center max-w-3xl pointer-events-none">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Explore My Projects
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-8 drop-shadow-md">
          Crafting modern web apps with{" "}
          <span className="font-semibold">design & performance</span> in mind.
          From dynamic UIs to AI-driven solutions — every project tells a story.
        </p>
      </div>

      {/* Button (only interactive element) */}
      <div className="z-10 pointer-events-auto">
        <Link
          href="/projects"
          className="inline-block px-8 py-4 bg-[#6C4CFF] rounded-2xl text-white font-medium hover:bg-[#5a3de0] transition-colors duration-300"
        >
          View My Projects
        </Link>
      </div>
    </section>
  );
}
