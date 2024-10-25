// CarCardUpdate.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
// import "../styles/CarCardUpdate.css"; // Assuming you have a separate CSS file for the card

const CarCardUpdate = ({ car, onUpdate, onDelete }) => {
  return (
    <Card className="car-card-update">
      <CardMedia
        component="img"
        alt={`${car.brand} ${car.model}`}
        height="140"
        image={car.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {car.brand} {car.model}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {car.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mileage: {car.mileage}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: {car.category}
        </Typography>
        <div className="button-container">
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onUpdate(car)}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => onDelete(car.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCardUpdate;
