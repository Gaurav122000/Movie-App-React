
import MovieCard from "./moviecard";

function MovieList(props){
        //const {title,plot,Price,rating,star,fav,cart,poster} = state.movies;
    const {movies,onIncStars, onDecStars,onClickFav,onClickAddtocart} = props;
    return (
    <> 
        {movies.map((movie,index) => <MovieCard movies = {movie}
                                            key = {index}
                                            onIncStars = {onIncStars}
                                            onDecStars = {onDecStars}
                                            onClickFav = {onClickFav}
                                            onClickAddtocart = {onClickAddtocart}/>)}
            
    </>
   )
}


export default MovieList;

