import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { HouseCard } from "./pages/HouseCard/HouseCard";
import Logement from "./pages/Logement/Logement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/errorpage",
    element: <ErrorPage />,
  },
  {
    path: "/housecard",
    element: <HouseCard />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/flat/:id",
    element: <Logement />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
