import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "./MainLayout";

const AuthLayout = () => {
  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthLayout;
