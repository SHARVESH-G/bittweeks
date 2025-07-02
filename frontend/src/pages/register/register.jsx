import { Box, Typography, Grid } from "@mui/material";
import Input from "../../components/ui/input/input";
import "./registerStyles.css";
import loginLogo from "../../assets/images/loginLogo.png";
import SelectDept from "../../components/ui/selectInput/selectInput";

const Register = () => {
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
              <SelectDept text="Department" className="w-[100%]"/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Input label="Email Address" placeholder="example@example.com" type="email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input label="Password" placeholder="********" type="password" />
            </Grid>
          </Grid>

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[var(--colorPrimary)] hover:underline">
            Login
          </a>
        </p>
      </div>
    </Box>
  );
};

export default Register;
