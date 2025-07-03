import { Box, Typography, Grid } from "@mui/material";
import { useState } from "react";
import Input from "../../components/ui/input/input";
import SelectDept from "../../components/ui/selectInput/selectInput";
import loginLogo from "../../assets/images/loginLogo.png";
import "./registerStyles.css";

const Register = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result); // base64 string
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
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

        <form className="space-y-6">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Input label="Full Name" placeholder="Enter your full name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectDept text="Department" className="w-full" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input label="Email Address" placeholder="example@example.com" type="email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input label="Password" placeholder="********" type="password" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm text-gray-700">Profile Picture</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="text-sm"
                />
                {preview && (
                    <img
                      src={preview}
                      alt="Profile Preview"
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
          <a href="/login" className="text-[var(--colorPrimary)] hover:underline font-medium">
            Login
          </a>
        </p>
      </div>
    </Box>
  );
};

export default Register;
