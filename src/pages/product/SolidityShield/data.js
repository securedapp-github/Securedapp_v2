import {
  faEnvelope,
  faMouse,
  faPlaneDeparture,
  faSliders,
  faVideo,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";

export const faqsData = [
  [
    {
      q: "What Kind of smart contracts can be audited by Solidity Shield?",
      a: "Solidity Shield audits multiple smart contracts on Ethereum and compatible blockchains, such as DeFi protocols, NFT platforms, and token contracts.",
    },
    {
      q: "How long does it typically take to receive an audit report?",
      a: "Reports are usually available within a few days to a week.",
    },
    {
      q: "How do I get started with Solidity Shield’s audit services?",
      a: "Upload your smart contract code through the Solidity Shield platform to begin the audit process, and follow the prompts to initiate it.",
    },
    {
      q: "Does Solidity Shield provide guidance for fixing identified vulnerabilities?",
      a: "Yes, detailed reports with actionable recommendations are provided.",
    },
    {
      q: "How can Solidity Shield help businesses protect their smart contract investments?",
      a: "It identifies vulnerabilities, ensures best practices, and offers guidance to safeguard investments.",
    },
  ],
];

export const features = [
  {
    icon: faEnvelope,
    iconBackgroundColor: "#CABDFF",
    header: "Provide Security",
    description:
      "Ensure your smart contract security audit by identifying, evaluating, and fixing vulnerabilities, reducing the risk of bugs and unauthorized access.",
  },
  {
    icon: faMouse,
    iconBackgroundColor: "#B5E4CA",
    header: "Ensure Regulatory Requirements",
    description:
      "Guarantee that your smart contracts align with regulatory requirements and implement business logic correctly.",
  },
  {
    icon: faVideo,
    iconBackgroundColor: "#FFBC99",
    header: "Maintain Integrity",
    description:
      "Address coding errors, business logic flaws, and unforeseen issues early on, maintaining the integrity of your smart contract.",
  },
  {
    icon: faSliders,
    iconBackgroundColor: "#FFD88D",
    header: "Build Reputation and Trust",
    description:
      "Benefit from high-quality and transparent audit services, boosting the reputation and trustworthiness of your smart contract",
  },
  {
    icon: faVoicemail,
    iconBackgroundColor: "#CABDFF",
    header: "Suggest Security Improvements",
    description:
      "Achieve compliance with security standards and coding benchmarks and discover areas for performance or security improvements.",
  },
  {
    icon: faPlaneDeparture,
    iconBackgroundColor: "#B1E5FC",
    header: "Improve User Experience",
    description:
      "A secure and well-functioning smart contract provides a better user experience, encouraging wider adoption and usage of the decentralized application (DApp)",
  },
];

export const howItWorksData = [
  {
    image: "/assets/images/product-1-how-it-works-1.svg",
    imageAlt: "",
    header: "",
    description:
      "Analyzes gas usage to identify optimization opportunities and reduce transaction costs.",
  },
  {
    image: "/assets/images/product-1-how-it-works-2.svg",
    imageAlt: "",
    header: "",
    description:
      "Ensures ERC standard compatibility for smooth integration within the Ethereum ecosystem.",
  },
  {
    image: "/assets/images/product-1-how-it-works-3.svg",
    imageAlt: "",
    header: "",
    description:
      "Simplifies development workflows with a user-friendly interface and detailed visual reports.",
  },
  {
    image: "/assets/images/product-1-how-it-works-4.svg",
    imageAlt: "",
    header: "",
    description:
      "Provides actionable insights with detailed vulnerability reports and recommendations for secure coding practices.",
  },
  {
    image: "/assets/images/product-1-how-it-works-5.svg",
    imageAlt: "",
    header: "",
    description:
      "Sends instant notifications about vulnerabilities during coding, enabling real-time issue resolution",
  },
  {
    image: "/assets/images/product-1-how-it-works-6.svg",
    imageAlt: "",
    header: "",
    description:
      "Combines automated tools with manual reviews to scan both common and complex vulnerabilities.",
  },
];

export const benefits = [
  {
    header: "Vulnerability Detection",
    description:
      "Scans for over 150+ types of vulnerabilities to ensure robust security.",
  },
  {
    header: "Improve Code Quality",
    description:
      "Pinpoints areas for improvement, boosting overall code quality and reliability.",
  },
  {
    header: "Rectify Reentrancy",
    description:
      "Quickly identifies and rectifies issues such as reentrancy and unchecked transfers, speeding up development.",
  },
  {
    header: "Direct Uploads",
    description:
      "Allows direct upload of contracts from GitHub, contract files, or using the upload files option.",
  },
  {
    header: "Time Effective",
    description: "Analyzes heavy smart contract files in less than a minute.",
  },
  {
    header: "Access to Past Reports",
    description:
      "Provides access to all historic smart contract reports from its dashboard.",
  },
  {
    header: "Automated Reports",
    description:
      "Generates automated detailed reports that can be downloaded easily.",
  },
  {
    header: "SaaS-based Model",
    description:
      "Offers a SaaS-based pricing model to suit projects of all sizes.",
  },
];

export const methodology = [
  {
    header: "Smart Contract Source Code Review",
    description:
      " • Review of specifications, sources, and instructions to grasp the full audit scope, intended business behavior, overall architecture, and project goals.<br/><br/> • Conduct a manual line-by-line reading of source code to identify potential vulnerabilities.",
    icon: faMouse,
    iconBackgroundColor: "#CABDFF",
  },
  {
    header: "Test Coverage Analysis (Unit Testing)",
    description:
      "Perform test coverage analysis to ensure comprehensive code coverage and determine how much code is exercised during tests.",
    icon: faMouse,
    iconBackgroundColor: "#CABDFF",
  },
  {
    header: "Static Analysis",
    description:
      "Utilize a suite of vulnerability detectors to uncover security concerns in smart contracts at various impact levels.",
    icon: faMouse,
    iconBackgroundColor: "#CABDFF",
  },
  {
    header: "Symbolically Executed Tests (SMTChecker Testing, Taint Analysis)",
    description:
      "Analyze program inputs through symbolic execution to determine the conditions under which each part of the program runs, checking for vulnerabilities using both static and dynamic analysis methods.",
    icon: faMouse,
    iconBackgroundColor: "#CABDFF",
  },
  {
    header: "Property-Based Analysis (Fuzz Tests, Invariant Testing)",
    description:
      " • Run the execution low multiple times by generating random sequences of calls to the contract <br/><br/> • Asserts that all the invariants hold true for all scenarios.",
    icon: faMouse,
    iconBackgroundColor: "#CABDFF",
  },
  {
    header: "Best Practices Review",
    description:
      "Evaluate smart contracts against established industry and academic practices to improve efficiency, effectiveness, clarity, maintainability, security, and control. Provide specific, itemized, and actionable recommendations to enhance the security and resilience of smart contracts.",
    icon: faMouse,
    iconBackgroundColor: "#CABDFF",
  },
];
