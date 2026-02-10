const steps = [
  {
    // public/ public/ public/

    illustration: "/we-up.svg",
    illustrationBig: "/we-upbig.svg",
    title: "Create or Join an Ajo",
    description:
      "Become an Ajo admin and invite friends, family, or community members or join an existing trusted circle.",
  },
  {
    illustration: "/expore.svg",
    illustrationBig: "/export-big.svg",

    title: "Contribute Securely",
    description:
      'Pay your share on time. "Every Ajo comes with a security deposit that keeps members accountable and the circle safe."',
  },
  {
    illustration: "/paind.svg",
    title: "Receive Your Payout",
    illustrationBig: "/paid-big.svg",

    description:
      "Chequemate makes sure every Ajo payout goes to the right person, at the right time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-[40px] md:py-[60px]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]">
        {/* Heading */}
        <h2 className="font-medium text-[#333] text-[20px] md:text-[48px] text-center leading-tight md:leading-[60px] mb-[32px] md:mb-[80px]">
          How it Works
        </h2>

        {/* ── Mobile: vertical stack ── */}
        <div className="flex flex-col gap-[48px] md:hidden">
          {steps.map(({ illustration, title, description }) => (
            <div key={title} className="flex flex-col items-center gap-[20px]">
              {/* Illustration card */}
              <img src={illustration} className="block " alt="" />

              {/* Text */}
              <div className="flex flex-col items-center gap-[12px] text-center px-[4px]">
                <p className="font-semibold text-black text-[18px] leading-normal">
                  {title}
                </p>
                <p className="font-normal text-[#262729] text-[14px] leading-[22px] tracking-[-0.18px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop: 3-column row ── */}
        <div className="hidden md:flex gap-[50px] items-start">
          {steps.map(({ illustrationBig, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center gap-[62px] flex-1"
            >
              {/* Illustration card */}
              <img src={illustrationBig} className="" alt="" />
              {/* Text */}
              <div className="flex flex-col items-center gap-[16px] text-center w-full py-[8px]">
                <p className="font-semibold text-black text-[24px] leading-normal w-full">
                  {title}
                </p>
                <p className="font-normal text-[#262729] text-[16px] leading-[24px] tracking-[-0.18px] max-w-[352px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
