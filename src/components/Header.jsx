import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";

function Header() {
  return (
    <header className="">
      <div className="bg-blue-500 w-[80vw] h-[80px] flex justify-center items-center relative">
        <div className="absolute left-[39.5%] mb-2 mt-2">
          <SearchIcon className="text-white" />
        </div>
        <Input className="pl-8 mt-2 text-white" />
      </div>
    </header>
  );
}

export default Header;
