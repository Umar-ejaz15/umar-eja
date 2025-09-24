import Faq1 from "@/components/mvpblocks/faq-1";
import FeaturedProjects from "./HomeComponents/FeaturedProjects";
import HomeHero from "./HomeComponents/HomeHero";
import HomeWhyme from "./HomeComponents/HomeWhyme";
import WhatIdo from "./HomeComponents/WhatIdo";
import Header from "@/components/Header";
import TestimonialsCarousel from "@/components/mvpblocks/testimonials-carousel";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <HomeHero />
        <WhatIdo />
        <HomeWhyme />
        <FeaturedProjects />
        <Faq1 />
        <TestimonialsCarousel />
      </div>
    </>
  );
}
