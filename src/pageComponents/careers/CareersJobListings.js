"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Filter,
  Sparkles,
  Award,
  Share2,
  TrendingUp,
  Code2,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { toast } from "react-toastify";
import { initialJobs, careersConfig } from "../../data/careersData";

const quickSkills = [
  "React / Next.js",
  "Python",
  "Canva",
  "Cold Outreach",
  "DSA",
  "Social Media",
  "REST APIs",
  "CRM",
];

const departmentTheme = {
  Marketing: {
    badgeBg: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border-emerald-500/30",
    glowBorder: "group-hover:border-emerald-500/40",
    accentIcon: Sparkles,
  },
  "Sales & BD": {
    badgeBg: "bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/30",
    glowBorder: "group-hover:border-amber-500/40",
    accentIcon: TrendingUp,
  },
  Engineering: {
    badgeBg: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border-cyan-500/30",
    glowBorder: "group-hover:border-cyan-500/40",
    accentIcon: Code2,
  },
};

const CareersJobListings = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState(initialJobs[0]?.id || null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedJobId, setCopiedJobId] = useState(null);

  // Derive department list with count
  const departments = useMemo(() => {
    const counts = { All: initialJobs.length };
    initialJobs.forEach((job) => {
      counts[job.department] = (counts[job.department] || 0) + 1;
    });
    return Object.keys(counts).map((dept) => ({
      name: dept,
      count: counts[dept],
    }));
  }, []);

  // Filter jobs based on selected filters and search query
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchDept = selectedDept === "All" || job.department === selectedDept;
      const matchLoc =
        selectedLocation === "All" ||
        job.location.toLowerCase().includes(selectedLocation.toLowerCase());
      
      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.shortSummary.toLowerCase().includes(query) ||
        job.requirements.some((req) => req.toLowerCase().includes(query)) ||
        (job.niceToHave && job.niceToHave.some((nth) => nth.toLowerCase().includes(query)));

      return matchDept && matchLoc && matchSearch;
    });
  }, [selectedDept, selectedLocation, searchQuery]);

  const toggleJob = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(careersConfig.applicationEmail);
    setCopiedEmail(true);
    toast.success(`Copied ${careersConfig.applicationEmail} to clipboard!`);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleShareRole = (e, job) => {
    e.stopPropagation();
    const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/careers#${job.slug}` : "";
    if (navigator.clipboard && shareUrl) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedJobId(job.id);
      toast.success(`Link for "${job.title}" copied!`);
      setTimeout(() => setCopiedJobId(null), 2500);
    }
  };

  const getMailtoUrl = (jobTitle) => {
    const subject = `Application for ${jobTitle} - [Your Name]`;
    const body = `Hello SecureDApp Careers Team,

I am writing to apply for the position of "${jobTitle}" (100% Remote, Performance-Based Stipend) at SecureDApp.

Candidate Information:
• Full Name: 
• Phone / Telegram: 
• Current City / Country: 
• Portfolio / GitHub / LinkedIn: 
• Attached: Resume / CV (PDF)

Why I am a strong fit for this track:
[Please briefly describe your relevant background, projects, or work samples]

Thank you for your consideration.

Best regards,
`;
    return `mailto:${careersConfig.applicationEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const getWhatsAppUrl = (jobTitle) => {
    const text = `Hi SecureDApp Careers Team, I would like to inquire about applying for the ${jobTitle} role.`;
    return `https://wa.me/${careersConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      text
    )}`;
  };

  const clearFilters = () => {
    setSelectedDept("All");
    setSelectedLocation("All");
    setSearchQuery("");
  };

  return (
    <section id="open-roles" className="py-20 relative border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-3">
            Active Openings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-slate-900 dark:text-white">
            Explore Open Tracks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-nunitoSans leading-relaxed">
            Choose your track below. Each position is 100% remote with 2 available openings and a performance-based stipend.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="mb-10 p-5 sm:p-7 rounded-3xl pro-glass-card shadow-lg">
          {/* Search Input */}
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
            <input
              type="text"
              placeholder="Search by role title, keyword, or skill (e.g. Next.js, Python, Canva, Cold Outreach)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-20 py-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 shadow-inner transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 font-semibold transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Skill Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6 pb-5 border-b border-slate-200/60 dark:border-slate-800/80">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
              Popular Tags:
            </span>
            {quickSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => setSearchQuery(skill)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  searchQuery.toLowerCase() === skill.toLowerCase()
                    ? "bg-emerald-500 text-slate-950 font-bold shadow-xs"
                    : "bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          {/* Department Pills and Workplace Mode Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Department tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline-block">
                Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept.name}
                  type="button"
                  onClick={() => setSelectedDept(dept.name)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedDept === dept.name
                      ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {dept.name} ({dept.count})
                </button>
              ))}
            </div>

            {/* Workplace mode buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline-block">
                Mode:
              </span>
              {["All", "Remote"].map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedLocation === loc
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Listings Count & Clear indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-1">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Showing <span className="font-bold text-slate-900 dark:text-white">{filteredJobs.length}</span>{" "}
            {filteredJobs.length === 1 ? "track" : "tracks"}{" "}
            <span className="text-emerald-500 font-semibold">• 2 Openings available per track (6 Total Positions)</span>
          </p>
          {(selectedDept !== "All" || selectedLocation !== "All" || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-bold text-emerald-500 hover:text-emerald-400 hover:underline self-start sm:self-auto"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Roles Accordion List */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl pro-glass-card border-dashed">
            <Briefcase className="w-12 h-12 mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              No matching positions found
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
              We couldn&apos;t find any roles matching your current search criteria. Try resetting filters or submit an open application.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredJobs.map((job, jIdx) => {
              const isExpanded = expandedJobId === job.id;
              const theme = departmentTheme[job.department] || departmentTheme.Marketing;
              const DepartmentIcon = theme.accentIcon || Sparkles;

              return (
                <div
                  id={job.slug}
                  key={job.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900/90 ${
                    isExpanded
                      ? "border-emerald-500/70 shadow-xl shadow-emerald-500/5 ring-1 ring-emerald-500/30"
                      : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                  }`}
                >
                  {/* Collapsible Card Header */}
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="p-6 sm:p-8 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <div className="flex-1">
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-extrabold text-slate-400 mr-1">
                          #{jIdx + 1}
                        </span>

                        {/* Department Badge */}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${theme.badgeBg}`}>
                          <DepartmentIcon className="w-3.5 h-3.5" />
                          <span>{job.department}</span>
                        </span>

                        {/* Openings Pill */}
                        {job.openings && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-bold shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                            <span>{job.openings}</span>
                          </span>
                        )}

                        {/* Remote badge */}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                          <span>{job.location}</span>
                        </span>

                        <span className="text-slate-300 dark:text-slate-700">•</span>

                        {/* Type badge */}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.type}</span>
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl sm:text-2xl font-bold font-outfit text-slate-900 dark:text-white">
                        {job.title}
                      </h3>

                      {!isExpanded && (
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 font-nunitoSans leading-relaxed">
                          {job.shortSummary}
                        </p>
                      )}
                    </div>

                    {/* Quick CTA Actions */}
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = getMailtoUrl(job.title);
                        }}
                        className="px-5 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500 text-emerald-500 dark:text-emerald-400 hover:text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-xs"
                      >
                        Quick Apply
                      </button>

                      <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Card Details (Single-Page Drawer) */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 border-t border-slate-100 dark:border-slate-800/80 pt-6 animate-drawer">
                      {/* Overview */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 mb-2">
                          Role Overview
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed font-nunitoSans">
                          {job.overview}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {job.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-nunitoSans"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-500 dark:text-cyan-400 mb-3">
                          Requirements & Qualifications
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {job.requirements.map((req, qIdx) => (
                            <li
                              key={qIdx}
                              className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-nunitoSans"
                            >
                              <span className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Nice-to-haves / Preferred */}
                      {job.niceToHave && job.niceToHave.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-500 dark:text-purple-400 mb-3">
                            {job.niceToHaveTitle || "Preferred"}
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {job.niceToHave.map((nth, nIdx) => (
                              <li
                                key={nIdx}
                                className="p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400 font-nunitoSans"
                              >
                                <span className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0" />
                                <span>{nth}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Compensation Highlight Card */}
                      <div className="mb-8 p-5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 flex items-center justify-center shrink-0">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                              Compensation Model
                            </span>
                            <div className="text-base font-extrabold text-slate-900 dark:text-white">
                              {job.salaryRange}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md sm:text-right font-medium">
                          {job.compensationNote || "Performance-based monthly stipend with high growth potential"}
                        </div>
                      </div>

                      {/* Interactive Apply Actions Footer */}
                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* Primary Apply via Email button */}
                          <a
                            href={getMailtoUrl(job.title)}
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Apply via Email (Pre-filled)</span>
                          </a>

                          {/* WhatsApp / Phone Chat button */}
                          <a
                            href={getWhatsAppUrl(job.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm flex items-center justify-center gap-2 transition-all"
                          >
                            <MessageCircle className="w-4 h-4 text-emerald-500" />
                            <span>Inquire on WhatsApp</span>
                          </a>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          {/* Share Role link */}
                          <button
                            type="button"
                            onClick={(e) => handleShareRole(e, job)}
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all"
                            title="Share Role Link"
                          >
                            {copiedJobId === job.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Link Copied</span>
                              </>
                            ) : (
                              <>
                                <Share2 className="w-3.5 h-3.5" />
                                <span>Share</span>
                              </>
                            )}
                          </button>

                          {/* Copy email button */}
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all"
                          >
                            {copiedEmail ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-500" />
                                <span>Copied Email</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Email</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareersJobListings;
