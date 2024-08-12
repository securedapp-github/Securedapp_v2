import "./HowItWorksCard.css";

const HowItWorksCard = ({ image, imageAlt, title, description }) => {
  return (
    <div className="how-it-works-card">
      <div className="how-it-works-card-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="how-it-works-card-title">{title}</div>
      <div className="how-it-works-card-description">{description}</div>
    </div>
  );
};

export default HowItWorksCard;
