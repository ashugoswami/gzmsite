import React from "react";
import "./plans.css";

export default function Plans() {
  const plansitem = [
    {
      id: 1,
      name: "Slim your Waist",
      price: "6999",
    },
    {
      id: 2,
      name: "Giant X",
      price: "7999",
    },
    {
      id: 3,
      name: "Beach body",
      price: "9999",
    },
    {
      id: 4,
      name: "Fat to fit",
      price: "12999",
    },
    {
      id: 5,
      name: "RFC (1year)",
      price: "6999",
    },
  ];
  return (
    <>
      <div className="plan-container">
        <div className="plan-heading">
          <h2>Choose Membership</h2>
        </div>
        <div className="plan-cards">
          {plansitem.map((item) => (
            <div className="plans-title" key={item.id}>
              <div className="plan-text">
                <h5>Plan{item.id}</h5>
                <h4>WTF {item.name}</h4>
              </div>
              <div className="price">Rs{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
