import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login/login';
import Register from './pages/register/register';
import Layout from './layout';
import Home from './pages/home/home';
import Community from './pages/community/community';
import MyPost from './pages/mypost/mypost'
import Users from './pages/user/user'
import Profile from './pages/profile/profile'
import Post from './pages/post/post'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypost" element={<MyPost />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
