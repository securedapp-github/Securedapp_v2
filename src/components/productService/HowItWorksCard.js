import "./HowItWorksCard.css";

const HowItWorksCard = ({ image, imageAlt, title, description }) => {
  return (
    <div className="how-it-works-card">
      {image && (
        <div className="how-it-works-card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}
      {title && <div className="how-it-works-card-title">{title}</div>}
      <div
        className="how-it-works-card-description"
        dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default HowItWorksCard;
