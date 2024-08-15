import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Modal from "react-modal";
import QRCode from "qrcode.react";
import CryptoJS from "crypto-js";
import Chart from "chart.js/auto";

const logo = "";
const SectionHeader = ({ content }) => {
  return <div>{content}</div>;
};
const Loader = () => {
  return <div>loader</div>;
};

const { v4: uuidv4 } = require("uuid");
const fakeData = [
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
  {
    created_on: "2023-11-13T11:42:11.000Z",
    credit: 1,
    email: "jhashubham976@gmail.com",
    id: 44,
    modified_on: "2024-02-12T17:29:26.000Z",
    otp: 8138,
    otptime: "2024-02-12T17:34:27.000Z",
    plan: 0,
    planexpiry: null,
    rcredit: 0,
    status: 0,
  },
];

const SolidityShield0 = () => {
  const [showverify, setshowverify] = useState(false); // for otp verify screen options
  const [modalOpen, setModalOpen] = useState(false);
  const [enterotp, setenterotp] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showFileUpload, setshowFileUpload] = useState(false);
  const [showsendotp, setshowsendotp] = useState(true);

  const [plan, setplan] = useState("");
  const [credit, setcredit] = useState(0);
  const [rcredit, setrcredit] = useState(0);

  const [isplanVisible, setIsPlanVisible] = useState(false); // table toggle
  const [showHistoryTable, setShowHisotryTable] = useState(false); // table toggle
  const [tableData, setTableData] = useState([]);

  const [showPlans, setshowPlans] = useState(false); // for scan history and scan plans
  // const [showPlans, setshowPlans] = useState(false);   // for scan history and scan plans

  const [showScanResult, setShowScanResult] = useState(false); // for scan results
  const [companyName, setcompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [critical, setcritical] = useState(0);
  const [medium, setmedium] = useState(0);
  const [low, setlow] = useState(0);
  const [info, setinfo] = useState(0);
  const [gas, setgas] = useState(0);
  const [score, setscore] = useState("");
  const [hash, sethash] = useState("");
  const [contracts, setcontracts] = useState(0);
  const [lines, setlines] = useState(0);
  const [assembly, setassembly] = useState(0);
  const [erc, seterc] = useState("");
  const [total, settotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totHistory, setTotHistory] = useState(0);
  const [tableDataInd, setTableDataInd] = useState([]);
  const [inputTypes, setInputTypes] = useState([]);
  const [contractAddress, setContractAddress] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [etherscanUrl, setEtherscanUrl] = useState("");
  // const [compilerVersion,setcompilerVersion] = useState('')
  const [chain, setChain] = useState(null);

  //Invoice States
  const [planid, setplanid] = useState(0);
  const [paymentid, setpaymentid] = useState(0);
  const [paymentaddress, setpaymentaddress] = useState("");
  const [paymentamount, setpaymentamount] = useState(0);

  useEffect(() => {
    var user = sessionStorage.getItem("session_user");
    // console.log("session : ", user);
    // var user_mail = user[0].mail
    if (user == null) {
      // console.log("login session");
    } else {
      // console.log("existing login session");
      const bytes = CryptoJS.AES.decrypt(user, "secretKey123");
      const email = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      setEmail(email);
      updateUserSession(email);
    }
  }, []);

  const handleChain = (event) => {
    const options = event.target.options;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setChain(selectedOptions);
  };

  const handleInputTypeChange = (event) => {
    const options = event.target.options;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    setInputTypes(selectedOptions);
  };

  const corsProxyUrl = "https://cors.bridged.cc/";

  const githuburlfetch = async (repoUrl) => {
    try {
      let rawUrl = repoUrl;
      if (repoUrl.includes("/blob/")) {
        rawUrl = repoUrl.replace("github.com", "raw.githubusercontent.com");
        rawUrl = rawUrl.replace("/blob/", "/");
      }

      const response = await fetch(rawUrl);
      if (!response.ok) {
        toast("Failed to fetch file");
      }
      const content = await response.text();
      // console.log(content);

      const blob = new Blob([content], { type: "text/plain" });
      const file = new File([blob], `${companyName}.sol`, {
        type: "text/plain",
      });
      setFile(file);
      const sourceCode = content;
      return { sourceCode, file };
    } catch (error) {
      console.error("Error fetching content:", error);
      return null;
    }
  };

  const isFlattened = (contracts) => {
    return !/import\s+/i.test(contracts);
  };

  const isContractFlattened = (source) => {
    const lines = source.split("\n");
    const hasImports = lines.some((line) => line.trim().startsWith("import"));

    if (!hasImports) {
      const pragmaLine = lines.find((line) =>
        line.trim().startsWith("pragma solidity")
      );
      if (pragmaLine) {
        const compilerVersionMatch = pragmaLine.match(
          /pragma solidity\s+(.+);/
        );
        if (compilerVersionMatch && compilerVersionMatch[1]) {
          return compilerVersionMatch[1];
        }
      }
      return false;
    } else {
      return false;
    }
  };

  const detectCompilerVersion = (contracts) => {
    const contractsString = Array.isArray(contracts)
      ? contracts.join(" ")
      : contracts;
    if (typeof contractsString !== "string") {
      toast("Invalid Contract");
    }

    const matches = contractsString.match(
      /pragma solidity \^?([0-9]+\.[0-9]+\.[0-9]+);/g
    );
    if (!matches) return null;

    const versions = matches.map(
      (match) => match.match(/([0-9]+\.[0-9]+\.[0-9]+)/)[0]
    );
    versions.sort((a, b) => {
      const [majorA, minorA, patchA] = a.split(".").map(Number);
      const [majorB, minorB, patchB] = b.split(".").map(Number);

      if (majorA !== majorB) return majorB - majorA;
      if (minorA !== minorB) return minorB - minorA;
      return patchB - patchA;
    });

    return versions[0];
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      width: "500px",
      margin: "auto",
      border: "1px solid #ccc",
      background: "#fff",
      borderRadius: "4px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    header: {
      background: "#000000", // Set the background color for the header strip
      color: "#fff", // Set the text color for the header strip
      padding: "10px", // Add some padding to the header strip
      borderTopLeftRadius: "4px",
      borderTopRightRadius: "4px",
    },
    paymentDetails: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center-align the content horizontally
    },
    verifyButton: {
      backgroundColor: "#4CAF50", // Background color for the "Verify" button
      color: "#fff", // Text color for the "Verify" button
      border: "none",
      padding: "10px 20px",
      margin: "25px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    closeButton: {
      backgroundColor: "#d9534f", // Background color for the "Close Modal" button
      color: "#fff", // Text color for the "Close Modal" button
      border: "none",
      padding: "10px 20px",
      margin: "5px",
      borderRadius: "4px",
      cursor: "pointer",
    },
  };

  const logout = () => {
    sessionStorage.removeItem("session_user");
    window.location.reload();
  };

  const handleEmailChange = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(e.target.value);
    if (!isValid) {
      toast("Invalid Email, Try again");
      return;
    } else {
      setEmail(e.target.value);
    }
  };

  const setCompanyName = (e) => {
    setcompanyName(e);
  };

  const shortenedEmail = (email) => {
    if (email.length > 20) {
      const atIndex = email.indexOf("@");
      const username = email.substring(0, atIndex);
      const domain = email.substring(atIndex);

      const shortenedUsername = username.substring(0, 5) + "...";

      return shortenedUsername + domain;
    } else {
      return email;
    }
  };

  const handleFileChange = (e) => {
    // setFile(e.target.files[0]);
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith(".sol")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setcontracts(event.target.result);
      };
      reader.readAsText(selectedFile);
      setFile(selectedFile);
    } else {
      toast.error("Only .sol files are allowed.");
      setFile(null);
      setcontracts("");
    }
  };

  const sendOTP = async () => {
    setLoading(true);

    // setshowsendotp(false);
    // setshowverify(true);
    // setLoading(false);
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // setshowanalyse(true);
    // return;
    if (email == "") {
      toast("Invalid Email, Try again");
      setLoading(false);
      return;
    }

    // fetch('http://127.0.0.1:8000/sendOtp2', {

    fetch("https://139-59-5-56.nip.io:3443/sendOtp2", {
      method: "POST",
      body: JSON.stringify({
        mail: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => {})
      .then((data) => {
        toast.success("OTP Send Successfully, Check Mail");
        setshowsendotp(false);
        setshowverify(true);
        setLoading(false);
        // setTimeout(function () { window.location.reload(true); }, 5000);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        toast("Error in sending OTP, Try again");
      });

    setLoading(false);
  };

  const updateUserSession = (mails) => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/verifyOtp2', {

    fetch("https://139-59-5-56.nip.io:3443/getUser", {
      method: "POST",
      body: JSON.stringify({
        mail: mails,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        toast("Invalid Network Response = getUser");
      })
      .then((data) => {
        // console.log(data);
        if (data.length == 0) toast("User Detail Error");
        let userdata = data[0];

        let plandetail = "Free Plan";
        if (userdata.plan == 1) {
          plandetail = "Basic Plan";
        }
        if (userdata.plan == 2) {
          plandetail = "Premium Plan";
        }
        if (userdata.plan == 3) {
          plandetail = "Exclusive Plan";
        }
        setplan(plandetail);
        setcredit(userdata.credit);
        setrcredit(userdata.rcredit);

        setshowPlans(true);
        setshowverify(false);
        setshowsendotp(false);
        sessionStorage.setItem(
          "session_user",
          CryptoJS.AES.encrypt(JSON.stringify(mails), "secretKey123").toString()
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);
  };

  const verifyOTP = () => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/verifyOtp2', {

    fetch("https://139-59-5-56.nip.io:3443/verifyOtp2", {
      method: "POST",
      body: JSON.stringify({
        mail: email,
        otp: enterotp,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        toast("Invlaid Network Response - verify otp");
      })
      .then((data) => {
        // console.log(data);
        if (data.length == 0) toast("Wrong OTP");
        let userdata = data[0];

        let plandetail = "Free Plan";
        if (userdata.plan == 1) {
          plandetail = "Basic Plan";
        }
        if (userdata.plan == 2) {
          plandetail = "Premium Plan";
        }
        if (userdata.plan == 3) {
          plandetail = "Exclusive Plan";
        }
        setplan(plandetail);
        setcredit(userdata.credit);
        setrcredit(userdata.rcredit);

        setshowPlans(true);
        setshowverify(false);

        sessionStorage.setItem(
          "session_user",
          CryptoJS.AES.encrypt(JSON.stringify(email), "secretKey123").toString()
        );
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);
  };

  const fetchContractSourceCode = async (contractAddress, _chain) => {
    try {
      const chain_list = {
        0: "https://api.etherscan.io/api",
        1: "https://api-sepolia.etherscan.io/api",
        2: "https://api.polygonscan.com/api",
        3: "https://api-amoy.polygonscan.com/api",
      };

      const api_list = {
        0: "6MKDUY9RMC8JDHQYY73V1G49SF3HHYGFVB",
        1: "6MKDUY9RMC8JDHQYY73V1G49SF3HHYGFVB",
        2: "WBAH3VYD76KXB7RXCXK81P8SC9GTVMDB3W",
        3: "WBAH3VYD76KXB7RXCXK81P8SC9GTVMDB3W",
      };

      const apiUrl = `${chain_list[_chain]}?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${api_list[_chain]}`;

      const response = await fetch(apiUrl);

      const data = await response.json();
      // console.log("API resposne = ", response.json());
      if (data.status == "1" && data.result.length > 0) {
        return data.result[0].SourceCode;
      } else {
        toast("Error fetching source code");
        return false;
      }
    } catch (error) {
      toast("Error fetching source code");
      console.error("Error fetching contract source code:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let compilerVersion;
    const formData = new FormData();

    if (inputTypes == "") {
      toast("Please Select a source");
      return;
    }

    if (companyName == "") {
      toast("Please enter your Company Name");
      return;
    }

    // https://github.com/himang305/Breeding-NFTs/blob/main/Breeding_nft.sol

    if (inputTypes.includes("github") && githubUrl) {
      if (!githubUrl) {
        toast("Please enter the link.");
        return;
      }
      if (githubUrl) {
        console.log(githubUrl);
        const { sourceCode, file } = await githuburlfetch(githubUrl);
        formData.append("files", file);
        if (sourceCode) {
          compilerVersion = isContractFlattened(sourceCode);
          console.log("Compiler Version = ", compilerVersion);
          if (compilerVersion) {
            console.log("Compiler Version:", compilerVersion);
          } else {
            toast("The contract is not flattened.");
            return;
          }
        } else {
          toast("Failed to fetch contract source code.");
          return;
        }
      }
    }

    if (inputTypes.includes("etherscan") && etherscanUrl) {
      if (!etherscanUrl || !chain) {
        toast("Invlaid Chain OR Address");
        return;
      } else if (etherscanUrl && chain) {
        // console.log(contractAddress);
        const sourceCode = await fetchContractSourceCode(etherscanUrl, chain);
        const blob = new Blob([sourceCode], { type: "text/plain" });
        const file = new File([blob], `${companyName}.sol`, {
          type: "text/plain",
        });
        setFile(file);
        formData.append("files", file);

        if (sourceCode) {
          compilerVersion = isContractFlattened(sourceCode);
          if (compilerVersion) {
            console.log("Compiler Version:", compilerVersion);
          } else {
            alert("The contract is not flattened.");
          }
        } else {
          alert("Failed to fetch contract source code.");
        }
      }
    }

    if (inputTypes.includes("file") && file) {
      formData.append("files", file);

      if (!file) {
        toast.error("Please select a file.");
        return;
      }

      if (!contracts) {
        toast.error("No contract file uploaded.");
        return;
      }

      if (!isFlattened(contracts)) {
        toast.error("The contract must be flattened before submission.");
        return;
      }

      compilerVersion = detectCompilerVersion(contracts);
      if (!compilerVersion) {
        toast.error("Could not detect the compiler version.");
        return;
      }

      console.log(`Compiler version: ${compilerVersion}`);
    }

    if (rcredit < 1) {
      toast("No Credit, Please Purchase a Plan to scan");
      return;
    }

    setLoading(true);
    formData.append("mail", email);
    // formData.append("files", _file);
    formData.append("version", compilerVersion);
    formData.append("company", companyName);

    // fetch('http://127.0.0.1:8000/audits', {
    fetch("https://139-59-5-56.nip.io:3443/audits", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        toast("Invalid Network Response");
      })
      .then((data) => {
        setShowScanResult(true);
        generateTable(data);
        // setFile(null);
        // console.log(data);
        if (credit > 1 && rcredit > 1) {
          generatePDF(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    toast.success("Awesome! The AI scan is now underway");
  };

  function generateTable(data) {
    let finding_names = [
      "high_issues",
      "medium_issues",
      "low_issues",
      "informational_issues",
      "optimization_issues",
    ];

    var score =
      5 -
      ((Number(data.findings[finding_names[0]]) +
        Number(data.findings[finding_names[1]]) +
        Number(data.findings[finding_names[2]])) /
        30) *
        5;

    setcritical(data.findings[finding_names[0]]);
    setmedium(data.findings[finding_names[1]]);
    setlow(data.findings[finding_names[2]]);
    setinfo(data.findings[finding_names[3]]);
    setgas(data.findings[finding_names[4]]);

    setscore(score.toFixed(1) + "/5");
    sethash(data.id);
    setcontracts(data.contracts);
    setlines(data.lines);
    setassembly(data.assembly_lines);
    seterc(data.ercs.join("  |  "));
    settotal(data.detectors);
    setLoading(false);
  }

  const blurryDivStyle = {
    filter: loading ? "blur(5px)" : "blur(0px)",
  };

  const GradientBar = ({ label, value, width }) => (
    <div
      className="w-[100%] dark:bg-neutral-600 rounded-full mb-[35px] "
      style={{
        boxShadow: "6px 4px 5px 0px rgba(0, 0, 0, 0.06) inset",
        background: "rgba(255, 255, 255, 0.30)",
      }}
    >
      <div
        style={{
          background: "linear-gradient(90deg, #12D576 0%, #2D5C8F 100%)",
          width: width > 100 ? "100%" : `${width}%`,
          height: "40px",
        }}
        className="bg-primary text-left flex justify-start  items-center align-middle rounded-full font-sans text-[20px] font-normal leading-[110%] text-black text-primary-100"
      >
        <span className="lg:px-[50px] pl-[10px] lg:text-[20px] w-full text-white whitespace-nowrap text-[14px]">
          {label}: {value}
        </span>
      </div>
    </div>
  );

  const ScanResult = () => {
    const stats = [
      { label: "Critical", value: critical, width: critical },
      { label: "Medium", value: medium, width: medium },
      { label: "Low", value: low, width: low },
      { label: "Informational", value: info, width: info },
      { label: "Gas Optimization", value: gas, width: gas },
    ];

    const AuditStat = [
      {
        label: "Audit Score",
        value: score,
      },
      {
        label: "Audit Hash",
        value: hash,
      },
      {
        label: "Number of Contracts",
        value: contracts,
      },
      {
        label: " Lines of code scanned",
        value: lines,
      },
      {
        label: " Lines of assembly code",
        value: assembly,
      },
      {
        label: "ERCs Standard Used",
        value: erc,
      },
      {
        label: "Total Vulnerabilities Found ",
        value: total,
      },
    ];

    return (
      <div style={{ ...blurryDivStyle }} className="res">
        <div className="flex justify-center items-center py-[60px] pb-[30px]">
          <SectionHeader content="Scan Results" />
        </div>

        <div className="mx-[8%]">
          <div className="lg:px-[80px] px-[60px] pb-[50px]   ">
            {stats.map((stat, index) => (
              <GradientBar key={index} {...stat} />
            ))}
          </div>
        </div>

        <div className="lg:px-[80px] px-[60px]">
          <div className=" md:text-2xl text-xl text-left whitespace-break-spaces w-fit font-sans font-bold leading-[110%]  bg-custom-gradient bg-clip-text text-transparent">
            Audit Statistics
          </div>
          <div className="grid gap-4 pt-[20px] pr-[40px]">
            {AuditStat.map((stat, index) => (
              <p key={index} className="flex items-center lg:w-auto w-fit">
                <span className="lg:w-[250px] w-[150px] text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%]">
                  {stat.label}
                </span>
                <span className="text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%]">
                  :
                </span>
                <span className="lg:w-1/2 w-[200px] text-white font-sans lg:text-[18px] text-[14px] overflow-clip font-normal lg:leading-[230%] text-left lg:pl-[60px] pl-[20px]">
                  {stat.value}
                </span>
              </p>
            ))}
            <p className="flex items-center  lg:w-auto w-fit">
              <span className="lg:w-[250px] w-[150px] text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%] underline">
                <a href="/"> By SecureDApp</a>
              </span>
              <span className="text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%]">
                :
              </span>
              <span className="lg:w-1/2 w-[200px] text-white font-sans lg:text-[18px] text-[14px] font-normal leading-[230%] text-left lg:pl-[60px] pl-[20px] underline">
                <a href="/contact-us">
                  {" "}
                  Request Manual Audit For Detailed Report
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const getScanHistory = async () => {
    setLoading(true);

    // fetch('http://127.0.0.1:8000/getHistory', {
    fetch("https://139-59-5-56.nip.io:3443/getHistory", {
      method: "POST",
      body: JSON.stringify({
        mail: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        toast("Invalid Network Response");
      })
      .then((data) => {
        // console.log(data);
        setTableData(data);
        setTableDataInd(data.slice(0, 10));
        setTotHistory(
          parseInt(data.length / 10) + (data.length % 10 !== 0 ? 1 : 0)
        );
        // setTableData(fakeData);
        // setTableDataInd(fakeData.slice(0,5));
        // setTotHistory(parseInt(fakeData.length/5)+((fakeData.length%5)!==0?1:0));
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);
  };

  const handlePrev = () => {
    setPage(page - 1);
    setTableDataInd(tableData.slice((page - 2) * 10, (page - 2) * 10 + 10));
  };
  const handleNext = () => {
    setPage(page + 1);
    setTableDataInd(tableData.slice(page * 10, page * 10 + 10));
  };

  const downloadReport = async (id) => {
    setLoading(true);
    // fetch('http://127.0.0.1:8000/getReport', {

    fetch("https://139-59-5-56.nip.io:3443/getReport", {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        toast("Invalid Network response ");
      })
      .then((data) => {
        // if (PurchasePlan(0)) {
        //   console.log("PDF generation is not available for free plan users.");
        //   toast("PDF generation is not available for free plan users.");
        //   return;
        // }
        console.log(JSON.parse(data[0].reportdata));
        generatePDF(JSON.parse(data[0].reportdata));
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    setLoading(false);
  };

  const HistorySection = () => {
    return (
      <section className=" pt-[0px] lg:px-[80px] md:px-[50px] px-[20px] pb-[70px] ">
        <div className="pt-[70px]">
          <h1 className="text-white font-sans text-[40px] font-bold leading-[72px]">
            Solidity Shield -{" "}
            <span className="text-[#12D576]">Smart Contract Scanner</span>
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col gap-10 pt-5">
          <div className="text-center  border-[0.5px] border-white md:w-[380px]  ">
            <h1 className="text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4">
              <span className="font-normal"> User: </span>
              {shortenedEmail(email)}
            </h1>
          </div>

          <div className="text-center border-[0.5px] border-white md:w-[380px] ">
            <h1 className="text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4">
              <span className="font-normal"> Plan: </span>
              {plan}
            </h1>
          </div>

          <div className="text-center border-[0.5px] border-white md:w-[380px] ">
            <h1 className="text-white font-sans text-[24px] font-normal leading-[30px] px-6 py-4">
              <span className="font-normal"> Remaining Scan Credit: </span>
              {rcredit}/{credit}
            </h1>
          </div>

          <div></div>

          <div></div>
        </div>

        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              className="flex px-[22px] py-[11px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] mt-4"
              onClick={() => {
                getScanHistory();
                setShowHisotryTable(!showHistoryTable);
              }}
            >
              {showHistoryTable ? "Hide Scan History" : "Show Scan History"}
            </button>
            <button
              className="flex px-[22px] py-[11px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] mt-4"
              onClick={() => setshowFileUpload(!showFileUpload)}
            >
              Scan Contract
            </button>
            <button
              className="flex px-[22px] py-[11px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] mt-4"
              onClick={() => logout()}
            >
              Logout
            </button>
          </div>

          {showHistoryTable && ( // Render the table only if showTable is true
            <>
              <table
                className="w-full lg:mt-[50px] "
                style={{
                  backgroundColor: "black",
                  border: "2px solid white",
                  marginTop: "20px",
                }}
              >
                <thead>
                  <tr className="text-[#12D576]">
                    <th>Report ID</th>
                    <th>Date</th>
                    <th>Report Link</th>
                  </tr>
                </thead>
                <tbody className="border-t-[0.5px] overflow-scroll ">
                  {tableDataInd.map((row, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-transparent"
                          : "bg-[#12D57612] bg-opacity-7"
                      }
                    >
                      <td className="px-4 py-2 text-white text-center">
                        {row.id}{" "}
                      </td>
                      <td className="px-4 py-2 text-white text-center">
                        {row.date}{" "}
                      </td>

                      <td className="px-4 py-2 flex gap-4 text-white text-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                            fill="#12D576"
                          />
                        </svg>
                        <a
                          href={"link"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            // console.log(row.id);
                            downloadReport(row.id);
                          }}
                        >
                          Download Report
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-row justify-between mt-5 px-2">
                <button
                  onClick={() => {
                    handlePrev();
                  }}
                  disabled={page === 1}
                  className="text-white bg-[#12D576] px-6 py-3 font-medium rounded-md"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    handleNext();
                  }}
                  disabled={page === totHistory}
                  className="text-white bg-[#12D576] px-6 py-3 font-medium rounded-md"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    );
  };

  const PurchasePlan = async (planid) => {
    setLoading(true);

    let cost = 0;
    if (planid > 0) {
      setplanid(planid);

      const transactionid = "Tr-" + uuidv4().toString(36).slice(-6);
      // console.log("Txn_ID : ", transactionid);

      const response2 = await fetch(
        "https://139-59-5-56.nip.io:3443/payment-insert",
        {
          method: "POST",
          body: JSON.stringify({
            mail: email,
            paymentid: transactionid,
            planid: planid,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      const data = await response2.json();
      // console.log("db entry data : ", data);

      if (!data.status) {
        console.log("Failed DB payment Entry");
        return;
      } else {
        window.location.replace(data.redirect);
      }
    }
  };

  const Plans = () => {
    const plans = [
      {
        name: "No of Scans",
        c1: "1 Scan",
        c2: "6 Scan",
        c3: "24 Scan",
        c4: "Unlimited",
      },
      {
        name: "Run",
        c1: "All Super Spotter",
        c2: "All Super Spotter",
        c3: "All Super Spotter",
        c4: "All Super Spotter",
      },
      { name: "Audit Score", c1: true, c2: true, c3: true, c4: true },
      { name: "Vulnerability Count", c1: true, c2: true, c3: true, c4: true },
      {
        name: "Vulnerability Descriptions",
        c1: false,
        c2: true,
        c3: true,
        c4: true,
      },
      { name: "Audit Report", c1: false, c2: true, c3: true, c4: true },
      { name: "Report Publish", c1: false, c2: false, c3: true, c4: true },
      { name: "Report Download", c1: false, c2: false, c3: true, c4: true },
      { name: "Github", c1: false, c2: false, c3: true, c4: true },
      {
        name: "Social Shares (SecureDApp)",
        c1: false,
        c2: false,
        c3: true,
        c4: true,
      },
      {
        name: "Dedicate Blog (SecureDApp)",
        c1: false,
        c2: false,
        c3: true,
        c4: true,
      },
      { name: "Email Support", c1: false, c2: false, c3: true, c4: true },
      { name: "API", c1: false, c2: false, c3: false, c4: true },
      { name: "Dedicated Support", c1: false, c2: false, c3: false, c4: true },
    ];

    return (
      <section className="lg:pt-[40px] md:pt-[160px] pt-[150px] mt-[70px]  contacthero bg-fixed">
        <div className="lg:px-[80px] md:px-[50px] px-[20px] ">
          <h1 className="text-white font-sans md:text-4xl text-5xl font-bold leading-9">
            SecureDApp Solidity Shield{" "}
            <span className="text-[#12D577] font-sans text-4xl font-bold leading-9">
              Subscription Plans
            </span>
          </h1>

          {/* <h1 className="text-[#12D577] font-sans text-[34px] font-bold
  leading-[72px]">Subscription Plans
          </h1> */}

          <div className="my-[35px]">
            <h1 className="text-white font-sans text-[18px] font-normal leading-[30px]">
              {" "}
              Scan your smart contracts for security vulnerabilities with
              SecureDApp’s Solidity Shield. Our automated scanning engine will
              identify and report on potential security risks, helping you to
              keep your contracts safe and secure.
            </h1>
          </div>

          <div className="flex gap-5">
            <button
              onClick={() => setshowFileUpload(!showFileUpload)}
              className="flex px-[32px] py-[21px] text-white justify-center items-center gap-3 rounded-[11px] bg-[#00D870] "
            >
              {" "}
              Get Started For Free
            </button>

            <button
              onClick={() => {
                setIsPlanVisible(!isplanVisible);
              }}
              className="flex px-[32px] py-[21px] text-black justify-center items-center gap-3 rounded-[11px] bg-[#FFF] "
            >
              {isplanVisible ? "Hide Plans" : "See Plans"}
            </button>
          </div>
        </div>

        {isplanVisible && (
          <div className="container lg:mx-auto lg:px-0 my-10 md:px-4  ">
            <div className="min-w-full bg-transparent rounded-3xl border overflow-hidden">
              <div className="flex  ">
                <div className="w-1/5 lg:py-2 md:py-6 px-4 border text-center text-white font-sans md:text-[36px] text-[25px] font-bold leading-normal flex justify-center items-center ">
                  <h1> Plans </h1>
                </div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center ">
                  <h1 className="text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center ">
                    {" "}
                    Base Plan
                  </h1>
                  <h1 className="text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center lg:py-[32px] md:py-[45px] py-[50px]">
                    {" "}
                    Free
                  </h1>
                  <button
                    onClick={() => setshowFileUpload(!showFileUpload)}
                    className="bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center"
                  >
                    {" "}
                    Choose This Plan
                  </button>
                </div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center ">
                  <h1 className="text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center ">
                    {" "}
                    Plus Plan
                  </h1>
                  <h1 className="text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center lg:py-[17px] md:py-[30px] py-[20px] ">
                    {" "}
                    Rs 15000
                    <span className="text-white font-sans text-[13px] font-medium leading-[27px] text-center py-[2px] block ">
                      {" "}
                      Rs 2500 / Scan
                    </span>
                  </h1>

                  <button
                    onClick={() => {
                      PurchasePlan(1);
                    }}
                    className="bg-[#00C767] text-white flex md:px-[15px]  py-[10px] justify-center rounded-[4px] text-center"
                  >
                    {" "}
                    Choose This Plan
                  </button>
                </div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center ">
                  <h1 className="text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center ">
                    Premium Plan
                  </h1>
                  <h1 className="text-white font-sans md:text-[36px] text-[25px]  font-bold leading-[27px] text-center lg:py-[17px] md:py-[15px] py-[20px]  ">
                    {" "}
                    Rs 30000
                    <span className="text-white font-sans text-[13px] font-bold leading-[27px] text-center py-[2px] block ">
                      {" "}
                      Rs 1250 / <span className="font-medium">Scan</span>{" "}
                    </span>
                  </h1>

                  <button
                    onClick={() => {
                      PurchasePlan(2);
                    }}
                    className="bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center"
                  >
                    {" "}
                    Choose This Plan
                  </button>
                </div>
                <div className="w-1/5 py-2 px-4 border text-center flex flex-col items-center ">
                  <h1 className="text-white font-sans md:text-[22px] text-[15px] font-bold leading-[27px] text-center ">
                    Enterprise Plan
                  </h1>
                  <h1 className="text-white font-sans md:text-[36px] text-[25px] font-bold leading-[27px] text-center md:py-[17px] py-[35px] ">
                    {" "}
                    80000
                    <span className="text-white font-sans text-[13px] font-medium leading-[27px] text-center py-[2px] block">
                      {" "}
                      Exclusive
                    </span>
                  </h1>

                  <button
                    onClick={() => {
                      PurchasePlan(3);
                    }}
                    className="bg-[#00C767] text-white flex md:px-[15px] py-[10px] justify-center rounded-[4px] text-center"
                  >
                    {" "}
                    Choose This Plan
                  </button>
                </div>{" "}
              </div>
              {plans.map((plan, index) => (
                <div className="flex text-white" key={index}>
                  <div className="w-1/5 py-7 md:px-4 px-2 border md:text-[17px] text-[10px] font-bold leading-[24px] ">
                    {plan.name}
                  </div>
                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">
                    {plan.c1 === true ? (
                      <h1 className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M20.5 6.87903L9.5 17.879L4.5 12.879"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h1>
                    ) : (
                      plan.c1
                    )}
                  </div>
                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px] ">
                    {plan.c2 === true ? (
                      <h1 className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M20.5 6.87903L9.5 17.879L4.5 12.879"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h1>
                    ) : (
                      plan.c2
                    )}
                  </div>

                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">
                    {plan.c3 == true ? (
                      <h1 className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M20.5 6.87903L9.5 17.879L4.5 12.879"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h1>
                    ) : (
                      plan.c3
                    )}
                  </div>
                  <div className="w-1/5 py-7 px-4 border text-center md:text-[17px] text-[10px]">
                    {plan.c4 == true ? (
                      <h1 className="flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M20.5 6.87903L9.5 17.879L4.5 12.879"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </h1>
                    ) : (
                      plan.c4
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="lg:px-[80px] md:px-[50px] px-[20px] lg:pt-[30px] md:pt-[25px] pt-[10px] lg:pb-[10px] mt-[100px]">
          <h1 className="text-white font-sans text-[22px] font-medium leading-[37px]">
            <span className="text-[#00C767] text-[30px] font-extrabold">
              Secure payment :
            </span>{" "}
            We use a secure payment processor that is PCI compliant and has a
            good reputation for security. Your payment information is safe with
            us.
          </h1>
        </div>
        <div className="lg:px-[80px]  md:px-[50px] px-[20px] lg:py-[15px] md:pt-[25px] pt-[10px]">
          <h1 className="text-white font-sans text-[22px] font-medium leading-[37px]">
            <span className="text-[#00C767] text-[30px] font-extrabold">
              Guarantee :
            </span>{" "}
            We are so confident in our service that we offer a 100% satisfaction
            guarantee.
          </h1>
        </div>
        <div className="lg:px-[80px]  md:px-[50px] px-[20px] lg:py-[10px] md:pt-[25px]  pt-[10px]">
          <h1 className="text-white font-sans text-[22px] font-medium leading-[37px]">
            <span className="text-[#00C767] text-[30px] font-extrabold">
              Privacy Policy :
            </span>{" "}
            We respect your privacy and will never share your information with
            third parties.
          </h1>
        </div>

        {/* <div className='lg:px-[80px]  md:px-[50px] px-[20px] lg:py-[40px] md:py-[30px] py-[20px]' >

          <div className='flex lg:flex-row flex-col lg:gap-[100px md:gap-[50px] gap-[40px]'>
            <div className='flex gap-4 justify-center '>
              <div><img src={image1} alt='image1' />
              </div>
              <div className="flex flex-col justify-around">
                {" "}
                <h1 className="text-white text-center text-[30px] font-bold leading-[18px]">
                  Eshan
                </h1>
                <h1 className="text-white text-center text-[14px] font-medium leading-[18px]">
                  CEO of BlitsEstate
                </h1>
              </div>
            </div>

            <div className='flex text-white font-sans text-[28px] font-medium leading-[40px]'>
              "SecureDApp has helped me to keep my smart contracts safe and secure. I would highly recommend their service."  </div>
          </div>

        </div> */}
      </section>
    );
  };
  function formatDate(dateString) {
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    const suffix = getDaySuffix(day); // Function to get day suffix (e.g., 'th', 'st', 'nd')

    return ` ${day}${suffix} ${month} ${year}`;
  }
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return "th";
    }
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  const generatePDF = async (reportData) => {
    try {
      console.log("Starting PDF generation");
      console.log("Report Data:", reportData);

      const date = formatDate(reportData.date);
      // const logo = logo;
      const pdf = new jsPDF("p", "mm", "a4");
      const linePositionY = 25;

      // Set background color on the left side (red)
      pdf.setFillColor(4, 170, 109);
      pdf.rect(0, 0, 50, pdf.internal.pageSize.getHeight(), "F");
      // first page of logo and company symbol
      const pageWidth = pdf.internal.pageSize.getWidth();
      const rightRectWidth = pageWidth - 50; // Width of the right section

      // Set background color on the right side
      pdf.setFillColor(255, 255, 255);
      pdf.rect(50, 0, rightRectWidth, pdf.internal.pageSize.getHeight(), "F");
      pdf.setFontSize(10);
      pdf.setFont("times", "bold");
      pdf.setTextColor(100, 100, 100);

      pdf.text("SecureDapp", 185, 275);
      pdf.setFont("times", "normal");
      pdf.text(
        "235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,",
        120,
        280,
        null,
        null,
        "left"
      );
      pdf.text(
        "Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
        120,
        285,
        null,
        null,
        "left"
      );
      pdf.text("hello@securedapp.in", 120, 290, null, null, "left");

      pdf.setFontSize(12);
      pdf.text(date, 170, 140);
      pdf.setFontSize(50);
      pdf.addImage(logo, "JPEG", 89, 108, 15, 15);
      pdf.text("SecureDApp", 105, 120);
      pdf.line(50, 0, 50, 300);

      // report start.
      pdf.addPage();
      pdf.setFontSize(10);
      pdf.setFont("times", "bold");
      pdf.setTextColor(100, 100, 100);
      pdf.text(date, 175, 275);
      pdf.text("SecureDapp", 10, 275);
      pdf.setFont("times", "normal");
      pdf.text(
        "235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,",
        10,
        280,
        null,
        null,
        "left"
      );
      pdf.text(
        "Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
        10,
        285,
        null,
        null,
        "left"
      );
      pdf.text("hello@securedapp.in", 10, 290, null, null, "left");

      pdf.setFontSize(18); // Change font size to 18
      pdf.setFont("times", "bold"); // Set font to bold
      pdf.text("SecureDApp's Solidity Shield Audit Report", 43, 20); // Adjust the coordinates

      // Executive Summary
      pdf.setFontSize(13);

      const headers = [
        ["AUDIT_HASH", reportData.id],
        ["Contracts", reportData.contracts],
        ["Lines", reportData.lines],
        ["Assembly Lines", reportData.assembly_lines],
        ["ERCs", reportData.ercs.join(", ")],
      ];

      pdf.autoTable({
        startY: 45,
        head: [["Executive Summary", ""]], // Empty header row
        body: headers,
        styles: { fillColor: [211, 211, 211] },
        headStyles: {
          fillColor: [4, 170, 109],
          cellPadding: 2, // Increase row height by setting cellPadding
          fontSize: 12, // Adjust font size if needed
        },
        //    theme: "grid", // Add grid lines if desired
      });

      // Add "Findings" data table
      const findingsHeaders = [["Audit Findings", "Count"]];
      const findingsData = Object.entries(reportData.findings)
        .map(([key, value]) => {
          let lowerKey = key.toLowerCase();

          if (lowerKey === "high_issues") {
            lowerKey = "CRITICAL";
          } else if (lowerKey === "medium_issues") {
            lowerKey = "MEDIUM";
          } else if (lowerKey === "low_issues") {
            lowerKey = "LOW";
          } else if (lowerKey === "informational_issues") {
            lowerKey = "INFORMATIONAL";
          } else if (lowerKey === "optimization_issues") {
            lowerKey = "OPTIMIZATIONS";
          }

          return [lowerKey, value];
        })
        .reverse();
      console.log(findingsData);

      const vulnerabilityData = {
        high_issues: 5,
        medium_issues: 10,
        low_issues: 15,
        informational_issues: 2,
        optimization_issues: 3,
      };
      const transformedData = {};

      for (let key in vulnerabilityData) {
        let lowerKey = key.toLowerCase();

        if (lowerKey === "high_issues") {
          transformedData["CRITICAL"] = vulnerabilityData[key];
        } else if (lowerKey === "medium_issues") {
          transformedData["MEDIUM"] = vulnerabilityData[key];
        } else if (lowerKey === "low_issues") {
          transformedData["LOW"] = vulnerabilityData[key];
        } else if (lowerKey === "informational_issues") {
          transformedData["INFORMATIONAL"] = vulnerabilityData[key];
        } else if (lowerKey === "optimization_issues") {
          transformedData["OPTIMIZATIONS"] = vulnerabilityData[key];
        }
      }

      // Create an array of vulnerability analysis details
      // const vulnerabilityAnalysis = [
      //   { type: "CRITICAL", issue: "Unencrypted Sensitive Data in Session Storage", recommendation: "Store keys in environment variables and use secure methods to handle sensitive data." },
      //   { type: "CRITICAL", issue: "Weak Encryption Method", recommendation: "Use a more secure key management system and ensure encryption keys are kept secret." },
      //   { type: "MEDIUM", issue: "Insecure API Endpoints", recommendation: "Store API endpoints in environment variables and ensure they are not exposed in the client-side code." },
      //   { type: "MEDIUM", issue: "Insecure Data Handling", recommendation: "Remove or securely manage placeholder data." },
      //   { type: "LOW", issue: "Potential Information Disclosure", recommendation: "Remove or obfuscate logs that contain sensitive information." },
      //   { type: "LOW", issue: "Hardcoded API Keys and Endpoints", recommendation: "Use environment variables for managing keys and endpoints." },
      //   { type: "INFORMATIONAL", issue: "Email Validation", recommendation: "Use a more comprehensive email validation library if needed for production-grade applications." },
      //   { type: "INFORMATIONAL", issue: "Basic Error Handling", recommendation: "Implement more robust error handling and user feedback mechanisms." },
      //   { type: "OPTIMIZATIONS", issue: "Unoptimized Component Rendering", recommendation: "Conditionally render components to optimize performance." },
      // ];

      pdf.autoTable({
        startY: pdf.lastAutoTable.finalY + 30,
        head: findingsHeaders,
        body: findingsData,
        styles: { fillColor: [211, 211, 211] },
        // headStyles: { fillColor: [4, 170, 109] },
        headStyles: {
          fillColor: [4, 170, 109],
          cellPadding: 2, // Increase row height by setting cellPadding
          fontSize: 12, // Adjust font size if needed
        },
      });

      //graph for audit findings
      const canvas = document.createElement("canvas");
      canvas.width = 400;
      canvas.height = 400;

      const labels = findingsData.map((item) => item[0]);
      const data = findingsData.map((item) => item[1]);
      // console.log(labels);
      // console.log(data);
      const ctx = canvas.getContext("2d");
      const chartData = {
        labels: labels, // Using the first column of findingData's item[0] ['CRITICAL', 'MEDIUM', 'LOW', 'INFORMATIONAL', 'OPTIMIZATIONS'] as labels
        datasets: [
          {
            label: "Count",
            data: data, // Using the second column of findingsData item[1] [0, 0, 1, 30, 1] as data
            backgroundColor: "rgb(4, 170, 109)",
            borderColor: "rgb(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };

      new Chart(ctx, {
        type: "bar",
        data: chartData,
      });
      // Convert canvas to image
      const chartImage = canvas.toDataURL("images/jpeg");
      pdf.addImage(chartImage, "JPEG", 70, 150, 40, 100);
      //end for graph

      pdf.addImage(logo, "JPEG", 10, 11, 10, 10);

      pdf.text(date, 170, 20);
      pdf.setDrawColor(0, 128, 0);
      pdf.line(10, linePositionY, 200, linePositionY);
      pdf.setDrawColor(0, 128, 0);
      pdf.line(10, 270, 200, 270);
      pdf.setFontSize(10);
      pdf.setFont("times", "bold");
      pdf.setTextColor(100, 100, 100);
      pdf.text(date, 175, 275);
      pdf.text("SecureDapp", 10, 275);
      pdf.setFont("times", "normal");
      pdf.text(
        "235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,",
        10,
        280,
        null,
        null,
        "left"
      );
      pdf.text(
        "Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
        10,
        285,
        null,
        null,
        "left"
      );
      pdf.text("hello@securedapp.in", 10, 290, null, null, "left");
      let startY = 40;
      // Vulnerabilities Found Description and Solution Pages start
      let arr = [];
      let solution = [];
      let Vularr = [];
      let textArray = [
        "abiencoderv2-array: This error indicates a vulnerability related to the storage of array data in the ABI encoder v2. It poses a high risk as it can potentially lead to data corruption or manipulation.",
        "arbitrary-send-erc20: This error points to the usage of the transferFrom function with arbitrary sender addresses, which can lead to unauthorized transfers of ERC20 tokens. It's categorized as high risk due to its potential for financial loss. ",
        "array-by-reference: Modifying storage arrays by value rather than reference can lead to unexpected behavior or data corruption, hence posing a high risk.",
        "encode-packed-collision: This error highlights a collision in the ABI encoding process, which can result in incorrect interpretation of function calls or data manipulation, posing a high risk to contract integrity.",
        "incorrect-shift: Incorrect order of parameters in a shift instruction can lead to unintended behavior or vulnerabilities, posing a high risk.",
        "multiple-constructors: Having multiple constructor schemes can lead to confusion or unexpected behavior during contract deployment, hence posing a high risk.",
        "name-reused: Reusing a contract's name can lead to ambiguity or confusion, posing a high risk due to potential misunderstandings or unintended interactions",
        "protected-vars: Unprotected variables can be manipulated by unauthorized parties, posing a high risk to data integrity and security.",
        "public-mappings-nested: Public mappings with nested variables can expose sensitive data to unauthorized access, posing a high risk to data privacy and integrity.",
        "rtlo: The use of the Right-To-Left-Override control character can lead to misleading or obfuscated code, posing a high risk due to potential for code injection or manipulation.",
        "pragma: The pragma directive in Solidity is used to specify the compiler version that the source code should be compiled with. It ensures that the code is compiled using a compatible compiler version to avoid potential issues or unexpected behavior due to changes in language syntax or compiler optimizations.",
        "shadowing-state: This error occurs when state variables are shadowed, meaning they share the same name as variables defined in a wider scope. It poses a high risk as it can lead to confusion and unintended consequences due to ambiguity in variable references.",
        "dead-code: Functions that are not used is categorized as informational as it provides insights into unused functions within the contract, which can aid in code review or optimization efforts.",
        "solc-version: Incorrect Solidity version is categorized as informational as it provides insights into the usage of incorrect Solidity versions within the contract, which can aid in ensuring compatibility or adherence to best practices.",
        "naming-convention: Conformity to Solidity naming conventions is categorized as informational as it provides insights into adherence to Solidity naming conventions within the contract, which can aid in code readability or maintainability.",
        "codex: While not posing a direct security risk, utilizing Codex to find vulnerabilities is a recommended practice for improving contract security. This error is categorized as high severity due to its importance in vulnerability detection.",
        "uninitialized-fptr-cst: Uninitialized function pointer calls in constructors pose a low risk as they can lead to issues with contract initialization or unexpected behavior related to function pointer assignments.",
        "uninitialized-state: Uninitialized state variables pose a high risk as they can lead to unpredictable behavior or vulnerabilities in the contract's logic or storage state.",
        "uninitialized-storage: Similarly, uninitialized storage variables pose a high risk as they can lead to unpredictable behavior or vulnerabilities related to the contract's storage state.",
        "unprotected-upgrade: Unprotected upgradeable contracts pose a high risk as they can be vulnerable to unauthorized modifications or upgrades, potentially leading to unexpected behavior or security breaches.",
        "arbitrary-send-eth: Functions that send Ether to arbitrary destinations pose a medium risk as they can potentially facilitate unauthorized transfers of Ether to unintended recipients.",
        "controlled-array-length: Tainted array length assignments pose a medium risk as they can lead to unintended or malicious modification of array lengths, potentially affecting the contract's behavior or state.",
        "controlled-delegatecall: Controlled delegatecall destinations pose a medium risk as they can lead to unintended or malicious execution of code in external contracts, potentially compromising the security or integrity of the contract.",
        "delegatecall-loop: Payable functions using delegatecall inside a loop pose a medium risk as they can lead to unexpected or unintended execution of code in external contracts, potentially resulting in undesired behavior or security vulnerabilities.",
        "incorrect-exp: Incorrect exponentiation poses a medium risk as it can lead to incorrect mathematical calculations, potentially affecting the accuracy or integrity of computations within the contract.",
        "incorrect-return: Incorrect usage of the return instruction in assembly mode poses a medium risk as it can lead to unexpected behavior or vulnerabilities related to contract execution or state manipulation",
        "msg-value-loop: Using msg.value inside a loop poses a medium risk as it can lead to unexpected or unintended gas consumption or Ether transfers, potentially affecting contract functionality or leading to gas exhaustion vulnerabilities.",
        "reentrancy-eth: Reentrancy vulnerabilities involving the theft of Ether pose a medium risk as they can lead to unauthorized withdrawals or manipulation of contract funds, potentially resulting in financial loss or exploitation.",
        "return-leave: Incorrect usage of return instead of leave poses a medium risk as it can lead to unexpected control flow or vulnerabilities related to contract execution, potentially affecting contract behavior or security.",
        "storage-array: A signed storage integer array compiler bug poses a medium risk as it can lead to unexpected or unintended behavior related to storage operations or manipulation of array data, potentially affecting contract state or functionality.",
        "unchecked-transfer: Unchecked tokens transfer poses a medium risk as it can lead to unauthorized or unintended transfers of tokens, potentially resulting in financial loss or exploitation.",
        "weak-prng: Weak pseudo-random number generation poses a medium risk as it can lead to predictable or exploitable randomness, potentially enabling attacks or manipulation of contract behavior or state.",
        "domain-separator-collision: Detects ERC20 tokens that have a function whose signature collides with EIP-2612's DOMAIN_SEPARATOR(). This poses a medium risk as it can lead to issues with interoperability or compatibility with other standards.",
        "enum-conversion: Detects dangerous enum conversion, which poses a medium risk due to potential vulnerabilities or unexpected behavior related to enum types and their conversions.",
        "erc20-interface: Incorrect ERC20 interfaces pose a medium risk as they can lead to compatibility issues or unexpected behavior when interacting with ERC20-compliant contracts or applications.",
        "erc721-interface: Similarly, incorrect ERC721 interfaces pose a medium risk as they can lead to compatibility issues or unexpected behavior when interacting with ERC721-compliant contracts or applications.",
        "incorrect-equality: Dangerous strict equalities pose a medium risk as they can lead to unexpected or unintended behavior related to comparison operations, potentially affecting contract logic or security.",
        "locked-ether: Contracts that lock Ether pose a medium risk as they can potentially lock funds indefinitely or lead to issues with fund recovery, affecting the usability or security of the contract.",
        "mapping-deletion: Deletion on mapping containing a structure poses a medium risk as it can lead to unexpected or unintended behavior related to data deletion or manipulation, potentially affecting contract state or functionality.",
        "shadowing-abstract: State variables shadowing from abstract contracts pose a medium risk as they can lead to confusion or unintended consequences due to ambiguity in variable references.",
        "tautological-compare: Comparing a variable to itself always returns true or false, depending on comparison, posing a medium risk due to potential issues with logic or unintended consequences.",
        "tautology: Tautology or contradiction poses a medium risk as it can lead to issues with logic or unintended consequences due to redundant or contradictory statements.",
        "write-after-write: Unused write poses a medium risk as it can lead to inefficient or unnecessary operations, potentially affecting contract performance or gas usage.",
        "boolean-cst: Misuse of Boolean constant poses a medium risk as it can lead to issues with logic or unintended consequences due to incorrect or inconsistent usage of Boolean values.",
        "constant-function-asm: Constant functions using assembly code pose a medium risk as they can lead to issues with portability or compatibility with different EVM implementations or Solidity versions.",
        "constant-function-state: Constant functions changing the state pose a medium risk as they can lead to unexpected or unintended changes to contract state, potentially affecting contract behavior or security.",
        "divide-before-multiply: Imprecise arithmetic operations order poses a medium risk as it can lead to incorrect mathematical calculations, potentially affecting the accuracy or integrity of computations within the contract.",
        "out-of-order-retryable: Out-of-order retryable transactions pose a medium risk as they can lead to issues with transaction ordering or unexpected behavior related to transaction retries or retries",
        "reentrancy-no-eth: Reentrancy vulnerabilities (no theft of ethers) pose a medium risk as they can lead to unexpected or unintended behavior related to reentrant calls, potentially affecting contract behavior or security.",
        "reused-constructor: Reused base constructor poses a medium risk as it can lead to issues with inheritance or unintended consequences due to multiple constructor invocations.",
        "tx-origin: Dangerous usage of tx.origin poses a medium risk as it can lead to issues with authentication or authorization, potentially enabling unauthorized access or manipulation of contract state.",
        "unchecked-lowlevel: Unchecked low-level calls pose a medium risk as they can lead to issues with gas usage or unexpected behavior related to low-level interactions with the EVM.",
        "unchecked-send: Unchecked send poses a medium risk as it can lead to issues with gas usage or unexpected behavior related to transfers of Ether or tokens.",
        "uninitialized-local: Uninitialized local variables pose a medium risk as they can lead to unpredictable behavior or vulnerabilities related to contract execution or state manipulation.",
        "unused-return: Unused return values pose a medium risk as they can lead to inefficiencies or unnecessary complexity in contract code, potentially affecting contract performance or gas usage.",
        "incorrect-modifier: Modifiers that can return the default value pose a low risk as they can lead to issues with contract logic or unexpected behavior related to modifier execution.",
        "shadowing-builtin: Built-in symbol shadowing poses a low risk as it can lead to confusion or unintended consequences due to ambiguity in variable references or function calls.",
        "shadowing-local: Local variables shadowing poses a low risk as it can lead to confusion or unintended consequences due to ambiguity in variable references or function calls.",
        "variable-scope: Local variables used prior their declaration pose a low risk as they can lead to confusion or unintended consequences due to ambiguity in variable references or function calls.",
        "void-cst: Constructor called not implemented poses a low risk as it can lead to issues with contract initialization or unexpected behavior related to constructor execution.",
        "calls-loop: Multiple calls in a loop pose a low risk as they can lead to issues with gas usage or unexpected behavior related to multiple invocations of external contracts.",
        "events-access: Missing Events Access Control poses a low risk as it can lead to issues with event emission or unintended consequences due to unauthorized access to event data.",
        "events-maths: Missing Events Arithmetic poses a low risk as it can lead to issues with event emission or unintended consequences due to incorrect or inconsistent event data.",
        "incorrect-unary: Dangerous unary expressions pose a low risk as they can lead to issues with logic or unintended consequences due to incorrect or inconsistent unary operations.",
        "missing-zero-check: Missing Zero Address Validation poses a low risk as it can lead to issues with security or unexpected behavior related to invalid or unauthorized addresses.",
        "reentrancy-benign: Benign reentrancy vulnerabilities pose a low risk as they can lead to issues with contract behavior or security due to unexpected or unintended reentrant calls.",
        "reentrancy-events: Reentrancy vulnerabilities leading to out-of-order Events pose a low risk as they can lead to issues with event emission or unexpected behavior related to event data.",
        "return-bomb: A low level callee may consume all callers gas unexpectedly. This poses a low risk as it can lead to issues with gas usage or unexpected behavior related to gas exhaustion.",
        "timestamp: Dangerous usage of block.timestamp poses a low risk as it can lead to issues with security or unexpected behavior related to timestamp-dependent logic.",
        "assembly: Assembly usage is categorized as informational as it provides insights into the usage of assembly code within the contract, which can be used for optimization or fine-tuning contract performance.",
        "assert-State-Change: Assert state change is categorized as informational as it provides insights into assertions related to state changes within the contract, which can aid in understanding contract behavior or logic.",
        "boolean-Equal: Comparison to boolean constant is categorized as informational as it provides insights into comparisons to boolean constants within the contract, which can aid in understanding contract behavior or logic.",
        "cyclomatic-complexity: Detects functions with high (> 11) cyclomatic complexity. This is categorized as informational as it provides insights into the complexity of contract functions, which can aid in code review or optimization efforts.",
        "deprecated-standards: Deprecated Solidity Standards is categorized as informational as it provides insights into the usage of deprecated Solidity standards or practices within the contract, which can aid in identifying areas for improvement or modernization.",
        "erc20-indexed: Un-indexed ERC20 event parameters is categorized as informational as it provides insights into ERC20 event parameters that are not indexed, which can aid in understanding event emission or event handling within the contract.",
        "function-init-state: Function initializing state variables is categorized as informational as it provides insights into functions responsible for initializing state variables within the contract, which can aid in understanding contract initialization or setup.",
        "incorrect-using-for: Detects using-for statement usage when no function from a given library matches a given type is categorized as informational as it provides insights into the usage of using-for statements within the contract, which can aid in understanding library interactions or dependencies.",
        "low-level-calls: Low level calls is categorized as informational as it provides insights into the usage of low-level calls within the contract, which can aid in understanding interactions with the EVM or other contracts.",
        "missing-inheritance: Missing inheritance is categorized as informational as it provides insights into missing inheritance declarations within the contract, which can aid in understanding contract architecture or design.",
        "redundant-statements: Redundant statements is categorized as informational as it provides insights into redundant statements within the contract, which can aid in code review or optimization efforts.",
        "unimplemented-functions: Unimplemented functions is categorized as informational as it provides insights into unimplemented functions within the contract, which can aid in understanding contract functionality or development progress.",
        "unused-state: Unused state variables is categorized as informational as it provides insights into unused state variables within the contract, which can aid in code review or optimization efforts.",
        "costly-loop: Costly operations in a loop is categorized as informational as it provides insights into expensive operations within loops, which can aid in code review or optimization efforts.",
        "reentrancy-unlimited-gas: Reentrancy vulnerabilities through send and transfer is categorized as informational as it provides insights into potential reentrancy vulnerabilities within the ",
        "similar-names: Variable names are too similar is categorized as informational as it provides insights into variable naming conventions within the contract, which can aid in code readability or maintainability.",
        "too-many-digits: Conformance to numeric notation best practices is categorized as informational as it provides insights into adherence to numeric notation best practices within the contract, which can aid in code readability or maintainability.",
        "cache-array-length: Detects for loops that use length member of some storage array in their loop condition and don't modify it. This optimization is categorized as high risk as it can lead to unnecessary gas consumption or potential vulnerabilities related to array manipulation.",
        "constable-states: State variables that could be declared constant is categorized as high risk as it can lead to issues with contract logic or unexpected behavior related to state variables that should be constant.",
        "external-function: Public function that could be declared external is categorized as high risk as it can lead to issues with gas usage or unexpected behavior related to function calls that could be marked as external.",
        "immutable-states: State variables that could be declared immutable is categorized as high risk as it can lead to issues with contract logic or unexpected behavior related to state variables that should be immutable.",
        "var-read-using-this: Contract reads its own variable using this is categorized as high risk as it can lead to issues with contract logic or unexpected behavior related to incorrect or inconsistent usage of this keyword.",
        "suicidal: Functions allowing anyone to destruct the contract pose a high risk as they can be exploited by malicious actors to intentionally destroy the contract and its associated data.",
        "arbitrary-send-erc20-permit: Similar to the arbitrary-send-erc20 error, this vulnerability specifically involves the transferFrom function with arbitrary sender addresses but also includes the use of permit, posing a medium risk due to potential for unauthorized token transfers with additional permissions.",
      ];

      let Vulsolution = [
        "abiencoderv2-array solution: Update the ABI encoder v2 implementation to properly handle array data. Ensure that array storage is managed securely, avoiding vulnerabilities such as data corruption or manipulation.",
        "arbitrary-send-erc20 solution: Implement strict access controls for ERC20 token transfers, ensuring that only authorized users can initiate transfers. Use whitelists or permission-based systems to restrict token movements to trusted addresses.",
        "array-by-reference Solution: Modify storage arrays by reference rather than value to ensure that changes are reflected consistently throughout the contract. Utilize proper data structures and access patterns to prevent unexpected behavior or data corruption.",
        "encode-packed-collision solution: Review the ABI encoding process and resolve any collisions to ensure that function calls are interpreted correctly. Adjust encoding methods or function signatures as necessary to avoid ambiguity and maintain contract integrity.",
        "incorrect-shift solution: Verify and correct the order of parameters in shift instructions to ensure that operations are performed as intended. Double-check bitwise operations to prevent unintended behavior that could lead to vulnerabilities.",
        "multiple-constructors solution: Consolidate multiple constructor schemes into a single constructor to streamline contract deployment and reduce complexity. Ensure that initialization logic is clear and unambiguous to avoid confusion during contract instantiation.",
        "name-reused solution: Use unique and descriptive names for contracts to avoid ambiguity and potential conflicts. Choose names that accurately reflect the purpose and functionality of each contract to facilitate understanding and prevent unintended interactions.",
        "protected-vars solution: Implement access control mechanisms such as modifiers or visibility specifiers to protect variables from unauthorized access or manipulation. Ensure that sensitive data is only accessible to authorized parties to maintain data integrity and security.",
        "public-mappings-nested solution: Review and redesign data structures to minimize exposure of sensitive data. Consider using private or internal mappings instead of public mappings with nested variables to limit access to privileged information.",
        "rtlo solution: Avoid using the Right-To-Left-Override control character to prevent potential code injection or manipulation. Ensure that all input data is properly sanitized and validated to mitigate the risk of malicious attacks.",
        "pragma solution: Specify the appropriate compiler version using the pragma directive to ensure compatibility and consistency in code compilation. Regularly update pragma statements to align with the latest Solidity language features and best practices.",
        "shadowing-state solution: Rename or restructure variables to eliminate shadowing and clarify variable scope. Use unique names for state variables to prevent confusion and unintended consequences related to variable references.",
        "dead-code solution: Remove unused functions and code segments to improve code readability, reduce complexity, and minimize attack surface. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete code.",
        "solc-version solution: Update the Solidity version to the correct one specified for the contract. Ensure that the contract is compatible with the targeted Solidity compiler version to avoid potential issues or unexpected behavior.",
        "naming-convention solution: Enforce Solidity naming conventions consistently throughout the contract codebase. Use descriptive and meaningful names for variables, functions, and contracts to enhance code readability and maintainability.",
        "codex solution: Integrate Codex for vulnerability detection and utilize its findings to address any identified issues. Regularly scan the contract codebase with Codex to improve contract security and mitigate potential vulnerabilities.",
        "uninitialized-fptr-cst solution: Initialize function pointers properly in constructors to avoid issues with contract initialization or unexpected behavior related to function pointer assignments.",
        "uninitialized-state solution: Ensure that all state variables are properly initialized to prevent unpredictable behavior or vulnerabilities in the contract's logic or storage state.",
        "uninitialized-storage solution: Properly initialize storage variables to avoid unpredictable behavior or vulnerabilities related to the contract's storage state. Initialize storage variables within the contract constructor or relevant functions to ensure consistent behavior.",
        "unprotected-upgrade solution: Implement access controls and authentication mechanisms to secure upgradeable contracts from unauthorized modifications or upgrades. Utilize techniques such as access modifiers, role-based permissions, or multi-signature schemes to enforce upgrade restrictions and maintain contract integrity.",
        "arbitrary-send-eth solution: Implement proper access controls and validation checks for functions that send Ether to arbitrary destinations. Use permission-based systems or whitelists to restrict Ether transfers to trusted addresses and prevent unauthorized withdrawals.",
        "controlled-array-length solution: Validate and sanitize input data to prevent tainted array length assignments that could lead to unintended or malicious modification of array lengths. Implement input validation checks to ensure that array length assignments are within expected bounds and do not pose security risks.",
        "controlled-delegatecall solution: Validate and sanitize delegatecall destinations to prevent unintended or malicious execution of code in external contracts. Implement access controls and validation checks to ensure that delegatecall destinations are trusted and do not pose security risks.",
        "delegatecall-loop solution: Avoid using delegatecall inside loops, especially in payable functions, to prevent unintended or unexpected execution of code in external contracts. Review and refactor code to eliminate delegatecall loops and ensure that contract behavior is predictable and secure.",
        "incorrect-exp solution: Review and correct exponentiation operations to ensure accurate mathematical calculations. Use standard libraries or built-in functions for exponentiation to minimize the risk of errors and ensure computational integrity.",
        "incorrect-return solution: Verify and correct the usage of the return instruction in assembly mode to prevent unexpected behavior or vulnerabilities related to contract execution or state manipulation. Ensure that return statements are used appropriately and consistently throughout the contract codebase.",
        "msg-value-loop solution: Refactor code to avoid using msg.value inside loops to prevent unexpected gas consumption or Ether transfers. Review and redesign contract logic to eliminate the need for msg.value inside loop constructs and ensure efficient and secure contract execution.",
        "reentrancy-eth solution: Implement reentrancy guards and secure state management techniques to prevent reentrancy vulnerabilities involving the theft of Ether. Use mutex locks, state flags, or withdrawal patterns to ensure that contract funds are not susceptible to unauthorized withdrawals or manipulation.",
        "return-leave solution: Review and correct the usage of return statements to ensure proper control flow and prevent unexpected behavior related to contract execution. Replace return statements with appropriate control flow constructs such as leave to ensure consistent and secure contract behavior.",
        "storage-array solution: Address compiler bugs related to signed storage integer arrays to prevent unexpected or unintended behavior related to storage operations or manipulation of array data. Utilize safe storage practices and thorough testing to mitigate the risk of storage-related vulnerabilities.",
        "unchecked-transfer solution: Implement proper validation and authorization checks for token transfers to prevent unauthorized or unintended transfers of tokens. Use access controls, permission-based systems, or token whitelists to restrict token transfers to trusted addresses and prevent exploitation.",
        "weak-prng solution: Enhance random number generation mechanisms to prevent weak or predictable randomness that could enable attacks or manipulation of contract behavior or state. Utilize secure random number generation algorithms and external randomness sources to ensure cryptographic strength and unpredictability.",
        "domain-separator-collision solution: Mitigate collisions between ERC20 token functions and EIP-2612's DOMAIN_SEPARATOR() to ensure interoperability and compatibility with other standards. Adjust function signatures or identifiers to avoid conflicts and maintain consistent",
        "enum-conversion solution: Review enum conversions and ensure that they are handled safely to prevent vulnerabilities or unexpected behavior. Implement proper validation checks and error handling to handle enum conversions securely and reliably.",
        "erc20-interface solution: Validate and correct ERC20 interfaces to ensure compatibility and prevent issues when interacting with ERC20-compliant contracts or applications. Align the contract's ERC20 interface with the standard specifications to avoid compatibility problems and ensure smooth integration.",
        "erc721-interface solution: Validate and correct ERC721 interfaces to ensure compatibility and prevent issues when interacting with ERC721-compliant contracts or applications. Align the contract's ERC721 interface with the standard specifications to avoid compatibility problems and ensure smooth integration.",
        "incorrect-equality solution: Review strict equality comparisons and ensure they are used correctly to prevent unintended behavior or vulnerabilities. Verify that comparisons are performed accurately and consistently to avoid logic errors or security risks.",
        "locked-ether solution: Implement secure patterns for handling locked Ether to prevent indefinite locking or issues with fund recovery. Use time-based locks, withdrawal limits, or multisig schemes to ensure that locked Ether can be safely managed and accessed as intended.",
        "mapping-deletion solution: Review and refactor code to ensure safe deletion of mappings containing structures. Implement proper validation checks and data cleanup procedures to prevent unexpected behavior or vulnerabilities related to data deletion or manipulation.",
        "shadowing-abstract solution: Avoid shadowing state variables from abstract contracts to prevent confusion or unintended consequences. Ensure that state variables are named uniquely and clearly to maintain clarity and prevent ambiguity.",
        "tautological-compare solution: Review and correct tautological comparisons to prevent issues with logic or unintended consequences. Ensure that comparisons are meaningful and accurate to avoid logic errors or vulnerabilities.",
        "tautology solution: Review and eliminate tautologies or contradictions in the contract code to ensure logical consistency and prevent unintended consequences. Refactor code to remove redundant or contradictory statements that may introduce vulnerabilities.",
        "write-after-write solution: Avoid unused write operations to prevent inefficient or unnecessary operations that could affect contract performance or gas usage. Review and refactor code to eliminate unnecessary write operations and optimize resource usage.",
        "boolean-cst solution: Use Boolean constants correctly to ensure logical consistency and prevent issues with logic or unintended consequences. Review and correct the usage of Boolean constants to maintain code clarity and prevent logic errors.",
        "constant-function-asm solution: Review and refactor constant functions using assembly code to ensure portability and compatibility with different EVM implementations or Solidity versions. Use standard Solidity constructs whenever possible to maintain code consistency and readability.",
        "constant-function-state solution: Review and refactor constant functions that modify the state to ensure that state changes are handled appropriately and consistently. Consider whether state modifications are necessary in constant functions and refactor code as needed to maintain contract behavior and security.",
        "sivide-before-multiply solution: Review and correct arithmetic operations to ensure accurate mathematical calculations. Ensure that operations are performed in the correct order to prevent issues with arithmetic precision or integrity.",
        "out-of-order-retryable solution: Handle out-of-order retryable transactions carefully to prevent issues with transaction ordering or unexpected behavior related to transaction retries. Implement proper validation checks and error handling to ensure transaction ordering is maintained correctly.",
        "reentrancy-no-eth solution: Mitigate reentrancy vulnerabilities (no theft of ethers) by carefully managing reentrant calls and ensuring that state changes are handled safely. Implement reentrancy guards and secure state management techniques to prevent unauthorized access or manipulation of contract state.",
        "reused-constructor solution: Avoid reusing base constructors to prevent issues with inheritance or unintended consequences. Ensure that constructors are invoked correctly and only once to maintain contract integrity and prevent unexpected behavior.",
        "tx-origin solution: Safely handle dangerous usage of tx.origin to prevent issues with authentication or authorization. Use alternative authentication mechanisms and avoid relying solely on tx.origin for access control to prevent potential security risks.",
        "unchecked-lowlevel solution: Handle unchecked low-level calls carefully to prevent issues with gas usage or unexpected behavior related to low-level interactions with the EVM. Implement proper validation checks and error handling to ensure safe and secure low-level call operations.",
        "unused-return solution: Handle unused return values appropriately to prevent inefficiencies or unnecessary complexity in contract code. Review and refactor code to eliminate unused return values and optimize resource usage where possible.",
        "incorrect-modifier solution: Review and correct modifiers that can return the default value to prevent issues with contract logic or unexpected behavior. Ensure that modifiers behave as expected and do not introduce vulnerabilities or unintended consequences.",
        "shadowing-builtin solution: Avoid built-in symbol shadowing to prevent confusion or unintended consequences. Use unique names for variables and functions to prevent ambiguity and maintain clarity in the codebase.",
        "shadowing-local solution: Prevent local variables from shadowing to avoid confusion or unintended consequences. Use unique names for local variables to maintain clarity and readability in the codebase.",
        "variable-scope solution: Ensure that local variables are declared before their use to prevent confusion or unintended consequences. Review and refactor code to maintain consistent variable scope and avoid ambiguity.",
        "void-cst solution: Implement constructor logic as needed to prevent issues with contract initialization or unexpected behavior related to constructor execution. Ensure that all necessary initialization steps are performed correctly to maintain contract integrity and functionality.",
        "calls-loop solution: Minimize the use of multiple calls inside loops to prevent issues with gas usage or unexpected behavior related to multiple invocations of external contracts. Refactor code to eliminate unnecessary calls and optimize resource usage where possible.",
        "events-access solution: Implement proper access control mechanisms for event emission to prevent unauthorized access to event data. Ensure that only authorized parties can emit events and access event data to maintain data privacy and security.",
        "events-maths solution: Handle events arithmetic carefully to prevent issues with event emission or unintended consequences. Review and correct event data calculations to ensure accuracy and consistency in event emission.",
        "incorrect-unary solution: Review and correct dangerous unary expressions to prevent issues with logic or unintended consequences. Ensure that unary operations are performed accurately and consistently to avoid logic errors or vulnerabilities.",
        "missing-zero-check solution: Implement proper validation checks for zero address to prevent issues with security or unexpected behavior related to invalid or unauthorized addresses. Ensure that zero addresses are handled securely and consistently throughout the contract codebase.",
        "reentrancy-benign solution: Address benign reentrancy vulnerabilities to prevent issues with contract behavior or security. Implement reentrancy guards and secure state management techniques to ensure that reentrant calls are handled safely and predictably.",
        "reentrancy-events solution: Handle reentrancy vulnerabilities leading to out-of-order events carefully to prevent issues with event emission or unexpected behavior. Implement proper event emission mechanisms and validation checks to ensure event data integrity and consistency.",
        "wrong-event-args solution: Ensure that event arguments are emitted correctly to prevent issues with event emission or unintended consequences. Review and correct event emissions to ensure that event data is accurate and consistent with contract behavior.",
        "unused-variables solution: Remove unused variables to improve contract readability, reduce complexity, and optimize gas usage. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete variables.",
        "unused-libraries solution: Remove unused libraries to improve contract readability, reduce complexity, and optimize gas usage. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete libraries.",
        "uninitialized-members solution: Initialize struct members properly to prevent unpredictable behavior or vulnerabilities related to contract execution or state manipulation. Ensure that all struct members are initialized before use to maintain contract integrity and security.",
        "unchecked-calls solution: Handle unchecked calls carefully to prevent issues with gas usage or unexpected behavior related to external function calls. Implement proper validation checks and error handling to ensure safe and secure call operations.",
        "excessive-states solution: Reduce the number of state variables to improve contract readability, reduce complexity, and optimize gas usage. Identify and eliminate redundant or unnecessary state variables to streamline contract logic and storage.",
        "empty-blocks solution: Remove empty blocks to improve contract readability and reduce complexity. Conduct regular code reviews and refactorings to identify and eliminate unnecessary empty blocks.",
        "const-functions solution: Use constant functions where applicable to improve contract efficiency and reduce gas usage. Identify functions that do not modify state and declare them as constant to enable compiler optimizations and improve contract performance.",
        "assembly-overuse solution: Limit the use of assembly code to only when necessary to improve contract readability, reduce complexity, and optimize gas usage. Refactor code to use higher-level Solidity constructs whenever possible to maintain code consistency and readability.",
        "assert-dos solution: Mitigate risks associated with excessive assert statements that could lead to denial-of-service (DoS) attacks. Use assert statements judiciously and ensure that they do not introduce vulnerabilities or performance issues.",
        "useless-statements solution: Remove unused statements to improve contract readability, reduce complexity, and optimize gas usage. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete statements.",
        "useless-modifiers solution: Remove unused modifiers to improve contract readability, reduce complexity, and optimize gas usage. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete modifiers.",
        "useless-assembly solution: Eliminate unnecessary assembly code to improve contract readability, reduce complexity, and optimize gas usage. Refactor code to use standard Solidity constructs whenever possible to maintain code consistency and readability.",
        "unchecked-tx-origin solution: Safely handle usage of tx.origin to prevent issues with authentication or authorization. Use alternative authentication mechanisms and avoid relying solely on tx.origin for access control to prevent potential security risks.",
        "unchecked-delegatecall solution: Handle unchecked delegatecall operations carefully to prevent issues with gas usage or unexpected behavior related to delegatecall invocations. Implement proper validation checks and error handling to ensure safe and secure delegatecall operations.",
        "unused-struct-members solution: Remove unused members from structs to improve contract readability, reduce complexity, and optimize gas usage. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete struct members",
        "unused-state solution: Remove unused state variables to improve contract readability, reduce complexity, and optimize gas usage. Conduct regular code reviews and refactorings to identify and eliminate redundant or obsolete state variables.",
        "unsigned-comparison solution: Review and correct unsigned comparisons to prevent issues with logic or unintended consequences. Ensure that comparisons between unsigned integers are performed accurately and consistently to avoid logic errors or vulnerabilities.",
        "uninitialized-variable solution: Initialize variables properly to prevent unpredictable behavior or vulnerabilities related to contract execution or state manipulation. Ensure that all variables are initialized before use to maintain contract integrity and security.",
        "uninitialized-struct solution: Initialize struct variables properly to prevent unpredictable behavior or vulnerabilities related to contract execution or state manipulation. Ensure that all struct fields are initialized before use to maintain contract integrity and security.",
        "unchecked-math solution: Use safe math libraries or functions to perform arithmetic operations securely and prevent issues with integer overflow or underflow. Replace unchecked arithmetic operations with safe alternatives to ensure computational integrity and contract security.",
        "unchecked-cast solution: Avoid unchecked type conversions to prevent issues with data integrity or unintended consequences. Implement proper validation checks and type-safe conversion mechanisms to ensure that type conversions are performed securely and reliably.",
        "unchecked-blockhash solution: Handle blockhash operations carefully to prevent issues with gas usage or unexpected behavior related to blockhash retrieval. Implement proper validation checks and error handling to ensure safe and secure blockhash operations.",
        "unchecked-array-index solution: Implement proper bounds checking for array accesses to prevent out-of-bounds errors or vulnerabilities related to unchecked array indexing. Validate array indices before accessing array elements to ensure data integrity and contract security.",
        "self-destruct-ownership Solution: Secure self-destruct functions to prevent unauthorized contract termination or manipulation of contract ownership. Implement access controls and validation checks to ensure that self-destruct functions can only be called by authorized parties.",
        "Return-Bomb Solution: Mitigate the risk of low-level callees consuming all callers' gas unexpectedly. Implement gas limits or constraints to prevent excessive gas consumption by low-level callees, ensuring that the contract's gas usage remains within acceptable bounds and preventing potential denial-of-service (DoS) attacks.",
        "too-many-digits solution: Ensure adherence to numeric notation best practices by avoiding excessive digits in numerical values. Trim down the number of digits to maintain code readability and conform to standard practices, enhancing maintainability and reducing the likelihood of errors.",
        "immutable-states solution: Declare state variables as immutable where appropriate to prevent unintended modification and ensure data consistency. Immutable variables cannot be altered after initialization, enhancing contract security and reducing the risk of unintentional state changes.",
      ];
      let t;

      //   Object.keys(reportData.findings).map((finding) => {
      //     arr.push(finding);
      //     // if (reportData[finding]) {
      //     //     Vularr.push([finding, reportData[finding]]);
      //     // }
      // });

      if (reportData[1] != null) {
        pdf.addPage();
        [1, 2, 3, 4, 5].map((index) => {
          if (reportData[index] && Object.keys(reportData[index]).length > 0) {
            let headString = "";
            switch (index) {
              case 1:
                headString = "CRITICAL";
                break;
              case 2:
                headString = "MEDIUM";
                break;
              case 3:
                headString = "LOW";
                break;
              case 4:
                headString = "INFORMATIONAL";
                break;
              case 5:
                headString = "OPTIMIZATIONS";
                break;
            }
            // const vulnerabilitiesData = Object.entries(reportData[index]).map(([type, locations]) => [type, locations.join(', ')]);
            const vulnerabilitiesData = Object.entries(reportData[index]).map(
              ([type, locations]) => {
                // Remove "contracts/" prefix from each location string if present
                const cleanedLocations = locations.map((location) =>
                  location.replace(/^contracts\//, "")
                );
                return [type, cleanedLocations.join(", ")];
              }
            );

            vulnerabilitiesData.map((a) => {
              arr.push(a[0]);
            });

            // pdf.autoTable({
            //   head: [[headString, "Locations"]],
            //   body: vulnerabilitiesData,
            //   startY: startY,
            //   styles: { fillColor: [211, 211, 211] },
            //   headStyles: { fillColor: [4, 170, 109] },
            // });
            startY = pdf.previousAutoTable.finalY + 10;
          }
        });

        arr.map((text) => {
          for (let text1 of textArray) {
            if (text1.includes(text)) {
              let x = text1.split(":");
              Vularr.push(x);
            }
          }
        });

        arr.map((text) => {
          for (let text1 of Vulsolution) {
            if (text1.includes(text)) {
              let x = text1.split(":");
              solution.push(x);
            }
          }
        });

        // console.log(arr, "Vulnerabilities Found");
        // console.log(Vularr, "Description");
        // console.log(solution, "Recomended Solution");
        t = solution;
        Vularr.map((sa1) => {
          sa1.push("High");
        });
      }

      let xcod = 15,
        ycod = 55;

      // Function to handle text wrapping
      const handleTextWrapping = (text, maxWidth, x, y) => {
        let words = text.split(" ");
        let line = "";
        let boldFont = "bold"; // Font weight for bold

        for (let i = 0; i < words.length; i++) {
          let testLine = line + words[i] + " ";
          let testWidth =
            pdf.getStringUnitWidth(testLine) * pdf.internal.getFontSize();
          if (testWidth > maxWidth) {
            pdf.text(line, x, y); // Adjust the coordinates as per your requirement
            line = words[i] + " ";
            y = y + 5;
          } else {
            line = testLine;
          }
        }

        // Write remaining text if any
        if (line.trim().length > 0) {
          pdf.text(line, x, y); // Adjust the coordinates as per your requirement
        }
      };
      function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      function removeDashAndCapitalizeFirstWord(str) {
        const words = str.split("-");
        const capitalizedFirstWord = capitalizeFirstLetter(words[0]);
        const restOfWords = words.slice(1).join(" ");
        return capitalizedFirstWord + " " + restOfWords;
      }
      const findings = reportData.findings;
      console.log(findings);

      // Determine the critical level based on findings
      // let criticalLevel = "low";

      // if (findings.high_issues > 7) {
      //   criticalLevel = "high";
      // } else if (findings.medium_issues > 4) {
      //   criticalLevel = "medium";
      // }

      // console.log(criticalLevel);

      // Categorize findings into categories
      const categorizeFindings = (findings) => {
        const categories = [];

        // Define levels based on findings
        const levels = {
          high_issues: "high",
          medium_issues: "medium",
          low_issues: "low",
          informational_issues: "INFORMATIONAL",
          optimization_issues: "OPTIMIZATIONS",
        };

        // Iterate through findings keys
        for (let key in findings) {
          let lowerKey = key.toLowerCase();
          let category = levels[lowerKey];

          if (category) {
            categories.push([category, findings[key]]);
          }
        }

        return categories;
      };

      const categorizedFindings = categorizeFindings(findings);
      console.log(categorizedFindings);

      const vulnerabilityCategories = [
        { name: reportData[1], level: "High" },
        { name: reportData[2], level: "Medium" },
        { name: reportData[3], level: "Low" },
        { name: reportData[4], level: "Informational" },
        { name: reportData[5], level: "Optimizational" },
      ];

      // const getCriticalLevel = (reportData) => {
      //   if (reportData[1]) {
      //     console.log('high');
      //     return 'High';
      //   } else if (reportData[2]) {
      //     console.error('error');
      //     console.log('medium');
      //     return 'Medium';
      //   } else if (reportData[3]) {
      //     console.error('error');
      //     console.log('low');
      //     return 'Low';
      //   } else if (reportData[4]) {
      //     console.error('error');
      //     console.log('info');
      //     return 'Informational';
      //   } else if (reportData[5]) {
      //     console.error('error');
      //     console.log('opti');
      //     return 'Optimization';
      //   } else {
      //     return 'Unknown'; // Default case if none of the keys are present
      //   }
      // };
      // const B = getCriticalLevel(reportData);

      for (let a of arr) {
        let category = vulnerabilityCategories.find((category) =>
          category.name.hasOwnProperty(a)
        );
        let p = [removeDashAndCapitalizeFirstWord(a), category.level];
        pdf.setFontSize(18); // Change font size to 18
        pdf.setFont("times", "bold"); // Set font to bold
        pdf.text("Vulnerabilities Details", 75, 19);

        pdf.setFont("times", "normal");
        pdf.setFontSize(14);

        Vularr.map((arr1) => {
          if (arr1[0].includes(a)) {
            arr1[0] = removeDashAndCapitalizeFirstWord(arr1[0]);

            pdf.autoTable({
              startY: 35,
              head: [["Vulnerability Found", "Critical Level"]], // Empty header row
              body: [p],
              styles: {
                fillColor: [211, 211, 211],
                cellPadding: 5,
                fontSize: 9,
              },
              headStyles: {
                fillColor: [4, 170, 109],
                cellPadding: 5, // Increase row height by setting cellPadding
                fontSize: 10,
                // columnStyles: {
                //   0: { columnWidth: 100 }, // Set a fixed width for the first column
                //   1: { columnWidth: 150 }, // Set a fixed width for the second column
                // },
              },
            });
            pdf.setFontSize(18);
            pdf.setFont("times", "bold");
            pdf.text("Description", 15, 145);
            pdf.setFont("times", "normal");
            pdf.setFontSize(12);
            handleTextWrapping(arr1[1], 520, 15, 155);
          }
        });

        solution.map((sol) => {
          if (sol[0].includes(a)) {
            pdf.setFontSize(18);
            pdf.setFont("times", "bold");
            pdf.text("Recommended Solution", 15, 225);
            // pdf.text(sol[1], 15, 135);
            pdf.setFont("times", "normal");
            pdf.setFontSize(12);
            handleTextWrapping(sol[1], 520, 15, 235);
          }
        });

        pdf.addImage(logo, "JPEG", 10, 11, 10, 10);
        pdf.setFontSize(13);
        pdf.setFont("times", "bold");
        pdf.text("SecureDApp", 21, 19);
        pdf.text(date, 170, 20);
        pdf.setDrawColor(0, 128, 0);
        pdf.line(10, linePositionY, 200, linePositionY);
        pdf.setDrawColor(0, 128, 0);
        pdf.line(10, 270, 200, 270);
        pdf.setFontSize(10);
        pdf.setFont("times", "bold");
        pdf.setTextColor(100, 100, 100);
        pdf.text(date, 175, 275);
        pdf.text("SecureDapp", 10, 275);
        pdf.setFont("times", "normal");
        pdf.text(
          "235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,",
          10,
          280,
          null,
          null,
          "left"
        );
        pdf.text(
          "Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
          10,
          285,
          null,
          null,
          "left"
        );
        pdf.text("hello@securedapp.in", 10, 290, null, null, "left");
        pdf.addPage();
      }

      // Vulnerabilities Found Description and Solution Pages end

      // Disclaimer and Contact Us
      // pdf.setFontSize(12);
      // pdf.text('Disclaimer', 10, 35);

      pdf.setFontSize(18);
      pdf.setFont("times", "bold"); // Set font to bold
      pdf.text("Disclaimer", 82, 35);

      const disclaimerData = [
        [
          "Purpose",
          "This audit report is provided for informational purposes only",
        ],
        [
          "Scope",
          "The audit was performed based on the state of the software at the time of the audit and may not reflect its current state or any subsequent changes.",
        ],
        [
          "Limitations",
          "While every effort has been made to ensure the accuracy and completeness of this report, no guarantee is made that all vulnerabilities or issues have been identified. Security audits do not guarantee complete system security.",
        ],
        [
          "Recommendations",
          "The recommendations provided in this report are based on the best judgment of SecureDApp's security professionals. Implementation of these recommendations is at the discretion of the software's maintainers.",
        ],
        [
          "Responsibility",
          "It remains the responsibility of the software's maintainers and users to ensure its security and proper functionality. SecureDApp does not accept any liability for any damage or loss caused due to overlooked vulnerabilities or misinterpretations in this report.",
        ],
      ];

      pdf.autoTable({
        head: [["Topic", "Description"]],
        body: disclaimerData,
        startY: 40,
        styles: { fillColor: [211, 211, 211] },
        headStyles: { fillColor: [4, 170, 109] },
      });

      // pdf.setFontSize(12);
      // pdf.text('Contact Us', 10, pdf.previousAutoTable.finalY + 20);

      pdf.setFontSize(18);
      pdf.setFont("times", "bold"); // Set font to bold
      pdf.text("Contact Us", 82, pdf.previousAutoTable.finalY + 20);

      const contactData = [
        ["Email", "hello@securedapp.in"],
        ["Phone", "9606015868"],
        [
          "Address",
          "SecureDApp Solutions Pvt. Ltd. 235, 2nd & 3rd Floor,13th Cross Rd, Indira Nagar II Stage,Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
        ],
        ["Website", "securedapp.io"],
        ["Business Hours", "Monday to Friday, 9 AM - 6 PM IST"],
      ];

      pdf.autoTable({
        head: [["", ""]],
        body: contactData,
        startY: pdf.previousAutoTable.finalY + 25,
        styles: { fillColor: [211, 211, 211] },
        headStyles: { fillColor: [4, 170, 109] },
      });

      pdf.addImage(logo, "JPEG", 10, 11, 10, 10);
      pdf.setFontSize(13);
      pdf.setFont("times", "bold");
      pdf.text("SecureDApp", 21, 19);
      pdf.text(date, 170, 20);
      pdf.setDrawColor(0, 128, 0);
      pdf.line(10, linePositionY, 200, linePositionY);
      pdf.setFontSize(10);
      pdf.line(10, 270, 200, 270);
      pdf.setFontSize(10);
      pdf.setFont("times", "bold");
      pdf.setTextColor(100, 100, 100);
      pdf.text(date, 175, 275);
      pdf.text("SecureDapp", 10, 275);
      pdf.setFont("times", "normal");
      pdf.text(
        "235, 2nd & 3rd Floor, 13th Cross Rd, Indira Nagar II Stage,",
        10,
        280,
        null,
        null,
        "left"
      );
      pdf.text(
        "Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
        10,
        285,
        null,
        null,
        "left"
      );
      pdf.text("hello@securedapp.in", 10, 290, null, null, "left");
      pdf.save("Securedapp_SolidityShield_Report.pdf");
      console.log("PDF generation completed");
      console.log(pdf);
      return pdf;
      alert("downloaded");
      // console.log(24);
    } catch (e) {
      alert(e);
      console.log("error: ", e);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        pauseOnHover
      />

      <div
        style={{
          ...blurryDivStyle,
          marginTop: "100px",
        }}
        className="lg:pt-[110px] pt-[0px] py-[60px]    "
      >
        {showsendotp && (
          <>
            <div className="flex justify-center items-center mt-[50px] lg:px-0 md:px-[50px] px-[20px]">
              {/* <SectionHeader content={"Enter Email : Verify OTP : SCAN"} /> */}
            </div>

            <form>
              <div className="flex md:flex-row flex-col gap-4 min-w-full justify-between mt-[30px] px-[80px]">
                <div className="md:w-2/6 w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder-text-white placeholder-[16px] placeholder-font-sans p-3 placeholder-px-2 text-white"
                    // onChange={handleEmailChange}
                    onBlur={handleEmailChange}
                  />
                </div>
                <div className="md:w-1/6">
                  <button
                    type="button"
                    onClick={() => {
                      sendOTP();
                    }}
                    className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase text-[#000000]"
                  >
                    Send OTP
                  </button>
                </div>
              </div>
            </form>
          </>
        )}

        {showverify && (
          <>
            <div className="flex justify-center items-center mt-[50px] lg:px-0 md:px-[50px] px-[20px]">
              <SectionHeader content={"Enter Email : Verify OTP : SCAN"} />
            </div>

            <form>
              <div className="flex md:flex-row flex-col gap-4 min-w-full justify-between mt-[30px] px-[80px]">
                <div className="md:w-2/6 w-full">
                  <input
                    type="number"
                    placeholder="Enter 4 Digit OTP"
                    className="md:w-5/6 w-full bg-transparent rounded-[20px] border placeholder-text-white placeholder-[16px] placeholder-font-sans p-3 placeholder-px-2 text-white"
                    onChange={(e) => {
                      setenterotp(e.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/6">
                  <button
                    type="button"
                    onClick={() => {
                      verifyOTP();
                    }}
                    className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase text-[#000000]"
                  >
                    Verify OTP
                  </button>
                </div>
              </div>
            </form>
          </>
        )}

        {showFileUpload && (
          <>
            <div className="flex justify-center items-center mt-[50px] lg:px-0 md:px-[50px] px-[20px]">
              <SectionHeader content={"Select Smart Contract"} />
            </div>

            <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
              <div className="flex md:flex-row flex-col gap-4 min-w-full justify-between mt-[30px] px-[80px]">
                <div className="md:w-1/5 w-full ">
                  <select
                    value={inputTypes}
                    onChange={handleInputTypeChange}
                    style={{ backgroundColor: "black" }}
                    className="md:w-11/12 w-full border text-white rounded-[20px] p-3  file-input-info:text-white"
                  >
                    <option className="text-white" value="">
                      Select Source
                    </option>
                    <option className="text-white" value="github">
                      GitHub
                    </option>
                    <option className="text-white" value="etherscan">
                      Contract Address
                    </option>
                    <option className="text-white" value="file">
                      Upload File
                    </option>
                  </select>
                </div>

                {inputTypes.includes("github") && (
                  <div className="md:w-2/6 w-full ">
                    <input
                      type="text"
                      className="md:w-11/12 w-full border rounded-[20px] p-3 text-white file-input-info:text-white"
                      placeholder="Enter Github Url of Flatten Smart Contract"
                      style={{ backgroundColor: "black" }}
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                    />
                  </div>
                )}

                {inputTypes.includes("etherscan") && (
                  <div className="md:w-2/6 w-full ">
                    <select
                      value={chain}
                      onChange={handleChain}
                      style={{ backgroundColor: "black" }}
                      className="md:w-11/12 w-full border text-white rounded-[20px] p-3  file-input-info:text-white"
                    >
                      <option className="text-white" value="">
                        Select Chain
                      </option>
                      <option className="text-white" value="0">
                        Ethereum Mainnet
                      </option>
                      <option className="text-white" value="1">
                        Sepolia
                      </option>
                      <option className="text-white" value="2">
                        Polygon Mainnet
                      </option>
                      <option className="text-white" value="3">
                        Polygon Amoy
                      </option>
                    </select>
                  </div>
                )}

                {inputTypes.includes("etherscan") && (
                  <div className="md:w-2/6 w-full ">
                    <input
                      type="text"
                      className="md:w-11/12 w-full border rounded-[20px] p-3 text-white file-input-info:text-white"
                      placeholder="Enter Contract Address"
                      style={{ backgroundColor: "black" }}
                      value={etherscanUrl}
                      onChange={(e) => setEtherscanUrl(e.target.value)}
                    />
                  </div>
                )}

                {inputTypes.includes("file") && (
                  <div className="md:w-2/6 w-full ">
                    <input
                      type="file"
                      accept=".sol"
                      className="md:w-11/12 w-full border rounded-[20px] p-3 text-white file-input-info:text-white"
                      onChange={handleFileChange}
                    />
                  </div>
                )}

                <div className="md:w-1/6 w-full">
                  <input
                    type="text"
                    placeholder="Company Name"
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="md:w-11/12 w-full border rounded-[20px] p-3 text-white file-input-info:text-white"
                    style={{ backgroundColor: "black" }}
                  />
                </div>

                <div className="md:w-1/6">
                  <button
                    type="submit"
                    className="md:w-4/6 bg-[#12D576] rounded-[20px] p-3 uppercase text-[#000000]"
                  >
                    SCAN
                  </button>
                </div>
              </div>
            </form>
          </>
        )}

        {showScanResult && <ScanResult />}

        {showPlans && (
          <>
            <HistorySection />

            <Plans />
          </>
        )}
      </div>
    </>
  );
};

export default SolidityShield0;
