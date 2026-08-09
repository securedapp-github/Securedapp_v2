import { useState, useEffect } from "react";
import { sendTicketToCRM } from "../../utils/crmTicketService";

const CATEGORIES = ["Bug", "UI Issue", "Access / Role", "Feature Request", "Other"];
const PRIORITIES = [
  { level: "Low", color: "bg-slate-800 text-slate-300 border-slate-700" },
  { level: "Medium", color: "bg-blue-950 text-blue-300 border-blue-800" },
  { level: "High", color: "bg-amber-950 text-amber-300 border-amber-800" },
  { level: "Urgent", color: "bg-rose-950 text-rose-300 border-rose-800" }
];

export default function SupportTicketSheet({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegram, setTelegram] = useState("");
  const [projectName, setProjectName] = useState("");
  const [category, setCategory] = useState("Bug");
  const [priority, setPriority] = useState("Medium");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [ticketResult, setTicketResult] = useState(null);

  // Auto-detect logged-in user session on main website if available
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user") || localStorage.getItem("securedapp_user") || localStorage.getItem("auth_user");
      if (storedUser) {
        const parsed = JSON.parse(storedUser);
        if (parsed.name) setName(parsed.name);
        if (parsed.email) setEmail(parsed.email);
        if (parsed.phone) setPhone(parsed.phone);
      }
    } catch {
      // Ignore parse errors
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !title.trim() || !description.trim()) {
      setErrorMsg("Please fill in your name, email, subject, and description.");
      return;
    }

    setErrorMsg("");
    setSubmitting(true);

    try {
      const res = await sendTicketToCRM({
        title,
        description,
        name,
        email,
        phone,
        telegram,
        projectName,
        category,
        priority,
        metadata: {
          page: "Securedapp Support Ticket Sheet"
        }
      });

      setTicketResult(res.data);
    } catch (err) {
      console.error("Ticket submission error:", err);
      setErrorMsg(err.message || "Failed to submit ticket. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setTicketResult(null);
    setTitle("");
    setDescription("");
    setErrorMsg("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/80 bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[11px] font-mono font-semibold bg-indigo-950 text-indigo-400 border border-indigo-800 rounded-md">
                CRM Support Desk
              </span>
              <span className="text-xs text-slate-400">• Direct API Ticket Sheet</span>
            </div>
            <h2 className="text-xl font-bold text-white mt-1">Submit Issue or Support Request</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Form Body or Receipt */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {ticketResult ? (
            /* Confirmation Receipt Card */
            <div className="p-6 bg-slate-950/80 rounded-2xl border border-emerald-800/60 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-700 flex items-center justify-center mx-auto text-xl">
                ✓
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
                  {ticketResult.ticketNumber || "EXT-TICKET"}
                </span>
                <h3 className="text-lg font-bold text-white mt-2">Ticket Submitted Successfully</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Our technical support team has been notified. An auto-acknowledgement was sent to <strong className="text-slate-200">{email}</strong>.
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subject:</span>
                  <span className="font-semibold text-slate-200">{ticketResult.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Priority:</span>
                  <span className="font-semibold text-amber-400">{ticketResult.priority}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="font-semibold text-emerald-400">{ticketResult.status || "Open"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Submitted At:</span>
                  <span className="font-mono text-slate-400">{new Date(ticketResult.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-center gap-3 pt-2">
                <button
                  onClick={resetForm}
                  className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all"
                >
                  + Submit Another Request
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Ticket Entry Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-rose-950/80 border border-rose-800 text-rose-300 text-xs rounded-xl">
                  {errorMsg}
                </div>
              )}

              {/* User Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Secondary Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / Mobile</label>
                  <input
                    type="text"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Telegram Handle</label>
                  <input
                    type="text"
                    placeholder="@telegram_user"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Project / Domain</label>
                  <input
                    type="text"
                    placeholder="e.g. audit-protocol.io"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Category & Priority Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Issue Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:border-indigo-500"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Priority Level</label>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    {PRIORITIES.map(p => (
                      <button
                        type="button"
                        key={p.level}
                        onClick={() => setPriority(p.level)}
                        className={`flex-1 py-2 text-[11px] font-semibold rounded-lg border transition-all ${
                          priority === p.level
                            ? `${p.color} ring-1 ring-indigo-500 shadow-sm`
                            : "bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        {p.level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Issue Summary / Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Brief summary of your inquiry or bug"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Detailed Description <span className="text-rose-400">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide all relevant details, error messages, steps to reproduce, or technical requirements..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 active:scale-95"
                >
                  {submitting ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting to CRM...</span>
                    </>
                  ) : (
                    <span>Submit Ticket to CRM</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
