import { Box, Typography } from '@mui/material';
import Input from '../../components/ui/input/input';
import './loginStyles.css';
import loginLogo from '../../assets/images/loginLogo.png';
import { ToastContainer, toast, Bounce } from "react-toastify";

const Login = () => {
  const register = (e) => {
    e.preventDefault();
    toast.success('Account Created Successfully!', {
      position: "top-center",
      autoClose: 5000,
      theme: "colored",
      transition: Bounce,
    });
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
          Welcome Back
        </Typography>

        <form className="space-y-5" onSubmit={register}>
          <Input label="Email Address" placeholder="example@example.com" type="email" />
          <Input label="Password" placeholder="********" type="password" />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-[var(--colorPrimary)] hover:underline">
            Register
          </a>
        </p>
      </div>
    </Box>
    </>
  );
};

export default Login;
