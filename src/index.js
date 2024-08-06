import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import BlogPost from "./pages/blogp-post";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App theme={"dark"} />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog-post"
          element={
            <BlogPost
              Url={
                "THE-FUTURE-OF-TOKEN-REGULATION:-NAVIGATING-PRIVACY-AND-DATA-PROTECTION"
              }
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
