import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData)=> {
    const expenseData ={
      ...enteredExpenseData, 
      id: Math.random().toString()
    }
    // console.log(expenseData)
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} />
       {/* Here onSaveExpenseData prop is carrying a function from the parent component(NewExpense) to the child component(ExpenseForm). Because of which we can call this function inside of the child component, and pass the generated data back to parent component by passing it as paramaters to the function. */}
    </div>
  );
};
export default NewExpense;
