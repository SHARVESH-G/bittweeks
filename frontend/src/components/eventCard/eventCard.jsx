const EventCard = ({ eventName, description, date, image, venue }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm h-full flex flex-col">
      {image && (
        <img src={image} alt={eventName} className="w-full h-60 object-cover rounded-lg mb-3" />
      )}
      <h2 className="text-xl font-bold text-[var(--colorPrimary)]">{eventName}</h2>
      <p className="text-gray-600 mb-2 flex-grow">{description}</p>
      <div className="text-sm text-gray-500 mb-1"><strong>Date:</strong> {date}</div>
      <div className="text-sm text-gray-500"><strong>Venue:</strong> {venue}</div>
    </div>
  );
};
export default EventCard;