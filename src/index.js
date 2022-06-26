import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import { Footer } from "./components/Footer";
import { Login } from './views/Login';
import { Register } from './views/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<App />} /> */}
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);