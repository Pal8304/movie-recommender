import MovieTable from "./components/movie-table";
import Navbar from "./components/navbar";

import MovieDataContext from "./components/movie-data-context";
import { movieList } from "./assets/movie-data";
import { useState } from "react";

export default function EditAll() {
  const [movies, setMovies] = useState(movieList);
  //const [movieString, setMovieString] = useState("");
  return (
    <MovieDataContext.Provider value={{movieList : movies,setMovieList : setMovies,searchMovie:"",setSearchMovie : ()=>{}}}>
      <div className=" flex flex-col text-white bg-slate-800 w-screen h-screen gap-2">
        <div className="sticky m-6">
          <Navbar />
        </div>
        <div>
          <MovieTable />
        </div>
      </div>
    </MovieDataContext.Provider>
  );
}
