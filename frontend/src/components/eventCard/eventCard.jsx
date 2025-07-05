import React, { useEffect, useState } from "react";

const EventCard = ({ eventName, description, date, image, venue }) => {
  const [countdown, setCountdown] = useState("");
  const[timeDiff , setTimeDiff] = useState(Infinity)
  useEffect(() => {
    const eventDate = new Date(date);

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate - now;
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
  }, [date]);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm h-full flex flex-col">
      {image && (
        <img src={image} alt={eventName} className="w-full h-60 object-cover rounded-lg mb-3" />
      )}
      <h2 className={`text-xl font-bold text-[var(--colorPrimary)] ${timeDiff <= 0 ? "line-through" : ""}`}>
        {eventName}
      </h2>

      <p className="text-gray-600 mb-2 flex-grow">{description}</p>
      <div className="text-sm text-gray-500 mb-1">
        <strong>Date:</strong> {date}
      </div>
      <div className="text-sm text-gray-500 mb-1">
        <strong>Venue:</strong> {venue}
      </div>
      <div className="text-sm text-[var(--colorPrimary)] font-medium mt-2">
        <p>{countdown}</p>
      </div>
    </div>
  );
};

export default EventCard;
