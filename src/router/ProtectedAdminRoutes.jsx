import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAdminRoutes = () => {
  
  const { currentUser } = useSelector(state => state.users)
  return(
      currentUser?
      currentUser.role ==='ADMIN'?
      <Outlet/>
      :
      <Navigate to="/" />
      :
      <Navigate to="/" />
  )
};

export default ProtectedAdminRoutes;
