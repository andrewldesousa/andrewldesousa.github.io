import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { Routes, Route, HashRouter } from 'react-router-dom'
import * as React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </HashRouter>
)
