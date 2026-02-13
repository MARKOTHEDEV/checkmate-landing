const EachNumbers = ({
  color,
  icon,
  iconBig,
  title,
  list,
  Biglist,
  imgStyle = "block",
  titleClass = "",
}: {
  color: string;
  icon: string;
  iconBig?: string;
  title: string;
  list: string[];
  Biglist?: string[];
  imgStyle?: string;
  titleClass?: string;
}) => {
  return (
    <div>
      <p
        className={`text-brand-green font-bold text-[16.7px] flex items-center gap-[4px] pb-[16.5px] border-b-[1px] border-b-[#AFAFAF] mb-[13px]

      md:text-[48px] ${titleClass}`}
      >
        <img
          src={icon}
          className={`${imgStyle} ${iconBig ? "md:hidden" : ""}`}
          alt=""
          loading="lazy"
        />
        {iconBig && <img src={iconBig} className="hidden md:block" alt="" loading="lazy" />}
        <span className="" style={{ color }}>
          {title}
        </span>
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
  return (
    <div className="bg-[#E6F5ED] mt-[53px]">
      <div className=" px-[20px] pb-[38px] max-w-[1200px]  mx-auto">
        <p className="pt-[40px] text-[#131D0E] text-medium text-[20px] text-center pb-[24px]  md:text-[48px] font-medium  md:pb-[48px]">
          Our Numbers
        </p>

        <div className="">
          <div className="flex items-center justify-between">
            <EachNumbers
              iconBig="/green-coin-big.svg"
              icon="/green-coin.svg"
              color="#008A48"
              title="₦500M+"
              list={["Transctions", "Across groups", "and solo savings"]}
              Biglist={["Transctions", "Across groups and solo savings"]}
              // titleClass="md:pb-[0px]"
              //   imgStyle="block h-[40px] w-[40px]"
            />
            <EachNumbers
              icon="/Users.svg"
              iconBig="/user-big.svg"
              color="#0052C4"
              title="70,000+"
              list={["Active user", "Building financial", "trust daily"]}
              Biglist={["Active user", "Building financial trust daily"]}
            />
            <EachNumbers
              icon="/Vector (3).svg"
              iconBig="/bg-star.svg"
              color="#FF8E44"
              title="114,000+"
              list={[
                "Successful payments",
                "Thanks to trust scores & ",
                "auto debit",
              ]}
              Biglist={[
                "Successful payments",
                "Thanks to trust scores & auto debit",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNumbers;
