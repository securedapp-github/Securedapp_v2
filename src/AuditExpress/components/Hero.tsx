'use client';
import React, { useState, ChangeEvent, useEffect } from "react";
import img from "../assets/grid.png";
import BlockchainModal from "./modal/BlockChainModal";

type Props = {};

const bg = {
  backgroundImage: `url(${img})`,
};

const Hero = (props: Props) => {
  // State Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string>("contract_address"); // Initialize to empty string
  const [companyName, setCompanyName] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>("");
  const [githubURL, setGithubURL] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [contractName, setContractName] = useState<string>("");
  const [isContractNameAutoFilled, setIsContractNameAutoFilled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handlers for Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handler for Source Change
  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(e.target.value);
    // Clear previous inputs when source changes
    setCompanyName("");
    setContractAddress("");
    setGithubURL("");
    setUploadedFile(null);
    setContractName("");
    setSelectedBlockchain("");
    setIsContractNameAutoFilled(false);
    setError(null);
    setSuccessMessage(null);
  };

  // Handler for Input Changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value, files } = e.target;

    switch (placeholder) {
      case "Company Name":
        setCompanyName(value);
        break;
      case "Type or paste your contract address":
        setContractAddress(value);
        break;
      case "URL":
        setGithubURL(value);
        break;
      case "Contract Name":
        if (!isContractNameAutoFilled) {
          setContractName(value);
        }
        break;
      default:
        if (files && files.length > 0) {
          setUploadedFile(files[0]);
        }
        break;
    }
  };

  // Handler for Blockchain Selection
  const handleSelectBlockchain = (name: string) => {
    setSelectedBlockchain(name);
  };

  // Basic Ethereum Address Validation
  const isValidAddress = (address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  // Function to fetch contract from Etherscan
  const fetchContractFromEtherscan = async (addressOrUrl: string) => {
    try {
      const apiKey = "HSCU35TU2C6H937X9SN6K5KDW1YA26HN8U";

      if (!apiKey) {
        throw new Error("Etherscan API key is not set.");
      }

      let contractAddress = addressOrUrl;
      if (addressOrUrl.includes("etherscan.io")) {
        const parts = addressOrUrl.split("/address/");
        if (parts.length > 1) {
          contractAddress = parts[1].split("#")[0]; // Extract contract address before #code part
        } else {
          throw new Error("Invalid Etherscan URL format.");
        }
      }

      if (!isValidAddress(contractAddress)) {
        throw new Error("Invalid Ethereum address format.");
      }

      const url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "1" && data.result.length > 0) {
        return {
          sourceCode: data.result[0].SourceCode,
          address: contractAddress,
          contractName: data.result[0].ContractName,
        };
      } else {
        throw new Error("Contract not found or invalid address.");
      }
    } catch (error) {
      console.error("Error fetching contract from Etherscan:", error);
      throw new Error("Error fetching contract from Etherscan.");
    }
  };

  // Function to fetch contract from GitHub
  const fetchContractFromGitHub = async (repoUrl: string) => {
    try {
      if (!repoUrl.includes("github.com")) {
        throw new Error("Invalid GitHub URL.");
      }

      let rawUrl = repoUrl;

      if (repoUrl.includes("/blob/")) {
        rawUrl = repoUrl.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
      } else if (repoUrl.includes("/tree/")) {
        rawUrl = repoUrl.replace("github.com", "raw.githubusercontent.com").replace("/tree/", "/");
      } else {
        throw new Error("Unsupported GitHub URL format.");
      }

      const response = await fetch(rawUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch contract from GitHub.");
      }

      const content = await response.text();
      console.log("Fetched content from GitHub:", content);

      return content;
    } catch (error) {
      console.error("Error fetching contract from GitHub:", error);
      throw new Error("Error fetching contract from GitHub.");
    }
  };

  // Function to fetch contract from File Upload
  const fetchContractFromFile = async (file: File) => {
    try {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            resolve(e.target.result as string);
          } else {
            reject("Error reading file.");
          }
        };
        reader.readAsText(file);
      });
    } catch (error) {
      console.error("Error reading contract from file:", error);
      throw new Error("Error reading contract from file.");
    }
  };

  // Function to extract compiler version from source code
  const extractCompilerVersion = (sourceCode: string): string | null => {
    const pragmaRegex = /pragma solidity\s+([^;]+);/;
    const match = sourceCode.match(pragmaRegex);
    if (match && match[1]) {
      return match[1].replace("^", "").trim();
    }
    return null;
  };

  // Function to extract contract name from source code (fallback)
  const extractContractName = (sourceCode: string): string | null => {
    const contractRegex = /contract\s+([A-Za-z0-9_]+)/;
    const match = sourceCode.match(contractRegex);
    if (match && match[1]) {
      return match[1].trim();
    }
    return null;
  };

  // Handler for Audit Report Submission
