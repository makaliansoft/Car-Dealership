import React, { useEffect, useState } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import carData from "../data/carData";
import CarSlider from "../components/CarSlider";
import { Container, Typography, Box } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
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

  const categories = [...new Set(cars.map((car) => car.category))];
  const categorizedCars = categories.reduce((acc, category) => {
    acc[category] = cars.filter((car) => car.category === category);
    return acc;
  }, {});

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Box textAlign="center" mb={4}>
        <DirectionsCarIcon sx={{ fontSize: 50, color: "primary.main" }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Explore Different Cars
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Find your next car by browsing through our various categories.
        </Typography>
      </Box>

      {categories.map((category) => (
        <Box key={category} mb={4}>
          <CarSlider cars={categorizedCars[category]} category={category} />
        </Box>
      ))}
    </Container>
  );
};

export default Home;
