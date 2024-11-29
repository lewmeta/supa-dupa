import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { TextHover } from "@/components/text-hover";
import { useTranslations } from "next-intl";
import { Marquee } from "./marquee";
import { blackCircle } from "@/public";

export const Footer = () => {
    const t = useTranslations("footerContent");

    return (
        <>
            <div
                id="get-in-touch"
                className="padding-x flex h-screen w-full flex-col items-center justify-between pt-5"
            >
                <Marquee
                    titile1="Get in touch"
                    titile2="Get in touch"
                    className="text-[#FFEB69]"
                />
                <div className="flex w-[80%] flex-col gap-10 xm:w-full sm:w-full">
                    <div>
                        <h1 className="text-center text-[60px] font-bold leading-[62px] tracking-tight text-[#ffeb69] xm:text-left xm:text-[40px] xm:leading-[40px] sm:text-left sm:text-[40px] sm:leading-[40px]">
                            {t("footerHeading1")}
                        </h1>
                    </div>
                    <div>
                        <p className="text-center text-[25px] leading-normal tracking-tight text-[#ffeb69] xm:text-left sm:text-left">
                            {t("footerHeading2")}
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="group flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-[17px] font-semibold capitalize leading-tight tracking-tight text-[#260A2F]">
                            <Image
                                src={blackCircle}
                                alt="blackCircle"
                                width={30}
                                height={30}
                                className="transition-all duration-300 ease-linear group-hover:rotate-[60deg]"

                            />
                            <TextHover
                                title1={t("footerBtn")}
                                title2={t("footerBtn")}
                            />
                        </button>
                    </div>
                </div>
                <div className="flex w-full justify-between gap-5 py-10 xm:flex-col sm:flex-col">
                    <div className="flex w-1/2 justify-between gap-5 xm:w-full xm:flex-col sm:w-full sm:flex-col">
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <p className="text-[16px] leading-tight tracking-tight text-[#9FE870]">
                                    Phone
                                </p>
                                <Link
                                    className="text-[30px] font-semibold leading-tight tracking-tight text-[#9FE870]"
                                    href="tell:+31 53 234 0188">
                                    +31 53 234 0188
                                </Link>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[16px] leading-tight tracking-tight text-[#9FE870]">
                                    linkedin
                                </p>
                                <Link
                                    className="text-[30px] font-semibold leading-tight tracking-tight text-[#9FE870]"
                                    href="/">
                                    @SupaDupaNL
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col">
                                <p className="text-[16px] leading-tight tracking-tight text-[#9FE870]">
                                    E-mail
                                </p>
                                <Link
                                    className="text-[30px] font-semibold leading-tight tracking-tight text-[#9FE870]"
                                    href="mailTo:hello@supadupa.nl">
                                    hello@supadupa.nl
                                </Link>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[16px] leading-tight tracking-tight text-[#9FE870]">
                                    Instagram
                                </p>
                                <Link
                                    className="text-[30px] font-semibold leading-tight tracking-tight text-[#9FE870]"
                                    href="/">
                                    @SupaDupaNL
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] xm:w-full sm:w-full">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col">
                                <p className="text-[16px] leading-tight tracking-tight text-[#9FE870]">
                                    Enschede
                                </p>
                                <Link
                                    className="text-[30px] font-semibold leading-tight tracking-tight text-[#9FE870]"
                                    href="/">
                                    Langestraat 45a, <br /> 7511 HB
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col">
                    <motion.div
                        initial={{ borderTopWidth: 0, width: "0%" }}
                        viewport={{ once: false }}
                        whileInView={{
                            borderTopWidth: 1,
                            width: "100%",
                            borderColor: "#9FE870",
                            origin: "left"
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                    />
                    <div className="flex w-full items-center justify-between py-4">
                        <motion.h2
                            initial={{
                                y: "100%",
                            }}
                            viewport={{ once: false }}
                            whileInView={{
                                y: 0
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}
                            className="overflow-hidden text-sm text-[#9FE870]"
                        >
                            Supa Dupa 2024.
                        </motion.h2>
                        <motion.h2
                            initial={{ y: "100%" }}
                            viewport={{ once: false }}
                            whileInView={{
                                y: 0
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}
                            className="overflow-hidden text-sm text-[#9FE870]"
                        >
                            Privacy Statement.
                        </motion.h2>
                    </div>
                </div>

            </div>
        </>
    )
}