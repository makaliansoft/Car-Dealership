import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/1.svg";

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      setIsAdmin(false);
      localStorage.removeItem("isAdmin");
      navigate("/");
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="img-logo" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newCars"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            New Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About Us
          </NavLink>
        </li>

        {isAdmin ? (
          <>
            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Reports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addCar"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Add Car
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="logout-link" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
