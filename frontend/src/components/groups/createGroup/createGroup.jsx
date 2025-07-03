import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const CreateCommunity = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

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

  const handleCreate = () => {
    alert("Community Created!");
    console.log({ name, genre, image });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold mb-4 text-[var(--colorPrimary)]">
          Create Community
        </h2>

        <input
          type="text"
          placeholder="Community Name"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--colorPrimary)]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 border border-1 border-gray-400 p-2 w-full rounded cursor-pointer"
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

export default CreateCommunity;
