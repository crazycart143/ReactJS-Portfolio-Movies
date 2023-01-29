import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Input } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function Header({ searchMovies, searchTerm, setSearchTerm }) {
  //to search using enter key
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <header className="w-[80%] fixed ml-[20%] left-0 top-0 z-50">
      <div className="bg-blue-500 w-[79vw] h-[80px] flex items-center sticky left-0 top-0">
        <div className="absolute left-[34.5%] mb-2 mt-2">
          <SearchIcon className="text-white" />
        </div>
        <div className="flex justify-center w-full">
          <ThemeProvider theme={theme}>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              color="neutral"
              className="pl-8 pr-8 mt-2 text-white"
            />
          </ThemeProvider>
        </div>
        <div className="flex justify-end">
          <Button className="w-full mr-5 text-white">
            LOGIN{" "}
            <svg
              className="ml-2 text-white fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              version="1.0"
              viewBox="0 0 600 600"
            >
              <path d="M279.5 20.6c-54.6 4.6-104.9 23.6-148.4 56.2-15.3 11.4-42.9 39-54.3 54.3-29.6 39.5-47 81.9-54.4 132.4-2.5 16.8-2.5 56.2 0 73 7.4 50.5 24.8 92.9 54.4 132.4 11.4 15.3 39 42.9 54.3 54.3 39.5 29.6 81.9 47 132.4 54.4 16.8 2.5 56.2 2.5 73 0 50.7-7.4 92.1-24.4 132.5-54.5 15.2-11.3 42.8-38.9 54.1-54.1 30.1-40.4 47.1-81.8 54.5-132.5 1.3-8.9 1.8-18.3 1.8-36.5s-.5-27.6-1.8-36.5c-7.4-50.7-24.4-92.1-54.5-132.5-11.2-15.1-38.8-42.8-54.2-54.2-38.9-29.1-80.6-46.5-129.4-53.9-12.7-1.9-48-3.3-60-2.3zM325 133.3c29.9 7.7 55.2 29.9 67.3 58.7 5.4 13.1 7.2 22.3 7.2 38s-1.8 24.9-7.2 38c-12.5 29.8-39.4 52.4-70.8 59.7-11 2.5-32 2.5-43 0-36.3-8.4-65.6-36.7-75.3-72.7-2.2-8.3-2.5-11.5-2.5-25s.3-16.7 2.5-25c10.3-38.2 40.6-66 80.2-73.6 10.7-2 29.8-1.2 41.6 1.9zM319.1 361c64.5 6.6 121.2 45.6 150.7 104l6.3 12.5-5.8 5.4c-37.5 35.3-85.6 57.7-139.8 65.3-11.6 1.6-49.4 1.6-61 0-54.2-7.6-102.3-30-139.8-65.3l-5.8-5.4 6.3-12.5c26.1-51.6 72.5-87.7 129-100.4 19.5-4.4 39.9-5.6 59.9-3.6z" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}

//to change the border color of input
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#ffff",
      contrastText: "#fff",
    },
  },
});
export default Header;
