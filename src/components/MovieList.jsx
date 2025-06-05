// src/components/MovieList.jsx
import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, toggleFavorite }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </ul>
  );
}

export default MovieList;
