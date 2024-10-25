// UpdateDelete.jsx
import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import CarCardUpdate from "../components/CarCardUpdate";
import "../styles/UpdateDelete.css"; // Import your styling file

const UpdateDelete = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const existingData = loadFromLocalStorage("carData") || [];
    setCars(existingData);
  }, []);

  const handleUpdate = (car) => {
    console.log("Update car:", car);
    // Logic for updating a car can be implemented here
  };

  const handleDelete = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    saveToLocalStorage("carData", updatedCars);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid item xs={12} sm={6} md={3} key={car.id}>
            <CarCardUpdate
              car={car}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UpdateDelete;
