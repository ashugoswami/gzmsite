import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import img from "../../image/background.jpg";
const CardComponent = ({ data }) => {
  console.log("data", data);
  return (
    <Card sx={{ my: 2 }}>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          height="200"
          image={data.cover_image || img}
          alt="green iguana"
          sx={{ flex: "1" }}
        />
        <CardContent sx={{ flex: "1", bgcolor: "black", height: "200px" }}>
          <Typography variant="h5" component="div" color="white">
            {data.gym_name}
          </Typography>
          <Typography variant="body2" color="white">
            {`${data.address1 || ""} ${data.address2 || ""} ${data.city || ""}`}
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "rgb(165, 28, 18)", my: 2 }}
          >
            Book Now
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
