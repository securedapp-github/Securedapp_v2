import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/HomePage";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import Product from "./pages/product/Product";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogpost/BlogPost";
import AboutUs from "./pages/aboutUs/AboutUs";
import SolidityShield from "./SolidityShield/index";

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App bg-primary dark:bg-secondary">
      <Router>
        <Routes>
          <Route
            path="/"
            index
            element={
              <Home
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            path="product"
            element={
              <Product
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            path="service"
            element={
              <Service
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            path="blog"
            element={
              <Blog
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            path="blog/:url"
            element={
              <BlogPost
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            path="about"
            element={
              <AboutUs
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            path="solidity-shield-scan"
            element={
              <SolidityShield
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
