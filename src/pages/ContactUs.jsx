import EmailIcon from "@mui/icons-material/Email";
import SkeletonLoader from "../components/SkeletonLoader";
import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || []
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    feedback: "",
    photo: null,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

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
        photo: reader.result,
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
      feedback: formData.feedback,
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
      feedback: "",
      photo: null,
    });

    alert("Details submitted successfully! We'll soon get back to you.");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {loading ? (
          <SkeletonLoader count={1} height={300} />
        ) : (
          <>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Get in Touch with Us!
        </Typography>
        <Typography variant="body1" paragraph textAlign="center">
          We're here to help and answer any questions you might have. Whether
          you want to inquire about our services, leave feedback, or ask for
          support, we’ll get back to you as soon as possible!
        </Typography>
        <Grid container spacing={2}>
          {/* Left half: Image preview */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              {/* Email Section with Icon */}
              <EmailIcon color="primary" sx={{ mr: 1 }} />{" "}
              {/* Add the email icon with some margin */}
              <Typography
                variant="body1"
                color="textSecondary"
                fontWeight="bold"
              >
                E-MAIL:{" "}
                <Typography
                  variant="body1"
                  component="span"
                  color="textPrimary"
                  fontWeight="bold"
                >
                  support@cardekho.com
                </Typography>
              </Typography>
            </Box>
            {formData.photo && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <img
                  src={formData.photo}
                  alt="Preview"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}
          </Grid>

          {/* Right half: Form */}
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {/* Name and Email in one row */}
                <Grid item xs={6}>
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
                <Grid item xs={6}>
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

                {/* Address and Phone in one row */}
                <Grid item xs={6}>
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
                <Grid item xs={6}>
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

                {/* Feedback TextArea */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Feedback"
                    variant="outlined"
                    name="feedback"
                    multiline
                    rows={4}
                    value={formData.feedback}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Buttons: Upload and Submit */}
                <Grid item xs={6}>
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
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        </>
      )}
      </Paper>
    </Container>
  );
};

export default ContactUs;
