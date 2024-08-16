import { useState } from "react";
import "./RequestQuoteModal.css";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  getHomeSelector,
  setIsRequestModalOpen,
} from "../../redux/slices/main/homeSlice";

const RequestQuoteModal = () => {
  const dispatch = useDispatch();
  const { isRequestModalOpen } = useSelector(getHomeSelector);

  const [fullName, setFullName] = useState("");
  const [fullNameWarning, setFullNameWarning] = useState("");

  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberWarning, setMobileNumberWarning] = useState("");

  const [selectedService, setSelectedService] = useState("");

  const [email, setEmail] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const onFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    if (value.length === 0) {
      setFullNameWarning("* Compulsory Field");
    } else {
      setFullNameWarning("");
    }
  };

  const onMobileNumberChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    if (value.length === 0) {
      setMobileNumberWarning("* Compulsory Field");
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberWarning("Invalid Mobile Number");
    } else {
      setMobileNumberWarning("");
    }
  };

  const handleSelectedService = (e) => {
    setSelectedService(e.target.value);
  };

  const onEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length === 0) {
      setEmailWarning("* Compulsory Field");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setEmailWarning("Invalid Email");
    } else {
      setEmailWarning("");
    }
  };

  const closeModal = () => {
    dispatch(setIsRequestModalOpen(false));
  };

  if (!isRequestModalOpen) return null;

  return (
    isRequestModalOpen && (
      <div className="request-quote-modal-container">
        <div className="request-quote-modal">
          <div className="request-quote-modal-close-container">
            <i
              onClick={closeModal}
              className="fa-solid fa-xmark fa-xl request-modal-close-button"
            />
          </div>
          <div className="requeset-quote-modal-header">
            Tell us about your Projects
          </div>
          <div className="request-quote-modal-body">
            <div className="request-quote-modal-input-container">
              <input
                value={fullName}
                onChange={onFullNameChange}
                className="request-quote-modal-input-box"
                placeholder="Full Name"
                type="text"
              />
              <div className="requeste-quote-modal-input-warning">
                {fullNameWarning}
              </div>
            </div>
            <div className="request-quote-modal-input-container">
              <input
                value={mobileNumber}
                onChange={onMobileNumberChange}
                className="request-quote-modal-input-box"
                placeholder="Mobile Number"
                type="text"
              />
              <div className="requeste-quote-modal-input-warning">
                {mobileNumberWarning}
              </div>
            </div>
            <div className="request-quote-modal-dropdown-container">
              <select
                value={selectedService}
                onChange={handleSelectedService}
                className="request-quote-modal-dropdown">
                <option value={""}>Choose a Service...</option>
                <option value={"Smart Contract Audit"}>
                  Smart Contract Audit
                </option>
                <option value={"Smart Contract Development"}>
                  Smart Contract Development
                </option>
                <option value={"DAPP Development"}>DAPP Development</option>
                <option value={"Tokenomics Consultation"}>
                  Tokenomics Consultation
                </option>
              </select>
            </div>
            <div className="request-quote-modal-input-container">
              <input
                value={email}
                onChange={onEmailChange}
                className="request-quote-modal-input-box"
                placeholder="Email"
                type="email"
              />
              <div className="requeste-quote-modal-input-warning">
                {emailWarning}
              </div>
            </div>
            <div className="request-quote-modal-textarea-container">
              <textarea className="request-quote-modal-textarea"></textarea>
            </div>
            <div className="request-quote-modal-checkbox-container">
              <input type="checkbox" />
              <div>
                I agree with the{" "}
                <a
                  className="text-[#A4CDFF] font-bold"
                  target="_blank"
                  href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                  rel="noreferrer">
                  Privacy Policy
                </a>{" "}
                and information being used to contact me
              </div>
            </div>
            <div className="request-quote-modal-checkbox-container">
              <input type="checkbox" />
              <div>Get cyber-security research reports .</div>
            </div>
          </div>
          <div className="request-quote-modal-button-container">
            <Button className="w-1/4" text={"Submit"} />
          </div>
        </div>
      </div>
    )
  );
};

export default RequestQuoteModal;
