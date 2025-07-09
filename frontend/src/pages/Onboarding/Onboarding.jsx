import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Input from "../../components/ui/input/input";
import SelectDept from "../../components/ui/selectInput/selectInput";
import { toast, ToastContainer } from "react-toastify";
import ImageToBase64 from "../../helper/ImageToBase";

const Onboarding = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [regNo, setRegNo] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [isHosteller, setIsHosteller] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (!emailParam) return navigate("/login");
    setEmail(emailParam);
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024) {
      toast.warn("Image too large. Upload less than 1MB.");
      return;
    }
    const base64 = await ImageToBase64(file);
    setProfileImage(base64);
    setPreview(base64);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !department || !regNo || !startYear || !endYear) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/onboard", {
        name,
        email,
        department,
        regNo,
        startYear,
        endYear,
        isHosteller,
        profilePic: profileImage,
      });

      toast.success("Onboarding complete!");
      navigate("/dashboard");
    } catch (err) {
      toast.error("Failed to submit onboarding");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-6 text-center text-[var(--colorPrimary)]">Onboarding</h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <SelectDept
          text="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <Input
          label="Register Number"
          placeholder="Your Register Number"
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Start Year"
            placeholder="e.g. 2021"
            type="number"
            value={startYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
          <Input
            label="End Year"
            placeholder="e.g. 2025"
            type="number"
            value={endYear}
            onChange={(e) => setEndYear(e.target.value)}
          />
        </div>

        <div>
          <label className="font-medium text-sm text-gray-700">Residency</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={isHosteller === true}
                onChange={() => setIsHosteller(true)}
              />
              Hosteller
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={isHosteller === false}
                onChange={() => setIsHosteller(false)}
              />
              Day Scholar
            </label>
          </div>
        </div>

        <div>
          <label className="font-medium text-sm text-gray-700">Profile Picture (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 rounded-full mt-2 object-cover border"
            />
          )}
        </div>

        <button
          type="submit"
          className="login-btn w-full bg-[var(--colorPrimary)] text-white py-2 rounded hover:opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Onboarding;