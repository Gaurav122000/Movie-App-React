
function MovieCard(props){// code for the ui
    
    
        const {movies,onIncStars, onDecStars,onClickFav,onClickAddtocart} = props
        const {title,plot,price,rating,star,fav,cart,poster} = props.movies; // it's coming from the movielist
       return (
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={poster} />
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={()=>{onDecStars(movies)}}/>
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png" onClick={()=>{onIncStars(movies)}}/>
                                <span className="starCount">{star}</span>
                        </div>
                        {fav ? <button className="unfavourite-btn" onClick={() => onClickFav(movies)}>Un-favourite</button> : <button className="favourite-btn" onClick={() => onClickFav(movies)}>Favourite</button>}

                        {cart ? <button className="empty-cart" onClick={() => onClickAddtocart(movies)}>Remove Item</button> : <button className="cart-btn" onClick={() => onClickAddtocart(movies)}>Add to cart</button>}
                    </div>
                </div>
            </div>
        </div>
       )
    }


export default MovieCard;

/* another of doing it */
/* <button className={fav? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav? "unfavourite" : "favourite"}</button> */