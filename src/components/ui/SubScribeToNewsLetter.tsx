const SubScribeToNewsLetter = () => {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[32px]">
      <p className="text-[#fafafa] text-[14px] font-semibold ">
        Subscribe to Newsletter
      </p>
      <form
        // onSubmit={handleSubmit}
        className="w-full md:w-[422px]"
      >
        <div className="relative w-full h-[44px] bg-white border border-white/20 rounded-[44px] overflow-hidden  md:h-[56px]">
          <input
            type="email"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="absolute inset-0 h-full bg-transparent pl-[16px]  text-[12px] text-[#707070] placeholder-[#707070] outline-none
            md:placeholder:text-[#707070CC] md:placeholder:text-[18px] md:translate-y-[3px]
            
            "
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[48px] w-[110px] bg-[#008A48] text-white text-[12px] font-semibold md:h-[60px] md:w-[150px] md:text-[18px] cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubScribeToNewsLetter;
