import React from "react";
import "./discription.css";
import EmailIcon from "@mui/icons-material/Email";

export default function Discription() {
  const cardItem = [
    "Earn WTF reward coins",
    "Fully Vacinated Staff",
    "Track Fitness journey",
    "Pocket Friendly Membership",
  ];
  return (
    <>
      <div className="desciption-content ">
        <div className="discrip gap">
          <h4>Description</h4>
          <div className="text">
            <p>
              WTF: Royal Fitness Club is one of the greatest gyms and fitness
              centers in Gejha. It combines all relaxation, workout, and group
              exercise techniques under one roof, including cardio and pulley
              machines, yoga, and aerobics facilities. They provide classes in
              Olympic deadlift barbells, punching bags, and tyre training.
            </p>
          </div>
        </div>

        <div className="why gap">
          <h4>Why to choose WTF?</h4>
          <div className="card">
            {cardItem.map((item) => (
              <div className="cards">
                <div className="card-text" key={item}>
                  <EmailIcon />
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="how-work gap">
          <h4>How it works?</h4>
          <div className="text">
            <p>
              Pick member starting date and complete your subcription process by
              clicking Buy Now below.
            </p>
            <p>
              A dedicated general trainer will be assigned after you have taken
              your subscription.
            </p>
            <p>Explore WTF and start your fitness journey.</p>
          </div>
        </div>
      </div>
    </>
  );
}
