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
import PropertiesPage from "../Pages/PropertiesPage";
import PropertyDetailsPage from "../Pages/PropertyDetailsPage";
import AddProperties from "../Components/Dashboard/AddProperties";
import MyListings from "../Components/Dashboard/MyListings";
import AllListings from "../Components/Dashboard/AllListings";
import Messages from "../Components/Dashboard/Messages";
import Users from "../Components/Dashboard/Users";

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
