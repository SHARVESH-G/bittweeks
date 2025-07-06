import { useEffect, useState } from "react";
import axios from "axios";

const AnnouncementCard = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) return <div className="bg-white px-6 py-8 rounded-xl shadow">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white px-6 py-8 rounded-xl shadow">
      <h2 className="text-sm font-semibold mb-1 pb-4">Announcement</h2>
      {quote ? (
        <>
          <p>{quote.q}</p>
        </>
      ) : (
        <p>No Announcements available</p>
      )}
    </div>
  );
};

export default AnnouncementCard;
