import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthScreen from "./pages/auth/AuthScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import ContactUs from "./pages/contactUs/ContactUs";
import OverviewScreen from "./pages/overview/Overview";
import { Provider } from "react-redux";
import { solidityShieldScanStore } from "./redux/store";
import "./index.css";
import { MainLayout, NoSidebarLayout } from "./components/sidebar/Layout";
import ScanHistory from "./pages/history/ScanHistory";
import BillingScreen from "./pages/billing/Billing";
import Pricing from "./pages/pricing/Pricing";
import ScanNowModal from "./components/modal/ScanNowModal";
import PaymentModal from "./components/modal/PaymentModal";
import VulnerabilityScan from "./pages/vulnerabilityScan/VulnerabilityScan";
import ScanReport from "./pages/scanReport/ScanReport";
import { ToastContainer } from "react-toastify";
import SolidityShield0 from "./product";

const SolidityShield = () => {
  return (
    <Provider store={solidityShieldScanStore}>
      <div>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          theme="dark"
          pauseOnHover
        />
        <ScanNowModal />
        <PaymentModal />
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ backgroundColor: "black" }}>
                Solidity Shield Scan
                <SolidityShield0 />
              </div>
            }
          />
          <Route element={<MainLayout />}>
            <Route path="overview" element={<OverviewScreen />} />
            <Route path="history" element={<ScanHistory />} />
            <Route path="vulnerability-scans" element={<VulnerabilityScan />} />
            <Route path="report/:id" element={<ScanReport />} />
            <Route path="payment" element={<BillingScreen />} />
          </Route>
          <Route element={<NoSidebarLayout />}>
            <Route path="pricing" element={<Pricing />} />
            <Route path="auth" element={<AuthScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
};

export default SolidityShield;
