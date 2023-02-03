import React, { useContext } from "react";
import ReactSlider from "react-slider";
import BackButton from "./BackButton";
import SettingContext from "./SettingContext";
import "./Slider.scss";

const Settings = () => {
  const settingInfo = useContext(SettingContext);
  return (
    <div className="settingsMainContainer">
      <label>Work minutes: {settingInfo.workMinutes}:00</label>
      <ReactSlider
        className="pomodoro_slider"
        thumbClassName="pomodoro_thumb"
        trackClassName="track"
        value={settingInfo.workMinutes}
        min={1}
        onChange={(newValue) => settingInfo.setWorkMinutes(newValue)}
        max={120}
      />
      <label>Break minutes: {settingInfo.breakMinutes}:00</label>
      <ReactSlider
        className="pomodoro_slider pomodoro_greenSlider"
        thumbClassName="pomodoro_thumb"
        trackClassName="track"
        value={settingInfo.breakMinutes}
        min={1}
        onChange={(newValue) => settingInfo.setBreakMinutes(newValue)}
        max={120}
      />
      <div className="backButtonContainer">
        <BackButton
          onClick={() => {
            settingInfo.setshowSettings(false);
          }}
        />
      </div>
    </div>
  );
};

export default Settings;
