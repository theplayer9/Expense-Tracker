import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //--------------individual(multiple) state approach--------------
  const[enteredTitle,setEnteredTitle] = useState('');    //Declaration

  const [enteredAmount, setEnteredAmount] = useState('');  //Declaration 
  // we will initialise by string '' because by default when we listen to an event change and try to read it (event.target.value) because it will give string as default value i.e it will give number as string only.

  const [enteredDate, setEnteredDate] = useState('');   //Declaration

  //----------------Single state approach--------------

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
    // In single state we have to update all the state otherwise the rest states will be lost.
  const titleChangeHandler = (event) => {
    //event is an object(it describes the event occured) which is created automatically when we listen to an event change/add.
    setEnteredTitle(event.target.value);

    // -------alternatives--------


    // setUserInput({
    //   ...userInput, enteredTitle: event.target.value
    // })

    //OR ---- Because react schedules the state updates and not perform instantly. therefore when we schedule lot of states at the same time , we may depend on some old state.  This method of passing a function inside a function will gurantee that the state snapshot it give you in the inner func (prevState) will be the latest state snapshot.

    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState, enteredTitle: event.target.value
    //   }
    // })

    
  }; // Function call

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //  setUserInput({
    //    ...userInput, enteredAmount: event.target.value
    //  })
  }; // Function call

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput, enteredDate: event.target.value
    // })
  }; // Function call
  const submitHandler= (event) => {
    event.preventDefault(); 
    const expenseData= {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }   // this object will be generated once the form is submitted. This object can be passed on to NewExpense for further process.

    props.onSaveExpenseData(expenseData)  // we are using the function defined in the parent component
    
    console.log("theplayer")
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')


  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            placeholder="Enter the item "
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            placeholder="Enter the amount"
            value={enteredAmount}

            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
