"use client";
import { useState, ChangeEvent } from "react";

type UploadType = "etherscan" | "github" | "file";

export default function fetchContract() {
  const [uploadType, setUploadType] = useState<UploadType>("etherscan");
  const [inputValue, setInputValue] = useState<string | File>(""); // Now handles both string (URL) and File (for file upload)
  const [contract, setContract] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch contract source from Etherscan using the API
  const fetchContractFromEtherscan = async (addressOrUrl: string) => {
    try {
      const apiKey = "HSCU35TU2C6H937X9SN6K5KDW1YA26HN8U"; // Replace with your actual API key

      // Extract the contract address if a full Etherscan URL is provided
      let contractAddress = addressOrUrl;

      // Check if the input is a URL
      if (addressOrUrl.includes("etherscan.io")) {
        // Split the URL by "/token/" to get the contract address
        const parts = addressOrUrl.split("/token/");
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

  // Function to fetch contract source from GitHub
  const fetchContractFromGitHub = async (repoUrl: string) => {
    try {
      // Ensure the URL is a GitHub URL
      if (!repoUrl.includes("github.com")) {
        throw new Error("Invalid GitHub URL");
      }

      let rawUrl = repoUrl;

      // Handle common GitHub URL types and convert them to raw content format
      if (repoUrl.includes("/blob/main/") || repoUrl.includes("/blob/master/")) {
        // Convert /blob/ URL to raw.githubusercontent.com for main or master branches
        rawUrl = repoUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
      } else if (repoUrl.includes("/tree/main/") || repoUrl.includes("/tree/master/")) {
        // Convert /tree/ URL to raw.githubusercontent.com (for directories - this can be extended to handle directory listings)
        rawUrl = repoUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/tree/", "/");
      } else if (repoUrl.includes("/blob/")) {
        // Handle any other branch names in /blob/ URLs
        rawUrl = repoUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
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

  // Function to read the contract content from an uploaded file
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

  // Main function to handle contract fetching
  const fetchContract = async () => {
    setLoading(true);
    setError(null);
    setContract(null);

    try {
      let result: string | null = null;

      if (uploadType === "etherscan" && typeof inputValue === "string") {
        result = await fetchContractFromEtherscan(inputValue);
      } else if (uploadType === "github" && typeof inputValue === "string") {
        result = await fetchContractFromGitHub(inputValue);
      } else if (uploadType === "file" && inputValue instanceof File) {
        result = await fetchContractFromFile(inputValue);
      }

      if (result) {
        setContract(result);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Handle input change for URL or file
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (uploadType === "file") {
      if (e.target.files && e.target.files[0]) {
        setInputValue(e.target.files[0]);
      }
    } else {
      setInputValue(e.target.value);
    }
  };

  return (
    <div className="bg-gray-900 text-green-300 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl mb-6">Upload Contract</h1>

      <div className="mb-4">
        <label className="block text-lg mb-2">Select Upload Type:</label>
        <select
          value={uploadType}
          onChange={(e) => setUploadType(e.target.value as UploadType)}
          className="bg-gray-800 text-green-300 p-2 rounded"
        >
          <option value="etherscan">Etherscan Link</option>
          <option value="github">GitHub Link</option>
          <option value="file">Upload File</option>
        </select>
      </div>

      {uploadType === "file" ? (
        <div className="mb-4">
          <label className="block text-lg mb-2">Upload Contract File:</label>
          <input
            type="file"
            onChange={handleInputChange}
            className="p-2 rounded bg-gray-800 text-green-300"
          />
        </div>
      ) : (
        <div className="mb-4">
          <label className="block text-lg mb-2">
            Paste {uploadType === "etherscan" ? "Etherscan" : "GitHub"} Link:
          </label>
          <input
            type="text"
            value={typeof inputValue === "string" ? inputValue : ""}
            onChange={handleInputChange}
            placeholder={`Enter ${uploadType === "etherscan" ? "Etherscan" : "GitHub"} URL`}
            className="p-2 rounded bg-gray-800 text-green-300 w-full"
          />
        </div>
      )}

      <button
        onClick={fetchContract}
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded mt-4"
        disabled={loading}
      >
        {loading ? "Fetching..." : "Fetch Contract"}
      </button>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      {contract && (
        <div className="mt-6 w-full">
          <h2 className="text-2xl mb-4">Fetched Contract:</h2>
          <pre className="bg-gray-800 p-4 rounded text-green-300 overflow-auto">
            {contract}
          </pre>
        </div>
      )}
    </div>
  );
}
