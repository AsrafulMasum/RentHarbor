import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserDashboard from "../Components/Dashboard/UserDashboard";
import Accounts from "../Components/Dashboard/Accounts";
import Properties from "../Components/Dashboard/Properties";
import Payments from "../Components/Dashboard/Payments";
import PropertiesPage from "../Pages/PropertiesPage";
import PropertyDetailsPage from "../Pages/PropertyDetailsPage";
import AddProperties from "../Components/Dashboard/AddProperties";
import MyListings from "../Components/Dashboard/MyListings";
import AllListings from "../Components/Dashboard/AllListings";
import Messages from "../Components/Dashboard/Messages";
import Users from "../Components/Dashboard/Users";
import RegisterPage from "../Pages/auth/RegisterPage";
import LoginPage from "../Pages/auth/LoginPage";
import VerifyEmailPage from "../Pages/auth/VerifyEmailPage";
import ForgotPassword from "../Pages/auth/ForgotPassword";
import ResetPasswordPage from "../Pages/auth/ResetPasswordPage";
import BecomeAHost from "../Pages/auth/BecomeAHost";

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
        path: "allProperties",
        element: <PropertiesPage />,
      },
      {
        path: "properties/:id",
        element: <PropertyDetailsPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "verify-email",
        element: <VerifyEmailPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "become-a-host",
        element: <BecomeAHost />,
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
        element: <Accounts />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "addProperties",
        element: <AddProperties />,
      },
      {
        path: "myListings",
        element: <MyListings />,
      },
      {
        path: "allListings",
        element: <AllListings />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

export default MainRoutes;
