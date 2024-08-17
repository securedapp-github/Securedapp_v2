import "./AuthInputField.css";

const AuthInputField = ({ authInputType, placeholder }) => {
  return (
    <div className="auth-input-field-container">
      <input
        className="auth-input-field"
        type={authInputType}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthInputField;
