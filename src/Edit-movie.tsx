import NoTFound from "./NotFound";

import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import MovieDataContext from "./components/movie-data-context";
import Button from "@mui/material/Button";

export default function Edit() {
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRelease, setMovieRelease] = useState("");
  const [movieLanguage, setMovieLanguage] = useState("");
  const {movieList} = useContext(MovieDataContext);
  const navigate = useNavigate();
  const movieId = useParams().id;
  const movie = movieList.filter((movies) => movies.id.toString() === movieId);
  if (movie === null || movie === undefined || movie.length != 1) {
    return <NoTFound />;
  }
  function handleSaveChanges(movieId: number) {
    const movieIndex = movieList.findIndex((movie) => movie.id === movieId);
    if (movieIndex === -1) {
      return;
    }
    if (movieName !== "") movieList[movieIndex].title = movieName;
    if (movieDescription !== "")
      movieList[movieIndex].overview = movieDescription;
    if (movieRelease !== "") movieList[movieIndex].release_date = movieRelease;
    if (movieLanguage !== "")
      movieList[movieIndex].original_language = movieLanguage;
    navigate("/");
  }
  const movieDetails = movie[0];
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
              id="movie-name"
              placeholder={movieDetails.title}
              className="w-full bg-inherit border-1 rounded-md"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Description:</div>
            <input
              type="text"
              id="movie-description"
              placeholder={movieDetails.overview}
              className="w-full bg-inherit border-1 rounded-md"
              value={movieDescription}
              onChange={(e) => setMovieDescription(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Release:</div>
            <input
              type="text"
              id="movie-release"
              placeholder={movieDetails.release_date}
              className="w-full bg-inherit border-1 rounded-md"
              value={movieRelease}
              onChange={(e) => setMovieRelease(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row justify-between">
            <div className="text-lg mr-4">Language</div>
            <input
              type="text"
              id="movie-language"
              placeholder={movieDetails.original_language}
              className="w-full bg-inherit border-1 rounded-md"
              value={movieLanguage}
              onChange={(e) => setMovieLanguage(e.target.value)}
            ></input>
          </div>
          <div className="flex justify-center items-center gap-4 text-white">
            <Button
              variant="outlined"
              sx={{ color: "white" }}
              onClick={() => {
                handleSaveChanges(movieDetails.id);
              }}
            >
              Save Changes
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "white" }}
              onClick={() => {
                navigate("/");
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
