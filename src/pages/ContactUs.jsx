import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Paper,
  Box,
} from "@mui/material";
import { saveToLocalStorage } from "../utils/localStorageUtil";
import SendIcon from "@mui/icons-material/Send";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: "fit-content",
});

const ContactUs = () => {
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        photo: reader.result, // Store base64 string in formData
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.photo
    ) {
      alert("Please fill in all the fields and upload a photo.");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (
      !allowedTypes.includes(
        formData.photo.split(",")[0].split(":")[1].split(";")[0]
      )
    ) {
      alert("Only .jpg and .png files are allowed.");
      return;
    }

    const newUserDetail = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      photo: formData.photo,
    };

    const updatedUserDetails = [...userDetails, newUserDetail];
    setUserDetails(updatedUserDetails);
    saveToLocalStorage("userDetails", updatedUserDetails);

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      photo: null,
    });

    alert("Details submitted successfully! We'll soon get back to you.");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Get in Touch with Us!
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
          We're here to help and answer any questions you might have. Whether
          you want to inquire about our services, leave feedback, or ask for
          support, we’ll get back to you as soon as possible!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Grid>

            {formData.photo && (
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={formData.photo}
                  alt="Preview"
                  style={{
                    maxWidth: "30%",
                    height: "auto",
                  }}
                />
                <Typography variant="body2" color="textSecondary" mt={1}>
                  (Image Preview)
                </Typography>
              </Box>
            )}
            <Grid item xs={12}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                fullWidth
              >
                Upload Photo
                <VisuallyHiddenInput
                  type="file"
                  accept=".jpg,.png"
                  onChange={handleFileChange}
                />
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<SendIcon />}
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactUs;
