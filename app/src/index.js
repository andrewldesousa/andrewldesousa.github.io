import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiffusionModels from './pages/Diffusion';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/diffusion" element={<DiffusionModels />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
