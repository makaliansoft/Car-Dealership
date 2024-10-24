import React from "react";
import { Grid, Skeleton } from "@mui/material";

const ContactUsSkeleton = () => {
  return (
    <>
      {/* skeleton for heading */}
      <Skeleton variant="text" height={50} width="60%" sx={{ mb: 2 }} />
      <Skeleton variant="text" height={30} width="100%" sx={{ mb: 4 }} />

      {/* skeleton for email and image */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Skeleton variant="rectangular" width="80%" height={20} />
          <Skeleton
            variant="rectangular"
            width="100%"
            height={300}
            sx={{ mt: 2 }}
          />
        </Grid>

        {/* skeleton for form */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={60} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={60} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={60} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={60} />
            </Grid>
            <Grid item xs={12}>
              <Skeleton variant="rectangular" height={100} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={60} />
            </Grid>
            <Grid item xs={6}>
              <Skeleton variant="rectangular" height={60} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUsSkeleton;
