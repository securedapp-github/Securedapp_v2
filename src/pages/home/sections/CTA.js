import React from "react";
import Button from "../../../components/common/Button";

const CTA = () => (
  <div className="cta-section">
    <div className="cta-section-grid">
      <img src="/assets/images/cta-upper-grid.svg" alt="cta-upper-grid" />
    </div>
    <div className="cta-title">Take your security to the next level</div>
    <div className="cta-desc">
      Ready to transform your sales process and boost your performance? Join the
      hundreds of businesses already benefiting from our powerful sales
      analytics dashboard.
    </div>
    <div className="cta-section-buttons">
      <Button className="cta-section-button" text={"Sign Up"} filled={true} />
      <Button className="cta-section-button" text={"Schedule a Demo"} />
    </div>
    <div className="cta-section-grid">
      <img src="/assets/images/cta-lower-grid.svg" alt="cta-lower-grid" />
    </div>
  </div>
);

export default CTA;
