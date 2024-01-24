import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataProvider from "./Provider/DataProvider";
// import DataProvider from "./Provider/DataProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <RouterProvider router={MainRoutes} />
      </DataProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
