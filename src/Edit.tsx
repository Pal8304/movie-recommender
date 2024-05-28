import { useState } from "react";
import NoTFound from "./NotFound";
import { movieList } from "./assets/movie-data";

import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";

export default function Edit() {
  const movieId = useParams().id;
  const movie = movieList.filter((movies) => movies.id.toString() === movieId);
  if (movie === null || movie === undefined || movie.length != 1) {
    return <NoTFound />;
  }
  const [movieDetails, setMovieDetails] = useState(movie[0]);
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-800 text-white gap-2">
      <div className="flex justify-between w-2/3 h-2/3 border-2 rounded-xl">
        <div className="w-1/2 h-full">
          <img src={movieDetails.poster_path} className="w-auto h-full" />
        </div>
        <div className="flex flex-col justify-center items-start w-1/2 h-full m-4 gap-4">
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Name:</div>
            <input
              type="text"
              placeholder={movieDetails.title}
              className="w-full bg-inherit border-1 rounded-md"
            ></input>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Description:</div>
            <input
              type="text"
              placeholder={movieDetails.overview}
              className="w-full bg-inherit border-1 rounded-md"
            ></input>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Release:</div>
            <input
              type="text"
              placeholder={movieDetails.release_date}
              className="w-full bg-inherit border-1 rounded-md"
            ></input>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Language</div>
            <input
              type="text"
              placeholder={movieDetails.original_language}
              className="w-full bg-inherit border-1 rounded-md"
            ></input>
          </div>
          <div className="flex justify-center items-center gap-4 text-white">
            <Button variant="outlined" style={{ color: "white" }}>
              {" "}
              SAVE CHANGES{" "}
            </Button>
            <Button variant="outlined" style={{ color: "white" }}
            onClick={() => {
                navigate("/")
            }}
            >
              {" "}
              Cancel{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
