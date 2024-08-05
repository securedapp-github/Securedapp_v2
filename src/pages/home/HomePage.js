import CTA from "./sections/CTA";
import FAQs from "./sections/FAQs";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Solutions from "./sections/Solutions";
import Testimonials from "./sections/Testimonials";
import Features from "./sections/Features";
import "./HomePage.css";
import Statitics from "./sections/Statistics";

const Home = ({ isLargeScreen, setIsLargeScreen }) => {
  return (
    <div id="home">
      <Hero />
      <Statitics />
      <Features />
      <Solutions />
      <HowItWorks />
      <Services
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
      />
      <Testimonials
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
      />
      <FAQs />
      <CTA />
    </div>
  );
};

export default Home;
