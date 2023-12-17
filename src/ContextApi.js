import React,{useContext , createContext ,useState} from "react";
import App from "./App";
import IncomeForm from "./Components/IncomeForm";
import SpendingForm from "./Components/Spendingform";
import Newplanform from "./Components/Newplanform";
import Spending_list from "./Components/Spending_list";

export const MynewContext = React.createContext('default')


const MyContextProvider = ({children}) => {

  const [Incomedata , setmyIncomedata] = useState([])
  const [SpendingData , setSpendingData] = useState([])
  const [NewplanData , setNewplanData] = useState([])
  const [BudgetData , setBudgetData] = useState([])
  const [TotalSpending , setTotalSpending] = useState(0)
  const [TotalIncome , setTotalIncome] = useState(0)
  const [EditData ,setEditData] = useState([])
  const [activeEditbtn, setactiveEditbtn] = useState(false)
  
  
  return (
    <MynewContext.Provider 
    value={{ 
      Incomedata ,
      SpendingData ,
      NewplanData ,
      BudgetData ,
      TotalSpending ,
      TotalIncome ,
      EditData,
      activeEditbtn,
      setactiveEditbtn,
      setmyIncomedata,
      setSpendingData,
      setNewplanData,
      setBudgetData,
      setTotalSpending ,
      setTotalIncome ,
      setEditData
    
    }}>
      {children}
    </MynewContext.Provider>
  );
};

export default MyContextProvider;
