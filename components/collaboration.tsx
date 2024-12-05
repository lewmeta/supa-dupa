/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import { useRef } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { Navigation } from "swiper/modules"
import { useTranslations } from "next-intl"
import { Swiper, SwiperSlide } from "swiper/react";

import {
    arrowLeft,
    arrowRight,
    collaborationCircle,
    hartman1,
    hartmanBlack,
    saion1,
    saionBlack,
} from "@/public";

import "swiper/css";
import { collaborationItems } from "@/constants"


export const Collaboration = () => {

    const container = useRef(null);
    const t = useTranslations("ourImpactContent");
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const sc = useTransform(scrollYProgress, [0, 1], [100, -1500]);

    const swiperRef = useRef<any | null>(null);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    }

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    }

    return (
        <div
            id="our-impact"
            className="padding-x w-full bg-[#260A2F] py-10"
        >
            <div className="flex w-full items-center justify-start xm:pb-10 sm:pb-10">
                <div className="flex w-[72%] flex-col gap-4 xm:w-full sm:w-full">
                    <h4 className="text-[24px] leading-tight tracking-tighter text-[#FFD7EF]">
                        {t("ourImpactHeading1")}
                    </h4>

                    <h1 className="text-[80px] font-bold leading-[80px] tracking-tighter text-[#FFD7EF] xm:text-[35px] xm:leading-[40px] sm:text-[40px] sm:leading-[50px]">
                        {t("ourImpactHeading2")}
                    </h1>
                </div>
            </div>
            <div className="w-full py-20 xm:hidden sm:hidden" ref={container}>
                <motion.div
                    style={{ x: sc }}
                    className="flex w-full gap-3 whitespace-nowrap"
                >
                    {collaborationItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex min-w-[500px] items-center justify-center rounded-[20px] border-[1.5px] border-[#FFD7EF] px-5 py-5"
                        >
                            <Image
                                src={item.src}
                                alt="companiesImg"
                                className="h-[100px] w-[600px] object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="w-full rounded-[20px] bg-[#9FE870] pb-10">
                <div className="overflow-hidden p-5">
                    <Swiper
                        modules={[Navigation]}
                        loop
                        spaceBetween={30}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>
							<motion.div className="flex w-full justify-between gap-20 rounded-[30px] p-14 xm:flex-col xm:gap-10 xm:p-0 sm:flex-col sm:gap-10 sm:p-0">
								<div className="flex w-1/2 flex-col gap-14 pt-10 xm:w-full xm:gap-5 sm:w-full sm:gap-5">
									<Image
										src={hartmanBlack}
										alt="whatwedoImg"
										className="w-[100px] object-cover text-black"
									/>
									<div className="flex flex-col gap-4">
										<h4 className="text-[40px] leading-tight tracking-tight xm:text-[27px] sm:text-[27px]">
											{t("title1")}
										</h4>
										<div className="flex flex-col">
											<h2 className="text-[24px] leading-tight tracking-tighter xm:text-[20px] sm:text-[20px]">
												{t("heading1")}
											</h2>
											<h4 className="text-[24px] leading-tight tracking-tighter xm:text-[20px] sm:text-[20px]">
												{t("para1")}
											</h4>
										</div>
									</div>
								</div>
								<motion.div className="relative flex w-1/2 items-center justify-center xm:w-full sm:w-full">
									<Image
										src={hartman1}
										alt="img"
										className="w-full object-cover"
									/>
									<motion.div
										animate={{ rotate: [-360, 360] }}
										transition={{
											repeat: Infinity,
											repeatType: "loop",
											duration: 20,
											ease: "linear",
										}}
										className="absolute -bottom-14 right-20 flex items-center xm:hidden sm:hidden">
										<Image
											src={collaborationCircle}
											alt="heroCircleImg"
											width={120}
											height={120}
										/>
									</motion.div>
								</motion.div>
							</motion.div>
						</SwiperSlide>
                        <SwiperSlide>
							<motion.div className="flex w-full justify-between gap-20 rounded-[30px] p-14 xm:flex-col xm:gap-10 xm:p-0 sm:flex-col sm:gap-5 sm:p-0">
								<div className="flex w-1/2 flex-col gap-14 pt-10 xm:w-full xm:gap-5 sm:w-full sm:gap-5">
									<Image
										src={saionBlack}
										alt="whatwedoImg"
										className="w-[100px] object-cover text-black"
									/>
									<div className="flex flex-col gap-4">
										<h4 className="text-[40px] leading-tight tracking-tight xm:text-[27px] sm:text-[27px]">
											{t("title2")}
										</h4>
										<div className="flex flex-col">
											<h2 className="text-[24px] leading-tight tracking-tighter xm:text-[20px] sm:text-[20px]">
												{t("heading2")}
											</h2>
											<h4 className="text-[24px] leading-tight tracking-tighter xm:text-[20px] sm:text-[20px]">
												{t("para2")}
											</h4>
										</div>
									</div>
								</div>
								<motion.div className="relative flex h-full w-1/2 items-center justify-center xm:w-full sm:w-full">
									<Image
										src={saion1}
										alt="img"
										className="w-full object-cover"
									/>
									<motion.div
										animate={{ rotate: [-360, 360] }}
										transition={{
											repeat: Infinity,
											repeatType: "loop",
											duration: 20,
											ease: "linear",
										}}
										className="absolute -bottom-14 right-20 flex items-center xm:hidden sm:hidden">
										<Image
											src={collaborationCircle}
											alt="heroCircleImg"
											width={120}
											height={120}
										/>
									</motion.div>
								</motion.div>
							</motion.div>
						</SwiperSlide>
                    </Swiper>
                    <div className="flex w-fit gap-2 pl-10 xm:p-0 xm:pt-5 sm:p-0 sm:pt-5">
						<div
							onClick={handlePrev}
							className="cursor-pointer rounded-[30px] bg-[#FFD7EF] px-3 py-2 transition-all duration-200 ease-linear hover:bg-[#FFEB69]">
							<Image
								src={arrowLeft}
								alt="arrowLeft"
								className="!w-[55px]"
								width={55}
								height={55}
							/>
						</div>
						<div
							onClick={handleNext}
							className="cursor-pointer rounded-[30px] bg-[#FFD7EF] px-3 py-2 transition-all duration-200 ease-linear hover:bg-[#FFEB69]">
							<Image
								src={arrowRight}
								alt="arrowRight"
								width={55}
								height={55}
							/>
						</div>
					</div>
                </div>
            </div>
        </div>
    )
}