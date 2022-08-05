import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import Main from "./component/main";
import Filter from "./component/filter";
import Footer from "./component/footer";
import Experience from "./component/experience";
import CardContainer from "./component/cards";
import "./App.css";
import SearchBarComponent from "./component/SearchBar";
const baseUrl = "https://devapi.wtfup.me/";

function App() {
  const [placeData, setPlaceData] = useState([]);
  const [gymData, setGymData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (val) => {
    if (!val) {
      setFilteredData(gymData);
    }
    const reqData = gymData.filter((item) =>
      item.gym_name?.toLowerCase()?.includes(val.toLowerCase())
    );
    setFilteredData(reqData);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}gym/places`);
        const response = await res.json();
        console.log("response", response);
        if (response.status) {
          setPlaceData(response.data);
        }
      } catch (error) {
        console.log("Oops! something went wrong. please try later.");
      }
    };
    fetchData();
  }, []);
  console.log("palceDate", placeData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${baseUrl}gym/nearestgym?lat=30.325488815850512&long=78.0042384802231`
        );
        const response = await res.json();
        console.log("response", response);
        if (response.status) {
          setGymData(response.data);
          setFilteredData(response.data);
        }
      } catch (error) {
        console.log("Oops! something went wrong. please try later.");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Main />
        <div className="main">
          <SearchBarComponent />
          <div className="flex-space-btw">
            <Filter placeData={placeData} handleFilter={handleFilter} />
            <CardContainer filteredData={filteredData} />
          </div>
        </div>
        <Experience />
        <Footer />
      </div>
    </>
  );
}

export default App;
