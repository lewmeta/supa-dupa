"use client"

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { whatwedoCircleImg } from "@/public";
import { Marquee } from "./marquee";
import { Card } from "./wwd-card";

export const WhatWeDo = () => {
    const t = useTranslations("whatwedoContent");

    return (
        <div
            id="what-we-do"
            className="relative w-full bg-[#FFD7EF] py-20">
            <motion.div
                animate={{ rotate: [-360, 360] }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear"
                }}
                className="absolute -top-14 right-40 flex items-center"
            >
                <Image
                    src={whatwedoCircleImg}
                    alt="whatwedo"
                    width={120}
                    height={120}
                />
            </motion.div>
            <Marquee
                className="text-[#260A2F]"
                titile1="What we do"
                titile2="What we do"
            />

            <div className="flex w-full items-center justify-center">
                <div className="xm:padding-x sm:padding-x w-[80%] xm:w-full">
                    <p className="text-[22px] leading-tight tracking-tighter text-[#260A2F]" 
                    
                    dangerouslySetInnerHTML={{ __html: t('whatwedoHeading')}}
                    
                    />
                </div>
            </div>
            <div className="padding-x w-full py-20 xm:py-10 sm:py-10">
                <Card/>
            </div>
        </div>
    )
}