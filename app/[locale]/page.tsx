"use client"

import { Collaboration } from "@/components/collaboration";
import { Companies } from "@/components/companies";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Preload } from "@/components/preload";
import { Slider } from "@/components/slider";
import { WhatWeDo } from "@/components/what-we-do";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preload />}
      </AnimatePresence>
      {!isLoading && (
        <>
          <Hero />
          <Journey />
          <Companies />
          <WhatWeDo/>
          <Slider />
          <Collaboration/>
          <Footer />
        </>
      )}
    </>
  );
}
