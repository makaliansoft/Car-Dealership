import React from "react";
import { Box, Skeleton } from "@mui/material";

const AboutUsSkeleton = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-5 font-sans leading-relaxed text-gray-800">
        {/* Section: About CarDekho */}
        <Box className="bg-[#fde2c7] p-8 text-center rounded-lg mb-5">
          <Skeleton
            variant="rectangular"
            width="50%"
            height={50}
            sx={{ mx: "auto", mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="80%"
            height={30}
            sx={{ mx: "auto", mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="80%"
            height={30}
            sx={{ mx: "auto", mb: 2 }}
          />
        </Box>

        {/* Section: Our Journey */}
        <Box className="mb-10">
          <Skeleton
            variant="rectangular"
            width="40%"
            height={40}
            sx={{ mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Section: Vision & Mission */}
        <Box className="mb-10">
          <Skeleton
            variant="rectangular"
            width="40%"
            height={40}
            sx={{ mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Section: Innovation */}
        <Box className="mb-10">
          <Skeleton
            variant="rectangular"
            width="40%"
            height={40}
            sx={{ mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Section: Testimonials */}
        <Box className="mb-10">
          <Skeleton
            variant="rectangular"
            width="40%"
            height={40}
            sx={{ mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={100}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={100}
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Section: Global Presence */}
        <Box className="mb-10">
          <Skeleton
            variant="rectangular"
            width="40%"
            height={40}
            sx={{ mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={20}
            sx={{ mb: 1 }}
          />
        </Box>

        {/* Section: Get in Touch */}
        <Box className="bg-[#fde2c7] p-8 text-center rounded-lg mb-5">
          <Skeleton
            variant="rectangular"
            width="50%"
            height={50}
            sx={{ mx: "auto", mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="80%"
            height={30}
            sx={{ mx: "auto", mb: 2 }}
          />
          <Skeleton
            variant="rectangular"
            width="80%"
            height={30}
            sx={{ mx: "auto", mb: 2 }}
          />
        </Box>
      </div>
    </>
  );
};

export default AboutUsSkeleton;
