import React from "react";
import "../styles/TimeInput.css";

interface TimeInputProps {
  inputMinutes: string;
  isRunning: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({
  inputMinutes,
  isRunning,
  onInputChange,
}) => {
  return (
    <div className="time-input">
      <label htmlFor="minutes">Đặt thời gian (phút): </label>
      <input
        type="number"
        id="minutes"
        value={inputMinutes}
        onChange={onInputChange}
        min="0"
        disabled={isRunning}
      />
    </div>
  );
};

export default TimeInput;
