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
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: "20px",
        borderRadius: "12px",
        background: "linear-gradient(313deg, #f5f7fa, rgb(0, 0, 0, 0.04))",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    >
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
        className="slider-container" // Add the class here
        sx={{
          display: "flex",
          gap: 3,
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
              minWidth: "270px",
              borderRadius: "12px",
              padding: "16px",
              background: "linear-gradient(145deg, #ffffff, #e3e3e3)",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.04)",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Typography
              variant="h6"
              component="h4"
              gutterBottom
              sx={{ mt: 2, color: "#333", fontWeight: "bold" }}
            >
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
