import { useSelector } from "react-redux";
import {
  getPaymentSelector,
  setPaymentModal,
} from "../../redux/dashboard/paymentSlice";
import { useDispatch } from "react-redux";
import "./PaymentModal.css";
import { useState } from "react";
import CustomButton from "../common/CustomButton";

const PaymentModal = () => {
  const { paymentModal } = useSelector(getPaymentSelector);
  const dispatch = useDispatch();
  const [phase, setPhase] = useState(0);

  const closeModal = () => {
    dispatch(setPaymentModal(false));
  };

  const nextPhase = () => {
    setPhase(phase + 1);
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
            {phase === 0 && (
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
                        "w-[200px] bg-tertiary border rounded-xl border-tertiary py-3"
                      }
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
                      onClick={nextPhase}
                      text={"Pay Now"}
                      className={
                        "w-[200px] bg-tertiary border rounded-xl border-tertiary py-3"
                      }
                    />
                  </div>
                </div>
              </div>
            )}
            {phase === 1 && (
              <div className="sss-payment-modal-body-crypto-container">
                <div className="sss-payment-modal-body-crypto-qr">
                  <img
                    src="/assets/images/solidity-shield-scan/crypto-qr.svg"
                    alt=""
                  />
                </div>
                <div className="sss-payment-modal-body-cyrpto-details">
                  <div className="">Chain: Ethereum</div>
                  <div className="">
                    Address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
                  </div>
                  <div className="">USDT: 40</div>
                </div>
                <div className="sss-payment-modal-fotter">
                  <div className="sss-payment-modal-footer-button">
                    <CustomButton
                      onClick={closeModal}
                      text={"Cancel"}
                      className={
                        "w-[120px] py-3 px-2 rounded-xl border border-tertiary"
                      }
                    />
                  </div>
                  <div className="sss-payment-modal-footer-button">
                    <CustomButton
                      text={"Verify"}
                      className={
                        "w-[120px] border border-tertiary py-3 px-2 rounded-xl  bg-tertiary"
                      }
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
