import React, { useState, useEffect } from 'react';
import EventCard from '../../components/eventCard/eventCard';
import FetchEvent from '../../hooks/userFetchData';
import { MoonLoader } from 'react-spinners';

const Event = () => {
  const { data, loading, error } = FetchEvent("/api/getallevent");
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    if (data?.fetchedEvents) {
      setAllEvents(data.fetchedEvents);
    }
  }, [data]);


  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <MoonLoader size={55} color="var(--colorPrimary)" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {allEvents.length===0?(<h2>No Upcomming Events</h2>) :(allEvents.map((event) => (
          <EventCard
            key={event._id}
            eventName={event.eventName}
            description={event.description}
            date={event.eventDate}
            venue={event.venue}
            image={event.image}
            author = {event.author.name}
            authorProfilePic = {event.author.profilePic}
            authorAfllFollowers = {event.author.allFollowers}
          />
        )))}
      </div>
    </div>
  );
};

export default Event;
