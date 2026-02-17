"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";

const ReadyToGetStarted = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="bg-white py-[48px] md:py-[0]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]" ref={ref}>
        {/* MOBILE layout */}
        <div className="flex flex-col items-center gap-[24px] md:hidden">
          {/* Illustration top */}
          <div
            className={cn(
              isInView
                ? "animate-in fade-in zoom-in-95 duration-700 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            <img src="/mobile-celebrate.svg" alt="" loading="lazy" />
          </div>

          {/* Text + button */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h2
              className={cn(
                "font-bold text-[#101010] text-[20px] leading-tight",
                isInView
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              Ready to Get Started with{" "}
              <span className="text-[#008a48]">Chequie?</span>
            </h2>
            <p
              className={cn(
                "text-[#101010]/90 text-[12px] leading-[22px] w-[295px]",
                isInView
                  ? "animate-in fade-in duration-500 delay-300 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              You can contact our support team via email at{" "}
              <strong>support@Chequemateapp.com</strong> or call us at{" "}
              <strong>02013306493</strong>. Our team is available Monday to
              Friday, 9 a.m. to 5 p.m.
            </p>
            <button
              className={cn(
                "w-full h-[48px] bg-[#008a48] rounded-[4px] text-white text-[14px] font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform",
                isInView
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              Contact us
            </button>
          </div>
        </div>

        {/* DESKTOP layout */}
        <div className="hidden md:flex items-center justify-between h-[484px] gap-[50px]">
          {/* Left: text */}
          <div className="flex flex-col gap-[24px] items-start">
            <div className="flex flex-col gap-[16px]">
              <h2
                className={cn(
                  "font-bold text-[#101010] text-[32px] leading-[1.2]",
                  isInView
                    ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards"
                    : "opacity-0"
                )}
              >
                Ready to Get Started with{" "}
                <span className="text-[#008a48]">Chequie?</span>
              </h2>
              <p
                className={cn(
                  "text-[#101010]/90 text-[20px] leading-[30px] w-[621px]",
                  isInView
                    ? "animate-in fade-in duration-700 delay-300 fill-mode-forwards"
                    : "opacity-0"
                )}
              >
                You can contact our support team via email at{" "}
                <strong className="font-bold">support@chequemateapp.com</strong>{" "}
                or call us at <strong className="font-bold">02013306493</strong>
                . Our team is available Monday to Friday, 9 a.m. to 5 p.m.
              </p>
            </div>
            <button
              className={cn(
                "h-[56px] px-[40px] bg-[#008A48] rounded-[4px] text-white text-[18px] font-medium shadow-[0px_12px_50px_0px_rgba(254,134,103,0.1)] hover:scale-[1.02] active:scale-[0.98] transition-transform",
                isInView
                  ? "animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-forwards"
                  : "opacity-0"
              )}
            >
              Contact us
            </button>
          </div>

          {/* Right: duck + confetti */}
          <div
            className={cn(
              isInView
                ? "animate-in fade-in zoom-in-95 duration-700 delay-200 fill-mode-forwards"
                : "opacity-0"
            )}
          >
            <img
              src="/desktop-celebrate.svg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
