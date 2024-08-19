import { useSelector } from "react-redux";
import "./Sidebar.css";
import {
  getCommonSelector,
  setSelectedSidebarItem,
  setSideBar,
} from "../../redux/commonSlice";
import { useDispatch } from "react-redux";
import CustomDivider from "../../components/common/CustomDivider";
import { sidebarItems } from "./sidebar.data.js";

const Sidebar = () => {
  const { showSideBar, selectedSidebarItem } = useSelector(getCommonSelector);
  const dispatch = useDispatch();

  const selectMenuItem = (name) => {
    dispatch(setSelectedSidebarItem(name));
  };

  return (
    showSideBar && (
      <div className="sss-sidebar-container">
        <div className="sss-sidebar">
          <div className="sss-sidebar-header">
            <img
              className="sss-sidebar-header-logo"
              src="/assets/images/securedapp-logo-light.svg"
              alt="SecureDApp Logo"
            />
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
              {sidebarItems.map((item) => {
                return (
                  <div
                    onClick={() => selectMenuItem(item.name)}
                    className={`sss-sidebar-item-container ${
                      selectedSidebarItem === item.name &&
                      "selected-sss-sidebar-item"
                    }`}>
                    <div className="sss-sidebar-item">
                      <div className="sss-sidebar-item-logo">
                        <img src={item.image} alt="" />
                        <item.image
                          fill={"none"}
                          stroke={
                            selectedSidebarItem === item.name
                              ? "#12D576"
                              : "#B2ABAB"
                          }
                        />
                      </div>
                      <div className="sss-sidebar-item-text">{item.name}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
