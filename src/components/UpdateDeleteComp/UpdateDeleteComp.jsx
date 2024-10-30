import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Sidebar from "../SideBar/SideBar";
import "./UpdateDeleteComp.css"; // Import CSS to style the sidebar overlay within the card

const UpdateDeleteComp = ({ car, onUpdate, onDelete }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarOptions = [
    { label: "Update", action: () => onUpdate(car) },
    { label: "Delete", action: () => onDelete(car.id) },
  ];

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
          <Button variant="outlined" color="secondary" onClick={toggleSidebar}>
            Open
          </Button>
        </div>
        {/* Sidebar Component inside the Card */}
        {isSidebarOpen && (
          <div className="sidebar-overlay">
            <Sidebar
              title={`${car.brand} ${car.model} Options`}
              links={sidebarOptions}
              customStyles={{ width: "250px", position: "absolute" }}
              customCloseButtonStyles={{ fontSize: "24px", color: "red" }}
              customToggleStyles={{ fontSize: "18px", color: "blue" }}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpdateDeleteComp;
