import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/1.svg";
import Dropdown from "./Dropdown/Dropdown";
import HomeSVG from "../assets/home.svg";
import AboutSVG from "../assets/about.svg";
import ContactSVG from "../assets/contact.svg";

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const options = [
    { label: "Home", value: "1", icon: HomeSVG, path: "/" },
    { label: "About Us", value: "2", path: "/about", icon: AboutSVG },
    { label: "Contact Us", value: "3", path: "/contact", icon: ContactSVG },
  ];
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      console.log("I am here ");
      setIsAdmin(false);
      localStorage.removeItem("isAdmin");
      navigate("/login");
    } else {
      console.log("User cancelled logout");
    }
  };

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Logo"
          className="img-logo"
          onClick={handleLogoClick}
        />
      </div>
      <div className="dropdown">
        <Dropdown options={options} />
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
            Brands
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
