import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FeatureCard.css";
import { useSelector } from "react-redux";
import { getHomeSelector } from "../../redux/slices/main/homeSlice";

export const FeatureIcon = ({ icon, iconBackgroundColor }) => {
  const { darkMode } = useSelector(getHomeSelector);
  return (
    icon && (
      <div
        className="feature-icon"
        style={{ background: `${iconBackgroundColor}` }}
      >
        <img
          style={{
            filter: darkMode ? "invert(1)" : "invert(0)",
          }}
          src={`/assets/images/icons/${icon}.svg`}
          alt="icon"
        ></img>
      </div>
    )
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
      {icon && (
        <div>
          <FeatureIcon icon={icon} iconBackgroundColor={""} />
        </div>
      )}
      <div className="feature-card-content">
        {header && <div className="feature-card-content-header">{header}</div>}
        <div
          className="feature-card-content-description"
          dangerouslySetInnerHTML={{ __html: description }}
        >
          {}
        </div>
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
