import React from "react";

const LocationFilter = ({ data }) => {
  const { addressComponent } = data;
  const getConcatedData = (list) => {
    let reqList = "";
    Object.keys(list).forEach((item) => (reqList = reqList + " " + list[item]));
    return reqList;
  };

  return (
    <div>
      <h6>Locations</h6>
      <div>
        {addressComponent.map((item) => (
          <div>{getConcatedData(item)}</div>
        ))}
      </div>
    </div>
  );
};

export default LocationFilter;
