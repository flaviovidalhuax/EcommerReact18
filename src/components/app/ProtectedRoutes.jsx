import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { token } = useSelector((state) => state.userInfo);

  if (token) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
