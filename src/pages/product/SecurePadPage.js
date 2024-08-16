import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import FAQs from "../../components/common/FAQs";
import { reviews } from "../home/home.data";
import "./Product.css";
import ProductCard from "../../components/productService/ProductCard";
import { FeatureCards } from "../../components/productService/FeatureCard";
import ProductWhyCard from "../../components/productService/ProductWhyCard";
import HowItWorksCard from "../../components/productService/HowItWorksCard";
import {
  faEnvelope,
  faMouse,
  faPlaneDeparture,
  faSliders,
  faVideo,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

const faqsData = [
  [
    {
      q: "How does SecurePAD ensure security?",
      a: "SecurePAD implements KYC (Know Your Customer) verification and conducts detailed smart contract audits to ensure that all projects meet high-security standards before launch.",
    },
    {
      q: "What does zero fee mean on SecurePAD?",
      a: "Zero-fee means no costs are associated with using SecurePAD to create, trade, and manage tokens, making it a good option for projects looking to minimize expenses.",
    },
    {
      q: "Can I launch an Initial DEX Offering (IDO) on SecurePAD?",
      a: "Yes, SecurePAD is designed to facilitate the launch of IDOs, allowing projects to raise funds efficiently without the burden of high costs.",
    },
    {
      q: "How does the no-code platform work?",
      a: "SecurePAD's no-code platform simplifies the tokenization process, enabling users to create and manage tokens without needing extensive technical knowledge of blockchain technology.",
    },
    {
      q: "How does the token locker work?",
      a: "The token locker on SecurePAD allows projects to lock tokens for a specified period, enhancing trust and security within the community.",
    },
    {
      q: "How do I get started with SecurePAD?",
      a: "Sign up on the SecurePAD platform, complete the KYC verification process, and begin seamlessly creating, trading, or managing your tokens.",
    },
  ],
];

const benefits = [
  {
    header: "Cost-Free Tokenization",
    description:
      "SecurePAD is a zero fee platform, making it an ideal choice for projects looking to conduct Initial DEX Offerings (IDOs). This cost-free approach significantly lowers the financial barrier, enabling more projects to enter the market and raise funds without the burden of high costs.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Enhanced Security",
    description:
      "SecurePAD places a strong emphasis on security. The platform integrates KYC (Know Your Customer) verification to ensure that all participants are properly vetted, and conducts comprehensive smart contract audits to identify and address potential vulnerabilities.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "No-Code Platform",
    description:
      "SecurePAD simplifies the process of launching Initial DEX Offerings (IDOs), enabling users to concentrate on their project’s vision rather than dealing with blockchain complexities.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Cross-Chain Functionality",
    description:
      "SecurePAD enhances versatility by allowing projects to deploy tokens across multiple blockchains, broadening their reach and integration capabilities.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
];

const howItWorksData = [
  {
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
    header: "Workflow builder",
    description: "ddd",
  },
  {
    image: "/assets/images/product-1-how-it-works-2.svg",
    imageAlt: "",
    header: "Trigger Actions",
    description: "ddd",
  },
  {
    image: "/assets/images/product-1-how-it-works-3.svg",
    imageAlt: "",
    header: "Task Routing",
    description: "ddd",
  },
  {
    image: "/assets/images/product-1-how-it-works-4.svg",
    imageAlt: "",
    header: "Workflow Monitoring",
    description: "ddd",
  },
  {
    image: "/assets/images/product-1-how-it-works-5.svg",
    imageAlt: "",
    header: "Conditional Logic",
    description: "ddd",
  },
  {
    image: "/assets/images/product-1-how-it-works-6.svg",
    imageAlt: "",
    header: "Integration third-party",
    description: "ddd",
  },
];

function SecurePadPage() {
  return (
    <div className="product-container">
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="SECURE PAD"
          title="A platform for Cost-free Tokenization in Blockchain Security Space"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is SecurePAD"}
          description={
            "SecurePAD stands out as a zero-fee tokenization platform, combining sturdy security with simple no-code functionality and versatile cross-chain capabilities. <br/><br/> This unique blend empowers individuals and projects to effortlessly create, trade, and manage tokens throughout their entire lifecycle, all without incurring high costs."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
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
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
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
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SecurePadPage;
