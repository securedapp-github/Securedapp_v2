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
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const COUNTRY_CODES = [
    { code: "+91", country: "India" },
    { code: "+1", country: "United States / Canada" },
    { code: "+44", country: "United Kingdom" },
    { code: "+971", country: "UAE" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+81", country: "Japan" },
    { code: "+65", country: "Singapore" },
    { code: "+86", country: "China" },
    { code: "+7", country: "Russia" },
    { code: "+92", country: "Pakistan" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+880", country: "Bangladesh" },
    { code: "+977", country: "Nepal" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+82", country: "South Korea" },
    { code: "+39", country: "Italy" },
    { code: "+34", country: "Spain" },
    { code: "+55", country: "Brazil" },
    { code: "+52", country: "Mexico" },
    { code: "+27", country: "South Africa" },
    { code: "+63", country: "Philippines" },
    { code: "+62", country: "Indonesia" },
    { code: "+60", country: "Malaysia" },
    { code: "+64", country: "New Zealand" },
    { code: "+31", country: "Netherlands" },
    { code: "+32", country: "Belgium" },
    { code: "+41", country: "Switzerland" },
    { code: "+46", country: "Sweden" },
    { code: "+47", country: "Norway" },
    { code: "+48", country: "Poland" },
    { code: "+43", country: "Austria" },
    { code: "+351", country: "Portugal" },
    { code: "+372", country: "Estonia" },
    { code: "+36", country: "Hungary" },
    { code: "+380", country: "Ukraine" },
    { code: "+20", country: "Egypt" },
    { code: "+254", country: "Kenya" },
    { code: "+234", country: "Nigeria" },
    { code: "+57", country: "Colombia" },
    { code: "+56", country: "Chile" },
    { code: "+54", country: "Argentina" },
    { code: "+90", country: "Turkey" },
    { code: "+972", country: "Israel" },
    { code: "+853", country: "Macau" },
    { code: "+852", country: "Hong Kong" },
    { code: "+886", country: "Taiwan" }
  ];

  const SERVICE_GROUPS = [
    {
      label: "Products",
      options: [
        "SolidityShield",
        "SecureCMS",
        "SecureTrace",
        "PQCSuite",
        "SecureX-DID",
        "SecureWatch",
        "AuditExpress",
        "SecurePad",
        "SecureX-ID",
        "QuantumVault"
      ]
    },
    {
      label: "Services",
      options: [
        "Smart Contract Audit",
        "Dapp Security Audit",
        "Token Audit",
        "RWA Audit",
        "Web3 Security",
        "Blockchain Forensic",
        "Crypto Compliance & AML",
        "Decentralized Identity (DID)",
        "DApp Development",
        "NFT Development",
        "DeFi Development",
        "SOX Compliance",
        "ITGC Compliance",
        "LevelUp Academy"
      ]
    },
    {
      label: "General",
      options: ["General Inquiry"]
    }
  ];

  const sendMail = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      number.trim().length === 0 ||
      service.trim().length === 0 ||
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
        phone: `${countryCode} ${number}`.trim(),
        category: 'Support',
        priority: 'Medium',
        metadata: {
          page: 'Securedapp Support & Help Desk',
          serviceOfInterest: service
        }
      });
      toast.success("Support ticket submitted! Our 24/7 security desk will respond shortly.");
      setName("");
      setEmail("");
      setNumber("");
      setService("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting support ticket:", err);
      toast.error("Error submitting ticket. Please try again or email support@securedapp.io");
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
            <span className="contact-us-header-label">24/7 Security Support Desk</span>
            <h1 className="contact-us-header-title">Get Support & Submit Tickets</h1>
            <p className="contact-us-header-description">
              Need assistance with smart contract audits, security scans, or account inquiries? Submit a ticket directly to our 24/7 security support desk.
            </p>
          </header>

          {/* Trust Badges */}
          <div className="contact-us-trust-grid" role="region" aria-label="Support Desk Highlights">
            <div className="contact-us-trust-card">
              <div className="contact-us-trust-icon">
                <ShieldCheck className="w-5 h-5 text-[#12D576]" />
              </div>
              <span className="contact-us-trust-title">Engineer Support</span>
              <span className="contact-us-trust-subtitle">Direct Technical Assistance</span>
            </div>
            <div className="contact-us-trust-card">
              <div className="contact-us-trust-icon">
                <Zap className="w-5 h-5 text-[#12D576]" />
              </div>
              <span className="contact-us-trust-title">Rapid Response</span>
              <span className="contact-us-trust-subtitle">24/7 Ticket Ingestion</span>
            </div>
            <div className="contact-us-trust-card">
              <div className="contact-us-trust-icon">
                <Mail className="w-5 h-5 text-[#12D576]" />
              </div>
              <span className="contact-us-trust-title">Enterprise SLA</span>
              <span className="contact-us-trust-subtitle">Priority Incident Desk</span>
            </div>
          </div>

          <form onSubmit={sendMail} className="contact-us-body" aria-label="Support Ticket Form">
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
                    <div className="contact-us-body-number-field">
                      <select
                        id="contact-country-code"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="contact-us-body-country-select"
                        aria-label="Country code"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={`${c.code}-${c.country}`} value={c.code}>
                            {c.code} {c.country}
                          </option>
                        ))}
                      </select>
                      <AuthInputField
                        id="contact-phone"
                        authInputType="tel"
                        placeholder="98765 43210"
                        value={number}
                        onChange={setNumber}
                        required
                      />
                    </div>
                  }
                />
              </div>
            </div>

            <div className="contact-us-body-service">
              <label htmlFor="contact-service" className="auth-input-field-div-label">
                Service of Interest <span className="text-[#12D576]">*</span>
              </label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="contact-us-body-service-select"
                required
              >
                <option value="">Select a service...</option>
                {SERVICE_GROUPS.map((group) => (
                  <optgroup key={group.label} label={group.label}>
                    {group.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
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
                    Submitting Ticket...
                  </span>
                ) : (
                  "Submit Ticket"
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
