import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Crausel from "../crausel/Crausel";
import Discription from "./Discription";
import Plans from "./Plans";
import Buynow from "./Buynow";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./details.css";

const baseUrl = "https://devapi.wtfup.me/";

export default function Details() {
  const { detail } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [gymname, setGymname] = useState({});

  console.log("detail", detail);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${baseUrl}gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
        );
        const response = await res.json();
        console.log("response", response);
        if (response.status) {
          setFilteredData(response.data);
        }
        // setGymname(filteredData);
      } catch (error) {
        console.log("Oops! something went wrong. please try later.");
      }
    };
    fetchData();
  }, []);

  console.log("filter", filteredData);

  useEffect(() => {
    const reqData = filteredData.find(
      (item) => item.gym_name === parseInt(detail)
    );
    setGymname(reqData);
  }, [detail]);

  // debugger;

  // console.log("gymname", gymname);

  return (
    <>
      <div className="details-page">
        <Crausel />
        <div className="gym-name">
          <div className="head-name">
            <h1>WTF: Royal fitness club</h1>
            <div className="location">
              <LocationOnIcon />
              <h4>near VDS Market,Gejha</h4>
            </div>
          </div>
          <div className="rating">
            <div className="star">
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
            <div className="rating">
              <h5>25 Ratings</h5>
            </div>
          </div>
        </div>
        <div className="details-gym">
          <div className="discription">
            <Discription />
          </div>
          <div className="plans">
            <Plans />
          </div>
        </div>
        <div className="buynow-btn">
          <Buynow />
        </div>
        {/* {filteredData.map((item) => (
          <h6>
            name
            {item.gym_name}
          </h6>
        ))} */}
      </div>
    </>
  );
}
