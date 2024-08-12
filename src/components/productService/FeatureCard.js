import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FeatureCard.css";

export const FeatureIcon = ({ icon, iconBackgroundColor }) => {
  return (
    <div
      className="feature-icon"
      style={{ background: `${iconBackgroundColor}` }}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export const FeatureCard = ({
  icon,
  iconBackgroundColor,
  header,
  description,
}) => {
  return (
    <div className="feature-card">
      <div>
        <FeatureIcon icon={icon} iconBackgroundColor={iconBackgroundColor} />
      </div>
      <div className="feature-card-content">
        <div className="feature-card-content-header">{header}</div>
        <div className="feature-card-content-description">{description}</div>
      </div>
    </div>
  );
};

export const FeatureCards = ({ featureData }) => {
  return (
    <div className="features-section-cards">
      {featureData.map((feature, index) => {
        return (
          <FeatureCard
            key={`product-feature-card-${index}`}
            icon={feature.icon}
            iconBackgroundColor={feature.iconBackgroundColor}
            header={feature.header}
            description={feature.description}
          />
        );
      })}
    </div>
  );
};
