import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import TitleDesc from "../../components/common/TitleDesc";
import { HowItWorksBox } from "../../components/boxes";
import FAQs from "../../components/common/FAQs";
import { faqsData, reviews } from "../home/home.data";
import "./Product.css";
import ProductCard from "../../components/productService/ProductCard";
import {
  FeatureCard,
  FeatureCards,
  FeatureIcon,
} from "../../components/productService/FeatureCard";
import { features } from "./product.data";
import ProductWhyCard from "../../components/productService/ProductWhyCard";

function Product({ isLargeScreen, setIsLargeScreen }) {
  return (
    <div className="product">
      <ProductServiceHero
        name="A PRODUCT OF SECURE DAPP"
        title="Discover Endless Possibilities with Solidity Shield"
        image={"/assets/images/product-hero.svg"}
      />
      <ProductCard
        header={"What is Solidity Shield"}
        description={
          "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ullamcorper ac a vulputate dis. Blandit maecenas blandit cras posuere gravida etiam."
        }
        buttonText={"Scan now"}
        image={"/assets/images/product-1-intro.svg"}
      />
      <div className="features-section">
        <SectionTitle name={"Features"} title={"Shield Features"} />
        <FeatureCards featureData={features} />
        <div className="features-section-button">
          <Button text={"Learn more"} filled={true} />
        </div>
      </div>
      <ProductWhyCard
        header={"Why Choose Solidity Shield?"}
        descriptions={[
          "Odio aliquam arcu arcu dictumst justo eu placerat ornare purus. Quam ultrices felis amet eu mauris. Mattis auctor gravida elementum mauris habitasse facilisis sed sit elit Lectus faucibus libero dapibus",
          "Odio aliquam arcu arcu dictumst justo eu placerat ornare purus. Quam ultrices felis amet eu mauris. Mattis auctor gravida elementum mauris habitasse facilisis sed sit elit.",
        ]}
        buttonText={"Get Started"}
        image={"/assets/images/product-1-why.svg"}
        imageAlt={"Product 1 Why Image"}
      />
      <div>
        <SectionTitle
          name={"How it works"}
          title="How it works"
          description={
            "Streamline business processes and increase efficiency with workflow automation features."
          }
        />
        <div>
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <img width={"200px"} src="/images/how-it-works-prod.png" />
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

export default Product;
