import React from "react";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function MovieCard({ movie }) {
  return (
    <div
      className="group transform w-[17.5%]  
    transition duration-300 hover:scale-110 max-w-[345px] h-[400px] "
    >
      <CardMedia
        className="relative duration-100 rounded-[30px] z-10"
        sx={{ height: 350, width: 200 }}
        image={
          movie.Poster !== "N/A"
            ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
            : "https://via.placeholder.com/500"
        }
        title={movie.title}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="body3"
            component="div"
            className="absolute top-0 px-4 "
          >
            {movie.vote_average}
          </Typography>
        </CardContent>
      </CardMedia>
      <Typography
        className="text-[#212121] flex justify-center items-center text-center my-3"
        variant="h5"
      >
        {movie.title}
      </Typography>
    </div>
  );
}

export default MovieCard;
