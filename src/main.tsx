import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Edit from "./Edit-movie.tsx";
import NoTFound from "./NotFound.tsx";
import "./index.css";
import EditAll from "./MoviesTable.tsx";
import Testing from "./testing.tsx";
import MovieDataContext from "./components/movie-data-context.tsx";
import { movieList as orgList } from "./assets/movie-data.ts";

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
    element: <Testing />,
    errorElement: <NoTFound />,
  },
]);

function Main() {
  const [movies, setMovies] = React.useState(orgList);
  const [searchMovie, setSearchMovie] = React.useState("");
  return (
    <MovieDataContext.Provider
      value={{
        movieList: movies,
        setMovieList: setMovies,
        searchMovie: searchMovie,
        setSearchMovie: setSearchMovie,
      }}
    >
      <RouterProvider router={router} />
    </MovieDataContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />);
