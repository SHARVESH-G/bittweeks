import { Box, Typography,Grid } from "@mui/material";
import Input from "../../components/ui/input/input";
import "./registerStyles.css";
import loginLogo from "../../assets/images/loginLogo.png";
import SelectDept from "../../components/ui/selectInput/selectInput";

const Register = () => {
  return (
    <Box className="login-container">
      <Box>
        <img src={loginLogo} alt="Logo" />
      </Box>
      <div className="login-bg">
        <Typography
          variant="h4"
          className="text-center font-bold mb-6"
          style={{ color: `var(--colorPrimary)` }}
        >
          Welcome Back
        </Typography>

        <form className="space-y-6">
          <Grid container spacing={2}>
            <Grid item size={6}>
              <Input label="Full Name" placeholder="Enter your Full Name" />
            </Grid>
            <Grid item size={6}>
              <SelectDept text="Department"/>
            </Grid>
            <Grid item size={6}>
              <Input label="Email Address" placeholder="example@example.com" type="email"/>
            </Grid>
            <Grid item size={6}>
              <Input
                label="Password"
                placeholder="* * * * * * * *"
                type="password"
              />
            </Grid>
          </Grid>
          

          <button type="submit" className="login-btn">
            Register
          </button>
        </form>

        <p
          variant="body2"
          className="text-center text-gray-500 mt-8 pt-5 text-xl"
        >
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[var(--colorPrimary)] hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </Box>
  );
};

export default Register;
