import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(children) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return <Outlet />;
}
