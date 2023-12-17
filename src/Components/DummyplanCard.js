import React from "react";

const DummyplanCard = () => {
  return (
    <div className="plans-card-cover">
      <div className="plans-card-header">
        <h6>#Vacation</h6>
        <h5>Trip to Malaysia</h5>
      </div>
      <div className="plans-count-details">
        <span className="plans-count">₹ 400</span>
        <span className="plans-total-count">₹ 5000</span>
      </div>
      <div className="progress-bar-cover">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width : 35 + "%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DummyplanCard;
