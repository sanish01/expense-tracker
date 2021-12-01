import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addNewExpense, setaddNewExpense] = useState(false);

  const saveExpenseHandler = (savedExpenseData) => {
    const expenseData = {
      ...savedExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseDataHandler(expenseData);
    setaddNewExpense(false);
  };

  const addingExpense = () => {
    setaddNewExpense(true);
  };

  const cancelBtnHandler = () => {
    setaddNewExpense(false);
  };

  //   var data = "";
  var data = (<button onClick={addingExpense}>Add new Expenses</button>);

  if (addNewExpense) {
    data = (
      <ExpenseForm
        onSaveExpense={saveExpenseHandler}
        cancelBtn={cancelBtnHandler}
      />
    );
  }
  //   else {data = (<button onClick={addingExpense}>Add new Expenses</button>)}
  return (
    // <div className="new-expense">
    //   {/* {!addNewExpense && (
    //     <button onClick={addingExpense}>Add new Expenses</button>
    //   )}
    //   {addNewExpense && <ExpenseForm onSaveExpense={saveExpenseHandler} cancelBtn={cancelBtnHandler}/>} */}
    // </div>
    // <div className="new-expense">
    // {addNewExpense ? (<ExpenseForm onSaveExpense={saveExpenseHandler} cancelBtn={cancelBtnHandler}/>) : (<button onClick={addingExpense}>Add new Expenses</button>)}
    // </div>
    <div className="new-expense">{data}</div>
  );
};

export default NewExpense;
