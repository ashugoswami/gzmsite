import React, { useState } from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import "./navbar.css";

export default function Navbar() {
  const [fix, setFix] = useState(false);

  const Setfixed = () => {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  window.addEventListener("scroll", Setfixed);

  const navItems = [
    "Fitness",
    "Nutrition",
    "Gyms",
    "Become WFT Partner",
    "About Us",
  ];
  return (
    <>
      <div>
        <Box sx={{ display: "flex" }}>
          <AppBar
            position="fixed"
            component="nav"
            style={
              fix
                ? { backgroundColor: "black" }
                : { backgroundColor: "transparent" }
            }
          >
            <Toolbar className="navbar-container" sx={{}}>
              <Box className="nav-heading" sx={{}}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "block", sm: "block" },
                    fontSize: "25px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Gym
                </Typography>
                <Box
                  sx={{
                    width: "690px",
                    display: "flex",
                    justifyContent: "space-around",
                    gap: "18px",
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item}
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "rgb(165, 28, 18)",
                      marginLeft: "4px",
                    }}
                  >
                    login
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}
