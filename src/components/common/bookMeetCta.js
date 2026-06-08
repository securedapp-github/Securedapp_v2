import React, { useState, useEffect } from "react";

const BookMeetCta = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const size = isMobile ? 56 : 68;

  const wrapperStyle = {
    position: "fixed",
    right: isMobile ? "16px" : "24px",
    bottom: isMobile ? "16px" : "24px",
    width: size,
    height: size,
    zIndex: 9999,
  };

  const buttonStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 10px 24px rgba(16, 185, 129, 0.35), 0 0 0 2px rgba(255,255,255,0.08) inset",
    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <div style={wrapperStyle} className="group">
      <button
        onClick={() =>
          window.open("https://calendar.app.google/DwaR8QDDAotwnafu5")
        }
        aria-label="Schedule a meeting"
        style={buttonStyle}
        className="hover:scale-110 hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(16,185,129,0.5),_0_0_0_2px_rgba(255,255,255,0.15)_inset]"
      >
        <svg
          width={isMobile ? 24 : 28}
          height={isMobile ? 24 : 28}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))" }}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </svg>
      </button>

      {/* Premium Hover Tooltip */}
      <div
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 scale-95 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 bg-[#030b1a] text-slate-100 text-xs font-semibold py-2 px-3.5 rounded-xl border border-emerald-500/30 shadow-2xl whitespace-nowrap"
        style={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5), 0 0 15px rgba(16, 185, 129, 0.1)",
        }}
      >
        Book a Meeting
      </div>
    </div>
  );
};

export default BookMeetCta;

