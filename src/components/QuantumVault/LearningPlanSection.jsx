import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { learningPlanData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LearningPlanSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="learning-plan" className="py-16 md:py-20 bg-transparent border-t border-secondary/5 dark:border-white/5">
            <div className="w-full max-w-6xl px-4 md:px-8 mx-auto">
                <div className="flex flex-col items-center mb-12">
                    <SectionHeader 
                        label={learningPlanData.tag} 
                        title={learningPlanData.title} 
                    />
                    <p className="text-secondary/70 dark:text-[#a0a5b1] text-center max-w-3xl mt-4 text-[1.1rem]">
                        {learningPlanData.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {learningPlanData.phases.map((phase, idx) => (
                        <div 
                            key={idx} 
                            className={`bg-white dark:bg-[#1e3255] border transition-all duration-300 overflow-hidden rounded-[20px] flex flex-col h-full ${
                                openIndex === idx 
                                ? 'border-[#00ff88]/50 shadow-lg scale-[1.02] z-10 relative' 
                                : 'border-secondary/10 dark:border-white/5 hover:border-[#00ff88]/30 shadow-sm hover:-translate-y-1'
                            }`}
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-[#00ff88] text-sm font-bold tracking-wider uppercase mb-2">
                                    {phase.phase}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-secondary dark:text-white mb-4">
                                    {phase.title}
                                </h3>
                                <p className="text-secondary/70 dark:text-[#a0a5b1] mb-6 flex-grow text-[0.95rem] leading-relaxed">
                                    {phase.desc}
                                </p>
                                
                                <button 
                                    onClick={() => toggleAccordion(idx)}
                                    className="flex items-center gap-2 text-[#00ff88] font-semibold text-sm hover:underline mt-auto w-fit"
                                >
                                    <span>{openIndex === idx ? 'Hide Topics' : 'View Topics'}</span>
                                    <FontAwesomeIcon 
                                        icon={faChevronDown} 
                                        className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} 
                                    />
                                </button>
                            </div>
                            
                            <div 
                                className={`transition-all duration-300 ease-in-out bg-secondary/5 dark:bg-[#15233b] ${
                                    openIndex === idx ? 'max-h-[500px] opacity-100 border-t border-secondary/5 dark:border-white/5' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-8">
                                    <h4 className="text-sm font-bold text-secondary dark:text-white mb-4 uppercase tracking-wide">Key Topics Covered</h4>
                                    <ul className="space-y-3">
                                        {phase.topics.map((topic, tIdx) => (
                                            <li key={tIdx} className="flex items-start gap-3 text-secondary/80 dark:text-[#a0a5b1] text-sm">
                                                <FontAwesomeIcon icon={faCheckCircle} className="text-[#00ff88] mt-1 flex-shrink-0" />
                                                <span>{topic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearningPlanSection;
