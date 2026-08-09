import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  itemsPerPage,
  currentPage,
  totalPages,
  onPageChange,
  totalLength,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const startItem = totalLength > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = totalLength > 0 ? Math.min(currentPage * itemsPerPage, totalLength) : 0;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-poppins">
      <div className="text-[var(--sss-color-muted)] font-medium">
        {totalLength > 0
          ? `Showing ${startItem} – ${endItem} of ${totalLength} scans`
          : "No scans recorded"}
      </div>
      <div className="flex items-center gap-1.5">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
            currentPage === 1
              ? "opacity-40 cursor-not-allowed border-[var(--sss-color-border)] text-[var(--sss-color-muted)]"
              : "border-[var(--sss-color-border)] text-[var(--sss-color-primary)] hover:border-[#22C55E] hover:text-[#22C55E] bg-[var(--sss-color-input-bg)] cursor-pointer"
          }`}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded-lg font-bold transition-all text-xs cursor-pointer ${
                isActive
                  ? "bg-[#22C55E] text-[#0A1120] shadow-sm"
                  : "border border-[var(--sss-color-border)] text-[var(--sss-color-primary)] hover:border-[#22C55E] hover:text-[#22C55E] bg-[var(--sss-color-input-bg)]"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
            currentPage === totalPages
              ? "opacity-40 cursor-not-allowed border-[var(--sss-color-border)] text-[var(--sss-color-muted)]"
              : "border-[var(--sss-color-border)] text-[var(--sss-color-primary)] hover:border-[#22C55E] hover:text-[#22C55E] bg-[var(--sss-color-input-bg)] cursor-pointer"
          }`}
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
