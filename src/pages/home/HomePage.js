import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import CTA from "./sections/CTA";
import FAQs from "../../components/common/FAQs";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Services from "./sections/Services";
import Solutions from "./sections/solutions";
import Testimonials from "../../components/common/Testimonials";
import Features from "./sections/Features";
import "./HomePage.css";
import Statitics from "./sections/Statistics";
import { reviews, faqHeaders, faqsData } from "./home.data";

const Home = ({ isLargeScreen, setIsLargeScreen }) => {
  return (
    <div id="home">
      <Navbar
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
      />
      <Hero />
      <Statitics />
      <Features />
      <Solutions />
      <HowItWorks />
      <Services
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
      />
      <Testimonials reviews={reviews} />
      <FAQs
        faqHeaders={faqHeaders}
        faqsData={faqsData}
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
      />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
