import BlogPostSection from "./BlogPostSection";
import ContactusSection from "./ContactusSection";
import EventItemSection from "./EventItemSection";
import ExplorePricingSection from "./ExplorePricingSection";
import GallarySection from "./GallarySection";
import HeroSection from "./HeroSection";
import OurServiceSection from "./OurServiceSection";
import RecentEventSection from "./RecentEventSection";
import TestimonialSection from "./TestimonialSection";
import TurstedCustomerSection from "./TurstedCustomerSection";
import UpcommingEventSection from "./UpcommingEventSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OurServiceSection />
      <EventItemSection />
      <ExplorePricingSection />
      <GallarySection />
      <RecentEventSection />
      <UpcommingEventSection />
      <TurstedCustomerSection />
      <TestimonialSection />
      <BlogPostSection />
      <ContactusSection />
    </div>
  );
};

export default Home;
