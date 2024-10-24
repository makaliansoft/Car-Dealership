import React, { useEffect, useState } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import carData from "../data/carData";
import CarSlider from "../components/CarSlider";
import { Container, Typography, Box } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Slider from "react-slick";
import "../styles/Home.css"; // Import CSS file
import HomeSkeleton from "../components/Skeleton/HomeSkeleton";
import image1 from "../assets/wall1.jpg";
import image2 from "../assets/wall2.jpg";
import image3 from "../assets/wall3.jpg";

// Array of images to be displayed in the carousel
const sliderImages = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
];

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let storedCars = loadFromLocalStorage("carData");
      if (!storedCars) {
        saveToLocalStorage("carData", carData);
        storedCars = carData;
      }
      setCars(storedCars);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = [...new Set(cars.map((car) => car.category))];
  const categorizedCars = categories.reduce((acc, category) => {
    acc[category] = cars.filter((car) => car.category === category);
    return acc;
  }, {});

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="home-slider-wrapper">
        {" "}
        {/* Wrap slider and text in the same div */}
        {/* Image Slider */}
        <Box mb={4}>
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="slider-image" // Apply CSS class
                />
              </div>
            ))}
          </Slider>
        </Box>
        {/* Text overlay */}
        <Box className="slider-text-overlay" textAlign="center">
          {loading ? (
            <HomeSkeleton />
          ) : (
            <>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                className="fancy-heading"
              >
                Explore Luxury Like Never Before
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                className="fancy-subtext"
              >
                Find your next car by browsing through our various categories.
              </Typography>
            </>
          )}
        </Box>
      </div>

      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {!loading &&
          categories.map((category) => (
            <Box key={category} mb={4}>
              <CarSlider cars={categorizedCars[category]} category={category} />
            </Box>
          ))}
      </Container>
    </>
  );
};

export default Home;
