import Button from "../common/Button";
import Image from "next/image";
import "./ProductCard.module.css";

const ProductCard = ({
  header,
  description,
  buttonText,
  link,
  image,
  imageAlt,
}) => {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Image
          layout="intrinsic"
          width={100}
          height={100}
          src={image}
          alt={imageAlt}
        />
      </div>
      <div className="product-card-content">
        <div className="product-card-content-header">{header}</div>
        <div
          className="product-card-content-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        {link && (
          <div className="product-card-content-button">
            <Button
              text={buttonText}
              onClick={() => typeof window !== "undefined" && window.open(link)}
              filled={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
