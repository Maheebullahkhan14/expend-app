import React from "react";
import income_icon from "../Assets/growth.png";

const Incomes = ({ total }) => {
  return (
    <div className="income-card-box">
      <div className="income-card-header"></div>
      <div className="income-card-details">
        <div className="income-header">
          <h5>Incomes</h5>
          <h4>
            ₹ <span id="income_count">{total}</span>
          </h4>
        </div>

        <div className="income_balance_btn">
          <img src={income_icon} alt="incom-icon"></img>
        </div>
      </div>
    </div>
  );
};

export default Incomes;
