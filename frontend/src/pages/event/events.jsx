import React, { useState } from 'react';
import EventCard from '../../components/eventCard/eventCard';

const Event = () => {
  const [events] = useState([
    {
      eventName: 'BYTES',
      description: 'Placement Training',
      date: '2025-08-20',
      venue: 'SF2',
      image: 'https://placehold.co/600x400?text=React+Conf',
    },
    {
      eventName: 'Crayon-D',
      description: 'Company Handson Training',
      date: '2024-09-05',
      venue: 'Delhi Tech Hub',
      image: 'https://placehold.co/600x400?text=Open+Blog+Meet',
    },
  ]);

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        {events.map((event, index) => (
          <EventCard
            key={index}
            eventName={event.eventName}
            description={event.description}
            date={event.date}
            venue={event.venue}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
