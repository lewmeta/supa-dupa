"use client"

import { Preload } from "@/components/preload";
import { Slider } from "@/components/slider";
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
        <div className="pt-30 bg-gray-400">
          <Slider />
        </div>
      )}
    </>
  );
}