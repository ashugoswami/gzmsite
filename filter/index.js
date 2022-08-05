import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import PlaceFitlerComponent from "./PlaceFilter";
import LocationFilter from "./LocationFilter";
import { locationStyle } from "./style";
import "./filter.css";

export default function FiltersComponent({ placeData, handleFilter }) {
  const [placeFilters, setPlaceFilters] = useState("");
  const [searchValue, setSearchvalue] = useState("");
  const handleChange = (e) => setPlaceFilters(e.target.value);
  const handleReset = () => {
    setPlaceFilters("");
    setSearchvalue("");
    handleFilter("");
  };
  const getLocationData = () => {
    if (!placeFilters) return;
    const reqData = placeData.find((item) => item.city === placeFilters);
    return reqData;
  };

  const handleSearchData = (e) => {
    const value = e.target.value;
    setSearchvalue(value);
    handleFilter(value);
  };
  return (
    <>
      <Box sx={{ padding: "20px 10px", backgroundColor: "black", flex: 1 }}>
        <Stack direction="row" spacing={2}>
          <Box flex={1} bgcolor="transparent" className="filter-box">
            <div className="flex-space-btw ">
              <h1>Filters</h1>

              <Button
                variant="contained"
                onClick={handleReset}
                sx={{
                  backgroundColor: "rgb(165, 28, 18)",
                  textTransform: "none",
                }}
              >
                Reset
              </Button>
            </div>
            <h4>Location</h4>
            <input
              type="text"
              placeholder="Enter Location"
              style={locationStyle}
              onChange={handleSearchData}
              value={searchValue}
            />
            <h4>Price</h4>
            <div className="price">
              <input type="text" placeholder="Min" className="price-input" />
              <input
                type="text"
                placeholder="Max"
                className="price-input mx-2"
              />
            </div>
            <PlaceFitlerComponent
              placeFilters={placeFilters}
              handleChange={handleChange}
              placeData={placeData}
            />
            {placeFilters && <LocationFilter data={getLocationData()} />}
          </Box>
        </Stack>
      </Box>
    </>
  );
}
