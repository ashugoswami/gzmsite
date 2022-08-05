import { Box, Stack } from "@mui/material";
import React from "react";
import "./experience.css";
import EmailIcon from "@mui/icons-material/Email";

export default function index() {
  return (
    <>
      <Box className="card-container">
        <Stack direction="row" sx={{ height: "50vh" }}>
          <Box flex={1} className="fitness-head">
            <h1>WTF Fitness Experience?</h1>
            <h3>@ your regular gym cost?</h3>
          </Box>
          <Box flex={3} className="sml-cardhead">
            <div className="glass">
              <EmailIcon />
              <h5>Modern Eqipments</h5>
            </div>
            <div className="glass">
              <EmailIcon />
              <h5>Skilled Trainer</h5>
            </div>
            <div className="glass">
              <EmailIcon />
              <h5>Top Class Ambiance</h5>
            </div>
            <div className="glass">
              <EmailIcon />
              <h5>Sanitized GYMS</h5>
            </div>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
