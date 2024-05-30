import { createContext} from "react";
import { movieList } from "../assets/movie-data";

const MovieDataContext = createContext(movieList);

export default MovieDataContext;