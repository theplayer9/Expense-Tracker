import './Card.css';
import React from 'react';
function Card(props) {
  const classes = 'card ' + props.className; // custome elements only supports those classes which you tell them to support.Therefore you have to tell/add classes explecitely which where given as attributes(here in Card element's attributes).
  
  return <div className={classes}>{props.children}</div>; // children is a reserved name and its value is the content in between the starting and closeing of the custome elements(here it's the Card element)
}

export default Card;


// we can't use custome elements as wrappers aroung other custome element  outside  the box.