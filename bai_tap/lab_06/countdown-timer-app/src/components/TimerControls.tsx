import React from "react";
import "../styles/TimerControls.css";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onReset: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  onStart,
  onReset,
}) => {
  return (
    <div className="timer-controls">
      <button className="start-btn" onClick={onStart} disabled={isRunning}>
        START
      </button>
      <button className="reset-btn" onClick={onReset}>
        RESET
      </button>
    </div>
  );
};

export default TimerControls;
