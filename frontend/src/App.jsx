// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from './pages/login/login';
import Register from './pages/register/register';
import Layout from './layouts/layout';
import Home from './pages/home/home';
import LostFound from './pages/foundlost/foundlost';
import MyPost from './pages/mypost/mypost';
import Users from './pages/user/user';
import Profile from './pages/profile/profile';
import Post from './pages/post/post';
import AddEvent from './pages/event/addEvent';
import EventsLayout from './layouts/eventsLayout';
import Events from './pages/event/events';
import ChatPage from './components/users/chatPage/chatPage';
import OnboardingPage from './pages/Onboarding/Onboarding'
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { loggedInUser } from './hooks/loggedInUser';
import { fetchAndStoreUser } from './routes/useAuthUser';

function App() {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const localUser = loggedInUser();

      if (localUser) {
        setCurrentUserId(localUser._id);
        setLoading(false);
        return;
      }

      const serverUser = await fetchAndStoreUser();
      if (serverUser?._id) {
        setCurrentUserId(serverUser._id);
      }

      setLoading(false);
    };

    loadUser();
  }, []);

  if (loading) return <p>Loading...</p>; // Prevent flicker while checking login

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/onboarding" element={<OnboardingPage />} />

        {/* Protected routes */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/lostfound" element={<LostFound />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/events" element={<EventsLayout />}>
            <Route index element={<Events />} />
            <Route path="add" element={<AddEvent />} />
          </Route>
          <Route path="/messages/:recipientId" element={<ChatPage currentUserId={currentUserId} />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>

        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
