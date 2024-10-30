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
import UpdateDelete from "../pages/UpdateDelete";
import Sidebar from "../components/SideBar/SideBar";

const AppRouter = () => {
  const [isAdmin, setIsAdmin] = useState(() => {
    const savedIsAdmin = localStorage.getItem("isAdmin");
    return savedIsAdmin === "true"; // Convert to boolean
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar state

  useEffect(() => {
    localStorage.setItem("isAdmin", isAdmin);
  }, [isAdmin]);

  const sidebarLinks = [{ label: "Reports", path: "/reports" }];

  const dropdowns = [
    {
      label: "Manage Cars",
      options: [
        { label: "Add Car", path: "/addCar", value: "addCar" },
        { label: "Update/Delete Car", path: "/updateCar", value: "updateCar" },
      ],
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <App isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
          {isAdmin && (
            <>
              <Sidebar
                title="Admin Menu"
                links={sidebarLinks}
                dropdowns={dropdowns}
                customStyles={{ backgroundColor: "#333", color: "white" }}
                customToggleStyles={{
                  color: "white",
                  width: "210px",
                  padding: "12px 15px",
                }}
                customCloseButtonStyles={{ color: "white" }}
                isOpen={isSidebarOpen} // Pass the sidebar open state
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} // Function to toggle
                closeSidebar={() => setIsSidebarOpen(false)} // Function to close
              />
              <button
                className="toggle-button" // Toggle button to open/close sidebar
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                style={{
                  position: "fixed",
                  borderRadius: "10px",
                  backgroundColor: "#ff8910", // Change to your desired color
                  top: "150px",
                  left: "-10px",
                  zIndex: 500,
                  transition: "background-color 0.3s, box-shadow 0.3s", // Smooth transition for hover effect
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 0, 0, 0.5)"; // Add shadow on hover
                  e.currentTarget.style.backgroundColor = "#ff7f50"; // Change color on hover
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "none"; // Remove shadow when not hovered
                  e.currentTarget.style.backgroundColor = "#ff8910"; // Reset to original color
                }}
              >
                &#9776;
              </button>
            </>
          )}
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
        {
          path: "updateCar",
          element: isAdmin ? <UpdateDelete /> : <NotFound />,
        },
        { path: "car/:carId", element: <CarDetails /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
