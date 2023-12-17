import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../Assets/home-icon.svg";
import planIcon from "../Assets/myplans-icon.png"
import AddplanIcon from "../Assets/plus-icon.svg"
import SpendingIcon from "../Assets/growth.png"
import IncomeIcon from "../Assets/income-icon.svg"

const SideNavbar = () => {
  return (
    <div className="side-nav-main-wrapper">
      <div className="side-main-cover">
        <ul>
          <li>
            <div className="icon-box d-flex justify-content-center align-items-center">
              <img src={HomeIcon}></img>
            </div>
            <Link to="/">Home</Link>
          </li>
          <li>
            <div className="icon-box d-flex justify-content-center align-items-center">
              <img src={IncomeIcon}></img>
            </div>
            <Link to="/income-list">Incomes</Link>
          </li>
          <li>
            <div className="icon-box d-flex justify-content-center align-items-center">
              <img src={SpendingIcon}></img>
            </div>
            <Link to="/spending-list">Spendings</Link>
          </li>
          <li>
            <div className="icon-box d-flex justify-content-center align-items-center">
              <img src={planIcon}></img>
            </div>
            <Link to="/myplan-list">My Plans</Link>
          </li>
          <li>
            <div className="icon-box d-flex justify-content-center align-items-center">
              <img src={AddplanIcon}></img>
            </div>
            <Link to="/newplan-form">Add New Plan</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
