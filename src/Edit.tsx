import { movieList } from "./assets/movie-data"

import { useParams } from "react-router-dom"

export default function Edit(){
    let movieId = useParams();
    console.log(movieId);
    return (
        <div>
            Edit Page
        </div>
    )
}