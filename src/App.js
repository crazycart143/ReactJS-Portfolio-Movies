import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { Pagination } from "@mui/material";
// import error from "./assets/videos/error.gif";
import Skeleton from "@mui/material/Skeleton";
import CardSkeleton from "./components/Skeleton";
import Featured from "./components/Featured";
import axios from "axios";

function App() {
  //show all popular movies
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  //to filter movies with genre
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [featured, setFeatured] = useState([]);
  // const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const ApiAddress = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  });

  const searchMovies = async (title) => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data: res } = await ApiAddress.get(
        `search/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&query=${title}&page=1&include_adult=false`
      );
      setPopular(res.results);
      setFiltered(res.results);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data: res } = await ApiAddress.get(
        `movie/now_playing?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&page=1`
      );
      // eslint-disable-next-line
      setFeatured(res.results.slice(0, 10));
      //slice is used to limit movie items
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data: res } = await ApiAddress.get(
        `movie/top_rated?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&page=` +
          page
      );
      // eslint-disable-next-line
      setTopRated(res.results);
      //slice is used to limit movie items
      setIsLoading(false);
    }, 2000);
  }, [page]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data: res } = await ApiAddress.get(
        `movie/upcoming?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&page=` +
          page`&region=US`
      );
      // eslint-disable-next-line
      setUpcoming(res.results);
      //slice is used to limit movie items
      setIsLoading(false);
    }, 2000);
  }, [page]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data: res } = await ApiAddress.get(
        `discover/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1&page=` + page
      );
      setPopular(res.results);
      setFiltered(res.results);
      setIsLoading(false);
    }, 2000);
  }, [page]);

  // const fetchUpcoming = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/upcoming?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&page=1"
  //   );
  //   const movies = await data.json();
  //   setUpcoming(movies.results);
  //   console.log(movies.results);
  // };

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
              setIsLoading={setIsLoading}
              topRated={topRated}
              upcoming={upcoming}
            />
          </div>
          <div className="w-[80%] flex flex-col justify-start items-start h-full mt-10 bg-white absolute right-0 top-0">
            <>
              <div className="h-[450px] mb-[5%] mt-[5%] relative mx-5">
                {isLoading && (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={1100}
                    height={450}
                  />
                )}
                {!isLoading && featured.length > 0 ? (
                  <Featured className="flex" featured={featured} />
                ) : (
                  <div></div>
                )}
              </div>
              <div class="flex flex-wrap justify-start items-start text-center w-[1050px] mx-[7.5%]">
                {isLoading && <CardSkeleton card={13} />}
                {filtered.map((movie) => {
                  return !isLoading ? (
                    <MovieCard className="flex" key={movie.id} movie={movie} />
                  ) : (
                    <div></div>
                  );
                })}
              </div>
              <Pagination
                className="flex text-black w-full justify-center pt-[5%] pb-[5%]"
                count={10}
                shape="rounded"
                onChange={(e, value) => setPage(value)}
              />
            </>
            {/* <div className="mt-[5%] flex w-full h-full text-center justify-center items-center relative">
              <CardMedia
                className="absolute left-10"
                sx={{ height: 400, width: 400 }}
                image={error}
                alt={"movie not found"}
              />
              <h2 className="font-bold text-blue-500 text-[100px] w-[50%] ml-[20%]">
                NO MOVIES FOUND
              </h2>
            </div> */}
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
