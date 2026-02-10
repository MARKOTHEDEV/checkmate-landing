/* ─── Confetti + duck celebration illustration ──────────────────────────── */

/* ─── Component ──────────────────────────────────────────────────────────── */
const ReadyToGetStarted = () => {
  return (
    <section className="bg-white py-[48px] md:py-[0]">
      <div className="max-w-[1240px] mx-auto px-[20px] md:px-[100px]">
        {/* ══ MOBILE layout ══ */}
        <div className="flex flex-col items-center gap-[24px] md:hidden">
          {/* Illustration top */}
          <img src="/mobile-celebrate.svg" alt="" />

          {/* Text + button */}
          <div className="flex flex-col items-center gap-[16px] text-center">
            <h2 className="font-bold text-[#101010] text-[20px] leading-tight">
              Ready to Get Started with{" "}
              <span className="text-[#008a48]">Chequie?</span>
            </h2>
            <p className="text-[#101010]/90 text-[12px] leading-[22px] w-[295px]">
              You can contact our support team via email at{" "}
              <strong>support@Chequemateapp.com</strong> or call us at{" "}
              <strong>02013306493</strong>. Our team is available Monday to
              Friday, 9 a.m. to 5 p.m.
            </p>
            <button className="w-full h-[48px] bg-[#008a48] rounded-[4px] text-white text-[14px] font-medium">
              Contact us
            </button>
          </div>
        </div>

        {/* ══ DESKTOP layout ══ */}
        <div className="hidden md:flex items-center justify-between h-[484px] gap-[50px]">
          {/* Left: text */}
          <div className="flex flex-col gap-[24px] items-start">
            <div className="flex flex-col gap-[16px]">
              <h2 className="font-bold text-[#101010] text-[32px] leading-[1.2]">
                Ready to Get Started with{" "}
                <span className="text-[#008a48]">Chequie?</span>
              </h2>
              <p className="text-[#101010]/90 text-[20px] leading-[30px] w-[621px]">
                You can contact our support team via email at{" "}
                <strong className="font-bold">support@chequemateapp.com</strong>{" "}
                or call us at <strong className="font-bold">02013306493</strong>
                . Our team is available Monday to Friday, 9 a.m. to 5 p.m.
              </p>
            </div>
            <button className="h-[56px] px-[40px] bg-[#008A48] rounded-[4px] text-white text-[18px] font-medium shadow-[0px_12px_50px_0px_rgba(254,134,103,0.1)]">
              Contact us
            </button>
          </div>

          {/* Right: duck + confetti */}
          <img
            src="/desktop-celebrate.svg"
            // className="block w-[418.843994140625px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;
