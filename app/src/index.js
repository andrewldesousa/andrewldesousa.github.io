import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { Routes, Route, HashRouter } from 'react-router-dom'
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root'))

const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: '#dddddd'
    },
    background: {
      default: 'rgb(24, 24, 24)'
    }
  },

  typography: {
    h1: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '32.4px',
      color: 'rgb(255, 255, 255)'
    },

    h2: {
      fontSize: '2rem'
    },
    fontFamily: [
      'Segoe UI'
    ].join(','),

    body1: {
      lineHeight: '24px',
      fontWeight: 400,
      fontSize: '15px'
    }
  }
})

root.render(
  <HashRouter>
    <Routes>
      <Route index element={
        <ThemeProvider theme={theme}><Home /></ThemeProvider>
      } />
    </Routes>
  </HashRouter>
)
