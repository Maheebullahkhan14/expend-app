import React, { useContext, useEffect } from "react";
import Incomes from "./Incomes";
import Spending from "./Spending";
import { Link } from "react-router-dom";
import bell_Icon from "../Assets/bell-icon.png";
import Dropdown from "react-bootstrap/Dropdown";
import { MynewContext } from "../ContextApi";

const Budget = () => {
  const {
    TotalIncome,
    Incomedata,
    TotalSpending,
    SpendingData,
    BudgetData,
    setBudgetData,
    setSpendingData,
    setmyIncomedata,
    setTotalIncome,
    setTotalSpending,
  } = useContext(MynewContext);

  let lastdata;
  let totalspendingdata;
  let total_Budget;

  useEffect(() => {
    const mylocaldata = JSON.parse(localStorage.getItem("Incomedata"));
    const mySpendingData = JSON.parse(
      localStorage.getItem("LOCAL_SPENDING_DATA")
    );
    const myBudgetdata = JSON.parse(localStorage.getItem("LOCALPLAN_DATA"));

    if (mylocaldata) setmyIncomedata(mylocaldata);
    if (mySpendingData) setSpendingData(mySpendingData);
    if (myBudgetdata) setBudgetData(myBudgetdata); //
  }, []);

  total_Budget = BudgetData.reduce((prev, curr) => {
    return prev + +curr.Budget;
  }, 0);

  if (Incomedata.length > 0) {
    let lastKey = Object.keys(Incomedata);
    lastdata = Incomedata[Object.keys(lastKey).pop()];
    setTotalIncome(lastdata.TotalAmount);
  }

  if (SpendingData.length > 0) {
    let lastdatakey = Object.keys(SpendingData);
    totalspendingdata = SpendingData[Object.keys(lastdatakey).pop()];
    setTotalSpending(totalspendingdata.TotalSpendingAmount);
  }

  return (
    <>
      <div className="main-budget-cover-wrapper">
        <div className="budget-header">
          <div className="budget-header-details">
            <h4>Hello, Maheeb Khan</h4>
            <p>Here you can view overview of your budget</p>
          </div>
          <div className="drop-down-box-cover">
            <Dropdown>
              <Dropdown.Toggle className="bell-icon-box">
                <img src={bell_Icon} alt="bell_icon"></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/myplan-list">My Plans</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/newplan-form">Add new Plan</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="budget-main-box-cover">
          <div className="budget-card-box">
            <h6>My budget</h6>
            <h3>
              ₹ <span id="my-budget">{total_Budget}</span>
            </h3>

            <div className="budget-btn-box">
              <button className="add-income-btn">
                <Link to="income-form">Add Income</Link>
              </button>
              <button className="add-income-btn">
                <Link to="spending-form"> Add Spending</Link>
              </button>
            </div>
          </div>

          <div className="income-spend-card-wrapper">
            <h6>Budget overview</h6>
            <div className="income-spend-cover">
              <Incomes total={TotalIncome} />
              <Spending totalSpending={TotalSpending} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;
