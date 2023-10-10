import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/layouts/PrivateRoute";
import UnAuthenticatedRoute from "./components/layouts/UnAuthenticatedRoute";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import User from "./pages/users/User";
import Cart from "./pages/cart/Cart";
import NoPageFound from "./pages/NoPageFound/NoPageFound";
import ProtectedRoute from "./components/layouts/ProtectedRoute";
import AdminPage from "./pages/admin/AdminPage";
import UnAuthorisedPage from "./pages/UnAuthorisedPage/UnAuthorisedPage";

const RouterComponent = () => {
  return (
    <Routes>
      <Route element={<UnAuthenticatedRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to="/user" />} />
        <Route path="/user" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AdminPage />} />
        </Route>
      </Route>
      <Route path="/unauthorised" element={<UnAuthorisedPage />} />
      <Route path="/nopagefound" element={<NoPageFound />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

export default RouterComponent;
