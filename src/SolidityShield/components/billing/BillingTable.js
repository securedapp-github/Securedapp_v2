import { useState } from "react";
import Image from "next/image";
import { billingDummyData } from "./billingDummyData";
import Pagination from "../common/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner, faReceipt } from "@fortawesome/free-solid-svg-icons";

const BillingTableStatus = ({ status }) => {
  const isSuccess = status === "Success" || status === "Succeeded";
  const isPending = status === "Pending";

  return (
    <span
      className={`px-3 py-1 text-xs font-bold rounded-full inline-flex items-center gap-1.5 border ${
        isSuccess
          ? "bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/30"
          : isPending
          ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
          : "bg-red-500/10 text-red-400 border-red-500/30"
      }`}
    >
      <FontAwesomeIcon
        icon={isSuccess ? faCheck : faSpinner}
        className={`text-xs ${isPending ? "animate-spin" : ""}`}
      />
      {status}
    </span>
  );
};

const BillingTable = ({ billingData = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(billingData.length / itemsPerPage) || 1;

  const paginatedData = billingData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-2xl shadow-xl overflow-hidden flex flex-col font-poppins">
      <div className="w-full overflow-x-auto">
        {paginatedData.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--sss-color-border)] bg-[var(--sss-color-input-bg)]/40 text-[11px] font-bold uppercase tracking-wider text-[var(--sss-color-muted)]">
                <th className="py-3.5 px-6">Invoice</th>
                <th className="py-3.5 px-6">Supplier</th>
                <th className="py-3.5 px-6">Amount</th>
                <th className="py-3.5 px-6">Date</th>
                <th className="py-3.5 px-6 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--sss-color-border)]">
              {paginatedData.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-[var(--sss-color-input-bg)]/50 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-sm text-[var(--sss-color-primary)]">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faReceipt} className="text-[#22C55E] text-xs" />
                      <span>{data.invoice}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs text-[var(--sss-color-muted)] font-medium">
                    {data.supplier}
                  </td>
                  <td className="py-4 px-6 font-extrabold text-sm text-[#22C55E]">
                    {data.price}
                  </td>
                  <td className="py-4 px-6 text-xs text-[var(--sss-color-muted)]">
                    {data.date}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <BillingTableStatus status={data.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-12 text-center flex flex-col items-center justify-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
              <FontAwesomeIcon icon={faReceipt} className="text-xl" />
            </div>
            <div className="text-sm font-bold text-[var(--sss-color-primary)]">
              No Billing History
            </div>
            <div className="text-xs text-[var(--sss-color-muted)] max-w-xs">
              You have no previous invoice transactions or billing records.
            </div>
          </div>
        )}
      </div>

      {billingData.length > 0 && (
        <div className="p-4 border-t border-[var(--sss-color-border)] bg-[var(--sss-color-card)]">
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalLength={billingData.length}
          />
        </div>
      )}
    </div>
  );
};

export default BillingTable;
