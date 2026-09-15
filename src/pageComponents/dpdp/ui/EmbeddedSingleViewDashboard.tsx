import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Webhook,
  Clock,
  Plus,
  Send,
  MessageSquare,
  ChevronRight,
  X,
  Bell,
  Globe,
  FileText,
  Search,
  Check,
  Copy,
  LogOut,
  ExternalLink
} from 'lucide-react';

export function EmbeddedSingleViewDashboard({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<any | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Interactive Engine v2.0 State
  const [engineTab, setEngineTab] = useState('dsar');

  // Interactive mock data
  const [clients, setClients] = useState([
    { id: 'cli_8923a1f4', name: 'Web Store App', type: 'OAuth 2.0 SPA', scope: 'consent:read, dsr:write', status: 'Active', created: '2026-08-10' },
    { id: 'cli_4410b9c2', name: 'Mobile Companion', type: 'Native Mobile', scope: 'consent:write', status: 'Active', created: '2026-08-11' },
  ]);

  const [consents, setConsents] = useState([
    { id: 'cns_1092', user: 'user_882@example.com', purpose: 'Marketing & Analytics', status: 'Granted', version: 'v2.1', date: '2026-08-12 19:40' },
    { id: 'cns_1093', user: 'alex.dev@corp.io', purpose: 'Essential Cookies', status: 'Granted', version: 'v1.0', date: '2026-08-12 20:15' },
    { id: 'cns_1094', user: 'sam.smith@tech.net', purpose: 'Third-party Sharing', status: 'Revoked', version: 'v2.0', date: '2026-08-11 14:02' },
  ]);

  const [webhooks, setWebhooks] = useState([
    { id: 'wh_5510', url: 'https://api.myapp.com/webhooks/consent-events', events: ['consent.granted', 'consent.revoked'], status: 'Active' },
    { id: 'wh_5511', url: 'https://audit.partner.org/ingest', events: ['dsr.created'], status: 'Active' },
  ]);

  const [dsrList, setDsrList] = useState([
    { id: 'dsr_901', subject: 'john.doe@email.com', type: 'Data Erasure (Right to be Forgotten)', status: 'Pending Approval', priority: 'High', date: '2026-08-12' },
    { id: 'dsr_902', subject: 'sarah.k@provider.com', type: 'Data Access Export', status: 'In Progress', priority: 'Medium', date: '2026-08-11' },
  ]);

  // Form states
  const [newClientName, setNewClientName] = useState('');
  const [newConsentUser, setNewConsentUser] = useState('');
  const [newDsrUser, setNewDsrUser] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName) return;
    const newCli = {
      id: `cli_${Math.random().toString(36).substring(2, 8)}`,
      name: newClientName,
      type: 'OAuth 2.0 SPA',
      scope: 'consent:read',
      status: 'Active',
      created: new Date().toISOString().split('T')[0]
    };
    setClients([newCli, ...clients]);
    showToast(`Registered client "${newClientName}"!`);
    setNewClientName('');
    setActiveDrawer('clients');
  };

  const handleAddConsent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newConsentUser) return;
    const newCns = {
      id: `cns_${Math.floor(1000 + Math.random() * 9000)}`,
      user: newConsentUser,
      purpose: 'Marketing & Analytics',
      status: 'Granted',
      version: 'v2.1',
      date: new Date().toLocaleString()
    };
    setConsents([newCns, ...consents]);
    showToast(`Consent recorded for ${newConsentUser}!`);
    setNewConsentUser('');
    setActiveDrawer('consents');
  };

  const handleAddDsr = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDsrUser) return;
    const newD = {
      id: `dsr_${Math.floor(100 + Math.random() * 900)}`,
      subject: newDsrUser,
      type: 'Data Erasure (Right to be Forgotten)',
      status: 'Pending Approval',
      priority: 'High',
      date: new Date().toISOString().split('T')[0]
    };
    setDsrList([newD, ...dsrList]);
    showToast(`Logged DSR Request for ${newDsrUser}!`);
    setNewDsrUser('');
    setActiveDrawer('dsr');
  };

  const handleTestWebhook = (url: string) => {
    showToast(`Webhook ping sent to ${url} (200 OK)`);
  };

  const toggleConsent = (id: string) => {
    setConsents(prev => prev.map(c => {
      if (c.id === id) {
        const nextStatus = c.status === 'Granted' ? 'Revoked' : 'Granted';
        showToast(`Consent ${id} status toggled to ${nextStatus}`);
        return { ...c, status: nextStatus };
      }
      return c;
    }));
  };

  // Engine v2.0 tab data
  const engineTabs = [
    {
      id: 'consent',
      label: 'Consent Capture',
      badge: 'REAL-TIME',
      icon: ShieldCheck,
      title: 'Multilingual DPDP Consent Widgets',
      desc: 'Capture explicit, time-stamped consent notices in 22 Indian regional languages across web, iOS, and Android.',
      features: ['Cryptographically signed consent records', 'Automatic SDK consent propagation', 'India data residency enforcement'],
      metric: '4.2M+ Records Processed',
      submetric: 'Guaranteed SLA metric'
    },
    {
      id: 'audit',
      label: 'Audit Log Engine',
      badge: 'IMMUTABLE',
      icon: FileText,
      title: 'Tamper-Proof Audit Trail',
      desc: 'Generate audit-ready compliance evidence logs on demand for regulatory inspection under DPDP Act 2023.',
      features: ['Immutable cryptographic log hashes', 'One-click regulator PDF export', '99.9% uptime SLA guaranteed'],
      metric: '<24 Hours Deployment',
      submetric: 'Rapid rollout SLA'
    },
    {
      id: 'dsar',
      label: 'DSAR User Rights',
      badge: 'AUTOMATED',
      icon: Users,
      title: 'Automated Rights Request Portal',
      desc: 'Empower users to view, correct, or erase their personal data instantly without manual engineering intervention.',
      features: ['Self-service user preference management', 'Automated data erasure webhooks', 'Zero friction DSAR workflow'],
      metric: 'Zero Backlog',
      submetric: 'Automated processing'
    },
    {
      id: 'api',
      label: 'API & Webhooks',
      badge: 'DEVELOPER FIRST',
      icon: Webhook,
      title: 'Developer REST APIs & Webhooks',
      desc: 'Plug-and-play SDKs for React, Node, Python, and Go with real-time webhooks for consent status sync.',
      features: ['OpenAPI 3.0 specification', 'Out-of-the-box OAuth2 authentication', 'Full sandbox testing suite'],
      metric: '<10ms API Latency',
      submetric: 'Ultra-low latency'
    }
  ];

  const currentEngine = engineTabs.find(t => t.id === engineTab) || engineTabs[0];

  return (
    <div className="w-full max-w-6xl mx-auto my-12 relative font-sans">
      <div className="text-center mb-8">
        <span className={`inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border mb-3 shadow-xs ${
          theme === 'light' ? 'text-emerald-800 bg-emerald-100 border-emerald-300' : 'text-[#00e676] bg-[#00e676]/15 border-[#00e676]/30'
        }`}>
          Live Interactive Demo
        </span>
        <h3 className={`text-3xl md:text-5xl font-heading font-extrabold tracking-tight ${
          theme === 'light' ? 'text-slate-950' : 'text-white'
        }`}>
          SecureCms Single View Dashboard
        </h3>
        <p className={`mt-3 text-base md:text-lg max-w-2xl mx-auto ${
          theme === 'light' ? 'text-slate-600' : 'text-slate-400'
        }`}>
          Test live consent recording, client registration, webhooks, and audit logs directly within the embedded window below.
        </p>
      </div>

      {/* macOS Window Container matching screenshot */}
      <div className={`flex flex-col border rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300 relative ${
        theme === 'light'
          ? 'bg-white border-slate-200 text-slate-900 shadow-xl'
          : 'bg-[#070b14] border-[#1e293b] shadow-[0_0_60px_rgba(0,0,0,0.7)] text-white'
      }`}>

        {/* Toast Notification Overlay */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-14 left-1/2 -translate-x-1/2 z-50 bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center space-x-2 border border-slate-700"
            >
              <Check className="w-4 h-4 text-[#00e676]" />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Title Bar */}
        <div className="flex items-center px-4 py-3 bg-[#0a0f1d] border-b border-[#1e293b]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="mx-auto font-mono text-xs tracking-widest text-slate-400 font-bold uppercase">
            SECURECMS_ENGINE_v2.0
          </div>
        </div>

        {/* Dashboard Content Container */}
        <div className="flex flex-col md:flex-row min-h-[580px] relative">
          
          {/* SINGLE VIEW SIDEBAR */}
          <aside className="w-full md:w-56 bg-[#0a0f1d] border-b md:border-b-0 md:border-r border-[#1e293b] p-4 flex flex-col justify-between">
            <div>
              <div className="h-10 flex items-center px-2 border-b border-[#1e293b] mb-4">
                <span className="font-extrabold text-white text-base tracking-tight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#00e676]" /> SecureCms
                </span>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#172033] text-[#00e676] rounded-xl text-xs font-bold border border-[#00e676]/20 shadow-xs">
                  <div className="flex items-center space-x-2.5">
                    <LayoutDashboard className="w-4 h-4 text-[#00e676]" />
                    <span>Dashboard</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-[#00e676]" />
                </div>
              </nav>
            </div>

            <div className="p-3 border border-[#1e293b] bg-[#0f172a]/60 rounded-2xl">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00e676] text-[#070b14] flex items-center justify-center text-[10px] font-extrabold tracking-tight">
                  PO
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-white truncate">Privacy Officer</p>
                  <p className="text-[10px] text-slate-400 truncate">dpo@company.com</p>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN DASHBOARD PANEL */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-[#070b14]">
            
            {/* TOP HEADER */}
            <div className="flex items-center justify-between pb-2 border-b border-[#1e293b]">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">SINGLE VIEW DASHBOARD</span>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1.5 text-xs bg-[#172033] px-3 py-1 rounded-xl font-bold text-white border border-[#1e293b]">
                  <Globe className="w-3.5 h-3.5 text-[#00e676]" />
                  <span>Default App</span>
                </div>

                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 rounded-full hover:bg-[#172033] text-slate-400 hover:text-white transition-colors relative"
                  >
                    <Bell className="w-4.5 h-4.5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#070b14]"></span>
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 mt-2 w-64 bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl p-3 z-50 text-xs space-y-2 text-white">
                      <div className="font-bold border-b border-[#1e293b] pb-1 text-slate-300">Notifications</div>
                      <div className="p-2 bg-[#070b14] rounded-xl border border-[#1e293b]">
                        <p className="font-bold text-white">New Consent Recorded</p>
                        <p className="text-[10px] text-slate-400">user_882@example.com granted consent</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* WELCOME BANNER WITH 4 COLOR-CODED QUICK ACTION BUTTONS */}
            <div className="bg-gradient-to-r from-[#00c853] via-[#00b0ff] to-[#304ffe] rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden space-y-4">
              <div className="relative z-10 space-y-4">
                <div>
                  <h2 className="text-2xl font-extrabold mb-1 drop-shadow-sm">Welcome to your organization's dashboard</h2>
                  <p className="text-white/90 text-xs max-w-xl font-medium">
                    Monitor system health, manage privacy requests, and oversee client integrations from a single place.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-1">
                  <button 
                    onClick={() => setActiveDrawer('add_client')}
                    className="px-4 py-2 bg-white text-[#070b14] rounded-2xl text-xs font-bold flex items-center hover:bg-slate-100 transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-4 h-4 mr-1.5 text-slate-800" /> Register Client
                  </button>
                  <button 
                    onClick={() => setActiveDrawer('add_consent')}
                    className="px-4 py-2 bg-[#00e676] text-[#070b14] rounded-2xl text-xs font-bold flex items-center hover:bg-[#00c853] transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <ShieldCheck className="w-4 h-4 mr-1.5 text-[#070b14]" /> Record Consent
                  </button>
                  <button 
                    onClick={() => setActiveDrawer('webhooks')}
                    className="px-4 py-2 bg-[#304ffe] text-white rounded-2xl text-xs font-bold flex items-center hover:bg-[#2979ff] transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" /> Test Webhook
                  </button>
                  <button 
                    onClick={() => setActiveDrawer('add_dsr')}
                    className="px-4 py-2 bg-[#ff9100] text-[#070b14] rounded-2xl text-xs font-bold flex items-center hover:bg-[#ff6d00] transition-all shadow-md hover:scale-105 active:scale-95"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-[#070b14]" /> Log DSR Request
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>

            {/* 4 KPI METRIC CARDS MATCHING SCREENSHOT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { id: 'consents', title: 'Active Consents', value: consents.length, label: 'LIVE', icon: ShieldCheck, color: 'text-[#00e676]', bg: 'bg-[#00e676]/10 border-[#00e676]/20' },
                { id: 'dsr', title: 'Open DSR Requests', value: dsrList.length, label: 'PRIORITY', icon: FileText, color: 'text-[#ff9100]', bg: 'bg-[#ff9100]/10 border-[#ff9100]/20' },
                { id: 'clients', title: 'Registered Clients', value: clients.length, label: 'IDENTITY', icon: Users, color: 'text-[#304ffe]', bg: 'bg-[#304ffe]/10 border-[#304ffe]/20' },
                { id: 'webhooks', title: 'Active Webhooks', value: webhooks.length, label: 'HEALTH', icon: Webhook, color: 'text-[#00b0ff]', bg: 'bg-[#00b0ff]/10 border-[#00b0ff]/20' },
              ].map((m) => (
                <div 
                  key={m.id}
                  onClick={() => setActiveDrawer(m.id)}
                  className="p-5 rounded-2xl border border-[#1e293b] bg-[#0f172a]/70 transition-all cursor-pointer group hover:scale-[1.02] hover:border-[#00e676]/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-2.5 rounded-xl border ${m.bg}`}>
                      <m.icon className={`w-5 h-5 ${m.color}`} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#172033] text-slate-300 border border-[#1e293b]">
                      {m.label}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400 mb-1">{m.title}</p>
                  <h3 className="text-2xl font-bold font-mono text-white">{m.value}</h3>
                </div>
              ))}
            </div>

            {/* SECURECMS_ENGINE_v2.0 TABS SHOWCASE BELOW METRIC CARDS */}
            <div className="rounded-2xl border border-[#1e293b] bg-[#0d1322] shadow-xl overflow-hidden font-sans">
              <div className="flex flex-col md:flex-row min-h-[320px]">
                <div className="w-full md:w-56 bg-[#070b14] border-b md:border-b-0 md:border-r border-[#1e293b] p-3 space-y-1.5">
                  {engineTabs.map((t) => {
                    const isActive = t.id === engineTab;
                    return (
                      <button 
                        key={t.id}
                        onClick={() => setEngineTab(t.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all relative flex items-center space-x-3 text-xs ${
                          isActive ? 'bg-[#172033] text-white font-bold' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {isActive && <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#00e676] rounded-r shadow-[0_0_8px_#00e676]" />}
                        <t.icon className={`w-4.5 h-4.5 ${isActive ? 'text-[#00e676]' : 'text-slate-500'}`} />
                        <div>
                          <div className="font-bold">{t.label}</div>
                          <div className="text-[8px] font-mono text-[#00e676] uppercase tracking-wider">{t.badge}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex-1 p-6 bg-[#0d1322] flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                      <currentEngine.icon className="w-6 h-6 text-[#00e676]" /> {currentEngine.title}
                    </h4>
                    <p className="text-xs text-slate-300 max-w-xl leading-relaxed">{currentEngine.desc}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">Key Features</span>
                      {currentEngine.features.map((f, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00e676]"></div>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-[#070b14] border border-[#1e293b] rounded-2xl flex flex-col justify-center">
                      <span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest block mb-1">Performance Metric</span>
                      <span className="text-xl font-mono font-bold text-[#00e676] block drop-shadow-[0_0_8px_rgba(0,230,118,0.3)]">{currentEngine.metric}</span>
                      <span className="text-[10px] text-slate-400">{currentEngine.submetric}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT ACTIVITY TABLE */}
            <div className="rounded-2xl border border-[#1e293b] bg-[#0f172a]/70 shadow-xs overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#1e293b] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#00e676]" />
                  <h4 className="font-bold text-xs text-white">Recent Activity</h4>
                </div>
                <button 
                  onClick={() => setActiveDrawer('audit')}
                  className="text-xs font-bold text-[#00e676] hover:underline flex items-center"
                >
                  View all <ExternalLink className="w-3 h-3 ml-1" />
                </button>
              </div>
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#070b14] text-slate-400 font-bold text-[11px]">
                    <th className="px-5 py-2.5">Event</th>
                    <th className="px-5 py-2.5">Actor</th>
                    <th className="px-5 py-2.5">Resource</th>
                    <th className="px-5 py-2.5">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b] text-slate-300">
                  {[
                    { action: 'TENANT_CREATED', actor: 'c3fdc1b1-f21c...', resource: 'Tenant', time: '10 mins ago' },
                    { action: 'CLIENT_REGISTERED', actor: 'cli_8923a1f4', resource: 'OAuth Client', time: '25 mins ago' },
                    { action: 'CONSENT_GRANTED', actor: 'user_882@example.com', resource: 'Consent', time: '1 hour ago' }
                  ].map((row, i) => (
                    <tr 
                      key={i} 
                      onClick={() => setSelectedActivity(row)}
                      className="hover:bg-[#172033] transition-colors cursor-pointer"
                    >
                      <td className="px-5 py-2.5 font-semibold text-white">{row.action}</td>
                      <td className="px-5 py-2.5 font-mono text-[10px] text-slate-400">{row.actor}</td>
                      <td className="px-5 py-2.5 font-bold text-[#00e676]">{row.resource}</td>
                      <td className="px-5 py-2.5 text-slate-500">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* SLIDE-OVER DRAWER FOR DEMO */}
        <AnimatePresence>
          {activeDrawer && (
            <div className="absolute inset-0 z-50 bg-[#070b14]/70 backdrop-blur-xs flex justify-end">
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="w-full max-w-md bg-[#0f172a] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#1e293b] text-white"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#1e293b] mb-4">
                    <h3 className="font-bold capitalize text-base">
                      {activeDrawer.replace('add_', 'Register ')} Details
                    </h3>
                    <button onClick={() => setActiveDrawer(null)} className="p-1 rounded hover:bg-[#172033] text-slate-400">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {activeDrawer === 'clients' && (
                    <div className="space-y-3 text-xs">
                      {clients.map(c => (
                        <div key={c.id} className="p-3 bg-[#070b14] rounded-xl border border-[#1e293b]">
                          <div className="font-bold text-white">{c.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-1">{c.id}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeDrawer === 'consents' && (
                    <div className="space-y-3 text-xs">
                      {consents.map(c => (
                        <div key={c.id} className="p-3 bg-[#070b14] rounded-xl border border-[#1e293b] flex items-center justify-between">
                          <div>
                            <div className="font-bold text-white">{c.user}</div>
                            <div className="text-[10px] text-[#00e676]">{c.purpose}</div>
                          </div>
                          <button 
                            onClick={() => toggleConsent(c.id)}
                            className="px-2 py-1 bg-[#00e676]/20 text-[#00e676] border border-[#00e676]/30 text-[10px] font-bold rounded-lg"
                          >
                            {c.status}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeDrawer === 'add_client' && (
                    <form onSubmit={handleAddClient} className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold text-slate-300 block mb-1">Client Name</label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Web App Client" 
                          value={newClientName} 
                          onChange={(e) => setNewClientName(e.target.value)}
                          className="w-full p-2.5 bg-[#070b14] border border-[#1e293b] rounded-xl outline-none text-white"
                        />
                      </div>
                      <button type="submit" className="w-full py-2.5 bg-[#304ffe] text-white font-bold rounded-xl">Save Client</button>
                    </form>
                  )}

                  {activeDrawer === 'add_consent' && (
                    <form onSubmit={handleAddConsent} className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold text-slate-300 block mb-1">User Email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="user@domain.com" 
                          value={newConsentUser} 
                          onChange={(e) => setNewConsentUser(e.target.value)}
                          className="w-full p-2.5 bg-[#070b14] border border-[#1e293b] rounded-xl outline-none text-white"
                        />
                      </div>
                      <button type="submit" className="w-full py-2.5 bg-[#00e676] text-[#070b14] font-bold rounded-xl">Record Consent</button>
                    </form>
                  )}

                  {activeDrawer === 'add_dsr' && (
                    <form onSubmit={handleAddDsr} className="space-y-3 text-xs">
                      <div>
                        <label className="font-bold text-slate-300 block mb-1">Subject Email</label>
                        <input 
                          type="email" 
                          required 
                          placeholder="dsr@domain.com" 
                          value={newDsrUser} 
                          onChange={(e) => setNewDsrUser(e.target.value)}
                          className="w-full p-2.5 bg-[#070b14] border border-[#1e293b] rounded-xl outline-none text-white"
                        />
                      </div>
                      <button type="submit" className="w-full py-2.5 bg-[#ff9100] text-[#070b14] font-bold rounded-xl">Log DSR</button>
                    </form>
                  )}

                  {activeDrawer === 'webhooks' && (
                    <div className="space-y-3 text-xs">
                      {webhooks.map(w => (
                        <div key={w.id} className="p-3 bg-[#070b14] rounded-xl border border-[#1e293b]">
                          <div className="font-mono text-[10px] text-slate-300 truncate">{w.url}</div>
                          <button 
                            onClick={() => handleTestWebhook(w.url)}
                            className="mt-2 text-[#00e676] font-bold text-[10px]"
                          >
                            Ping Endpoint
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeDrawer === 'audit' && (
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#070b14] rounded-xl border border-[#1e293b]">TENANT_CREATED (c3fdc1b1)</div>
                      <div className="p-2.5 bg-[#070b14] rounded-xl border border-[#1e293b]">CLIENT_REGISTERED (cli_8923a1f4)</div>
                      <div className="p-2.5 bg-[#070b14] rounded-xl border border-[#1e293b]">CONSENT_GRANTED (user_882@example.com)</div>
                    </div>
                  )}
                </div>

                <button 
                  onClick={() => setActiveDrawer(null)}
                  className="w-full py-2 bg-[#172033] hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl"
                >
                  Close Panel
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Activity Row Payload Popup */}
        {selectedActivity && (
          <div className="absolute inset-0 z-50 bg-[#070b14]/80 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-5 max-w-sm w-full shadow-2xl text-white text-xs space-y-3">
              <div className="font-bold border-b border-[#1e293b] pb-2">Event Detail Payload</div>
              <p><span className="font-bold text-slate-400">Action:</span> {selectedActivity.action}</p>
              <p><span className="font-bold text-slate-400">Actor:</span> {selectedActivity.actor}</p>
              <p><span className="font-bold text-slate-400">Resource:</span> {selectedActivity.resource}</p>
              <button 
                onClick={() => setSelectedActivity(null)}
                className="w-full py-2 bg-[#00e676] hover:bg-[#00c853] text-[#070b14] font-bold rounded-xl mt-2"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
