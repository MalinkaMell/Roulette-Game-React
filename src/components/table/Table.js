import React from 'react';
import './Table.css';
import Chip from '../chips/Chips';
import { Overlay, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';


class RouletteTable extends React.Component {

  state = {
    /* JSONS ROWS */
    firstRow: this.props.firstRow,
    firstBorder: this.props.firstBorder,
    secondRow: this.props.secondRow,
    secondBorder: this.props.secondBorder,
    thirdRow: this.props.thirdRow,
    thirdBorder: this.props.thirdBorder,
    fourthRow: this.props.fourthRow,
    fifthRow: this.props.fifthRow,
    columnLeft: this.props.columnLeft,
    columnRight: this.props.columnRight,
    disabled: false
    /* END JSONS ROWS */
  }

  disableTable = () => {	
    if (this.props.spinning) {	
      this.setState({disabled: true})	
    } else {	
      this.setState({disabled: false})	
    }	
  }

  //SELECTING BETS
  numsSelectionHandler = (num, whichRow) => {

    //checking if my props.arr is empty, if it is, leave empty, if it is not, spread it
    let nums = this.props.arr.length === 0 ? [] : [...this.props.arr];

    //saving in a variable the row from state with that name
    let row = [...this.state[whichRow]];

    //variable for coins
    let coins;

    //checking if my winner number is presented in the array

    /* BETS DESELECT HANDLING STARTS */

    if (nums.indexOf(num) >= 0) { //if number is present in array, deselect and remove it from array

      nums.splice(nums.indexOf(num), 1);

      //giving back coins i bet on this number
      coins = this.props.coins + this.props.chip;

      //tricky part: map each of the rows and check if chip is vivible, if it is, remove it
      let updatedRow = row.map(chip => {
        if (chip.n == num) {
          chip.visible = false;
        }
        return chip;
      });

      this.props.updateRow(whichRow, updatedRow); //passing back to Roulette.js component updated props

      this.setState({ [whichRow]: updatedRow }); //seting the new state with removed chips from the rows

      /* BETS DESELECT HANDLING ENDS */

      /* BETS SELECT HANDLING START */

    } else if (nums.indexOf(num) === -1) { //if number is NOT present in array, select it and put the chip on it

      //decrementing coins 
      coins = this.props.coins - this.props.chip;

      nums.push(num); //adding selected number to the array of bets

      //tricky part inverted: map each of the rows and check if chip is vivible, if it is NOT, add it
      let updatedRow = row.map(chip => {
        if (chip.n == num) {
          chip.visible = true;
        }
        return chip;
      });

      this.setState({ [whichRow]: updatedRow }); //setting the new state with added chips to the rows

    }

    //passing back to Roulette.js the updated array
    this.props.updateArr(nums)

    //passing back to Roulette.js updated coins count
    this.setState({ coins: coins }, () => { this.props.updateCoins(coins) })

  }

  render() {

    //designing the whole table in pure CSS mapping JSON objects with numbers, borders etc.

    return (
      <React.Fragment>
        <div className="d-flex flex-row align-items-start roulette-table">
          <div className="align-self-start">
            <ul className="list-unstyled pt-6">
              {
                this.state.columnLeft.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className + " no-cursor"}
                    value={num.n}
                  >
                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">No bets on {num.n}!</Tooltip>}>
                      <span className="d-inline-block">
                        {num.n}
                      </span>
                    </OverlayTrigger>
                  </li>)
              }
            </ul>
          </div>
          <div className="align-self-start">
            <div className="table-divider"></div>
            {/* First row */}
            <ul className="d-flex list-unstyled">
              { 
                this.state.firstRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "firstRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            {/* Between first and second rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.state.firstBorder.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "firstBorder")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            {/* Second row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.secondRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "secondRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            {/* Between second and thirs rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.state.secondBorder.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "secondBorder")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            {/* Third row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.thirdRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "thirdRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            {/* Between second and thirs rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.state.thirdBorder.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "thirdBorder")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            {/* Fourth row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.fourthRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "fourthRow")}
                  >
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            <div className="table-divider"></div>
            {/* Fifth row */}
            <ul className="d-flex list-unstyled">
              {
                this.state.fifthRow.map((num, index, arr) =>
                  <button
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onMouseEnter={this.disableTable}	
                    disabled={this.state.disabled}
                    onClick={() => this.numsSelectionHandler(num.n, "fifthRow")}>
                    <Chip
                      id={num.n}
                      active={num.visible} />
                  </button>)
              }
            </ul>
            <div className="table-divider"></div>
          </div>
          <div className="align-self-start">
            <div className="table-divider"></div>
            <ul className="list-unstyled">
              {
                this.state.columnRight.map((num, index, arr) =>
                  <li className={num.className}
                    key={num.n + index + arr}>
                    <button
                      className="blues"
                      value={num.n}
                      onMouseEnter={this.disableTable}	
                      disabled={this.state.disabled}
                      onClick={() => this.numsSelectionHandler(num.n, "columnRight")}>
                      <Chip
                        id={num.n}
                        active={num.visible} />
                    </button>
                  </li>
                )
              }
            </ul>
          </div>
        </div >
      </React.Fragment>
    )
  }
}

export default RouletteTable;


