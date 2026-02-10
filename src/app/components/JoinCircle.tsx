"use client";

import { useState, SyntheticEvent } from "react";

/* ─── Component ──────────────────────────────────────────────────────────── */
const JoinCircle = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle subscription
  };

  return (
    <section className="bg-[#e6f5ed] py-[64px] md:py-[128px]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]">
        {/* ══ MOBILE layout ══ */}
        <div className="flex flex-col items-center gap-[24px] md:hidden">
          {/* Illustration */}
          <img src="/chequie-mobile.svg" alt="" />

          {/* Text + form */}
          <div className="flex flex-col items-center gap-[16px] w-full">
            {/* Heading */}
            <p className="text-black text-[20px] font-normal text-center">
              {`Hi, I'm `}
              <span className="text-[#008a48]">Chequie</span>
            </p>
            {/* Description */}
            <p className="text-[#262729] text-[12px] font-normal leading-[24px] tracking-[-0.18px] text-center w-[280px]">
              I bring you firsthand access to investment opportunities,
              exclusive insights, and the latest on smarter, more sustainable
              saving. Subscribe to my newsletter and stay ahead with tips,
              updates, and features from the Chequemate community.
            </p>
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="w-full">
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

        {/* ══ DESKTOP layout ══ */}
        <div className="hidden md:flex items-center gap-[100px]">
          {/* Illustration */}
          <img src="/chequie-desktop.svg" alt="" />

          {/* Text + form */}
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              {/* Heading */}
              <p className="font-medium text-[#080808] text-[48px] leading-normal">
                {`Hi, I'm `}
                <span className="text-[#3c9369]">Chequie</span>
              </p>
              {/* Description */}
              <p className="font-normal text-[#505050] text-[22px] leading-[32px] w-[451px]">
                I bring you firsthand access to investment opportunities,
                exclusive insights, and the latest on smarter, more sustainable
                saving. Subscribe to my newsletter and stay ahead with tips,
                updates, and features from the Chequemate community.
              </p>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit}>
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
