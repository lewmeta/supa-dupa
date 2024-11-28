"use client"

import { useRef } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import { arrowLeft, arrowRight } from "@/public";
import "swiper/css";

export const Slider = () => {
    const t = useTranslations("sliderContent");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any | null>(null);

    const handlePrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    }

    const handleNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    }

    return (
        <div
            id="transformation"
            className="flex w-full flex-col gap-10 bg-[#FFD7EF] pb-10 pt-20">
            <div className="padding-x flex w-full items-center justify-start">
                <div className="flex w-[72%] flex-col gap-7 xm:w-full sm:w-full">
                    <h4 className="text-[24px] leading-tight tracking-tighter text-[#260A2F]">
                        {t("sliderHeading1")}
                    </h4>

                    <h1 className="text-[80px] font-bold leading-[80px] tracking-tighter text-[#260A2F] xm:text-[35px] xm:leading-[40px] sm:text-[40px] sm:leading-[50px]">
                        {t("sliderHeading2")}
                    </h1>
                    <h4 className="text-[24px] leading-normal tracking-tighter text-[#260A2F] xm:text-[20px] sm:text-[20px]">
                        {t("sliderHeading3")}
                    </h4>
                </div>
            </div>
            <div className="w-full">
                <div className="overflow-hidden p-5">
                    <Swiper
                        modules={[Navigation]}
                        loop
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1490: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}>
                        <SwiperSlide>
                            <div className="swiper-slide min-h-[450px] cursor-grab rounded-[30px] bg-[#260A2F] p-7 xm:min-h-[500px] sm:min-h-[500px]">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF] xm:text-[50px] sm:text-[50px]">
                                        {t("title1")}
                                    </h2>
                                    <h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF] xm:text-[20px] sm:text-[20px]">
                                        {t("heading1")}
                                    </h2>
                                    <p className="text-[20px] font-normal leading-normal tracking-tight text-[#FFD7EF] xm:text-[16px] sm:text-[16px]">
                                        {t("para1")}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide min-h-[450px] cursor-grab rounded-[30px] bg-[#260A2F] p-7 xm:min-h-[500px] sm:min-h-[500px]">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF] xm:text-[50px] sm:text-[50px]">
                                        {t("title2")}
                                    </h2>
                                    <h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF] xm:text-[20px] sm:text-[20px]">
                                        {t("heading2")}
                                    </h2>
                                    <p className="text-[20px] font-normal leading-normal tracking-tight text-[#FFD7EF] xm:text-[16px] sm:text-[16px]">
                                        {t("para2")}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide min-h-[450px] cursor-grab rounded-[30px] bg-[#260A2F] p-7 xm:min-h-[500px] sm:min-h-[500px]">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF] xm:text-[50px] sm:text-[50px]">
                                        {t("title3")}
                                    </h2>
                                    <h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF] xm:text-[20px] sm:text-[20px]">
                                        {t("heading3")}
                                    </h2>
                                    <p className="text-[20px] font-normal leading-normal tracking-tight text-[#FFD7EF] xm:text-[16px] sm:text-[16px]">
                                        {t("para3")}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide min-h-[450px] cursor-grab rounded-[30px] bg-[#260A2F] p-7 xm:min-h-[500px] sm:min-h-[500px]">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF] xm:text-[50px] sm:text-[50px]">
                                        {t("title4")}
                                    </h2>
                                    <h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF] xm:text-[20px] sm:text-[20px]">
                                        {t("heading4")}
                                    </h2>
                                    <p className="text-[20px] font-normal leading-normal tracking-tight text-[#FFD7EF] xm:text-[16px] sm:text-[16px]">
                                        {t("para4")}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide min-h-[450px] cursor-grab rounded-[30px] bg-[#260A2F] p-7 xm:min-h-[500px] sm:min-h-[500px]">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF] xm:text-[50px] sm:text-[50px]">
                                        {t("title5")}
                                    </h2>
                                    <h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF] xm:text-[20px] sm:text-[20px]">
                                        {t("heading5")}
                                    </h2>
                                    <p className="text-[20px] font-normal leading-normal tracking-tight text-[#FFD7EF] xm:text-[16px] sm:text-[16px]">
                                        {t("para5")}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="mt-6 flex w-full gap-2">
                        <div
                            onClick={handlePrev}
                            className="cursor-pointer rounded-[30px] bg-[#9fe870] px-3 py-2 transition-all duration-200 ease-linear hover:bg-[#FFEB69]">
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
                            className="cursor-pointer rounded-[30px] bg-[#9fe870] px-3 py-2 transition-all duration-200 ease-linear hover:bg-[#FFEB69]">
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