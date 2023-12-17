import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import IncomeForm from './Components/IncomeForm';
import SpendingForm from './Components/Spendingform';
import Newplanform from './Components/Newplanform'; 
import Myplanslist from './Components/Myplanslist';
import Spending_list from './Components/Spending_list';
import Income_list from './Components/Income_list';
import MyContextProvider from './ContextApi';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <MyContextProvider>

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<App/>}/>
        <Route path ="/income-form" element={<IncomeForm/>}/>
        <Route path ="/spending-form" element={<SpendingForm/>}/>
        <Route path ="/newplan-form" element={<Newplanform/>}/>
        <Route path ="/myplan-list" element={<Myplanslist/>}/>
        <Route path ="/spending-list" element={<Spending_list/>}/>
        <Route path ="/income-list" element={<Income_list/>}/>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
  </MyContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
