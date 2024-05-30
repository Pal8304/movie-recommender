import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Edit from "./Edit-movie.tsx";
import NoTFound from "./NotFound.tsx";
import "./index.css";
import EditAll from "./MoviesTable.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NoTFound />,
  },
  {
    path: "edit",
    //element: <EditAll />,
    errorElement: <NoTFound />,
    children: [
      { path: "", element: <EditAll />, errorElement: <NoTFound /> },
      { path: ":id", element: <Edit />, errorElement: <NoTFound /> },
      {
        path: "all",
        element: <EditAll />,
        errorElement: <NoTFound />,
      },
    ],
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
