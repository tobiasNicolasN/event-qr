import { useContext, ReactElement } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = (): ReactElement => {
  const currentUser = useContext(AuthContext);

  return !!currentUser ? <Outlet /> : <Navigate to="/login" />;
};
