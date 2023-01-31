import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { CardContent, Pagination, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
// import error from "./assets/videos/error.gif";
import Skeleton from "@mui/material/Skeleton";
import CardSkeleton from "./components/Skeleton";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1";

function App() {
  //show all popular movies
  const [popular, setPopular] = useState([]);
  //to filter movies with genre
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [featured, setFeatured] = useState(null);
  // const [upcoming, setUpcoming] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchMovies = async (title) => {
    setIsLoading(true);
    setTimeout(async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&query=${title}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((filtered) => {
          setPopular(filtered.results);
          setFiltered(filtered.results);
          setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/315162?api_key=bb4cc190ec5e729a31f555a69ba8bac1&language=en-US&append_to_response=asd"
      );
      const data = await res.json();
      // eslint-disable-next-line
      const { title, backdrop_path, overview } = data;
      setFeatured(data);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      await fetch(API_URL)
        .then((res) => res.json())
        .then((filtered) => {
          setPopular(filtered.results);
          setFiltered(filtered.results);
          setIsLoading(false);
        });
    }, 2000);
  }, []);

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
            />
          </div>
          <div className="w-[80%] flex flex-col justify-start items-start h-full mt-10 bg-white absolute right-0 top-0">
            <>
              <div className="h-[450px] w-[91.5%] mb-[5%] mt-[5%] relative mx-5">
                {featured ? (
                  <>
                    <CardMedia
                      sx={{
                        height: 450,
                        width: 1100,
                        filter: "brightness(50%)",
                      }}
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
                  </>
                ) : (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={1100}
                    height={450}
                  />
                )}
              </div>
              <div class="flex flex-wrap justify-start items-start text-center w-[1070px] mx-[6%]">
                {isLoading && <CardSkeleton card={10} />}
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
              />
            </>
            {/* // <div className="mt-[5%] flex w-full h-full text-center justify-center items-center relative">
              //   <CardMedia
              //     className="absolute left-10"
              //     sx={{ height: 400, width: 400 }}
              //     image={error}
              //     alt={"movie not found"}
              //   />
              //   <h2 className="font-bold text-blue-500 text-[100px] w-[50%] ml-[20%]">
              //     NO MOVIES FOUND
              //   </h2>
              // </div> */}
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
