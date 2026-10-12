import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';
import { LuArrowRight } from 'react-icons/lu';

const IndustrySectors = ({ industries }) => {
  return (
    <div className="features-section py-12">
      <SectionTitle
        name="Ecosystem"
        title="Consent Architecture by Industry"
        description="Every sector operates under distinct statutory workflows under DPDP Act 2023. Explore dedicated consent architectures, real-time simulators, and audit-ready playbooks."
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => {
            const cardInner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-primary dark:bg-[#1e3255] border border-gray-100 dark:border-white/10 p-6 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-tertiary/40 dark:hover:border-tertiary/50 transition-all rounded-2xl h-full cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-inner transition-all group-hover:scale-105">
                      {industry.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-tertiary group-hover:bg-tertiary/10 transition-colors">
                      <LuArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-secondary dark:text-primary tracking-tight group-hover:text-tertiary transition-colors">
                    {industry.name}
                  </h3>
                  {industry.desc && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                      {industry.desc}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-tertiary">
                  <span>Explore Architecture</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );

            return industry.href ? (
              <Link key={idx} href={industry.href} className="block no-underline">
                {cardInner}
              </Link>
            ) : (
              <div key={idx}>{cardInner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustrySectors;