const handleGetAuditReport = async () => {
  setLoading(true);
  setError(null);
  setSuccessMessage(null);

  try {
      let sourceCode: string | null = null;
      let address: string | null = null;
      let extractedContractName: string | null = null;
      let blockchain: string = "";

      // Fetch data based on selected source
      if (selectedSource === "contract_address" && contractAddress) {
          const data = await fetchContractFromEtherscan(contractAddress);
          sourceCode = data.sourceCode;
          address = data.address;
          extractedContractName = data.contractName;

          if (extractedContractName) {
              setContractName(extractedContractName);
              setIsContractNameAutoFilled(true);
          } else {
              // Fallback to extracting from source code if ContractName is not available
              extractedContractName = extractContractName(sourceCode);
              if (extractedContractName) {
                  setContractName(extractedContractName);
              }
          }

          if (!selectedBlockchain) {
              throw new Error("Please select a blockchain.");
          }
          blockchain = selectedBlockchain;
      } else if (selectedSource === "github" && githubURL) {
          sourceCode = await fetchContractFromGitHub(githubURL);
          extractedContractName = contractName; // User input
          if (!extractedContractName) {
              throw new Error("Please enter the Contract Name.");
          }
          blockchain = "via github";
      } else if (selectedSource === "upload" && uploadedFile) {
          sourceCode = await fetchContractFromFile(uploadedFile);
          extractedContractName = contractName; // User input
          if (!extractedContractName) {
              throw new Error("Please enter the Contract Name.");
          }
          blockchain = "via upload";
      } else {
          throw new Error("Please fill in the required fields.");
      }

      // Validate sourceCode
      if (!sourceCode) {
          throw new Error("Source code is empty.");
      }

      // Extract compiler version
      const compilerVersion = extractCompilerVersion(sourceCode);
      if (!compilerVersion) {
          throw new Error("Unable to extract compiler version from source code.");
      }

      // Validate contract name
      if (!extractedContractName) {
          throw new Error("Unable to extract contract name.");
      }

      // Prepare the source code by removing comments and links
      sourceCode = cleanSourceCode(sourceCode);

      // Calculate lines of code
      const linesOfCode = sourceCode.replace(/\r\n/g, "\n").split('\n').length;

      // Prepare JSON data as per the provided format
      const jsonData: any = {
          compiler_version: compilerVersion,
          company_name: companyName,
          contract_name: extractedContractName,
          source_code: sourceCode,
          blockchain: blockchain,
          // lines: linesOfCode, // Send as number
      };

      // Log data for debugging
      console.log("Submitting Audit Report with Data:", JSON.stringify(jsonData, null, 2));

      // Send data to backend
      const response = await fetch("https://139-59-5-56.nip.io:3443/analyzeAE", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
      });

      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`API Error: ${errorText}`);
      }

      const resultData = await response.json();
      console.log("API Response:", resultData);
      setSuccessMessage("Audit report submitted successfully!");
  } catch (err) {
      setError((err as Error).message);
  } finally {
      setLoading(false);
  }
};

