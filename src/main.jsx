import "@/index.css";
import "boxicons";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App.jsx";
import Home from "@/pages/Home.jsx";
import Timeline from "@/pages/Timeline.jsx";
import Showroom from "@/pages/Showroom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/showroom",
        element: <Showroom />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
