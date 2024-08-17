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
      q: "What is Web3 security?",
      a: "Web3 security refers to the methods and technologies used to protect decentralized applications (dApps), smart contracts, and other blockchain-based assets from vulnerabilities and cyber threats.",
    },
    {
      q: "Why is Web3 security important?",
      a: "Web3 security is crucial for protecting assets and transactions on decentralized networks, preventing unauthorized access, and ensuring the integrity of blockchain applications.",
    },
    {
      q: "What are common threats in Web3?",
      a: "Common threats include smart contract vulnerabilities, phishing attacks, private key compromises, and decentralized finance (DeFi) protocol exploits.",
    },
    {
      q: "What are DeFi security audits?",
      a: "DeFi security audits focus on decentralized protocols, evaluating their smart contracts and overall security to protect against risks like exploits and vulnerabilities.",
    },
    {
      q: "What are the benefits of crypto security services?",
      a: "Crypto security services protect cryptocurrency transactions and assets against hacking, fraud, and theft.",
    },
  ],
];

const technologies = [
  {
    header: "Blockchain",
    description:
      "A blockchain is a digital ledger spread across a network of computers with no central control. It keeps track of transactions by adding new data blocks to the chain. These blocks are permanent and can't be changed. When this happens, every computer on the network gets an update. This setup means no single weak spot could bring down the whole system.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    header: "Tokens",
    description:
      "Digital assets and tokens are broad classes of items of value that exist only in digital form. They include cryptocurrencies and central bank digital currencies, non-fungible tokens (NFTs), and tokenized versions of physical assets like art or tickets to concerts and sporting events.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    header: "Smart Contracts",
    description:
      "Smart contracts are simply self-executing agreements when predefined conditions are met, like terms agreed between a buyer and a seller. Such contracts are irrevocably encoded on a blockchain and, hence, reliable for integrity.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
];

const services = [
  {
    header: "Blockchain Security Audit",
    description:
      "A source code and protocol review of a blockchain network is conducted to establish its security, integrity, and efficiency. Within this scope, a blockchain security audit investigates the general architecture, smart contracts, consensus mechanisms, and network configurations.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    header: "Smart Contract Security Audit",
    description:
      "Specifically intended to audit the code of smart contracts—self-executing agreements with the terms written directly into lines of code. A smart contract security audit includes logic, security flaws, and possible vulnerabilities that can be exploited. This service identifies and solves problems before deployment, thus preventing financial losses and ensuring that smart contracts work as they should.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    header: "DeFi Security Audit",
    description:
      "Assesses DeFi applications and platforms built on blockchain networks to provide access to financial services without intermediaries. The assessment includes the security of smart contracts, liquidity protocols, and other core components of DeFi platforms, ensuring no vulnerabilities can result in hacking, theft, or system failure.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    header: "Web3 Penetration Testing",
    description:
      "Involve simulating cyberattacks against Web3 applications to identify any security weaknesses that must be addressed. Web3 penetration testing will also involve evaluating decentralized applications, smart contracts, and the infrastructure to detect vulnerabilities that malicious actors could use.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
  {
    header: "Crypto Security Services",
    description:
      "Range from digital asset and cryptocurrency transaction protection services, including wallet protection, private key security, and encryption methods, to compliance with regulations. They help to avoid theft, fraud, unauthorized access, or any other possible threat to your cryptocurrency holdings and transactions.",
    icon: "",
    iconBackgroundColor: "",
    imageBackground: "",
    image: "",
    imageAlt: "",
  },
];

function Web3Security() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="WEB 3.0 SECURITY"
          title="Real-time Prevention from Cyber Threats"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is Web 3.0 ?"}
          description={
            "Web 3.0 represents a decentralized internet that runs on blockchain technology and isn't controlled by one group. It's different from Web 2.0, where a handful of big companies call the shots. <br/><br/> Instead, Web3 works on shared records that are more transparent. As more parts of Web 3.0 come into play, a shift is expected to usher in an era where the use and access of the internet are governed by community-run networks, rather than centralized entities."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div>
          <SectionTitle
            name={"Technologies"}
            title="Major Technologies Supports Web 3.0"
          />
          <div className="how-it-works-section">
            {technologies.map((data) => {
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
        <ProductWhyCard
          header={"Why Does Your Business Require Web 3.0 Security Services?"}
          descriptions={[
            `Did you know the Web3 ecosystem experienced total losses of $889.26 million in 2023? To safeguard your business from such significant risks, it's crucial to assess potential threats in Web 3.0 technologies, including:
            <br/><br/> • Smart Contract Hacking
            <br/><br/> • Account and Mobile Wallet Theft
            <br/><br/> • Insufficient Encryption and Verification for API Queries
            <br/><br/> • Inadequate Governance
            <br/><br/> • Privacy Concerns with Decentralized Data Storage
            <br/><br/> • DApp Vulnerabilities
            <br/><br/>As Web 3.0 advances, a thorough risk assessment is essential to safeguard your business and unlock its full potential.`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/product-1-why.svg"}
          imageAlt={"Product 1 Why Image"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Services"}
            title="Explore the Range of Service Under Web 3.0 Security"
            description={""}
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

export default Web3Security;
