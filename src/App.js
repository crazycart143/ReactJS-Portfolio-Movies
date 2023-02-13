/* eslint-disable react-hooks/exhaustive-deps */
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
import CardMedia from "@mui/material/CardMedia";
import error from "../src/assets/videos/error.gif";

function App() {
  //show all popular movies
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  //to filter movies with genre
  const [activeGenre, setActiveGenre] = useState();
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
  const [featured, setFeatured] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  const ApiAddress = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  });

  const searchMovies = (title) => {
    if (searchStatus === true) {
      setIsLoading(true);
      setTimeout(async () => {
        const { data: res } = await ApiAddress.get(
          `search/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&query=${title}&page=${page}&include_adult=false`
        );
        setCategory(res.results);
        setIsLoading(false);
      }, 2000);
    }
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
        `movie/popular?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&page=` +
          page
      );
      // eslint-disable-next-line
      setPopular(res.results);
      setIsLoading(false);
    }, 2000);
  }, [page]);

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
          page +
          `&region=US`
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
        `discover/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1&page=${page}&with_genres=` +
          activeGenre
      );

      // eslint-disable-next-line
      setCategory(res.results);

      //slice is used to limit movie items
      setIsLoading(false);
    }, 2000);
  }, [activeGenre, page]);

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
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            searchMovies={searchMovies}
            setSearchStatus={setSearchStatus}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </header>
        <main
          className={`${
            darkMode ? "dark" : ""
          } grid w-full h-full grid-cols-nav1`}
        >
          <div className="flex">
            <Dashboard
              popular={popular}
              activeGenre={activeGenre}
              setActiveGenre={setActiveGenre}
              setIsLoading={setIsLoading}
              topRated={topRated}
              upcoming={upcoming}
              darkMode={darkMode}
              setCategory={setCategory}
            />
          </div>
          <div className="dark:bg-[#121212] w-[80%] flex flex-col justify-start items-start h-full mt-10 bg-white absolute right-0 top-0">
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
                {!isLoading ? (
                  category.length > 0 ? (
                    <Featured className="flex" featured={featured} />
                  ) : (
                    <div
                      className={`${
                        darkMode ? "dark" : ""
                      } mt-[5%] flex w-full h-full text-center justify-center items-center relative`}
                    >
                      <CardMedia
                        className="absolute left-10"
                        sx={{ height: 400, width: 400 }}
                        image={error}
                        alt={"movie not found"}
                      />
                      <h2 className="dark:text-[#DB0000] font-bold text-blue-500 text-[100px] w-[50%] ml-[40%]">
                        NO MOVIES FOUND :(
                      </h2>
                    </div>
                  )
                ) : (
                  <div></div>
                )}
              </div>
              <div class="dark:bg-[#121212] flex flex-wrap justify-around items-start text-center w-full px-[7%]">
                {isLoading && <CardSkeleton card={13} />}
                {category.map((movie) => {
                  return !isLoading ? (
                    <MovieCard className="flex" key={movie.id} movie={movie} />
                  ) : (
                    <div></div>
                  );
                })}
              </div>
              <Pagination
                className="dark:bg-[#121212] flex text-black w-full justify-center pt-[5%] pb-[5%]"
                count={10}
                shape="rounded"
                onChange={(e) => setPage(e.target.innerText)}
              />
            </>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
