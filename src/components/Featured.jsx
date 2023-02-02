import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Featured({ featured }) {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      swipeable={false}
      width={1100}
      showStatus={false}
    >
      {featured.map((movie) => {
        return (
          <>
            <CardMedia
              sx={{
                height: 450,
                width: 1100,
                filter: "brightness(50%)",
              }}
              //to destructure non array object
              image={
                movie.backdrop_path !== "null"
                  ? `https://image.tmdb.org/t/p/w1280` + movie.backdrop_path
                  : "https://via.placeholder.com/500"
              }
              alt={movie.title}
            />
            <CardContent className="text-white text-start flex flex-col gap-2 w-[50%] absolute bottom-0">
              <Typography className="text-[25px]">{movie.title}</Typography>
              <Typography className="text-[15px]">{movie.overview}</Typography>
            </CardContent>
          </>
        );
      })}
    </Carousel>
  );
}

export default Featured;
