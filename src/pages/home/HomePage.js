import CTA from "./sections/CTA";
import FAQs from "./sections/FAQs";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/how-it-works";
import Services from "./sections/services";
import OurSolutions from "./sections/solutions";
import Testimonials from "./sections/testimonials";
import Why from "./sections/why";
import "./HomePage.css"

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Why />
      <OurSolutions />
      <HowItWorks />
      <Services />
      <Testimonials />
      <FAQs />
      <CTA />
    </div>
  );
};

export default Home;
