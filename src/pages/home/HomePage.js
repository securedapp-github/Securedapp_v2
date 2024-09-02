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
import { Helmet } from "react-helmet";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div id="home">
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{`SecureDapp`}</title>
        <meta
          name="description"
          content={"SecureDapp : Secure your blockchain journey"}
        />
        <meta name="author" content="SecureDapp" />

        {/* Open Graph Meta Tags (For Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content={"SecureDapp"} />
        <meta
          property="og:description"
          content="SecureDapp : Secure your blockchain journey"
        />
        <meta
          property="og:image"
          content={"/assets/images/ProductPages/ss/hero.webp"}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="SecureDapp" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:url" content={"https://securedapp.io"} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:card"
          content={"/assets/images/ProductPages/ss/hero.webp"}
        />
        <meta name="twitter:title" content="SecureDapp" />
        <meta
          name="twitter:description"
          content={"SecureDapp : Secure your blockchain journey"}
        />
        <meta
          name="twitter:image"
          content={"/assets/images/ProductPages/ss/hero.webp"}
        />

        {/* WhatsApp-specific Tag (Open Graph) */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* LinkedIn uses Open Graph Tags, so no extra tags are needed */}

        {/* Optional: Meta tags for other platforms (Pinterest, Slack, etc.) */}
        <meta name="pinterest-rich-pin" content="true" />
      </Helmet>
      <Navbar />
      <Hero />
      <Statitics />
      <Features />
      <Solutions />
      <HowItWorks />
      <Services />
      <Testimonials reviews={reviews} />
      <FAQs faqHeaders={faqHeaders} faqsData={faqsData} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
