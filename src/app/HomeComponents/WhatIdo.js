"use client";
import React, { useEffect, useRef } from "react";
import { Code, Rocket, Sparkles, Brain, Palette, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <Code className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_#00e5ff]" />, title: "Full-Stack Development", desc: "Building MERN & Next.js apps with clean, scalable code." },
  { icon: <Rocket className="w-10 h-10 text-purple-400 drop-shadow-[0_0_10px_#6C4CFF]" />, title: "AI-Driven Solutions", desc: "Integrating AI to create smarter, futuristic web experiences." },
  { icon: <Sparkles className="w-10 h-10 text-pink-400 drop-shadow-[0_0_10px_#ff4dc4]" />, title: "Creative UIs", desc: "Modern, animated interfaces powered by Framer Motion & GSAP." },
  { icon: <Brain className="w-10 h-10 text-green-400 drop-shadow-[0_0_10px_#00ff9d]" />, title: "Problem Solving", desc: "Turning complex ideas into user-friendly digital products." },
  { icon: <Palette className="w-10 h-10 text-indigo-400 drop-shadow-[0_0_10px_#5a3de0]" />, title: "Design Integration", desc: "Blending code & creativity to craft aesthetic designs." },
  { icon: <Zap className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_10px_#f5ff4d]" />, title: "Performance Optimization", desc: "Fast, SEO-friendly, and smooth experiences across devices." },
];

export default function WhatIdo() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,       // fast animation
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 50%",
            scrub: 0.8,          // smooth, tight scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full px-6 py-20 bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 drop-shadow-[0_0_15px_white]">
        What I Do
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="flex h-80 justify-center flex-col items-center text-center gap-3 p-6 rounded-xl bg-[#0a0a0a]/80 border border-[#6C4CFF]/30 hover:border-[#6C4CFF] hover:shadow-[0_0_25px_#6C4CFF80] transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 text-sm text-center">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
