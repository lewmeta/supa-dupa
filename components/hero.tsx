/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"
import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import { useTranslations } from "next-intl"

import { arrowDown, heroCircle } from "@/public";
import { Navbar } from "./navbar"

export const Hero = () => {
    const t = useTranslations('heroContent');
    const textRef = useRef<HTMLSpanElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + "px";
    };


    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    const plane1 = useRef(null);
    let requestAnimationFrameId: any = null;
    let xForce = 0;
    let yForce = 0;
    const easing = 0.08;
    const speed = 0.01;

    const lerp = (start: number, target: number, amount: number) =>
        start * (0.8 - amount) + target * amount;

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce != 0 || yForce != 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    const manageMouseMove = (e: any) => {
        const { movementX, movementY } = e;
        xForce += movementX * speed;
        yForce += movementY * speed;

        if (requestAnimationFrameId === null) {
            requestAnimationFrameId = requestAnimationFrame(animate)
        }
    }

    const resetVideoPosition = () => {
        gsap.to(plane1.current, { x: 0, y: 0, duration: 0.5, ease: "circ.inOut" })
        xForce = 0;
        yForce = 0;
    }

    return (
        <div className="padding-x flex min-h-screen w-full flex-col items-center justify-center gap-10 sm:pt-20 md:pt-24 lg:pt-24">
            <Navbar />
            <div
                className="flex w-full flex-col justify-start"
                ref={containerRef}>
                <h1 className="mb-5 text-[24px] font-normal leading-tight tracking-tight text-[#9FE870] xm:text-lg sm:text-lg">
                    {t("welcome-to-the-world-of")}
                </h1>
                <span
                    className="mx-auto mt-20 flex whitespace-nowrap text-center text-[250px] font-bold leading-[200px] tracking-tighter text-[#9FE870] xm:mt-0 xm:leading-[75px] sm:mt-0 sm:leading-[75px]"
                    ref={textRef}>
                    {"SupaDupa".split("").map((item: string, i: number) => (
                        <motion.p
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            transition={{
                                delay: i * 0.08,
                                duration: 1,
                                ease: [0.4, 0, 0.2, 1],
                            }}
                            viewport={{ once: false }}
                            key={i}>
                            {item}
                        </motion.p>
                    ))}
                </span>
            </div>
            <div className="relative flex w-full flex-col gap-10"
                onMouseMove={manageMouseMove}
                onMouseLeave={resetVideoPosition}
            >
                <div className="absolute left-64 h-[400px] w-[600px] rounded-lg xm:static xm:left-0 xm:h-[300px] xm:w-full sm:static sm:left-0 sm:h-[300px] sm:w-full">
                    <motion.video
                        ref={plane1}
                        initial={{ y: 20, opacity: 0.5, scale: 0.5 }}
                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        src="./heroVideo.mp4"
                        autoPlay
                        loop
                        muted
                        className="h-full w-full cursor-grabbing rounded-[30px] object-cover"
                    />
                    <div className="absolute -left-16 top-36 flex items-center xm:hidden">
                        <Image
                            src={heroCircle}
                            alt="heroCircle"
                            width={120}
                            height={120}
                        />
                    </div>
                </div>
                <motion.div
                    initial={{ borderWidth: 0, width: "0%" }}
                    viewport={{ once: true }}
                    whileInView={{
                        borderWidth: 1,
                        width: "100%",
                        borderColor: "#9FE870",
                        origin: "left"
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeInOut"
                    }}
                    className="mt-20 w-full xm:mt-0 sm:mt-0"
                />

                <div className="relative flex w-full justify-between">
                    <div className="relative flex flex-col gap-5 xm:hidden sm:hidden">
                        <Image
                            src={arrowDown}
                            alt="arrowDownImg"
                            width={20}
                            height={20}
                            className="h-fit"
                        />
                        <h1 className="absolute -bottom-5 -left-[73px] rotate-90 whitespace-nowrap text-[20px] font-normal uppercase leading-tight tracking-tight text-[#9FE870]">
                            {t("start")}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h1
                            className="text-[24px] font-normal leading-tight tracking-tight text-[#9FE870] xm:text-lg sm:text-lg"
                            dangerouslySetInnerHTML={{ __html: t("where-the-journey") }}
                        />
                        <div className="flex w-fit flex-col gap-2">
                            <Link
                                className="text-[18px] font-normal leading-tight tracking-tight text-secondary"
                                href="/">
                                {t("lets-build")}
                            </Link>
                            <div className="h-[1px] w-full rounded-lg bg-secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}