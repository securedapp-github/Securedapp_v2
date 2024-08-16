import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home/HomePage";
import { useEffect } from "react";
import Product from "./pages/product/Product";
import Service from "./pages/service/Service";
import Blog from "./pages/blog/Blog";
import BlogPost from "./pages/blogpost/BlogPost";
import AboutUs from "./pages/aboutUs/AboutUs";
import RequestQuoteModal from "./components/modal/RequestQuoteModal";
import SolidityShield from "./SolidityShield/index";
import { useDispatch } from "react-redux";
import {
  getHomeSelector,
  setIsLargeScreen,
} from "./redux/slices/main/homeSlice";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { isRequestModalOpen } = useSelector(getHomeSelector);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsLargeScreen(window.innerWidth >= 1024));
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App bg-primary dark:bg-secondary">
      <Router>
        {isRequestModalOpen && <RequestQuoteModal />}
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="service" element={<Service />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:url" element={<BlogPost />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="solidity-shield-scan" element={<SolidityShield />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
