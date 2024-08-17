import "./AuthCard.css";
import AuthCardFooter from "./AuthCardFooter";

const AuthCard = ({ children, footer = false }) => {
  return (
    <div className="auth-card-container">
      <div className="auth-card">
        {children}
        {footer && (
          <AuthCardFooter
            question={"Don't have an account?"}
            answer={"Sign Up"}
          />
        )}
      </div>
    </div>
  );
};

export default AuthCard;
