import { Marquee } from "@/components/marquee"
import { useTranslations } from "next-intl"

export const Companies = () => {
    const t = useTranslations("companiesContent");
    return (
        <>
            <Marquee
                className="text-[#ffeb69]"
                titile1="Let's build"
                titile2="good companies"
            />
            <div className="padding-x flex w-full items-center justify-center py-20">
            <div className="flex w-[70%] flex-col gap-10 xm:w-full sm:w-full">
					<div>
						<h1 className="text-[70px] font-bold leading-[60px] tracking-tight text-[#ffeb69] xm:text-[35px] xm:leading-none sm:text-[40px] sm:leading-none">
							{t("companiesHeading")}
						</h1>
					</div>
					<div>
						<p className="text-[23px] leading-normal tracking-tight text-[#ffeb69]">
							{t("companiesPara")}
						</p>
					</div>
					<div>
						<p className="text-[23px] leading-normal tracking-tight text-[#ffeb69]">
							{t("companiesPara1")}
						</p>
					</div>
					<div>
						<p className="text-[23px] leading-normal tracking-tight text-[#ffeb69]">
							{t("companiesPara2")}
						</p>
					</div>
				</div>
            </div>
        </>
    )
}