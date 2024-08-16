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
      q: "Why does SecureWatch leverage AI for security monitoring?",
      a: "SecureWatch employs advanced AI to continuously monitor and analyze blockchain transactions, identifying potential security threats and anomalies in real time.",
    },
    {
      q: "What makes SecureWatch essential for smart contract security?",
      a: "SecureWatch is prominent for smart contract security as it provides real-time surveillance, detects unauthorized access, and highlights abnormal behavior to address vulnerabilities preemptively.",
    },
    {
      q: "What type of projects can benefit from using SecureWatch?",
      a: "SecureWatch enhances overall security and compliance for any project utilizing blockchain technology, including NFT marketplaces, DeFi platforms, and smart contract-based applications.",
    },
    {
      q: "Can SecureWatch be customized for specific security needs?",
      a: "Yes, SecureWatch offers customizable security policies and settings to address specific security needs and risk profiles, ensuring tailored protection for diverse projects.",
    },
    {
      q: "Is there a trial for SecureWatch?",
      a: "Yes, SecureWatch offers a trial period, allowing users to experience its features and capabilities before committing to it.",
    },
  ],
];

const features = [
  {
    header: "Detects Unusual Deviations",
    description:
      "Tracks your smart contract’s activities to spot any unusual behavior or deviations that might signal potential threats.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Keen Eye on Transactions",
    description:
      "Keeps a close watch on blockchain transactions to quickly flag suspicious or unauthorized actions.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Easy Integration",
    description:
      "Fits effortlessly into your existing DevOps processes, maintaining consistent security across all stages of development and operation.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Detailed Reports",
    description:
      "Delivers advanced analytics and detailed reports to help you understand and tackle security vulnerabilities and emerging threat patterns.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Customized Security Policies",
    description:
      "Allows you to tailor security policies to meet your specific needs and risk profiles, ensuring optimal protection.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Analyze Historical Data",
    description:
      "Examine past data to spot trends and refine security measures, helping you learn from previous incidents and bolster your defenses.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
];

const threats = [
  {
    header: "Unauthorized Parties",
    description:
      "Identifies attempts by unauthorized parties to access or manipulate smart contracts or blockchain projects.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Unauthorized Access",
    description:
      "Flags any suspicious activity related to compromised user accounts or credentials.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Unusual Patterns",
    description:
      "Spots unusual patterns or behaviors in transaction flows that deviate from established norms, which could signal an attack or exploitation.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Contract Parameters",
    description:
      "Monitors for any unauthorized changes to on-chain data or contract parameters that could compromise security.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Uncertified Roles",
    description:
      "Detects unauthorized user roles or permissions changes that could grant elevated access or control.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
  {
    header: "Vulnerabilities During Deployment",
    description:
      "Identifies potential exploits or vulnerabilities being actively targeted, even if not initially detected during the contract’s deployment phase.",
    icon: faVoicemail,
    iconBackgroundColor: "",
  },
];

function SecureWatchPage() {
  return (
    <div className="product-container">
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="SECURE WATCH"
          title="Blockchain Threat Detection"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is Secure Watch"}
          description={
            "SecureWatch is a cutting-edge post-deployment security monitoring and threat detection tool that leverages AI for real-time surveillance of your projects and smart contracts. It provides continuous protection by constantly monitoring on-chain transactions to identify security breaches, unauthorized access, and abnormal behavior. <br/><br/> Seamlessly integrating with your existing DevOps processes, it guarantees that security measures are consistently applied throughout development and operations.<br/><br/>Comply with needed regulations and have complete visibility and control of your Web3 environment, 24-7, safeguarding client assets and stopping illicit finance."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Threats"}
            title={"What Threats SecureWatch Detects in a Smart Contract?"}
            description={
              "With its high-tech blockchain threat detection capabilities, Securewatch identifies a range of security breaches through its advanced monitoring system. Here’s how it keeps your smart contract secure."
            }
          />
          <FeatureCards featureData={threats} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <div className="features-section">
          <SectionTitle
            name={"Features"}
            title={"What are the Features of SecureWatch?"}
            description={
              "SecureWatch offers several advanced features to maintain real-time blockchain security and safeguard your digital assets throughout their lifecycle."
            }
          />
          <FeatureCards featureData={features} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <ProductWhyCard
          header={"Why Choose Secure Watch?"}
          descriptions={[
            "Choosing SecureWatch means opting for a solution that protects and enhances your smart contract's security over time.",
            "What sets SecureWatch apart is its ability to customize security policies to fit your unique needs and risk profiles, providing a customized approach to security. Additionally, its analysis of historical data helps refine security measures based on past incidents, enabling continuous improvement and a stronger defense against future threats.",
            "With Blockchain Threat Intelligence at its core, SecureWatch offers unmatched insights and threat detection capabilities, helping you stay ahead of emerging vulnerabilities and risks. By continuously tracking deviations from normal behavior, SecureWatch proactively identifies potential threats before they escalate.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/product-1-why.svg"}
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

export default SecureWatchPage;
