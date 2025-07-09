import React from "react";
import "../styles/TimerDisplay.css";

interface TimerDisplayProps {
  minutes: number;
  seconds: number;
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ minutes, seconds }) => {
  return (
    <div className="timer-display">
      <span className="time">{minutes.toString().padStart(2, "0")}</span>
      <span className="unit">m</span>
      <span className="time">{seconds.toString().padStart(2, "0")}</span>
      <span className="unit">s</span>
    </div>
  );
};

export default TimerDisplay;
