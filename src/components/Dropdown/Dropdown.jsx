import React, { useEffect, useRef, useState } from "react";
import "./Dropdown.css"; // Make sure to import the CSS file
import DownArrowSVG from "../../assets/down-arrow.svg";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setIsOpen(false);
    if (option.path) {
      navigate(option.path);
    }
    setSelectedOption(option)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedOption ? selectedOption.label : "Select a Page"}
        <img
          src={DownArrowSVG}
          alt="Down Arrow SVG"
          className={`dropdown-icon ${isOpen ? "open" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              {option.icon && (
                <img
                  src={option.icon}
                  alt="icon"
                  className="option-icon"
                  width="16"
                  height="16"
                />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
