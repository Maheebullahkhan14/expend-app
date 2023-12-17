import React, { useContext, useEffect, useState } from "react";
import NoDataComponent from "../Pages/NoData";
import Dropdown from "react-bootstrap/Dropdown";
import { MynewContext } from "../ContextApi";
import HomeIcon from "../Assets/home-icon.svg";
import plusIcon from "../Assets/plus-icon.svg";
import Income_banner_img from "../Assets/Income-banner-img.svg";
import { Link } from "react-router-dom";
import cancelIcon from "../Assets/cancel-icon.jpg";
import EditIcon from "../Assets/edit-icon.png";

const Income_list = () => {
  const {
    Incomedata,
    setmyIncomedata,
    EditData,
    setEditData,
    setactiveEditbtn,
  } = useContext(MynewContext);

  let Total_IncomeAmount = Incomedata.reduce((prev, cur) => {
    return prev + +cur.Amount;
  }, 0);

  useEffect(() => {
    const LocalIncomeData = JSON.parse(localStorage.getItem("Incomedata"));
    if (LocalIncomeData) setmyIncomedata(LocalIncomeData);
  }, []);

  function GetData(dataId) {
    let editedData;
    editedData = Incomedata.filter((data) => {
      return data.Id === dataId;
    });
    setEditData(editedData[0]);
    setactiveEditbtn(true);
  }

  const deleteSelectedData = (selectedId) => {
    let DeleteData = Incomedata.filter((data) => {
      return data.Id !== selectedId;
    });
    setmyIncomedata(DeleteData);
    localStorage.setItem("Incomedata", JSON.stringify(DeleteData));
  };

  return (
    <div className="Income_list_cover">
      <div className="container">
        <div className="Income-list-main-cover-box">
          <div className="row">
            <div className="col-6">
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
                        <h5>Incomes</h5>
                      </li>
                      <li>
                        {" "}
                        <div className="drop-down-box-cover">
                          <Dropdown>
                            <Dropdown.Toggle className="bell-icon-box">
                              <img src={plusIcon} alt="bell_icon"></img>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item>
                                <Link to="/income-form">Add new Income</Link>
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="Income-list-countBox">
                    <h4>Total Income</h4>
                    <h2>₹ {Total_IncomeAmount}</h2>
                  </div>
                </div>
                <div className="main-income-list-box">
                  {Incomedata.length > 0 ? (
                    <h5 className="listbox-header">All Incomes</h5>
                  ) : (
                    <h5 className="listbox-header">Oops no Income Data!!</h5>
                  )}
                  {Incomedata.length > 0 ? (
                    Incomedata.map((data) => (
                      <div className="list-box" key={data.Id}>
                        <div className="list-box-details">
                          <h5>{data.Title}</h5>
                          <h6>₹ {data.Amount}</h6>
                        </div>

                        <Link to="/income-form">
                          <button className="editbtn" type="" onClick={() => GetData(data.Id)}>
                            <img src={EditIcon}></img>
                          </button>
                        </Link>
                        <button 
                        className="deletebtn"
                        onClick={() => deleteSelectedData(data.Id)}>
                          <img src={cancelIcon}></img>
                        </button>
                      </div>
                    ))
                  ) : (
                    <NoDataComponent />
                  )}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="income-banner-img-box">
                <img src={Income_banner_img}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Income_list;
