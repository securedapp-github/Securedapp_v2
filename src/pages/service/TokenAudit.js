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
      q: "What happens if vulnerabilities are found during the audit?",
      a: `When vulnerabilities are identified, the audit team provides detailed recommendations for fixing the issues. After the necessary corrections are made, a follow-up audit may be conducted to ensure all problems have been resolved.`,
    },
    {
      q: "How much does a token audit cost?",
      a: "The cost of a token audit varies based on the complexity of the smart contract and the auditing firm’s pricing structure.",
    },
    {
      q: "Who performs the token audit?",
      a: "Token audits are conducted by specialized security firms or auditors with expertise in blockchain technology and smart contract development.",
    },
    {
      q: "Can the results of the token audit be shared publicly?",
      a: "Yes, many projects share the audit report with the public to build credibility and demonstrate their commitment to security.",
    },
    {
      q: "How often should a token audit be conducted?",
      a: `It’s recommended that a token audit be conducted whenever the smart contract is significantly updated or if the token will be listed on new exchanges.`,
    },
  ],
];

const benefits = [
  {
    header: "Secure Funds",
    description: `Protect your assets and your investors from potential threats like DDoS attacks, reentrancy, overflows, and flash loan exploits.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Performance Optimization Suggestions",
    description: `Audits identify and prevent vulnerabilities and enhance code efficiency for improved performance and resource utilization.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Greater Investor Confidence",
    description: `An audit provides solid assurance, boosting trust and confidence among potential investors in your token.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "Safe Exchange Listings",
    description: `Exchanges prioritize their reputation and are cautious about adding tokens that could pose security risks. A thorough token audit serves as a crucial security endorsement for these platforms.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

const compliances = [
  {
    header: "ERC-20 Token",
    description: `• ERC-20 tokens are designed for the Ethereum blockchain, allowing for the minting and burning of tokens, which involves creating and destroying tokens. 
                  <br/><br/> • Tokens utilize arithmetic operations such as addition, subtraction, and multiplication, which we thoroughly audit to ensure accuracy.
                  <br/><br/> • As a fungible token standard, ERC-20 tokens are created, transferred, and managed through smart contracts on the Ethereum network. Their adherence to the ERC-20 standard facilitates easy trading on cryptocurrency exchanges.
                  <br/><br/> • ERC-20 tokens are especially susceptible to reentrancy attacks that exploit smart contract vulnerabilities, making audits more crucial.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "ERC-721 Token",
    description: `• ERC-721 tokens can store metadata, including the token's name, description, and image, both on-chain and off-chain.
                  <br/><br/> • ERC-721 token audit verifies the accuracy and integrity of the data, ensuring it aligns with the token and is stored and accessed properly.
                  <br/><br/> • Tokens enable owners to approve other users' spending of their tokens.
                  <br/><br/> • The token audit identifies potential security vulnerabilities and risks in the token contract's code and confirms that the contract operates as intended and meets your project's goals.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "ERC-1155 Token",
    description: `• ERC-1155 contracts are designed to manage multiple token balances efficiently, allowing for significant improvements in performance during batch transfers of various token types.
                  <br/><br/> • ERC-1155 token audits assess the contract's gas usage and overall efficiency, ensuring optimal performance even with a diverse range of token classes.
                  <br/><br/> • The ability to batch transfer and bundle multiple assets into a single smart contract makes ERC-1155 both cost-effective and capable of significantly reducing gas fees.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
  {
    header: "ERC-777 Token",
    description: `• ERC-777 is an advanced iteration of the ERC-20 standard designed to enhance efficiency in token transactions while maintaining backward compatibility.
                  <br/><br/> • Leverage well-regarded libraries and standards specifically developed for ERC-777 tokens to ensure robust security and performance. These libraries are regularly audited and updated to adhere to the latest security protocols.
                  <br/><br/> • Before deploying an ERC-777 token contract, audits are necessary to evaluate potential vulnerabilities, including reentrancy attacks, integer overflows, and unauthorized token transfers.`,
    icon: "",
    iconBackgroundColor: "#F4CAE8",
    imageBackground: "#FFBD3E",
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
  },
];

function TokenAudit() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="TOKEN AUDIT"
          title="A Must Code Review for Your Smart Contracts"
          image={"/assets/images/product-hero.svg"}
        />
        <ProductCard
          header={"What is Token Audit ?"}
          description={
            "Token contracts have become increasingly prevalent in the blockchain space, with many seeking to develop their cryptocurrencies to capture the excitement of the crypto community. Within this, ensuring token security is of utmost importance. A Token Audit involves thoroughly examining a token's smart contract code to uncover vulnerabilities, bugs, and weaknesses that could jeopardize its security and value."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <div>
          <SectionTitle name={"Benefits"} title="Benefits of Token Audit" />
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
        <ProductWhyCard
          header={"Why Does Your Business Need Token Audit?"}
          descriptions={[
            `In the blockchain space, "Code is law" and mistakes made during code development can lead to significant security issues if not addressed.<br/><br/>Ensuring bug-free code is essential for any blockchain application. Regular audits provide the necessary security assurance and help identify potential flaws. A comprehensive token audit can perform a vulnerability assessment and correct any detected vulnerability before launch. <br/><br/>A token audit safeguards users' assets by testing for common attacks. By conducting a thorough token audit, you can proactively address potential risks, build trust with users, and offer performance optimization suggestions. As the saying goes, "Prevention is better than cure" and a detailed audit report can do so through smart contract code review, making them secure and reliable.`,
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/product-1-why.svg"}
          imageAlt={"Product 1 Why Image"}
        />
        <div className="features-section">
          <SectionTitle
            name={"Compliances"}
            title={"Compliance Checks Involve in Token Audit"}
            description={
              "The approach to auditing and compliance checks can differ widely depending on the blockchain platform and its unique vulnerabilities. Each blockchain has its own set of challenges and characteristics, which influence how tokens are reviewed and secured."
            }
          />
          <FeatureCards featureData={compliances} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <ProductCard
          header={"Be Cautious During Token Audit"}
          description={
            "A drop of prevention is worth a pound of cure, but even the best audits require continuous vigilance. <br/><br/>Token audits are crucial for technical robustness and regulatory compliance. Audits are a foundation for building credibility with customers and investors and ensuring adherence to laws and regulations across various jurisdictions. <br/><br/>However, these audits come with challenges like high cost, time-consuming, and require specialized expertise. It's essential to recognize that while token audits are indispensable, they are not foolproof. Some errors or vulnerabilities might still be overlooked, compromising the token's integrity and performance. <br/><br/>Here, experts like SecureDApp skillfully balance the depth and scope of the audit, maintaining transparent communication with clients about the audit's limitations, scope, and results."
          }
          buttonText={"Scan now"}
          image={"/assets/images/product-1-intro.svg"}
        />
        <Testimonials reviews={reviews} />
        <div>
          <FAQs faqsData={faqsData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TokenAudit;
