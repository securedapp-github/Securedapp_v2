import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/Navbar";
import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
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

export const faqsData = [
  [
    {
      id: 0,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 1,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 2,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 3,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
      id: 4,
      q: "Plan, execute, and track projects of any size",
      a: "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
  ],
];

export const features = [
  {
    icon: faEnvelope,
    iconBackgroundColor: "#F4CAE8",
    header: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    icon: faMouse,
    iconBackgroundColor: "#B5E4CA",
    header: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    icon: faVideo,
    iconBackgroundColor: "#FFBC99",
    header: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    icon: faSliders,
    iconBackgroundColor: "#FFD88D",
    header: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    icon: faVoicemail,
    iconBackgroundColor: "#CABDFF",
    header: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
  {
    icon: faPlaneDeparture,
    iconBackgroundColor: "#B1E5FC",
    header: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
  },
];

const benefitsData = [
  {
    header: "Affordable Price",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: "/assets/images/service-1-benefit-1.svg",
    imageAlt: "",
  },
  {
    header: "Professional Team",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: "/assets/images/service-1-benefit-2.svg",
    imageAlt: "",
  },
  {
    header: "17+ Years Experience",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: "/assets/images/service-1-benefit-3.svg",
    imageAlt: "",
  },
  {
    header: "Award Winning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    image: "/assets/images/service-1-benefit-4.svg",
    imageAlt: "",
  },
];

const whyChooseData = [
  {
    image: "/assets/images/service-1-why-choose-1.svg",
    imageBackground: "#FFBD3E",
    title: "Startup Thinking",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/assets/images/service-1-why-choose-2.svg",
    imageBackground: "#FC7474",
    title: "Partner Approach",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/assets/images/service-1-why-choose-3.svg",
    imageBackground: "#926CFF",
    title: "Product Mindset",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/assets/images/service-1-why-choose-4.svg",
    imageBackground: "#67A4FF",
    title: "Experience Design Thinking",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/assets/images/service-1-why-choose-5.svg",
    imageBackground: "#FF794F",
    title: "Hiring Philosophy",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    image: "/assets/images/service-1-why-choose-6.svg",
    imageBackground: "#FFBD3E",
    title: "Certified Teams & Company",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

const howItWorksData = [
  {
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
    header: "Workflow builder",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/assets/images/product-1-how-it-works-2.svg",
    imageAlt: "",
    header: "Trigger Actions",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/assets/images/product-1-how-it-works-3.svg",
    imageAlt: "",
    header: "Task Routing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    image: "/assets/images/product-1-how-it-works-4.svg",
    imageAlt: "",
    header: "Workflow Monitoring",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

function Service() {
  return (
    <div className="service-container">
      <Navbar />
      <div className="service">
        <ProductServiceHero
          name="A PRODUCT OF SECURE DAPP"
          title="Discover Endless Possibilities with Solidity Shield"
          image={"/assets/images/product-hero.svg"}
        />
        <div className="features-section">
          <SectionTitle name={"Features"} title={"Shield Features"} />
          <FeatureCards featureData={features} />
          <div className="features-section-button">
            <Button text={"Learn more"} filled={true} />
          </div>
        </div>
        <Benefits benefitsData={benefitsData} />
        <div className="service-why-choose">
          <SectionTitle
            name={"Why choose"}
            title={
              "Why SecureDapp will Be a Great Fit For Your Software Development"
            }
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
            }
          />
          <div className="service-why-choose-cards">
            {whyChooseData.map((data) => {
              return (
                <WhyChooseCard
                  image={data.image}
                  imageBackground={data.imageBackground}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </div>
        </div>
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

export default Service;
