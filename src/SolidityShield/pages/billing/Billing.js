import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BillingTable from "../../components/billing/BillingTable";
import CustomButton from "../../components/common/CustomButton";
import Pagination from "../../components/common/Pagination";
import ChartCard from "../../components/overview/ChartCard";
import "./Billing.css";
import { getUserData } from "../../redux/auth/authSlice";
import {
  getPaymentSelector,
  setPaymentModal,
} from "../../redux/dashboard/paymentSlice";
import { useDispatch } from "react-redux";
import { pricingDetails } from "../pricing/pricing.data";

const BillingScreen = () => {
  const { paymentModal } = useSelector(getPaymentSelector);
  const auth = useSelector(getUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setPaymentModal(true));
  };

  useEffect(() => {
    console.log(auth.user);
    //auth.user.email && navigate("/solidity-shield-scan/auth");
    async function fetch() {}
    fetch();
  }, []);

  return (
    <div className="sss-billing-screen-container">
      <div className="sss-billing-screen">
        <div className="sss-billing-header">
          <ChartCard
            className={
              "flex-1 w-full min-h-[250px] lg:w-1/2 flex flex-col justify-center"
            }>
            <div className="sss-billing-current-container">
              <div className="sss-billing-current-header">
                <div className="sss-billing-current-header-tittle">
                  {auth &&
                    pricingDetails[Number(auth.user.plan) + 1].pricingCard
                      .planType}
                </div>
                <div className="sss-billing-current-header-desc">
                  {auth &&
                    pricingDetails[Number(auth.user.plan) + 1].pricingCard
                      .description}
                </div>
              </div>
              <div className="sss-billing-current-body">
                <div className="sss-billing-current-body-rate">
                  <div className="sss-billing-current-body-price">
                    {auth &&
                      pricingDetails[
                        Number(auth.user.plan) + 1
                      ].pricingCard.price.replace("/-", "")}
                  </div>
                  <div className="sss-billing-current-body-per">
                    {"Permonth"}
                  </div>
                </div>
                <div className="sss-billing-current-body-users">
                  {"600+ Users"}
                </div>
              </div>
              <div className="sss-billing-current-button-container">
                <div className="sss-billing-current-buttons">
                  <CustomButton
                    onClick={() => navigate("/solidity-shield-scan/pricing")}
                    className={
                      "px-3 py-2 rounded-xl bg-tertiary border border-black text-black"
                    }
                    text={"Upgrade Plan"}
                  />
                  <CustomButton
                    onClick={() => navigate("/solidity-shield-scan/pricing")}
                    className={
                      "px-3 py-2 rounded-xl text-black border border-tertiary bg-white"
                    }
                    text={"Buy Credits"}
                  />
                </div>
              </div>
            </div>
          </ChartCard>
          <ChartCard
            className={
              "flex-1 w-full min-h-[250px] lg:w-1/2 flex flex-col justify-center"
            }>
            <div className="sss-billing-payment-container">
              <div className="sss-billing-payment-header">
                <div className="sss-billing-current-header-tittle">
                  Payment Method
                </div>
                <div className="sss-billing-current-header-desc">
                  Change how you pay for your plan
                </div>
              </div>
              <div className="sss-billing-payment-method-container">
                <div className="sss-billing-payment-method">
                  <div className="sss-billing-payment-method-left">
                    <div className="sss-billing-payment-method-image">
                      <img
                        className="p-1"
                        src="/assets/images/solidity-shield-scan/billing-visa.svg"
                        alt="Visa"
                      />
                    </div>
                    <div className="sss-billing-payment-method-left-details">
                      <div className="text-black">Visa Ending in 2025</div>
                      <div className="">Expired 02/2025</div>
                      <div className="sss-billing-payment-method-detail-mail">
                        <i className="fa fa-envelope" />
                        <div className="">my@billing.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="sss-billing-payment-method-right">
                    <CustomButton
                      className={"px-6 py-2 bg-tertiary rounded-lg "}
                      text={"Edit"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ChartCard>
        </div>
        {/* <div className="sss-billing-body">
          <BillingTable />
        </div>
         */}
      </div>
    </div>
  );
};

export default BillingScreen;
