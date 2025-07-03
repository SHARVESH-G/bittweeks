import React, { useState } from 'react';

const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 string
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    const eventData = { eventName, description, date, venue, image };
    console.log('Event submitted:', eventData);
    alert('Event posted!');
    setEventName('');
    setDescription('');
    setDate('');
    setVenue('');
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="flex justify-center mt-10">
      <div
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[var(--colorPrimary)]">Create Event</h2>

        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
        />

        <textarea
          rows="3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-gray-700"
        />

        <input
          type="text"
          placeholder="Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />

        {preview && (
          <div className="mb-4">
            <img src={preview} alt="Event" className="w-full h-auto rounded-lg" />
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="w-full bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white py-2 px-4 rounded-lg transition"
        >
          Post Event
        </button>
      </div>
    </div>
  );
};

export default AddEvent;
