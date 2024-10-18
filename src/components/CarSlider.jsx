import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/CarSlider.css"; // Add a CSS file for the slider styles

const CarSlider = ({ cars, category }) => {
  const sliderRef = useRef(null); // Reference for the slider

  return (
    <div className="car-slider">
      <div className="slider-box">
        <h3 className="slider-category">{category}</h3>
        <div className="slider" ref={sliderRef}>
          {" "}
          {/* Attach ref to the slider */}
          {cars.map((car) => (
            <Link key={car.id} to={`/car/${car.id}`} className="car-card">
              <img src={car.image} alt={`${car.brand} ${car.model}`} />
              <h4>
                {car.brand} {car.model}
              </h4>
              <p>Price: {car.price}</p>
              <p>Mileage: {car.mileage}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarSlider;
