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
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [contractAddress, setContractAddress] = useState<string>("");
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>("");
  const [githubURL, setGithubURL] = useState<string>("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [contract, setContract] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSourceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(e.target.value);
    // Clear previous inputs when source changes
    setCompanyName("");
    setContractAddress("");
    setGithubURL("");
    setUploadedFile(null);
    setContract(null);
    setError(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { placeholder, value, files } = e.target;

    if (placeholder === "Company Name") {
      setCompanyName(value);
    } else if (placeholder === "Type or paste your contract address") {
      setContractAddress(value);
    } else if (placeholder === "URL") {
      setGithubURL(value);
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
        return data.result[0].SourceCode;
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

  const handleGetAuditReport = async () => {
    setLoading(true);
    setError(null);
    setContract(null);

    try {
      let result: string | null = null;

      if (selectedSource === "contract_address" && contractAddress) {
        result = await fetchContractFromEtherscan(contractAddress);
      } else if (selectedSource === "github" && githubURL) {
        result = await fetchContractFromGitHub(githubURL);
      } else if (selectedSource === "upload" && uploadedFile) {
        result = await fetchContractFromFile(uploadedFile);
      } else {
        alert("Please fill in the required fields.");
        setLoading(false);
        return;
      }

      if (result) {
        // Optionally, you can check if the content is a Solidity contract by looking for specific keywords
        if (result.includes("pragma solidity")) {
          console.log("Fetched Contract:", result);
          setContract(result);
        } else {
          alert("The fetched content does not appear to be a Solidity contract.");
        }
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="dark:bg-white bg-custom-bg border-e-transparent dark:text-black"
      style={bg}
    >
      <div className="pt-20 font-poppins-regular" id="poppins">
        <div className="flex justify-center">
          <div className="lg:text-4xl text-2xl text-center font-bold lg:flex space-x-3">
            <h1 className="">
              Securedapp <span className="text-green-600">Audit Express</span>
            </h1>
            <div className="lg:flex gap-2 hidden">
              <Image src={star} height={0} width={0} className="h-7 w-7" alt="star" />
              <Image src={star} height={0} width={0} className="h-7 w-7" alt="star" />
              <Image src={star} height={0} width={0} className="h-7 w-7" alt="star" />
              <Image src={star} height={0} width={0} className="h-7 w-7" alt="star" />
              <Image src={star} height={0} width={0} className="h-7 w-7" alt="star" />
            </div>
          </div>
        </div>
        <p className="lg:text-lg text-xs text-center font-semilight my-2">
          Trusted by more than 120+ companies
        </p>
      </div>
      <div id="poppins-regular">
        <p className="text-center lg:px-96 px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center mt-6">
          <div className="lg:w-5/12 w-8/12 relative">
            <select
              className="w-full bg-[#3a3688] border backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-20 rounded-xl px-4 py-3 text-2xl text-white dark:text-black appearance-none"
              onChange={handleSourceChange}
              value={selectedSource}
            >
              <option className="text-black" value="">Select Source</option>
              <option className="text-black" value="contract_address">Contract Address</option>
              <option className="text-black" value="github">GitHub</option>
              <option className="text-black"  value="upload">Upload</option>
            </select>
            <svg
              className="absolute top-1/2 right-4 transform -translate-y-1/2 h-10 w-10 text-white dark:text-black"
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

      <div>
        {selectedSource === "contract_address" && (
          <>
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl flex justify-between px-4 items-center my-6
                py-3 text-gray-200 dark:text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Type or paste your contract address"
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl flex justify-between px-4 items-center my-6
                py-3 text-gray-200 dark:text-gray-800"
                value={contractAddress}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg shadow-2xl bg-opacity-10 rounded-2xl flex justify-center px-4 items-center my-6 py-3 text-gray-200 dark:text-gray-800"
                onClick={openModal}
              >
                {selectedBlockchain || "Select Blockchain"}
              </button>
            </div>
          </>
        )}

        {selectedSource === "github" && (
          <>
            <div className="flex justify-center">
              <input
                placeholder="URL"
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl flex justify-between px-4 items-center my-6
                py-3 text-gray-200 dark:text-gray-800"
                value={githubURL}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl flex justify-between px-4 items-center my-6
                py-3 text-gray-200 dark:text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}

        {selectedSource === "upload" && (
          <>
            <div className="flex justify-center">
              <input
                type="file"
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl flex justify-between px-4 items-center my-6
                py-3 text-gray-200 dark:text-gray-800"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-center">
              <input
                placeholder="Company Name"
                className="lg:w-5/12 text-xl font-light bg-[#3a3688] backdrop-filter backdrop-blur-lg
                shadow-2xl bg-opacity-10 rounded-2xl flex justify-between px-4 items-center my-6
                py-3 text-gray-200 dark:text-gray-800"
                value={companyName}
                onChange={handleInputChange}
              />
            </div>
          </>
        )}
      </div>

      <div className="lg:flex grid grid-cols-2 justify-between lg:px-80 px-10 my-8 lg:gap-0 gap-3
      items-center cursor-context-menu lg:space-x-6 space-y-3">
        <p className="hidden lg:block">Search via tag</p>
        <kbd className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
        hover:border-green-500">
          Token
        </kbd>
        <kbd className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
        hover:border-green-500">
          Defi
        </kbd>
        <kbd className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
        hover:border-green-500">
          smart contract audit
        </kbd>
        <kbd className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
        hover:border-green-500">
          Dao
        </kbd>
        <kbd className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
        hover:border-green-500">
          Dapps
        </kbd>
        <kbd className="border border-gray-200 lg:text-lg text-xs px-4 py-2 rounded-full
        hover:border-green-500">
          DLT
        </kbd>
      </div>

      <div className="flex justify-center text-black text-xl py-4">
        <button
          className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 hover:scale-105
          transform transition"
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
      {contract && (
        <div className="flex justify-center text-green-500">
          <p>Contract fetched successfully! Check the console for details.</p>
        </div>
      )}
      <BlockchainModal isOpen={isModalOpen} onClose={closeModal} onSelect={handleSelectBlockchain} />
    </div>
  );
};

export default Hero;
