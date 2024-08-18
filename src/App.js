import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/HomePage";
import { useEffect } from "react";
import Product from "./pages/product/Product";
import SolidityShieldPage from "./pages/product/SolidityShield/SolidityShieldPage";
import SecureWatchPage from "./pages/product/SecureWatch/SecureWatchPage";
import SecureTracePage from "./pages/product/SecureTrace/SecureTracePage";
import SecurePadPage from "./pages/product/SecurePad/SecurePadPage";
import Service from "./pages/service/Service";
import DappDevelopment from "./pages/service/DappDevelopment/DappDevelopment";
import SmartContractAudit from "./pages/service/SmartContractAudit/SmartContractAudit";
import DappSecurityAudit from "./pages/service/DappSecurityAudit/DappSecurityAudit";
import TokenAudit from "./pages/service/TokenAudit/TokenAudit";
import Web3KYC from "./pages/service/Web3KYC/Web3KYC";
import Web3Security from "./pages/service/Web3Security/Web3Security";
import BlockchainForensic from "./pages/service/BlockchainForensic/BlockchainForensic";
import RwaAudit from "./pages/service/RwaAudit/RwaAudit";
import CryptoComplianceAml from "./pages/service/CryptoCompAml/CryptoCompAml";
import DecentralizedIdentity from "./pages/service/DecentralizedIdentity/DecentralizedIdentity";
import NftsDvelopment from "./pages/service/NftsDevelopment/NftsDevelopment";
import DefiDevelopment from "./pages/service/DefiDevelopment/DefiDevelopment";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogpost/BlogPost";
import AboutUs from "./pages/aboutUs/AboutUs";
import RequestQuoteModal from "./components/modal/RequestQuoteModal";
import SolidityShield from "./SolidityShield/index";
import { useDispatch } from "react-redux";
import {
  getHomeSelector,
  setIsLargeScreen,
} from "./redux/slices/main/homeSlice";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const dispatch = useDispatch();
  const { isRequestModalOpen } = useSelector(getHomeSelector);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsLargeScreen(window.innerWidth >= 1024));
    };
    handleResize();
    AOS.init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App bg-primary dark:bg-secondary">
      <Router>
        {isRequestModalOpen && <RequestQuoteModal />}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="solidity-shield" element={<SolidityShieldPage />} />
          <Route path="secure-watch" element={<SecureWatchPage />} />
          <Route path="secure-trace" element={<SecureTracePage />} />
          <Route path="secure-pad" element={<SecurePadPage />} />
          <Route path="service" element={<Service />} />
          <Route path="dapp-development" element={<DappDevelopment />} />
          <Route path="smart-contract-audit" element={<SmartContractAudit />} />
          <Route path="dapp-security-audit" element={<DappSecurityAudit />} />
          <Route path="token-audit" element={<TokenAudit />} />
          <Route path="web3-kyc" element={<Web3KYC />} />
          <Route path="web3-security" element={<Web3Security />} />
          <Route path="blockchain-forensic" element={<BlockchainForensic />} />
          <Route path="rwa-audit" element={<RwaAudit />} />
          <Route
            path="crypto-compliance-aml"
            element={<CryptoComplianceAml />}
          />
          <Route
            path="decentralized-identity-did"
            element={<DecentralizedIdentity />}
          />
          <Route path="nfts-development" element={<NftsDvelopment />} />
          <Route path="defi-development" element={<DefiDevelopment />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:url" element={<BlogPost />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="solidity-shield-scan" element={<SolidityShield />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
