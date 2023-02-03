import React from "react";

const SettingButton = (props) => {
  return (
    <>
      <button {...props} className="settingsButton">
        <i class="fa-solid fa-gear"></i>
        <p>Settings</p>
      </button>
    </>
  );
};
export default SettingButton;
