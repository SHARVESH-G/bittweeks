import React, { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

function DigitalClock() {
  const [time, setTime] = useState(getFormattedDateTime());
  const [day, setDay] = useState(getDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedDateTime());
      setDay(getDay());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getFormattedDateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(" : ") + ` ${ampm}`;
  }

  function getDay() {
    const now = new Date();
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][now.getDay()];
  }

  return (
    <div className="flex items-center justify-center gap-3 py-3 border-b border-gray-300 select-none">
      <FiClock className="text-gray-700" size={30} />
      <div className="text-center">
        <h2 className="text-sm font-medium">{time}</h2>
        <h2 className="text-xs text-gray-500">{day}</h2>
      </div>
    </div>
  );
}

export default DigitalClock;
