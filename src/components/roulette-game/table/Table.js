import React from 'react';
import './Table.css';
import Chip from '../chips/Chips';

class RouletteTable extends React.Component {

  state = {
    nums: [],
    selected: false,
    numChildren: 0,
    currentNumber: 0,
    coins: this.props.coins,
    chip: this.props.chip
  }
/* 
  style = { "background": "red" } */


  componentDidMount() {

    this.numsSelectionHandler = (num) => { //selecting bets

      let nums = [...this.state.nums]; //spreading array of bets for furter use

      if (this.state.numChildren === 0) {
        this.props.updateChipVisibility(false); //update in roulette.js
      } else {
        this.props.updateChipVisibility(true); //update in roulette.js
      }

      if (nums.indexOf(num) >= 0) { //if number is present in array, deselect it

        nums.splice(nums.indexOf(num), 1);

        //nums.map(item => item === num ? this.setState({ selected: false }) : this.setState({ selected: true }))
        //this.setState({ selected: false }); 


        /* CHIPS HANDLING */

        this.setState({ numChildren: 0 }); //no chip on number

        /* END CHIPS HANDLING */

      } else if (nums.indexOf(num) === -1)  {


        
        this.setState({ selected: true });

        this.props.updateChipVisibility(true);

        nums.push(num);

        this.setState({
          numChildren: this.state.numChildren + 1
        });
      }

      /* ARRAY OF BETS HANDLING */
      this.setState({ nums: nums }, () => {
        this.props.updateArr(nums)
      })

      /* END ARRAY OF BETS HANDLING */

      /* COINS HANDLING */

      //calcolate coins
      let coins = this.state.coins - this.state.chip;

      //update coins in rulette
      this.setState({ coins: coins }, () => {
        this.props.updateCoins(coins)
      })

      /* END COINS HANDLING */
    }
  }



  zeroCol = [
    { n: "00", c: "green", className: "greens cella-z-top chip-container-cella-z" },
    { n: "", c: "", className: "space-z" },
    { n: "0", c: "green", className: "greens cella-z-bottom chip-container-cella-z" }]

