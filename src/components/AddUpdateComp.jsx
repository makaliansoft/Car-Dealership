import React, { useEffect, useState } from "react";
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
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    price: "",
    category: "",
    type: "",
    fuelType: "",
    transmissionType: "auto", // Default value for radio button
    mileage: "",
    rating: "",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  // Set form values if updating, otherwise clear with default values
  useEffect(() => {
    if (carToUpdate) {
      setFormData({ ...carToUpdate });
      setImageUrl(carToUpdate.image || "");
    } else {
      setFormData({
        brand: "",
        model: "",
        price: "",
        category: "",
        type: "",
        fuelType: "",
        transmissionType: "auto",
        mileage: "",
        rating: "",
        image: "",
      });
      setImageUrl("");
    }
  }, [carToUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "image") {
      setImageUrl(value); // Set the image URL as the user types
    }
  };

  const validateForm = () => {
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }
    if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 0 and 5";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (validateForm()) {
      onSubmit({ ...formData, image: imageUrl }); // Call the onSubmit function passed as a prop
      // Reset the form
      setFormData({
        brand: "",
        model: "",
        price: "",
        category: "",
        type: "",
        fuelType: "",
        transmissionType: "auto",
        mileage: "",
        rating: "",
        image: "",
      });
      setImageUrl("");
      setErrors({});
    }
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
        <form onSubmit={handleFormSubmit}>
          <Typography variant="h4" align="center" gutterBottom>
            {carToUpdate ? "Update Car Details" : "Add New Car"}
          </Typography>

          <Grid container spacing={3}>
            {/* Brand and Model in one row */}
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.brand}
                required
              >
                <InputLabel>Brand</InputLabel>
                <Select
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  label="Brand"
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
                {errors.brand && (
                  <FormHelperText>{errors.brand}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                error={!!errors.model}
                helperText={errors.model || ""}
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
                name="price"
                value={formData.price}
                onChange={handleChange}
                error={!!errors.price}
                helperText={errors.price || ""}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.category}
                required
              >
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
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
                {errors.category && (
                  <FormHelperText>{errors.category}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            {/* Mileage and Type in one row */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Mileage"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                error={!!errors.mileage}
                helperText={errors.mileage || ""}
                required
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.type}
                required
              >
                <InputLabel>Type</InputLabel>
                <Select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  label="Type"
                >
                  <MenuItem value="">
                    <em>Select Type</em>
                  </MenuItem>
                  <MenuItem value="budget friendly">Budget Friendly</MenuItem>
                  <MenuItem value="luxury">Luxury</MenuItem>
                  <MenuItem value="performance">Performance</MenuItem>
                </Select>
                {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
              </FormControl>
            </Grid>

            {/* Fuel Type and Transmission Type in one row */}
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                variant="outlined"
                error={!!errors.fuelType}
                required
              >
                <InputLabel>Fuel Type</InputLabel>
                <Select
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  label="Fuel Type"
                >
                  <MenuItem value="">
                    <em>Select Fuel Type</em>
                  </MenuItem>
                  <MenuItem value="diesel">Diesel</MenuItem>
                  <MenuItem value="petrol">Petrol</MenuItem>
                  <MenuItem value="electric">Electric</MenuItem>
                </Select>
                {errors.fuelType && (
                  <FormHelperText>{errors.fuelType}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl
                margin="normal"
                error={!!errors.transmissionType}
                required
              >
                <FormControlLabel
                  control={
                    <Radio
                      name="transmissionType"
                      value="auto"
                      checked={formData.transmissionType === "auto"}
                      onChange={handleChange}
                    />
                  }
                  label="Automatic"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="transmissionType"
                      value="manual"
                      checked={formData.transmissionType === "manual"}
                      onChange={handleChange}
                    />
                  }
                  label="Manual"
                />
                {errors.transmissionType && (
                  <FormHelperText>{errors.transmissionType}</FormHelperText>
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
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                error={!!errors.rating}
                helperText={errors.rating || ""}
                required
                inputProps={{ min: 0, max: 5, step: "0.1" }} // For decimal input
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                label="Image URL"
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                error={!!errors.image}
                helperText={errors.image || ""}
                required
              />
            </Grid>
          </Grid>

          {/* Preview image */}
          {imageUrl && (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
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
