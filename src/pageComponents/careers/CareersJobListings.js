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
    badgeBg: "bg-[#00d2ff]/10 text-[#0088cc] dark:text-[#00d2ff] border-[#00d2ff]/30",
    glowBorder: "group-hover:border-[#00d2ff]/40",
    accentIcon: Sparkles,
  },
  "Sales & BD": {
    badgeBg: "bg-[#12D576]/10 text-[#0f9f59] dark:text-tertiary border-tertiary/30",
    glowBorder: "group-hover:border-tertiary/40",
    accentIcon: TrendingUp,
  },
  Engineering: {
    badgeBg: "bg-[#8B5CF6]/10 text-[#7C3AED] dark:text-[#DDD6FE] border-[#8B5CF6]/30",
    glowBorder: "group-hover:border-[#8B5CF6]/40",
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

I am writing to apply for the position of "${jobTitle}" (Hybrid, Performance-Based Stipend) at SecureDApp.

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
    <section id="open-roles" className="py-20 relative border-b border-cardBorderColorLight dark:border-cardBorderColorDark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#12D576]/10 border border-[#12D576]/25 text-[#0f9f59] dark:text-[#00ff88] text-xs font-semibold tracking-wide uppercase mb-3 font-outfit">
            Active Openings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-secondary dark:text-primary">
            Explore Open Tracks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-[#a0a5b1] font-nunitoSans leading-relaxed">
            Choose your track below. Each position is hybrid with 2 available openings and a performance-based stipend.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="mb-10 p-5 sm:p-7 rounded-3xl pro-glass-card shadow-lg">
          {/* Search Input */}
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#12D576]" />
            <input
              type="text"
              placeholder="Search by role title, keyword, or skill (e.g. Next.js, Python, Canva, Cold Outreach)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-20 py-3.5 rounded-2xl bg-white dark:bg-[#001938]/80 border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#12D576]/40 focus:border-[#12D576] shadow-inner transition-all font-nunitoSans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs px-2.5 py-1 rounded-lg bg-cardBackgroundLight dark:bg-cardBackgroundDark text-secondary dark:text-primary hover:opacity-80 font-semibold transition-colors cursor-pointer font-nunitoSans"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Skill Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6 pb-5 border-b border-cardBorderColorLight dark:border-cardBorderColorDark">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1 font-outfit">
              Popular Tags:
            </span>
            {quickSkills.map((skill) => (
              <button
                key={skill}
                type="button"
                onClick={() => setSearchQuery(skill)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer font-nunitoSans ${
                  searchQuery.toLowerCase() === skill.toLowerCase()
                    ? "bg-tertiary text-secondary font-bold shadow-xs"
                    : "bg-cardBackgroundLight dark:bg-cardBackgroundDark border border-cardBorderColorLight dark:border-cardBorderColorDark text-slate-600 dark:text-[#a0a5b1] hover:text-secondary dark:hover:text-primary"
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
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline-block font-outfit">
                Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept.name}
                  type="button"
                  onClick={() => setSelectedDept(dept.name)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer font-nunitoSans ${
                    selectedDept === dept.name
                      ? "bg-tertiary text-secondary shadow-md shadow-tertiary/20"
                      : "bg-cardBackgroundLight dark:bg-cardBackgroundDark border border-cardBorderColorLight dark:border-cardBorderColorDark text-slate-600 dark:text-[#a0a5b1] hover:text-secondary dark:hover:text-primary"
                  }`}
                >
                  {dept.name} ({dept.count})
                </button>
              ))}
            </div>

            {/* Workplace mode buttons */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1 hidden sm:inline-block font-outfit">
                Mode:
              </span>
              {["All", "Hybrid"].map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-nunitoSans ${
                    selectedLocation === loc
                      ? "bg-secondary dark:bg-primary text-primary dark:text-secondary shadow-xs font-bold"
                      : "bg-cardBackgroundLight dark:bg-cardBackgroundDark border border-cardBorderColorLight dark:border-cardBorderColorDark text-slate-600 dark:text-[#a0a5b1] hover:text-secondary dark:hover:text-primary"
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
          <p className="text-sm font-medium text-slate-500 dark:text-[#a0a5b1] font-nunitoSans">
            Showing <span className="font-bold text-secondary dark:text-primary font-outfit">{filteredJobs.length}</span>{" "}
            {filteredJobs.length === 1 ? "track" : "tracks"}{" "}
            <span className="text-[#0f9f59] dark:text-[#00ff88] font-semibold">• 2 Openings available per track (6 Total Positions)</span>
          </p>
          {(selectedDept !== "All" || selectedLocation !== "All" || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-bold text-[#0f9f59] dark:text-[#00ff88] hover:underline self-start sm:self-auto cursor-pointer font-nunitoSans"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Roles Accordion List */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl pro-glass-card border-dashed">
            <Briefcase className="w-12 h-12 mx-auto text-slate-400 mb-4" />
            <h3 className="text-lg font-bold text-secondary dark:text-primary mb-2 font-outfit">
              No matching positions found
            </h3>
            <p className="text-sm text-slate-500 dark:text-[#a0a5b1] max-w-md mx-auto mb-6 font-nunitoSans">
              We couldn&apos;t find any roles matching your current search criteria. Try resetting filters or submit an open application.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-5 py-2.5 rounded-xl bg-tertiary text-secondary font-bold text-sm hover:opacity-90 transition-colors shadow-md shadow-tertiary/20 cursor-pointer font-nunitoSans"
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
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-white dark:bg-[#031B34]/90 ${
                    isExpanded
                      ? "border-tertiary/70 shadow-xl shadow-tertiary/10 ring-1 ring-tertiary/30"
                      : "border-cardBorderColorLight dark:border-cardBorderColorDark hover:border-tertiary/40 shadow-sm"
                  }`}
                >
                  {/* Collapsible Card Header */}
                  <div
                    onClick={() => toggleJob(job.id)}
                    className="p-6 sm:p-8 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-5 hover:bg-[#D2E6FF1F] dark:hover:bg-[#FFFFFF0A] transition-colors"
                  >
                    <div className="flex-1">
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 mr-1 font-outfit">
                          #{jIdx + 1}
                        </span>

                        {/* Department Badge */}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold font-outfit ${theme.badgeBg}`}>
                          <DepartmentIcon className="w-3.5 h-3.5" />
                          <span>{job.department}</span>
                        </span>

                        {/* Openings Pill */}
                        {job.openings && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00d2ff]/15 border border-[#00d2ff]/30 text-[#0088cc] dark:text-[#00d2ff] text-xs font-bold shadow-xs font-outfit">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-ping" />
                            <span>{job.openings}</span>
                          </span>
                        )}

                        {/* Location badge */}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-[#a0a5b1] font-nunitoSans">
                          <MapPin className="w-3.5 h-3.5 text-[#12D576]" />
                          <span>{job.location}</span>
                        </span>

                        <span className="text-slate-300 dark:text-slate-700">•</span>

                        {/* Type badge */}
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-[#a0a5b1] font-nunitoSans">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{job.type}</span>
                        </span>
                      </div>

                      {/* Job Title */}
                      <h3 className="text-xl sm:text-2xl font-bold font-outfit text-secondary dark:text-primary">
                        {job.title}
                      </h3>

                      {!isExpanded && (
                        <p className="mt-2 text-sm text-slate-600 dark:text-[#a0a5b1] line-clamp-2 font-nunitoSans leading-relaxed">
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
                        className="px-5 py-2.5 rounded-xl bg-tertiary/15 hover:bg-tertiary text-[#0f9f59] dark:text-tertiary hover:text-secondary font-bold text-xs sm:text-sm transition-all border border-tertiary/30 shadow-xs cursor-pointer font-nunitoSans"
                      >
                        Quick Apply
                      </button>

                      <div className="w-10 h-10 rounded-2xl bg-cardBackgroundLight dark:bg-cardBackgroundDark flex items-center justify-center text-secondary dark:text-primary transition-colors border border-cardBorderColorLight dark:border-cardBorderColorDark">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-tertiary" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Card Details (Single-Page Drawer) */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 border-t border-cardBorderColorLight dark:border-cardBorderColorDark pt-6 animate-drawer">
                      {/* Overview */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f9f59] dark:text-tertiary mb-2 font-outfit">
                          Role Overview
                        </h4>
                        <p className="text-slate-700 dark:text-[#cbd5e1] text-sm sm:text-base leading-relaxed font-nunitoSans">
                          {job.overview}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f9f59] dark:text-tertiary mb-3 font-outfit">
                          Key Responsibilities
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {job.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className="p-3.5 rounded-xl bg-cardBackgroundLight dark:bg-[#001938]/60 border border-cardBorderColorLight dark:border-cardBorderColorDark flex items-start gap-3 text-sm text-secondary dark:text-primary font-nunitoSans"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#12D576] shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="mb-8">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#00d2ff] mb-3 font-outfit">
                          Requirements & Qualifications
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {job.requirements.map((req, qIdx) => (
                            <li
                              key={qIdx}
                              className="p-3.5 rounded-xl bg-cardBackgroundLight dark:bg-[#001938]/60 border border-cardBorderColorLight dark:border-cardBorderColorDark flex items-start gap-3 text-sm text-secondary dark:text-primary font-nunitoSans"
                            >
                              <span className="w-2 h-2 rounded-full bg-[#00d2ff] mt-2 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Nice-to-haves / Preferred */}
                      {job.niceToHave && job.niceToHave.length > 0 && (
                        <div className="mb-8">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#8B5CF6] dark:text-[#DDD6FE] mb-3 font-outfit">
                            {job.niceToHaveTitle || "Preferred"}
                          </h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {job.niceToHave.map((nth, nIdx) => (
                              <li
                                key={nIdx}
                                className="p-3.5 rounded-xl bg-cardBackgroundLight dark:bg-[#001938]/60 border border-cardBorderColorLight dark:border-cardBorderColorDark flex items-start gap-3 text-sm text-slate-600 dark:text-[#a0a5b1] font-nunitoSans"
                              >
                                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] mt-2 shrink-0" />
                                <span>{nth}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Compensation Highlight Card */}
                      <div className="mb-8 p-5 rounded-2xl bg-cardBackgroundLight dark:bg-cardBackgroundDark border border-cardBorderColorLight dark:border-cardBorderColorDark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#12D576]/15 text-[#12D576] dark:text-[#00ff88] flex items-center justify-center shrink-0">
                            <Award className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-outfit">
                              Compensation Model
                            </span>
                            <div className="text-base font-extrabold text-secondary dark:text-primary font-outfit">
                              {job.salaryRange}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-500 dark:text-[#a0a5b1] max-w-md sm:text-right font-medium font-nunitoSans">
                          {job.compensationNote || "Performance-based monthly stipend with high growth potential"}
                        </div>
                      </div>

                      {/* Interactive Apply Actions Footer */}
                      <div className="pt-6 border-t border-cardBorderColorLight dark:border-cardBorderColorDark flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* Primary Apply via Email button */}
                          <a
                            href={getMailtoUrl(job.title)}
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#12D576] via-[#00ff88] to-[#00d2ff] hover:opacity-95 text-secondary font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-tertiary/20 transition-all font-nunitoSans cursor-pointer"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Apply via Email (Pre-filled)</span>
                          </a>

                          {/* WhatsApp / Phone Chat button */}
                          <a
                            href={getWhatsAppUrl(job.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3.5 rounded-xl bg-cardBackgroundLight dark:bg-cardBackgroundDark hover:bg-[#D2E6FF4D] dark:hover:bg-[#FFFFFF26] border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary font-semibold text-sm flex items-center justify-center gap-2 transition-all font-nunitoSans cursor-pointer"
                          >
                            <MessageCircle className="w-4 h-4 text-[#12D576] dark:text-[#00ff88]" />
                            <span>Inquire on WhatsApp</span>
                          </a>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          {/* Share Role link */}
                          <button
                            type="button"
                            onClick={(e) => handleShareRole(e, job)}
                            className="px-4 py-3 rounded-xl bg-cardBackgroundLight dark:bg-cardBackgroundDark hover:bg-[#D2E6FF4D] dark:hover:bg-[#FFFFFF26] border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary text-xs font-semibold flex items-center gap-2 transition-all font-nunitoSans cursor-pointer"
                            title="Share Role Link"
                          >
                            {copiedJobId === job.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#12D576] dark:text-[#00ff88]" />
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
                            className="px-4 py-3 rounded-xl bg-cardBackgroundLight dark:bg-cardBackgroundDark hover:bg-[#D2E6FF4D] dark:hover:bg-[#FFFFFF26] border border-cardBorderColorLight dark:border-cardBorderColorDark text-secondary dark:text-primary text-xs font-semibold flex items-center gap-2 transition-all font-nunitoSans cursor-pointer"
                          >
                            {copiedEmail ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#12D576] dark:text-[#00ff88]" />
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
