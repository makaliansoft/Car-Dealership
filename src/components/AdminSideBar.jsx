import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/AdminSideBar.css";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`} >
        {/* Close (X) icon */}
        <button className="close-button" onClick={toggleSidebar}>
          &times;
        </button>

        <nav className="sidebar-nav">
          <NavLink
            to="/reports"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Reports
          </NavLink>
          <NavLink
            to="/addCar"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Add New Car
          </NavLink>
        </nav>
      </div>

      {/* Toggle button: only shown when the sidebar is closed */}
      {!isOpen && (
        <button onClick={toggleSidebar} className="toggle-button">
          &#9776;
        </button>
      )}
    </div>
  );
};

export default AdminSidebar;
