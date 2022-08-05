import React from "react";
import CardComponent from "./CardComponent";

export default function CardsContainer({ filteredData }) {
  console.log("filteredData from container", filteredData);
  return (
    <div style={{ backgrondColor: "red", flex: 2, color: "white" }}>
      {filteredData.map((item) => (
        <CardComponent data={item} />
      ))}
    </div>
  );
}
