import ContactUs from "../SolidityShield/pages/contactUs/ContactUs";
import MetaTags from "../components/common/MetaTags";

export default function Contact() {
  return (
    <>
      <MetaTags
        data={{
          title: "Contact Us: Leading Blockchain and Web3 Security | SecureDApp",
          desc: "Get in touch with SecureDApp team for blockchain security audits, smart contract audits, and customer support.",
          keywords: "Contact SecureDApp, Web3 security support, smart contract audit contact",
        }}
      />
      <ContactUs />
    </>
  );
}
