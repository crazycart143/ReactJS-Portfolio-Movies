import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { Pagination } from "@mui/material";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=bb4cc190ec5e729a31f555a69ba8bac1";

function App() {
  //show all popular movies
  const [popular, setPopular] = useState([]);
  //to filter movies with genre
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // const searchMovies = async (title) => {
  //   const res = await fetch(`${API_URL}&s=${title}`);
  //   const data = await res.json();

  //   setMovies(data.Search);
  // };

  useEffect(() => {
    fetchPopular();
  }, []);

  // useEffect(() => {
  //   searchMovies("Spiderman");
  // }, []);

  const fetchPopular = async () => {
    const data = await fetch(API_URL);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <body className="overflow-x-hidden scrollbar-none" id="root">
        <header>
          <Header />
        </header>
        <main className="grid w-full h-full grid-cols-nav1">
          <div className="flex">
            <Dashboard
              popular={popular}
              setFiltered={setFiltered}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
            />
          </div>
          <div className="w-full h-full mx-5 mt-10 bg-white">
            {popular?.length > 0 ? (
              <>
                <div className="mx-5 h-[18%] w-[93.5%] mb-[5%] bg-red-500 mt-[7%]"></div>
                <div className="flex w-full h-full flex-row flex-wrap mx-[3%] gap-20 justify-start items-center">
                  {filtered.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))}
                </div>
                <div className="flex w-full h-[100px] pt-20 justify-center items-center pb-10 z-30">
                  <Pagination
                    className="flex text-black "
                    count={10}
                    shape="rounded"
                  />
                </div>
              </>
            ) : (
              <div>
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
