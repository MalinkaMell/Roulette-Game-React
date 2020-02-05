import React from 'react';
import './Table.css';
import { ListGroup } from 'react-bootstrap';
import Calc from '../calc/Calc';
import Chip from '../chips/Chips';


class RouletteTable extends React.Component {

  state = {
    nums: [],
    selected: false,
    numChildren: 0,
    currentNumber: 0
  }

  style = { "background": "red" }

  numsSelectionHandler = (num) => {

    let nums = [...this.state.nums];

    if (nums.includes(num)) {


      nums.splice(nums.indexOf(num), 1);

      this.setState({
        numChildren: 0
      });

    } else {

      this.setState({ selected: true });
      nums.push(num);
      this.setState({
        numChildren: this.state.numChildren + 1
      });

    }

    this.setState({ nums: nums }, () => {
      this.props.updateArr(nums)
    })

    console.log(nums);

  }

  zeroCol = [
    { n: "00", c: "green", className: "blues cella chip-container-cella" },
    { n: "00-0", c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: "0", c: "green", className: "blues cella chip-container-cella" }]

  firstRow = [
    { n: "3", c: "red", className: "red cella chip-container-cella" },
    { n: "3-6", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "6", c: "black", className: "black cella chip-container-cella" },
    { n: "6-9", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "9", c: "red", className: "red cella chip-container-cella" },
    { n: "9-12", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "12", c: "red", className: "red cella chip-container-cella" },
    { n: "12-15", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "15", c: "black", className: "black cella chip-container-cella" },
    { n: "15-18", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "18", c: "red", className: "red cella chip-container-cella" },
    { n: "18-21", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "21", c: "red", className: "red cella chip-container-cella" },
    { n: "21-24", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "24", c: "black", className: "black cella chip-container-cella" },
    { n: "24-27", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "27", c: "red", className: "red cella chip-container-cella" },
    { n: "27-30", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "30", c: "red", className: "red cella chip-container-cella" },
    { n: "30-33", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "33", c: "black", className: "black cella chip-container-cella" },
    { n: "33-36", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "36", c: "red", className: "red cella chip-container-cella" }]

  secondRow = [
    { n: "2", c: "black", className: "black cella chip-container-cella" },
    { n: "2-5", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "5", c: "red", className: "red cella chip-container-cella" },
    { n: "5-8", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "8", c: "black", className: "black cella chip-container-cella" },
    { n: "8-11", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "11", c: "black", className: "black cella chip-container-cella" },
    { n: "11-14", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "14", c: "red", className: "red cella chip-container-cella" },
    { n: "14-17", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "17", c: "black", className: "black cella chip-container-cella" },
    { n: "17-20", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "20", c: "black", className: "black cella chip-container-cella" },
    { n: "20-23", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "23", c: "red", className: "red cella chip-container-cella" },
    { n: "23-26", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "26", c: "black", className: "black cella chip-container-cella" },
    { n: "26-29", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "29", c: "black", className: "black cella chip-container-cella" },
    { n: "29-32", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "32", c: "red", className: "red cella chip-container-cella" },
    { n: "32-35", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "35", c: "black", className: "black cella chip-container-cella" }]

  thirdRow = [
    { n: "1", c: "red", className: "red cella chip-container-cella" },
    { n: "1-4", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "4", c: "black", className: "black cella chip-container-cella" },
    { n: "4-7", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "7", c: "red", className: "red cella chip-container-cella" },
    { n: "7-10", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "10", c: "black", className: "black cella chip-container-cella" },
    { n: "10-13", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "13", c: "black", className: "black cella chip-container-cella" },
    { n: "13-16", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "16", c: "red", className: "red cella chip-container-cella" },
    { n: "16-19", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "19", c: "red", className: "red cella chip-container-cella" },
    { n: "19-22", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "22", c: "black", className: "black cella chip-container-cella" },
    { n: "22-25", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "25", c: "red", className: "red cella chip-container-cella" },
    { n: "25-28", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "28", c: "black", className: "black cella chip-container-cella" },
    { n: "28-31", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "31", c: "black", className: "black cella chip-container-cella" },
    { n: "31-24", c: "yellow", className: "bordo chip-container-bordo" },
    { n: "34", c: "red", className: "red cella chip-container-cella" }]

  thoByOneCol = [
    { n: "2:1:1", c: "blue", className: "blues cella chip-container-cella" },
    { n: "2:1:2", c: "blue", className: "blues cella chip-container-cella" },
    { n: "2:1:3", c: "blue", className: "blues cella chip-container-cella" }]


  render() {
    console.log("log", this.props.id);

    return (
      <React.Fragment>
        <div className="d-flex flex-row ">
          <div className="align-self-start">
            <ul className="list-unstyled">
              {
                this.zeroCol.map(num =>
                  <li
                    key={num.n}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} selected={this.state.selected} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
          </div>
          <div className="align-self-start">
            {/* First row */}
            <ul className="d-flex list-unstyled">
              {
                this.firstRow.map(num =>
                  <li
                    key={num.n}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} selected={this.state.selected} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Second row */}
            <ul className="d-flex list-unstyled">
              {
                this.secondRow.map(num =>
                  <li
                    key={num.n}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} selected={this.state.selected} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Third row */}
            <ul className="d-flex list-unstyled">
              {
                this.thirdRow.map(num =>
                  <li
                    key={num.n}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} selected={this.state.selected} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Fourth row */}
            <ListGroup horizontal className="justify-content-around">
              <ListGroup.Item className="blues" style={{ width: "30%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("1st 12")}>1st 12</ListGroup.Item>
              <ListGroup.Item className="blues" style={{ width: "35%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("2nd 12")}>2nd 12</ListGroup.Item>
              <ListGroup.Item className="blues" style={{ width: "35%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("3rd 12")}>3rd 12</ListGroup.Item>
            </ListGroup>
            {/* Fifth row */}
            <ListGroup horizontal className="mx-1 justify-content-around">
              <div style={{ width: "30%" }}>
                <ListGroup horizontal className="justify-content-around">
                  <ListGroup.Item className="blues small" style={{ width: "50%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("1 to 18")} >1 to 18</ListGroup.Item>
                  <ListGroup.Item className="blues small" style={{ width: "50%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("Even")}>Even</ListGroup.Item>
                </ListGroup>
              </div>
              <div style={{ width: "35%" }}>
                <ListGroup horizontal className=" justify-content-around">
                  <ListGroup.Item className="reds small" style={{ width: "50%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("Red")}>.</ListGroup.Item>
                  <ListGroup.Item className="blacks small" style={{ width: "50%", cursor: "pointer" }} onClick={() => this.numsSelectionHandler("Black")}>.</ListGroup.Item>
                </ListGroup>
              </div>
              <div style={{ width: "35%" }}>
                <ListGroup horizontal className=" justify-content-around">
                  <ListGroup.Item className="blues small" style={{ width: "48%" }} onClick={() => this.numsSelectionHandler("Odd")}>Odd</ListGroup.Item>
                  <ListGroup.Item className="blues small" style={{ width: "52%" }} onClick={() => this.numsSelectionHandler("19 to 36")}>19 to 36</ListGroup.Item>
                </ListGroup>
              </div>
            </ListGroup>

          </div>
          <div className="align-self-start">
          <ul className="list-unstyled">
              {
                this.thoByOneCol.map(num =>
                  <li
                    key={num.n}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} selected={this.state.selected} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
          </div>
        </div >
        <Calc selected={this.props.arr} number={this.props.num} />
      </React.Fragment>

    )
  }


}

export default RouletteTable;