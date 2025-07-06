import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login/login';
import Register from './pages/register/register';
import Layout from './layouts/layout';
import Home from './pages/home/home';
import Community from './pages/community/community';
import MyPost from './pages/mypost/mypost';
import Users from './pages/user/user';
import Profile from './pages/profile/profile';
import Post from './pages/post/post';
import AddEvent from './pages/event/addEvent';
import EventsLayout from './layouts/eventsLayout';
import Events from './pages/event/events';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/lostfound" element={<Community />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/events" element={<EventsLayout />}>
            <Route index element={<Events />} />
            <Route path="add" element={<AddEvent />} />
          </Route>

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>

        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
