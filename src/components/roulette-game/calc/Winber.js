import React from 'react';
import './Styles.css'

const Winber = props => {
  const number = props.number;
  console.log("from winvber.js: " + number);
  
  return (
    <div className="numbox">
      {number}
    </div>
  )
}
export default Winber;