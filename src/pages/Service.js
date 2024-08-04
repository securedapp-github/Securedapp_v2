import logo from '../logo.svg';
import Navbar from '../components/navbar';
import ProductHero from '../sections/prod-serv-hero';
import Testimonials from '../sections/testimonials';
import Footer from '../sections/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../components/section-title';
import Button1 from '../components/button-1';
import TitleDesc from "../components/title-desc"
import BrandLogos from '../components/brand-logos';
import {FeatureBox, HowItWorksBox, WhyChooseBox, BenefitsBox} from '../components/boxes';
import FAQs from "../sections/FAQs"

const faqsData = [[
    {
        id: 0,
        q : "Plan, execute, and track projects of any size",
        a : "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
        id: 1,
        q : "Plan, execute, and track projects of any size",
        a : "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
        id: 2,
        q : "Plan, execute, and track projects of any size",
        a : "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
        id: 3,
        q : "Plan, execute, and track projects of any size",
        a : "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    },
    {
        id: 4,
        q : "Plan, execute, and track projects of any size",
        a : "Easily assign tasks and prioritize what's most important to your team. Track your team's progress, set project timelines, and manage their work all in one place.",
    }
]]

function Service({theme}) {
  return (
    <div className="secure-dapp-container">
        <Navbar/>
        <ProductHero name="A SecureDapp product" title="Discover Endless Possibilities with Solidity Shield" image={"/images/product-hero.png"}/>
    <div>
        <SectionTitle name={"Features"} title={"Shield Features"} />
        <div>
            <FeatureBox title={"Lorem Ipsum"} desc={"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M23 7.86182L16 12.8618L23 17.8618V7.86182Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 5.86182H3C1.89543 5.86182 1 6.75725 1 7.86182V17.8618C1 18.9664 1.89543 19.8618 3 19.8618H14C15.1046 19.8618 16 18.9664 16 17.8618V7.86182C16 6.75725 15.1046 5.86182 14 5.86182Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>}/>
            <FeatureBox title={"Lorem Ipsum"} desc={"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"} icon={""}/>
            <FeatureBox title={"Lorem Ipsum"} desc={"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"} icon={""}/>
            <FeatureBox title={"Lorem Ipsum"} desc={"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"} icon={""}/>
            <FeatureBox title={"Lorem Ipsum"} desc={"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"} icon={""}/>
            <FeatureBox title={"Lorem Ipsum"} desc={"Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"} icon={""}/>    
        </div>
        <div>
            <Button1 value={"Learn more"} link={""}/>
        </div>
    </div>
    <div>
        <div>
            <div>
                <TitleDesc title={"Benefits of product"} desc={"Explore a wide range of topics, including innovative business  strategies, technological advancements, and best practices."}/>
            </div>
            <div>
                <Button1 value={"Get Started"} link={""}/>
            </div>
        </div>
        <div>
            <div>
                <BenefitsBox title={"Affordable Price"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} icon={<img style={{background:"black"}} src="/images/service-benefit-1.svg"/>}/>
                <BenefitsBox title={"Professional Team"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} icon={<img style={{background:"black"}} src="/images/service-benefit-1.svg"/>}/>
                <BenefitsBox title={"17+ years Experience"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} icon={<img style={{background:"black"}} src="/images/service-benefit-1.svg"/>}/>
                <BenefitsBox title={"Award Winning"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"} icon={<img style={{background:"black"}} src="/images/service-benefit-1.svg"/>}/>
            </div>
            <div>
                <img width={"200px"} src='/images/service-benefits.png'/>
            </div>
        </div>
    </div>
    <div>
        <SectionTitle name={"Why choose"} title={"Why SecureDapp will Be a Great Fit For Your Software Development"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}/>
        <div>
            <WhyChooseBox title={"Startup Thinking"} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"} icon={<img src="/images/why-choose-1.svg"/>}/>
            <WhyChooseBox title={"Partner Approach"} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"} icon={<img src="/images/why-choose-1.svg"/>}/>
            <WhyChooseBox title={"Product Thinking"} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"} icon={<img src="/images/why-choose-1.svg"/>}/>
            <WhyChooseBox title={"Experience design thinking"} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"} icon={<img src="/images/why-choose-1.svg"/>}/>
            <WhyChooseBox title={"Hiring philosophy"} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"} icon={<img src="/images/why-choose-1.svg"/>}/>
            <WhyChooseBox title={"Certified team & company"} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"} icon={<img src="/images/why-choose-1.svg"/>}/>
        </div>
    </div>
    <div>
        <SectionTitle name={"How it works"} title="How it works" description={"Streamline business processes and increase efficiency with workflow automation features."}/>
        <div>
            <HowItWorksBox title="Workflow Builder" desc={"Streamline business processes and increase efficiency with workflow automation features."} icon={<img src="/images/Group 5.svg"/>}/>
            <HowItWorksBox title="Workflow Builder" desc={"Streamline business processes and increase efficiency with workflow automation features."} icon={<img src="/images/Group 5.svg"/>}/>
            <HowItWorksBox title="Workflow Builder" desc={"Streamline business processes and increase efficiency with workflow automation features."} icon={<img src="/images/Group 5.svg"/>}/>
            <HowItWorksBox title="Workflow Builder" desc={"Streamline business processes and increase efficiency with workflow automation features."} icon={<img src="/images/Group 5.svg"/>}/>
        </div>
    </div>
    <Testimonials/>
    <div>
        <FAQs Nothome={true} faqsData={faqsData}/>
    </div>
    <Footer/>
</div>
);
}

export default Service;
