import { Outlet, useLocation } from "next/router";
import Header from "../header/Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSelectedSidebarItem } from "../../redux/commonSlice";

const capitalizePath = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const MainLayout = () => {
  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname) {
      const pathName = location.pathname.split("/")[2];
      if (pathName) {
        if (pathName === "vulnerability-scans" || pathName === "scan-report") {
          dispatch(setSelectedSidebarItem("Vulnerability Scans"));
        } else if (pathName === "pricing") {
          dispatch(setSelectedSidebarItem("Payment"));
        } else if (pathName === "audit-certificate") {
          dispatch(setSelectedSidebarItem("Audit Certificate"));
        } else {
          dispatch(setSelectedSidebarItem(capitalizePath(pathName)));
        }
      }
    }
  }, [location]);

  return (
    <div className="sss-product">
      <Sidebar />
      <div className="sss-product-with-header">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export const NoSidebarLayout = () => {
  return (
    <div className="py-4 h-screen overflow-y-auto">
      <Outlet />
    </div>
  );
};
