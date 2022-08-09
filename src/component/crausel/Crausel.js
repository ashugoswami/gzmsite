import React from "react";
import back from "../../image/background.jpg";
import back1 from "../../image/back1.jpg";
import back2 from "../../image/back2.jpg";

export default function Crausel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={back}
              className="d-block w-100"
              height="500px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={back1}
              className="d-block w-100"
              height="500px"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={back2}
              className="d-block w-100"
              height="500px"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
