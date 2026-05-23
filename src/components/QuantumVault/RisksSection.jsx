import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { risksData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const RisksSection = () => {
  return (
    <section id="risks" className="py-16 md:py-24 bg-transparent">
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center mb-10 md:mb-12">
          <SectionHeader 
            label={risksData.tag} 
            title={risksData.title} 
          />
          <p className="text-center text-secondary/80 dark:text-[#a0a5b1] max-w-3xl mx-auto -mt-4 text-base md:text-lg leading-relaxed">
            {risksData.description}
          </p>
        </div>
        
        {/* Enterprise Risk Factor Card */}
        <div className="relative mt-8 group">
          {/* Card outer glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          
          <div className="relative bg-white dark:bg-[#112240] border border-red-500/20 dark:border-red-500/10 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="bg-red-500/10 p-4 rounded-xl text-red-500 self-start md:self-center">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-3xl md:text-4xl" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-red-500 dark:text-red-400 mb-3 tracking-wide uppercase">
                {risksData.riskFactorTitle}
              </h3>
              <p className="text-secondary/90 dark:text-[#ccd6f6] text-base md:text-lg leading-relaxed italic border-l-2 border-red-500/40 pl-4 py-1">
                "{risksData.riskFactorText}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;
