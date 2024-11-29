"use client"

import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";
import Paragraph from "./words";

export const Journey = () => {
    const t = useTranslations("journeyContent");
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 0.98]);
    const scaleSmooth = useSpring(scale);

    return (
        <motion.div
            id="our-ambition"
            style={{ scale: scaleSmooth }}
            ref={containerRef}
            className="mb-20 flex h-screen w-full items-center justify-center rounded-[30px] bg-[#FFD7EF] py-10 transition-all duration-300 ease-linear xm:h-fit sm:h-fit"
        >
            <div
                className="flex h-full w-[80%] items-center justify-center px-5 xm:w-full xm:pb-20 sm:w-full sm:pb-20 md:w-full">
               <Paragraph paragraph={t("journeyContent")} />
            </div>
            <div className="absolute h-full w-full">
                <div className="absolute -bottom-10 right-24">
                    <motion.img
                        animate={{ rotate: [-360, 360] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear"
                        }}
                        src="/circle2.svg"
                        alt="circle2"
                        width={130}
                        height={130}
                    />
                </div>
                <div className="absolute -bottom-12 right-60">
                    <motion.img
                        animate={{ rotate: [-360, 360] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear"
                        }}
                        src="/circle1.svg" alt="circle1" width={100} height={100} />
                </div>
            </div>
        </motion.div>
    )
}