"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Hyperspeed from "@/components/Hyperspeed";
import gsap from "gsap";

export default function HomeHero() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        subRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 1,
        },
        "-=0.5" // overlap slightly
      )
      .from(
        buttonsRef.current.children,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4"
      );
  }, []);

  return (
    <>
      <main className="relative w-full h-screen overflow-hidden bg-black text-white flex items-center justify-center">
        {/* Hyperspeed Background */}
        <Hyperspeed
          className="absolute top-0 left-0 w-full h-full"
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />

        {/* Hero Overlay */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl">
          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg"
          >
            I build modern web apps that blend{" "}
            <span className="text-[#6C4CFF]">code & creativity</span>.
          </h1>

          <p
            ref={subRef}
            className="text-base sm:text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed"
          >
            MERN / Next.js / AI-driven solutions ⚡
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-2xl bg-[#6C4CFF] hover:bg-[#5a3de0] transition-colors duration-300 font-medium text-center"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-2xl border border-[#6C4CFF] hover:bg-[#6C4CFF]/20 transition-colors duration-300 font-medium text-center"
            >
              Hire Me
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
