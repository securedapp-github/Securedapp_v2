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
            <Route path="payment" element={<BillingScreen />} />
          </Route>
          <Route element={<NoSidebarLayout />}>
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
