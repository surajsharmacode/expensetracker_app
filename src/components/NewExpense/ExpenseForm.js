import React ,{useState} from "react";

import './ExpenseForm.css';


const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    // const [userInput,setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
        
    // });
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
      //  console.log('title changed')
    //   setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //   });
    // setUserInput(()=>{

    // })
    };

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    //   setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    //   });
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterdDate: event.target.value,
    // })
    };
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        };

       // console.log(expenseData);
       props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    
    };

    return(
         <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} onChange={dateChangeHandler} min="2022-01-01"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;