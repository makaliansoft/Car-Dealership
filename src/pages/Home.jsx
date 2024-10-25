import React, { useEffect, useState } from "react";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorageUtil";
import carData from "../data/carData";
import CarSlider from "../components/CarSlider";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "../styles/Home.css"; // Import CSS file
import image1 from "../assets/wall1.jpg";
import image2 from "../assets/wall2.jpg";
import image3 from "../assets/wall3.jpg";
import image5 from "../assets/wall5.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles

// Array of images to be displayed in the carousel
const sliderImages = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image5, alt: "Image 5" },
];

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      let storedCars = loadFromLocalStorage("carData");
      if (!storedCars) {
        saveToLocalStorage("carData", carData);
        storedCars = carData;
      }
      setCars(storedCars);
      setLoading(false);
      AOS.init({
        duration: 1200, // Duration of the animation
      });
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="home-slider-wrapper" data-aos="fade-down">
        <Box>
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.alt} className="slider-image" />
              </div>
            ))}
          </Slider>
        </Box>
        <Box className="slider-text-overlay" textAlign="center">
          <>
            <Typography variant="h3" component="h1" className="fancy-heading">
              Explore Luxury Like Never Before
            </Typography>
            <Typography variant="body1" className="fancy-subtext">
              Find your next car by browsing through our various categories.
            </Typography>
          </>
        </Box>
      </div>

      {/* Background Section */}
      <Box className="background-section" data-aos="fade-up">
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {!loading &&
            categories.map((category) => (
              <Box key={category}>
                <CarSlider
                  cars={categorizedCars[category]}
                  category={category}
                />
              </Box>
            ))}
        </Container>
      </Box>
    </>
  );
};

export default Home;
