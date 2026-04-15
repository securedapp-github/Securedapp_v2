"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuShare2 as Share2, LuZap as Zap, LuBarChart4 as BarChart4, LuTarget as Target } from 'react-icons/lu';

const integrationCategories = [
  { name: "CRMs", items: ["Salesforce", "HubSpot", "Zendesk"], color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", icon: <Share2 className="w-6 h-6" /> },
  { name: "Analytics", items: ["GA4", "Mixpanel", "Segment"], color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", icon: <BarChart4 className="w-6 h-6" /> },
  { name: "Advertising", items: ["Google Ads", "Meta", "LinkedIn"], color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20", icon: <Target className="w-6 h-6" /> }
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Ecosystem Integrations</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            SecureCMS works where your data lives. Sync user preferences across your entire marketing and data stack automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrationCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 flex flex-col items-center text-center group overflow-hidden rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${cat.bg} border ${cat.border} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-wide uppercase">{cat.name}</h3>

              <div className="flex flex-wrap justify-center gap-2">
                {cat.items.map((item, idy) => (
                  <span key={idy} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-secondary to-[#002a5a] border border-white/10 p-10 rounded-3xl text-center flex flex-col items-center max-w-4xl mx-auto shadow-2xl"
        >
          <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center mb-6 border border-tertiary/20">
            <Zap className="w-6 h-6 text-tertiary" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Built-in Webhooks & Robust APIs</h3>
          <p className="text-gray-400 max-w-2xl text-sm leading-relaxed">
            Our developer-first API and webhook engine allow you to build deep, custom syncs with any backend or third-party platform in minutes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
