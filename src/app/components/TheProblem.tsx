import BannerAndStackedList from "@/components/BannerAndStackedList";

const TheProblem = () => (
  <BannerAndStackedList
    title="THE PROBLEM"
    subTitle="Traditional Ajo is Risky"
    image="/optimized/image-11-optimized.webp"
    flxDirection={false}
    description="Not only is it risky, but it feels like a gamble. Here’s why:"
    items={[
      {
        head: 'The "Runaway" Risk',
        body: "Someone collects the money and disappears.",
      },
      {
        head: "The Tracking Nightmare",
        body: "Who paid? Who is next? Manual records are messy.",
      },
      {
        head: "The Commitment Gap",
        body: "People join but stop paying halfway through.",
      },
    ]}
  />
);
export default TheProblem;
