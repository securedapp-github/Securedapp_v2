import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import BillingTable from "../../components/billing/BillingTable";
import CustomButton from "../../components/common/CustomButton";
import { getUserData } from "../../redux/auth/authSlice";
import {
  getPaymentSelector,
  setPaymentModal,
} from "../../redux/dashboard/paymentSlice";
import { pricingDetails } from "../pricing/pricing.data";
import { getUser, getJwt } from "../../functions";
import { setLoader } from "../../redux/commonSlice";
import Footer from "../../components/common/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCheckCircle,
  faCrown,
  faCoins,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from "@ramonak/react-progress-bar";

const BillingScreen = () => {
  const { paymentModal } = useSelector(getPaymentSelector);
  const auth = useSelector(getUserData);
  const [user, setUser] = useState(auth?.user);
  const navigate = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      dispatch(setLoader(true));
      const userJwt = getJwt();
      if (userJwt) {
        try {
          var data = await getUser({ dispatch });
          if (data) setUser(data);
        } catch (error) {
          console.warn("Billing: getUser network error, using cached data:", error.message);
        } finally {
          dispatch(setLoader(false));
        }
      } else {
        navigate.push("/solidity-shield-scan/auth");
        dispatch(setLoader(false));
      }
    }
    fetch();
  }, []);

  const activePlanIndex = user?.plan != null ? Number(user.plan) + 1 : 1;
  const currentPlanDetail = pricingDetails[activePlanIndex] || pricingDetails[1];
  const planType = currentPlanDetail?.pricingCard?.planType || "Free";
  const rawPrice = currentPlanDetail?.pricingCard?.price || "₹ 0";
  const displayPrice = rawPrice.replace("/-", "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const description = currentPlanDetail?.pricingCard?.description || "Explore our straightforward pricing for standard services.";

  const remainingCredits = user?.remainingCredits != null ? user.remainingCredits : 20;
  const totalCredits = user?.credits != null ? user.credits : 20;
  const progressPercent = totalCredits > 0 ? Math.max(0, Math.min(100, (remainingCredits / totalCredits) * 100)) : 100;

  return (
    <div className="sss-billing-screen-container min-h-screen p-4 md:p-8 font-poppins">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Page Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--sss-color-border)] pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
              <FontAwesomeIcon icon={faCreditCard} className="text-lg" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--sss-color-primary)]">
                Billing & Subscription
              </h1>
              <p className="text-xs text-[var(--sss-color-muted)] mt-0.5">
                Manage your active subscription plan, scan credits, and view invoice history
              </p>
            </div>
          </div>
        </div>

        {/* Current Subscription Card */}
        <div className="bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl relative overflow-hidden">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--sss-color-border)] pb-5">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-[var(--sss-color-primary)]">
                  {planType} Plan
                </h2>
                <span className="px-2.5 py-0.5 text-xs font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xs" /> Active Plan
                </span>
              </div>
              <p className="text-xs text-[var(--sss-color-muted)] mt-1 max-w-lg">
                {description}
              </p>
            </div>

            <div className="flex items-baseline gap-1 mt-2 sm:mt-0">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#22C55E] tracking-tight">
                {displayPrice}
              </span>
              <span className="text-xs text-[var(--sss-color-muted)] font-medium">
                / month
              </span>
            </div>
          </div>

          {/* Usage & Limits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[var(--sss-color-input-bg)]/60 border border-[var(--sss-color-border)] rounded-xl p-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-bold text-[var(--sss-color-primary)]">
                <span className="flex items-center gap-1.5 text-[var(--sss-color-muted)]">
                  <FontAwesomeIcon icon={faCoins} className="text-[#22C55E]" /> Remaining Scan Credits
                </span>
                <span className="text-[#22C55E] font-extrabold">
                  {remainingCredits} / {totalCredits}
                </span>
              </div>
              <ProgressBar
                completed={progressPercent}
                height="8px"
                bgColor="#22C55E"
                isLabelVisible={false}
                baseBgColor="var(--sss-color-border)"
              />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 text-xs text-[var(--sss-color-muted)]">
              <div>
                <span className="block text-[11px] uppercase font-semibold text-[var(--sss-color-muted)]">
                  Billing Cycle
                </span>
                <span className="font-bold text-[var(--sss-color-primary)] text-sm">Monthly</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase font-semibold text-[var(--sss-color-muted)]">
                  Auto Renew
                </span>
                <span className="font-bold text-[#22C55E] text-sm">Enabled</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <CustomButton
              onClick={() => navigate.push("/solidity-shield-scan/pricing")}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold text-xs hover:bg-[#16a34a] active:bg-[#16a34a] transition-all cursor-pointer shadow-md shadow-[#22C55E]/10"
              text="Upgrade Plan"
            />
            <CustomButton
              onClick={() => navigate.push("/solidity-shield-scan/pricing")}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-[#22C55E] border border-[#22C55E] bg-transparent hover:bg-[#22C55E] hover:text-[#0A1120] font-bold text-xs transition-all cursor-pointer"
              text="Buy Credits"
            />
          </div>
        </div>

        {/* Invoice & Billing History Table */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faReceipt} className="text-[#22C55E] text-sm" />
            <h3 className="text-lg font-bold text-[var(--sss-color-primary)]">
              Billing History
            </h3>
          </div>
          <BillingTable />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default BillingScreen;
