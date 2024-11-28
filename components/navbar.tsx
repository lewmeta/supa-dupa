"use client"

import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { blackCircle, logo } from "@/public";
import { TextHover } from "./text-hover";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/constants";
import { navVariants } from "@/motion";

export const Navbar = () => {
    const t = useTranslations("navbarContent");
    const [active, setActive] = useState(false);

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const currentLocale = useLocale();

    const onSelectChange = () => {
        const locales = ["en", "nl", "fr"];
        // const nextLocale =
        //     currentLocale == "en" ? "nl" : currentLocale === "nl" ? "fr" :
        //         "en";
        const nextLocale = locales[(locales.indexOf(currentLocale) + 1) % locales.length];

        startTransition(() => {
            router.replace(`/${nextLocale}`)
        })
    };

    const getNextLocale = (locale: string) => {
        const locales = ["en", "nl", "fr"];
        const currentIndex = locales.indexOf(locale);
        return locales[(currentIndex + 1) % locales.length];
    }
    return (
        <>
            <motion.nav
                className="padding-x fixed left-0 top-0 z-50 flex w-full items-center justify-between py-3 backdrop-blur-[5px]"
                initial="hidden"
                whileInView={"vissible"}
                variants={navVariants}
            >

                <div className="w -[50%]">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="supadupa logo"
                            width={100}
                            height={100}
                            className="xm:w-[70px] sm:w-[70px]"
                        />
                    </Link>
                </div>
                <div className="flex gap-x-4">
                    <button
                        className="rounded-full bg-secondary px-6 py-3 text-[17px] font-semibold uppercase leading-tight tracking-tight text-[#260A2F] xm:px-4 xm:py-2 sm:px-4 sm:py-2"
                        onClick={onSelectChange}
                        disabled={isPending}
                    >
                        {getNextLocale(currentLocale)}
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setActive(!active)}
                            className="group flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-[17px] font-semibold capitalize leading-tight tracking-tight text-[#260A2F] xm:px-4 xm:py-2 sm:px-4 sm:py-2"
                        >
                            <Image
                                src={blackCircle}
                                alt="blackCircle"
                                width={20}
                                height={20}
                                className="transition-all duration-300 ease-linear group-hover:rotate-[60deg] xm:hidden sm:hidden"
                            />
                            <TextHover
                                title1="Menu"
                                title2="Menu"
                            />
                        </button>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={active ? { scaleY: 1 } : { scaleY: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeInOut",
                            }}
                        >
                            <AnimatePresence mode="wait">
                                {active && (
                                    <motion.div 
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{ opacity: 0}}
                                    className="absolute right-0 mt-8 flex flex-col gap-2 rounded-[20px] bg-secondary py-8 pl-5 pr-16">
                                        {links.map((link) => (
                                            <Link
                                                key={link.id}
                                                href={`#${link.href}`}
                                                className="bg-secondary text-[16px] font-semibold capitalize leading-tight tracking-tight text-[#260A2F]"
                                                onClick={() => setActive(!active)}
                                            >
                                                {t(link.href)}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}