import { useSelector } from "react-redux";
import "./Sidebar.css";
import { getCommonSelector } from "../../redux/commonSlice";
import { useDispatch } from "react-redux";
import CustomDivider from "../../components/common/CustomDivider";
import { sidebarItems } from "./sidebar.data.js";

const Sidebar = () => {
  const { showSideBar } = useSelector(getCommonSelector);
  const dispatch = useDispatch();

  return (
    <div className="sss-sidebar-container">
      <div className="sss-sidebar">
        <div className="sss-sidebar-header">
          <img
            className="sss-sidebar-header-logo"
            src="/assets/images/securedapp-logo-light.svg"
            alt="SecureDApp Logo"
          />
          <img
            src="/assets/images/solidity-shield-scan/sidebar-menu.svg"
            alt="Sidebar Toggle"
          />
        </div>
        <CustomDivider classname={"w-10/12 pt-5"} />
        <div className="sss-body">
          <div className="sss-body-header">
            <div className="">MAIN MENUS</div>
          </div>
          <div className="sss-body-navigation">
            {sidebarItems.map((item) => {
              return (
                <div className="sss-sidebar-item-container">
                  <div className="sss-sidebar-item">
                    <div className="sss-sidebar-item-logo">
                      <img src={item.image} alt="" />
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
  );
};

export default Sidebar;
