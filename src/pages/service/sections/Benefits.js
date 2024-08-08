import Button from "../../../components/common/Button";
import BenefitsCard from "../../../components/productService/BenefitsCard";

const Benefits = ({ benefitsData }) => {
  return (
    <div className="benefits">
      <div className="benefits-header">
        <div className="benefits-header-content">
          <div className="benefits-header-content-title">
            Benefits of product
          </div>
          <div className="benefits-header-content-description">
            Explore a wide range of topics, including innovative business
            strategies, technological advancements, and best practices.
          </div>
        </div>
        <div className="benefits-header-button">
          <Button text={"Get Started"} onClick={""} filled={true} />
        </div>
      </div>
      <div className="benefits-body">
        <div className="benefits-body-content">
          {benefitsData.map((data) => {
            return (
              <BenefitsCard
                header={data.header}
                description={data.description}
                image={data.image}
                imageAlt={data.imageAlt}
              />
            );
          })}
        </div>
        <div className="benefits-body-image">
          <img src="/assets/images/service-1-benefits.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
