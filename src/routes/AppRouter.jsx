import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import NewCars from "../pages/NewCars";
import Login from "../pages/Login";
import AddCar from "../pages/AddCar";
import Reports from "../pages/Reports";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import AdminSidebar from "../components/AdminSideBar";
import UpdateDelete from "../pages/UpdateDelete";

const AppRouter = () => {
  const [isAdmin, setIsAdmin] = useState(() => {
    // Retrieve the value from localStorage on initialization
    const savedIsAdmin = localStorage.getItem("isAdmin");
    return savedIsAdmin === "true"; // Convert to boolean
  });

  console.log(isAdmin);
  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <App isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          {isAdmin && <AdminSidebar />}
        </div>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "contact", element: <ContactUs /> },
        { path: "about", element: <AboutUs /> },
        { path: "newCars", element: <NewCars /> },
        { path: "login", element: <Login setIsAdmin={setIsAdmin} /> },
        { path: "reports", element: isAdmin ? <Reports /> : <NotFound /> },
        { path: "addCar", element: isAdmin ? <AddCar /> : <NotFound /> },
        { path: "updateCar", element: isAdmin ? <UpdateDelete /> : <NotFound /> },
        { path: "car/:carId", element: <CarDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
