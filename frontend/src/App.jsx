import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
