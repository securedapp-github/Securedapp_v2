// utils/calculateSecurityScore.ts

export type Vulnerability = {
    type: string;
    reason: string;
  };
  
  export type VulnerabilityCount = {
    high: number;
    medium: number;
    easy: number;
  };
  
  export type AuditReport = {
    vulnerabilityCount: VulnerabilityCount;
    vulnerabilities: Vulnerability[];
  };
  
  export const calculateSecurityScore = (report: AuditReport): number => {
    // Updated weights with floating-point values for more precise deductions
    const WEIGHTS: { [key: string]: number } = {
      high: -10.5,   // Deduction for high severity issues
      medium: -7.3,  // Deduction for medium severity issues
      easy: -2.1     // Deduction for easy (low severity) issues
    };
  
    const baseScore = 100;
  
    const { high, medium, easy } = report.vulnerabilityCount;
  
    // Calculate total deductions with float precision
    const deductions = (high * WEIGHTS.high) + (medium * WEIGHTS.medium) + (easy * WEIGHTS.easy);
  
    const finalScore = baseScore + deductions;
  
    // Ensure the score is between 0 and 100, retaining float precision
    return Math.max(0, Math.min(100, finalScore));
  };
  