// Function to clean the source code by removing comments and URLs
const cleanSourceCode = (sourceCode: string): string => {
  // Remove single-line comments
  let cleanedCode = sourceCode.replace(/\/\/.*$/gm, "");

  // Remove multi-line comments
  cleanedCode = cleanedCode.replace(/\/\*[\s\S]*?\*\//g, "");

  // Remove any lines that contain URLs
  cleanedCode = cleanedCode.replace(/https?:\/\/[^\s]+/g, "");

  // Remove excess whitespace
  cleanedCode = cleanedCode.replace(/\n\s*\n/g, "\n").trim();

  return cleanedCode;
};


  return (
    <div
      className="dark:bg-custom-bg border-e-transparent mt-20 dark:text-white pb-10"
      style={bg}
    >
      {/* Header Section */}
      <div className="pt-20 font-poppins-regular" id="poppins">
        <div className="flex justify-center">
          <div className="lg:text-4xl text-2xl text-center font-bold lg:flex space-x-3">
            <h1>
              Securedapp <span className="text-green-600">Audit Express</span>
            </h1>
            <div className="lg:flex gap-2 hidden">
              {[...Array(5)].map((_, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8 text-yellow-400"
                  key={index}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="lg:text-lg text-xs text-center font-semilight my-2">
          Trusted by more than 120+ companies
        </p>
      </div>

      {/* Description Section */}
      <div id="poppins-regular" className="px-4">
        <p className="text-center lg:px-10 px-10 text-balance">
          Audit Express is a cutting-edge smart contract auditing tool designed to provide developers with a quick and easy assessment of their project's security. Developed by SecureDApp, Audit Express leverages advanced algorithms to identify potential vulnerabilities and bugs within smart contracts. Audit Express gives a clear and concise security score to gain a rapid understanding of your project's vulnerability profile.
        </p>
        <div className="flex justify-center mt-6">
          <div className="lg:w-5/12 w-10/12 relative">
            <select
              className="w-full bg-[#3a3688] border backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20 rounded-xl px-4 py-3 text-2xl text-white dark:text-white appearance-none"
              onChange={handleSourceChange}
              value={selectedSource} // Ensure it reflects the state
            >
              <option className="text-black" value="">
                Select Source
              </option>
              <option className="text-black" value="contract_address">
                Contract Address
              </option>
              <option className="text-black" value="github">
                GitHub
              </option>
              <option className="text-black" value="upload">
                Upload
              </option>
            </select>
            <svg
              className="absolute top-1/2 right-4 transform -translate-y-1/2 h-10 w-10 text-white dark:text-white pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Dynamic Input Fields Based on Selected Source */}
      <div className="mt-8">
        {selectedSource === "contract_address" && (
          <>
            {/* Company Name */}
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Contract Address */}
            <div className="flex justify-center">
              <input
                placeholder="Type or paste your contract address"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={contractAddress}
                onChange={handleInputChange}
              />
            </div>

            {/* Blockchain Selector */}
            <div className="flex justify-center">
              <button
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-800 dark:text-gray-200 flex justify-center items-center"
                onClick={openModal}
              >
                {selectedBlockchain || "Select Blockchain"}
              </button>
            </div>

            {/* Indicate Auto-filled Contract Name */}
            {isContractNameAutoFilled && (
              <div className="flex justify-center">
                <p className="text-sm text-gray-400 mt-1">
                  Contract name fetched from Etherscan.
                </p>
              </div>
            )}
          </>
        )}

        {selectedSource === "github" && (
          <>
            {/* GitHub URL */}
            <div className="flex justify-center">
              <input
                placeholder="URL"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={githubURL}
                onChange={handleInputChange}
              />
            </div>

            {/* Company Name */}
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Contract Name (Manual Input) */}
            <div className="flex justify-center">
              <input
                placeholder="Contract Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={contractName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}

        {selectedSource === "upload" && (
          <>
            {/* File Upload */}
            <div className="flex justify-center">
              <input
                type="file"
                accept=".sol"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                onChange={handleInputChange}
              />
            </div>

            {/* Company Name */}
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Contract Name (Manual Input) */}
            <div className="flex justify-center">
              <input
                placeholder="Contract Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 dark:text-gray-200 text-gray-800"
                value={contractName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center text-black text-xl py-4">
        <button
          className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 hover:scale-105
          transform transition disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleGetAuditReport}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Get Audit Report"}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex justify-center text-red-500">
          <p>{error}</p>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="flex justify-center text-green-500">
          <p>{successMessage}</p>
        </div>
      )}
      <div className="z-50">
      <BlockchainModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelect={handleSelectBlockchain}
        />
        </div>
    </div>
  );
};

export default Hero;
