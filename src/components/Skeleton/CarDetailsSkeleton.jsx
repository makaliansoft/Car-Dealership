import React from "react";
import { Box, Skeleton } from "@mui/material";

const CarDetailsSkeleton = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        sx={{
          width: 300,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          bgcolor: "#fff",
        }}
      >
        {/* Title Skeleton */}
        <Skeleton
          variant="text"
          width="70%"
          height={40}
          sx={{ mb: 2, mx: "auto" }}
        />

        {/* Image Skeleton */}
        <Skeleton
          variant="rectangular"
          width="100%"
          height={180}
          sx={{ mb: 2 }}
        />

        {/* Price Skeleton */}
        <Skeleton
          variant="text"
          width="50%"
          height={30}
          sx={{ mb: 1, mx: "auto" }}
        />

        {/* Category Skeleton */}
        <Skeleton
          variant="text"
          width="60%"
          height={30}
          sx={{ mb: 1, mx: "auto" }}
        />

        {/* Mileage Skeleton */}
        <Skeleton variant="text" width="40%" height={30} sx={{ mx: "auto" }} />
      </Box>
    </Box>
  );
};

export default CarDetailsSkeleton;
