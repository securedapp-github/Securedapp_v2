import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/HomePage";
import { useEffect, useState } from "react";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
