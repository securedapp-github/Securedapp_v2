import ContactUs from "../SolidityShield/pages/contactUs/ContactUs";
import MetaTags from "../components/common/MetaTags";

export default function Support() {
  return (
    <>
      <MetaTags
        data={{
          title: "24/7 Security Support & Help Desk | SecureDApp",
          desc: "Get 24/7 technical support, submit audit tickets, and reach our dedicated Web3 security engineering team at SecureDApp.",
          keywords: "Web3 security support, smart contract audit support, help desk, submit ticket, SecureDApp support",
        }}
      />
      <ContactUs />
    </>
  );
}
