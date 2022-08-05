import React from "react";
import "./footer.css";
import { Box, Stack } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function index() {
  return (
    <>
      <Box sx={{ padding: "80px 80px", backgroundColor: "black" }}>
        <Stack direction="row" spacing={2} sx={{ color: "white" }}>
          <Box flex={2}>
            <div className="footer-gzm">
              <div className="footer-gymlogo ">
                <h2>Gym</h2>
              </div>
              <div className="social-logo my-4">
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
              </div>
            </div>
          </Box>
          <Box flex={1.5}>
            <div className="footer-head">
              <div className="footer-heading mb-4">
                <h4>Quick Links</h4>
              </div>
              <h5>About</h5>
              <h5>FAQs</h5>
              <h5>Privacy Policy</h5>
              <h5>Terms & Condition</h5>
              <h5>Refund & Cancellation</h5>
            </div>
          </Box>
          <Box flex={1.5}>
            <div className="footer-head">
              <div className="footer-heading mb-4">
                <h4>Explore</h4>
              </div>
              <h5>Arenas</h5>
              <h5>Studios</h5>
              <h5>Nutrition</h5>
            </div>
          </Box>
          <Box flex={1.5}>
            <div className="footer-head">
              <div className="footer-heading mb-4">
                <h4>Contact</h4>
              </div>
              <Stack direction="row">
                <Box
                  flex={1}
                  display="flex"
                  sx={{ flexDirection: "column", gap: "83px" }}
                >
                  <PlaceIcon />
                  <PlaceIcon />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <PhoneIcon />
                    <EmailIcon />
                  </div>
                </Box>
                <Box flex={4}>
                  <h5>
                    Ro:S1502,Amarpali Silicon City, Sector 76,Noida,Uttar
                    Pradesh,India
                  </h5>

                  <h5>
                    Ro:S1502,Amarpali Silicon City, Sector 76,Noida,Uttar
                    Pradesh,India
                  </h5>

                  <h5>+919090639005</h5>

                  <h5>Support@wtfup.me</h5>
                </Box>
              </Stack>
            </div>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
