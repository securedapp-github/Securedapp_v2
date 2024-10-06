"use client";
import React, { useState, ChangeEvent } from "react";
import img from "@/assets/grid.png";
import star from "@/assets/star.png";
import Image from "next/image";
import BlockchainModal from "./modal/BlockChainModal";

type Props = {};

const bg = {
  backgroundImage: `url(${img})`,
};

const Hero = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState<string>("contract_address");
  const [companyName, setCompanyName] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>("");
  const [githubURL, setGithubURL] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [contractName, setContractName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(e.target.value);
    // Clear previous inputs when source changes
    setCompanyName("");
    setContractAddress("");
    setGithubURL("");
    setUploadedFile(null);
    setContractName("");
    setSelectedBlockchain("");
    setError(null);
    setSuccessMessage(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value, files } = e.target;

    if (placeholder === "Company Name") {
      setCompanyName(value);
    } else if (placeholder === "Type or paste your contract address") {
      setContractAddress(value);
    } else if (placeholder === "URL") {
      setGithubURL(value);
    } else if (placeholder === "Contract Name") {
      setContractName(value);
    } else if (files && files.length > 0) {
      setUploadedFile(files[0]);
    }
  };

  const handleSelectBlockchain = (name: string) => {
    setSelectedBlockchain(name);
  };

  // Functions to fetch contract from Etherscan, GitHub, and File
  const fetchContractFromEtherscan = async (addressOrUrl: string) => {
    try {
      const apiKey = "HSCU35TU2C6H937X9SN6K5KDW1YA26HN8U"; // Replace with your actual API key

      // Extract the contract address if a full Etherscan URL is provided
      let contractAddress = addressOrUrl;

      // Check if the input is a URL
      if (addressOrUrl.includes("etherscan.io")) {
        // Split the URL by "/address/" to get the contract address
        const parts = addressOrUrl.split("/address/");
        if (parts.length > 1) {
          contractAddress = parts[1].split("#")[0]; // Extract contract address before #code part
        } else {
          throw new Error("Invalid Etherscan URL format");
        }
      }

      const url = `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "1" && data.result.length > 0) {
        return {
          sourceCode: data.result[0].SourceCode,
          address: contractAddress,
        };
      } else {
        throw new Error("Contract not found or invalid address");
      }
    } catch (error) {
      console.error("Error fetching contract from Etherscan:", error);
      throw new Error("Error fetching contract from Etherscan");
    }
  };

  const fetchContractFromGitHub = async (repoUrl: string) => {
    try {
      // Ensure the URL is a GitHub URL
      if (!repoUrl.includes("github.com")) {
        throw new Error("Invalid GitHub URL");
      }

      let rawUrl = repoUrl;

      // Handle common GitHub URL types and convert them to raw content format
      if (repoUrl.includes("/blob/")) {
        // Convert /blob/ URL to raw.githubusercontent.com
        rawUrl = repoUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
      } else if (repoUrl.includes("/tree/")) {
        // Convert /tree/ URL to raw.githubusercontent.com
        rawUrl = repoUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/tree/", "/");
      } else {
        throw new Error("Unsupported GitHub URL format");
      }

      // Fetch the raw content from the transformed URL
      const response = await fetch(rawUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch contract from GitHub");
      }

      const content = await response.text();
      return content;
    } catch (error) {
      console.error("Error fetching contract from GitHub:", error);
      throw new Error("Error fetching contract from GitHub");
    }
  };

  const fetchContractFromFile = async (file: File) => {
    try {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            resolve(e.target.result as string);
          } else {
            reject("Error reading file");
          }
        };
        reader.readAsText(file);
      });
    } catch (error) {
      console.error("Error reading contract from file:", error);
      throw new Error("Error reading contract from file");
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

  // Function to extract contract name from source code
  const extractContractName = (sourceCode: string): string | null => {
    const contractRegex = /contract\s+([A-Za-z0-9_]+)/;
    const match = sourceCode.match(contractRegex);
    if (match && match[1]) {
      return match[1].trim();
    }
    return null;
  };

  const handleGetAuditReport = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      let sourceCode: string | null = null;
      let address: string | null = null;

      if (selectedSource === "contract_address" && contractAddress) {
        const data = await fetchContractFromEtherscan(contractAddress);
        sourceCode = data.sourceCode;
        address = data.address;
      } else if (selectedSource === "github" && githubURL) {
        sourceCode = await fetchContractFromGitHub(githubURL);
      } else if (selectedSource === "upload" && uploadedFile) {
        sourceCode = await fetchContractFromFile(uploadedFile);
      } else {
        alert("Please fill in the required fields.");
        setLoading(false);
        return;
      }

      if (sourceCode) {
        // Extract compiler version and contract name
        const compilerVersion = extractCompilerVersion(sourceCode);
        let extractedContractName = contractName;

        if (selectedSource === "contract_address") {
          extractedContractName = extractContractName(sourceCode) || contractName;
        }

        if (!compilerVersion) {
          throw new Error("Unable to extract compiler version from source code.");
        }

        if (!extractedContractName) {
          throw new Error("Unable to extract contract name from source code.");
        }

        // Prepare JSON data
        const jsonData: any = {
          compiler_version: compilerVersion,
          company_name: companyName,
          contract_name: extractedContractName,
          source_code: sourceCode,
        };
        console.log(jsonData);
        

        if (selectedSource === "contract_address") {
          if (!selectedBlockchain) {
            throw new Error("Please select a blockchain.");
          }
          jsonData.blockchain = selectedBlockchain;
          jsonData.address = address;
        }
        console.log(sourceCode);
        

        // Send data to the API
        const response = await fetch("http://localhost:8000/analyzeAE", {
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

        const result = await response.json();
        console.log("API Response:", result);
        setSuccessMessage("Audit report submitted successfully!");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="dark:bg-white bg-custom-bg border-e-transparent dark:text-black min-h-screen"
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-yellow-400">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
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
              className="w-full bg-[#3a3688] border backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20 rounded-xl px-4 py-3 text-2xl text-white dark:text-black appearance-none"
              onChange={handleSourceChange}
              value={selectedSource}
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
              className="absolute top-1/2 right-4 transform -translate-y-1/2 h-10 w-10 text-white dark:text-black pointer-events-none"
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
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Type or paste your contract address"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                value={contractAddress}
                onChange={handleInputChange}
              />
            </div>

            {/* Blockchain Selector */}
            <div className="flex justify-center">
              <button
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800 flex justify-center items-center"
                onClick={openModal}
              >
                {selectedBlockchain || "Select Blockchain"}
              </button>
            </div>
          </>
        )}

        {selectedSource === "github" && (
          <>
            {/* GitHub URL */}
            <div className="flex justify-center">
              <input
                placeholder="URL"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                value={githubURL}
                onChange={handleInputChange}
              />
            </div>

            {/* Company Name */}
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Contract Name */}
            <div className="flex justify-center">
              <input
                placeholder="Contract Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
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
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                onChange={handleInputChange}
              />
            </div>

            {/* Company Name */}
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>

            {/* Contract Name */}
            <div className="flex justify-center">
              <input
                placeholder="Contract Name"
                className="lg:w-5/12 w-8/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl px-4 my-4 py-3 text-gray-200 dark:text-gray-800"
                value={contractName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
      </div>

      <div className="lg:flex lg:justify-center grid grid-cols-2 lg:px-80 px-10 my-8 lg:gap-0 gap-3 items-center cursor-default lg:space-x-6 space-y-3">
        <p className="hidden lg:block">Search via tag</p>
        {["Token", "Defi", "smart contract audit", "Dao", "Dapps", "DLT"].map((tag, index) => (
          <kbd
            key={index}
            className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
            hover:border-green-500 cursor-pointer"
          >
            {tag}
          </kbd>
        ))}
      </div>

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

      {error && (
        <div className="flex justify-center text-red-500">
          <p>{error}</p>
        </div>
      )}

      {successMessage && (
        <div className="flex justify-center text-green-500">
          <p>{successMessage}</p>
        </div>
      )}
      <BlockchainModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelect={handleSelectBlockchain}
      />
    </div>
  );
};

export default Hero;
