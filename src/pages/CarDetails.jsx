// src/pages/CarDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { loadFromLocalStorage } from "../utils/localStorageUtil";
import "../styles/CarDetails.css";

const CarDetails = () => {
  const { carId } = useParams();
  let storedCars = loadFromLocalStorage("carData");
  const car = storedCars.find((c) => c.id === parseInt(carId));

  if (!car) {
    return <p>Car not found.</p>;
  }

  return (
    <div className="car-details-container">
      <div className="car-details-card">
        <h2>
          {car.brand} {car.model}
        </h2>
        <img src={car.image} alt={`${car.brand} ${car.model}`} />
        <p>Price: {car.price}</p>
        <p>Category: {car.category}</p>
        <p>Mileage: {car.mileage}</p>
        {/* Add more car details here if needed */}
      </div>
    </div>
  );
};

export default CarDetails;
