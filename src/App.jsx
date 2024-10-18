import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

const App = ({ isAdmin, setIsAdmin }) => {
  return (
    <div className="app">
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Outlet />
    </div>
  );
};

export default App;
