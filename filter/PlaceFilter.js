import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { placeStyle } from "./style";

const PlaceFilter = ({ placeFilters, handleChange, placeData }) => {
  return (
    <>
      <h4>Cities</h4>
      <Box sx={placeStyle} className="select-place">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
            Select Cities
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={placeFilters}
            label="Select Cities"
            onChange={handleChange}
            sx={{ color: "white" }}
          >
            {placeData.map((item) => (
              <MenuItem value={item.city}>{item.city}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default PlaceFilter;
