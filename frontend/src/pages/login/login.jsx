import { Box, Typography } from '@mui/material'
import Input from '../../components/ui/input/input'
import './loginStyles.css'
import loginLogo from '../../assets/images/loginLogo.png'
import { ToastContainer, toast , Bounce} from "react-toastify";

const Login = () => {

  const register=(e)=>{
    e.preventDefault();
    toast.success('Account Created Successfully !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }


  return (
    <Box className="login-container">
      <ToastContainer />
      <Box>
        <img src={loginLogo} alt='Logo' />
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
          <Input label="Email Address" placeholder="example@example.com" type="email"/>
          <Input label="Password" placeholder="* * * * * * * *" type="password"/>

          <button type="submit" className="login-btn" onClick={register}>
            Login
          </button>
        </form>

        <p variant="body2" className="text-center text-gray-500 mt-8 pt-5 text-xl">
          Don't have an account?{' '}
          <a href="/register" className="text-[var(--colorPrimary)] hover:underline">
            Register
          </a>
      </p>

      </div>
    </Box>
  )
}

export default Login
