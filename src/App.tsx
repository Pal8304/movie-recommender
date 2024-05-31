import Navbar from "./components/navbar";
import MovieList from "./components/movie-list";
import { movieList } from "./assets/movie-data";
import MovieDataContext from "./components/movie-data-context";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(movieList);
  const [movieString, setMovieString] = useState("");
  return (
    <MovieDataContext.Provider
      value={{
        movieList: movies,
        setMovieList: setMovies,
        searchMovie: movieString,
        setSearchMovie: setMovieString,
      }}
    >
      <div className="flex flex-col text-white bg-slate-800 w-screen h-screen gap-2">
        <div className="sticky mt-6">
          <Navbar />
        </div>
        <div className="flex justify-center items-center overflow-scroll mb-16">
          <div className="flex flex-wrap items-center justify-center h-2/3">
            <MovieList />
          </div>
        </div>
      </div>
    </MovieDataContext.Provider>
  );
}

export default App;
