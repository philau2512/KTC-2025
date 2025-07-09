import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Chỉ chạy effect khi isRunning là true
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Hàm cleanup - chạy khi component unmount hoặc trước khi effect chạy lại
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]); // Dependency array - effect chạy lại khi isRunning thay đổi

  return (
    <div>
      <p>Đồng hồ: {seconds} giây</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Dừng" : "Bắt đầu"}
      </button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

export default Timer;