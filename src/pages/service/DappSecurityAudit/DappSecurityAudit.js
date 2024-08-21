import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import ProductServiceHero from "../../../components/common/ProductServiceHero";
import Testimonials from "../../../components/common/Testimonials";
import SectionTitle from "../../../components/common/SectionTitle";
import Button from "../../../components/common/Button";
import ProductCard from "../../../components/productService/ProductCard";
import ProductWhyCard from "../../../components/productService/ProductWhyCard";
import FAQs from "../../../components/common/FAQs";
import { reviews } from "../../home/home.data";
import "../Service.css";
import { FeatureCards } from "../../../components/productService/FeatureCard";
import HowItWorksCard from "../../../components/productService/HowItWorksCard";
import Benefits from "../sections/Benefits";
import { howData, faqsData } from "./data";

function DappSecurityAudit() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="DAPP SECURITY AUDIT"
          title="A Comprehensive Service Ensure Decentralized Application Security Against Malicious Attack"
          image={"/assets/images/ServicePages/s3-hero.png"}
        />
        <ProductCard
          header={"What is a Dapp ?"}
          description={
            "A decentralized application (dApp) operates on a decentralized network and integrates a smart contract with a front-end user interface.<br/><br/> DApps utilize the decentralized nature of blockchain technology, unlike traditional software applications that rely on centralized servers to store data and process information based on user requests. <br/><br/> Once a developer releases a dApp's codebase, others can build upon it, fostering a collaborative development environment."
          }
          buttonText={"Scan now"}
          image={"/assets/images/ServicePages/s3-1.png"}
        />
        <ProductWhyCard
          header={"What Makes DApp Security Crucial?"}
          descriptions={[
            "DApps are becoming increasingly prevalent, but developers often neglect crucial security aspects during development. <br/><br/> Since DApps function as off-chain components, they become attractive targets for hackers. Applications such as DeFi, marketplaces, GameFi, wallets, supply chains, and DEXs are particularly vulnerable, as hackers constantly scrutinize them for exploitable weaknesses. <br/><br/> Therefore, it is crucial to focus on robust decentralized application security measures to secure them from potential threats, vulnerabilities, and data breaches.",
          ]}
          buttonText={"Get Started"}
          image={"/assets/images/ServicePages/s3-2.png"}
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
