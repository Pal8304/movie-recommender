import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Edit from "./Edit.tsx";
import NoTFound from "./NotFound.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoTFound />,
  },
  {
    path: "edit/:id",
    element: <Edit />,
    errorElement: <NoTFound />,
  },
  {
    path: "lol",
    element: <div>lolo</div>,
    errorElement: <NoTFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
