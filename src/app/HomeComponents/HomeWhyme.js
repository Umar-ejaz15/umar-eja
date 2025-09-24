import CardSwap, { Card } from "@/components/CardSwap";
import React from "react";

export default function HomeWhyme() {
  return (
    <section className="w-full bg-black  mx-auto px-6 py-10 flex flex-col md:flex-row items-center gap-12">
        <div className="max-w-6xl grid grid-cols-2 items-center mx-auto">

      {/* Left Side Text */}
      <div className=" space-y-6 ">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
          Why Choose Me?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I don’t just build websites; I craft **experiences that combine design & code** seamlessly.  
          Each project is optimized for **performance, scalability, and elegance**, giving your ideas life in the digital world.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          With mastery in **MERN stack, Next.js, and AI-driven solutions**, I deliver clean, maintainable, and **future-ready web apps**. 🚀
        </p>
        <p className="text-gray-400 text-lg leading-relaxed">
          Let’s collaborate to turn your vision into a **modern, interactive, and high-performing website**.
        </p>
      </div>

      {/* Right Side Cards */}
      <div className="relative h-[500px]">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card className="bg-gradient-to-br from-purple-700 to-indigo-600 shadow-2xl rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-500 ease-out max-w-[520px]">
            <h3 className="text-2xl font-bold mb-3">Fast & Efficient</h3>
            <p className="text-white text-base leading-relaxed">
              I focus on writing highly optimized, clean, and maintainable code so that your websites run lightning-fast across all devices.  
              From frontend responsiveness to backend efficiency, everything is tuned for performance, speed, and scalability.
            </p>
          </Card>
          <Card className="bg-gradient-to-br from-pink-600 to-purple-500 shadow-2xl rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-500 ease-out max-w-[520px]">
            <h3 className="text-2xl font-bold mb-3">Creative Design</h3>
            <p className="text-white text-base leading-relaxed">
              Every website I build combines **clean, modern design** with intuitive user experience.  
              From visually appealing layouts to subtle animations, I ensure your users stay engaged and love interacting with your brand.
            </p>
          </Card>
          <Card className="bg-gradient-to-br from-teal-500 to-blue-500 shadow-2xl rounded-3xl p-8 text-white hover:scale-105 transition-transform duration-500 ease-out max-w-[520px]">
            <h3 className="text-2xl font-bold mb-3">AI & Modern Tech</h3>
            <p className="text-white text-base leading-relaxed">
              I leverage **AI and cutting-edge web technologies** to create smarter, interactive solutions.  
              From dynamic content to intelligent features, your website will not just look good—it will perform intelligently, providing users a next-level experience.
            </p>
          </Card>
        </CardSwap>
      </div>
        </div>

    </section>
  );
}
