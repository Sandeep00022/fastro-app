import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
  }

  return (
    <div>
      <p className="font-semibold">{currentTime}</p>
    </div>
  );
};

export default CurrentTime;
