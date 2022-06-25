import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoute = ({ user = true, redirectPath = "/about", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
