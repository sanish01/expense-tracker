import React from "react";

import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //this is the alternative method of using single state instaed of using multiple split state.
  // const [userInput, setUserInput] = useState({
  //     changedTitle: '',
  //     changedAmount: '',
  //     changedDate: ''
  // })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event)
    // setUserInput({
    //     ...userInput,
    //     changedTitle : event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, changedTitle: event.target.value}
    // })
  };

  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     changedAmount : event.target.value
    // });
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     changedAmount : event.targer.value
    // });
  };

  const submitEventHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitEventHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            title="please enter the title of your expenses"
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.cancelBtn} type="button">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
