import React from "react";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function MovieCard({ movie }) {
  const circumference = 30 * 2 * Math.PI;
  return (
    <div
      className="group w-[200px]  
     duration-300 hover:scale-105 h-[50px] mb-[400px] mr-[70px] relative"
    >
      <CardMedia
        className="duration-100 rounded-[30px] z-10"
        sx={{ height: 300, width: 200 }}
        image={
          movie.poster_path !== "null"
            ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
            : "https://via.placeholder.com/500"
        }
        title={movie.title}
      >
        <CardContent>
          {/* circle rating */}
          <div class="absolute cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-full -top-8 -right-9 bg-transparent">
            <svg class="w-20 h-20">
              <circle
                class="text-gray-300"
                stroke-width="4"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="40"
                cy="40"
              />
              <circle
                class="text-white"
                stroke="currentColor"
                fill="white"
                r="20"
                cx="40"
                cy="40"
              />
              <circle
                class="text-blue-600"
                stroke-width="4"
                stroke-dasharray={circumference}
                stroke-dashoffset={
                  circumference - (movie.vote_average / 15) * circumference
                }
                stroke-linecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="40"
                cy="40"
              />
            </svg>
            <span class="absolute text-[13px] font-bold text-black">
              {movie.vote_average + "%"}
            </span>
          </div>
        </CardContent>
      </CardMedia>
      <Typography
        className="text-[#212121] flex text-center h-[80px] items-start justify-center mt-3 text-ellipsis"
        variant="h5"
      >
        {movie.title}
      </Typography>
    </div>
  );
}

export default MovieCard;
