import React, { useState, useEffect, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import TimeInput from "./TimeInput";
import TimerAlert from "./TimerAlert";
import "../styles/Timer.css";

const Timer: React.FC = () => {
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [inputMinutes, setInputMinutes] = useState<string>("5");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);
  
  // Sử dụng useRef để lưu trữ giá trị hiện tại
  const secondsRef = useRef<number>(seconds);
  const minutesRef = useRef<number>(minutes);

  // Cập nhật ref khi state thay đổi
  useEffect(() => {
    secondsRef.current = seconds;
    minutesRef.current = minutes;
  }, [seconds, minutes]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        // Sử dụng giá trị từ ref để luôn lấy giá trị mới nhất
        if (secondsRef.current > 0) {
          setSeconds(secondsRef.current - 1);
        } else if (minutesRef.current > 0) {
          setMinutes(minutesRef.current - 1);
          setSeconds(59);
        } else {
          setIsRunning(false);
          setShowAlert(true);
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
        }
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const startTimer = () => {
    if (minutes === 0 && seconds === 0) {
      resetTimer();
    } else {
      setIsRunning(true);
      setShowAlert(false);
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(parseInt(inputMinutes) || 5);
    setSeconds(0);
    setShowAlert(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputMinutes(value);
    if (!isRunning) {
      setMinutes(parseInt(value) || 0);
    }
  };

  return (
    <div className="timer-container">
      <div className="timer-header">
        <h1>⏳ TIMER</h1>
      </div>

      <TimerDisplay minutes={minutes} seconds={seconds} />
      <TimeInput
        inputMinutes={inputMinutes}
        isRunning={isRunning}
        onInputChange={handleInputChange}
      />
      <TimerControls
        isRunning={isRunning}
        onStart={startTimer}
        onReset={resetTimer}
      />
      <TimerAlert show={showAlert} />
    </div>
  );
};

export default Timer;
