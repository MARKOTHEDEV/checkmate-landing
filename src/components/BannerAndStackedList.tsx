"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

export type StackBannerProp = {
  title: string;
  subTitle: string;
  image: string;
  items: { head: string; body: string }[];
  flxDirection: boolean; //note it only affect flex direction for desktop
  description: string;
};

const BannerAndStackedList = ({
  title,
  subTitle,
  image,
  flxDirection,
  items,
  description,
}: StackBannerProp) =>
  // { title, subTitle, image, items }: Prop
  {
    const { ref: headerRef, isInView: headerInView } = useInView();
    const { ref: contentRef, isInView: contentInView } = useInView();

    return (
      <div className="flex gap-[32px] flex-col px-[20px] my-[48px] max-w-[1200px] mx-auto ">
        <div className="text-center " ref={headerRef}>
          <p className={cn(
            "text-[#12725B] font-regular text-[10px] md:font-medium md:text-[12px]",
            headerInView ? "animate-in fade-in duration-500 fill-mode-forwards" : "opacity-0"
          )}>
            {title}
          </p>
          <p className={cn(
            "text-[20px] font-medium text-[#333] md:font-medium md:text-[48px]",
            headerInView ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-forwards" : "opacity-0"
          )}>
            {subTitle}
          </p>
        </div>

        <div
          ref={contentRef}
          className={`flex flex-col md:flex-row md:gap-[100px] md:items-center ${flxDirection ? "md:flex-row-reverse" : ""}`}
        >
          <img
            src={image}
            className={cn(
              "block w-full h-[502px]  md:w-[600px] md:h-[900px]",
              contentInView ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards" : "opacity-0"
            )}
            alt=""
          />
          <div className=" mt-[40px] md:w-full">
            <p className={cn(
              "text-[13px] font-medium pb-[12px]",
              contentInView ? "animate-in fade-in duration-500 delay-100 fill-mode-forwards" : "opacity-0"
            )}>{description}</p>
            <div className="flex flex-col gap-[16px]  md:w-full ">
              {items.map(({ head, body }, index) => (
                <div
                  key={index}
                  className={cn(
                    " bg-[#008A48] rounded-[12px] py-[24px] px-[12px] text-[#FFFFFF]  ",
                    contentInView ? `animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards delay-${(index + 1) * 150}` : "opacity-0"
                  )}
                >
                  <p className="pb-[12px] font-bold text-[14px] md:text-[20px]">
                    {head}
                  </p>
                  <p className="font-regular text-[12px] md:font-medium md:text-[14px]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default BannerAndStackedList;
