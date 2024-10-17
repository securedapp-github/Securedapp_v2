'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Correct usage for dynamic routing in Next.js
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VulnerabilityPieChart from './utils/VulnerabilityPieChart';
import 'react-circular-progressbar/dist/styles.css';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import { motion, useAnimation } from "framer-motion";
import { calculateSecurityScore, AuditReport } from './utils/calculateSecurityScore';
import scan from '../../AuditExpress/assets/scan.png';
import Image from 'next/image';
import Sales from '../../AuditExpress/components/Sales';
import Footer from '../../components/footer/footer';
import { ClipLoader } from 'react-spinners'; // Importing ClipLoader for loading state

// Updated Type Definitions
type Vulnerability = {
  type: string;
  reason: string;
};

type VulnerabilityCount = {
  gas: number;
  low: number;
  high: number;
  medium: number;
  critical: number;
  informational: number;
};

type ScanDetails = {
  id: number;
  company_name: string;
  contract_name: string;
  source_code: string;
  blockchain: string;
  address: string;
  compiler_version: string;
  score: string;
  vulnerability_count: VulnerabilityCount;
  vulnerabilities: Vulnerability[];
  created_at: string;
};

const ScanPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Correct way to access dynamic route parameters in Next.js

  const [scanDetails, setScanDetails] = useState<ScanDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState<number>(100);
  const [lineCount, setLineCount] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    const fetchScanDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // Ensure 'id' is a string and parse to number
        if (!id || Array.isArray(id)) {
          throw new Error('Invalid scan ID.');
        }

        const idNumber = parseInt(id, 10);
        if (isNaN(idNumber)) {
          throw new Error('Invalid scan ID format.');
        }

        const response = await axios.post('https://139-59-5-56.nip.io:3443/getScanByIdAE', { id: idNumber });
        console.log('Fetch Response:', response);

        if (response.status === 200) {
          const fetchedData: ScanDetails = response.data;

          if (!fetchedData || !fetchedData.source_code) {
            throw new Error('Scan data is incomplete.');
          }

          setScanDetails(fetchedData);
          const lines = fetchedData.source_code.split('\n').length;
          setLineCount(lines); // Calculate lines of code
          console.log(`Scan ID ${fetchedData.id}: Number of lines of code: ${lines}`);
        } else {
          setError('Failed to fetch scan details.');
        }
      } catch (err: any) {
        console.error('Error fetching scan details:', err);
        setError(err.message || 'An error occurred while fetching scan details.');
      }

      setLoading(false);
    };

    if (id) {
      fetchScanDetails();
    }
  }, [id]);

  useEffect(() => {
    if (scanDetails) {
      // Prepare the audit report structure using vulnerability_count
      const vulnerabilityCount = {
        critical: scanDetails.vulnerability_count.critical,
        high: scanDetails.vulnerability_count.high,
        medium: scanDetails.vulnerability_count.medium,
        low: scanDetails.vulnerability_count.low,
        informational: scanDetails.vulnerability_count.informational,
        gas: scanDetails.vulnerability_count.gas,
      };

      const auditReport: AuditReport = {
        vulnerabilityCount,
        vulnerabilities: scanDetails.vulnerabilities
      };

      // Calculate the security score
      const calculatedScore = calculateSecurityScore(auditReport);
      setScore(calculatedScore);

      // Animate the progress bar
      controls.start({
        value: calculatedScore,
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [scanDetails, controls]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#1E90FF" size={50} />
      </div>
    );
  }

  if (error) {
    return <p className='text-center text-red-500 mt-5'>{error}</p>;
  }

  if (!scanDetails) {
    return <p className='text-center mt-5'>No details available.</p>;
  }

  return (
    <div className="container mx-auto p-4 bg-[#011A3B] text-white min-h-screen flex flex-col">
      <Navbar />
      {/* <button
        className='flex items-center mt-5 text-blue-400 font-bold text-xl mb-5 sm:mt-10'
        onClick={() => router.back()}
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button> */}
      <div className='flex flex-col md:flex-row justify-between mx-4 sm:mx-10 lg:mx-20 mt-24'>
        <div className="mb-4 md:mb-0">
          <button>
            <span className='text-xl sm:text-2xl' id='poppins-semibold'>{scanDetails.address}</span>
          </button>
          <p>
            <span className="text-md sm:text-lg text-gray-400" id='poppins-medium'>{scanDetails.blockchain}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <button className='text-green-500 underline text-xl sm:text-2xl'>View on Blockscout</button>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between mx-4 sm:mx-10 lg:mx-20 my-5 sm:my-10 space-y-5 md:space-y-0'>
        {/* Security Score */}
        <div className='border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl' id='poppins-medium'>Security Score</p>
            <p className='text-lg sm:text-2xl' id='poppins-medium'>{scanDetails.score}/100</p>
          </div>
          <div className='flex items-center'>
            <motion.div
              initial={{ value: 0 }}
              animate={controls}
              onUpdate={(latest: any) => setScore(latest.value)} 
            >
              <CircularProgressbar 
                className='w-10 h-10 sm:w-12 sm:h-12' 
                value={score} 
                maxValue={100} 
                styles={buildStyles({ 
                  pathColor: '#12D576', 
                  textColor: '#1E90FF', 
                  trailColor: '#d6d6d6', 
                  textSize: '22px' 
                })} 
              />
            </motion.div>
          </div>
        </div>
        {/* Scan Duration */}
        <div className='border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl' id='poppins-medium'>Scan duration</p>
            <p className='text-lg sm:text-2xl' id='poppins-medium'>3 secs</p>
          </div>
          <div className='flex items-center'>
            <CircularProgressbar 
              className='w-10 h-10 sm:w-12 sm:h-12' 
              value={score} 
              maxValue={100} 
              styles={buildStyles({ 
                pathColor: '#12D576', 
                textColor: '#1E90FF', 
                trailColor: '#d6d6d6', 
                textSize: '22px' 
              })} 
            />
          </div>
        </div>
        {/* Lines of Code */}
        <div className='border border-gray-50 w-full md:w-1/3 lg:w-1/4 h-24 flex justify-between px-4 sm:px-10 rounded-full'>
          <div className='flex flex-col justify-center'>
            <p className='text-lg sm:text-2xl' id='poppins-medium'>Lines of code</p>
            <p className='text-lg sm:text-2xl' id='poppins-medium'>{lineCount}</p>
          </div>
        </div>
      </div>

      {/* Security Score Description */}
      <div className='md:flex justify-center items-center md:my-0 my-10 px-4 sm:px-10'>
        <div className='md:border md:border-gray-50 w-full lg:w-10/12 md:flex md:flex-col lg:flex-row justify-between px-4 sm:px-10 py-0 md:rounded-full rounded-lg'>
          <div className='flex justify-center items-center mb-4 lg:mb-0' id='poppins-semibold'>
            <CircularProgressbar 
              className='md:w-60 md:h-60 w-40 h-40 text-white rounded-full' 
              text={`${scanDetails.score}%`} 
              value={scanDetails.score} 
              maxValue={100} 
              styles={buildStyles({
                height: '100%', 
                pathColor: '#12D576', 
                textColor: '#ffffff', 
                backgroundColor:"#ffffff", 
                trailColor: '#d6d6d6', 
                textSize: '20px' 
              })} 
            />
          </div>
          <div className='flex justify-center items-center'>
            <div className='ml-0 lg:ml-10 text-center lg:text-left'>
              <p className='text-xl sm:text-2xl my-2' id='poppins-semibold'>
                Your Security Score is {getScoreDescription(score)}
              </p>
              <p className='text-md sm:text-lg my-2' id='poppins-medium'>
                The SolidityScan score is calculated based on lines of code and weights assigned to each issue depending on the severity and confidence. 
                To improve your score, view the detailed result and leverage the remediation solutions provided.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Audit Report Verification */}
      <div className='md:border-dashed md:border border-gray-50 mx-4 sm:mx-10 lg:mx-32 my-5 sm:my-10 py-6 flex flex-col sm:flex-row justify-between px-4 sm:px-10 rounded-full'>
        <div className='flex gap-4 sm:gap-10 items-center'>
          <div className='flex-shrink-0'>
            <Image src={scan} height={64} width={64} alt="scan" className="rounded-full" />
          </div>
          <div className='w-full sm:w-8/12'>
            <p className='text-md sm:text-xl' id='poppins-regular'>
              This audit report has not been verified by the SolidityScan team. To learn more about our published reports. 
              <button className='text-blue-400 underline ml-1' id='poppins-semibold'>click here</button>
            </p>
          </div>
        </div>
      </div>

      {/* Vulnerability Counts and Pie Chart */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center mx-4 sm:mx-10 lg:mx-40 my-5 sm:my-10'>
        {/* Left Column */}
        <div className='space-y-4 lg:space-y-8' id='poppins-semibold'>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Critical: {scanDetails.vulnerability_count.critical}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>High: {scanDetails.vulnerability_count.high}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Medium: {scanDetails.vulnerability_count.medium}</p>
          </div>
        </div>
        {/* Center Column - Pie Chart */}
        <div className='flex justify-center'>
          <VulnerabilityPieChart scanDetails={scanDetails}/>
        </div>
        {/* Right Column */}
        <div className='space-y-4 lg:space-y-8' id='poppins-semibold'>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Low: {scanDetails.vulnerability_count.low}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Informational: {scanDetails.vulnerability_count.informational}</p>
          </div>
          <div className='border border-gray-100 hover:border-green-500 cursor-default px-4 sm:px-7 py-4 sm:py-7 w-full rounded-full'>
            <p className='text-lg sm:text-2xl text-center'>Gas: {scanDetails.vulnerability_count.gas}</p>
          </div>
        </div>
      </div>

      {/* View Audit Report PDF Button */}
      <div className='flex justify-center my-5 sm:my-10 px-4 sm:px-10'>
        <div className='flex justify-center border border-green-500 hover:scale-105 transform transition duration-150 ease-in-out rounded-3xl w-full sm:w-8/12 lg:w-4/12 shadow-2xl shadow-green-800 backdrop:opacity-15'>
          <button className='text-xl sm:text-3xl text-green-500 px-4 sm:px-6 py-3 sm:py-5' id='poppins-bold'>
            View Audit Report PDF
          </button>
        </div>
      </div>

      {/* Sales and Footer */}
      <Sales/>
      <Footer/>
    </div>
  );
};

// Utility function to get score description
const getScoreDescription = (score: number): string => {
  if (score >= 80) return 'EXCELLENT';
  if (score >= 60) return 'GOOD';
  if (score >= 40) return 'AVERAGE';
  return 'POOR';
};

export default ScanPage;
