import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../styles/CarSlider.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

const CarSlider = ({ cars, category }) => {
  const sliderRef = useRef(null); // Reference for the slider

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
    });
  }, [])

  return (
    <Box data-aos = "zoom-in"
      sx={{
        padding: "30px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        background: "linear-gradient(177deg, #ffffff69, rgb(0, 0, 0, 0.04))",
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
        className="slider-container"
        sx={{
          display: "flex",
          gap: 3,
          scrollBehavior: "smooth",
          pb: 2,
        }}
      >
        {cars.map((car) => (
          <Link key={car.id} to={`/car/${car.id}`} className="car-card">
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
