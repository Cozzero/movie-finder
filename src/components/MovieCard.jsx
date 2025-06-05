// src/components/MovieCard.jsx
function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <li>
      {movie.Title} ({movie.Year})
      <button onClick={() => toggleFavorite(movie)}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </li>
  );
}

export default MovieCard;
