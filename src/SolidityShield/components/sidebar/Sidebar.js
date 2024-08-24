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

const Sidebar = () => {
  const { showSideBar, selectedSidebarItem, creditsRemaining } =
    useSelector(getCommonSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalCredits = 20;

  const selectMenuItem = (index) => {
    navigate(sidebarItems[index].to);
    dispatch(setSelectedSidebarItem(sidebarItems[index].name));
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
                {sidebarItems.map((item, index) => {
                  return (
                    <div
                      onClick={() => selectMenuItem(index)}
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
          <div className="sss-sidebar-lower">
            <div className="sss-sidebar-credits-card">
              <div className="">Remaining Credits</div>
              <div className="sss-sidebar-credits-container">
                <div className="">
                  <ProgressBar
                    completed={(creditsRemaining / totalCredits) * 100}
                    height={"10px"}
                    bgColor="#12D576"
                    isLabelVisible={false}
                    baseBgColor="#CDCDCD"
                  />
                </div>
                <div className="sss-sidebar-credits-text">
                  {creditsRemaining}/{totalCredits}
                </div>
              </div>
              <CustomButton
                text={"Upgrade Now"}
                className="w-full text-black bg-[#12D576] py-3 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
