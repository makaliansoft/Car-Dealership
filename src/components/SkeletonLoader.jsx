import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonLoader = ({
  count = 3,
  width = "100%",
  height = 200,
  variant = "rectangular",
}) => {
  return (
    <Box>
      {Array.from(new Array(count)).map((_, index) => (
        <Box key={index} mb={4} sx={{ width: "100%" }}>
          <Skeleton variant={variant} width={width} height={height} />
          <Box mt={2}>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="30%" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkeletonLoader;
