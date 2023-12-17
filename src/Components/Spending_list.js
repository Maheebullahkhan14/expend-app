import React, { useContext, useEffect } from "react";

import { MynewContext } from "../ContextApi";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import HomeIcon from "../Assets/home-icon.svg";
import plusIcon from "../Assets/plus-icon.svg";
import NoDataComponent from "../Pages/NoData";
import Spending_banner_img from "../Assets/spending-banner-img.svg";
import cancelIcon from "../Assets/cancel-icon.jpg";
import EditIcon from "../Assets/edit-icon.png";

const Spending_list = () => {
  const { SpendingData, setSpendingData, setEditData, setactiveEditbtn } =
    useContext(MynewContext);

  let Total_SpendigAmount = SpendingData.reduce((prev, cur) => {
    return prev + +cur.Amount;
  }, 0);

  useEffect(() => {
    const LocalspendingData = JSON.parse(
      localStorage.getItem("LOCAL_SPENDING_DATA")
    );
    if (LocalspendingData) setSpendingData(LocalspendingData);
  }, []);

  const GetId = (dataId) => {
    let editedData = SpendingData.filter((item) => {
      return item.id === dataId;
    });
    setEditData(editedData[0]);
    setactiveEditbtn(true);
  };

  const deleteSelectedData = (selectedId) => {
    let DeleteData = SpendingData.filter((data) => {
      return data.id !== selectedId;
    });
    setSpendingData(DeleteData);
    localStorage.setItem("LOCAL_SPENDING_DATA", JSON.stringify(DeleteData));
  };

  return (
    <div className="Income_list_main-cover-wrapper">
      <div className="container">
        <div className="Income-list-cover-box">
          <div className="row">
            <div className="col-lg-6 col-12 order-lg-0 order-1">
              <div className="Income-list-box-cover">
                <div className="Income-list-header">
                  <div className="income-list-nav">
                    <ul>
                      <li>
                        <Link to="/">
                          <img src={HomeIcon}></img>
                        </Link>
                      </li>
                      <li>
                        <h5>Spending</h5>
                      </li>
                      <li>
                        <div className="drop-down-box-cover">
                          <Dropdown>
                            <Dropdown.Toggle className="bell-icon-box">
                              <img src={plusIcon} alt="bell_icon"></img>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <Link to="/spending-form">
                                  Add new Spending
                                </Link>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Income-list-countBox">
                    <h4>Total Spending</h4>
                    <h2>₹ {Total_SpendigAmount}</h2>
                  </div>
                </div>
                <div className="main-income-list-box">
                  {SpendingData.length ? (
                    <h5 className="listbox-header">All Spending</h5>
                  ) : (
                    <h5 className="listbox-header">Oops No Spending data !!</h5>
                  )}
                  {SpendingData.length > 0 ? (
                    SpendingData.map((data) => (
                      <div className="list-box" key={data.id}>
                        <div className="list-box-details">
                          <h5>{data.Title}</h5>
                          <h6>₹ {data.Amount}</h6>
                        </div>
                        <div className="edit-icon-box">
                          <Link to="/spending-form">
                            <button
                              className="editbtn"
                              onClick={() => GetId(data.id)}
                            >
                              <img src={EditIcon}></img>
                            </button>
                          </Link>

                          <button
                            className="deletebtn"
                            onClick={() => deleteSelectedData(data.id)}
                          >
                            <img src={cancelIcon}></img>
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <NoDataComponent />
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-10 order-lg-1 order-0">
              <div className="Income-banner-img">
                <img src={Spending_banner_img}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spending_list;
