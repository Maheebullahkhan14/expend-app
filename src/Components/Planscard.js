import React, { useContext } from "react";


const Planscard = ({myplansdata ,myid}) => {
  const {Title , Amount , Category , Date , Budget} = myplansdata;
  
  let Percentage;
  Percentage = (Amount / Budget) * 100;
  
  return (
    <div className="plans-card-cover" key={myid}>
      <div className="plans-card-header">
        <h6>#{Category}</h6>
        <h5>{Title}</h5>
      </div>
      <div className="plans-count-details">
        <span className="plans-count">₹ {Amount}</span>
        <span className="plans-total-count">₹ {Budget}</span>
      </div>
      <div className="progress-bar-cover">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: Percentage + "%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Planscard;
