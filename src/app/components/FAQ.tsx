"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the minimum amount required to start saving?",
    answer:
      "You can start saving with as little as ₦500. We believe in making savings accessible and affordable to everyone.",
  },
  {
    question: "How do I join a Chequemate Ajo group?",
    answer:
      "You can join an Ajo group by accepting an invite from a group admin, or create your own group and invite your trusted circle.",
  },
  {
    question: "What interest rate can I expect on my savings?",
    answer:
      "Interest rates vary depending on the savings plan you choose. Check the app for the latest rates on each savings product.",
  },
  {
    question: "Is my money safe?",
    answer:
      "Yes. Chequemate uses industry-standard encryption and partners with licensed financial institutions to keep your money secure.",
  },
  {
    question: "Can I withdraw my savings at any time?",
    answer:
      "Withdrawal rules depend on your savings plan. Some plans allow instant withdrawal while others have a fixed tenure.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team at support@chequemateapp.com or call 02013306493, Monday–Friday, 9am–5pm.",
  },
  {
    question: "Help and Support",
    answer:
      "Visit our Help Center in the app or on our website for guides, FAQs, and troubleshooting tips.",
  },
];

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
    />
  </svg>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#fcfcfc] py-[64px] md:py-[120px]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[8px] md:gap-[12px] text-center mb-[40px] md:mb-[80px]">
          <h2 className="font-bold text-[#080808] text-[20px] md:text-[40px] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[#707070] text-[12px] md:text-[22px] md:leading-[30px]">
            We&apos;re happy to answer your questions
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-[24px]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#afafaf] pb-[16px] md:pb-[24px]">
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full text-left gap-[12px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-[#080808] text-[14px] md:text-[28px] leading-normal">
                    {faq.question}
                  </span>

                  {/* Toggle icon */}
                  <div
                    className={`flex items-center justify-center rounded-full shrink-0 w-[28px] h-[28px] md:w-[40px] md:h-[40px] transition-colors duration-200 ${
                      isOpen ? "bg-[#008a48]" : "bg-transparent"
                    }`}
                  >
                    <PlusIcon
                      className={`w-[16px] h-[16px] md:w-[24px] md:h-[24px] transition-transform duration-200 ${
                        isOpen ? "rotate-45 text-white" : "text-[#080808]"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-[12px] md:mt-[16px] text-[#6d6d6d] text-[12px] leading-[22px] md:text-[24px] md:leading-[40px] max-w-[843px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
