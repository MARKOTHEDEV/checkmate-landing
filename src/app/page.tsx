import Nav from "@/components/Nav";
import GeneralLayout from "@/layout/GeneralLayout";
import HeroSection from "./components/HeroSection";
import OurNumbers from "./components/OurNumbers";
import Features from "./components/Features";

export default function Home() {
  return (
    <GeneralLayout>
      <HeroSection />
      <OurNumbers />
      <Features />
    </GeneralLayout>
  );
}
