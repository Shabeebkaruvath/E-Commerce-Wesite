import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from "./componants/Banner/Banner";
import Footer from "./componants/Footer/Footer";
import Navbar from "./componants/Navbar/Navbar";
import About from "./componants/About/About";
import Contact from "./componants/Contact/Contact";
import Shop from "./componants/Shop/Shop";
import Lookbook from "./componants/Lookbook/Lookbook"
import './index.css';
import App from './App';
import {BrowserRouter as Root, Routes,Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

 
