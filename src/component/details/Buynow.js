import { Button } from "@mui/material";
import React from "react";

export default function Buynow() {
  return (
    <>
      <div className="btn">
        <Button
          variant="contained"
          sx={{
            padding: "20px 140px",
            borderRadius: "50px",
            color: "white",
            backgroundColor: "rgb(141, 21, 12)",
            borderColor: "white",
          }}
        >
          Buynow
        </Button>
      </div>
      <div className="btn-free">
        <Button
          variant="outlined"
          sx={{
            padding: "20px 80px",
            borderRadius: "50px",
            color: "white",
            borderColor: "white",
          }}
        >
          Book 1day free session
        </Button>
      </div>
    </>
  );
}
