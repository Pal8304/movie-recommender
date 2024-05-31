import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MovieDataContext from "./movie-data-context";
import Button from "@mui/material/Button";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Sort() {
  const { movieList, setMovieList } = useContext(MovieDataContext);
  const [popularity, setPopularity] = useState(false);
  const navigate = useNavigate();
  function sortByPopularity() {
    setPopularity(!popularity);
    const movieListCpy = [...movieList];
    if (popularity) {
      movieListCpy.sort((a, b) => b.popularity - a.popularity);
    } else {
      movieListCpy.sort((a, b) => a.popularity - b.popularity);
    }
    setMovieList(movieListCpy);
    console.log(movieList);
    navigate("/");
  }
  return (
    <div>
      <Button
        variant="outlined"
        style={{ color: "white", height: "55px" }}
        onClick={sortByPopularity}
      >
        Sort
        <div className="flex items-center justify-center transition ease-linear duration-300">
          {popularity ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </div>
      </Button>
    </div>
  );
}
