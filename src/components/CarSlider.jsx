import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../styles/CarSlider.css";

const CarSlider = ({ cars, category }) => {
  const sliderRef = useRef(null); // Reference for the slider

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="h5" component="h2" sx={{ flexGrow: 1 }}>
          {category}
        </Typography>
        <IconButton onClick={() => scrollSlider("left")} sx={{ mr: 2 }}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => scrollSlider("right")}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          pb: 2,
        }}
      >
        {cars.map((car) => (
          <Link
            key={car.id}
            to={`/car/${car.id}`}
            className="car-card"
            style={{
              textDecoration: "none",
              color: "inherit",
              minWidth: "250px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#fafafa",
            }}
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <Typography variant="h6" component="h4" gutterBottom>
              {car.brand} {car.model}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Price: {car.price}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Mileage: {car.mileage}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CarSlider;
