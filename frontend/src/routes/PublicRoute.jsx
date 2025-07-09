import { Navigate } from 'react-router-dom';
import { loggedInUser } from '../hooks/loggedInUser';

const PublicRoute = ({ children }) => {
  const user = loggedInUser();
  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
