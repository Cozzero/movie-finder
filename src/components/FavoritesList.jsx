//src/components/FavoritesList.jsx

//import MovieCard from "./MovieCard";

function FavoritesList({ favorites, toggleFavorite }) {
    return (
        <div>
            <h2>Favorites</h2>
            <ul>
                {favorites.map((movie) => (
                    // <li key={movie.imdbID}>
                    //     {movie.Title} ({movie.Year})
                    //     <button onClick={() => onpointermove(movie.imdbID)}>Remove</button>
                    // </li>
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        isFavorite={true}
                        toggleFavorite={toggleFavorite}
                    />
                ))}
            </ul>
        </div>
    );
}

export default FavoritesList;
