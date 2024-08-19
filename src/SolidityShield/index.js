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
  const [contract, setContract] = useState();
  const reader = new FileReader();
  reader.onload = (event) => {
    setContract(event.target.result);
  };

  return (
    <div style={{ background: "black", color: "white" }}>
      <h1>Solidity Shield Scan</h1>
      <br />
      <p>scan here</p>
      <input
        type="file"
        onChange={async (e) => {
          await ScanSubmit({
            rcredit: 1,
            email: "santhoshreddy.hello@gmail.com",
            companyName: "WeBuidl",
            inputTypes: "file",
            file: e.target.files[0],
          });
          console.log(contract);
        }}
        accept=".sol"
      />
      <SolidityShield0 />
    </div>
  );
}

export default SolidityShield;
