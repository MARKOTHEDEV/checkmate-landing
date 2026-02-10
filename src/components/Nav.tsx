"use client";

import { useState } from "react";
import Logo from "./ui/Logo";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E8E8] bg-white">
        <Logo />
        <button
          onClick={() => setIsOpen(true)}
          className="w-6 h-6 flex items-center justify-center"
          aria-label="Open menu"
        >
          <img src="/phone-menu-bar.svg" className="block w-6 h-6" alt="" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E8E8]">
            <Logo />
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#1E1E2D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-[42px] ">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="h-[60px] flex items-center px-5 border-b border-[#AFAFAF] text-base font-medium text-black"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Get the App Button */}
          <div className="px-5 mt-[63px]">
            <Button
              variant="brand"
              asChild
              className="w-full h-[48px] text-base rounded !font-semibold"
            >
              <a href="#">Get the App</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const DesktopNav = () => {
  return (
    <div className="flex items-center justify-between py-[38.5px] px-[80px]">
      <Logo className="w-[187.489px] h-[30px]" />
      <div>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-base font-medium text-black mx-4"
          >
            {link.label}
          </a>
        ))}
      </div>
      <Button
        variant="brand"
        asChild
        className="h-[48px] w-[150px] text-base rounded-[4px] !font-semibold"
      >
        <a href="#">Get the App</a>
      </Button>
    </div>
  );
};
const Nav = () => {
  return (
    <div>
      {/* <MobileNav /> */}
      <DesktopNav />
    </div>
  );
};

export default Nav;
