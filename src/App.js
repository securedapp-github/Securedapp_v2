import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/HomePage";
import { useEffect, useState } from "react";
import Footer from "./components/footer/footer";
import Product from "./pages/product/Product";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogpost/blog-post";
import AboutUs from "./pages/aboutUs/AboutUs";

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
        <Navbar
          isLargeScreen={isLargeScreen}
          setIsLargeScreen={setIsLargeScreen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLargeScreen={isLargeScreen}
                setIsLargeScreen={setIsLargeScreen}
              />
            }
          />
          <Route
            isLargeScreen={isLargeScreen}
            setIsLargeScreen={setIsLargeScreen}
            path="/product"
            element={<Product />}
          />
          <Route
            isLargeScreen={isLargeScreen}
            setIsLargeScreen={setIsLargeScreen}
            path="/service"
            element={<Service />}
          />
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
        <Footer />
      </Router>
    </div>
  );
}

export default App;
