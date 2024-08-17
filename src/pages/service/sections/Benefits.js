import Button from "../../../components/common/Button";
import BenefitsCard from "../../../components/productService/BenefitsCard";
import { useNavigate } from "react-router-dom";

const Benefits = ({ benefitsData, title, subTitle, button, img }) => {
  const navigate = useNavigate();
  return (
    <div className="benefits">
      <div className="benefits-header">
        <div className="benefits-header-content">
          <div className="benefits-header-content-title">{title}</div>
          <div className="benefits-header-content-description">{subTitle}</div>
        </div>
        <div className="benefits-header-button">
          <Button
            text={"Get Started"}
            onClick={navigate(button)}
            filled={true}
          />
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
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
