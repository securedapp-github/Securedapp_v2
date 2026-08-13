import ContactUs from "../SolidityShield/pages/contactUs/ContactUs";
import MetaTags from "../components/common/MetaTags";

export default function Contact() {
  return (
    <>
      <MetaTags
        data={{
          title: "Support Desk & Inquiries | SecureDApp",
          desc: "Need assistance with smart contract audits, security scans, or account inquiries? Submit a ticket to our 24/7 security support desk.",
          keywords: "Contact SecureDApp, Web3 security support, smart contract audit contact, support desk",
        }}
      />
      <ContactUs />
    </>
  );
}
