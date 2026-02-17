"use client";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

const CountUpNumber = ({
  end,
  prefix,
  suffix,
  isActive,
  color,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  isActive: boolean;
  color: string;
}) => {
  const count = useCountUp(end, isActive);
  const formatted = end >= 1000 ? count.toLocaleString() : count.toString();

  return (
    <span style={{ color }}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

const EachNumbers = ({
  color,
  icon,
  iconBig,
  end,
  prefix,
  suffix,
  list,
  Biglist,
  imgStyle = "block",
  titleClass = "",
  isActive,
  delay,
}: {
  color: string;
  icon: string;
  iconBig?: string;
  end: number;
  prefix?: string;
  suffix?: string;
  list: string[];
  Biglist?: string[];
  imgStyle?: string;
  titleClass?: string;
  isActive: boolean;
  delay: string;
}) => {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        !isInView && "opacity-0",
        isInView && "animate-in fade-in slide-in-from-bottom-4 fill-mode-forwards duration-500",
        isInView && delay
      )}
    >
      <p
        className={`text-brand-green font-bold text-[16.7px] flex items-center gap-[4px] pb-[16.5px] border-b-[1px] border-b-[#AFAFAF] mb-[13px] md:text-[48px] ${titleClass}`}
      >
        <img
          src={icon}
          className={`${imgStyle} ${iconBig ? "md:hidden" : ""}`}
          alt=""
          loading="lazy"
        />
        {iconBig && (
          <img src={iconBig} className="hidden md:block" alt="" loading="lazy" />
        )}
        <CountUpNumber
          end={end}
          prefix={prefix}
          suffix={suffix}
          isActive={isActive && isInView}
          color={color}
        />
      </p>
      <p
        className={`flex items-center flex-col text-[#505050] text-[8px] font-medium text-nowrap ${Biglist ? "md:hidden" : ""}`}
      >
        {list.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>
      {Biglist && (
        <p className="hidden md:text-[16px] md:flex items-center flex-col text-[#505050] text-[8px] font-medium text-nowrap">
          {Biglist.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      )}
    </div>
  );
};

const OurNumbers = () => {
  const { ref, isInView } = useInView();

  return (
    <div className="bg-[#E6F5ED] mt-[53px]">
      <div className="px-[20px] pb-[38px] max-w-[1200px] mx-auto" ref={ref}>
        <p
          className={cn(
            "pt-[40px] text-[#131D0E] text-medium text-[20px] text-center pb-[24px] md:text-[48px] font-medium md:pb-[48px]",
            isInView
              ? "animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards"
              : "opacity-0"
          )}
        >
          Our Numbers
        </p>

        <div className="flex items-center justify-between">
          <EachNumbers
            iconBig="/green-coin-big.svg"
            icon="/green-coin.svg"
            color="#008A48"
            end={500}
            prefix="₦"
            suffix="M+"
            list={["Transctions", "Across groups", "and solo savings"]}
            Biglist={["Transctions", "Across groups and solo savings"]}
            isActive={isInView}
            delay="delay-0"
          />
          <EachNumbers
            icon="/Users.svg"
            iconBig="/user-big.svg"
            color="#0052C4"
            end={70000}
            suffix="+"
            list={["Active user", "Building financial", "trust daily"]}
            Biglist={["Active user", "Building financial trust daily"]}
            isActive={isInView}
            delay="delay-150"
          />
          <EachNumbers
            icon="/Vector (3).svg"
            iconBig="/bg-star.svg"
            color="#FF8E44"
            end={114000}
            suffix="+"
            list={[
              "Successful payments",
              "Thanks to trust scores & ",
              "auto debit",
            ]}
            Biglist={[
              "Successful payments",
              "Thanks to trust scores & auto debit",
            ]}
            isActive={isInView}
            delay="delay-300"
          />
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
