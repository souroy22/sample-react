import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.user?.role !== "ADMIN") {
      console.log("user?.user?.role123", user?.user?.role);
      navigate("/unauthorised");
    }
  }, []);

  if (user.user?.role === "ADMIN") {
    return <Outlet />;
  }
};

export default ProtectedRoute;
