import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.js'
import Register from './pages/Register.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


