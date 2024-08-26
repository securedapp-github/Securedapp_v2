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
  const isOnWeb = window.innerWidth > 1024;
  return (
    <div className="product-service-hero-container">
      <div
        style={{
          display: service && isOnWeb && "flex",
          flexDirection: service && isOnWeb && "row",
          margin: service && isOnWeb && "50px 0 100px 0",
        }}
        className="product-service-hero"
      >
        <div
          style={{
            width: service && isOnWeb && "45%",
          }}
          className="hero-header"
        >
          {!service && isOnWeb && (
            <div className="hero-header-title">{name}</div>
          )}
          <div
            style={{
              width: service && isOnWeb && "100%",
              display: service && isOnWeb && "flex",
              flexWrap: service && isOnWeb && "wrap",
              flexDirection: service && isOnWeb && "column",
            }}
            className="hero-header-content"
          >
            {service && isOnWeb && (
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
              style={{ width: service && isOnWeb && "100%" }}
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
              {service && isOnWeb && <br></br>}
              <div>
                Trusted by more than <b>120+</b> companies
              </div>
              {service && isOnWeb && <br></br>}
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
          style={{ width: service && isOnWeb && "50%" }}
          className="hero-image-container"
        >
          <img
            style={{
              borderRadius: "15px",
              width: service && isOnWeb && "100%",
            }}
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
