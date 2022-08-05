import { Button } from "@mui/material";
import React from "react";
import { searchInputStyle } from "../filter/style";
import SearchIcon from "@mui/icons-material/Search";
import PlaceIcon from "@mui/icons-material/Place";

const SearchBarComponent = () => {
  return (
    <div
      className="search-bar"
      style={{ marginLeft: "35px", paddingRight: "20px" }}
    >
      <SearchIcon
        sx={{
          position: "relative",
          left: "35px",
          Color: "white",
        }}
      />
      <input
        type="text"
        placeholder="Search gym name here..."
        style={searchInputStyle}
      />
      <PlaceIcon
        sx={{
          position: "relative",
          right: "123px",
          backgroundColor: "rgb(165, 28, 18)",
        }}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "rgb(165, 28, 18)",
          position: "relative",
          right: "110px",
        }}
      >
        Clear
      </Button>
    </div>
  );
};

export default SearchBarComponent;
