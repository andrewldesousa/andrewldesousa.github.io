import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiffusionModels from './pages/Diffusion';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/diffusion" element={<DiffusionModels />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
