import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/AdminSideBar.css";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null); // Create a ref for the sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // Close sidebar when clicking outside of it
  useEffect(() => {
    console.log(sidebarRef);
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false); // Close the sidebar
        setIsDropdownOpen(false); // Also close dropdown if open
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`} ref={sidebarRef}>
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
          <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
              Manage Cars ▼
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <NavLink
                  to="/addCar"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Add New Car
                </NavLink>
                <NavLink
                  to="/updateCar"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Update/Delete Car
                </NavLink>
              </div>
            )}
          </div>
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
