import React from "react";
import { Box, Skeleton } from "@mui/material";

const HomeSkeleton = () => {
  return (
    <>
      {/* Skeleton for the main heading and subtitle */}
      <Box textAlign="center" mb={4}>
        {/* Skeleton for the car icon */}
        <Skeleton
          variant="rectangular"
          width={40}
          height={40}
          sx={{ mb: 2, mx: "auto" }}
        />

        {/* Skeleton for the main title */}
        <Skeleton
          variant="text"
          width="40%"
          height={50}
          sx={{ mb: 2, mx: "auto" }}
        />

        {/* Skeleton for the subtitle */}
        <Skeleton variant="text" width="60%" height={30} sx={{ mx: "auto" }} />
      </Box>
      {/* Skeleton for category heading and arrows */}
      {Array.from({ length: 2 }).map((_, idx) => (
        <Box key={idx} mb={4}>
          {/* heading  */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={2}
          >
            <Skeleton variant="text" width="30%" height={40} />
            {/* arrows */}
            <Box display="flex" gap={2}>
              <Skeleton variant="circular" width={40} height={40} />
              <Skeleton variant="circular" width={40} height={40} />
            </Box>
          </Box>
          <Box display="flex" gap={2} mt={2}>
            {/* Skeletons for car cards */}
            {Array.from({ length: 4 }).map((_, carIdx) => (
              <Box key={carIdx} width={250} p={2}>
                <Skeleton variant="rectangular" width={250} height={150} />
                <Skeleton
                  variant="text"
                  width="60%"
                  height={30}
                  sx={{ mt: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="50%"
                  height={20}
                  sx={{ mt: 1 }}
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  height={20}
                  sx={{ mt: 1 }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </>
  );
};

export default HomeSkeleton;
