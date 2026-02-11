"use client";

import SubScribeToNewsLetter from "@/components/ui/SubScribeToNewsLetter";
import { useState, SyntheticEvent } from "react";

const socialIconsMobile = [
  { icon: "/intgram-mobile.svg", href: "#", label: "Instagram" },
  { icon: "/facebook-mobile.svg", href: "#", label: "Facebook" },
  { icon: "/twitter-mobile.svg", href: "#", label: "X" },
  { icon: "/linkdin-mobile.svg", href: "#", label: "LinkedIn" },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle subscription
  };

  return (
    <footer className="bg-[#008a48] px-[20px] py-[64px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-[60px] md:flex-row md:gap-[99px] mb-[16px] md:mb-[69px]">
          <div className="flex flex-col items-center justify-center md:w-[278px] md:items-start ">
            <img
              src="/checkmate-logo.svg"
              alt="Checkmate Logo"
              className="h-[24px] brightness-0 invert md:w-[199.9px] md:h-[32px] md:mr-auto md:translate-x-[-30px]"
            />
            <p className="text-[14px] text-[#EDEDED] font-regular text-center py-[12px] md:text-left md:text-[18px] ">
              Chequemate is an Ajo management tool that helps Ajo admins and
              members with safe, transparent, efficient and rewarding Ajo
              systems.
            </p>
            <div className="flex  gap-[12px] items-center md:hidden">
              <img src="/intgram-mobile.svg" alt="" />
              <img src="/facebook-mobile.svg" alt="" />
              <img src="/twitter-mobile.svg" alt="" />
              <img src="/linkdin-mobile.svg" alt="" />
            </div>
            <div className="flex  gap-[12px] items-center">
              <img src="/instabig.png" alt="" />
              <img src="/facebookbig.svg" alt="" />
              <img src="/twitterBig.svg" alt="" />
              <img src="/linkdinbig.svg" alt="" />
            </div>
          </div>

          <div className="flex items-start justify-between text-[#FFFFFF] w-[281px] mx-auto md:w-[241px] md:mx-[unset]">
            <div className="flex flex-col gap-[23px] font-medium text-[12px] ">
              <p className="font-bold text-[16px] ">Features</p>

              <p>Group Savings</p>
              <p>Solo Savings</p>
              <p>Fixed Deposit</p>
            </div>

            <div className="flex flex-col gap-[23px] font-medium text-[12px]">
              <p className="font-bold text-[16px]">Resource</p>
              <p>Blog</p>
              <p>Newsletter</p>
              <p>Terms & Services</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <SubScribeToNewsLetter />
        </div>
        <div className="border-t-[1px] mt-[7px] pt-[16px] text-center text-[#FFFFFF] font-medium text-[10px] md:text-[14px]">
          <p>Copyright 2024 © The Owlet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
