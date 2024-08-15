import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
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
import { features, howItWorksData } from "./product.data";
import ProductWhyCard from "../../components/productService/ProductWhyCard";
import HowItWorksCard from "../../components/productService/HowItWorksCard";

function Product({ isLargeScreen, setIsLargeScreen }) {
  return (
    <div className="product">
      <Navbar
        isLargeScreen={isLargeScreen}
        setIsLargeScreen={setIsLargeScreen}
      />
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
          <div className="how-it-works-section-end-image">
            <img
              src="/assets/images/product-1-how-it-works-1-end.svg"
              alt="product 1 how it works end"
            />
          </div>
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
      <Footer />
    </div>
  );
}

export default Product;
