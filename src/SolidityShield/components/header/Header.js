"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CustomButton from "../common/CustomButton";
import { toast } from "react-toastify";
import {
  getCommonSelector,
  setScanNowModal,
  setSideBar,
} from "../../redux/commonSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import CustomDivider from "../common/CustomDivider";
import { scanSubmit } from "../../functions";
import { getUserData } from "../../redux/auth/authSlice";
import * as Tooltip from "@radix-ui/react-tooltip";

const Header = () => {
  const { showSideBar, scanNowModal } = useSelector(getCommonSelector);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;
  const auth = useSelector(getUserData);
  const dispatch = useDispatch();
  const navigate = useRouter();

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const isDark = savedTheme ? savedTheme === "dark" : true;
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.body.classList.remove("light");
      } else {
        document.documentElement.classList.remove("dark");
        document.body.classList.remove("dark");
        document.documentElement.classList.add("light");
        document.body.classList.add("light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    const themeStr = nextMode ? "dark" : "light";
    localStorage.setItem("theme", themeStr);

    // Dispatch event so other components listening to theme changes update
    window.dispatchEvent(new Event("storage"));

    if (nextMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    }
  };

  return (
    <div className="sss-header-container">
      <Head>
        <title>Solidity Shield - Smart Contract Security Audit Platform | SecureDApp</title>
        <meta name="title" content="Solidity Shield - Smart Contract Security Audit Platform | SecureDApp" />
        <meta name="description" content="Protect the heart of your Web3 project with Solidity Shield by SecureDApp." />
      </Head>
      <div className="sss-header">
        <div className="sss-header-left">
          {!showSideBar && (
            <div
              onClick={() => dispatch(setSideBar(true))}
              className="sss-header-sidebar-opener"
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </div>
          )}
          {!isMobile && auth.user.credits == 1 ? (
            <div className="text-sm font-medium text-[var(--sss-color-muted)]">
              Start Free Trial – No card required, for first security scan.
            </div>
          ) : (
            !isMobile && (
              <div className="text-sm font-medium text-[var(--sss-color-muted)]">
                <span className="text-[#22C55E] font-bold">Solidity Shield</span> to protect the heart of your <span className="text-[#22C55E] font-bold">Web3</span> project
              </div>
            )
          )}
        </div>
        <div className="sss-header-center">
          <Link href="/" title="Go to SecureDApp Home" className="cursor-pointer flex items-center justify-center">
            <img
              className="w-full max-w-[155px] sm:max-w-[170px] h-auto"
              src={darkMode ? "/assets/images/securedapp-logo-dark.svg" : "/assets/images/securedapp-logo-light.svg"}
              alt="SecureDApp Logo"
            />
          </Link>
        </div>
        <div className="sss-header-right flex items-center gap-x-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle Theme"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 sm:px-3 sm:py-2 rounded-xl border border-[var(--sss-color-border)] bg-[var(--sss-color-card)] text-[var(--sss-color-primary)] hover:border-[#22C55E] transition-all flex items-center justify-center gap-x-2 cursor-pointer shadow-sm"
          >
            <FontAwesomeIcon
              icon={darkMode ? faSun : faMoon}
              className={darkMode ? "text-amber-400" : "text-slate-600 dark:text-slate-300"}
              size="lg"
            />
            <span className="hidden sm:inline text-xs font-semibold">
              {darkMode ? "Light" : "Dark"}
            </span>
          </button>

          <div className="sss-header-right-button">
            <CustomButton
              onClick={() =>
                auth.user.email
                  ? dispatch(setScanNowModal(true))
                  : navigate.push("/solidity-shield-scan/auth")
              }
              className={
                "w-[100px] sm:w-[125px] px-1 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#22C55E] text-[#0A1120] font-bold hover:bg-[#16a34a] transition-colors cursor-pointer"
              }
              text={"Scan Now"}
            />
          </div>
        </div>
      </div>
      <CustomDivider classname={"w-full"} />
    </div>
  );
};

export default Header;

