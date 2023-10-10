import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const UnAuthenticatedRoute = () => {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();

  useEffect(() => {
    if (user.user !== null) {
      navigate("/user");
    }
  }, []);

  if (user.user === null) {
    return <Outlet />;
  }
};

export default UnAuthenticatedRoute;
