import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Movie from "../assets/movie-interface";
interface MovieDescriptionDialogProps {
  selectedmovie: Movie;
  open: boolean;
  handleClose: () => void;
}

export default function MovieDescriptionDialog({
  selectedmovie,
  open,
  handleClose,
}: MovieDescriptionDialogProps) {
  const navigate = useNavigate();
  return (
    <div className="text-white flex items-center justify-center">
      <Dialog
        open={open}
        onClose={handleClose}
        //disableEnforceFocus // Allows other things to take focus
        //   hideBackdrop // Hides the shaded backdrop
        aria-labelledby="draggable-dialog-title"
        //PaperComponent={PaperComponent}
        sx={{
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogTitle
          sx={{
            cursor: "pointer",
            backgroundColor: "rgb(30 41 59)",
            color: "white",
            fontSize: "3 rem",
            fontWeight: "bold",
          }}
          id="draggable-dialog-title"
        >
          <div className="text-3xl">{selectedmovie.title}</div>
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "rgb(30 41 59)",
            color: "white",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className="flex flex-row w-2/3 h-2/3">
            <div className="w-1/2 h-full mr-4">
              <img src={selectedmovie.poster_path} className="w-full h-full" />
            </div>
            <DialogContentText
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(30 41 59)",
                color: "white",
                overflow: "scroll",
              }}
            >
              <div className="flex flex-col items-start justify-center gap-1">
                <div>{selectedmovie.overview}</div>
                <div>Release Date : {selectedmovie.release_date}</div>
                <div className="flex flex-row text-lg opacity-60 justify-between items-center">
                  <div className="mr-4">
                    Rating: {selectedmovie.vote_average}
                  </div>
                  <div>Votes: {selectedmovie.vote_count}</div>
                </div>
                {/* <Button style={{ color: "white", margin: "0", padding: "0" }}>
                  Rate
                </Button> */}
              </div>
              <div> Language : {selectedmovie.original_language}</div>
              <div>Similar Movies:</div>
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions
          sx={{ backgroundColor: "rgb(30 41 59)", color: "white" }}
        >
          <Button
            autoFocus
            onClick={() => {
              // console.log("/edit" + (selectedmovie.id.toString()));
              navigate("/edit/" + selectedmovie.id);
            }}
            sx={{ color: "white" }}
          >
            Edit Movie Details
          </Button>
          <Button
            autoFocus
            onClick={() => {
              navigate("/edit/");
            }}
            sx={{ color: "white" }}
          >
            All Movies List
          </Button>
          <Button
            autoFocus
            onClick={handleClose}
            sx={{
              color: "white",
              //   font: "mono",
              //   fontFamily: "monospace",
              fontSize: "1.125 rem",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
