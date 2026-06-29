import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import '../styles/index.css'

import NavBar from './components/NavBar';
import Section from './components/Section'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Section />
  </React.StrictMode>,
)
