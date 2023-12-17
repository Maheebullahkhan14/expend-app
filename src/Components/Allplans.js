import React from "react";
import DummyplanCard from "./DummyplanCard";
import { Link } from "react-router-dom";

const Allplans = () => {
  return (
    <div className="my-plans-cover">
      <div className="my-plans-cover-header">
        <h6>My plans</h6>
        <h6>
          <button>
            <Link to="/myplan-list">view all</Link>
          </button>
        </h6>
      </div>
      <div className="my-plans-list-cards">
        <DummyplanCard />
      </div>
    </div>
  );
};

export default Allplans;
