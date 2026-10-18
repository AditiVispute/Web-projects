
function Navbar({ setPage, setSearch }) {
  function handleSearch(event) {
    event.preventDefault();

    const movieName = event.target.movie.value.trim();

    if (movieName !== "") {
      setSearch(movieName);
      setPage("search");
      event.target.reset();
    }
  }

  return (
    <nav className="bg-gray-950 text-white px-6 py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <h2
          className="text-3xl font-bold cursor-pointer"
          onClick={() => setPage("home")}
        >
          Movie<span className="text-red-500">Zone</span>
        </h2>

        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setPage("home")}
            className="px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Popular
          </button>

          <button
            onClick={() => setPage("toprated")}
            className="px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Top Rated
          </button>

          <button
            onClick={() => setPage("upcoming")}
            className="px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Upcoming
          </button>
        </div>

        {/* Search form */}
        <form
          onSubmit={handleSearch}
          className="flex w-full md:w-auto"
        >
          <input
            type="text"
            name="movie"
            placeholder="Search movies..."
            className="min-w-0 w-full md:w-48 px-3 py-2 rounded-l-lg text-black bg-white outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="bg-red-600 px-4 py-2 rounded-r-lg hover:bg-red-700 transition"
          >
            Search
          </button>
        </form>

      </div>
    </nav>
  );
}

export default Navbar;
