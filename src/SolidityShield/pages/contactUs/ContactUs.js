import { Link } from "react-router-dom";
import AuthInputField from "../../components/auth/AuthInputField";
import "./ContactUs.css";
import AuthButton from "../../components/auth/AuthButton";

export const AuthInputFieldContainer = ({ label, InputField }) => {
  return (
    <div className="auth-input-field-div">
      <div className="auth-input-field-div-label">{label}</div>
      {InputField}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us">
        <div className="contact-us-header">
          <div className="contact-us-header-label">Contact Us</div>
          <div className="contact-us-header-title">Get in Touch</div>
          <div className="contact-us-header-description">
            We'd love to hear from you. Please fill out this form.
          </div>
        </div>
        <div className="contact-us-body">
          <div className="contact-us-body-name">
            <AuthInputFieldContainer
              label={"First Name"}
              InputField={
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"First Name"}
                />
              }
            />
            <AuthInputFieldContainer
              label={"Last Name"}
              InputField={
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"Last Name"}
                />
              }
            />
          </div>
          <div className="contact-us-body-email">
            <AuthInputFieldContainer
              label={"Email"}
              InputField={
                <AuthInputField
                  authInputType={"email"}
                  placeholder={"you@company.com"}
                />
              }
            />
          </div>
          <div className="contact-us-body-number">
            <AuthInputFieldContainer
              label={"Phone number"}
              InputField={
                <AuthInputField
                  authInputType={"text"}
                  placeholder={"+1 (555) 000-0000"}
                />
              }
            />
          </div>
          <div className="contact-us-body-message">
            <div className="auth-input-field-div-label">{"Message"}</div>
            <textarea className="contact-us-body-message-textarea" />
          </div>
          <div className="contact-us-body-privacy">
            <input type="checkbox" />
            <div className="contact-us-body-privacy-message">
              You agree to our friendly
              <Link className="contact-us-body-privacy-link">
                privacy policy
              </Link>
            </div>
          </div>
          <div className="contact-us-body-button">
            <AuthButton filled={true}>Send Message</AuthButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
