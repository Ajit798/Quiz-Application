import React, { useState, useEffect } from "react";

function Timer({ handleTimerStatus }) {
  const [timeLeft, setTimeLeft] = useState(1800); // 1800 seconds is equivalent to 30 minutes

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        handleTimerStatus();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mt-6 border border-black p-2 rounded-md bg-white">
      <h1>Timer</h1>
      <p>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
}

export default Timer;
