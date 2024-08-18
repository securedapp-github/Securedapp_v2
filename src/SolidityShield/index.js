import React from "react";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from "react";
import {
  generatePDF,
  formatDate,
  PurchasePlan,
  ScanSubmit,
  generateTable,
  getScanHistory,
  downloadReport,
} from "./functions";
import SolidityShield0 from "./product";
import AuthScreen from "./pages/auth/AuthScreen";
import LoginScreen from "./pages/auth/LoginScreen";
import ContactUs from "./pages/contactUs/ContactUs";
import OverviewScreen from "./pages/overview/Overview";
import { Provider } from "react-redux";
import { solidityShieldScanStore } from "./redux/store";

const SolidityShield = () => {
  return (
    <Provider store={solidityShieldScanStore}>
      <div>
        <Routes>
          <Route path="/" element={<div>Solidity Shield Scan</div>} />
          <Route path="overview" element={<OverviewScreen />} />
          <Route path="auth" element={<AuthScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default SolidityShield;
