import React, { useState } from "react";
import postNewDataToDB from "../../../hooks/postData";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { loggedInUser } from "../../../hooks/loggedInUser";

const CreateRequest = () => {
  const [reqTitle, setReqTitle] = useState("");
  const [reqType, setReqType] = useState("lost");
  const [contactInfo , setContactInfo] = useState("")
  const [place , setPlace] = useState("")
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const currentUserId = loggedInUser()._id;
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate =async () => {
    if(!reqTitle || !reqType || !contactInfo){
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
      const formData = {reqTitle,reqType,reqContactInfo: contactInfo,reqPlace: place,reqImage: image,reqAuthor: currentUserId,};
      const response = await postNewDataToDB('/api/newlostfoundreq' , formData)
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
              setReqTitle("");
              setReqType("lost");
              setContactInfo("");
              setPlace("");
              setImage(null);
              setImage(null);
              return;
      }
    }
    catch(err){
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
  }

  return (
    <div className="flex justify-center mt-10">
      <ToastContainer/>
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[var(--colorPrimary)]">
          Create Request
        </h2>

        <input
          type="text"
          placeholder="Request Title"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={reqTitle}
          onChange={(e) => setReqTitle(e.target.value)}
        />

        <div className="mb-4">
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="lost"
                checked={reqType === "lost"}
                onChange={() => setReqType("lost")}
                className="accent-[var(--colorPrimary)]"
              />
              <span className="text-gray-700">Lost</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="found"
                checked={reqType === "found"}
                onChange={() => setReqType("found")}
                className="accent-[var(--colorPrimary)]"
              />
              <span className="text-gray-700">Found</span>
            </label>
          </div>
        </div>
        <input
          type="text"
          placeholder={`Place of ${reqType.slice(0,1).toUpperCase()}${reqType.slice(1)}`}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          type="text"
          placeholder={`Contact Information`}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 border border-gray-400 p-2 w-full rounded cursor-pointer"
        />

        {preview && (
          <div className="mb-4">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}

        <button
          onClick={handleCreate}
          className="w-full bg-[var(--colorPrimary)] hover:bg-[var(--colorPrimaryHover)] text-white py-2 px-4 rounded-lg transition"
        >
          Create
        </button>
      </div>  
    </div>
  );
};

export default CreateRequest;
