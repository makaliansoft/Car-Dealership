import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import "../styles/Login.css";

const Login = ({ setIsAdmin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminUser = "manav";
    const adminPass = "123";

    if (userName === adminUser && password === adminPass) {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
      navigate("/");
    } else {
      setAttempts((prev) => prev + 1);
      setUserName("");
      setPassword("");
      if (attempts + 1 >= 3) {
        alert("Too many failed attempts. Closing the login page.");
        navigate("/");
      }
    }
  };

  useEffect(() => {
    if (attempts >= 3) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [attempts, navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: "100%" }}>
        <Typography variant="h5" gutterBottom align="center">
          Admin Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            fullWidth
            variant="outlined"
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <TextField
            label="Password"
            fullWidth
            variant="outlined"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ marginTop: 2 }}>
          Maximum Attempts: 3
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Attempts: {attempts + 1}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
