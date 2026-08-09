import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCommonSelector } from "../../redux/commonSlice";

const Loader = () => {
  const { isLoading } = useSelector(getCommonSelector);
  return (
    isLoading && (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          background: "#0A1120",
          position: "fixed",
          zIndex: "9999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontSize: "1.25rem",
          fontWeight: 600,
        }}
      >
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 border-2 border-[#22C55E] border-t-transparent rounded-full animate-spin"></span>
          <span>Loading...</span>
        </div>
      </div>
    )
  );
};

export default Loader;
