"use client"
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Scanned from './Components/Scanned';
import Works from './Components/Works';
import Sales from './Components/Sales';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';

type Props = {};


const page = (props: Props) => {
  return (
    <div className='bg-[#011A3B] dark:bg-white dark:text-black overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Scanned/>
      <Works />
      <Sales />
      <Footer />
    </div>
  );
};

export default page;
