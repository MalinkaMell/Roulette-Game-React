import React from 'react';
import './Chips.css';

const Chip = (props) => {
  
  let num = props.id;
  let active = props.active;


  if (active && props.selArr.includes(num)) {
    return (
      <div className="chip d-inline-block" id={props.id} >10</div>
    )
  }  else {
    return <div>{num}</div>
  }

}

/* class Chip extends React.Component {
  state = {
    selected: this.props.selected
  }
  render() {
    if (this.state.selected && this.props.selArr.includes(this.props.id)) {
      return (
        <div className="chip" id={this.props.id}>10</div>
      )
    } else if (!this.state.selected) {

      return <div>{this.props.id}</div>

    } else {

      return <div>{this.props.id}</div>
    }
  }
} */
export default Chip;