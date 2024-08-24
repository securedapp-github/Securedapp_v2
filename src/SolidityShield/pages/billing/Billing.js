import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BillingTable from "../../components/billing/BillingTable";
import CustomButton from "../../components/common/CustomButton";
import Pagination from "../../components/common/Pagination";
import ChartCard from "../../components/overview/ChartCard";
import "./Billing.css";
import { payPhonpe, payCrypto, payCryptoVerify } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import {
  getPaymentSelector,
  setPaymentModal,
} from "../../redux/dashboard/paymentSlice";
import { useDispatch } from "react-redux";

const BillingScreen = () => {
  const { paymentModal } = useSelector(getPaymentSelector);
  const auth = useSelector(getUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setPaymentModal(true));
  };

  useEffect(() => {
    !auth.user.email && navigate("/solidity-shield-scan/auth");
    async function fetch() {}
    fetch();
  }, []);
  return (
    <div className="sss-billing-screen-container">
      <button
        onClick={async () => {
          await payPhonpe({
            planid: 1,
            email: auth.user.email,
          });
        }}
      >
        Pay via Phonpe
      </button>
      <br />
      <button
        onClick={async () => {
          const pay = await payCrypto({
            planid: 1,
            email: auth.user.email,
          });
          console.log(pay);
          const verify = await payCryptoVerify({
            id: pay.payment_id,
            transactionId: pay.newTransactionId,
            amount: pay.payAmount,
          });
          console.log(verify);
        }}
      >
        Pay via Crypto
      </button>
      <div className="sss-billing-screen">
        <div className="sss-billing-header">
          <ChartCard
            className={
              "flex-1 w-full min-h-[250px] lg:w-1/2 flex flex-col justify-center"
            }
          >
            <div className="sss-billing-current-container">
              <div className="sss-billing-current-header">
                <div className="sss-billing-current-header-tittle">
                  Basic Plan
                </div>
                <div className="sss-billing-current-header-desc">
                  Our most popular plan for small team
                </div>
              </div>
              <div className="sss-billing-current-body">
                <div className="sss-billing-current-body-rate">
                  <div className="sss-billing-current-body-price">{"$15"}</div>
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
                    onClick={openModal}
                    className={
                      "px-3 py-2 rounded-xl bg-[#3F52FF] border border-[#3F52FF] text-white"
                    }
                    text={"Upgrade Plan"}
                  />
                  <CustomButton
                    className={
                      "px-3 py-2 rounded-xl text-[#3F52FF] border border-[#3F52FF] bg-white"
                    }
                    text={"Manage Plan"}
                  />
                </div>
              </div>
            </div>
          </ChartCard>
          <ChartCard
            className={
              "flex-1 w-full min-h-[250px] lg:w-1/2 flex flex-col justify-center"
            }
          >
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
        <div className="sss-billing-body">
          <BillingTable />
        </div>
        <div className="sss-billing-footer">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default BillingScreen;
