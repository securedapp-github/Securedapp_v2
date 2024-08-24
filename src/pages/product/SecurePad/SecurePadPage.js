import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import "../../product/Product.css";
import ProductCard from "../../../components/productService/ProductCard";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import { faqsData, howItWorksData, benefits } from "./data";

function SecurePadPage() {
  return (
    <div className="product-container">
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="SECURE PAD"
          title="A platform for Cost-free Tokenization in Blockchain Security Space"
          image={"/assets/images/ProductPages/sp/hero.jpg"}
          onClick={() => window.open("https://securepad.xyz/")}
        />
        <ProductCard
          header={"What is SecurePAD"}
          description={
            "SecurePAD stands out as a zero-fee tokenization platform, combining sturdy security with simple no-code functionality and versatile cross-chain capabilities. <br/><br/> This unique blend empowers individuals and projects to effortlessly create, trade, and manage tokens throughout their entire lifecycle, all without incurring high costs."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ProductPages/sp/1.png"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Benefits"}
            title={"Key Benefits of SecurePAD"}
            description={
              "SecurePAD, the leading free asset tokenization platform, offers an efficient way to manage your tokens, ensuring a seamless experience in the blockchain space"
            }
          />
          <FeatureCards featureData={benefits} />
          {/* <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div> */}
        </div>
        <ProductWhyCard
          header={"Why Choose SecurePAD?"}
          descriptions={[
            `The unparalleled capabilities of SecurePAD offer compelling reasons to choose this free asset tokenization platform.
             <br/>
            <br/><br/> • Go-to tokenization platform for a comprehensive suite of blockchain services.
            <br/><br/> • It is a decentralized exchange for seamless token trading.
            <br/><br/> • Serves as lending and borrowing platform that enables users to lend and borrow tokens effortlessly
            <br/><br/> • Offers a staking platform where users can earn rewards for staking their tokens.
            <br/><br/> • It has a token locker feature that allows projects to securely lock tokens for a specified period.
            <br/><br/> • Serves as a governance system that empowers users to participate in the decision-making process of the platform.`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ProductPages/sp/2.png"}
          imageAlt={"Product 1 Why Image"}
        />
        {/* <div>
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
        </div> */}
        <Testimonials reviews={reviews} />
        <div>
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SecurePadPage;
