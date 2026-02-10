const EachWhyChooseUs = ({
  num,
  title,
  body,
  isFirst,
  isLast,
}: {
  num: string;
  title: string;
  body: string;
  isFirst?: boolean;
  isLast?: boolean;
}) => (
  <div className="pb-[40px] md:flex-1">
    <div
      className={`relative flex items-center justify-center mb-[12px] `}
      style={{}}
    >
      <div className="hidden md:block absolute right-1/2  ml-[13px] -left-[12px] top-1/2 h-[1px] bg-[#AFAFAF]" />
      {/* Line to the left of the circle */}
      {!isFirst && (
        <div className="hidden md:block absolute right-1/2  mr-[20px] -left-[12px] top-1/2 h-[1px] bg-[#AFAFAF]" />
      )}
      {/* Line to the right of the circle */}
      {!isLast && (
        <div className="hidden md:block absolute left-1/2 ml-[20px] -right-[12px] top-1/2 h-[1px] bg-[#AFAFAF]" />
      )}
      <div className="hidden md:block absolute left-1/2 mr-[13px] -right-[12px] top-1/2 h-[1px] bg-[#AFAFAF]" />

      <p className="w-[40px] h-[40px] bg-brand-green text-[#FCFCFC] font-regular text-[14px] flex items-center justify-center rounded-full relative z-10">
        {num}
      </p>
    </div>

    <div className="border-[1px] border-[#99D8BC] h-[218px]">
      <p className="bg-[#E6F5ED] text-[14px] text-[#080808] font-semibold py-[20px] text-center md:text-[16px]">
        {title}
      </p>
      <p className="px-[23px] pt-[19px] font-regular text-[12px] text-[#080808] text-center md:text-[14px]">
        {body}
      </p>
    </div>
  </div>
);
const WhyChoose = () => {
  const data = [
    {
      num: "01",
      title: "Ajo, Done Right",
      body: "Manage your Ajo contributions with ease using Chequemate's multi-currency wallets. Save, contribute, and move money across Naira, Pounds, Dollars, and Euros, without the stress of juggling multiple apps.",
    },
    {
      num: "02",
      title: "Ajo, Done Right",
      body: "Manage your Ajo contributions with ease using Chequemate's multi-currency wallets. Save, contribute, and move money across Naira, Pounds, Dollars, and Euros, without the stress of juggling multiple apps.",
    },
    {
      num: "03",
      title: "Ajo, Done Right",
      body: "Manage your Ajo contributions with ease using Chequemate's multi-currency wallets. Save, contribute, and move money across Naira, Pounds, Dollars, and Euros, without the stress of juggling multiple apps.",
    },
  ];
  return (
    <div className="pt-[80px] px-[20px] bg-[#E6F5ED] md:py-[100px] mt-[64px] mb-[40px] md:mt-[128px] md:mb-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-center text-[#333333] font-medium text-[20px] pb-[32px] md:text-[48px] md:font-medium">
          Why Choose{" "}
          <span
            className="text-brand-green
"
          >
            Chequemate
          </span>
          ?
        </p>

        <div
          className="bg-white px-[16px] py-[40px] rounded-[24px] border-[#99D8BC] border-[1px] 
        md:flex md:px-[79px] md:pt-[100px] md:gap-[24px] overflow-hidden"
        >
          {data.map((item, index) => (
            <EachWhyChooseUs
              key={index}
              num={item.num}
              title={item.title}
              body={item.body}
              isFirst={index === 0}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
