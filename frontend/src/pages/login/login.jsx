import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Input from '../../components/ui/input/input';
import './loginStyles.css';
import loginLogo from '../../assets/images/loginLogo.png';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navi = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill all fields!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
        transition: Bounce,
      });
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      toast.success('Logged in successfully!', {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
        transition: Bounce,
      });
      navi('/dashboard');


    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed!';
      toast.error(msg, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
        transition: Bounce,
      });
      console.log("Login error:", err.response);
    } finally {
      setLoading(false);
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
            Welcome Back
          </Typography>

          <form className="space-y-5" onSubmit={handleLogin}>
            <Input
              label="Email Address"
              placeholder="example@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              placeholder="********"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
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
