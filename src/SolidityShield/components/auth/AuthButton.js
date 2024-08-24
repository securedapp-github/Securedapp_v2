import "./AuthButton.css";

const AuthButton = ({ children, onClick, filled = true }) => {
  return (
    <div className="auth-button-container">
      <button
        onClick={onClick}
        className={`auth-button ${
          !filled ? "bg-[#F8FAFC]" : "bg-[#12D576] text-white"
        }`}>
        {children}
      </button>
    </div>
  );
};

export default AuthButton;
