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
import { useNavigate } from "react-router-dom";
import CustomButton from "../common/CustomButton.js";
import ProgressBar from "@ramonak/react-progress-bar";
import { getUserData } from "../../redux/auth/authSlice.js";
import { logout } from "../../functions.js";

const Sidebar = () => {
  const { showSideBar, selectedSidebarItem, creditsRemaining } =
    useSelector(getCommonSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalCredits = 20;

  const auth = useSelector(getUserData);

  const selectMenuItem = (name) => {
    name === "Log Out" && logout();
    navigate(name.toLowerCase());
    dispatch(setSelectedSidebarItem(name));
  };

  return (
    showSideBar && (
      <div className="sss-sidebar-container">
        <div className="sss-sidebar">
          <div className="sss-sidebar-upper">
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
                      }`}
                    >
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
          <div className="sss-sidebar-lower">
            <div className="sss-sidebar-credits-card">
              <div className="">Remaining Credits</div>
              <div className="sss-sidebar-credits-container">
                <div className="">
                  <ProgressBar
                    completed={
                      ((auth.user.credits - auth.user.remainingCredits) /
                        auth.user.credits) *
                      100
                    }
                    height={"10px"}
                    bgColor="#00ABB5"
                    isLabelVisible={false}
                    baseBgColor="#CDCDCD"
                    labelColor="#e80909"
                  />
                </div>
                <div className="sss-sidebar-credits-text">
                  {auth.user.remainingCredits}/{auth.user.credits}
                </div>
              </div>
              <CustomButton
                text={"Upgrade Now"}
                className="w-full text-black bg-[#009580] py-3 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
