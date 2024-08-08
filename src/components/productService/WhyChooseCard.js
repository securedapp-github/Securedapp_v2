import "./WhyChooseCard.css";

export const WhyChooseCardIcon = ({ image, imageBackground }) => {
  return (
    <div
      className="why-choose-card-icon"
      style={{ background: `${imageBackground}` }}>
      <img className="p-2" src={image} alt="" />
    </div>
  );
};

const WhyChooseCard = ({ image, imageBackground, title, description }) => {
  return (
    <div className="why-choose-card">
      <div className="why-choose-card-header">
        <div className="why-choose-card-header-image">
          <WhyChooseCardIcon image={image} imageBackground={imageBackground} />
        </div>
        <div className="why-choose-card-header-title">{title}</div>
      </div>
      <div className="why-choose-card-description">{description}</div>
    </div>
  );
};

export default WhyChooseCard;
