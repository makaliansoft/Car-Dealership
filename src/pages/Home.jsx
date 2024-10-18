import React, { useEffect, useState } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import carData from "../data/carData";
import CarSlider from "../components/CarSlider";
import "../styles/Home.css";

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    let storedCars = loadFromLocalStorage("carData");
    if (!storedCars) {
      saveToLocalStorage("carData", carData);
      storedCars = carData;
    }
    setCars(storedCars);
  }, []);
  console.log(cars);

  const categories = [...new Set(cars.map((car) => car.category))];
  const categorizedCars = categories.reduce((acc, category) => {
    acc[category] = cars.filter((car) => car.category === category);
    return acc;
  }, {});

  console.log(categorizedCars);
  return (
    
    <div className="home">
      <p className="text-4xl">Beta</p>
      <h2 className="text-3xl">Explore Different Cars</h2>
      {categories.map((category) => (
        <CarSlider
          key={category}
          cars={categorizedCars[category]}
          category={category}
        />
      ))}
    </div>
  );
};

export default Home;
