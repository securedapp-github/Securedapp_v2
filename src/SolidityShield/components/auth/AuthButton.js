const AuthButton = ({ children, onClick, filled = true, disabled = false, type = "button" }) => {
  return (
    <div className="auth-button-container">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`auth-button ${
          !filled
            ? "bg-[#F8FAFC] active:bg-tertiary active:text-black"
            : "bg-[#12D576] text-black active:bg-[#F8FAFC] active:text-black"
        } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        {children}
      </button>
    </div>
  );
};

export default AuthButton;
