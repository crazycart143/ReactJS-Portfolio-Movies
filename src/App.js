import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";

const API_URL =
  "https://api.themoviedb.org/3/movie/550?api_key=bb4cc190ec5e729a31f555a69ba8bac1";

function App() {
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <body className="flex flex-wrap-reverse" id="root">
        <Dashboard />
        <header>
          <Header />
        </header>
        <main className="w-full">
          <div>
            {movies?.length > 0 ? (
              <>
                <div className="flex w-full flex-row flex-wrap px-[10%] py-[10%]  gap-14 justify-start items-center">
                  {movies.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
                </div>
              </>
            ) : (
              <div className="">
                <h2>No movies found</h2>
              </div>
            )}
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
