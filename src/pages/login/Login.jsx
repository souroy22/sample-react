import { Box, Button } from "@mui/material";
import React from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    dispatch(login({ role }));
    navigate("/user");
  };

  return (
    <Box className="login-page">
      <Button variant="contained" onClick={() => handleLogin(1)}>
        Login As Admin
      </Button>
      <Button variant="contained" onClick={() => handleLogin(0)}>
        Login as User
      </Button>
    </Box>
  );
};

export default Login;
