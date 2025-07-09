import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            alert("Đã đếm xong!");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    if (time === 0) setTime(10);
    setIsRunning(true);
  };

  return (
    <div>
      <div>Count down from: {time}</div>
      <button onClick={handleStart} disabled={isRunning}>
        {time === 0 ? "Bắt đầu lại" : "Bắt đầu"}
      </button>
    </div>
  );
}

export default Timer;
