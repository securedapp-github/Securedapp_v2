import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import "./LoginScreen.css";

const LoginScreen = () => {
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
          <AuthCard footer={true}>
            <AuthInputField
              authInputType={"email"}
              placeholder={"Email Address"}
            />
            <AuthInputField
              authInputType={"password"}
              placeholder={"Password"}
            />
            <div className="login-screen-body-options">
              <div className="login-screen-remember-me">
                <input type="checkbox" />
                <div>Remember Me</div>
              </div>
              <div>Forgot Password?</div>
            </div>
            <AuthButton children={"Sign In"} onClick={() => {}} />
            <AuthButton filled={false}>
              <div className="auth-screen-google">
                <img
                  src="/assets/images/solidity-shield-scan/google-logo.svg"
                  alt="Google Logo"
                />
                <div>Sign in With Google</div>
              </div>
            </AuthButton>
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
