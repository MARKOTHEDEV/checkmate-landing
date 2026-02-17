"use client";

import { useState, SyntheticEvent } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const JoinCircle = () => {
  const [email, setEmail] = useState("");
  const { ref, isInView } = useInView();

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle subscription
  };

  return (
    <section className="bg-[#e6f5ed] py-[64px] md:py-[128px]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]" ref={ref}>
        {/* MOBILE layout */}
        <div className="flex flex-col items-center gap-[24px] md:hidden">
          {/* Illustration */}
          <div
            className={cn(
              isInView
                ? "animate-in fade-in zoom-in-95 duration-700 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            <img src="/chequie-mobile.svg" alt="" loading="lazy" />
          </div>

          {/* Text + form */}
          <div className="flex flex-col items-center gap-[16px] w-full">
            <p
              className={cn(
                "text-black text-[20px] font-normal text-center",
                isInView
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              {`Hi, I'm `}
              <span className="text-[#008a48]">Chequie</span>
            </p>
            <p
              className={cn(
                "text-[#262729] text-[12px] font-normal leading-[24px] tracking-[-0.18px] text-center w-[280px]",
                isInView
                  ? "animate-in fade-in duration-500 delay-300 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              I bring you firsthand access to investment opportunities,
              exclusive insights, and the latest on smarter, more sustainable
              saving. Subscribe to my newsletter and stay ahead with tips,
              updates, and features from the Chequemate community.
            </p>
          </div>

          {/* Email form */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              "w-full",
              isInView
                ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            <div className="relative w-full h-[40px] bg-white border border-[#dcdcdc] rounded-[40px] overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="absolute inset-0 h-full bg-transparent pl-[12px] pr-[145px] text-[12px] text-[#707070] placeholder-[#707070] outline-none font-medium"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 h-[48px] w-[138px] bg-[#008a48] text-[#fcfcfc] text-[12px] font-semibold"
              >
                Join the Circle
              </button>
            </div>
          </form>
        </div>

        {/* DESKTOP layout */}
        <div className="hidden md:flex items-center gap-[100px]">
          {/* Illustration with float */}
          <div
            className={cn(
              isInView
                ? "animate-in fade-in zoom-in-95 duration-700 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            <img
              src="/chequie-desktop.svg"
              alt=""
              loading="lazy"
              style={isInView ? { animation: "float 6s ease-in-out infinite 0.7s" } : undefined}
            />
          </div>

          {/* Text + form */}
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              <p
                className={cn(
                  "font-medium text-[#080808] text-[48px] leading-normal",
                  isInView
                    ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards"
                    : "opacity-0"
                )}
              >
                {`Hi, I'm `}
                <span className="text-[#3c9369]">Chequie</span>
              </p>
              <p
                className={cn(
                  "font-normal text-[#505050] text-[22px] leading-[32px] w-[451px]",
                  isInView
                    ? "animate-in fade-in duration-700 delay-400 fill-mode-forwards"
                    : "opacity-0"
                )}
              >
                I bring you firsthand access to investment opportunities,
                exclusive insights, and the latest on smarter, more sustainable
                saving. Subscribe to my newsletter and stay ahead with tips,
                updates, and features from the Chequemate community.
              </p>
            </div>

            {/* Email form */}
            <form
              onSubmit={handleSubmit}
              className={cn(
                isInView
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              <div className="relative w-[479px] h-[56px] bg-white border border-[#afafaf] rounded-[80px] overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="absolute inset-0 h-full bg-transparent pl-[31px] pr-[190px] text-[18px] text-[rgba(112,112,112,0.8)] placeholder-[rgba(112,112,112,0.8)] outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-[-2px] top-1/2 -translate-y-1/2 h-[60px] w-[184px] bg-[#008a48] text-[#fcfcfc] text-[18px] font-medium"
                >
                  Join the Circle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCircle;
