import { pricingDetails } from "./pricing.data";
import "./Pricing.css";
import CustomButton from "../../components/common/CustomButton";

const PricingPlanCard = ({ icon, planType, price, description, onClick }) => {
  return (
    <div className="sss-pricing-plan-card-container">
      <div className="sss-pricing-plan-card">
        <div className="sss-pricing-card-header">
          <img src={icon} alt="" />
          <div className="sss-pricing-card-header-plan-type">{planType}</div>
        </div>
        <div className="sss-pricing-card-body">
          <div className="sss-pricing-card-body-price">{price}</div>
          <div className="">{"/month"}</div>
        </div>
        <div className="sss-pricing-card-description">{description}</div>
        <div onClick={onClick} className="sss-pricing-card-button-container">
          <button className="sss-pricing-card-button">
            <div className="">Get Started</div>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="sss-pricing-container">
      <div className="sss-pricing-plans-scrollable">
        <div className="sss-pricing-plans">
          <div className="sss-pricing-plan-headers">
            <div className="sss-pricing-plan-headers-cards">
              <div className="sss-pricing-plan-headers-card-container"></div>
              {pricingDetails.map((detail) => {
                return (
                  detail.pricingCard.planType && (
                    <div className="sss-pricing-plan-headers-card-container">
                      <PricingPlanCard
                        icon={detail.pricingCard.icon}
                        planType={detail.pricingCard.planType}
                        price={detail.pricingCard.price}
                        description={detail.pricingCard.description}
                        onClick={() => {}}
                      />
                    </div>
                  )
                );
              })}
            </div>
          </div>
          <div className="sss-pricing-plan-body">
            <div className="sss-pricing-plan-details-container">
              {pricingDetails.map((detail, planIndex) => {
                return (
                  <div className="sss-pricing-plan-detail-row">
                    {Object.keys(detail.details).map((feature) => {
                      return (
                        <div className="sss-pricing-plan-detail-row-value-container">
                          <div
                            className={`sss-pricing-plan-detail-row-value ${
                              planIndex === 0 &&
                              "sss-pricing-plan-detail-row-value-first"
                            }`}>
                            {detail.details[feature].value === "TICK" ? (
                              <img
                                src="/assets/images/solidity-shield-scan/billing-price-tick.svg"
                                alt=""
                              />
                            ) : detail.details[feature].value === "DASH" ? (
                              <img
                                src="/assets/images/solidity-shield-scan/billing-price-dash.svg"
                                alt=""
                              />
                            ) : (
                              detail.details[feature].value
                            )}
                            {detail.details[feature].info && (
                              <div className="sss-pricing-plan-detail-row-info-container group">
                                <img
                                  src="/assets/images/solidity-shield-scan/pricing-plan-info.svg"
                                  alt=""
                                />
                                <div className="sss-pricing-plan-detail-row-info">
                                  {detail.details[feature].info}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="sss-pricing-plan-footer">
        <div className="sss-pricing-plan-footer-buttons">
          <div className="text-center">Get a custom Plan</div>
          <div className="sas-pricing-plan-footer-button-container">
            <CustomButton
              text={"Contact Us"}
              className={"border border-tertiary px-12 py-2 rounded-xl"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
