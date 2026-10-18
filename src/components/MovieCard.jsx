
function MovieCard({ movie, setPage, setMovieId }) {
  return (
    <div
      onClick={() => {
        setMovieId(movie.id);
        setPage("details");
      }}
      className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 hover:shadow-red-500/20 transition duration-300"
    >
      {/* Movie poster */}
      <div className="overflow-hidden">
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : "https://placehold.co/300x450?text=No+Poster"
          }
          alt={movie.title}
          className="w-full h-72 sm:h-80 object-cover group-hover:brightness-110 transition duration-300"
        />
      </div>

      {/* Movie information */}
      <div className="p-4">
        <h3 className="text-white text-lg font-bold truncate">
          {movie.title}
        </h3>

        <div className="flex items-center justify-between mt-2">
          <p className="text-yellow-400 font-semibold">
            ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
          </p>

          <p className="text-gray-400 text-sm">
            {movie.release_date
              ? movie.release_date.slice(0, 4)
              : "Year N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
