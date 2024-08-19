import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthButton from "../../components/auth/AuthButton";
import AuthCard from "../../components/auth/AuthCard";
import AuthInputField from "../../components/auth/AuthInputField";
import AuthScrenHeader from "../../components/auth/AuthScreenHeader";
import "./AuthScreen.css";
import { sendOTP, verifyOTP } from "../../functions";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, login } from "../../redux/auth/authSlice";

const AuthScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(getUserData);
  const user = auth.user;
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState();
  const [button, setButton] = useState("Send OTP");

  useEffect(() => {
    user.jwt && navigate("/solidity-shield-scan/overview");
    console.log(user);
  });

  function log(e) {
    dispatch(login(e));
    console.log(user);
  }

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
              onChange={setEmail}
            />
            {button === "Log In" ? (
              <AuthInputField
                authInputType={"number"}
                placeholder={"OTP"}
                onChange={setOtp}
              />
            ) : null}
            <AuthButton
              children={button}
              onClick={async () => {
                if (button === "Send OTP") {
                  await sendOTP({
                    email,
                    dispatch,
                    selector: user,
                  });
                  setButton("Log In");
                } else {
                  await verifyOTP({ email, otp, dispatch });
                  setButton("Send OTP");
                  navigate("/solidity-shield-scan/overview");
                  console.log(user);
                }
              }}
            />
          </AuthCard>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
