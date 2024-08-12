import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import {
  FeatureBox,
  HowItWorksBox,
  WhyChooseBox,
  BenefitsBox,
} from "../../components/boxes";
import FAQs from "../../components/common/FAQs";
import { faqsData, reviews } from "../home/home.data";
import TitleDesc from "../../components/common/TitleDesc";
import "./Service.css";
import { FeatureCards } from "../../components/productService/FeatureCard";
import {
  benefitsData,
  features,
  howItWorksData,
  whyChooseData,
} from "./service.data";
import HowItWorksCard from "../../components/productService/HowItWorksCard";
import Benefits from "./sections/Benefits";
import WhyChooseCard from "../../components/productService/WhyChooseCard";

function Service({ isLargeScreen, setIsLargeScreen }) {
  return (
    <div className="service">
      <ProductServiceHero
        name="A PRODUCT OF SECURE DAPP"
        title="Discover Endless Possibilities with Solidity Shield"
        image={"/assets/images/product-hero.svg"}
      />
      <div className="features-section">
        <SectionTitle name={"Features"} title={"Shield Features"} />
        <FeatureCards featureData={features} />
        <div className="features-section-button">
          <Button text={"Learn more"} filled={true} />
        </div>
      </div>
      <Benefits benefitsData={benefitsData} />
      <div className="service-why-choose">
        <SectionTitle
          name={"Why choose"}
          title={
            "Why SecureDapp will Be a Great Fit For Your Software Development"
          }
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          }
        />
        <div className="service-why-choose-cards">
          {whyChooseData.map((data) => {
            return (
              <WhyChooseCard
                image={data.image}
                imageBackground={data.imageBackground}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
      <div>
        <SectionTitle
          name={"How it works"}
          title="How it works"
          description={
            "Streamline business processes and increase efficiency with workflow automation features."
          }
        />
        <div className="how-it-works-section">
          {howItWorksData.map((data) => {
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
      <Testimonials reviews={reviews} />
      <div>
        <FAQs
          isLargeScreen={isLargeScreen}
          setIsLargeScreen={setIsLargeScreen}
          faqsData={faqsData}
        />
      </div>
    </div>
  );
}

export default Service;
