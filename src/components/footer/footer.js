import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import "./footer.css";
import CustomHr from "../common/CustomHr";
import Logo from "../common/Logo";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const navigationItems = [
  {
    title: "Product",
    items: ["Solidity Shield Scan", "Secure Watch", "Secure Audit"],
  },
  {
    title: "Features",
    items: ["Features", "Integration", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    items: ["About Us"],
  },
  {
    title: "Resources",
    items: ["Blogs", "Documentation", "Contact"],
  },
];

function Subscribe() {}

const Footer = () => (
  <div className="footer">
    <div className="footer-newsletter">
      <div className="footer-newsletter-left">
        <div className="text-lg font-bold">Join our newsletter</div>
        <div className="font-light">Keep upto date evrything SecureDapp</div>
      </div>
      <div className="footer-newsletter-right">
        <input
          className="email-input-box"
          placeholder="Enter your email"
          type="email"
        />
        <Button text={"Subscribe"} filled={true} onClick={Subscribe} />
      </div>
    </div>
    <CustomHr />
    <div className="footer-about">
      <div className="footer-about-left">
        <div className="footer-logo">
          <Logo isLeft={true} />
        </div>
        <div className="footer-socials">
          <FontAwesomeIcon size="xl" icon={faInstagram} />
          <FontAwesomeIcon size="xl" icon={faFacebook} />
          <FontAwesomeIcon size="xl" icon={faLinkedin} />
          <FontAwesomeIcon size="xl" icon={faYoutube} />
        </div>
      </div>
      <div className="footer-about-right">
        {navigationItems.map((navigationItem, navigationIndex) => {
          return (
            <div className="footer-navigation-item">
              <div className="footer-navigation-item-title">
                {navigationItem.title}
              </div>
              <div className="footer-navigation-item-items">
                {navigationItem.items.map((item, index) => {
                  return (
                    <div className="footer-navigation-item-item">{item}</div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <CustomHr />
    <div className="footer-legacy">
      <div className="footer-legacy-left">
        <a>Privacy Policy </a>
        <FontAwesomeIcon size="2xs" icon={faCircle} />
        <a>Terms & Conditions</a>
      </div>
      <div className="footer-legacy-right">
        <div>© 2024, Secure Dapp. All rights reserved</div>
      </div>
    </div>
  </div>
);

export default Footer;
