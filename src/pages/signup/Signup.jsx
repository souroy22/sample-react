import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/user";
import "./signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    dispatch(login({ role }));
    navigate("/user");
  };

  return (
    <Box className="signup-page">
      <Button variant="contained" onClick={() => handleLogin(1)}>
        Signup As Admin
      </Button>
      <Button variant="contained" onClick={() => handleLogin(0)}>
        Signup as User
      </Button>
    </Box>
  );
};

export default Signup;
