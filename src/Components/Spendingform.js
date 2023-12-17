import React, { useState, useContext, useEffect } from "react";
import { MynewContext } from "../ContextApi";
import SideNavbar from "./SideNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpendingForm = () => {
  const {
    SpendingData,
    setSpendingData,
    EditData,
    activeEditbtn,
    setactiveEditbtn,
  } = useContext(MynewContext);
  const [SpendingTitle, setSpendingTitle] = useState("");
  const [SpendingAmount, setspendingAmount] = useState("");
  const [SpendingDate, setspendingDate] = useState("");

  const handleSubmit = (e) => {
    console.log(EditData.id)
    e.preventDefault();
    if (SpendingTitle === "") {
      toast("Please enter Title");
    } else if (SpendingAmount === "") {
      toast("Please enter Amount");
    } else if (SpendingDate === "") {
      toast("Please enter Date");
    } else if (SpendingData && activeEditbtn) {
      let NewEditData = EditData;

      let totalSpendingAmount = SpendingData.reduce((prev, cur) => {
        return prev + +cur.Amount;
      }, 0);

      setSpendingData(
        SpendingData.map((data) => {
          if (data.id === NewEditData.id) {
            return {
              ...data,
              Title: SpendingTitle,
              Amount: SpendingAmount,
              Date: SpendingDate,
              TotalSpendingAmount:
                SpendingData.length > 0
                  ? totalSpendingAmount + +SpendingAmount
                  : SpendingAmount,
            };
          }
          return data;
        })
      );
      function notify() {
        toast("Spending Data Updated Successfully");
      }
      setSpendingTitle("");
      setspendingAmount("");
      setspendingDate("");
      setactiveEditbtn(false);
    } else {
      let uniqueString = Math.random().toString(36);
      let uniqueId = uniqueString.substring(2, uniqueString.length + 2);

      let totalSpendingAmount = SpendingData.reduce((prev, cur) => {
        return prev + +cur.Amount;
      }, 0);

      setSpendingData([
        ...SpendingData,
        {
          id: uniqueId,
          Title: SpendingTitle,
          Amount: SpendingAmount,
          Date: SpendingDate,
          TotalSpendingAmount:
            SpendingData.length > 0
              ? totalSpendingAmount + +SpendingAmount
              : SpendingAmount,
        },
      ]);
      setSpendingTitle("");
      setspendingAmount("");
      setspendingDate("");

      function notify() {
        toast("Data Added Successfully");
      }

      notify();
    }
  };

  useEffect(() => {
    const LocalspendingData = JSON.parse(
      localStorage.getItem("LOCAL_SPENDING_DATA")
    );
    if (LocalspendingData) setSpendingData(LocalspendingData);
  }, []);

  useEffect(() => {
    if (SpendingData?.length) {
      localStorage.setItem("LOCAL_SPENDING_DATA", JSON.stringify(SpendingData));
    }
  }, [SpendingData]);



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
            <h5>Spending Form</h5>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setSpendingTitle(e.target.value)}
              placeholder="Enter Title"
              value={SpendingTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Amount</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setspendingAmount(e.target.value)}
              placeholder="Enter Amount"
              value={SpendingAmount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Date</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setspendingDate(e.target.value)}
              value={SpendingDate}
            />
          </div>

          {activeEditbtn ? (
            <button
              type="submit"
              className="submit-form"
              onClick={(e) => handleSubmit(e)}
            >
              Edit
            </button>
          ) : (
            <button
              type="submit"
              className="submit-form"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default SpendingForm;
