import React from "react";
import { Link } from "react-router-dom";
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
  // const handleClick = (data) => {
  //   navigate(`/details/${data.city}`);
  //   // const data = menuItems.find((item) => item.id === rpd);
  //   // setCardDetails(data);
  // };

  console.log("carddata", data);

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
            // onClick={() => handleClick(data.city)}
            sx={{
              backgroundColor: "rgb(165, 28, 18)",
              my: 2,
            }}
          >
            <Link
              to={`/details/:detail${data.gym_name}`}
              style={{
                textDecoration: "none",
                listStyle: "none",
                color: "white",
              }}
            >
              Book Now
            </Link>
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
