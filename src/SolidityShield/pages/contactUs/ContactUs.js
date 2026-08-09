import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthButton from "../../components/auth/AuthButton";
import Footer from "../../../components/footer/footer";
import Navbar from "../../../components/navbar/Navbar";
import { sendTicketToCRM } from "../../../utils/crmTicketService";
import { ShieldCheck, Zap, Mail } from "lucide-react";

export const AuthInputFieldContainer = ({ label, InputField, htmlFor }) => {
  return (
    <div className="auth-input-field-div">
      <label htmlFor={htmlFor} className="auth-input-field-div-label">{label}</label>
      {InputField}
    </div>
  );
};

const ContactUs = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const sendMail = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      number.trim().length === 0 ||
      message.trim().length < 3
    ) {
      toast.error("Please fill in all details");
      return;
    } else if (
      document.getElementById("contactus-check-privacy")?.checked === false
    ) {
      toast.info("Please accept our privacy policy to continue");
      return;
    }

    setSubmitting(true);
    try {
      const shortTitle = message.trim()
        ? (message.trim().slice(0, 55) + (message.trim().length > 55 ? '...' : ''))
        : `Inquiry from ${name}`;

      await sendTicketToCRM({
        title: shortTitle,
        description: message,
        name: name,
        email: email,
        phone: number,
        category: 'Other',
        priority: 'Medium',
        metadata: {
          page: 'Main Website Contact Page'
        }
      });
      toast.success("Message received! Our security team will reach out shortly.");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting contact form:", err);
      toast.error("Error sending message. Please try again or email support@securedapp.io");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cardBackgroundLight dark:bg-cardBackgroundDark flex flex-col justify-between transition-colors duration-300">
      <Navbar />
      <main className="contact-us-container flex-1">
        {/* Ambient Glowing Web3 Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#12D576]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="contact-us">
          <header className="contact-us-header">
            <span className="contact-us-header-label">Contact Us</span>
            <h1 className="contact-us-header-title">Get in Touch</h1>
            <p className="contact-us-header-description">
              Have questions about smart contract audits, security tooling, or custom enterprise solutions? We'd love to help.
            </p>
          </header>

          {/* Trust Badges */}
          <div className="contact-us-trust-grid" role="region" aria-label="Support Highlights">
            <div className="contact-us-trust-card">
              <div className="contact-us-trust-icon">
                <ShieldCheck className="w-5 h-5 text-[#12D576]" />
              </div>
              <span className="contact-us-trust-title">Security Audits</span>
              <span className="contact-us-trust-subtitle">Dedicated Engineer Review</span>
            </div>
            <div className="contact-us-trust-card">
              <div className="contact-us-trust-icon">
                <Zap className="w-5 h-5 text-[#12D576]" />
              </div>
              <span className="contact-us-trust-title">Rapid Response</span>
              <span className="contact-us-trust-subtitle">Direct Ticket Ingestion</span>
            </div>
            <div className="contact-us-trust-card">
              <div className="contact-us-trust-icon">
                <Mail className="w-5 h-5 text-[#12D576]" />
              </div>
              <span className="contact-us-trust-title">Web3 Support</span>
              <span className="contact-us-trust-subtitle">24/7 Security Desk</span>
            </div>
          </div>

          <form onSubmit={sendMail} className="contact-us-body" aria-label="Contact Form">
            <div className="contact-us-body-name">
              <AuthInputFieldContainer
                label="Full Name"
                htmlFor="contact-full-name"
                InputField={
                  <AuthInputField
                    id="contact-full-name"
                    authInputType="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={setName}
                    required
                  />
                }
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="contact-us-body-email">
                <AuthInputFieldContainer
                  label="Email Address"
                  htmlFor="contact-email"
                  InputField={
                    <AuthInputField
                      id="contact-email"
                      authInputType="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={setEmail}
                      required
                    />
                  }
                />
              </div>
              <div className="contact-us-body-number">
                <AuthInputFieldContainer
                  label="Phone Number"
                  htmlFor="contact-phone"
                  InputField={
                    <AuthInputField
                      id="contact-phone"
                      authInputType="tel"
                      placeholder="+1 (555) 000-0000"
                      value={number}
                      onChange={setNumber}
                      required
                    />
                  }
                />
              </div>
            </div>

            <div className="contact-us-body-message">
              <label htmlFor="contact-message" className="auth-input-field-div-label">Message</label>
              <textarea
                id="contact-message"
                value={message}
                placeholder="Tell us about your project or security inquiries..."
                onChange={(e) => setMessage(e.target.value)}
                className="contact-us-body-message-textarea"
                rows={4}
                required
              />
            </div>

            <div className="contact-us-body-privacy">
              <input 
                id="contactus-check-privacy" 
                type="checkbox" 
                defaultChecked 
                className="rounded border-slate-300 dark:border-slate-700 text-[#12D576] focus:ring-[#12D576] accent-[#12D576] cursor-pointer w-4 h-4"
              />
              <label htmlFor="contactus-check-privacy" className="contact-us-body-privacy-message cursor-pointer">
                You agree to our friendly
                <Link
                  href="https://securedapp.gitbook.io/securedapp-launchpad/privacy-policy-securedapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-us-body-privacy-link"
                >
                  privacy policy
                </Link>
              </label>
            </div>

            <div className="contact-us-body-button">
              <AuthButton onClick={sendMail} filled={true} disabled={submitting}>
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </span>
                ) : (
                  "Send Message"
                )}
              </AuthButton>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
