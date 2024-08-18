import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import ProductCard from "../../../components/productService/ProductCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import "../Service.css";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import Benefits from "../sections/Benefits";
import { services, benefits, faqsData } from "./data";

function Web3KYC() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="WEB 3.0 KYC"
          title="Advance Blockchain Identity Verification for Modern Compliance"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is Web 3.0 KYC ?"}
          description={
            "Web3 KYC (Know Your Customer) is an advanced blockchain identity verification tool designed specifically for the decentralized Web3 ecosystem. <br/><br/>This service enables businesses to authenticate user identities, ensuring compliance with regulatory standards and mitigating risks associated with anonymous transactions in decentralized finance (DeFi) applications, NFT marketplaces, and cryptocurrency exchanges."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div>
          <SectionTitle
            name={"Benefits"}
            title="Benefits of Web 3.0 KYC"
            description={
              "As we approach a new digital era, it's essential to reimagine KYC for the Web 3.0 landscape. Although the fundamental objective of KYC—to verify customer identities—remains unchanged, the methods and approaches to achieving this goal have significantly advanced."
            }
          />
          <div className="how-it-works-section">
            {benefits.map((data) => {
              return (
                <HowItWorksCard
                  image={data.image}
                  imageAlt={data.imageAlt}
                  title={data.header}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Services"}
            title={"Deep Dive into our Services"}
          />
          <FeatureCards featureData={services} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <Testimonials reviews={reviews} />
        <div>
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Web3KYC;
