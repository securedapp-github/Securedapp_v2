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

const howData = [
  {
    header: "Smart Contract Security Solutions",
    description: `SecureDApp's AI-powered smart contract vulnerability detection tool is crucial for thorough auditing. It ensures the integrity of smart contracts through meticulous examination, helping to identify and address code flaws and vulnerabilities, thereby mitigating associated risks through:
                  <br/> • Document Collection
                  <br/> • Automated Testing and Manual Review
                  <br/> • Classification of Contract Errors
                  <br/> • Initial Report`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Decentralized App Vulnerability Assessment",
    description: `Identify hidden vulnerabilities within your DApp's architecture. Our expert analysis delves deep into your application's structure, identifying weak points that hackers might exploit. Uncovering these vulnerabilities provides critical insights to fortify your DApp and enhance its security against potential threats.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "DApp Penetration Testing",
    description: `Simulate real-world attacks to assess your DApp's resilience with comprehensive penetration testing. Our in-depth tests uncover potential breaches and vulnerabilities, offering actionable solutions to strengthen your application's defenses and ensure robust security.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

function DappSecurityAudit() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="DAPP SECURITY AUDIT"
          title="A Comprehensive Service Ensure Decentralized Application Security Against Malicious Attack"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is a Dapp ?"}
          description={
            "A decentralized application (dApp) operates on a decentralized network and integrates a smart contract with a front-end user interface.<br/><br/> DApps utilize the decentralized nature of blockchain technology, unlike traditional software applications that rely on centralized servers to store data and process information based on user requests. <br/><br/> Once a developer releases a dApp's codebase, others can build upon it, fostering a collaborative development environment."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <ProductWhyCard
          header={"What Makes DApp Security Crucial?"}
          descriptions={[
            "DApps are becoming increasingly prevalent, but developers often neglect crucial security aspects during development. <br/><br/> Since DApps function as off-chain components, they become attractive targets for hackers. Applications such as DeFi, marketplaces, GameFi, wallets, supply chains, and DEXs are particularly vulnerable, as hackers constantly scrutinize them for exploitable weaknesses. <br/><br/> Therefore, it is crucial to focus on robust decentralized application security measures to secure them from potential threats, vulnerabilities, and data breaches.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/product-1-why.svg"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"Dapp Security Audit"}
            title="How SecureDApp is Helping in DApp Security Audit?"
            description={
              "Start with a Security-first approach and utilize thorough DApp auditing services. Together we can develop a dApp that is more secure, resilient, and user-friendly."
            }
          />
          <div className="how-it-works-section">
            {howData.map((data) => {
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

export default DappSecurityAudit;
