import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpenses/NewExpense";
import DummyExpenses from "./components/DummyExpenses/DummyExpenses";

const dummyExpense = DummyExpenses;

function App() {
  const[expenses, setExpenses] = useState(dummyExpense);

  const newExpenseDataHandler = (expense) =>{
    // console.log(expense);
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense]
    })
  };
  return (
    <div>
      <NewExpense onNewExpenseDataHandler = {newExpenseDataHandler}/>
     <Expenses item ={expenses}/>
    </div>
  );
}

export default App;
