import React from 'react';
import './Winner.css';

const Winner = props => {
  return (
    <div>
      <div className="text-center">
      {props.compare()}
    </div>
    <p className="text-center">
    
  </p> 
    </div>
   
  )
}

export default Winner;