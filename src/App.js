import logo from "./logo.svg";
import "./App.css";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Mechanical Keyboard",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 199.19, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "PS 5",
      amount: 94.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "LED screen",
      amount: 45.99,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler =(expense)=>{
    console.log("In App.js")
    console.log(expense);

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p> Theplayer9</p>
        <NewExpense  onAddExpense={addExpenseHandler}/>
        
        <Expenses item={expenses}></Expenses>
      </header>
    </div>
  );

  //------------Alternative way-------------(the above JSX code is transformed to methods called on React object)
  // return( React.createElement('div', {}, React.createElement('h2',{},"let's get started"), React.createElement(Expenses, {items: expenses}, )
  // )
  // )
   // for custome elements we just point to the element , don't use ''.


   
  // here first attribute it the element needed to create
  // secong element if the attribute of the elements that is created
  //third element will be the content in the element that is created
  // we can have as many elements 


}

export default App;
