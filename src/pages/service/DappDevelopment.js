import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import ProductCard from "../../components/productService/ProductCard";
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
      q: "What are the advantages of DApps?",
      a: "DApps offer advantages in decentralization, transparency, security, and tokenization over traditional apps.",
    },
    {
      q: "How do you ensure the scalability of DApp development?",
      a: "We use techniques like layer 2 scaling solutions and optimized smart contract coding to ensure scalability.",
    },
    {
      q: "What makes your DApp development services unique?",
      a: "Our expertise in blockchain technology, commitment to security, and tailored approach to each project makes our services unique.",
    },
    {
      q: "Do you offer end-to-end DApp development services?",
      a: "Yes, we provide end-to-end services from ideation and design to development, deployment, and maintenance.",
    },
    {
      q: "What is the role of a smart contract in a DApp?",
      a: "Smart contracts automate and enforce agreements and transactions within a DApp without the need for intermediaries.",
    },
  ],
];

const industries = [
  {
    header: "Financial Services",
    description: `<br/> • Decentralized Finance (DeFi)
                  <br/> • Digital Assets and Tokenization
                  <br/> • Payments and Remittances
                  <br/> • Insurance`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Gaming DApp Services",
    description: `<br/> • Play-to-Earn
                  <br/> • Virtual Worlds and Metaverse
                  <br/> • Collectibles and NFTs
                  <br/> • Esports`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Supply Chain and Logistics",
    description: `<br/> • Transparency and Traceability
                  <br/> • Supply Chain Financing
                  <br/> • Asset Management`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Healthcare",
    description: `<br/> • Data Management and Privacy
                  <br/> • Supply Chain Management
                  <br/> • Telemedicine and Remote Patient Monitoring`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Real Estate",
    description: `<br/> • Tokenization of Property
                  <br/> • Fractional Ownership
                  <br/> • Smart Contract Development for Real Estate Transactions`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Government and Public Sector",
    description: `<br/> • Voting Systems
                  <br/> • Identity Management
                  <br/> • Supply Chain Management
                  <br/> • Citizen Services`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

const benefits = [
  {
    header: "Cost-effective Solution",
    description: `DApps operate on self-executing code, minimizing transaction costs and enabling seamless peer-to-peer transactions. 
                  DApps eliminate the need for expensive developers with its no-code platform and security features.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Establishing Secure Foundation",
    description: `A security-focused approach includes features like smart contract auditing and code reviews, ensuring a secure foundation for DApps.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Accessibility",
    description: `DApp data is stored on a public ledger, ensuring all records are publicly accessible and resistant to data manipulation.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Ensure Privacy",
    description: `Blockchain-validated cryptography techniques validate dApp users, providing enhanced privacy and ease of use.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Provide Tokens",
    description: `DApps offer tokens or digital assets to incentivize users and validators, promoting active participation.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Decentralized Approach",
    description: `The decentralized nature eliminates a single point of failure, making DApps more stable and secure than traditional applications.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

const functions = [
  {
    header: "Decentralized Exchange (DEX)",
    description: `Our services enable the creation of secure and transparent decentralized cryptocurrency trading exchanges. Such platforms realize user autonomy, eliminate the need for intermediaries, and provide very high levels of transaction privacy.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Real Estate Tokenization",
    description: `Our team tokenizes real estate assets into digital tokens to ensure seamless and efficient transactions. Through tokenization, one can sell, buy, and manage property easily and quickly due to the possibility of fractional ownership, increased liquidity, and speedy transactions.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "DeFi Development Services",
    description: `By removing most intermediaries, our DeFi development services empower users with more control over their assets, reduce transaction costs, and offer better financial inclusivity. We develop various DeFi applications such as lending platforms, yield farming protocols, and decentralized insurance.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Gaming Apps",
    description: `Our gaming solutions integrate NFT and blockchain technology so players can securely trade, sell, or hold digital assets and add real-world value to virtual items.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Supply Chain Management Services",
    description: `It helps businesses trace products from their origin to the places where they are delivered, making them more authentic, reducing cases of fraud, and improving efficiency in the supply line.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Digital Wallets",
    description: `Our service provides secure, user-friendly digital wallets for governing cryptocurrency assets. Our wallets ensure very strong security features, ease of use, and compatibility with various blockchain networks, thus ascertaining safety and efficiency in storing, sending, and receiving digital assets.`,
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

const platforms = [
  {
    header: "Ethereum",
    description:
      "A decentralized public platform for robust and scalable DApp development.",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Binance Smart Chain",
    description: "Decentralized network for interoperability and low fees.",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Polygon",
    description:
      "A multichain blockchain system for high-speed, low-cost transactions and scalability.",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Solana",
    description:
      "A platform utilizing a proof-of-stake mechanism for smart contract development provides high performance and fast transaction speeds.",
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

function DappDevelopment() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="DAPP DEVELOPMENT"
          title="Empowering Developers with Secure, No-Code Blockchain Solutions"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is DApp Development"}
          description={
            "DApp Development involves developing decentralized applications wherein the back-end code runs on a decentralized P2P network. The discipline in coding DApps is much higher compared to conventional app development, as smart contracts are immutable once deployed on the main network. These DApp applications utilize smart contracts to execute code autonomously and manage transactions without any central authority."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Our Focus"}
            title={"Uniques Dapp Development Services"}
            description={
              "We offer a comprehensive range of dApp development services, from building applications from the ground up to providing consultancy and ongoing support. Our experts consistently deliver transformative results to ensure your business success."
            }
          />
          <FeatureCards featureData={functions} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <Benefits
          benefitsData={platforms}
          title={"DApp Development Blockchain Platform We Leverage"}
          subTitle={""}
          button={""}
          img={"/assets/images/service-1-benefits.svg"}
        />
        <ProductCard
          header={"What SecureDapp has to offer"}
          description={`SecureDApp offers a comprehensive range of services designed specifically for developers building decentralized applications. Our no-code platform allows developers of all skill levels to get started easily, without the need for extensive coding experience. The security-based approach ensures that your DApps are built on a solid, transparent, and secure foundation.
            < br /> <br />Our dedicated experts develop tailored Web 3.0-based DApp development solutions. With a focus on blockchain application development, we ensure your decentralized applications are secure, efficient, and transformative for your business.`}
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div className="service-why-choose">
          <SectionTitle
            name={"Benefits"}
            title={"Benefits of Dapp Development"}
          />
          <div className="service-why-choose-cards">
            {benefits.map((data) => {
              return (
                <WhyChooseCard
                  image={data.image}
                  imageBackground={data.imageBackground}
                  title={data.header}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
        <div>
          <SectionTitle name={"Industries"} title="Industries we Work With" />
          <div className="how-it-works-section">
            {industries.map((data) => {
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

export default DappDevelopment;
