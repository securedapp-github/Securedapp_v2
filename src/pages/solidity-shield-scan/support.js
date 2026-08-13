import ContactUs from "../../SolidityShield/pages/contactUs/ContactUs";
import MetaTags from "../../components/common/MetaTags";

export default function SolidityShieldSupport() {
  return (
    <>
      <MetaTags
        data={{
          title: "Solidity Shield Support Desk | SecureDApp",
          desc: "Submit security support tickets, inquire about vulnerability scans, and get direct assistance from SecureDApp security engineers.",
          keywords: "Solidity Shield support, smart contract audit ticket, Web3 security desk",
        }}
      />
      <ContactUs />
    </>
  );
}
