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
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDay()];

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const time =
      [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
      ].join(" : ") + ` ${ampm}`;

    return `${time}`;
  }

  function getDay() {
    const now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    const day = days[now.getDay()];
    return `${day}`;
  }

  return (
    <div className="flex flex-row justify-center items-center p-10 text-4xl border-b-3">
        <div className="flex flex-col justify-center items-center text-4xl pr-6">
            <FiClock size={75} />
        </div>
        <div className="flex flex-col justify-center items-center text-4xl">
            <h2>{time}</h2>
            <h2>{day}</h2>
        </div>
    </div>
  );
}

export default DigitalClock;
