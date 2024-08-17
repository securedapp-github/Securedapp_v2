import "./AuthButton.css";

const AuthButton = ({ children, onClick, filled = true }) => {
  return (
    <div className="auth-button-container">
      <button
        onClick={onClick}
        className={`auth-button ${
          !filled ? "bg-[#F8FAFC]" : "bg-[#2563EB] text-white"
        }`}>
        {children}
      </button>
    </div>
  );
};

export default AuthButton;
