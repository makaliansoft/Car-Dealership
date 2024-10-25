// AddUpdateComp.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,
  FormControlLabel,
  Button,
  Typography,
  FormHelperText,
  Grid,
} from "@mui/material";
import "../styles/AddCar.css"; // Update this path as necessary


const AddUpdateComp = ({ carToUpdate, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imageUrl, setImageUrl] = useState("");

  // If updating, set the form values based on the carToUpdate prop
  useEffect(() => {
    if (carToUpdate) {
      reset(carToUpdate); // Reset form fields with carToUpdate values
      setImageUrl(carToUpdate.image); // Set the initial image URL
    }
  }, [carToUpdate, reset]);

  const handleFormSubmit = (newData) => {
    newData.image = imageUrl; // Set the image URL to preview
    onSubmit(newData); // Call the onSubmit function passed as a prop
    reset(); // Reset the form
  };

  return (
    <Container
      maxWidth="md" // Wider container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "30px",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Typography variant="h4" align="center" gutterBottom>
            {carToUpdate ? "Update Car Details" : "Add New Car"}
          </Typography>

          <Grid container spacing={3}>
            {/* Brand and Model in one row */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={!!errors.brand} required>
                <InputLabel>Brand</InputLabel>
                <Select
                  {...register("brand", { required: true })}
                  label="Brand"
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>Select Brand</em>
                  </MenuItem>
                  <MenuItem value="Maruti Suzuki">Maruti Suzuki</MenuItem>
                  <MenuItem value="Hyundai">Hyundai</MenuItem>
                  <MenuItem value="Tata">Tata</MenuItem>
                  <MenuItem value="Honda">Honda</MenuItem>
                  <MenuItem value="Mahindra">Mahindra</MenuItem>
                  <MenuItem value="Kia">Kia</MenuItem>
                  <MenuItem value="Toyota">Toyota</MenuItem>
                  <MenuItem value="MG">MG</MenuItem>
                  <MenuItem value="Nissan">Nissan</MenuItem>
                  <MenuItem value="Ford">Ford</MenuItem>
                  <MenuItem value="Skoda">Skoda</MenuItem>
                  <MenuItem value="Renault">Renault</MenuItem>
                  <MenuItem value="Volkswagen">Volkswagen</MenuItem>
                  <MenuItem value="Jeep">Jeep</MenuItem>
                </Select>
                {errors.brand && <FormHelperText>Brand is Required</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Model"
                {...register("model", { required: true })}
                error={!!errors.model}
                helperText={errors.model ? "Model is Required" : ""}
                required
              />
            </Grid>

            {/* Price and Category in one row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Price"
                type="text"
                {...register("price", { required: true })}
                error={!!errors.price}
                helperText={errors.price ? "Price is Required" : ""}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={!!errors.category} required>
                <InputLabel>Category</InputLabel>
                <Select
                  {...register("category", { required: true })}
                  label="Category"
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>Select Category</em>
                  </MenuItem>
                  <MenuItem value="SUV">SUV</MenuItem>
                  <MenuItem value="Sedan">Sedan</MenuItem>
                  <MenuItem value="Hatchback">Hatchback</MenuItem>
                  <MenuItem value="Coupe">Coupe</MenuItem>
                  <MenuItem value="Crossover">Crossover</MenuItem>
                </Select>
                {errors.category && <FormHelperText>Category is Required</FormHelperText>}
              </FormControl>
            </Grid>

            {/* Mileage and Type in one row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Mileage"
                {...register("mileage", { required: true })}
                error={!!errors.mileage}
                helperText={errors.mileage ? "Mileage is Required" : ""}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={!!errors.type} required>
                <InputLabel>Type</InputLabel>
                <Select
                  {...register("type", { required: true })}
                  label="Type"
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>Select Type</em>
                  </MenuItem>
                  <MenuItem value="budget friendly">Budget Friendly</MenuItem>
                  <MenuItem value="luxury">Luxury</MenuItem>
                  <MenuItem value="performance">Performance</MenuItem>
                </Select>
                {errors.type && <FormHelperText>Type is Required</FormHelperText>}
              </FormControl>
            </Grid>

            {/* Fuel Type and Transmission Type in one row */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined" error={!!errors.fuelType} required>
                <InputLabel>Fuel Type</InputLabel>
                <Select
                  {...register("fuelType", { required: true })}
                  label="Fuel Type"
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>Select Fuel Type</em>
                  </MenuItem>
                  <MenuItem value="diesel">Diesel</MenuItem>
                  <MenuItem value="petrol">Petrol</MenuItem>
                  <MenuItem value="electric">Electric</MenuItem>
                </Select>
                {errors.fuelType && <FormHelperText>Fuel Type is Required</FormHelperText>}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl margin="normal" error={!!errors.transmissionType} required>
                <FormControlLabel
                  control={
                    <Radio
                      {...register("transmissionType", { required: true })}
                      value="auto"
                    />
                  }
                  label="Automatic"
                />
                <FormControlLabel
                  control={
                    <Radio
                      {...register("transmissionType", { required: true })}
                      value="manual"
                    />
                  }
                  label="Manual"
                />
                {errors.transmissionType && (
                  <FormHelperText>Transmission Type is required</FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* Rating and Image URL in one row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Rating"
                type="number"
                {...register("rating", {
                  required: true,
                  min: 0,
                  max: 5,
                  pattern: /^\d*(\.\d+)?$/, // Allows decimal values
                })}
                inputProps={{ step: "0.1" }}
                error={!!errors.rating}
                helperText={errors.rating ? "Rating is required" : ""}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Image URL"
                type="url"
                {...register("image", { required: true })}
                error={!!errors.image}
                helperText={errors.image ? "Image URL is required" : ""}
                onChange={(e) => setImageUrl(e.target.value)} // Set the image URL as the user types
                required
              />
            </Grid>
          </Grid>

          {/* Preview image */}
          {imageUrl && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <img
                src={imageUrl}
                alt="Car Preview"
                style={{
                  maxHeight: "200px",
                  maxWidth: "100%",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </div>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", width: "100%" }}
          >
            {carToUpdate ? "Update Car" : "Add Car"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddUpdateComp;
