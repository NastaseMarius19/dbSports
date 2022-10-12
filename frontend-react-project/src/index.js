import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Register from './pages/Register'
import MainPage from './pages/MainPage'
import PostContentPage from './pages/PostContentPage';
import TournamentsPage from './pages/TournamentsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="mainpage" element={<MainPage />} />
          <Route path="postcontentpage" element={<PostContentPage />} />
        <Route path="tournaments" element={<TournamentsPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


