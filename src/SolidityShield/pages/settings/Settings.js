import { useState } from "react";
import "./Settings.css";
import CustomButton from "../../components/common/CustomButton";

const settingsTypes = ["Profile", "Additional Settings"];

const ProfileScreenField = ({ label, children }) => {
  return (
    <div className="sss-settings-screen-field-container">
      <div className="sss-settings-screen-field">
        <div className="sss-settings-screen-field-label">{label}</div>
        <div className="sss-settings-screen-field-children">{children}</div>
      </div>
    </div>
  );
};

const ProfileScreenInputTextField = ({
  type,
  placeHolder,
  onChangee,
  value,
}) => {
  return (
    <div className="sss-settings-screen-input-text-field-container">
      <input
        className="sss-settings-screen-input-text-field"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChangee(e.target.value)}
        value={value}
      />
    </div>
  );
};

const Settings = () => {
  const [settingsType, setSettingsType] = useState(settingsTypes[0]);

  return (
    <div className="sss-settings-screen-container">
      <div className="sss-settings-screen">
        <div className="sss-settings-header">
          <div className="">Settings</div>
        </div>
        <div className="sss-settings-body">
          <div className="sss-settings-body-header">
            <div className="sss-settings-body-header-filter-container">
              {settingsTypes.map((filter) => {
                return (
                  <div
                    onClick={() => setSettingsType(filter)}
                    className={`sss-settings-body-header-filter ${
                      filter === settingsType &&
                      "sss-settings-body-header-filter-selected"
                    }`}>
                    {filter}
                    <div
                      className={`sss-settings-body-header-filter-under ${
                        filter === settingsType &&
                        "sss-settings-body-header-filter-under-selected"
                      }`}></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sss-settings-body-main">
            {settingsType === "Profile" ? (
              <div className="sss-settings-body-profile-container">
                <div className="sss-settings-body-profile-fields-row">
                  <ProfileScreenField label={"First Name"}>
                    <ProfileScreenInputTextField
                      type={"text"}
                      placeHolder={"First Name"}
                      onChangee={() => {}}
                    />
                  </ProfileScreenField>
                  <ProfileScreenField label={"Last Name"}>
                    <ProfileScreenInputTextField
                      type={"text"}
                      placeHolder={"Last Name"}
                      onChangee={() => {}}
                    />
                  </ProfileScreenField>
                </div>
                <div className="sss-settings-body-profile-fields-row">
                  <ProfileScreenField label={"Email"}>
                    <ProfileScreenInputTextField
                      type={"email"}
                      placeHolder={"Email"}
                      onChangee={() => {}}
                    />
                  </ProfileScreenField>
                  <ProfileScreenField label={"Company Name"}>
                    <ProfileScreenInputTextField
                      type={"text"}
                      placeHolder={"Company Name"}
                      onChangee={() => {}}
                    />
                  </ProfileScreenField>
                </div>
                <div className="sss-settings-body-profile-checkboxes">
                  <div className="sss-settings-body-profile-checkbox">
                    <input type="checkbox" />
                    <div className="">
                      Product updates and community announcements
                    </div>
                  </div>
                  <div className="sss-settings-body-profile-checkbox">
                    <input type="checkbox" />
                    <div className="">Marketing email</div>
                  </div>
                  <div className="sss-settings-body-profile-checkbox">
                    <input type="checkbox" />
                    <div className="">Discounts and promotions</div>
                  </div>
                </div>
                <div className="sss-settings-body-profile-button">
                  <CustomButton
                    text={"Save & Continue"}
                    className={
                      "w-full px-3 py-3 rounded-xl text-black border border-tertiary active:bg-tertiary"
                    }
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
