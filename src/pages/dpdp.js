import dynamic from "next/dynamic";
import MetaTags from "../components/common/MetaTags";

const SecureCMSMockupApp = dynamic(
  () => import("../pageComponents/dpdp/SecureCMSMockupApp").then((mod) => mod.SecureCMSMockupApp),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center text-slate-400 font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium tracking-wide">Loading SecureCms DPDP Platform...</p>
        </div>
      </div>
    ),
  }
);

export default function DPDPPage() {
  return (
    <div className="dpdp-page-wrapper">
      <MetaTags
        data={{
          title: "SecureCms: DPDP Act 2023 Compliance & Consent Management Platform | SecuredApp",
          desc: "Avoid the ₹250 crore DPDP penalty. SecureCms delivers 1-click multi-language consent banners, tamper-proof audit trails, and automated DSAR workflows built for India.",
          keywords:
            "DPDP Act compliance, DPDP Act 2023 India, SecureCms, consent management platform, cookie consent India, data privacy compliance, DSAR automation, data fiduciary, SecuredApp",
          image: "/assets/dpdp/logo.png",
        }}
      />
      <SecureCMSMockupApp />
    </div>
  );
}
