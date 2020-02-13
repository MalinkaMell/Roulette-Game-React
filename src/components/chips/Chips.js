import React from 'react';
import './Chips.css';

class Chip extends React.Component {

  render() {
    if (this.props.active) {
      return (
        <div className="chip d-inline-block" id={this.props.id} >10</div>
      )
    } else {
      return <div>{this.props.id}</div>
    }
    
  }
}

export default Chip;