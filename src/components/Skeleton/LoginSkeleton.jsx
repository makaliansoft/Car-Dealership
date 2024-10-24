import React from "react";
import { Skeleton } from "@mui/material";

const LoginSkeleton = () => {
  return (
    <>
      {/* Admin Login Title */}
      <Skeleton
        variant="text"
        width="50%"
        height={40}
        sx={{ mx: "auto", mb: 3 }}
      />

      {/* Username Field Skeleton */}
      <Skeleton variant="rectangular" width="100%" height={40} sx={{ mb: 2 }} />

      {/* Password Field Skeleton */}
      <Skeleton variant="rectangular" width="100%" height={40} sx={{ mb: 3 }} />

      {/* Login Button Skeleton */}
      <Skeleton variant="rectangular" width="100%" height={30} sx={{ mb: 4 }} />

      {/* Maximum Attempts Text Skeleton */}
      <Skeleton
        variant="text"
        width="80%"
        height={10}
        sx={{ mx: "auto", mb: 1 }}
      />
      <Skeleton variant="text" width="50%" height={10} sx={{ mx: "auto" }} />
    </>
  );
};

export default LoginSkeleton;
