import React from "react";
import "../styles/TimerAlert.css";

interface TimerAlertProps {
  show: boolean;
}

const TimerAlert: React.FC<TimerAlertProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="timer-alert">
      <p>Hết giờ!</p>
    </div>
  );
};

export default TimerAlert;
