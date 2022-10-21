import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";
import PostContentPage from "./pages/PostContentPage";
import TournamentsPage from "./pages/TournamentsPage";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
