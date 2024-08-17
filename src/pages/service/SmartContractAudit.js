import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import ProductCard from "../../components/productService/ProductCard";
import ProductWhyCard from "../../components/productService/ProductWhyCard";
import {
  faEnvelope,
  faMouse,
  faPlaneDeparture,
  faSliders,
  faVideo,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import FAQs from "../../components/common/FAQs";
import { reviews } from "../home/home.data";
import TitleDesc from "../../components/common/TitleDesc";
import "./Service.css";
import { FeatureCards } from "../../components/productService/FeatureCard";
import HowItWorksCard from "../../components/productService/HowItWorksCard";
import Benefits from "./sections/Benefits";
import WhyChooseCard from "../../components/productService/WhyChooseCard";

const faqsData = [
  [
    {
      q: "Why is smart contract auditing important?",
      a: "Smart contract auditing is crucial for identifying and mitigating security vulnerabilities that could cause financial losses or other damages.",
    },
    {
      q: "What is SecureDApp’s approach to smart contract auditing?",
      a: "At SecureDApp, the smart contract audit process involves a thorough code review using static analysis, dynamic analysis, and manual review, complemented by an AI-powered smart contract vulnerability detection tool.",
    },
    {
      q: "What are the benefits of having a smart contract audited by SecureDApp?",
      a: `• Increased security: Identifying and mitigating security vulnerabilities protects users from financial losses or damages.
        <br/> • Increased reliability: Ensures that smart contracts function as intended.
        <br/> • Increased confidence: Boosts user trust and promotes the adoption of smart contracts.`,
    },
    {
      q: "How does a smart contract audit improve reliability?",
      a: "By thoroughly reviewing and testing the smart contract code, an audit ensures that the contract will perform its intended functions without errors or failures.",
    },
    {
      q: "How does SecureDApp audit smart contracts?",
      a: "SecureDApp audits smart contracts using static analysis, dynamic analysis, manual review, and an AI-powered vulnerability detection tool.",
    },
  ],
];

const projectIndustries = [
  {
    header: "Project We Serve",
    description: `<br/> • DeFi Applications
                  <br/> • NFT Platform
                  <br/> • Decentralized Applications
                  <br/> • Tokenization Projects
                  <br/> • Supply Chain Projects
                  <br/> • Governance and DAO Projects`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Industries We Serve",
    description: `<br/> • Gaming
                  <br/> • Healthcare
                  <br/> • Real Estate
                  <br/> • Government and Public Sector
                  <br/> • Supply Chain and Logistics
                  <br/> • Finance`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

const facts = [
  {
    description:
      "Total losses in the Web3 ecosystem were $889.26 million in 2023. There were 9 incidents of private key compromise this quarter, leading to losses totaling $223 million, the highest among attack types.",
    header: "",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    description:
      "DeFi continues to be the most targeted sector, with 29 attacks making up 67.4% of all incidents.",
    header: "",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    description:
      "Payment platforms experienced the third highest losses, with two security incidents resulting in a combined $97.3 million loss.",
    header: "",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    description:
      "The ratio of audited to non-audited projects was nearly even, at 48.8% and 46.5%, respectively.",
    header: "",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
];

const platforms = [
  {
    header: "Ethereum Smart Contract Audit",
    description: "",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Polygon Smart Contract Audit",
    description: "",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Solana Smart Contract Audit",
    description: "",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Avalanche Smart Contract Audit",
    description: "",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Binance Smart Chain (BSC) Smart Contract Audit",
    description: "",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Other Blockchain Networks",
    description: "",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

function SmartContractAudit() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="SMART CONTRACT AUDIT"
          title="Helping Your Business to Launch Error-free Blockchain Applications"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is a Smart Contract ?"}
          description={
            "A smart contract—a digital agreement stored on a blockchain network and programmed to execute automatically when predetermined conditions are met. These self-enforcing contracts encode the agreement terms between seller and buyer directly into lines of code. Operating on a decentralized blockchain, smart contracts help several parties achieve collective outcomes promptly and accurately.<br/><br/>Smart contracts are not limited to a single condition. In fact, a single smart contract can include multiple conditions, showcasing their versatility. Furthermore, an application can utilize several smart contracts to support interconnected processes, demonstrating their potential in a variety of scenarios. Multiple languages, such as Ethereum's Solidity language, are available for programming smart contracts, one of the most popular"
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <ProductWhyCard
          header={"Smart Contract Audit Meaning"}
          descriptions={[
            "A small error while deploying smart contracts can result in huge financial losses. This is why smart contracts security audits are imperative. A smart contract audit involves a detailed analysis of a protocol’s smart contract code to identify security vulnerabilities and inefficient code before identifying solutions to resolve these issues.  Audits help ensure decentralized applications' security, reliability, and performance across Web3.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/product-1-why.svg"}
          imageAlt={"Product 1 Why Image"}
        />
        <ProductCard
          header={"Why SecureDApp for Smart Contract Security Audit?"}
          description={
            "SecureDApp harnesses its experience and expertise to conduct blockchain security audits, carefully examining smart contracts for existing and potential errors, security flaws, and compliance issues. SecureDApp is committed to helping businesses develop secure and reliable DApps.<br/><br/>We believe that smart contracts have the potential to transform the way businesses operate, and we are excited to be a part of that revolution. By choosing SecureDApp, you ensure your smart contracts are thoroughly audited, enhancing your blockchain applications' security, reliability, and efficiency."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Facts & Figures"}
            title={"Uniques Dapp Development Services"}
            description={
              "These numbers underscore the urgent need for smart contract security audits. With significant losses attributed to security breaches and a high frequency of attacks in critical areas like DeFi, ensuring that your smart contracts are thoroughly audited is more crucial than ever."
            }
          />
          <FeatureCards featureData={facts} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <Benefits
          benefitsData={platforms}
          title={"Blockchain Networks We Work On"}
          subTitle={
            "SecureDApp conducts multi-chain smart contract audits across various blockchain networks, ensuring your projects are secure and high-performing."
          }
          img={"/assets/images/service-1-benefits.svg"}
          button={""}
        />
        <div>
          <SectionTitle
            name={"Industries"}
            title="The ratio of audited to non-audited projects was nearly even, at 48.8% and 46.5%, respectively. "
            description={
              "At SecureDApp, we pride ourselves on delivering top-notch smart contract audit services at competitive prices. With years of experience in the industry, we are dedicated to ensuring the reliability and security of your smart contracts without breaking the ban"
            }
          />
          <div className="how-it-works-section">
            {projectIndustries.map((data) => {
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
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SmartContractAudit;
