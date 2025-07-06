import { useState, useEffect } from "react";

const useCountdown = (eventDate) => {
  const [countdown, setCountdown] = useState("");
  const [timeDiff, setTimeDiff] = useState(Infinity);

  useEffect(() => {
    const eventDateObj = new Date(eventDate);

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDateObj - now;
      setTimeDiff(diff);

      if (diff <= 0) {
        setCountdown("Event Started");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return { countdown, timeDiff };
};

export default useCountdown;
