import Button from "../common/Button";
import "./ProductCard.css";

const ProductCard = ({
  header,
  description,
  buttonText,
  onClick,
  image,
  imageAlt,
}) => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="product-card-content">
        <div className="product-card-content-header">{header}</div>
        <div
          className="product-card-content-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className="product-card-content-button">
          <Button text={buttonText} onClick={onClick} filled={true} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
