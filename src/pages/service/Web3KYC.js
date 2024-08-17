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
      q: "Why is Web 3.0 KYC needed?",
      a: "Web 3.0 KYC maintains trust and regulatory compliance in decentralized platforms. It prevents fraud, ensures adherence to anti-money laundering (AML) regulations, and enhances the security and integrity of blockchain transactions and interactions.",
    },
    {
      q: "How does Web 3.0 KYC integrate with decentralized applications?",
      a: "Web 3.0 KYC integrates with decentralized applications (DApps) by providing a secure and transparent means of verifying user identities. It ensures that users meet regulatory standards without compromising the decentralized nature of the application.",
    },
    {
      q: "How does Web 3.0 KYC address privacy concerns?",
      a: "Web 3.0 KYC uses advanced cryptographic techniques to validate identities while protecting user privacy.",
    },
    {
      q: "Can Web 3.0 KYC be customized for specific needs?",
      a: "Yes, Web 3.0 KYC solutions can be customized to meet the specific needs of multiple applications, offering flexible and scalable options for diverse use cases.",
    },
    {
      q: "What challenges do businesses face with Web 3.0 KYC?",
      a: "Web 3.0 KYC challenges include ensuring compliance with evolving regulations, integrating with existing systems, and managing user data securely. Working with experienced providers can help address these challenges effectively.",
    },
  ],
];

const benefits = [
  {
    header: "Eliminating Third-party Interruptions",
    description: `Decentralized KYC service transforms Web3 identity verification by eliminating third-party intermediaries, leading to cost-effective processes.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Decentralized KYC",
    description: `By leveraging a distributed ledger for storing credentials, decentralized KYC ensures that user identities are verified accurately and reliably, eliminating repeated checks and maintaining consistency across platforms.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Enhance Regulatory Compliance",
    description: `Blockchain KYC solutions enhance regulatory compliance by providing transparent and immutable records, making it simpler for businesses to adhere to AML and other regulatory requirements.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Great User Control",
    description: `Decentralized KYC solutions empower users by giving them control over their personal data. Users can decide who has access to their information, enhancing transparency and trust.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

const services = [
  {
    header: "Web3 KYC for DeFi Applications",
    description: `• Ensures that DeFi platforms adhere to legal and regulatory requirements by verifying user identities.
                  <br/> • Mitigates the risk of fraudulent activities and illegal transactions by thoroughly vetting participants.
                  <br/> • Provides a robust layer of security, protecting against the misuse of decentralized platforms.
                  <br/> • Builds confidence among users and stakeholders through transparent and secure identity verification processes.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Blockchain Identity Verification for NFT Marketplaces",
    description: `• Verification of blockchain identity in NFT marketplaces assures users and creators are genuine, thus reducing fraud and fake NFTs.
                  <br/> • Identity checking makes it possible for an NFT platform to ensure conformance to regulations, hence providing the legal grounds for a transparent marketplace.
                  <br/> • With blockchain verification of digital identity, NFT marketplaces improve security and confidence between the seller and the purchaser against a number of malicious activities.
                  <br/> • Blockchain verification minimizes the chances of fraudulent transactions and fake identities, hence safeguarding the sanctity of the NFT ecosystem.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Web3 Anti-money Laundering Solutions",
    description: `• Anti-money laundering (AML) procedures should be integrated with KYC best practices to ensure a proper check against such fraudulent activities.
                  <br/> • AML KYC services in Web 3.0 are for customer identity verification and to satisfy the norms of regulatory requirements in a decentralized, secure, and transparent process.
                  <br/> • Effective measures against money laundering help detect and prevent related criminal activities, thus safeguarding the entire financial system.
                  <br/> • Cryptocurrency AML compliance is important if cryptocurrency exchanges and businesses are to meet legal requirements and prevent huge legal penalties and penalties for themselves.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Web 3.0 KYC Applications",
    description: `• Cryptocurrency Exchanges
                  <br/> • Gaming
                  <br/> • Telecom
                  <br/> • Insurance
                  <br/> • Healthcare
                  <br/> • Real Estate
                  <br/> • Supply Chain and Logistics
                  <br/> • Government and Public Sector`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

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
