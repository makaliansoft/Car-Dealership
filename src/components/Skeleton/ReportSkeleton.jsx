import React from "react";
import { Box, Skeleton } from "@mui/material";

const ReportSkeleton = ({ responses }) => {
  return (
    <>
      {Array.from({ length: responses.length }).map((_, index) => (
        <Box
          key={index}
          border="1px solid #ccc"
          borderRadius="8px"
          overflow="hidden"
          boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)"
          display="flex"
          flexDirection="column" // Stack content vertically
          alignItems="flex-start"
          width="100%" // Make skeleton width 100% of its parent
          sx={{ minHeight: "300px", display: "flex" }} // Ensures a minimum height for the skeleton and display flex
        >
          <Skeleton variant="rectangular" width="100%" height={200} />
          <Box className="report-card-content" padding={2}>
            <Skeleton variant="text" width={300} height={30} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="80%" height={30} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="60%" height={30} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="40%" height={30} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="20%" height={30} sx={{ mb: 1 }} />
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ReportSkeleton;
