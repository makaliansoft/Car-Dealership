// src/pages/CarDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadFromLocalStorage } from "../utils/localStorageUtil";
import "../styles/CarDetails.css";
import CarDetailsSkeleton from "../components/CarDetailsSkeleton";

const CarDetails = () => {
  const [loading, setLoading] = useState(true);
  const { carId } = useParams();
  let storedCars = loadFromLocalStorage("carData");
  const car = storedCars.find((c) => c.id === parseInt(carId));

  if (!car) {
    return <p>Car not found.</p>;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="car-details-container">
      {loading ? (
        <CarDetailsSkeleton />
      ) : (
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
      )}
    </div>
  );
};

export default CarDetails;
