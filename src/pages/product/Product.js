import ProductServiceHero from "../../components/common/ProductServiceHero";
import Testimonials from "../../components/common/Testimonials";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import TitleDesc from "../../components/common/TitleDesc";
import { FeatureBox, HowItWorksBox } from "../../components/boxes";
import FAQs from "../../components/common/FAQs";
import { faqsData, reviews } from "../home/home.data";

function Product({ isLargeScreen, setIsLargeScreen }) {
  return (
    <div className="secure-dapp-container">
      <ProductServiceHero
        name="A SecureDapp product"
        title="Discover Endless Possibilities with Solidity Shield"
        image={"/images/product-hero.png"}
      />
      <div>
        <div>
          <img src="" />
        </div>
        <div>
          <TitleDesc
            title={"What is Solidity Shield"}
            desc={
              "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ullamcorper ac a vulputate dis. Blandit maecenas blandit cras posuere gravida etiam."
            }
          />
          <Button text={"Scan now"} onClick={""} />
        </div>
      </div>
      <div>
        <SectionTitle name={"Features"} title={"Shield Features"} />
        <div>
          <FeatureBox
            title={"Lorem Ipsum"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"
            }
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none">
                <path
                  d="M23 7.86182L16 12.8618L23 17.8618V7.86182Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 5.86182H3C1.89543 5.86182 1 6.75725 1 7.86182V17.8618C1 18.9664 1.89543 19.8618 3 19.8618H14C15.1046 19.8618 16 18.9664 16 17.8618V7.86182C16 6.75725 15.1046 5.86182 14 5.86182Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <FeatureBox
            title={"Lorem Ipsum"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"
            }
            icon={""}
          />
          <FeatureBox
            title={"Lorem Ipsum"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"
            }
            icon={""}
          />
          <FeatureBox
            title={"Lorem Ipsum"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"
            }
            icon={""}
          />
          <FeatureBox
            title={"Lorem Ipsum"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"
            }
            icon={""}
          />
          <FeatureBox
            title={"Lorem Ipsum"}
            desc={
              "Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard"
            }
            icon={""}
          />
        </div>
        <div>
          <Button text={"Learn more"} onClick={""} />
        </div>
      </div>
      <div>
        <div>
          <TitleDesc
            title={"What is Solidity Shield"}
            desc={
              "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ullamcorper ac a vulputate dis. Blandit maecenas blandit cras posuere gravida etiam."
            }
          />
          <Button text={"Get Started"} link={""} />
        </div>
        <div>
          <img src="" />
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
        <div>
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <HowItWorksBox
            title={"Workflow Builder"}
            desc={
              "Streamline business processes and increase efficiency with workflow automation features."
            }
            icon={<img src="/images/Group 5.svg" />}
          />
          <img width={"200px"} src="/images/how-it-works-prod.png" />
        </div>
      </div>
      <Testimonials reviews={reviews} />
      <div>
        <FAQs
          isLargeScreen={isLargeScreen}
          setIsLargeScreen={setIsLargeScreen}
          faqsData={faqsData}
        />
      </div>
    </div>
  );
}

export default Product;
