import { movieList } from "../assets/movie-data";

import { Card, CardContent, CardMedia } from "@mui/material";

export default function MovieList() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 m-4">
            {movieList.map((movie, index) => (
                index < 4 && 
                (<div className="flex w-56 h-[32rem] m-2 rounded-lg transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 hover:border-2">
                    <Card className="w-full h-full">
                        <CardMedia
                            component="img"
                            height="100"
                            image={movie.poster_path}
                        >
                        </CardMedia>
                        <CardContent>
                            <div className="flex flex-col overflow-scroll">
                                <div className="text-2xl">{movie.title}</div>
                                {/* <div className="text-sm opacity-50">({movie.release_date})</div> */}
                                <div className="text-sm opacity-50 overflow-scroll">{movie.overview}</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>)
            ))}
        </div>
    )
}