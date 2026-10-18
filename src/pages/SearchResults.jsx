
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

function SearchResults({ search, setPage, setMovieId }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!search) {
      setMovies([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(search)}&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Search error:", error);
        setMovies([]);
        setLoading(false);
      });
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">

        <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
          Find your next movie
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold mt-2 mb-8">
          Search Results
        </h1>

        <p className="text-gray-400 mb-6">
          Results for: <span className="text-white">{search}</span>
        </p>

        {loading ? (
          <p className="text-center text-gray-300 py-16">
            Searching movies...
          </p>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                setPage={setPage}
                setMovieId={setMovieId}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 py-16">
            No movies found. Try another title.
          </p>
        )}
      </div>
    </main>
  );
}

export default SearchResults;
