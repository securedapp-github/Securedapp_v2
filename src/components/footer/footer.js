import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSun } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import "./footer.css";
import CustomHr from "../common/CustomHr";
import Logo from "../common/Logo";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const navigationItems = [
  {
    title: "Product",
    items: [
      {
        name: "Solidity Shield Scan",
        to: "",
      },
      {
        name: "Secure Watch",
        to: "",
      },
      {
        name: "Secure Audit",
        to: "",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        name: "Features",
        to: "",
      },
      {
        name: "Integration",
        to: "",
      },
      {
        name: "Pricing",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/pricing-policy",
      },
      {
        name: "Changelog",
        to: "",
      },
      {
        name: "Roadmap",
        to: "",
      },
    ],
  },
  {
    title: "Company",
    items: [
      {
        name: "About Us",
        to: "/about",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        name: "Blogs",
        to: "/blog",
      },
      {
        name: "Documentation",
        to: "https://securedapp.gitbook.io/securedapp-launchpad",
      },
      {
        name: "Contact",
        to: "https://securedapp.gitbook.io/securedapp-launchpad/contact-us",
      },
    ],
  },
];

const socials = [
  {
    to: "https://discord.com/invite/jQcd5WwhNy",
    icon: <FontAwesomeIcon size="xl" icon={faDiscord} />,
  },
  {
    to: "https://x.com/secure_dapp",
    icon: <FontAwesomeIcon size="xl" icon={faTwitter} />,
  },
  {
    to: "https://www.linkedin.com/company/securedapp/",
    icon: <FontAwesomeIcon size="xl" icon={faLinkedin} />,
  },
  {
    to: "https://telegram.me/securedappcommunity",
    icon: <FontAwesomeIcon size="xl" icon={faTelegram} />,
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
          {socials.map((social) => {
            return <Link to={social.to}>{social.icon}</Link>;
          })}
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
                    <div className="footer-navigation-item-item">
                      {item.to.startsWith("/") ? (
                        <Link to={item.to}>{item.name}</Link>
                      ) : (
                        <Link to={item.to} target="_blank">
                          {item.name}
                        </Link>
                      )}
                    </div>
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
        <a
          target="_blank"
          href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
          rel="noreferrer">
          Privacy Policy{" "}
        </a>
        <FontAwesomeIcon size="2xs" icon={faCircle} />
        <a
          target="_blank"
          href="https://securedapp.gitbook.io/securedapp-launchpad/terms-and-conditions"
          rel="noreferrer">
          Terms & Conditions
        </a>
      </div>
      <div className="footer-legacy-right">
        <div>© 2024, Secure Dapp. All rights reserved</div>
      </div>
    </div>
  </div>
);

export default Footer;
