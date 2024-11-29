"use client"

import { useScroll, useTransform, motion } from "framer-motion";

import { TmarqueeProps } from "@/types"
import { useRef } from "react";

export const Marquee = ({
    titile1,
    titile2,
    className,
}: TmarqueeProps) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const sc = useTransform(scrollYProgress, [0, 1], [200, -1000]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <div
            className="padding-x w-full py-10 xm:hidden"
            ref={containerRef}
        >
            <motion.div
                style={{ x: sc }}
                className="flex w-full gap-10 whitespace-nowrap"
            >
                <h1 className={`text-[100px] ${className} font-bold leading-none tracking-tight`}>
                    {titile1}
                </h1>
                <motion.img
                    style={{ rotate: rotate }}
                    src="/companiesimg.svg"
                    alt="companiesImg"
                />
                <h1
                    className={`text-[100px] ${className} font-bold leading-none tracking-tight`}>
                    {titile2}
                </h1>
            </motion.div>
        </div>
    )
}