import React from "react";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css"; // Import your custom CSS for additional styling

const commonLinkStyles = {
  color: "#d3d3d3", // Custom color
  textDecoration: "none",
  "&:hover": {
    color: "#ffa500", // Orange on hover
  },
};

const Footer = () => {
  return (
    <Box className="footer-container">
        <div>
      <Grid container spacing={4} className="footer-content">
        {/* Column 1: Logo or Company Info */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className="footer-title">
            Car Dealership
          </Typography>
          <Typography variant="body2" className="footer-description">
            Explore luxury cars, and find the perfect one for you. Your trusted
            dealership since 2024.
          </Typography>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className="footer-title">
            Quick Links
          </Typography>
          <ul className="footer-links">
            <li>
              <Link href="/" className="footer-link" sx={commonLinkStyles}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="footer-link" sx={commonLinkStyles}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="footer-link"
                sx={commonLinkStyles}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="footer-link" sx={commonLinkStyles}>
                Admin Login
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Column 3: Social Media */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" className="footer-title">
            Follow Us
          </Typography>
          <Box className="footer-social-icons">
            <IconButton href="https://facebook.com" target="_blank">
              <Facebook className="social-icon" />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank">
              <Twitter className="social-icon" />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank">
              <Instagram className="social-icon" />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank">
              <LinkedIn className="social-icon" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      </div>
      <div>
      {/* Copyright Section */}
      <Box className="footer-bottom">
        <Typography variant="body2" className="footer-copyright">
          &copy; 2024 Car Dealership. All rights reserved.
        </Typography>
      </Box>
</div>
    </Box>
  );
};

export default Footer;
