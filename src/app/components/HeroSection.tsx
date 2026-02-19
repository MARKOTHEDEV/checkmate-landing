"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="px-[20px] pt-[40px] flex flex-col gap-[40px] md:flex-row md:max-w-[1200px] md:mx-auto ">
      <div className="flex items-center flex-col md:items-start md:h-[536px] relative ">
        <p
          className={cn(
            "mb-[16px] text-[#3385F7] text-[6px] font-normal pt-[7.17px] pb-[5.17px] px-[12.74px] inline-block mx-auto bg-[#CCE1FD] rounded-[33.913px] md:text-[16px] md:pt-[16px] md:pb-[11px] md:font-medium md:px-[39px] md:text-[#0052C4] md:mb-[40px] md:mx-[unset]",
            mounted
              ? "animate-in fade-in slide-in-from-top-4 duration-500 fill-mode-forwards"
              : "opacity-0"
          )}
        >
          Over 1000+ USERS on CHEQUEMATE
        </p>
        <h1 className="font-semibold text-[23px] text-center md:text-[60px] md:text-left md:leading-[80px]">
          <span
            className={cn(
              "block text-nowrap",
              mounted
                ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            Welcome to a world
          </span>
          <span
            className={cn(
              "block text-nowrap",
              mounted
                ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            of rewarding and
          </span>
          <span
            className={cn(
              "block text-nowrap",
              mounted
                ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            stress-free{" "}
            <span className="text-brand-green">Ajo</span>
          </span>
        </h1>
        <p
          className={cn(
            "text-center text-[#505050] text-[16px] mt-[10px] mb-[20px] font-normal leading-[24px] md:text-left md:leading-[34px] md:text-[24px] md:flex md:flex-col",
            mounted
              ? "animate-in fade-in duration-700 delay-500 fill-mode-forwards"
              : "opacity-0"
          )}
        >
          <span className="md:text-nowrap">
            Chequemate digitizes Ajo, so you can save, contribute,
          </span>
          <span className="md:text-nowrap">
            and grow with your circle across borders.
          </span>
        </p>
        <div
          className={cn(
            "flex items-center gap-[15px] md:w-[322px] md:absolute md:bottom-0",
            mounted
              ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700 fill-mode-forwards"
              : "opacity-0"
          )}
        >
          <a href="https://play.google.com/store/apps/details?id=com.chequemate.app" target="_blank" rel="noopener noreferrer">
            <img src="/Google_Play.svg" className="block w-full" alt="Get it on Google Play" />
          </a>
          <a href="https://apps.apple.com/us/app/chequemate-savings/id6736896787" target="_blank" rel="noopener noreferrer">
            <img src="/app_store.svg" className="block w-full" alt="Download on the App Store" />
          </a>
        </div>
      </div>
      <img
        src="/optimized/hero-sec-img.optimized.webp"
        alt=""
        className={cn(
          "w-full block h-[335px] md:h-[562px]",
          mounted
            ? "animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-forwards"
            : "opacity-0"
        )}
        style={mounted ? { animation: "float 6s ease-in-out infinite 1.3s" } : undefined}
        fetchPriority="high"
      />
    </div>
  );
};

export default HeroSection;
