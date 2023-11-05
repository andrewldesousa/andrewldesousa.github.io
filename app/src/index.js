import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'

import { Routes, Route, HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </HashRouter>
)
