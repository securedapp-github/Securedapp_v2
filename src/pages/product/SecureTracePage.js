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
      q: "How does SecureTrace leverage AI for post-transaction analysis and forensic thread tracing?",
      a: "SecureTrace uses advanced AI algorithms and machine learning techniques to identify complex patterns and potential vulnerabilities, ensuring thorough and efficient analysis.",
    },
    {
      q: "In what ways does SecureTrace simplify transaction tracing and analysis?",
      a: "SecureTrace's Auto-Trace feature automates transaction tracing, providing a comprehensive chain of custody and in-depth insights with blockchain-specific forensic techniques.",
    },
    {
      q: "How user-friendly is SecureTrace's interface?",
      a: "SecureTrace features an intuitive interface for easy navigation and seamless integration with existing DevOps tools and processes.",
    },
    {
      q: "How does SecureTrace support regulatory compliance and streamline investigative workflows?",
      a: "SecureTrace helps maintain regulatory compliance by generating detailed reports and automating key investigative processes, ensuring efficient security management.",
    },
    {
      q: "What integration capabilities does SecureTrace offer for existing investigative workflows?",
      a: "SecureTrace integrates with various DevOps tools, allowing for customizable security policies and consistent security practices across different stages of development and operation.",
    },
  ],
];

const benefits = [
  {
    header: "Detailed Reports on Historical Data",
    description:
      "Generates comprehensive reports that provide clear insights into transaction histories and security incidents, aiding in thorough forensic analysis.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Suitable for All-Size Organizations",
    description:
      "Adapts to various sizes and complexities of blockchain networks, making it suitable for small and large-scale operations.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Leverage AI Capabilities",
    description:
      "Utilizes advanced AI to identify unusual patterns and anomalies in transaction data, crucial for detecting fraudulent activities.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Documentation",
    description:
      "Ensures thorough documentation and analysis required for legal and regulatory purposes, reinforcing compliance.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Forensic Techniques",
    description:
      "Employs specialized blockchain forensic techniques to delve deeply into transaction histories and uncover hidden connections related to fraudulent schemes.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
  {
    header: "Regulatory Compliance",
    description:
      "Supports regulatory compliance by providing tools and features that streamline investigative workflows.",
    icon: faEnvelope,
    iconBackgroundColor: "",
  },
];

const UsesData = [
  {
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
    header: "Reclaim lost or compromised digital assets",
    description:
      "SecureTrace’s advanced forensic techniques trace transaction histories and identify missing assets, aiding in recovery efforts.",
  },
  {
    image: "/assets/images/product-1-how-it-works-2.svg",
    imageAlt: "",
    header:
      "Identify and prevent fraudulent activities within blockchain transactions",
    description:
      "By monitoring and analyzing transaction patterns and anomalies, SecureTrace helps detect suspicious behavior and potential fraud.",
  },
  {
    image: "/assets/images/product-1-how-it-works-3.svg",
    imageAlt: "",
    header:
      "Respond to and investigate security breaches or suspicious activities.",
    description:
      "SecureTrace’s real-time monitoring and forensic capabilities allow teams to quickly identify, assess, and address security incidents",
  },
  {
    image: "/assets/images/product-1-how-it-works-4.svg",
    imageAlt: "",
    header: "Ensure the security and integrity of smart contracts",
    description:
      "SecureTrace analyzes smart contract interactions and transaction data to identify vulnerabilities or deviations from expected behaviour",
  },
];

function SecureTracePage() {
  return (
    <div className="product-container">
      <Navbar />
      <div className="product">
        <ProductServiceHero
          name="SECURE TRACE"
          title="SecureTrace: Advanced AI for Blockchain Investigation & Forensic Analysis"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is Secure Trace"}
          description={
            "SecureTrace, a sophisticated blockchain forensic tool, harnesses advanced AI and machine learning (ML) technologies. It excels in post-transaction analysis and forensic thread tracing, with a standout feature-Auto-Trace. This feature automates the tracing of transactions, saving time and effort for the user. <br/><br/> SecureTrace analyzes transaction data using specialized blockchain forensic techniques, enhancing the detection of intricate patterns and potential vulnerabilities."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Benefits"}
            title={"What are the Benefits of SecureTrace?"}
          />
          <FeatureCards featureData={benefits} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <ProductWhyCard
          header={"How SecureDApp Helps in Compliance and Streamlined Process?"}
          descriptions={[
            "The demand for streamlined operations through automated compliance checks and security policy updates is greater than ever. SecureDApp meets this need by focusing on preemptive security measures that enhance regulatory compliance and optimize processes.",
            "With a commitment to proactive security, SecureDApp is instrumental in fostering a secure and reliable blockchain environment, which is crucial for the technology’s sustainable advancement.",
            "As an innovative and forward-thinking company, SecureDApp embodies a dynamic, humble, and challenge-driven approach, positioning itself as a leading force in blockchain security.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/product-1-why.svg"}
          imageAlt={"Product 1 Why Image"}
        />
        <div>
          <SectionTitle
            name={"Use Cases"}
            title="Explore the Use Cases of SecureTrace"
            description={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
          />
          <div className="how-it-works-section">
            {UsesData.map((data) => {
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

export default SecureTracePage;
