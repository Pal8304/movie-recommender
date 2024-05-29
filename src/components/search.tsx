import { movieList } from "../assets/movie-data";

import { useState } from "react";

import MovieDescriptionDialog from "./movie-description-dialog";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [selectedmovie, setSelectedMovie] = useState(movieList[0]);
  const handleClickOpen = (movie) => () => {
    setOpen(true);
    setSelectedMovie(movie);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className=" w-52">
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={movieList.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const movies = movieList.filter(
                  (movie) => movie.title === e.target.value
                );
                if (movies.length === 1) {
                  handleClickOpen(movies[0])();
                }
              }
            }}
          />
        )}
      />
      <MovieDescriptionDialog selectedmovie={selectedmovie} open={open} handleClose={handleClose} />
    </div>
  );
}
