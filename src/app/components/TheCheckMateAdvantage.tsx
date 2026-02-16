import BannerAndStackedList from "@/components/BannerAndStackedList";

const TheCheckMateAdvantage = () => (
  <BannerAndStackedList
    title="THE SOLUTION"
    subTitle="The Chequemate Advantage"
    image="/optimized/image-10.webp"
    flxDirection={true}
    description="Your favorite Ajo tradition is now built on tech you can trust."
    items={[
      {
        head: "Automated Contributions",
        body: "No more manual transfers. The app handles the collection and the payout automatically.",
      },
      {
        head: "The Trust Score",
        body: 'See the "financial reputation" of every member before you join a group.',
      },
      {
        head: "Security Deposits",
        body: "We minimize risk with upfront mechanisms that ensure everyone stays committed until the last payout.",
      },
      {
        head: "Full Transparency",
        body: "Real-time dashboards show exactly who has paid and who is up next.",
      },
    ]}
  />
);
export default TheCheckMateAdvantage;
