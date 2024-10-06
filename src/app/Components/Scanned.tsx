import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Use Link from next/link
import Image from 'next/image'; // Next.js Image component
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import binanceImg from '@/assets/chains/ethereum.png';
import { ClipLoader } from 'react-spinners';

type ScanData = {
  id: number;
  blockchain: string;
  companyName: string;
  contractName: string;
  contractAddress: string;
  securityScore: number;
  vulnerabilities: { type: string; reason: string }[];
};

const Scanned = () => {
  const [data, setData] = useState<ScanData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScans = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:8000/getscansAE', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ page }),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        const formattedData: ScanData[] = result.map((scan: { id: any; blockchain: any; company_name: string; contract_name: string; address: any; score: string; vulnerabilities: any; }) => ({
          id: scan.id,
          blockchain: scan.blockchain,
          companyName: scan.company_name.trim(),
          contractName: scan.contract_name.trim(),
          contractAddress: scan.address || '',
          securityScore: parseFloat(scan.score) || 0,
          vulnerabilities: scan.vulnerabilities || [],
        }));

        setData(formattedData); 
        console.log(result.totalPages);
        
        setTotalPages(result.totalPages || 1);
      } catch (error: any) {
        setError(error.message || 'An unexpected error occurred');
      }
      setLoading(false);
    };

    fetchScans();
  }, [page]);

  return (
    <div>
      <div>
        <h1 className='text-4xl text-center pb-7' id='poppins-semibold'>Recent Scanned Contracts</h1>
      </div>
      <div className="overflow-x-auto lg:mx-20 mx-5 my-10">
        {loading ? (
           <div className="flex justify-center items-center">
           <ClipLoader color="#1E90FF" size={50} />
           {/* Alternatively, use a simple CSS spinner */}
           {/* <div className="spinner"></div> */}
         </div>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : data.length === 0 ? (
          <p className='text-center'>No scans available.</p>
        ) : (
          <table className="min-w-full  text-left table-auto">
            <thead className='text-white text-xl'>
              <tr>
                <th className='p-3 text-center'>Blockchain</th>
                <th className='p-3 text-center'>Company Name</th>
                <th className='p-3 text-center'>Contract Name</th>
                <th className='p-3 text-center'>Contract Address</th>
                <th className='p-3 text-center'>Security Score</th>
                <th className='p-3 text-center'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className='border-b'>
                  <td className='p-3 flex justify-center items-center'>
                    <Image
                      className='h-10 w-10'
                      src={binanceImg}
                      alt={`${item.blockchain} logo`}
                      width={40}
                      height={40}
                    />
                    <h1 className='ml-2 text-center'>{item.blockchain}</h1>
                  </td>
                  <td className='p-3 text-center'>{item.companyName}</td>
                  <td className='p-3 text-center'>{item.contractName}</td>
                  <td className='p-3 text-center'>{item.contractAddress}</td>
                  <td className='p-3'>
                    <div className="flex justify-center items-center">
                      <div className='w-10 h-10 mr-3'>
                        <CircularProgressbar
                          value={item.securityScore}
                          maxValue={100}
                          text={`${Math.round(item.securityScore)}%`}
                          styles={buildStyles({
                            pathColor: '#1E90FF',
                            textColor: '#1E90FF',
                            trailColor: '#d6d6d6',
                            textSize: '22px',
                          })}
                        />
                      </div>
                    </div>
                  </td>
                  <td className='p-3 text-center'>
                    <Link href={`/${item.id}`}> {/* Use Link to navigate */}
                      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        View Scan
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Previous
        </button>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Scanned;
