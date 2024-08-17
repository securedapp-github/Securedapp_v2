import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import "./AuthScreen.css";

const AuthScreen = () => {
  return (
    <div className="auth-screen-container">
      <div className="auth-screen">
        <AuthScrenHeader
          title={"Sign in to your account"}
          description={
            "Clarity gives you the blocks and components you need to create a truly professional website."
          }
        />
        <div className="auth-screen-body">
          <AuthCard>
            <AuthInputField
              authInputType={"email"}
              placeholder={"Email Address"}
            />
            <AuthInputField authInputType={"password"} placeholder={"OTP"} />
            <AuthButton children={"Sign In"} onClick={() => {}} />
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
