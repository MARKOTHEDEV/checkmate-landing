"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

type Prop = {
  title: string;
  body: string;
  img: string;
  headingColor: string;
  isRowReverse?: boolean;
  index: number;
};

const EachFeatures = ({
  title,
  body,
  img,
  headingColor,
  isRowReverse,
  index,
}: Prop) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-[20px] md:flex-row md:items-center ${isRowReverse ? "md:flex-row-reverse" : ""}`}
    >
      <div
        className={cn(
          isInView
            ? cn(
                "animate-in fade-in duration-700 fill-mode-forwards",
                isRowReverse
                  ? "md:slide-in-from-right-8"
                  : "md:slide-in-from-left-8",
                "slide-in-from-bottom-4"
              )
            : "opacity-0"
        )}
      >
        <img
          src={img}
          className="block w-full mx-auto md:w-[503px] md:h-[503px] md:mx-[unset]"
          alt=""
          loading="lazy"
        />
      </div>
      <div
        className={cn(
          "text-center w-[300px] mx-auto md:w-[479px] md:text-left",
          isInView
            ? "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-forwards"
            : "opacity-0"
        )}
      >
        <p
          className="font-medium text-[20px] w-[283px] mx-auto pb-[16px] md:pb-[5px] md:w-[unset] md:text-[30px] md:w-[436px]"
          style={{ color: headingColor }}
        >
          {title}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const data = [
    {
      title: "Create & Join Ajo from anywhere",
      body: "Start your own Ajo circle or join one with friends, family, or trusted circle. Set the amount, frequency, and number of members, all managed securely in the app. No more manual records or WhatsApp tracking; everything is transparent and automated.",
      img: "/optimized/create-ajo-anywhere.optimized.webp",
      headingColor: "#0052C4",
    },
    {
      title: "Multi-Currency Wallet",
      body: "Start your own Ajo circle or join one with friends, family, or trusted circle. Set the amount, frequency, and number of members, all managed securely in the app. No more manual records or WhatsApp tracking; everything is transparent and automated.",
      img: "/optimized/wallet.webp",
      headingColor: "#006E39",
    },
    {
      title: "Security Deposits for Peace of Mind",
      body: "Ajo admin can add an optional security deposit to protect members from defaults. Trust and accountability built into the system with security deposit.",
      img: "/optimized/security-mind.webp",
      headingColor: "#4C4486",
    },
  ];

  return (
    <div className="mt-[64px] px-[20px] md:max-w-[1200px] mx-auto md:px-[unset]">
      <AnimateOnScroll animation="animate-in fade-in slide-in-from-bottom-4" duration="duration-700">
        <div className="text-center pb-[40px]">
          <p className="font-regular text-[#333333] text-[12px] pb-[16px] md:text-[12px]">
            Features
          </p>
          <p className="font-medium text-[20px] text-[#333333] md:text-[48px]">
            We&apos;ve made <span className="text-brand-green">Ajo</span> easy
          </p>
        </div>
      </AnimateOnScroll>

      <div className="flex flex-col gap-[60px] px-[20px] md:px-[unset]">
        {data.map((item, index) => (
          <EachFeatures
            key={index}
            title={item.title}
            body={item.body}
            img={item.img}
            headingColor={item.headingColor}
            isRowReverse={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
