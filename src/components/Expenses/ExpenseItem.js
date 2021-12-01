import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title);
  // const [amount, setAmount] = useState(props.amount);

  // const clickHandeler = () => {
  //   setTitle('updates..');
  //   // setAmount(500);

  //   console.log("Clickeed....");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-cost">${props.amount}</div>
      </div>
      {/* <button onClick = {clickHandeler}>Click ME</button> */}
    </Card>
  );
}

export default ExpenseItem;
