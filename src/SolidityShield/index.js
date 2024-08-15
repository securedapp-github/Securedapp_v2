import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
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

function SolidityShield() {
  return (
    <div>
      <h1>Solidity Shield Scan</h1>
    </div>
  );
}

export default SolidityShield;
