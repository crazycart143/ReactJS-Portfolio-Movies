import React from "react";
import { Button } from "@mui/material";

function Dashboard() {
  return (
    <>
      <div className="w-[20%] h-[800px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
        <div className="w-full border-b-2 border-gray-300">
          <h1 className="p-7 font-bold text-center text-[2.5vw] text-blue-500">
            FILMPIRE
          </h1>
        </div>
        <div className="flex flex-col w-full py-5 border-b-2 border-gray-300">
          <h5 className="px-5 mb-3 font-semibold text-gray-600">Categories</h5>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <svg
                className="ml-1 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 512 512"
              >
                <path d="M0 0v512h512V0H0zm63.9 490.7H21.3V448H64v42.7zm0-85.3H21.3v-42.7H64v42.7zm0-85.4H21.3v-42.7H64V320zm0-85.3H21.3V192H64v42.7zm0-85.4H21.3v-42.7H64v42.7zm0-85.4H21.3V21.3H64v42.6zm362.8 405.5H85.3V277.3h341.4v192.1zm0-234.7H85.3V42.6h341.4v192.1zm64 256H448V448h42.7v42.7zm0-85.3H448v-42.7h42.7v42.7zm0-85.4H448v-42.7h42.7V320zm0-85.3H448V192h42.7v42.7zm0-85.4H448v-42.7h42.7v42.7zm0-85.4H448V21.3h42.7v42.6z" />
              </svg>
              Popular
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              <svg
                className="mr-1 -ml-1"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="-5 0 32 32"
              >
                <path d="M17.48 26.6c-.12 0-.28-.04-.4-.08l-5.96-3.12-5.96 3.12c-.28.16-.64.12-.88-.08s-.4-.52-.32-.8L5.08 19 .24 14.28c-.24-.24-.32-.56-.2-.84.08-.32.36-.52.68-.56l6.68-.96 3-6.04c.16-.28.44-.48.76-.48s.6.2.76.48l3 6.04 6.68.96c.32.04.56.28.68.56.08.32 0 .64-.2.84L17.16 19l1.12 6.64c.04.32-.08.64-.32.8-.16.12-.32.16-.48.16zM2.64 14.28l3.92 3.84c.2.2.28.48.24.76l-.92 5.4 4.84-2.56c.24-.12.52-.12.76 0l4.84 2.56-.92-5.4c-.04-.28.04-.56.24-.76l3.92-3.84-5.44-.8a.835.835 0 0 1-.64-.44l-2.44-4.92-2.44 4.92c-.12.24-.36.4-.64.44l-5.32.8z" />
              </svg>
              Top Rated
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Upcoming
            </Button>
          </div>
        </div>
        <div className="flex flex-col w-full py-5 border-b-2 border-gray-300">
          <h5 className="px-5 mb-3 font-semibold text-gray-600">Genres</h5>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Action
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Adventure
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Animation
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Comedy
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Crime
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Documentary
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Drama
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Family
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Fantasy
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              History
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Horror
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Music
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Mystery
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Romance
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Science Fiction
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              TV Movie
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Thriller
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              War
            </Button>
          </div>
          <div>
            <Button className="flex text-[17px] capitalize justify-start w-full gap-4 px-5 text-black bg-white">
              Western
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
