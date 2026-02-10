"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Michael Oghenevogaga",
    location: "Lagos, Nigeria",
    image: "https://www.figma.com/api/mcp/asset/5ba3af18-ded7-4587-a337-d925f48a1447",
    text: "The app is user friendly. I just finished registering Chequemate is literally the best savings app ever.",
  },
  {
    name: "Faramade Gloria Olu-Falade",
    location: "Lagos, Nigeria",
    image: "https://www.figma.com/api/mcp/asset/d0fa8e89-49a0-4f1f-8d99-40209fa54af7",
    text: "The UI is beautiful, the features are thoughtful, and the savings rules keep me accountable. The visual goals make saving feel real.",
  },
  {
    name: "Gloria Tejuosho",
    location: "Lagos, Nigeria",
    image: "https://www.figma.com/api/mcp/asset/bbc5d9df-d905-41ec-a5dc-f028cd7e5358",
    text: "The registration was pretty straightforward. I don't think I spent up to three minutes when creating my account.",
  },
];

const SmallArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M13 6L19 12L13 18" stroke="#008A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LargeArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M13 6L19 12L13 18" stroke="#008A48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Avatar = ({ src, name, size }: { src: string; name: string; size: number }) => (
  <div
    className="rounded-full overflow-hidden bg-gray-100 shrink-0"
    style={{ width: size, height: size }}
  >
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover"
      onError={(e) => {
        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e6f5ed&color=008a48`;
      }}
    />
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="bg-white md:bg-[#fcfcfc] py-[40px] md:py-[80px]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]">

        {/* ── Mobile heading (two lines) ── */}
        <p className="md:hidden font-bold text-[#080808] text-[20px] text-center leading-tight mb-[16px]">
          Testimonials
          <br />
          <span>A </span>
          <span className="text-[#2d9e4f]">Mate</span>
          <span> once said...</span>
        </p>

        {/* ── Desktop heading (single line) ── */}
        <p className="hidden md:block font-medium text-[#333] text-[48px] text-center leading-[60px] mb-[80px]">
          <span>Testimonials - A </span>
          <span className="text-[#38c166]">Mate</span>
          <span> once said...</span>
        </p>

        {/* ══ MOBILE: single-card carousel ══ */}
        <div className="md:hidden">
          <div className="relative flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 z-10 flex items-center justify-center w-[24px] h-[24px] rounded-full border-[0.4px] border-[#008A48] bg-[#FFFDF8] rotate-180 shrink-0"
            >
              <SmallArrow />
            </button>

            {/* Card */}
            <div className="bg-white rounded-[12px] shadow-[1px_1px_1px_0px_rgba(0,0,0,0.12),-1px_-1px_1px_0px_rgba(0,0,0,0.12)] w-[300px] py-[24px] px-[12px] flex flex-col items-center gap-[24px]">
              <div className="flex flex-col items-center gap-[12px]">
                <Avatar src={testimonials[current].image} name={testimonials[current].name} size={80} />
                <div className="flex flex-col items-center gap-[8px] text-center">
                  <p className="font-bold text-[#080808] text-[16px]">{testimonials[current].name}</p>
                  <p className="text-[#6d6d6d] text-[14px] font-normal">{testimonials[current].location}</p>
                </div>
              </div>
              <p className="text-black text-[12px] font-normal leading-[26px] text-center w-full">
                {testimonials[current].text}
              </p>
            </div>

            {/* Right arrow */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 z-10 flex items-center justify-center w-[24px] h-[24px] rounded-full border-[0.4px] border-[#008A48] bg-[#FFFDF8] shrink-0"
            >
              <SmallArrow />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-[8px] mt-[16px]">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-[8px] h-[8px] rounded-full transition-colors ${
                  i === current ? "bg-[#008A48]" : "bg-[#D9D9D9]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ══ DESKTOP: 3-card grid + bottom arrows ══ */}
        <div className="hidden md:flex flex-col items-center gap-[31px]">
          {/* Cards row */}
          <div className="flex gap-[35px] items-start">
            {testimonials.map(({ name, location, image, text }) => (
              <div
                key={name}
                className="bg-[#fcfcfc] border border-[#008A48] rounded-[12px] w-[390px] h-[395px] overflow-hidden flex flex-col items-center pt-[39px] px-[16px] pb-[24px]"
              >
                <div className="flex flex-col items-center gap-[24px] w-full">
                  <div className="flex flex-col items-center gap-[12px]">
                    <Avatar src={image} name={name} size={100} />
                    <div className="flex flex-col items-center gap-[4px] text-center">
                      <p className="font-bold text-[#080808] text-[16px] leading-normal">{name}</p>
                      <p className="text-[#6d6d6d] text-[12px] font-normal leading-[20px]">{location}</p>
                    </div>
                  </div>
                  <p className="text-[#080808] text-[16px] font-normal leading-[26px] text-center">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom navigation arrows */}
          <div className="flex items-center gap-[12px]">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="flex items-center justify-center w-[48px] h-[48px] rounded-full border-[0.8px] border-[#008A48] bg-[#FFFDF8] rotate-180 shrink-0"
            >
              <LargeArrow />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="flex items-center justify-center w-[48px] h-[48px] rounded-full border-[0.8px] border-[#008A48] bg-[#FFFDF8] shrink-0"
            >
              <LargeArrow />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
