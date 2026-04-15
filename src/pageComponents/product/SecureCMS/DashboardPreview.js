"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LuActivity as Activity, LuDatabase as Database, LuCheckCircle as CheckCircle, LuBarChart3 as BarChart3, LuFingerprint as Fingerprint } from 'react-icons/lu';

const DashboardPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Command Your Data</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Experience the power of a fully integrated central dashboard for real-time compliance monitoring.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="perspective-1000 transform-3d max-w-5xl mx-auto bg-secondary rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80">
          {/* Mock Header */}
          <div className="h-14 bg-white/5 border-b border-white/10 flex items-center px-6 gap-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="h-7 w-full max-w-md bg-black/40 rounded mx-auto flex items-center px-4 border border-white/5">
              <span className="text-[10px] text-gray-500 font-mono tracking-wider italic">securecms.app / control-panel / overview</span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-6 md:p-10 grid md:grid-cols-3 gap-6 bg-black/20">

            {/* Main Center Panel (occupies 2 cols) */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/5 p-6 border border-white/10 rounded-xl shadow-inner backdrop-blur-md">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="font-semibold text-white flex items-center gap-3">
                    <Activity className="w-5 h-5 text-tertiary animate-pulse" /> Live Data Exfiltration Scans
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-tertiary bg-tertiary/10 px-3 py-1 rounded-full border border-tertiary/20 tracking-widest">Monitoring Active</span>
                </div>
                {/* Fake Graph */}
                <div className="h-44 flex items-end justify-between gap-1.5 w-full">
                  {[30, 45, 20, 60, 80, 50, 40, 90, 100, 70, 50, 85, 40, 20, 50, 75, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      className="w-full bg-gradient-to-t from-tertiary/20 to-tertiary rounded-t-sm"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 border border-white/10 rounded-xl shadow-inner flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 mb-2 font-bold">Total Consents Logged</span>
                    <span className="text-2xl font-bold font-mono text-white">1.4B+</span>
                  </div>
                  <Database className="w-8 h-8 text-blue-400 opacity-20" />
                </div>
                <div className="bg-white/5 p-6 border border-white/10 rounded-xl shadow-inner flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 mb-2 font-bold">Audit Trail Delay</span>
                    <span className="text-2xl font-bold font-mono text-tertiary">14ms</span>
                  </div>
                  <BarChart3 className="w-8 h-8 text-tertiary opacity-20" />
                </div>
              </div>
            </div>

            {/* Sidebar Feed */}
            <div className="bg-white/5 p-6 border border-white/10 rounded-xl shadow-inner flex flex-col h-full backdrop-blur-md">
              <h3 className="font-semibold text-white flex items-center gap-3 mb-8">
                <Fingerprint className="w-5 h-5 text-blue-400" /> System Activity
              </h3>

              <div className="space-y-4 flex-1 overflow-hidden relative">
                {/* Activity log items */}
                {[
                  { region: "IND/MH", id: "usr_9kx2", time: "2s ago", status: "Verified" },
                  { region: "IND/KA", id: "req_mc8f", time: "14s ago", status: "Verified" },
                  { region: "IND/DL", id: "tok_pz4l", time: "32s ago", status: "Rejected" },
                  { region: "IND/TN", id: "usr_4nt1", time: "45s ago", status: "Verified" },
                  { region: "IND/WB", id: "usr_7yt2", time: "1m ago", status: "Verified" }
                ].map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-center justify-between bg-black/40 p-4 rounded-xl border border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      {log.status === "Verified" ? (
                        <CheckCircle className="w-4 h-4 text-tertiary" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-red-500 flex items-center justify-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-xs font-mono text-white tracking-tighter">{log.id}</span>
                        <span className="text-[10px] font-bold text-gray-500">{log.region}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 font-mono italic">{log.time}</span>
                  </motion.div>
                ))}

                {/* Fade overlay for bottom items */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-secondary/80 to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
