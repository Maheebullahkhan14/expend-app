import React, { useContext } from "react";
import Budget from "./Budget";
import Allplans from "./Allplans";
import BannerImg from "../Assets/Budget-main-banner.jpg";

const HomeApp = () => {
  return (
    <div className="App">
      <div className="main-app-cover-wrapper">
        <div className="container">
          <div className="main-app-box">
            <div className="row">
              <div className="col-lg-6 col-10">
                <div className="main-budget-banner-img">
                  <img src={BannerImg}></img>
                </div>
              </div>
              <div className="col-lg-2 col-0"></div>
              <div className="col-lg-4 col-12">
                <div className="main-app-box-content">
                  <Budget />
                  <Allplans />
                </div>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
