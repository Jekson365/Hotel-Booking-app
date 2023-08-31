import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'

export const instance = axios.create({
  baseURL: "http://localhost:8080"
})
export const BASE = "http://localhost:8080"




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
