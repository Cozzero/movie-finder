import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import FavoritesList from "./components/FavoritesList";
import SearchBar from "./components/SearchBar";


const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState([]);

 
 //Load favorites from localstorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

//save to localstorage whenever favorites changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);
    if (isAlreadyFavorite) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const searchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "Movies not found");
        setMovies([]);
      }
    } catch (err) {
      setError("Network error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Movie Finder</h1>

      <SearchBar query={query} setQuery={setQuery} onSearch={searchMovies}/>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <MovieList
        movies={movies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <FavoritesList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

console.log("App component loaded");

export default App;
