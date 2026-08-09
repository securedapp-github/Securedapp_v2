import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/common/CustomButton";
import { getUserData } from "../../redux/auth/authSlice";
import { useRouter } from "next/router";
import { getUser, getJwt } from "../../functions";
import { setLoader } from "../../redux/commonSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faShieldHalved,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const ProfileScreen = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();

  const auth = useSelector(getUserData);
  const [user, setUser] = useState(auth?.user);

  useEffect(() => {
    async function fetch() {
      dispatch(setLoader(true));
      try {
        const userJwt = getJwt();
        if (userJwt) {
          const data = await getUser({ dispatch });
          setUser(data);
        } else {
          navigate.push("/solidity-shield-scan/auth");
        }
      } catch (error) {
        console.error("Failed to fetch user in ProfileScreen:", error);
      } finally {
        dispatch(setLoader(false));
      }
    }
    if (!user || !user.email) {
      fetch();
    }
  }, [user, dispatch, navigate]);

  const userName =
    (user && (user.name || user.fullName || user.email?.split("@")[0])) || "User";
  const userEmail = (user && user.email) || "";
  const initial = userName.charAt(0).toUpperCase();

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 font-poppins">
      {/* Profile Header Banner */}
      <div className="bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl relative overflow-hidden">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#22C55E] to-[#15803D] flex items-center justify-center text-3xl font-extrabold text-[#0A1120] shadow-lg shrink-0">
          {initial}
        </div>
        <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-[var(--sss-color-primary)] capitalize">
              {userName}
            </h2>
            <span className="px-2.5 py-0.5 text-xs font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 rounded-full flex items-center gap-1">
              <FontAwesomeIcon icon={faCheckCircle} className="text-xs" /> Verified
            </span>
          </div>
          <p className="text-xs text-[var(--sss-color-muted)]">{userEmail}</p>
          <div className="flex items-center gap-4 mt-2 pt-2 border-t border-[var(--sss-color-border)] w-full text-xs text-[var(--sss-color-muted)]">
            <div>
              <span className="text-[var(--sss-color-muted)]">Plan: </span>
              <span className="font-bold text-[var(--sss-color-primary)]">
                {user?.plan === 1
                  ? "Plus Plan"
                  : user?.plan === 2
                  ? "Premium Plan"
                  : "Free Plan"}
              </span>
            </div>
            <div>
              <span className="text-[var(--sss-color-muted)]">Remaining Scans: </span>
              <span className="font-bold text-[#22C55E]">
                {user?.remainingCredits != null ? user.remainingCredits : "20"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Account Details Form */}
      <div className="bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
        <div className="border-b border-[var(--sss-color-border)] pb-4">
          <h3 className="text-lg font-bold text-[var(--sss-color-primary)]">Account Information</h3>
          <p className="text-xs text-[var(--sss-color-muted)] mt-0.5">
            Your personal profile and account credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[var(--sss-color-muted)] uppercase tracking-wider">
              First Name / Display Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-[var(--sss-color-muted)]">
                <FontAwesomeIcon icon={faUser} className="text-sm" />
              </span>
              <input
                type="text"
                readOnly
                value={userName}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--sss-color-input-bg)] border border-[var(--sss-color-input-border)] text-[var(--sss-color-primary)] text-sm font-medium focus:outline-none focus:border-[#22C55E] transition-all cursor-default"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-[var(--sss-color-muted)] uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-[var(--sss-color-muted)]">
                <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
              </span>
              <input
                type="email"
                readOnly
                value={userEmail}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[var(--sss-color-input-bg)] border border-[var(--sss-color-input-border)] text-[var(--sss-color-primary)] text-sm font-medium focus:outline-none focus:border-[#22C55E] transition-all cursor-default"
              />
            </div>
          </div>
        </div>

        {/* Security & Access Info Card */}
        <div className="mt-2 bg-[#0B132B]/60 border border-[var(--sss-color-border)] rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E] shrink-0">
              <FontAwesomeIcon icon={faShieldHalved} className="text-lg" />
            </div>
            <div>
              <div className="text-sm font-bold text-[var(--sss-color-primary)]">
                Authentication Security
              </div>
              <div className="text-xs text-[var(--sss-color-muted)] mt-0.5">
                Secured via One-Time Password (OTP) verification
              </div>
            </div>
          </div>
          <CustomButton
            text="Upgrade Plan"
            onClick={() => navigate.push("/solidity-shield-scan/pricing")}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold text-xs hover:bg-[#16a34a] transition-all cursor-pointer shadow-md shadow-[#22C55E]/10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
