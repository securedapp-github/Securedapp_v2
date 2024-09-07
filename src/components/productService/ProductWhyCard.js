import Button from "../common/Button";
import Image from "next/image";

const ProductWhyCard = ({
  header,
  descriptions,
  buttonText,
  link,
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
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="product-why-card-content-description"
                >
                  {}
                </div>
              );
            })}
          </div>
          {link && (
            <div className="product-why-card-content-button">
              <Button
                text={buttonText}
                onClick={() =>
                  typeof window !== "undefined" && window.open(link)
                }
                filled={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className="product-why-card-image">
        <Image
          layout="intrinsic"
          width={100}
          height={100}
          src={image}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default ProductWhyCard;
