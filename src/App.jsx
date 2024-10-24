import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
// Import slick-carousel's CSS here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = ({ isAdmin, setIsAdmin }) => {
  return (
    <div className="app">
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Outlet />
    </div>
  );
};

export default App;
