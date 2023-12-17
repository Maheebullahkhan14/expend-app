import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MynewContext } from "../ContextApi";
import SideNavbar from "./SideNavbar";

const Newplanform = () => {
  const {
    NewplanData,
    setNewplanData,
    EditData,
    setactiveEditbtn,
    activeEditbtn,
  } = useContext(MynewContext);
  const [newplanTitle, setnewplanTitle] = useState("");
  const [newplanAmount, setnewplanAmount] = useState("");
  const [plan_Categorytype, setplanCategory] = useState("");
  const [planDate, setPlanDate] = useState("");
  const [planBudget, setplanBudget] = useState("");

 


  const handleSubmit = (e) => {
    e.preventDefault();
    if (newplanTitle === "") {
      toast("Plz Enter Title");
    } else if (newplanAmount === "") {
      toast("Please Enter amount");
    } else if (plan_Categorytype === "") {
      toast("Please Select category type");
    } else if (planDate === "") {
      toast("Please Enter date");
    } else if (NewplanData && activeEditbtn) {
      let NewEditData = EditData
      let totalSpendingAmount = NewplanData.reduce((prev, cur) => {
        return prev + +cur.Budget;
      }, 0);
      
      setNewplanData(
        NewplanData.map((item) => {
          if (item.Id === NewEditData.Id) {
            return {
              ...item,
              Title: newplanTitle,
              Amount: newplanAmount,
              Budget: planBudget,
              Category: plan_Categorytype,
              Date: planDate,
              TotalBudgetAmount:
                NewplanData.length > 0
                  ? totalSpendingAmount + +planBudget
                  : planBudget,
            };
          }
          return item;
        }),
      );

      function notify() {
        toast("Plan Data Edited Successfully");
      }

      notify();

      setnewplanTitle("");
      setnewplanAmount("");
      setplanBudget(""); //
      setplanCategory([]);
      setPlanDate("");
      setactiveEditbtn(false);
    } 
    else {
      let uniqueString = Math.random().toString(36);
      let uniqueId = uniqueString.substring(2, uniqueString.length + 2);

      let totalSpendingAmount = NewplanData.reduce((prev, cur) => {
        return prev + +cur.Budget;
      }, 0);

      setNewplanData([
        ...NewplanData,
        {
          Id: uniqueId,
          Title: newplanTitle,
          Amount: newplanAmount,
          Budget: planBudget,
          Category: plan_Categorytype,
          Date: planDate,
          TotalBudgetAmount:
            NewplanData.length > 0
              ? totalSpendingAmount + +planBudget
              : planBudget,
        },
      ]);
      setnewplanTitle("");
      setnewplanAmount("");
      setplanBudget(""); //
      setplanCategory([]);
      setPlanDate("");

      function notify() {
        toast("New Plan Added Successfully");
      }

      notify();
    }
  };

  useEffect(() => {
    const LocalplanData = JSON.parse(localStorage.getItem("LOCALPLAN_DATA"));
    if (LocalplanData) setNewplanData(LocalplanData);
  }, []);

  useEffect(() => {
    if (NewplanData?.length) {
      localStorage.setItem("LOCALPLAN_DATA", JSON.stringify(NewplanData));
    }
  }, [NewplanData]);

  return (
    <>
      <SideNavbar />
      <div className="new-plan-form-cover">
        <ToastContainer
          position="top-center"
          toastStyle={{ backgroundColor: "#000", color: "white" }}
        />
        <div className="new-plan-form">
          <form>
            <div className="new-plan-form-title-header">
              <div className="new-plan-header-input-box">
                <label for="new-plan-amount">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setnewplanTitle(e.target.value)}
                  placeholder="Enter Title"
                  value={newplanTitle}
                />
              </div>
              <div className="new-plan-header-input-box">
                <label for="new-plan-amount">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setnewplanAmount(e.target.value)}
                  placeholder="Enter Amount"
                  value={newplanAmount}
                />
              </div>
            </div>

            <div className="plan-form-details-cover">
              <h5>Plan Details</h5>
              <div className="new-plan-input-box">
                <label for>Category</label>
                <select
                  name="category"
                  id="cars"
                  value={plan_Categorytype}
                  onChange={(e) => setplanCategory(e.target.value)}
                >
                  <option value="shopping">Shopping</option>
                  <option value="vacation">vacation</option>
                  <option value="Food">Food</option>
                  <option value="Family">Family</option>
                </select>
              </div>
              <div className="new-plan-input-box">
                <label for>Budget</label>
                <input
                  type="number"
                  placeholder="Enter budget"
                  value={planBudget}
                  onChange={(e) => setplanBudget(e.target.value)}
                ></input>
              </div>
              <div className="new-plan-input-box">
                <label for>Budget deadline</label>
                <input
                  type="date"
                  onChange={(e) => setPlanDate(e.target.value)}
                  value={planDate}
                ></input>
              </div>
              <div className="submit-new-plan-btn-box">
                {activeEditbtn ? (
                  <button
                    type="submit"
                    className="new-plan-btn"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Edit Plan
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="new-plan-btn"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Save Plan
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newplanform;
