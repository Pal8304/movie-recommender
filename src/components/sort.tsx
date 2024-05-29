import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieList } from "../assets/movie-data";

import Button from "@mui/material/Button";

export default function Sort() {
  const [popularity, setPopularity] = useState(true);
  const navigate = useNavigate();
  function sortByPopularity() {
    if (popularity) {
      movieList.sort((a, b) => b.popularity - a.popularity);
    } else {
      movieList.sort((a, b) => a.popularity - b.popularity);
    }
    setPopularity(!popularity);
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
      </Button>
    </div>
  );
}
