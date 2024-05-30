import { useNavigate } from "react-router-dom";
import { movieList } from "../assets/movie-data";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

import SearchBar from "./search";
import Sort from "./sort";

export default function Navbar() {
  const navigate = useNavigate();
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  function handleOpen() {
    setEditDialogOpen(true);
  }
  function handleClose() {
    setEditDialogOpen(false);
  }
  return (
    <div className="sticky flex items-start justify-center w-screen">
      <div className="flex w-2/3 items-center justify-between bg-slate-700 p-4 text-2xl rounded-lg">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          MovieRecommender
        </div>
        <div className="flex flex-row gap-4">
          <div>
            <Button
              variant="outlined"
              onClick={handleOpen}
              style={{ color: "white", height: "55px" }}
            >
              Edit{" "}
            </Button>
            <Dialog open={editDialogOpen} onClose={handleClose}>
              <DialogTitle
                sx={{ backgroundColor: "rgb(30 41 59)", color: "white" }}
              >
                Edit Movie
              </DialogTitle>
              <DialogContent
                sx={{ backgroundColor: "rgb(30 41 59)", color: "white" }}
              >
                <DialogContentText
                  sx={{ backgroundColor: "rgb(30 41 59)", color: "white" }}
                >
                  Enter movie name that you want to edit.
                </DialogContentText>
                <div id="input-container">
                  <TextField
                    sx={{
                      input: { color: "white" },
                      label: { color: "white" },
                    }}
                    autoFocus
                    margin="dense"
                    id="movie-name"
                    label="Movie Name"
                    type="text"
                    fullWidth
                  />
                </div>
              </DialogContent>
              <DialogActions
                sx={{ backgroundColor: "rgb(30 41 59)", color: "white" }}
              >
                <Button
                  onClick={() => {
                    //alert("Editing");
                    const movie = (document.getElementById(
                      "movie-name"
                    ) as HTMLInputElement)!.value;
                    const movies = movieList.filter(
                      (movies) => movies.title === movie
                    );
                    if (movies && movies.length === 1) {
                      navigate("/edit/" + movies[0].id);
                    } else {
                      const notFoundElement =
                        "<div id='not-found-container' className = 'text-red-600 text-sm'>Movie not found try again </div>";
                      if (
                        document.getElementById("not-found-container") === null
                      ) {
                        document
                          .getElementById("input-container")
                          ?.insertAdjacentHTML("beforeend", notFoundElement);
                      }
                    }
                  }}
                  style={{ color: "white" }}
                >
                  Edit Movie
                </Button>
                <Button onClick={() => navigate("/edit")} style={{ color: "white" }}>
                  All Movies List
                </Button>
                <Button onClick={handleClose} style={{ color: "white" }}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div>
            <Sort />
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
}
