
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./pages/SearchResults";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  const [movieId, setMovieId] = useState("");
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar
        setPage={setPage}
        setSearch={setSearch}
      />

      {page === "home" && (
        <Home
          setPage={setPage}
          setMovieId={setMovieId}
        />
      )}

      {page === "toprated" && (
        <TopRated
          setPage={setPage}
          setMovieId={setMovieId}
        />
      )}

      {page === "upcoming" && (
        <Upcoming
          setPage={setPage}
          setMovieId={setMovieId}
        />
      )}

      {page === "details" && (
        <MovieDetails movieId={movieId} />
      )}

      {page === "search" && (
        <SearchResults
          search={search}
          setPage={setPage}
          setMovieId={setMovieId}
        />
      )}

      <Footer>
         {page === "search" && (
        <SearchResults
          search={search}
          setPage={setPage}
          setMovieId={setMovieId}
        />
      )}
      </Footer>
    </div>
  );
}

export default App;
