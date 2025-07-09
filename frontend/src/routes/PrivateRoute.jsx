import { Navigate } from 'react-router-dom';
import { loggedInUser } from '../hooks/loggedInUser';

const PrivateRoute = ({ children }) => {
  const user = loggedInUser();
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
