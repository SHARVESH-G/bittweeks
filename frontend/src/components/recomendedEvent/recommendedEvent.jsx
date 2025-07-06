import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { randomColor } from "../../datas/randomDatas";
import { useEffect, useRef, useState } from "react";
import { truncateText } from "../../helper/textFormat";
import FetchEvent from "../../hooks/userFetchData";
import { MoonLoader } from "react-spinners";
import useCountdown from "../../hooks/useUpdateCuntDown";

const RecommendedEvent = () => {
  const [upCommingEvent, setUpCommingEvent] = useState(null);
  const { data, loading, error } = FetchEvent("/api/getallevent");
  const colorRan = useRef(randomColor())

  useEffect(() => {
    if (data?.fetchedEvents?.length) {
      setUpCommingEvent(data.fetchedEvents[0]);
    }
  }, [data]);

  const { countdown } = useCountdown(upCommingEvent?.eventDate);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <MoonLoader size={25} color="var(--colorPrimary)" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 font-medium">{error}</div>
    );
  }

  if (!upCommingEvent) return null;

  return (
    <div className="bg-white px-6 py-8 rounded-xl shadow">
      <h2 className="text-sm font-semibold mb-3 pb-4">Upcoming Event</h2>
      <ul className="space-y-3">
        <li
          key={upCommingEvent._id}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Avatar
              sx={{
                bgcolor: colorRan.current,
                width: 32,
                height: 32,
                fontSize: 14,
              }}
            >
              {upCommingEvent.eventName.slice(0, 1)}
            </Avatar>
            <div className="text-xs">
              <p className="font-medium">
                {truncateText(upCommingEvent.eventName, 20)}
              </p>
              <p className="text-[var(--colorPrimaryHover)]">{countdown}</p>
              <p className="text-[10px] text-gray-400">{upCommingEvent.venue}</p>
            </div>
          </div>
          <Link to="/events" className="text-[var(--colorPrimary)] text-[10px] border-2 rounded p-1 hover:bg-[var(--colorPrimary)] hover:text-white">
            See all
          </Link>
        </li>
      </ul>
      <div className="flex justify-between pt-3 text-xs"></div>
    </div>
  );
};

export default RecommendedEvent;
