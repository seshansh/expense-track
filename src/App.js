// import ExpenseDetails from "./Components/ExpenseDetails";
import React, { useState } from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Expenses from "./Components/Expenses";
// import AddExpense from "./Components/AddExpense";

const App = () => {  

  const [currentExpenses, setCurrentExpenses] = useState([]);

  const newExpense=(newItem)=>{
    setCurrentExpenses((prevItem)=>{
      return [newItem, ...prevItem];
    });
  }
 
  return (
    <Card>
      <Header addedItem={newExpense}/>
      <Expenses expenseList={currentExpenses}/>
    </Card>
  );
}

export default App;
