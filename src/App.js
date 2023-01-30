import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { CardContent, Pagination, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1";

function App() {
  //show all popular movies
  const [popular, setPopular] = useState([]);
  //to filter movies with genre
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [featured, setFeatured] = useState([]);

  const featuredMovie = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/315162?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&append_to_response=asd"
    );
    const movies = await res.json();
    //to destructure non array object
    // eslint-disable-next-line
    const { title, backdrop_path, overview } = movies;
    console.log(movies);
    setFeatured(movies);
  };

  const searchMovies = async (title) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const movies = await res.json();
    setFiltered(movies.results);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    featuredMovie();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(API_URL);
    const movies = await data.json();

    setPopular(movies.results);
    setFiltered(movies.results);
  };

  useEffect(() => {
    document.title = "Home";
  }, []);

  //a checker to see if object is array or not
  //if result is [] it means its not an array
  // const result = Array.isArray(featured)
  //   ? featured.map((element) => {
  //       return element * 2;
  //     })
  //   : [];

  // console.log(result);

  return (
    <>
      <body className="overflow-x-hidden scrollbar-none" id="root">
        <header>
          <Header
            searchMovies={searchMovies}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
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
          <div className="w-full h-full ml-[18%] mt-10 bg-white">
            {popular?.length > 0 ? (
              <>
                <div className="mx-8 h-[450px] w-[91.5%] mb-[5%] mt-[5%] relative">
                  <CardMedia
                    sx={{ height: 450, width: 1100, filter: "brightness(50%)" }}
                    //to destructure non array object
                    image={
                      featured.backdrop_path !== "null"
                        ? `https://image.tmdb.org/t/p/w1280` +
                          featured.backdrop_path
                        : "https://via.placeholder.com/500"
                    }
                    alt={featured.title}
                  />
                  <CardContent className="text-white flex flex-col gap-2 w-[50%] absolute bottom-0">
                    <Typography className="text-[25px]">
                      {featured.title}
                    </Typography>
                    <Typography className="text-[15px]">
                      {featured.overview}
                    </Typography>
                  </CardContent>
                </div>
                <div class="flex flex-wrap justify-start items-start text-center w-[100%] mx-[6.5%]">
                  {filtered.map((movie) => (
                    <MovieCard className="flex" key={movie.id} movie={movie} />
                  ))}
                </div>
              </>
            ) : (
              <div>
                <h2>No movies found</h2>
              </div>
            )}
            <div className="z-30 flex items-center justify-center w-full pt-20 pb-10">
              <Pagination
                className="flex text-black "
                count={10}
                shape="rounded"
              />
            </div>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
