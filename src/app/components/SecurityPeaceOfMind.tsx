import BannerAndStackedList from "@/components/BannerAndStackedList";

const SecurityPeaceOfMind = () => (
  <BannerAndStackedList
    title="SECURITY & PEACE OF MIND"
    subTitle="Bank-Grade Security. Zero Stress."
    image="/optimized/image 12.webp"
    flxDirection={false}
    description=""
    items={[
      {
        head: "Escrow-Style Protection",
        body: "Funds are held securely until payout.",
      },
      {
        head: "Identity Verification",
        body: "Every user is KYC-verified to prevent fraud.",
      },
      {
        head: "Data Encryption",
        body: "Your financial data is encrypted and never shared with third parties.",
      },
    ]}
  />
);
export default SecurityPeaceOfMind;
