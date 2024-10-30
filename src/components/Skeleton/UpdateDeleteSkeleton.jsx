import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
  Grid,
} from "@mui/material";

const UpdateDeleteSkeleton = () => {
  return (
    <>
      <Card className="car-card-update">
        {/* Image Skeleton */}
        <CardMedia>
          <Skeleton variant="rectangular" height={140} />
        </CardMedia>

        <CardContent>
          {/* Title Skeleton */}
          <Typography variant="h5" component="div">
            <Skeleton width="60%" />
          </Typography>

          {/* Text Skeletons */}
          <Typography variant="body2" color="text.secondary">
            <Skeleton width="40%" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton width="50%" />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Skeleton width="70%" />
          </Typography>

          {/* Button Skeletons */}
          <div className="button-container">
            <Skeleton
              variant="rectangular"
              width={80}
              height={36}
              style={{ marginRight: "8px" }}
            />
            <Skeleton
              variant="rectangular"
              width={80}
              height={36}
              style={{ marginRight: "8px" }}
            />
            <Skeleton variant="rectangular" width={80} height={36} />
          </div>
        </CardContent>
      </Card>
      ;
    </>
  );
};

export default UpdateDeleteSkeleton;
