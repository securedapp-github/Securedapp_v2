import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "./Sidebar";

export const MainLayout = () => {
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
