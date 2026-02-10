import Nav from "@/components/Nav";
import GeneralLayout from "@/layout/GeneralLayout";
import HeroSection from "./components/HeroSection";
import OurNumbers from "./components/OurNumbers";
import Features from "./components/Features";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import JoinCircle from "./components/JoinCircle";
import FAQ from "./components/FAQ";
import ReadyToGetStarted from "./components/ReadyToGetStarted";

export default function Home() {
  return (
    <GeneralLayout>
      <HeroSection />
      <OurNumbers />
      <Features />
      <WhyChoose />
      <Testimonials />
      <HowItWorks />
      <JoinCircle />
      <FAQ />
      <ReadyToGetStarted />
    </GeneralLayout>
  );
}
