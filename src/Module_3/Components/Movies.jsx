import Movie from "./Movie";
import "../Components/Media.css"

import Nothing from "./Nothing";


export default function Movies(props) {
    const {movies = []} = props;
    return(
        <div className="movies">
            {movies.length ? movies.map(movie =>(
                <Movie key={movie.imdbID} {...movie} />
            )) : <Nothing/> }
        </div>
    )
}