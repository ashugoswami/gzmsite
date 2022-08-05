import React from "react";
import back from "../../image/background.jpg";

export default function index() {
  return (
    <>
      <div
        className="background-img"
        style={{ objectFit: "contain", overflow: "hidden" }}
      >
        <img
          src={back}
          alt="background"
          style={{ width: "99vw", height: "85vh" }}
        />
      </div>
    </>
  );
}
