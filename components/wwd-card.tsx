"use client"

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useTransform, motion, useScroll } from "framer-motion"

import {
    whatwedoImg1,
    whatwedoImg2,
    whatwedoImg3,
    whatwedoImg4
} from "@/public"

export const Card = () => {
    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);
    const container4 = useRef(null);

    const t = useTranslations("whatwedoContent");

    const { scrollYProgress: scrollyProgress1 } = useScroll({
        target: container1,
        offset: ["start end", "start start"]
    });

    const { scrollYProgress: scrollyProgress2 } = useScroll({
        target: container2,
        offset: ["start end", "start start"],
    });

    const { scrollYProgress: scrollyProgress3 } = useScroll({
        target: container3,
        offset: ["start end", "start start"],
    });


    const { scrollYProgress: scrollYProgress4 } = useScroll({
        target: container4,
        offset: ["start end", "start start"],
    });

    const imageScale1 = useTransform(scrollyProgress1, [0, 1], [0.7, 1]);
    const imageScale2 = useTransform(scrollyProgress2, [0, 1], [0.7, 1]);
    const imageScale3 = useTransform(scrollyProgress3, [0, 1], [0.7, 1]);
    const imageScale4 = useTransform(scrollYProgress4, [0, 1], [0.7, 1]);


    return (
        <>
            <div
                ref={container1}
                className="ms:top-[10%] sticky top-40 flex h-auto w-full items-center justify-center xm:top-[10%] sm:top-[10%]"
            >
                <motion.div
                    style={{ backgroundColor: t("bgColor1"), top: `calc(-5vh + ${1 * 25}px` }}
                    className="relative -top-[45%] flex h-[800px] w-full origin-top transform justify-between gap-10 rounded-[30px] p-20 xm:flex-col xm:p-7 sm:flex-col"
                >
                    <div className="flex h-full w-1/2 flex-col gap-14 pt-10 xm:w-full xm:gap-5 xm:pt-5 sm:w-full sm:gap-5 sm:pt-5">
                        <div className="flex flex-col gap-2">
                            <h4
                                style={{ color: t("textColor1") }}
                                className="text-[24px] leading-tight tracking-tighter xm:text-lg sm:text-lg"
                            >
                                {t("title1")}
                            </h4>
                            <h2 className="text-[80px] font-bold leading-[80px] tracking-tighter xm:text-[40px] xm:leading-none sm:text-[40px] sm:leading-none"
                                style={{ color: t("textColor1") }}
                            >
                                <br />
                                {t("heading2")}
                            </h2>
                            <h4
                                className="text-[20px] leading-normal tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor1") }}>
                                {t("para1")}
                            </h4>
                        </div>
                        <div className="flex w-fit flex-col gap-2">
                            <Link
                                style={{ color: t("linkColor1") }}
                                className="text-[18px] font-normal leading-tight tracking-tight"
                                href="/"
                            >
                                {t("href1")}
                            </Link>
                            <div className="h-[1px] w-full rounded-lg"
                                style={{ backgroundColor: t("linkColor1") }}
                            />
                        </div>
                    </div>
                    <motion.div
                        style={{ scale: imageScale1 }}
                        className="flex h-full w-1/2 items-center justify-center xm:w-full sm:w-full"
                    >
                        <Image
                            src={whatwedoImg1}
                            alt="whatwedoImg1"
                            className="w-[80%] object-cover"
                        />

                    </motion.div>
                </motion.div>
            </div>

            <div
                ref={container2}
                className="sticky top-40 flex h-auto w-full items-center justify-center xm:top-[10%] sm:top-[10%]">
                <motion.div
                    style={{
                        backgroundColor: t("bgColor2"),
                        top: `calc(-5vh + ${2 * 25}px)`,
                    }}
                    className="relative -top-[45%] flex h-[800px] w-full origin-top transform justify-between gap-10 rounded-[30px] p-20 xm:flex-col xm:p-7 sm:flex-col sm:p-7">
                    <div className="flex h-full w-1/2 flex-col gap-14 pt-10 xm:w-full xm:gap-5 xm:pt-5 sm:w-full sm:gap-5 sm:pt-5">
                        <div className="flex flex-col gap-2">
                            <h4
                                className="text-[24px] leading-tight tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor2") }}>
                                {t("title2")}
                            </h4>
                            <h2
                                className="text-[80px] font-bold leading-[80px] tracking-tighter xm:text-[40px] xm:leading-none sm:text-[40px] sm:leading-none"
                                style={{ color: t("textColor2") }}>
                                {t("heading3")}

                                <br />
                                {t("heading4")}
                            </h2>
                            <h4
                                className="text-[20px] leading-normal tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor2") }}>
                                {t("para2")}
                            </h4>
                        </div>
                        <div className="flex w-fit flex-col gap-2">
                            <Link
                                style={{ color: t("linkColor2") }}
                                className="text-[18px] font-normal leading-tight tracking-tight"
                                href="/">
                                {t("href2")}
                            </Link>
                            <div
                                className="h-[1px] w-full rounded-lg"
                                style={{ backgroundColor: t("linkColor2") }}
                            />
                        </div>
                    </div>
                    <motion.div
                        className="flex h-full w-1/2 items-center justify-center xm:w-full sm:w-full"
                        style={{ scale: imageScale2 }}>
                        <Image
                            src={whatwedoImg2}
                            alt="whatwedoImg"
                            className="w-[80%] object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div
                ref={container3}
                className="sticky top-40 flex h-auto w-full items-center justify-center xm:top-[10%] sm:top-[10%]">
                <motion.div
                    style={{
                        backgroundColor: t("bgColor3"),
                        top: `calc(-5vh + ${3 * 25}px)`,
                    }}
                    className="relative -top-[45%] flex h-[800px] w-full origin-top transform justify-between gap-10 rounded-[30px] p-20 xm:flex-col xm:p-7 sm:flex-col sm:p-7">
                    <div className="flex h-full w-1/2 flex-col gap-14 pt-10 xm:w-full xm:gap-5 xm:pt-5 sm:w-full sm:gap-5 sm:pt-5">
                        <div className="flex flex-col gap-2">
                            <h4
                                className="text-[24px] leading-tight tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor3") }}>
                                {t("title3")}
                            </h4>
                            <h2
                                className="text-[80px] font-bold leading-[80px] tracking-tighter xm:text-[40px] xm:leading-none sm:text-[40px] sm:leading-none"
                                style={{ color: t("textColor3") }}>
                                {t("heading5")}

                                <br />
                                {t("heading6")}
                            </h2>
                            <h4
                                className="text-[20px] leading-normal tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor3") }}>
                                {t("para3")}
                            </h4>
                        </div>
                        <div className="flex w-fit flex-col gap-2">
                            <Link
                                style={{ color: t("linkColor3") }}
                                className="text-[18px] font-normal leading-tight tracking-tight"
                                href="/">
                                {t("href3")}
                            </Link>
                            <div
                                className="h-[1px] w-full rounded-lg"
                                style={{ backgroundColor: t("linkColor3") }}
                            />
                        </div>
                    </div>
                    <motion.div
                        className="flex h-full w-1/2 items-center justify-center xm:w-full sm:w-full"
                        style={{ scale: imageScale3 }}>
                        <Image
                            src={whatwedoImg3}
                            alt="whatwedoImg"
                            className="w-[80%] object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
            <div
                ref={container4}
                className="sticky top-40 flex h-auto w-full items-center justify-center xm:top-[10%] sm:top-[10%]">
                <motion.div
                    style={{
                        backgroundColor: t("bgColor4"),
                        top: `calc(-5vh + ${4 * 25}px)`,
                    }}
                    className="relative -top-[45%] flex h-[800px] w-full origin-top transform justify-between gap-10 rounded-[30px] p-20 xm:flex-col xm:p-7 sm:flex-col sm:p-7">
                    <div className="flex h-full w-1/2 flex-col gap-14 pt-10 xm:w-full xm:gap-5 xm:pt-5 sm:w-full sm:gap-5 sm:pt-5">
                        <div className="flex flex-col gap-2">
                            <h4
                                className="text-[24px] leading-tight tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor4") }}>
                                {t("title4")}
                            </h4>
                            <h2
                                className="text-[80px] font-bold leading-[80px] tracking-tighter xm:text-[40px] xm:leading-none sm:text-[40px] sm:leading-none"
                                style={{ color: t("textColor4") }}>
                                {t("heading7")}

                                <br />
                                {t("heading8")}
                            </h2>
                            <h4
                                className="text-[20px] leading-normal tracking-tighter xm:text-lg sm:text-lg"
                                style={{ color: t("textColor4") }}>
                                {t("para4")}
                            </h4>
                        </div>
                        <div className="flex w-fit flex-col gap-2">
                            <Link
                                style={{ color: t("linkColor4") }}
                                className="text-[18px] font-normal leading-tight tracking-tight"
                                href="/">
                                {t("href4")}
                            </Link>
                            <div
                                className="h-[1px] w-full rounded-lg"
                                style={{ backgroundColor: t("linkColor4") }}
                            />
                        </div>
                    </div>
                    <motion.div
                        className="flex h-full w-1/2 items-center justify-center xm:w-full sm:w-full"
                        style={{ scale: imageScale4 }}>
                        <Image
                            src={whatwedoImg4}
                            alt="whatwedoImg"
                            className="w-[80%] object-cover"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}