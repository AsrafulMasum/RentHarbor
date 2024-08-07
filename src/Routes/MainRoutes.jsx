import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import GuestDashboard from "../Pages/Dashboard/GuestDashboard";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "guest",
        element: <GuestDashboard />,
      },
    ],
  },
]);

export default MainRoutes;
