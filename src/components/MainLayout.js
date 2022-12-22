import { Navigate, Outlet } from "react-router-dom";

export const isLoggedIn = false;

const MainLayout = () => {
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};

export default MainLayout;
