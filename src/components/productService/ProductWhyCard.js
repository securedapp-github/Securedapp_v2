import Button from "../common/Button";
import "./ProductWhyCard.css";

const ProductWhyCard = ({
  header,
  descriptions,
  buttonText,
  onClick,
  image,
  imageAlt,
}) => {
  return (
    <div className="product-why-card">
      <div className="product-why-card-content-container">
        <div className="product-why-card-content">
          <div className="product-why-card-content-header">{header}</div>
          <div className="product-why-card-content-descriptions">
            {descriptions.map((description) => {
              return (
                <div className="product-why-card-content-description">
                  {description}
                </div>
              );
            })}
          </div>
          <div className="product-why-card-content-button">
            <Button text={buttonText} onClick={onClick} filled={true} />
          </div>
        </div>
      </div>
      <div className="product-why-card-image">
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  );
};

export default ProductWhyCard;
