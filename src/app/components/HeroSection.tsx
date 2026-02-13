const HeroSection = () => {
  return (
    <div className="px-[20px] pt-[40px] flex flex-col gap-[40px] md:flex-row md:max-w-[1200px] md:mx-auto ">
      <div className="flex items-center flex-col md:items-start md:h-[536px] relative ">
        <p
          className="mb-[16px] text-[#3385F7] text-[6px] font-normal pt-[7.17px] pb-[5.17px] px-[12.74px] inline-block mx-auto bg-[#CCE1FD] rounded-[33.913px]
        
        md:text-[16px] md:pt-[16px] md:pb-[11px] md:font-medium  md:px-[39px] md:text-[#0052C4] md:mb-[40px] md:mx-[unset]
        
        "
        >
          Over 1000+ USERS on CHEQUEMATE
        </p>
        <h1 className="font-semibold text-[23px] text-center md:text-[60px] md:text-left md:leading-[80px]">
          <span className="block text-nowrap">Welcome to a world</span>
          <span className="block text-nowrap">of rewarding and</span>
          <span className="block text-nowrap">
            stress-free{" "}
            <span
              className="text-brand-green
"
            >
              Ajo
            </span>
          </span>
        </h1>
        <p
          className="text-center text-[#505050] text-[16px] mt-[10px] mb-[20px] font-normal leading-[24px]
        
        md:text-left md:leading-[34px] md:text-[24px]  md:flex md:flex-col
        "
        >
          <span className="md:text-nowrap">
            Chequemate digitizes Ajo, so you can save, contribute,
          </span>
          <span className="md:text-nowrap">
            and grow with your circle across borders.
          </span>
        </p>
        <div className="flex items-center gap-[15px] md:w-[322px] md:absolute md:bottom-0 ">
          <img src="/Google_Play.svg" className="block w-full" alt="" />
          <img src="/app_store.svg" className="block w-full" alt="" />
        </div>
      </div>
      <img
        src="/hero-sec-img.svg"
        alt=""
        className="w-full block h-[335px] md:h-[562px]"
        fetchPriority="high"
      />
    </div>
  );
};

export default HeroSection;
