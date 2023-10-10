import React from "react";
import "./navbar.css";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/user";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box className="navbar-container">
      <Link className="navbar-left" to="/">
        LOGO
      </Link>
      <Box className="navbar-right">
        {user.user === null && <Link to="/login">Login</Link>}
        {user.user === null && <Link to="/signup">Signup</Link>}
        {user.user !== null && user?.user.role === "ADMIN" && (
          <Link to="/dashboard">DashBoard</Link>
        )}
        {user.user !== null && (
          <Link to="/cart">
            <AddShoppingCartIcon />
            Cart
          </Link>
        )}
        {user.user !== null && (
          <Box className="logout-btn" onClick={handleLogout}>
            <LogoutIcon />
            Logout
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
