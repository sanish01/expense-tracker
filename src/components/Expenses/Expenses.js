import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [receivedDate, setReceivedDate] = useState("2020");

  const handleExpenseFilter = (date) => {
    console.log(date);
    setReceivedDate(date);
  };

  const filteredItems = props.item.filter((filteredExpense) => {
    return filteredExpense.date.getFullYear().toString() === receivedDate;
  });


  // This is the 3rd way of displaying condiitonal Content
  // let expenseItem = <p>No item to display</p>;

  // if(filteredItems.length > 0){
  //   expenseItem = filteredItems.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))
  // }

  // Instead of third approach, we can use a seperate component to render an expense list. see component ExpenseList.js



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedValue={receivedDate}
          onReceiveFilterDate={handleExpenseFilter}
        />

        {/* This is first way of doing conditional displaying of items. */}
        {/* {filteredItems.length === 0 ? <p>No item to display</p> :  filteredItems.map((expense) => 
          (<ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}


        {/* This is the second way for outputting condiitonal content.  && operator will works as conditional checker.
        if the condition is correct then the content after it will be displayed*/}
        {/* {filteredItems.length === 0 && <p>No item to display</p>}
        {filteredItems.length > 0 &&
          filteredItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}




        {/* {expenseItem} */}
        <ExpenseChart expensesValue ={filteredItems} />
        <ExpenseList item = {filteredItems}/>

        {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
