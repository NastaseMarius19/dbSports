import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import { useState } from 'react';
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import PostContentPage from './pages/PostContentPage';
import TournamentsPage from './pages/TournamentsPage';
import { LoginContext } from './components/Context/LoginContext'
function App() {
  const [email, setEmail] = useState('');
  console.log(email);
  return (
    <React.StrictMode>
      <LoginContext.Provider value={{ email, setEmail }}>
        <BrowserRouter>
          <Routes>
            {email == '' && <Route path="/" element={<Login />} />}
            {email == '' && <Route path="register" element={<Register />} />}
            {email != '' && <Route path="mainpage" element={<MainPage />} />}
            {email != '' && <Route path="postcontentpage" element={<PostContentPage />} />}
            {email != '' && <Route path="tournaments" element={<TournamentsPage />} />}
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </React.StrictMode>
  );
}

export default App;
