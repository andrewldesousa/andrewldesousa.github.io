import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Diffusion from './pages/Diffusion';
import Chat from './pages/Chat';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/diffusion" element={<Diffusion />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </HashRouter>
);

reportWebVitals();
