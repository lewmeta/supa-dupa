"use client"

import { motion } from "framer-motion"
import { opacity, slideUp } from "@/motion"
import { useEffect, useState } from "react"

export const Preload = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
        } Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height
        }  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
        } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    return (
        <motion.div
        variants={slideUp}
            initial="initial"
            exit={"exit"}
            className="fixed z-20 flex h-screen w-screen items-center justify-center bg-[#9FE870]"
        >
            {dimension.width > 0 && (
                <>
                    <motion.div
                        className="absolute z-10 flex items-center gap-10 overflow-hidden xm:gap-3 sm:gap-3"
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                    >
                        <motion.p
                            initial={{ y: -200 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: [0.76, 0, 0.24, 1]
                            }}
                            className="text-[40px] font-medium leading-tight tracking-tighter text-[#163300] xm:text-[20px] sm:text-[20px]"
                        >
                            Let&apos;s Start
                        </motion.p>
                        <motion.img
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 90 }}
                            transition={{
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1]
                            }}
                            src="/loadingImg.svg"
                            alt="loadingImg"
                            className="xs:w-20 h-[250px] w-[250px] xm:h-20 sm:h-20 sm:w-20"
                        />
                        <motion.p
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-[40px] font-medium leading-tight tracking-tighter text-[#163300] xm:text-[20px] sm:text-[20px]">
                            Something Good!
                        </motion.p>
                    </motion.div>
                    <svg className="h-calc-100 absolute top-0 w-full">
                        <motion.path
                            className="fill-[#9FE870]"
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        />
                    </svg>
                </>
            )}
        </motion.div>
    )
}