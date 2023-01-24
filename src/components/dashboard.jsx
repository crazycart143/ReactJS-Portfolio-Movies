import React from "react";
import { Button } from "@mui/material";
import TheatersOutlinedIcon from "@mui/icons-material/TheatersOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";

function Dashboard() {
  return (
    <>
      <div className="w-[20%] h-[800px] overflow-y-scroll">
        <div className="w-full border-b-2 border-gray-300">
          <h1 className="p-7 font-bold text-center text-[2.5vw] text-blue-500">
            FILMPIRE
          </h1>
        </div>
        <div className="flex flex-col w-full py-5 border-b-2 border-gray-300">
          <h5 className="px-5 mb-3 font-semibold text-gray-600">Categories</h5>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <TheatersOutlinedIcon className="text-[40px] mr-3" />
              Popular
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <StarBorderPurple500OutlinedIcon className="text-[40px] mr-3" />
              Top Rated
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <SlideshowOutlinedIcon className="text-[40px] mr-3" />
              Upcoming
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full py-5 border-b-2 border-gray-300">
          <h5 className="px-5 mb-3 font-semibold text-gray-600">Genres</h5>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <TheatersOutlinedIcon className="text-[40px] mr-3" />
              Popular
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <StarBorderPurple500OutlinedIcon className="text-[40px] mr-3" />
              Top Rated
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <SlideshowOutlinedIcon className="text-[40px] mr-3" />
              Upcoming
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <TheatersOutlinedIcon className="text-[40px] mr-3" />
              Popular
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <StarBorderPurple500OutlinedIcon className="text-[40px] mr-3" />
              Top Rated
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <SlideshowOutlinedIcon className="text-[40px] mr-3" />
              Upcoming
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <TheatersOutlinedIcon className="text-[40px] mr-3" />
              Popular
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <StarBorderPurple500OutlinedIcon className="text-[40px] mr-3" />
              Top Rated
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <SlideshowOutlinedIcon className="text-[40px] mr-3" />
              Upcoming
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
