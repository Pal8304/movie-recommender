import { createContext} from "react";
import { movieList } from "../assets/movie-data";
import Movie from "../assets/movie-interface";
interface MovieDataContextType{
    movieList: Movie[];
    setMovieList: (movies: Movie[]) => void;
}

const MovieDataContext = createContext<MovieDataContextType>({movieList,setMovieList:()=>{}})

export default MovieDataContext;