import React from "react";
import "./Pomodoro.scss";
import { useState } from "react";
import SettingContext from "./components/SettingContext";
import Settings from "./components/Settings";
import Timer from "./components/Timer";

const Pomodoro = () => {
  const [showSettings, setshowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  return (
    <div className="pomodoro">
      <main>
        <SettingContext.Provider
          value={{
            showSettings,
            setshowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingContext.Provider>
      </main>
    </div>
  );
};

export default Pomodoro;
