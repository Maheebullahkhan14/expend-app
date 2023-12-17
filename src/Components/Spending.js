import React ,{useContext} from "react";
import income_icon from "../Assets/growth.png";



const Spending = ({totalSpending}) => {
  return (
    <div className="spending-card-box">
      <div className="spending-card-header"></div>
      <div className="spending-card-details">
        <div className="spending-count-details">
          <h5>Spendings</h5>
          <h4>₹ <span id="spending-count">{totalSpending}</span></h4>
        </div>

        <div className="spending_balance_btn">
          <img src={income_icon} alt="spending-icon"></img>
        </div>
      </div>
    </div>
  );
};

export default Spending;
