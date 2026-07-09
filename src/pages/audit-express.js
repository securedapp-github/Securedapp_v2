import React from 'react'
import Home from '../AuditExpress/pages/Home';
import MetaTags from '../components/common/MetaTags';

const home = () => {
  return (
    <div>
      <MetaTags
        data={{
          title: "SecureDApp Audit Express — Automated Smart Contract Scanning | SecureDApp",
          desc: "Audit Express by SecureDApp instantly scans and audits smart contracts for vulnerabilities. Get free automated blockchain security reports.",
          keywords: "audit express, smart contract scanning, automated audit, blockchain security, solidity audit, SecureDApp",
          url: "https://securedapp.io/audit-express",
        }}
      />
      <Home/>
    </div>
  )
}

export default home;