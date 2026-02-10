"use client";

import { useState, SyntheticEvent } from "react";

/* ─── Social icons ───────────────────────────────────────────────────────── */
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.15)" />
    <path
      d="M16 10.4c-1.513 0-1.703.006-2.298.034-1.48.067-2.3.893-2.367 2.367C11.306 13.397 11.3 13.587 11.3 16s.006 1.703.034 2.298c.067 1.474.887 2.3 2.367 2.367.595.028.785.034 2.298.034 1.514 0 1.703-.006 2.298-.034 1.48-.067 2.3-.893 2.367-2.367.028-.595.034-.785.034-2.298 0-1.514-.006-1.703-.034-2.298-.067-1.474-.887-2.3-2.367-2.367C17.703 10.406 17.513 10.4 16 10.4zm0 1.005c1.487 0 1.663.006 2.252.032 1.228.056 1.756.584 1.812 1.812.026.589.032.765.032 2.252s-.006 1.663-.032 2.252c-.056 1.228-.584 1.756-1.812 1.812-.589.026-.765.032-2.252.032-1.487 0-1.663-.006-2.252-.032-1.228-.056-1.756-.584-1.812-1.812C11.91 17.163 11.904 16.987 11.904 16.5v-1c0-1.487.006-1.663.032-2.252.056-1.228.584-1.756 1.812-1.812C14.337 11.411 14.513 11.405 16 11.405zM16 13.3a2.7 2.7 0 100 5.4 2.7 2.7 0 000-5.4zm0 1.005a1.695 1.695 0 110 3.39 1.695 1.695 0 010-3.39zm3.468-1.127a.631.631 0 100 1.262.631.631 0 000-1.262z"
      fill="white"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.15)" />
    <path
      d="M17.333 22.4v-5.867h1.974l.296-2.293h-2.27v-1.464c0-.664.184-1.115 1.136-1.115h1.212V9.53A16.19 16.19 0 0017.8 9.4c-1.748 0-2.945 1.067-2.945 3.024v1.69H12.8v2.293h2.055V22.4h2.478z"
      fill="white"
    />
  </svg>
);

const XIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.15)" />
    <path
      d="M17.78 14.77L22.2 9.6h-1.06l-3.77 4.38-3.01-4.38H10.4l4.64 6.75L10.4 21.6h1.06l4.06-4.72 3.24 4.72H23.2l-5.42-6.83zm-4.7-4.18h1.64l7.45 10.83H20.5L13.08 10.59z"
      fill="white"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="rgba(255,255,255,0.15)" />
    <path
      d="M11.4 13.6h2.2V22h-2.2v-8.4zM12.5 12.6a1.1 1.1 0 110-2.2 1.1 1.1 0 010 2.2zM22 22h-2.2v-4.1c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.09-1.61 2.22V22H14.6v-8.4h2.11v1.15h.03c.29-.56 1.01-1.15 2.08-1.15 2.23 0 2.64 1.47 2.64 3.38V22z"
      fill="white"
    />
  </svg>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const features = ["Group Savings", "Solo Savings", "Fixed Deposit"];
const resources = ["Blog", "Newsletter", "Terms & Services", "Privacy Policy"];

const socialIcons = [
  { icon: <InstagramIcon />, href: "#", label: "Instagram" },
  { icon: <FacebookIcon />, href: "#", label: "Facebook" },
  { icon: <XIcon />, href: "#", label: "X" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle subscription
  };

  return (
    <footer className="bg-[#008a48]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px] pt-[64px] md:pt-[120px] pb-[32px] md:pb-[48px]">

        {/* ══ MOBILE layout ══ */}
        <div className="flex flex-col gap-[40px] md:hidden">
          {/* Logo + description + socials */}
          <div className="flex flex-col items-center gap-[16px]">
            <img
              src="/checkmate-logo.svg"
              alt="Checkmate Logo"
              className="h-[24px] brightness-0 invert"
            />
            <p className="text-[#ededed]/90 text-[12px] leading-[1.6] text-center w-[280px]">
              Chequemate helps you save smarter, contribute to Ajo circles, and
              grow your money with confidence — all in one app.
            </p>
            <div className="flex items-center gap-[12px]">
              {socialIcons.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links: 2-column grid */}
          <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px]">
            {/* Features */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-white font-bold text-[14px]">Features</p>
              <ul className="flex flex-col gap-[12px]">
                {features.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#ededed]/80 text-[12px] font-medium hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-[16px]">
              <p className="text-white font-bold text-[14px]">Resource</p>
              <ul className="flex flex-col gap-[12px]">
                {resources.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#ededed]/80 text-[12px] font-medium hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-[16px]">
            <p className="text-[#fafafa] text-[14px] font-semibold">
              Subscribe to Newsletter
            </p>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative w-full h-[44px] bg-white border border-white/20 rounded-[44px] overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="absolute inset-0 h-full bg-transparent pl-[16px] pr-[120px] text-[12px] text-[#707070] placeholder-[#707070] outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-[48px] w-[110px] bg-[#006835] text-white text-[12px] font-semibold"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ══ DESKTOP layout ══ */}
        <div className="hidden md:flex gap-[99px] items-start">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-[24px]">
            <img
              src="/checkmate-logo.svg"
              alt="Checkmate Logo"
              className="h-[30px] brightness-0 invert"
            />
            <p className="text-[#ededed]/90 text-[18px] leading-[1.6] w-[278px]">
              Chequemate helps you save smarter, contribute to Ajo circles, and
              grow your money with confidence — all in one app.
            </p>
            <div className="flex items-center gap-[16px]">
              {socialIcons.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Links */}
          <div className="flex gap-[60px]">
            {/* Features */}
            <div className="flex flex-col gap-[23px]">
              <p className="text-white font-bold text-[16px]">Features</p>
              <ul className="flex flex-col gap-[23px]">
                {features.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#ededed]/80 text-[12px] font-medium hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-[23px]">
              <p className="text-white font-bold text-[16px]">Resource</p>
              <ul className="flex flex-col gap-[23px]">
                {resources.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#ededed]/80 text-[12px] font-medium hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter */}
          <div className="flex flex-col gap-[24px]">
            <p className="text-[#fafafa] text-[18px] font-semibold">
              Subscribe to Newsletter
            </p>
            <form onSubmit={handleSubmit}>
              <div className="relative w-[422px] h-[56px] bg-white border border-white/20 rounded-[80px] overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="absolute inset-0 h-full bg-transparent pl-[24px] pr-[165px] text-[16px] text-[#707070] placeholder-[#707070] outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-[-2px] top-1/2 -translate-y-1/2 h-[60px] w-[150px] bg-[#006835] text-white text-[16px] font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ══ Bottom bar ══ */}
        <div className="mt-[48px] md:mt-[64px]">
          <div className="w-full h-px bg-white/20 mb-[24px] md:mb-[32px]" />
          <p className="text-white text-[12px] md:text-[14px] font-medium text-center">
            Copyright 2024 © The Owlet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
