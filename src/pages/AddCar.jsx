import React, { useState } from "react";
import AddUpdateComp from "../components/AddUpdateComp";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import { Snackbar, Alert } from "@mui/material"; // Import Snackbar and Alert

const AddCar = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleAddCar = (data) => {
    const newCarObj = { id: Date.now(), ...data };
    const existingData = loadFromLocalStorage("carData") || []; // Ensure existingData is an array
    console.log("Adding car:", newCarObj);
    const updatedData = [newCarObj, ...existingData];
    console.log(updatedData);
    saveToLocalStorage("carData", updatedData);

    // Show success alert
    setSnackbarMessage("Car added successfully!");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false); // Close Snackbar
  };

  return (
    <div>
      <AddUpdateComp onSubmit={handleAddCar} />

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
    </div>
  );
};

export default AddCar;
