import "./AuthInputField.css";

const AuthInputField = ({ authInputType, placeholder, onChange }) => {
  return (
    <div className="auth-input-field-container">
      <input
        className="auth-input-field"
        type={authInputType}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default AuthInputField;
