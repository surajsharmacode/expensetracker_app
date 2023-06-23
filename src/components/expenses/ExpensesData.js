import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpensesData.css";
import ExpensesFilter from "./ExpensesFilter";

function ExpensesData(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    // console.log('ExpensesData.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expenses=> {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        ;
        {/* <h2>Let's get start</h2>
    <ExpenseItem 
    title ={props.items[0].title} 
    amount={props.items[0].amount} 
    date={props.items[0].date}>
    </ExpenseItem>

    <ExpenseItem 
    title ={props.items[1].title} 
    amount={props.items[1].amount} 
    date={props.items[1].date}>
    </ExpenseItem>

    <ExpenseItem 
    title ={props.items[2].title} 
    amount={props.items[2].amount} 
    date={props.items[2].date}>
    </ExpenseItem>

    <ExpenseItem 
    title ={props.items[3].title} 
    amount={props.items[3].amount} 
    date={props.items[3].date}>
    </ExpenseItem>
     */}
      </Card>
    </div>
  );
}
export default ExpensesData;
