import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
import {
  getPaymentSelector,
  setPaymentModal,
} from "../../redux/dashboard/paymentSlice";
import { useDispatch } from "react-redux";
import "./PaymentModal.css";
import { useState } from "react";
import CustomButton from "../common/CustomButton";
import { payPhonpe, payCrypto, payCryptoVerify } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const PaymentModal = () => {
  const { paymentModal, selectedPlan } = useSelector(getPaymentSelector);
  const auth = useSelector(getUserData);
  const dispatch = useDispatch();
  const [phase, setPhase] = useState(1);
  const [web3PayDetails, setWeb3PayDetails] = useState();

  const closeModal = () => {
    setPhase(1);
    dispatch(setPaymentModal(false));
  };

  const nextPhase = () => {
    setPhase(2);
  };

  return (
    paymentModal && (
      <div className="sss-payment-modal-container">
        <div className="sss-payment-modal">
          <div className="sss-payment-modal-header">
            <div className="sss-payment-modal-header-title">Payment</div>
            <div className="sss-payment-modal-close-container">
              <i
                onClick={closeModal}
                className="fa-solid fa-xmark fa-xl cursor-pointer"
              />
            </div>
          </div>
          <div className="sss-payment-modal-body">
            {phase === 1 && (
              <div className="sss-payment-modal-body-methods">
                <div className="sss-payment-modal-body-method">
                  <div className="sss-payment-modal-body-method-image">
                    <img
                      src="/assets/images/solidity-shield-scan/phonepe-icon.svg"
                      alt=""
                    />
                  </div>
                  <div className="sss-payment-modal-body-method-button">
                    <CustomButton
                      text={"Pay Now"}
                      className={
                        "w-[200px] bg-tertiary border rounded-xl border-tertiary py-3 active:bg-white"
                      }
                      onClick={() => {
                        payPhonpe({
                          planid: selectedPlan,
                          email: auth.user.email,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="sss-payment-modal-body-method">
                  <div className="sss-payment-modal-body-method-image">
                    <img
                      src="/assets/images/solidity-shield-scan/crypto-icon.png"
                      alt=""
                    />
                  </div>
                  <div className="sss-payment-modal-body-method-button">
                    <CustomButton
                      onClick={async () => {
                        var pay = await payCrypto({
                          planid: selectedPlan,
                          email: auth.user.email,
                        });
                        console.log(pay);
                        setWeb3PayDetails(pay);
                        pay && nextPhase();
                      }}
                      text={"Pay Now"}
                      className={
                        "w-[200px] bg-tertiary border rounded-xl border-tertiary py-3 active:bg-white"
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {phase === 2 && web3PayDetails.network && (
              <div className="sss-payment-modal-body-crypto-container">
                <div className="sss-payment-modal-body-crypto-qr">
                  {web3PayDetails && (
                    <QRCode value={web3PayDetails.pay_address} />
                  )}
                </div>
                <div className="sss-payment-modal-body-cyrpto-details">
                  <div className="">{`Chain : ${web3PayDetails.network.toUpperCase()}`}</div>
                  <div className="">
                    {`Address : ${web3PayDetails.pay_address}   `}
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(
                          web3PayDetails.pay_address
                        );
                        toast("Wallet Address copied to clipboard");
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} />
                    </div>
                  </div>
                  <div className="">{`${
                    web3PayDetails.pay_amount
                  } ${web3PayDetails.pay_currency.toUpperCase()} `}</div>
                </div>
                <div className="sss-payment-modal-fotter">
                  <div className="sss-payment-modal-footer-button">
                    <CustomButton
                      onClick={closeModal}
                      text={"Cancel"}
                      className={
                        "w-[120px] py-3 px-2 rounded-xl border border-tertiary active:bg-tertiary"
                      }
                    />
                  </div>
                  <div className="sss-payment-modal-footer-button">
                    <CustomButton
                      text={"Verify"}
                      className={
                        "w-[120px] border border-tertiary py-3 px-2 rounded-xl bg-tertiary active:bg-white"
                      }
                      onClick={() => {
                        payCryptoVerify({
                          id: web3PayDetails.payment_id,
                          transactionId: web3PayDetails.newTransactionId,
                          amount: web3PayDetails.payAmount,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default PaymentModal;
