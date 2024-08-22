import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
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
    //console.log(capitalizePath(location.pathname.split("/")[2]));
    dispatch(
      setSelectedSidebarItem(capitalizePath(location.pathname.split("/")[2]))
    );
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
    <div>
      <Outlet />
    </div>
  );
};
