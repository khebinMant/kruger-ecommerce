import React, { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingButton from "./SettingButton";
import SettingContext from "./SettingContext";

const mainColor = "#f54e4e";
const secondaryColor = "var(--primary-color)";

const Timer = () => {
  const settingInfo = useContext(SettingContext);
  const [isPaused, setIsPaused] = useState(true);

  const [mode, setMode] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(0);

  let secondsLeftRef = useRef(secondsLeft);
  let isPausedRef = useRef(isPaused);
  let modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    const switchMode = () => {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingInfo.workMinutes
          : settingInfo.breakMinutes) * 60;
      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };

    secondsLeftRef.current = settingInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }
      tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [settingInfo]);

  const totalSeconds =
    mode === "work"
      ? settingInfo.workMinutes * 60
      : settingInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <div className="principalContainer">
      <CircularProgressbar
        value={percentage}
        text={minutes + ":" + seconds}
        styles={buildStyles({
          textColor: "white",
          pathColor: mode === "work" ? mainColor : secondaryColor,
          trailColor: "white",
        })}
      />
      <div className="buttonContainer">
        {isPaused ? (
          <PlayButton
            onClick={() => {
              setIsPaused(false);
              isPausedRef.current = false;
            }}
          />
        ) : (
          <PauseButton
            onClick={() => {
              setIsPaused(true);
              isPausedRef.current = true;
            }}
          />
        )}
      </div>
      <div className="setting_container">
        <SettingButton onClick={() => settingInfo.setshowSettings(true)} />
      </div>
    </div>
  );
};

export default Timer;
