import React,{useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
    // const expenseDate = new Date(2021,2,28);
    // const expenseTitle = " Car Insurance";
    // const expneseAmount = 280.34
    
    const [title,setTitle] =useState(props.title)
    // title ---> pointer at the managed value or current state value(props.title)
    // setTitle ----> function which is called to set a new value

    const clickHandler =()=>{
      setTitle("Updated title!!!") // calling this function will not just assign the value to some variable(managed by react somewhere in memory, its a special variable to begin with) but it will also execute the component function in which the  the function is intialised(by using useState) and called(here setTitle function)
      console.log(" Button is clicked!!!")
    }

    

  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>  
      {/* We will not use () with clickHandler function because, if we do so JS will execute the function when  this line of code is parsed. And that would be too early. Therefore we will just point to the fucntion */}
    </Card>
  );
};

export default ExpenseItem;


// All the custome elements or JSX code we write here is actuall no visible if you inspect the page. Because in the end all these elements are transformed into the HTML code which is rendered by the broweses. It's just for the sake for ease that JSX is used to wirte code.