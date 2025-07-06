import React, { useState } from "react";
import ImageToBase64 from "../../helper/ImageToBase";
import { loggedInUser } from "../../hooks/loggedInUser";
import { Bounce, ToastContainer, toast } from "react-toastify";
import postNewDataToDB from '../../hooks/postData'


const AddEvent = () => {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const currentUser = loggedInUser()._id;

  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    if(file){
      const baseImage =await ImageToBase64(file)
      setImage(baseImage);
      setPreview(baseImage)
    }
  };

  const handleSubmit =async () => {
    if(!date || !eventName)
    {
      return toast.warn('All fields Are Required', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    try{
      const eventData = { eventName , eventDescription:description , eventDate:date , eventVenue:venue , eventImage:image , eventAuthor:currentUser};
      const response = await postNewDataToDB('/api/addevent', eventData)
      if(response.status  === 200){
        toast.success("Event posted successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setEventName("");
        setDescription("");
        setDate("");
        setVenue("");
        setImage(null);
        setPreview(null);
        return;
      }
    }catch(err){
      toast.error(err.message || "Something Went Wrong", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    
    
  };

  return (
    <div className="flex justify-center mt-10">
      <ToastContainer/>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[var(--colorPrimary)]">
          Create Event
        </h2>

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
          className="mb-4 border-1 border-gray-400 p-2 w-full rounded cursor-pointer"
        />

        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Event"
              className="w-full h-auto rounded-lg"
            />
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
