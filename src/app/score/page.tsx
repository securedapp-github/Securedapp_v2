import React from 'react';

const AuditScoreCalculator = ({ report }) => {
  // Weights for different issue types
  const WEIGHTS = {
    high: -20,      // Deduction for high severity issues
    medium: -10,    // Deduction for medium severity issues
    easy: -2        // Deduction for easy (low severity) issues
  };

  // Calculate the security score based on the audit report
  const calculateScore = () => {
    const baseScore = 100;

    // Destructure the vulnerability count from the report
    const { high, medium, easy } = report.vulnerabilityCount;

    // Calculate total deductions using floating-point arithmetic
    const deductions = 
      (high * WEIGHTS.high) + 
      (medium * WEIGHTS.medium) + 
      (easy * WEIGHTS.easy);

    // Calculate the final score and keep it as a float
    const finalScore = baseScore + deductions;

    // Ensure the score is between 0 and 100
    return Math.max(0, finalScore);  // Keep the exact float value
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Security Score: {calculateScore().toFixed(2)} / 100</h2> {/* Displaying the score with 2 decimal places */}

      <h3>Accurate Score (Float): {calculateScore()}</h3> {/* Displaying the full float value */}

      <h3>Analysis Report:</h3>
      <ul>
        <li>High Severity: {report.vulnerabilityCount.high}</li>
        <li>Medium Severity: {report.vulnerabilityCount.medium}</li>
        <li>Easy Severity: {report.vulnerabilityCount.easy}</li>
      </ul>

      <h3>Vulnerabilities:</h3>
      <ul>
        {report.vulnerabilities.map((vuln, index) => (
          <li key={index}>
            <strong>{vuln.type}</strong>: {vuln.reason}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Example usage of the component
const auditReport = {
  "vulnerabilityCount": {
    "high": 0,
    "medium": 2,
    "easy": 12
  },
  "vulnerabilities": [
    { "type": "medium", "reason": "Incorrect ERC20 function interface: transferFrom" },
    { "type": "medium", "reason": "Incorrect ERC20 function interface: transfer" },
    { "type": "easy", "reason": "Pragma version allows old versions" },
    { "type": "easy", "reason": "solc-0.7.0 is not recommended for deployment" },
    { "type": "easy", "reason": "Parameter not in mixedCase: transferFrom._value" },
    { "type": "easy", "reason": "Parameter not in mixedCase: transfer._to" },
    { "type": "easy", "reason": "Parameter not in mixedCase: transfer._value" },
    { "type": "easy", "reason": "Parameter not in mixedCase: withdraw._amount" },
    { "type": "easy", "reason": "Parameter not in mixedCase: transferFrom._to" },
    { "type": "easy", "reason": "Parameter not in mixedCase: transferFrom._from" },
    { "type": "easy", "reason": "Parameter not in mixedCase: mint._value" },
    { "type": "easy", "reason": "VulnerableToken.decimals should be constant" },
    { "type": "easy", "reason": "VulnerableToken.name should be constant" },
    { "type": "easy", "reason": "VulnerableToken.symbol should be constant" }
  ]
};

// Render the component
const App = () => (
  <AuditScoreCalculator report={auditReport} />
);

export default App;
