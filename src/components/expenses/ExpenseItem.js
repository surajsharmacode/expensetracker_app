import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem=(props)=> {
  let title=props.title;
  // const [title,setTitle]=useState(props.title); //use state hooks always return an array with two element
   //                                             // the first elelemt is the curretn state value and second eleemt is function for updated

  //let title=props.title;


  // const clickHandler=()=>{
//  title='Updated!!';
// setTitle(props.title);
 // console.log(title);
  

//   }; 
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
