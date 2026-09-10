import React from "react";
import { Timeline } from "./ui/timeline";
import { FileText, Database, UsersRound, ShieldCheck } from "lucide-react";

export function TimelineDemo({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const data = [
    {
      title: "01 — Drop in the SDK",
      icon: <FileText className="w-6 h-6 text-[#10b981]" />,
      subtitle: "One line of code to deploy",
      description: "One line of code to deploy our multi-language consent banner on web, iOS, and Android.",
    },
    {
      title: "02 — Capture & Hash",
      icon: <Database className="w-6 h-6 text-[#10b981]" />,
      subtitle: "India-based data centers",
      description: "User consent is cryptographically hashed and stored in India-based data centers.",
    },
    {
      title: "03 — User Self-Service",
      icon: <UsersRound className="w-6 h-6 text-[#10b981]" />,
      subtitle: "Branded user portal",
      description: "Users get a branded portal to view, modify, or revoke their consent without emailing support.",
    },
    {
      title: "04 — Export Audit Logs",
      icon: <ShieldCheck className="w-6 h-6 text-[#10b981]" />,
      subtitle: "Instant regulatory reports",
      description: "Generate instant PDF/CSV reports for the Data Protection Board with one click.",
    },
  ];

  return (
    <div className="w-full bg-transparent font-['Plus_Jakarta_Sans',sans-serif]">
      <Timeline data={data} theme={theme} />
    </div>
  );
}
