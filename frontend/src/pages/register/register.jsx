import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import Input from "../../components/ui/input/input";
import SelectDept from "../../components/ui/selectInput/selectInput";
import loginLogo from "../../assets/images/loginLogo.png";
import "./registerStyles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      toast.warn('Image too large. Please upload an image smaller than 1MB.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !department) {
      toast.info('Please fill all fields.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password,
        department,
        profileImage,
      });

      if (response.status === 201 || response.data.success) {
        toast.success("Logged in successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
        navigate("/login");
      } else {
        toast.error("Loggin Failed!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
          transition: Bounce,
        });
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Registration failed!";
      toast.info(msg, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Box className="login-container">
        <Box className="hidden lg:block">
          <img src={loginLogo} alt="Logo" className="w-64" />
        </Box>

        <div className="login-bg">
          <Typography
            variant="h5"
            className="text-center font-semibold mb-6"
            style={{ color: `var(--colorPrimary)` }}
          >
            Register
          </Typography>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <SelectDept
                  text="Department"
                  className="w-full"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Input
                  label="Email Address"
                  placeholder="example@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Input
                  label="Password"
                  placeholder="********"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-gray-700">
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="text-sm"
                  />
                  {preview && (
                    <img
                      src={preview}
                      alt={`Profile Preview of ${name}`}
                      className="w-28 h-28 object-cover rounded-full mt-2 border border-gray-300 shadow"
                    />
                  )}
                </div>
              </Grid>
            </Grid>

            <button type="submit" className="login-btn">
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[var(--colorPrimary)] hover:underline font-medium"
            >
              Login
            </a>
          </p>
        </div>
      </Box>
    </>
  );
};

export default Register;
