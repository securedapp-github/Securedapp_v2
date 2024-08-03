import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';
import Service from './pages/Service';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App theme={"dark"} />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/service" element={<Service />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
