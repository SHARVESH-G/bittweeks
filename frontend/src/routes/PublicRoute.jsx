import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

const PublicRoute = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
