import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = () => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user && Object.keys(user).length !== 0) {
    return <Outlet />;
  } else {
    return <Navigate to="/" state={{ from: location }} />;
  }
};
