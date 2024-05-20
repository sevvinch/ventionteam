import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hero from "./components/Hero.jsx"
import Achievements from "./components/Achievements.jsx"
import KeyStats from "./components/KeyStats.jsx"
import Engineers from "./components/Engineers.jsx"
import Brands from "./components/Brands.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hero/>
    <Achievements/>
    <KeyStats/>
    <Engineers/>
    <Brands/>
  </React.StrictMode>,
)
