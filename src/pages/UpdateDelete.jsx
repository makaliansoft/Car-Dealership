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
  Snackbar,
  Alert,
} from "@mui/material";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import UpdateDeleteComp from "../components/UpdateDeleteComp/UpdateDeleteComp";
import AddUpdateComp from "../components/AddUpdateComp";
import UpdateDeleteSkeleton from "../components/Skeleton/UpdateDeleteSkeleton";
import "../styles/UpdateDelete.css";

const UpdateDelete = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [open, setOpen] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const existingData = loadFromLocalStorage("carData") || [];
    setCars(existingData);
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after data is loaded
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleUpdate = (car) => {
    setCarToUpdate(car);
    setOpen(true);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this car?"
    );
    if (confirmed) {
      const updatedCars = cars.filter((car) => car.id !== id);
      setCars(updatedCars);
      saveToLocalStorage("carData", updatedCars);
      setSnackbarMessage("Car deleted successfully!");
      setSnackbarOpen(true);
    }
  };

  const handleSubmitUpdate = (updatedCar) => {
    const updatedCars = cars.map((car) =>
      car.id === updatedCar.id ? updatedCar : car
    );
    setCars(updatedCars);
    saveToLocalStorage("carData", updatedCars);
    setOpen(false);
    setCarToUpdate(null);
    setSnackbarMessage("Car updated successfully!");
    setSnackbarOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCarToUpdate(null);
  };

  const filteredCars = cars.filter((car) => {
    const carName = `${car.brand} ${car.model}`.toLowerCase();
    return carName.includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg" style={{ padding: "20px" }}>
      {/* Search Field */}
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

      {/* Grid to display car cards or skeletons */}
      <Grid container spacing={2}>
        {loading
          ? Array.from(new Array(8)).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <UpdateDeleteSkeleton />
              </Grid>
            ))
          : filteredCars.map((car) => (
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

      {/* Snackbar for success messages */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4500}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpdateDelete;
