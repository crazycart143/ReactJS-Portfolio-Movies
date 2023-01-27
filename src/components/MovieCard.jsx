import React from "react";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
function MovieCard(movie) {
  return (
    <div
      className="group transform w-[30%] 
    transition duration-300 hover:scale-110 max-w-[345px] h-[450px] hover:bg-[#666666]"
    >
      <CardMedia
        className="relative duration-100 group-hover:brightness-50"
        sx={{ height: 450 }}
        image={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        title={movie.Title}
      >
        <Typography
          gutterBottom
          variant="body3"
          component="div"
          className="absolute top-0 invisible px-4 group-hover:visible"
        >
          {movie.Year}
        </Typography>
      </CardMedia>
      <CardContent className="h-[130px] max-h-[150px] absolute bottom-0 bg-[#2C2E2F] w-full group-hover:bg-transparent duration-200">
        <Typography
          className="text-[#C4C4C4] uppercase tracking-widest"
          gutterBottom
          variant="body3"
          component="div"
        >
          {movie.Type}
        </Typography>
        <Typography className="text-[#EACEB5]" variant="h5">
          {movie.Title}
        </Typography>
      </CardContent>
    </div>
  );
}

export default MovieCard;
