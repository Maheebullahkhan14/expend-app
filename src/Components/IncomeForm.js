import React, { useContext, useState, useEffect } from "react";
import { MynewContext } from "../ContextApi";
import { Link } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IncomeForm = () => {
  const {
    Incomedata,
    setmyIncomedata,
    EditData,
    activeEditbtn,
    setactiveEditbtn,
  } = useContext(MynewContext);
  const [IncomeTitle, setMyTitle] = useState("");
  const [IncomeAmount, setmyAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (IncomeTitle === "") {
      toast("Please enter Title");
    } else if (IncomeAmount === 0) {
      toast("please enter Amount");
    } else if (Incomedata && activeEditbtn) {
      let NewEditData = EditData;
      let TotalIncomeAmount = Incomedata.reduce((prev, cur) => {
        return prev + +cur.Amount;
      }, 0);

      setmyIncomedata(
        Incomedata.map((data) => {
          if (data.Id === NewEditData.Id) {
            return {
              ...data,
              Title: IncomeTitle,
              Amount: IncomeAmount,
              TotalAmount:
                data.length > 0
                  ? TotalIncomeAmount + +IncomeAmount
                  : IncomeAmount,
            };
          }
          return data;
        })
      );
      function notify() {
        toast("Income Data Updated Successfully");
      }
      notify();

      setmyAmount("");
      setMyTitle("");
      setactiveEditbtn(false);
    } else {
      let TotalIncomeAmount = Incomedata.reduce((prev, cur) => {
        return prev + +cur.Amount;
      }, 0);

      let uniqueString = Math.random().toString(36);
      let uniqueId = uniqueString.substring(2, uniqueString.length + 2);

      setmyIncomedata([
        ...Incomedata,
        {
          Id: uniqueId,
          Title: IncomeTitle,
          Amount: IncomeAmount,
          TotalAmount:
            Incomedata.length > 0
              ? TotalIncomeAmount + +IncomeAmount
              : IncomeAmount,
        },
      ]);
      setMyTitle("");
      setmyAmount("");

      function notify() {
        toast("Income Data Added Successfully");
      }

      notify();
    }
  };

  //Solved the Error of localStorage is empty whenever the Page is reloaded
  //So i first Restored the data and then Stored the data in localStorage
  //Because the initial state is  empty array so localStorage is empty

  useEffect(() => {
    const LocalIncomeData = JSON.parse(localStorage.getItem("Incomedata"));
    if (LocalIncomeData) setmyIncomedata(LocalIncomeData);
  }, []);

  useEffect(() => {
    if (Incomedata?.length) {
      localStorage.setItem("Incomedata", JSON.stringify(Incomedata));
    }
  }, [Incomedata]);

  return (
    <>
      <SideNavbar />
      <ToastContainer
        position="top-center"
        toastStyle={{ backgroundColor: "#000", color: "white" }}
      />
      <div className="form-cover">
        <form>
          <div className="form-header">
            <h2>Incomeform</h2>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Income Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setMyTitle(e.target.value)}
              placeholder="Enter Title"
              value={IncomeTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Amount</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setmyAmount(e.target.value)}
              value={IncomeAmount}
              placeholder="Enter Amount"
            />
          </div>

          {activeEditbtn ? (
            <button className="edit-income-form-btn" type="button" onClick={(e) => handleSubmit(e)}>
              Edit
            </button>
          ) : (
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="submit_Income_Form"
            >
              Submit
            </button>
          )}
        </form>
      </div>

      <div className="banner-img">
        
      </div>
    </>
  );
};

export default IncomeForm;
