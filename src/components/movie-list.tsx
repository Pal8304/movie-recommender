import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieList } from "../assets/movie-data";

import { Card, CardContent, CardMedia } from "@mui/material";

import MovieDescriptionDialog from "./movie-description-dialog";

export default function MovieList() {
  const [open, setOpen] = useState(false);
  const [selectedmovie, setSelectedMovie] = useState(movieList[0]);
  const handleClickOpen = (movie) => () => {
    setOpen(true);
    setSelectedMovie(movie);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {movieList.map(
        (movie, index) =>
          index < 10 && (
            <>
              <div
                className="flex w-56 h-[32rem] m-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:border-2 hover:cursor-pointer"
                onClick={handleClickOpen(movie)}
              >
                <Card className="w-full h-full">
                  <CardMedia
                    component="img"
                    height="100"
                    image={movie.poster_path}
                  ></CardMedia>
                  <CardContent>
                    <div className="flex flex-col overflow-scroll">
                      <div className="text-2xl line-clamp-1">{movie.title}</div>
                      {/* <div className="text-sm opacity-50">({movie.release_date})</div> */}
                      <div className="text-sm opacity-50 overflow-scroll line-clamp-3">
                        {movie.overview}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <MovieDescriptionDialog
                selectedmovie={selectedmovie}
                open={open}
                handleClose={handleClose}
              />
            </>
          )
      )}
    </div>
  );
}
