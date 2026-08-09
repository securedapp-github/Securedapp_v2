"use client";

import { useSelector } from "react-redux";
import {
  getCommonSelector,
  setSelectedSidebarItem,
  setSideBar,
} from "../../redux/commonSlice";
import { setIsRequestModalOpen } from "../../redux/commonSlice.js";
import { useDispatch } from "react-redux";
import CustomDivider from "../../components/common/CustomDivider";
import { sidebarItems } from "./sidebar.data.js";
import { useRouter } from "next/router";
import CustomButton from "../common/CustomButton.js";
import ProgressBar from "@ramonak/react-progress-bar";
import { getUserData } from "../../redux/auth/authSlice.js";
import { logout, getJwt } from "../../functions.js";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export const Sidebar = () => {
  const { showSideBar, selectedSidebarItem, creditsRemaining } =
    useSelector(getCommonSelector);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const dispatch = useDispatch();
  const navigate = useRouter();
  const totalCredits = 20;

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleThemeSync = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        setDarkMode(savedTheme ? savedTheme === "dark" : true);
      }
    };
    handleThemeSync();
    window.addEventListener("storage", handleThemeSync);
    return () => window.removeEventListener("storage", handleThemeSync);
  }, []);

  const auth = useSelector(getUserData);

  const selectMenuItem = (index) => {
    const item = sidebarItems[index];
    const jwt = getJwt();
    if (item?.to !== "pricing" && !jwt) {
      navigate.push("/solidity-shield-scan/auth");
      return;
    }
    navigate.push("/solidity-shield-scan/" + item.to);
    dispatch(setSelectedSidebarItem(item.name));
    isMobile && dispatch(setSideBar(false));
  };

  const handleLogout = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      //title: "Are you sure?",
      text: "Are you sure you want to logout ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
      background: "#f4f4f4",
      customClass: {
        title: "text-danger",
        popup: "custom-popup-class", // You can define your own class for further customization
      },
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
      }
    });
  };

  const handleRequest = () => {
    dispatch(setIsRequestModalOpen(true));
  };

  return (
    showSideBar && (
      <div className="sss-sidebar-container">
        <div className="sss-sidebar">
          <div className="sss-sidebar-upper">
            <div className="sss-sidebar-header flex items-center justify-between px-4">
              <Link href="/" title="Go to SecureDApp Home" className="cursor-pointer flex items-center">
                <img
                  className="sss-sidebar-header-logo w-full max-w-[145px] sm:max-w-[155px] h-auto"
                  src={darkMode ? "/assets/images/securedapp-logo-dark.svg" : "/assets/images/securedapp-logo-light.svg"}
                  alt="SecureDApp Logo"
                />
              </Link>
              <img
                onClick={() => dispatch(setSideBar(false))}
                src="/assets/images/solidity-shield-scan/sidebar-menu.svg"
                alt="Sidebar Toggle"
                className="cursor-pointer"
              />
            </div>
            <CustomDivider classname={"w-full pt-5"} />
            <div className="sss-body">
              <div className="sss-body-header">
                <div className="">MAIN MENUS</div>
              </div>
              <div className="sss-body-navigation">
                {sidebarItems.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        if (item.name === "Log Out") {
                          handleLogout();
                        } else {
                          selectMenuItem(index);
                        }
                      }}
                      className={`sss-sidebar-item-container ${
                        selectedSidebarItem === item.name &&
                        "selected-sss-sidebar-item"
                      }`}
                    >
                      <div className="sss-sidebar-item">
                        <div className="sss-sidebar-item-logo">
                          <item.image
                            fill={"none"}
                            stroke={
                              selectedSidebarItem === item.name
                                ? "#22C55E"
                                : "#8B93A7"
                            }
                          />
                        </div>
                        <div className="sss-sidebar-item-text">{item.name}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div style={{ width: "calc(100% - 30px)", margin: "15px" }}>
                <CustomButton
                  onClick={handleRequest}
                  className={
                    "w-full border border-tertiary text-[#0A1120] font-bold bg-[#12D576] hover:bg-[#16a34a] py-2 rounded-xl active:bg-[#16a34a] transition-colors cursor-pointer"
                  }
                  text={"Request Manual Audit"}
                />
              </div>
            </div>
          </div>
          <div className="sss-sidebar-lower p-3">
            <div className="sss-sidebar-credits-card bg-[var(--sss-color-card)] border border-[var(--sss-color-border)] p-4 rounded-xl flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--sss-color-muted)]">
                  Remaining Credits
                </div>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 rounded-full shrink-0">
                  {auth?.user?.plan === 1
                    ? "Plus Plan"
                    : auth?.user?.plan === 2
                    ? "Premium Plan"
                    : "Free Tier"}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="w-full">
                  <ProgressBar
                    completed={
                      auth?.user?.credits != null &&
                      auth?.user?.remainingCredits != null &&
                      auth?.user?.credits > 0
                        ? Math.max(
                            0,
                            Math.min(
                              100,
                              (auth.user.remainingCredits / auth.user.credits) * 100
                            )
                          )
                        : 100
                    }
                    height={"7px"}
                    bgColor="#22C55E"
                    isLabelVisible={false}
                    baseBgColor="var(--sss-color-input-border)"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-[var(--sss-color-primary)] mt-0.5">
                  <span className="text-[var(--sss-color-muted)] font-normal text-[11px]">
                    Scans Available
                  </span>
                  <span>
                    {auth?.user?.credits != null && auth?.user?.remainingCredits != null
                      ? `${auth.user.remainingCredits} / ${auth.user.credits}`
                      : "20 / 20"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate.push("/solidity-shield-scan/pricing")}
                className="w-full mt-1 py-2 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold text-xs hover:bg-[#16a34a] active:bg-[#16a34a] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1"
              >
                <span>Upgrade Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
