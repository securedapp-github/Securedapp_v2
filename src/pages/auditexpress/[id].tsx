'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Correct usage for dynamic routing in Next.js
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar';
import { motion, useAnimation } from "framer-motion";
import { calculateSecurityScore, AuditReport } from './utils/calculateSecurityScore';
import scan from '../../AuditExpress/assets/scan.png';
import Image from 'next/image';
import Sales from '../../AuditExpress/components/Sales';
import Footer from '../../components/footer/footer';

type ScanDetails = {
  id: number;
  company_name: string;
  contract_name: string;
  address: string;
  blockchain: string;
  vulnerabilities: { type: string; reason: string }[];
};

const ScanPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Correct way to access dynamic route parameters in Next.js

  const [scanDetails, setScanDetails] = useState<ScanDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState<number>(100);
  const controls = useAnimation();

  useEffect(() => {
    const fetchScanDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.post('http://localhost:8000/getScanByIdAE', { id });

        if (response.status === 200) {
          setScanDetails(response.data);
        } else {
          setError('Failed to fetch scan details.');
        }
      } catch (err) {
        setError('An error occurred while fetching scan details.');
      }

      setLoading(false);
    };

    if (id) {
      fetchScanDetails();
    }
  }, [id]);

  useEffect(() => {
    if (scanDetails) {
      // Prepare the audit report structure
      const vulnerabilityCount = scanDetails.vulnerabilities.reduce(
        (acc, vuln) => {
          const type = vuln.type.toLowerCase();
          if (type === 'high') acc.high += 1;
          else if (type === 'medium') acc.medium += 1;
          else acc.easy += 1;
          return acc;
        },
        { high: 0, medium: 0, easy: 0 } as { high: number; medium: number; easy: number }
      );

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
    return <p className='text-center mt-5'>Loading...</p>;
  }

  if (error) {
    return <p className='text-center text-red-500 mt-5'>{error}</p>;
  }

  if (!scanDetails) {
    return <p className='text-center mt-5'>No details available.</p>;
  }

  return (
    <div className="container bg-custom-bg mx-auto p-5 bg-[#011A3B] text-white rounded-lg shadow-lg">
      <Navbar />
      <button
        className='flex items-center mt-20 text-blue-400 font-bold text-xl mb-5'
        onClick={() => router.back()}
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>
      <div className='flex justify-between mx-10'>
        <div>
          <button>
            <span className='text-2xl' id='poppins-semibold'>{scanDetails.address}</span>
          </button>
          <p>
            <span className="text-lg text-gray-400" id='poppins-medium'>{scanDetails.blockchain}</span>
          </p>
        </div>
        <div>
          <button className='text-green-500 underline text-2xl'>View on Blockscout</button>
        </div>
      </div>

      <div className='flex justify-between mx-20 my-10'>
        <div className='border border-gray-50 w-80 h-24 flex justify-between px-10 rounded-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl' id='poppins-medium'>Security Score</p>
              <p className='text-2xl' id='poppins-medium'>{score.toFixed(2)}/100</p>
            </div>
          </div>

          <div className='flex items-center'>
            <motion.div
              initial={{ value: 0 }}
              animate={controls}
              onUpdate={(latest) => setScore(latest.value)} // Update progress dynamically
            >
              <CircularProgressbar 
                className='w-10 h-10' 
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
        <div className='border border-gray-50 w-80 h-24 flex justify-between px-10 rounded-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl' id='poppins-medium'>Scan duration</p>
              <p className='text-2xl' id='poppins-medium'>3 secs</p>
            </div>
          </div>
          <div className='flex items-center'>
            <CircularProgressbar 
              className='w-10 h-10' 
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
        <div className='border border-gray-50 w-80 h-24 flex justify-between px-10 rounded-full'>
          <div className='flex justify-center items-center'>
            <div>
              <p className='text-2xl' id='poppins-medium'>Lines of code</p>
              <p className='text-2xl' id='poppins-medium'>194</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <div className='border border-gray-50 mx-32 flex justify-between px-10 rounded-full'>
          <div className='flex items-center my-4' id='poppins-semibold'>
            <CircularProgressbar 
              className='w-32 bg-white rounded-full' 
              text={`${score.toFixed(2)}%`} 
              value={score} 
              maxValue={100} 
              styles={buildStyles({ 
                pathColor: '#12D576', 
                textColor: '#000000', 
                backgroundColor:"#ffffff", 
                trailColor: '#d6d6d6', 
                textSize: '20px' 
              })} 
            />
          </div>
          <div className='flex justify-center items-center'>
            <div className='ml-20'>
              <p className='text-2xl my-2' id='poppins-semibold'>Your Security Score is {getScoreDescription(score)}</p>
              <p className='text-xl my-2' id='poppins-medium'>
                The SolidityScan score is calculated based on lines of code and weights assigned to each issue depending on the severity and confidence. 
                To improve your score, view the detailed result and leverage the remediation solutions provided.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='border-dashed border border-gray-50 mx-32 my-10 py-6 flex justify-between px-10 rounded-full'>
      <div className='flex gap-10 items-center'>
        <div>
          <Image src={scan} height={0} width={0} alt="scan"/>
        </div>
        <div className='w-8/12'>
          <p className='text-xl' id='poppins-regular'>This audit report has not been verified by the SolidityScan team. To learn more about our published reports. <button id='poppins-semibold'>click here</button></p>
        </div>
      </div>
      </div>

      <div className='grid grid-cols-3 gap-10 items-center mx-40'>
        <div className='space-y-8 my-3' id='poppins-semibold'>
            <div className='border border-gray-100 hover:border-green-500 cursor-default px-7 py-7 w-80 rounded-full'>
              <p className='text-2xl text-center'>Critical : 0 </p>
            </div>
            <div className='border border-gray-100 hover:border-green-500 cursor-default px-7 py-7 w-80 rounded-full'>
              <p className='text-2xl text-center'>High : 0 </p>
            </div>
            <div className='border border-gray-100 hover:border-green-500 cursor-default px-7 py-7 w-80 rounded-full'>
              <p className='text-2xl text-center'>Medium : 0 </p>
            </div>
        </div>
        <div>
          <CircularProgressbar maxValue={100} className='h-80 w-80 ' counterClockwise={true} value={100}/>
        </div>
        <div className='space-y-8 my-3' id='poppins-semibold'>
            <div className='border border-gray-100 hover:border-green-500 cursor-default px-7 py-7 w-80 rounded-full'>
              <p className='text-2xl text-center'>Low : 0 </p>
            </div>
            <div className='border border-gray-100 hover:border-green-500 cursor-default px-7 py-7 w-80 rounded-full'>
              <p className='text-2xl text-center'>Informational : 0 </p>
            </div>
            <div className='border border-gray-100 hover:border-green-500 cursor-default px-7 py-7 w-80 rounded-full'>
              <p className='text-2xl text-center'>Gas : 0 </p>
            </div>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <div className='flex justify-center border border-green-500 hover:scale-105 transform transition duration-150 ease-in-out rounded-3xl w-4/12 shadow-2xl shadow-green-800 backdrop:opacity-15'>
          <button className='text-3xl text-green-500 px-6 py-5' id='poppins-bold'>
          View Audit Report PDF
          </button>
        </div>
      </div>
      <Sales/>
      <Footer/>
    </div>
  );
};

const getScoreDescription = (score: number): string => {
  if (score >= 80) return 'EXCELLENT';
  if (score >= 60) return 'GOOD';
  if (score >= 40) return 'AVERAGE';
  return 'POOR';
};

export default ScanPage;
