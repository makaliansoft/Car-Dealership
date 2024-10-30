import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Dropdown from "../Dropdown/Dropdown";

const Sidebar = ({
  title,
  links = [],
  dropdowns = [],
  customStyles,
  customToggleStyles,
  customCloseButtonStyles,
  isOpen,
  toggleSidebar,
  closeSidebar, 
}) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar(); // Use closeSidebar from props
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <div>
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        style={customStyles}
        ref={sidebarRef}
      >
        {title && <h2 className="sidebar-title">{title}</h2>}

        <button
          className="close-button"
          onClick={closeSidebar} // Use closeSidebar to close
          style={customCloseButtonStyles}
        >
          &times;
        </button>

        <nav className="sidebar-nav">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {link.label}
            </NavLink>
          ))}

          {dropdowns.map((dropdown) => (
            <Dropdown
              key={dropdown.label}
              options={dropdown.options}
              placeholder={dropdown.label}
              customToggleStyles={customToggleStyles}
              customMenuStyles={{
                backgroundColor: customStyles.backgroundColor,
                ...dropdown.customMenuStyles,
              }}
              customItemStyles={dropdown.customItemStyles}
            />
          ))}
        </nav>
      </div>

      {!isOpen && (
        <button onClick={toggleSidebar} className="toggle-button">
          Admin Menu
        </button>
      )}
    </div>
  );
};

export default Sidebar;
