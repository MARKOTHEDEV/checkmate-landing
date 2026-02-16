export type StackBannerProp = {
  title: string;
  subTitle: string;
  image: string;
  items: { head: string; body: string }[];
  flxDirection: boolean; //note it only affect flex direction for desktop
  description: string;
};

const BannerAndStackedList = ({
  title,
  subTitle,
  image,
  flxDirection,
  items,
  description,
}: StackBannerProp) =>
  // { title, subTitle, image, items }: Prop
  {
    return (
      <div className="flex gap-[32px] flex-col px-[20px] my-[48px] max-w-[1200px] mx-auto ">
        <div className="text-center ">
          <p className="text-[#12725B] font-regular text-[10px] md:font-medium md:text-[12px]">
            {title}
          </p>
          <p className="text-[20px] font-medium text-[#333] md:font-medium md:text-[48px]">
            {subTitle}
          </p>
        </div>

        <div
          className={`flex flex-col md:gap-[100px] md:items-center ${flxDirection ? "md:flex-row-reverse" : ""}`}
        >
          <img
            src={image}
            className="block w-full h-[502px]  md:w-[600px] md:h-[900px]"
            alt=""
          />
          <div className=" mt-[40px] md:w-full">
            <p className="text-[13px] font-medium pb-[12px]">{description}</p>
            <div className="flex flex-col gap-[16px]  md:w-full ">
              {items.map(({ head, body }, index) => (
                <div
                  key={index}
                  className=" bg-[#008A48] rounded-[12px] py-[24px] px-[12px] text-[#FFFFFF]  "
                >
                  <p className="pb-[12px] font-bold text-[14px] md:text-[20px]">
                    {head}
                  </p>
                  <p className="font-regular text-[12px] md:font-medium md:text-[14px]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default BannerAndStackedList;
