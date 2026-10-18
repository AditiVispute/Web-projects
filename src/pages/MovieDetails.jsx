
import { useState, useEffect } from "react";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetails({ movieId }) {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setCast(data.cast || []))
      .catch((error) => console.log(error));
  }, [movieId]);

  if (!movie) {
    return (
      <p className="min-h-screen bg-gray-950 text-white text-center p-10">
        Loading movie details...
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Movie information */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          <img
            src={
              movie.poster_path
                ? IMAGE_URL + movie.poster_path
                : "https://placehold.co/300x450?text=No+Poster"
            }
            alt={movie.title}
            className="w-full max-w-xs rounded-xl shadow-lg mx-auto md:mx-0"
          />

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="text-yellow-400 text-lg mb-3">
              ⭐ Rating: {movie.vote_average?.toFixed(1) || "N/A"}
            </p>

            <p className="text-gray-400 mb-5">
              Release Date: {movie.release_date || "N/A"}
            </p>

            <h2 className="text-xl font-semibold mb-2">Overview</h2>

            <p className="text-gray-300 leading-7">
              {movie.overview || "No description available."}
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cast</h2>

            {cast.length > 0 ? (
              <ul className="space-y-3">
                {cast.slice(0, 10).map((actor) => (
                  <li
                    key={actor.cast_id || actor.credit_id}
                    className="bg-gray-900 p-3 rounded-lg"
                  >
                    <span className="font-semibold">{actor.name}</span>
                    <span className="text-gray-400">
                      {" "}as {actor.character || "Unknown"}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">
                Cast information unavailable.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetails;
