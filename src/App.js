//functional component for movie card
import {Component} from "react";
import MovieList from "./movielist";
import Navbar from "./Navbar";
import { movies } from "./moviesData";


class App extends Component{
  constructor(){
    super(); // because we inheriting the super class
    this.state = {//we are using state to store the data of our app so, we don't need to hardcode the data we can fetch it
        movies: movies,
        cartCount: 0 
    }
  }
  
  handleAddStars = (movie)=>{
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      if(movies[movieId].star <5){
          movies[movieId].star += 0.5
      }

      this.setState({
          movies
      });
    }


  handleDecStars = (movie) => {

      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      if(movies[movieId].star > 0){
          movies[movieId].star -= 0.5;
      }

      this.setState({
          movies
      })

  }

  handleToggleFav = (movie)=> {
      const {movies} = this.state;
      const movieId = movies.indexOf(movie);

      movies[movieId].fav = !movies[movieId].fav;

      this.setState({
          movies
      })
  }

  handleAddtocart = (movie) => {
      let {movies,cartCount} = this.state;
      const movieId = movies.indexOf(movie);

      movies[movieId].cart = !movies[movieId].cart;

      if(movies[movieId].cart){
        cartCount = cartCount+1;
      }
      else{
        cartCount -= 1;
      }

      this.setState({
          movies,
          cartCount
      })
  }

  render() {
    const {movies,cartCount} = this.state;
    return (
      <>
        
        <Navbar cartCount ={cartCount}/>
        <MovieList movies = {movies}
                   
                   onIncStars = {this.handleAddStars}
                   onDecStars = {this.handleDecStars}
                   onClickFav = {this.handleToggleFav}
                   onClickAddtocart = {this.handleAddtocart} />
      </>
    );
  }
}
export default App;
