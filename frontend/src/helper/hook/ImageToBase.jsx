import { useState } from 'react';

const useImagePreview = () => {
  const [imageBase64, setImageBase64] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return { imageBase64, preview, handleImageChange };
};

export default useImagePreview;


// how to use
// import useImagePreview from '../../hooks/useImagePreview';

// const MyComponent = () => {
//   const { imageBase64, preview, handleImageChange } = useImagePreview();

//   return (
//     <div>
//       <input type="file" accept="image/*" onChange={handleImageChange} />

//       {preview && (
//         <img src={preview} alt="Preview" className="w-28 h-28 rounded-full" />
//       )}
//     </div>
//   );
// };
