"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  Lock,
  RefreshCw,
  Bell,
  Sliders,
  Database,
  ArrowRight,
  AlertTriangle,
  Clock,
  Sparkles,
  Zap,
  ShieldAlert,
  UserCheck,
  UserX,
  Cpu,
  GraduationCap
} from "lucide-react";

export default function InteractiveEdTechConsentSimulator() {
  const [activeTab, setActiveTab] = useState("ageGate"); // "ageGate", "trackingBan", "parentPortal", "age18"
  const [learnerAge, setLearnerAge] = useState(15);
  const [parentVerified, setParentVerified] = useState(false);
  const [counselorCallsOptIn, setCounselorCallsOptIn] = useState(false);
  const [parentSmsOptIn, setParentSmsOptIn] = useState(true);
  const [proctoringOptIn, setProctoringOptIn] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);

  const isMinor = learnerAge < 18;

  const handleVerifyParent = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setParentVerified(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-outfit text-secondary dark:text-white">
            Verifiable Parental Consent & Child Data Protection Engine
          </h3>
          <p className="text-xs sm:text-sm text-labelGray dark:text-gray-300 font-nunitoSans mt-1">
            Simulate Section 9 minor gating, DigiLocker parent verification, Section 9(3) tracking ban, and age-18 transitions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "ageGate", label: "Age Gate & VPC", icon: <UserCheck className="w-4 h-4" /> },
            { id: "trackingBan", label: "Sec 9(3) Tracking Ban", icon: <ShieldAlert className="w-4 h-4" /> },
            { id: "parentPortal", label: "Parent Preference Hub", icon: <Sliders className="w-4 h-4" /> },
            { id: "age18", label: "Age-18 Transition", icon: <GraduationCap className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold font-outfit transition-all ${
                activeTab === tab.id
                  ? "bg-tertiary text-secondary shadow-md"
                  : "bg-gray-100 dark:bg-white/5 text-secondary dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* Tab 1: Age Gate & VPC */}
        {activeTab === "ageGate" && (
          <motion.div
            key="ageGate"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-5 sm:p-6 space-y-5">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-white/10 pb-3">
                <span className="text-xs font-bold font-mono text-tertiary uppercase">Learner Sign-Up Simulation</span>
                <span className="text-xs font-bold text-secondary dark:text-white">Section 9(1) Compliance</span>
              </div>

              {/* Age Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-secondary dark:text-white">
                  <span>Learner Declared Age:</span>
                  <span className="font-mono text-tertiary text-sm">{learnerAge} Years Old</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="24"
                  value={learnerAge}
                  onChange={(e) => {
                    setLearnerAge(Number(e.target.value));
                    setParentVerified(false);
                  }}
                  className="w-full accent-[#12D576] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-labelGray dark:text-gray-400 font-mono">
                  <span>10 (Primary)</span>
                  <span>15 (Class 10)</span>
                  <span>18 (Majority Line)</span>
                  <span>24 (Higher Ed)</span>
                </div>
              </div>

              {/* Dynamic Status Banner */}
              {isMinor ? (
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Minor Detected (&lt;18 Years) — Verifiable Parental Consent (VPC) Required</span>
                  </div>
                  <p className="text-xs text-amber-800 dark:text-amber-400 font-nunitoSans leading-relaxed">
                    Under DPDP Section 9(1) and Rule 10, self-declaration check-boxes are invalid. The platform must route to an identifiable adult via DigiLocker token or OTP.
                  </p>

                  <div className="pt-2 border-t border-amber-500/20">
                    {parentVerified ? (
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Parent Identity Verified (DigiLocker Token #VPC-98214-IND)</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={handleVerifyParent}
                        disabled={isVerifying}
                        className="px-4 py-2 bg-tertiary text-secondary text-xs font-bold font-outfit rounded-lg hover:opacity-95 transition-all shadow-sm flex items-center gap-2"
                      >
                        {isVerifying ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <span>Simulate Parent DigiLocker Verification</span>}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-xs text-emerald-900 dark:text-emerald-300 space-y-1">
                  <div className="font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Adult Learner (&ge;18 Years) — Direct Affirmative Consent Permitted</span>
                  </div>
                  <p className="text-emerald-800 dark:text-emerald-400 font-nunitoSans">
                    Standard Section 6 notice and consent applies directly to the student. Parental authorization is not mandated.
                  </p>
                </div>
              )}
            </div>

            {/* Right Audit Console */}
            <div className="lg:col-span-5 bg-gray-900 text-white rounded-2xl p-5 border border-white/10 font-mono text-xs flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-tertiary" />
                    <span className="font-bold text-gray-200">Minor Protection Runtime</span>
                  </div>
                  <span className="text-[10px] bg-tertiary/20 text-tertiary px-2 py-0.5 rounded font-bold">
                    {isMinor ? "RULE 10 VPC ACTIVE" : "SECTION 6 ADULT"}
                  </span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex justify-between text-gray-400">
                    <span>Classification:</span>
                    <span className={isMinor ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}>
                      {isMinor ? "Child under Section 2(f)" : "Adult Data Principal"}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>VPC Requirement:</span>
                    <span className="text-gray-200">{isMinor ? "Mandatory (Rule 10)" : "N/A"}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Commercial Ads / Tracking:</span>
                    <span className={isMinor ? "text-red-400 font-bold" : "text-emerald-400"}>
                      {isMinor ? "HARD BLOCKED (Sec 9(3))" : "Permitted with Consent"}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Verification Hash:</span>
                    <span className="text-tertiary">{parentVerified ? "0x7f9a...c3b1 (DigiLocker)" : "Awaiting Parent"}</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 rounded-xl p-3 border border-white/5 text-[10px] text-gray-400 space-y-1">
                <div className="text-tertiary font-bold">Audit Proof Note:</div>
                <div>Statutory penalty under DPDP Act for breach of children's data provisions: Up to ₹200 crore.</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Section 9(3) Tracking Ban */}
        {activeTab === "trackingBan" && (
          <motion.div
            key="trackingBan"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-xs text-amber-900 dark:text-amber-300">
              <strong>Section 9(3) Statutory Rule:</strong> A Data Fiduciary shall not undertake tracking or behavioural monitoring of children or targeted advertising directed at children.
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Permitted: Core Pedagogical Delivery</span>
                </div>
                <div className="space-y-2 text-xs text-labelGray dark:text-gray-300 font-nunitoSans">
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                    <strong>Saving Quiz Scores & Progress:</strong> Essential to course delivery.
                  </div>
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                    <strong>Adaptive Lesson Difficulty:</strong> Allowed within the lesson the parent signed up for.
                  </div>
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                    <strong>Report Card Generation:</strong> Sent to verified parents.
                  </div>
                </div>
              </div>

              <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-red-800 dark:text-red-300">
                  <ShieldAlert className="w-4 h-4 text-red-500" />
                  <span>Blocked: Commercial Tracking & Profiling</span>
                </div>
                <div className="space-y-2 text-xs text-labelGray dark:text-gray-300 font-nunitoSans">
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                    <strong>Cross-App Analytics SDKs:</strong> Denied execution tokens by SecureCMS SDK.
                  </div>
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                    <strong>Retargeting Ad Pixels:</strong> Blocked from firing on minor student profiles.
                  </div>
                  <div className="p-2.5 bg-white dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10">
                    <strong>Commercial Course Upsell Profiling:</strong> Blocked under Section 9(3).
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Parent Preference Hub */}
        {activeTab === "parentPortal" && (
          <motion.div
            key="parentPortal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid lg:grid-cols-12 gap-8 items-start"
          >
            <div className="lg:col-span-7 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-4">
              <div className="border-b border-gray-200 dark:border-white/10 pb-3">
                <h4 className="font-bold text-sm text-secondary dark:text-white">Parent Privacy Control Center</h4>
                <p className="text-xs text-labelGray dark:text-gray-300 font-nunitoSans mt-0.5">
                  Parents can inspect granted permissions and revoke optional items at any time.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                  <div>
                    <div className="text-xs font-bold text-secondary dark:text-white">Counselor & Tele-Sales Calls</div>
                    <div className="text-[11px] text-labelGray dark:text-gray-400">Follow-up calls from academic advisors</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCounselorCallsOptIn(!counselorCallsOptIn)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      counselorCallsOptIn ? "bg-tertiary text-secondary" : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {counselorCallsOptIn ? "Opted-In" : "Revoked"}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                  <div>
                    <div className="text-xs font-bold text-secondary dark:text-white">Online Exam Video Proctoring</div>
                    <div className="text-[11px] text-labelGray dark:text-gray-400">Webcam & screen recording during tests</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setProctoringOptIn(!proctoringOptIn)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      proctoringOptIn ? "bg-tertiary text-secondary" : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {proctoringOptIn ? "Active" : "Disabled"}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-3 text-xs">
              <h4 className="font-bold text-sm text-secondary dark:text-white">Real-Time LMS Synchronization</h4>
              <p className="text-labelGray dark:text-gray-300 font-nunitoSans leading-relaxed">
                When a parent revokes counselor calls, SecureCMS dispatches an instant webhook to your CRM and student calling sheet. The phone number is suppressed from agent queues in sub-100ms.
              </p>
              <div className="p-3 bg-white dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 font-mono text-[11px]">
                <span className="text-tertiary font-bold">LMS Sync:</span> Moodle / Canvas webhook delivered (32ms)
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 4: Age-18 Transition */}
        {activeTab === "age18" && (
          <motion.div
            key="age18"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-gray-50 dark:bg-[#132238] border border-gray-200 dark:border-white/10 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-secondary dark:text-white">
                  Automated 18th-Birthday Transition Engine
                </h4>
                <p className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans">
                  Parental consent cannot legally remain perpetual once a learner becomes an adult.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="text-xs font-bold text-secondary dark:text-white">1. Birthday Detection</div>
                <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-1">
                  SecureCMS policy engine detects learner turning 18 based on registered DOB.
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="text-xs font-bold text-secondary dark:text-white">2. Parental Consent Expiry</div>
                <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-1">
                  Parental consent flags marked as EXPIRED for all non-statutory processing.
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                <div className="text-xs font-bold text-secondary dark:text-white">3. Direct Adult Prompt</div>
                <div className="text-xs text-labelGray dark:text-gray-400 font-nunitoSans mt-1">
                  In-app prompt asks the now-adult learner directly for explicit consent, purpose by purpose.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
