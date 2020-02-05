import React from 'react';
import './Chips.css';

const Chip = (props) => {
  let selected = props.selected;
  let num = props.id;

  if (selected && props.selArr.includes(num)) {
    return (
      <div className="chip" id={props.id}>10</div>
    )
  } else if (!selected) {

    return <div>{num}</div>

  } else {

    return <div>{num}</div>
    
  }

}
export default Chip;