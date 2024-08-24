import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BrandLogos from "./BrandLogos";
import Button from "../common/Button";
import "./ProductServiceHero.css";
import GetStartedButton from "./GetStartedButton";

const ProductServiceHero = ({ name, title, image, cta, onClick }) => (
  <div className="product-service-hero-container">
    <div className="product-service-hero">
      <div className="hero-header">
        <div className="hero-header-title">{name}</div>
        <div className="hero-header-content">
          <div className="hero-header-left">{title}</div>
          <div className="hero-header-line"></div>
          <div className="hero-header-right">
            <div className="hero-header-right-stars">
              {Array.from({ length: 5 }).map((_) => {
                return <FontAwesomeIcon icon={faStar} />;
              })}
            </div>
            <div>
              Trusted by more than <b>100+</b> companies
            </div>
            <GetStartedButton
              onClick={onClick && onClick}
              to={cta}
              filled={true}
            />
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          style={{ borderRadius: "15px" }}
          className="hero-image"
          src={image}
          alt="Product Service Hero"
        />
      </div>
    </div>
    <BrandLogos />
  </div>
);

export default ProductServiceHero;
