import { useState } from "react";
import Image from "next/image";

const AuthInputField = ({
  authInputType,
  placeholder,
  onChange,
  regexCheck = /^.+$/,
  message = "Invalid Input",
  id,
  value,
  required,
  ...props
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="auth-input-field-container w-full">
      <input
        id={id}
        value={value}
        required={required}
        className="auth-input-field"
        type={authInputType}
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          if (regexCheck && !regexCheck.test(val)) {
            setErrorMessage(message);
          } else {
            setErrorMessage("");
          }
          if (onChange) onChange(val);
        }}
        {...props}
      />
      {errorMessage && <div className="auth-input-field-error">{errorMessage}</div>}
    </div>
  );
};

export default AuthInputField;
