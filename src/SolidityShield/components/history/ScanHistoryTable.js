import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faSpinner,
  faXmark,
  faFileCode,
  faDownload,
  faExternalLinkAlt,
  faShieldHalved,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Pagination from "../common/Pagination";
import Link from "next/link";
import { formatDate, downloadfReportPdf } from "../../functions";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../redux/auth/authSlice";
import { setScanNowModal } from "../../redux/commonSlice";
import { useRouter } from "next/router";

const scanHistoryStatusFilter = ["All", "Succeeded", "Failed", "Inprogress"];

const StatusBadge = ({ status }) => {
  const isSuccess = status === "Succeeded";
  const isFailed = status === "Failed";

  return (
    <span
      className={`px-3 py-1 text-xs font-bold rounded-full inline-flex items-center gap-1.5 border ${
        isSuccess
          ? "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/30"
          : isFailed
          ? "bg-red-500/10 text-red-400 border-red-500/30"
          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
      }`}
    >
      <FontAwesomeIcon
        icon={isSuccess ? faCheck : isFailed ? faXmark : faSpinner}
        className={`text-xs ${!isSuccess && !isFailed ? "animate-spin" : ""}`}
      />
      {status || "Completed"}
    </span>
  );
};

const ScanHistoryTable = ({ scanHistoryData = [], statusFilter, onFilterChange }) => {
  const auth = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = (scanHistoryData || []).filter(
    (data) => data.status === statusFilter || statusFilter === "All"
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-2xl shadow-xl overflow-hidden flex flex-col">
      {/* Table Toolbar */}
      <div className="p-4 sm:p-5 border-b border-[var(--sss-color-border)] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[var(--sss-color-card)]">
        {/* Status Filter Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-[var(--sss-color-input-bg)] border border-[var(--sss-color-input-border)] rounded-xl w-full sm:w-auto">
          {scanHistoryStatusFilter.map((filter) => {
            const isActive = filter === (statusFilter || "All");
            return (
              <button
                key={filter}
                onClick={() => {
                  if (onFilterChange) onFilterChange(filter);
                  setCurrentPage(1);
                }}
                className={`flex-1 sm:flex-none px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#22C55E] text-[#0A1120] font-bold shadow-md"
                    : "text-[var(--sss-color-muted)] hover:text-[var(--sss-color-primary)] hover:bg-[var(--sss-color-card)]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Counter Badge */}
        <div className="text-xs font-semibold text-[var(--sss-color-muted)]">
          Total Audits:{" "}
          <span className="text-[#22C55E] font-bold">{filteredData.length}</span>
        </div>
      </div>

      {/* Table Content */}
      <div className="w-full overflow-x-auto">
        {paginatedData.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--sss-color-border)] bg-[var(--sss-color-input-bg)]/40 text-[11px] font-bold uppercase tracking-wider text-[var(--sss-color-muted)]">
                <th className="py-3.5 px-6">Report ID</th>
                <th className="py-3.5 px-6">Date</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6">Report Link</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--sss-color-border)]">
              {paginatedData.map((data, idx) => (
                <tr
                  key={data.id || idx}
                  className="hover:bg-[var(--sss-color-input-bg)]/50 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-sm text-[var(--sss-color-primary)]">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faFileCode} className="text-[#22C55E] text-xs" />
                      <span>#{data.id}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs text-[var(--sss-color-muted)] font-medium">
                    {formatDate(data.date)}
                  </td>
                  <td className="py-4 px-6">
                    <StatusBadge status={data.status} />
                  </td>
                  <td className="py-4 px-6 text-xs">
                    <Link
                      href={`/solidity-shield-scan/report?id=${data.id}`}
                      className="text-[#22C55E] font-bold hover:underline flex items-center gap-1.5"
                    >
                      <span>Report #{data.id}</span>
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/solidity-shield-scan/report?id=${data.id}`}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[var(--sss-color-input-bg)] border border-[var(--sss-color-input-border)] text-[var(--sss-color-primary)] hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => downloadfReportPdf(data.id, auth?.user)}
                        className="px-3 py-1.5 text-xs font-bold rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] hover:bg-[#22C55E] hover:text-[#0A1120] transition-all cursor-pointer flex items-center gap-1"
                      >
                        <FontAwesomeIcon icon={faDownload} className="text-[11px]" /> PDF
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          /* Clean Centered Empty State */
          <div className="p-12 sm:p-16 flex flex-col items-center justify-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shadow-inner">
              <FontAwesomeIcon icon={faShieldHalved} className="text-2xl" />
            </div>
            <div className="max-w-sm">
              <h3 className="text-lg font-bold text-[var(--sss-color-primary)]">
                No Scan History Found
              </h3>
              <p className="text-xs text-[var(--sss-color-muted)] mt-1 leading-relaxed">
                You haven't run any smart contract audits yet. Start your first scan now to detect security vulnerabilities.
              </p>
            </div>
            <button
              onClick={() =>
                auth?.user?.email
                  ? dispatch(setScanNowModal(true))
                  : navigate.push("/solidity-shield-scan/auth")
              }
              className="mt-2 px-6 py-2.5 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold text-xs hover:bg-[#16a34a] transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#22C55E]/10"
            >
              <FontAwesomeIcon icon={faPlus} className="text-xs" /> Scan Now
            </button>
          </div>
        )}
      </div>

      {/* Pagination Footer */}
      {filteredData.length > 0 && (
        <div className="p-4 border-t border-[var(--sss-color-border)] bg-[var(--sss-color-card)]">
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalLength={filteredData.length}
          />
        </div>
      )}
    </div>
  );
};

export default ScanHistoryTable;