  firstRow = [
    { n: "3", c: "red", className: "red cella chip-container-cella" },
    { n: ["3", "6"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "6", c: "black", className: "black cella chip-container-cella" },
    { n: ["6", "9"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "9", c: "red", className: "red cella chip-container-cella" },
    { n: ["9", "12"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "12", c: "red", className: "red cella chip-container-cella" },
    { n: ["12", "15"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "15", c: "black", className: "black cella chip-container-cella" },
    { n: ["15", "18"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "18", c: "red", className: "red cella chip-container-cella" },
    { n: ["18", "21"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "21", c: "red", className: "red cella chip-container-cella" },
    { n: ["21", "24"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "24", c: "black", className: "black cella chip-container-cella" },
    { n: ["24", "27"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "27", c: "red", className: "red cella chip-container-cella" },
    { n: ["27", "30"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "30", c: "red", className: "red cella chip-container-cella" },
    { n: ["30", "33"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "33", c: "black", className: "black cella chip-container-cella" },
    { n: ["33", "36"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "36", c: "red", className: "red cella chip-container-cella" }]

  firstAndSecondBorder = [
    { n: ["3", "2"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["2", "3", "5", "6"], c: "", className: "bet-space" },
    { n: ["6", "5"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["5", "6", "8", "9"], c: "", className: "bet-space" },
    { n: ["9", "8"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["8", "9", "11", "12"], c: "", className: "bet-space" },
    { n: ["12", "11"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["11", "12", "14", "15"], c: "", className: "bet-space" },
    { n: ["15", "14"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["14", "15", "17", "18"], c: "", className: "bet-space" },
    { n: ["18", "17"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["17", "18", "20", "21"], c: "", className: "bet-space" },
    { n: ["21", "20"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["20", "21", "23", "24"], c: "", className: "bet-space" },
    { n: ["24", "23"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["23", "24", "26", "27"], c: "", className: "bet-space" },
    { n: ["27", "26"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["26", "27", "29", "30"], c: "", className: "bet-space" },
    { n: ["30", "29"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["29", "30", "32", "33"], c: "", className: "bet-space" },
    { n: ["33", "32"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["32", "33", "35", "36"], c: "", className: "bet-space" },
    { n: ["36", "35"], c: "yellow", className: "bordo-h chip-container-bordo-h" }

  ]

  secondRow = [
    { n: "2", c: "black", className: "black cella chip-container-cella" },
    { n: ["2", "5"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "5", c: "red", className: "red cella chip-container-cella" },
    { n: ["5", "8"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "8", c: "black", className: "black cella chip-container-cella" },
    { n: ["8", "11"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "11", c: "black", className: "black cella chip-container-cella" },
    { n: ["11", "14"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "14", c: "red", className: "red cella chip-container-cella" },
    { n: ["14", "17"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "17", c: "black", className: "black cella chip-container-cella" },
    { n: ["17", "20"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "20", c: "black", className: "black cella chip-container-cella" },
    { n: ["20", "23"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "23", c: "red", className: "red cella chip-container-cella" },
    { n: ["23", "26"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "26", c: "black", className: "black cella chip-container-cella" },
    { n: ["26", "29"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "29", c: "black", className: "black cella chip-container-cella" },
    { n: ["29", "32"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "32", c: "red", className: "red cella chip-container-cella" },
    { n: ["32", "35"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "35", c: "black", className: "black cella chip-container-cella" }]

  secondAndThirdBorder = [
    { n: ["2", "1"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["1", "2", "4", "5"], c: "", className: "bet-space" },
    { n: ["5", "4"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["4", "5", "6", "8"], c: "", className: "bet-space" },
    { n: ["8", "7"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["7", "8", "10", "11"], c: "", className: "bet-space" },
    { n: ["11", "10"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["10", "11", "13", "14"], c: "", className: "bet-space" },
    { n: ["14", "13"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["13", "14", "16", "17"], c: "", className: "bet-space" },
    { n: ["17", "16"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["16", "17", "19", "20"], c: "", className: "bet-space" },
    { n: ["20", "19"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["19", "20", "22", "23"], c: "", className: "bet-space" },
    { n: ["23", "22"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["22", "23", "25", "26"], c: "", className: "bet-space" },
    { n: ["26", "25"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["25", "26", "28", "29"], c: "", className: "bet-space" },
    { n: ["29", "28"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["28", "29", "31", "32"], c: "", className: "bet-space" },
    { n: ["32", "31"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["31", "32", "34", "35"], c: "", className: "bet-space" },
    { n: ["35", "34"], c: "yellow", className: "bordo-h chip-container-bordo-h" }

  ]

  thirdRow = [
    { n: "1", c: "red", className: "red cella chip-container-cella" },
    { n: ["1", "4"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "4", c: "black", className: "black cella chip-container-cella" },
    { n: ["4", "7"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "7", c: "red", className: "red cella chip-container-cella" },
    { n: ["7", "10"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "10", c: "black", className: "black cella chip-container-cella" },
    { n: ["10", "13"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "13", c: "black", className: "black cella chip-container-cella" },
    { n: ["13, 16"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "16", c: "red", className: "red cella chip-container-cella" },
    { n: ["16", "19"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "19", c: "red", className: "red cella chip-container-cella" },
    { n: ["19", "22"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "22", c: "black", className: "black cella chip-container-cella" },
    { n: ["22", "25"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "25", c: "red", className: "red cella chip-container-cella" },
    { n: ["25", "28"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "28", c: "black", className: "black cella chip-container-cella" },
    { n: ["28", "31"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "31", c: "black", className: "black cella chip-container-cella" },
    { n: ["31", "24"], c: "yellow", className: "bordo chip-container-bordo" },
    { n: "34", c: "red", className: "red cella chip-container-cella" }]

  thirdBorder = [
    { n: ["1", "2", "3"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["1", "2", "3", "4", "5", "6"], c: "", className: "bet-space" },
    { n: ["4", "5", "6"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["4", "5", "6", "7", "8", "9"], c: "", className: "bet-space" },
    { n: ["7", "8", "9"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["7", "8", "9", "10", "11", "12"], c: "", className: "bet-space" },
    { n: ["10", "11", "12"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["10", "11", "12", "13", "14", "15"], c: "", className: "bet-space" },
    { n: ["13", "14", "15"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["13", "14", "15", "16", "17", "18"], c: "", className: "bet-space" },
    { n: ["16", "17", "18"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["16", "17", "18", "19", "20", "21"], c: "", className: "bet-space" },
    { n: ["19", "20", "21"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["19", "20", "21", "22", "23", "24"], c: "", className: "bet-space" },
    { n: ["22", "23", "24"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["22", "23", "24", "25", "26", "27"], c: "", className: "bet-space" },
    { n: ["25", "26", "27"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["25", "26", "27", "28", "29", "30"], c: "", className: "bet-space" },
    { n: ["28", "29", "30"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["28", "29", "30", "31", "32", "33"], c: "", className: "bet-space" },
    { n: ["31", "32", "33"], c: "yellow", className: "bordo-h chip-container-bordo-h" },
    { n: ["31", "32", "33", "34", "35", "36"], c: "", className: "bet-space" },
    { n: ["34", "3536"], c: "yellow", className: "bordo-h chip-container-bordo-h" }

  ]

  twoByOneCol = [
    { n: "2:1:1", c: "blue", className: "blues cella chip-container-cella" },
    { n: "", c: "", className: "space-2by1" },
    { n: "2:1:2", c: "blue", className: "blues cella chip-container-cella" },
    { n: "", c: "", className: "space-2by1" },
    { n: "2:1:3", c: "blue", className: "blues cella chip-container-cella" },
    { n: "", c: "", className: "space-2by1" }]

  fourtRow = [
    { n: "1st 12", c: "blue", className: "blues cella-fourth chip-container-cella-fourth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "2nd 12", c: "blue", className: "blues cella-fourth chip-container-cella-fourth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "3rd 12", c: "blue", className: "blues cella-fourth chip-container-cella-fourth" }]

  fifthRow = [
    { n: "1 to 18", c: "blue", className: "blues cella-fifth chip-container-cella-fifth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "Even", c: "blue", className: "blues cella-fifth chip-container-cella-fifth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "Red", c: "blue", className: "reds cella-fifth chip-container-cella-fifth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "Black", c: "blue", className: "blacks cella-fifth chip-container-cella-fifth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "Odd", c: "blue", className: "blues cella-fifth chip-container-cella-fifth" },
    { n: "", c: "", className: "space-fourth" },
    { n: "19 to 36", c: "blue", className: "blues cella-fifth chip-container-cella-fifth" }
  ]


  render() {

    return (
      <React.Fragment>
        <div className="d-flex flex-row ">
          <div className="align-self-start">
            <ul className="list-unstyled pt-6">
              {
                this.zeroCol.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
          </div>
          <div className="align-self-start">
            <div className="divider"></div>
            {/* First row */}
            <ul className="d-flex list-unstyled">
              {
                this.firstRow.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Between first and second rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.firstAndSecondBorder.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Second row */}
            <ul className="d-flex list-unstyled">
              {
                this.secondRow.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Between second and thirs rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.secondAndThirdBorder.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Third row */}
            <ul className="d-flex list-unstyled">
              {
                this.thirdRow.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            {/* Between second and thirs rows borders */}
            <ul className="d-flex list-unstyled">
              {
                this.thirdBorder.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>

            {/* Fourth row */}
            <ul className="d-flex list-unstyled">
              {
                this.fourtRow.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false} selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            <div className="divider"></div>
            {/* Fifth row */}
            <ul className="d-flex list-unstyled">
              {
                this.fifthRow.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
            <div className="divider"></div>
          </div>
          <div className="align-self-start">
            <div className="divider"></div>
            <ul className="list-unstyled">
              {
                this.twoByOneCol.map((num, index, arr) =>
                  <li
                    key={num.n + index + arr}
                    className={num.className}
                    value={num.n}
                    onClick={() => this.numsSelectionHandler(num.n)}>
                    {<Chip id={num.n} active={this.state.nums.includes(num.n) ? true : false}  selArr={[...this.state.nums]} />}
                  </li>)
              }
            </ul>
          </div>
        </div >
      </React.Fragment>

    )
  }


}

export default RouletteTable;



// componentDidMount() {

//   this.numsSelectionHandler = (num) => {

//     let nums = [...this.state.nums];



//     if (nums.indexOf(num) >= 0) {

//       nums.splice(nums.indexOf(num), 1);


//       /* CHIPS HANDLING */

//       this.setState({ numChildren: 0 }); //no chip on number

//       this.props.updateChipVisibility(false); //update in roulette.js

//       if (nums.indexOf(num) === -1) {
//         this.setState({ selected: false }); 
//       }

//       /* END CHIPS HANDLING */

//     } else if (nums.indexOf(num) === -1)  {

//       this.setState(prevState => ({ selected: !prevState.selected }));
//       this.setState({ selected: true });

//       this.setState({ selected: true });

//       this.props.updateChipVisibility(true);

//       nums.push(num);

//       this.setState({
//         numChildren: this.state.numChildren + 1
//       });
//     }

//     /* ARRAY OF BETS HANDLING */
//     this.setState({ nums: nums }, () => {
//       this.props.updateArr(nums)
//     })

//     /* END ARRAY OF BETS HANDLING */

//     /* COINS HANDLING */

//     //calcolate coins
//     let coins = this.state.coins - this.state.chip;

//     //update coins in rulette
//     this.setState({ coins: coins }, () => {
//       this.props.updateCoins(coins)
//     })

//     /* END COINS HANDLING */
//   }
// }