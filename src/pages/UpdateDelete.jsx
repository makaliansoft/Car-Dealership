import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import UpdateDeleteComp from "../components/UpdateDeleteComp";
import AddUpdateComp from "../components/AddUpdateComp"; // Import AddUpdateComp
import "../styles/UpdateDelete.css"; // Import your styling file

const UpdateDelete = () => {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const existingData = loadFromLocalStorage("carData") || [];
    setCars(existingData);
  }, []);

  const handleUpdate = (car) => {
    setCarToUpdate(car); // Set the car to update
    setOpen(true); // Open the modal
  };

  const handleDelete = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    saveToLocalStorage("carData", updatedCars);
  };

  const handleSubmitUpdate = (updatedCar) => {
    const updatedCars = cars.map((car) =>
      car.id === updatedCar.id ? updatedCar : car
    );
    setCars(updatedCars);
    saveToLocalStorage("carData", updatedCars);
    setOpen(false); // Close the modal after updating
    setCarToUpdate(null); // Clear the car to update
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
    setCarToUpdate(null); // Clear the car to update
  };

  const filteredCars = cars.filter((car) => {
    const carName = `${car.brand} ${car.model}`.toLowerCase();
    return carName.includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container maxWidth="lg" style={{padding: "20px"}}>
      {/*Search Fieldd*/}
      <TextField
        label="Search by Name or Company"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* Conditional Message for No Results */}
      {filteredCars.length === 0 && searchQuery && (
        <Typography variant="h6" color="error" align="center">
          Data not found
        </Typography>
      )}

      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <Grid item xs={12} sm={6} md={3} key={car.id}>
            <UpdateDeleteComp
              car={car}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal for updating car details */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          {carToUpdate && (
            <AddUpdateComp
              carToUpdate={carToUpdate}
              onSubmit={handleSubmitUpdate}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UpdateDelete;
