import React from 'react';
import './Winner.css';

const Winner = props => {
  return (
    <h1 className="verdict text-center">
      {props.compare()}
    </h1>
  )
}

export default Winner;