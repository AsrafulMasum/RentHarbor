import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserDashboard from "../Components/Dashboard/UserDashboard";
import Accounts from "../Components/Dashboard/Accounts";
import Properties from "../Components/Dashboard/Properties";
import Payments from "../Components/Dashboard/Payments";

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
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "accounts",
        element: <Accounts />
      },
      {
        path: "properties",
        element: <Properties />
      },
      {
        path: "payments",
        element: <Payments />
      }
    ],
  },
]);

export default MainRoutes;
