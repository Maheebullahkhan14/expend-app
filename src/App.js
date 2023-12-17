import { useContext, useState } from "react";
import "./App.css";
import Budget from "./Components/Budget";
import Allplans from "./Components/Allplans";
import HomeApp from "./Components/HomeApp";
import IncomeForm from "./Components/IncomeForm";
import SpendingForm from "./Components/Spendingform";
import Newplanform from "./Components/Newplanform";
import Spending_list from "./Components/Spending_list";

import MyContextProvider from "./ContextApi";
import { MynewContext } from "./ContextApi";

function App() {
  const { Incomedata } = useContext(MynewContext);
  
  return (
    <>
      <HomeApp  Incomedata = {Incomedata} />
    </>
  );
}

export default App;
