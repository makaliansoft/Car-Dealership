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
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  InputLabel,
  FormControl,
} from "@mui/material";
import Sidebar from "../components/Sidebar/SideBar";
import UpdateDeleteComp from "../components/UpdateDeleteComp/UpdateDeleteComp";
import UpdateDeleteSkeleton from "../components/Skeleton/UpdateDeleteSkeleton";
import "../styles/UpdateDelete.css";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";

const UpdateDelete = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [open, setOpen] = useState(false);
  const [carToUpdate, setCarToUpdate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const existingData = loadFromLocalStorage("carData") || [];
    setCars(existingData);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSidebarToggle = (car) => {
    setSelectedCar(car);
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategories(value);
  };

  const filteredCars = cars.filter((car) => {
    const carName = `${car.brand} ${car.model}`.toLowerCase();
    const matchesSearch = carName.includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(car.category);
    return matchesSearch && matchesCategory;
  });

  const handleSearchChange = (event) => setSearchQuery(event.target.value);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  // Function to get unique categories from the cars data
  const getUniqueCategories = () => {
    const categories = cars.map((car) => car.category);
    return [...new Set(categories)]; // Using Set to get unique categories
  };

  const uniqueCategories = getUniqueCategories();

  return (
    <Container maxWidth="lg" style={{ padding: "20px" }}>
      <Grid container spacing={2} alignItems="center">
        {/* Search Field */}
        <Grid item xs={8}>
          <TextField
            label="Search by Name or Company"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>

        {/* Category Filter Dropdown */}
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
              multiple
              value={selectedCategories}
              onChange={handleCategoryChange}
              renderValue={(selected) => selected.join(", ")}
              label="Category"
            >
              {uniqueCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={selectedCategories.includes(category)} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {filteredCars.length === 0 && searchQuery && (
        <Typography variant="h6" color="error" align="center">
          Data not found
        </Typography>
      )}

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
                  toggleSidebar={() => handleSidebarToggle(car)}
                />
              </Grid>
            ))}
      </Grid>

      {/* Dialog for Car Update */}
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

      {/* Snackbar for notifications */}
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

      {/* Sidebar Component */}
      <Sidebar
        title={
          selectedCar
            ? `${selectedCar.brand} ${selectedCar.model}`
            : "Car Details"
        }
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        closeSidebar={() => setIsSidebarOpen(false)}
        customStyles={{ width: "250px", backgroundColor: "black" }}
        links={[]}
        dropdowns={[]}
        customCloseButtonStyles={{ color: "white" }}
        content={
          selectedCar && (
            <div style={{ padding: "20px", color: "white" }}>
              <img
                src={selectedCar.image}
                alt={`${selectedCar.brand} ${selectedCar.model}`}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />
              <p style={{ color: "white" }}>Price: {selectedCar.price}</p>
              <p style={{ color: "white" }}>Mileage: {selectedCar.mileage}</p>
              <p style={{ color: "white" }}>Category: {selectedCar.category}</p>
              <p style={{ color: "white" }}>Type: {selectedCar.type}</p>
              <p style={{ color: "white" }}>
                Fuel Type: {selectedCar.fuelType}
              </p>
              <p style={{ color: "white" }}>
                Transmission: {selectedCar.transmissionType}
              </p>
              <p style={{ color: "white" }}>Rating: {selectedCar.rating}</p>
            </div>
          )
        }
      />
    </Container>
  );
};

export default UpdateDelete;
