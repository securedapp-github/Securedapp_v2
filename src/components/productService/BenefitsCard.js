import "./BenefitsCard.css";

export const BenefitsCardIcon = ({ img, imgAlt = "" }) => {
  return (
    <div className="benefits-card-icon">
      <img src={img} alt={imgAlt} />
    </div>
  );
};

const BenefitsCard = ({ header, description, image, imageAlt = "" }) => {
  return (
    <div className="benefits-card">
      <BenefitsCardIcon img={image} imgAlt={imageAlt} />
      <div className="benefits-card-header">{header}</div>
      <div className="benefits-card-description">{description}</div>
    </div>
  );
};

export default BenefitsCard;
