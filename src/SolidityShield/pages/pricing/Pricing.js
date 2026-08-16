"use client";

import { useDispatch, useSelector } from "react-redux";
import { pricingDetails } from "./pricing.data";
import CustomButton from "../../components/common/CustomButton";
import {
  faChevronLeft,
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  getPaymentSelector,
  setPaymentModal,
  setPlan,
} from "../../redux/dashboard/paymentSlice";
import { getUserData } from "../../redux/auth/authSlice";
import { useRouter } from "next/router";
import MetaTags from "../../../components/common/MetaTags";
import Footer from "../../components/common/Footer";
import { setLoader } from "../../redux/commonSlice";
import { getUser } from "../../functions";

const PricingPlanCard = ({
  icon,
  planType,
  price,
  description,
  onClick,
  id,
  details,
}) => {
  const auth = useSelector(getUserData);
  const userPlan = auth?.user?.plan != null ? auth.user.plan : 0;
  const isCurrentPlan = userPlan === id;

  // Format numbers neatly (e.g., ₹ 29999 -> ₹ 29,999)
  const displayPrice = price ? price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : price;

  return (
    <div className="sss-pricing-plan-card-container h-full">
      <div
        className={`sss-pricing-plan-card bg-[var(--sss-color-card)] h-full flex flex-col justify-between p-5 sm:p-6 rounded-2xl transition-all ${
          isCurrentPlan
            ? "border-2 border-[#22C55E] shadow-lg shadow-[#22C55E]/10"
            : "border border-[var(--sss-color-border)]"
        }`}
      >
        <div>
          <div className="sss-pricing-card-header flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image src={icon} alt="icon" width={26} height={26} />
              <div className="sss-pricing-card-header-plan-type text-lg font-bold text-[var(--sss-color-primary)]">
                {planType}
              </div>
            </div>
            {isCurrentPlan && (
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 rounded-full">
                Active
              </span>
            )}
          </div>
          <div className="sss-pricing-card-body flex justify-between items-baseline mt-4">
            <div className="sss-pricing-card-body-price text-2xl md:text-3xl font-extrabold text-[#22C55E]">
              {displayPrice}
            </div>
            <div className="text-xs text-[var(--sss-color-muted)] font-medium">{"/month"}</div>
          </div>
          <div className="sss-pricing-card-description text-xs md:text-sm text-[var(--sss-color-muted)] mt-3 leading-relaxed">
            {description}
          </div>
        </div>

        <div onClick={onClick} className="sss-pricing-card-button-container mt-6">
          <button
            className={`w-full py-2.5 px-4 text-xs md:text-sm font-bold rounded-xl flex justify-center items-center gap-x-2 transition-all cursor-pointer ${
              isCurrentPlan && id === 0
                ? "bg-[var(--sss-color-input-bg)] text-[var(--sss-color-muted)] border border-[var(--sss-color-input-border)] cursor-default"
                : "bg-[#22C55E] text-[#0A1120] hover:bg-[#16a34a] border border-[#22C55E] shadow-sm"
            }`}
          >
            <div>
              {isCurrentPlan && id > 0
                ? "Renew Plan"
                : isCurrentPlan && id === 0
                ? "Current Plan (Free)"
                : "Get Started"}
            </div>
            {isCurrentPlan && id === 0 ? null : (
              <FontAwesomeIcon icon={faArrowRight} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [currentVisible, setCurrentVisible] = useState(1);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const auth = useSelector(getUserData);
  const navigate = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(
        typeof window !== "undefined" && window.innerWidth >= 768
      );
    };
    handleResize();
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextPricingCard = () => {
    if (currentVisible < 3) setCurrentVisible(currentVisible + 1);
  };

  const previousPricingCard = () => {
    if (currentVisible > 1) setCurrentVisible(currentVisible - 1);
  };

  const openModal = (plan) => {
    if (localStorage.getItem("UserEmail")) {
      dispatch(setPaymentModal(true));
      dispatch(setPlan(plan));
    } else {
      navigate.push("/solidity-shield-scan/auth");
    }
  };

  const [user, setUser] = useState(auth?.user);

  useEffect(() => {
    async function fetchUserData() {
      const jwt = typeof window !== "undefined" ? localStorage.getItem("UserJwtToken") : null;
      if (!jwt) {
        return; // Allow viewing pricing without login
      }
      dispatch(setLoader(true));
      try {
        const data = await getUser({ dispatch });
        if (data) setUser(data);
      } catch (error) {
        // Network error (backend not reachable) — stay on page, don't redirect
        console.warn("Pricing: getUser network error, using cached data:", error.message);
      } finally {
        dispatch(setLoader(false));
      }
    }
    if (!user || Object.keys(user).length === 0) {
      fetchUserData();
    }
  }, [user, dispatch]);

  return (
    <div className="sss-pricing-container bg-[#0A1120] text-white">
      <MetaTags
        data={{
          title: "Solidity Shield Pricing — Smart Contract Audit Plans | SecureDApp",
          desc: "Explore Solidity Shield’s pricing for blockchain security. Compare features and choose the plan that fits your needs with SecureDApp’s solutions.",
          keywords:
            "solidity shield pricing, smart contract audit cost, blockchain security plans, SecureDApp",
          url: "https://securedapp.io/solidity-shield-scan/pricing",
        }}
      />

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center pb-6 pt-8 font-extrabold text-[#FFFFFF] tracking-tight">
        Solidity Shield — Plans & Pricing
      </h1>

      <div className="sss-pricing-plans-scrollable w-full">
        <div className="sss-pricing-plans">
          <div className="sss-pricing-plan-headers">
            <div className="sss-pricing-plan-headers-cards">
              <div className="sss-pricing-plan-headers-card-container hidden md:flex flex-col justify-end p-4">
                <div className="text-base font-bold text-[#FFFFFF]">Feature Comparison</div>
                <div className="text-xs text-[#8B93A7] mt-1">Select the tier that best fits your development pipeline.</div>
              </div>
              {pricingDetails.map((detail, cardIndex) => {
                return (
                  detail.pricingCard.planType &&
                  (isLargeScreen || currentVisible === cardIndex) && (
                    <div key={cardIndex} className="sss-pricing-plan-headers-card-container">
                      <PricingPlanCard
                        icon={detail.pricingCard.icon}
                        planType={detail.pricingCard.planType}
                        price={detail.pricingCard.price}
                        description={detail.pricingCard.description}
                        details={detail.details}
                        onClick={() =>
                          detail.id > 0
                            ? openModal(detail.id)
                            : navigate.push("/solidity-shield-scan/auth")
                        }
                        id={detail.id}
                      />
                      <div className="sss-pricing-card-changer-buttons text-[#8B93A7]">
                        <div
                          onClick={previousPricingCard}
                          className="sss-pricing-card-changer-button-container cursor-pointer"
                        >
                          <FontAwesomeIcon
                            className="sss-pricing-card-changer-button"
                            icon={faChevronLeft}
                          />
                        </div>
                        <div
                          onClick={nextPricingCard}
                          className="sss-pricing-card-changer-button-container cursor-pointer"
                        >
                          <FontAwesomeIcon
                            className="sss-pricing-card-changer-button"
                            icon={faChevronRight}
                          />
                        </div>
                      </div>
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
                  (isLargeScreen ||
                    currentVisible === planIndex ||
                    planIndex === 0) && (
                    <div key={planIndex} className="sss-pricing-plan-detail-row">
                      {Object.keys(detail.details).map((feature) => {
                        return (
                          <div key={feature} className="sss-pricing-plan-detail-row-value-container">
                            <div
                              className={`sss-pricing-plan-detail-row-value ${
                                planIndex === 0 &&
                                "sss-pricing-plan-detail-row-value-first"
                              }`}
                            >
                              {detail.details[feature].value === "TICK" ? (
                                <Image
                                  src="/assets/images/solidity-shield-scan/billing-price-tick.svg"
                                  alt="tick"
                                  width={24}
                                  height={25}
                                />
                              ) : detail.details[feature].value === "DASH" ? (
                                <span className="text-[#8B93A7] font-bold">—</span>
                              ) : (
                                <span dangerouslySetInnerHTML={{ __html: detail.details[feature].value }} />
                              )}
                              {detail.details[feature].info && (
                                <div className="sss-pricing-plan-detail-row-info-container group">
                                  <Image
                                    src="/assets/images/solidity-shield-scan/pricing-plan-info.svg"
                                    alt="i"
                                    width={18}
                                    height={19}
                                  />
                                  <div className="sss-pricing-plan-detail-row-info">
                                    <div className="font-semibold text-[#FFFFFF]">
                                      <span dangerouslySetInnerHTML={{ __html: detail.details[feature].value }} />
                                    </div>
                                    <div className="text-[#8B93A7]">{detail.details[feature].info}</div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="sss-pricing-plan-footer mt-10">
        <div className="bg-[#0F1729] border border-[#1E293B] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg">
          <div>
            <div className="text-xl font-bold text-white">Need a Custom Enterprise Solution?</div>
            <div className="text-sm text-[#8B93A7] mt-1">Get tailored security scanning, dedicated support, and custom contract audit volume.</div>
          </div>
          <div className="sas-pricing-plan-footer-button-container flex-shrink-0">
            <CustomButton
              text={"Support"}
              className={
                "border border-[#22C55E] text-[#22C55E] bg-transparent hover:bg-[#22C55E] hover:text-[#0A1120] font-bold px-8 py-2.5 rounded-xl transition-colors cursor-pointer"
              }
              onClick={() => navigate.push("/solidity-shield-scan/support")}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
