import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BrandLogos from "./BrandLogos";
import Button from "../common/Button";
import "./ProductServiceHero.css";
import GetStartedButton from "./GetStartedButton";
import {
  getHomeSelector,
  setIsRequestModalOpen,
  setDarkMode,
} from "../../redux/slices/main/homeSlice";

const ProductServiceHero = ({
  name,
  title,
  image,
  cta,
  onClick,
  service = false,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="product-service-hero-container">
      <div
        style={{
          display: service && "flex",
          flexDirection: service && "row",
          margin: service && "50px 0 100px 0",
        }}
        className="product-service-hero"
      >
        <div
          style={{
            width: service && "45%",
          }}
          className="hero-header"
        >
          {!service && <div className="hero-header-title">{name}</div>}
          <div
            style={{
              width: service && "100%",
              display: service && "flex",
              flexWrap: service && "wrap",
              flexDirection: service && "column",
            }}
            className="hero-header-content"
          >
            {service && (
              <div
                style={{
                  width: "100%",
                  marginLeft: "20px",
                }}
                className="hero-header-title"
              >
                {name}
              </div>
            )}
            <div
              style={{ width: service && "100%" }}
              className="hero-header-left"
            >
              {title}
            </div>
            {!service ? <div className="hero-header-line"></div> : <br></br>}
            <div className="hero-header-right">
              <div className="hero-header-right-stars">
                {Array.from({ length: 5 }).map((_) => {
                  return <FontAwesomeIcon icon={faStar} />;
                })}
              </div>
              {service && <br></br>}
              <div>
                Trusted by more than <b>120+</b> companies
              </div>
              {service && <br></br>}
              <GetStartedButton
                onClick={
                  service === true
                    ? () => {
                        dispatch(setIsRequestModalOpen(true));
                      }
                    : onClick
                    ? onClick
                    : onClick
                }
                to={cta}
                filled={true}
              />
            </div>
          </div>
        </div>
        <div
          style={{ width: service && "50%" }}
          className="hero-image-container"
        >
          <img
            style={{ borderRadius: "15px", width: service && "100%" }}
            className="hero-image"
            src={image}
            alt="Product Service Hero"
          />
        </div>
      </div>
      <BrandLogos />
    </div>
  );
};

export default ProductServiceHero;
