
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

function Upcoming({ setPage, setMovieId }) {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
        setTotalPages(Math.min(data.total_pages || 1, 500));
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching upcoming movies:", error);
        setLoading(false);
      });
  }, [pageNumber]);

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
            Coming soon to the screen
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            Upcoming Movies
          </h1>

          <p className="text-gray-400 mt-2">
            Find the next movies to add to your watchlist.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-300 py-16">
            Loading upcoming movies...
          </p>
        ) : movies.length > 0 ? (
          <>
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

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button
                disabled={pageNumber === 1}
                onClick={() => setPageNumber(pageNumber - 1)}
                className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              <span className="text-gray-300">
                Page {pageNumber} of {totalPages}
              </span>

              <button
                disabled={pageNumber >= totalPages}
                onClick={() => setPageNumber(pageNumber + 1)}
                className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transition"
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-400 py-16">
            No upcoming movies found. Please try again later.
          </p>
        )}
      </div>
    </main>
  );
}

export default Upcoming;
