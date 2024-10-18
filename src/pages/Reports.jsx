import React from "react";
import { loadFromLocalStorage } from "../utils/localStorageUtil";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";

const Reports = () => {
  const responses = loadFromLocalStorage("userDetails") || []; // Load user details from local storage

  return (
    <Container maxWidth="md:w-10" sx={{ mt: 5 }}>
      <h1>Reports</h1>
      <Grid container spacing={2}>
        {responses.map((user, index) => (
          <Grid item xs={12} sm={6} key={index}>
     
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                width: "max-content", // Set width to max-content
                minWidth: ""
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 150, height: 150, marginLeft: 2 }} // Set dimensions for the image
                image={user.photo}
                alt={`${user.name}'s photo`}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" noWrap>
                  {user.name}
                </Typography>
                <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                  Email: {user.email}
                </Typography>
                <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                  Phone: {user.phone}
                </Typography>
                <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                  Address: {user.address}
                </Typography>
                <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                  Feedback: {user.feedback}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reports;
