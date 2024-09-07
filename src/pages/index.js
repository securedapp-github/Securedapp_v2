"use client";

import { useDispatch } from "react-redux";
import Home from "../pageComponents/home/HomePage";
import { usePathname } from "next/navigation";
import {
  getHomeSelector,
  setIsLargeScreen,
} from "../redux/slices/main/homeSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AOS from "aos";

export default function Index() {
  const dispatch = useDispatch();
  const { isLargeScreen, isRequestModalOpen } = useSelector(getHomeSelector);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        dispatch(setIsLargeScreen(window.innerWidth >= 1024));
      }
    };
    handleResize();
    AOS.init();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [dispatch]);

  useEffect(() => {
    const isSolidityShieldScan = pathname.startsWith("/solidity-shield-scan");

    // Only manipulate the DOM on the client side
    if (isSolidityShieldScan && isLargeScreen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isLargeScreen, pathname]);

  return (
    <div className="bg-primary dark:bg-secondary text-secondary dark:text-primary">
      <Home />
    </div>
  );
}
