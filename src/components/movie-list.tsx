import { useState } from "react";

import { movieList } from "../assets/movie-data";

import { Card, CardContent, CardMedia } from "@mui/material";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import Draggable from "react-draggable";

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
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 m-4">
      {movieList.map(
        (movie, index) =>
          index < 4 && (
            <>
              <div
                className="flex w-56 h-[32rem] m-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:border-2"
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
                      <div className="text-2xl">{movie.title}</div>
                      {/* <div className="text-sm opacity-50">({movie.release_date})</div> */}
                      <div className="text-sm opacity-50 overflow-scroll">
                        {movie.overview}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="bg-inherit text-white">
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="draggable-dialog-title"
                  style={{color: "white" }}
                >
                  <DialogTitle
                    style={{
                      cursor: "pointer",
                      backgroundColor: "rgb(30 41 59)",
                      color: "white",
                    }}
                    id="draggable-dialog-title"
                  >
                    {selectedmovie.title}
                  </DialogTitle>
                  <DialogContent
                    style={{
                      backgroundColor: "rgb(30 41 59)",
                      color: "white",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div className="w-1/2 h-full mr-4">
                      <img src={selectedmovie.poster_path} />
                    </div>
                    <DialogContentText
                      style={{
                        backgroundColor: "rgb(30 41 59)",
                        color: "white",
                      }}
                    >
                      <div>{selectedmovie.overview}</div>
                      <div>Release Date : {selectedmovie.release_date}</div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions
                    style={{ backgroundColor: "rgb(30 41 59)", color: "white" }}
                  >
                    <Button
                      autoFocus
                      onClick={handleClose}
                      style={{ color: "white" }}
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleClose} style={{ color: "white" }}>
                      Edit
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </>
          )
      )}
    </div>
  );
}
