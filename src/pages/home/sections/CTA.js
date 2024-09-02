import React from "react";
import Button from "../../../components/common/Button";
import { useNavigate, Link } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <div className="cta-section">
      <div className="cta-section-grid">
        <img
          className="hidden dark:block"
          src="/assets/images/cta-upper-grid-dark.svg"
          alt="cta-upper-grid"
        />
        <img
          className="block dark:hidden"
          src="/assets/images/cta-upper-grid-light.svg"
          alt="cta-upper-grid"
        />
        <div className="cta-section-grid-patch">
          <img
            className="hidden dark:block"
            src="/assets/images/cta-upper-patch-dark.svg"
            alt="cta-upper-grid"
          />
          <img
            className="block dark:hidden"
            src="/assets/images/cta-upper-patch-light.svg"
            alt="cta-upper-grid"
          />
        </div>
      </div>
      <div className="cta-title">Take your security to the next level</div>
      <div className="cta-desc">
        Ready to transform your sales process and boost your performance? Join
        the hundreds of businesses already benefiting from our powerful sales
        analytics dashboard.
      </div>
      <div style={{ padding: "20px 0 60px 0" }} className="cta-section-buttons">
        {/* <Button
          className="cta-section-button w-72"
          text={"Sign Up"}
          filled={true}
        /> */}
        <Link>
          <Button
            className="cta-section-button w-72"
            text={"Schedule a Demo"}
            onClick={() =>
              window.open("https://calendar.app.google/DwaR8QDDAotwnafu5")
            }
          />
        </Link>
      </div>
      <div className="cta-section-grid">
        <img
          className="hidden dark:block relative z-0"
          src="/assets/images/cta-lower-grid-dark.svg"
          alt="cta-lower-grid"
        />
        <img
          className="block dark:hidden"
          src="/assets/images/cta-lower-grid-light.svg"
          alt="cta-lower-grid"
        />
        <div className="cta-section-grid-patch">
          <img
            className="hidden dark:block"
            src="/assets/images/cta-lower-patch-dark.svg"
            alt="cta-lower-grid"
          />
          <img
            className="block dark:hidden"
            src="/assets/images/cta-lower-patch-light.svg"
            alt="cta-lower-grid"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
